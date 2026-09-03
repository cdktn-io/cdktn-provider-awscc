# `elasticacheReplicationGroup` Submodule <a name="`elasticacheReplicationGroup` Submodule" id="@cdktn/provider-awscc.elasticacheReplicationGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticacheReplicationGroup <a name="ElasticacheReplicationGroup" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group awscc_elasticache_replication_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer"></a>

```python
from cdktn_provider_awscc import elasticache_replication_group

elasticacheReplicationGroup.ElasticacheReplicationGroup(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  replication_group_description: str,
  at_rest_encryption_enabled: bool | IResolvable = None,
  auth_token: str = None,
  automatic_failover_enabled: bool | IResolvable = None,
  auto_minor_version_upgrade: bool | IResolvable = None,
  cache_node_type: str = None,
  cache_parameter_group_name: str = None,
  cache_security_group_names: typing.List[str] = None,
  cache_subnet_group_name: str = None,
  cluster_mode: str = None,
  data_tiering_enabled: bool | IResolvable = None,
  durability: str = None,
  engine: str = None,
  engine_version: str = None,
  global_replication_group_id: str = None,
  ip_discovery: str = None,
  kms_key_id: str = None,
  log_delivery_configurations: IResolvable | typing.List[ElasticacheReplicationGroupLogDeliveryConfigurations] = None,
  multi_az_enabled: bool | IResolvable = None,
  network_type: str = None,
  node_group_configuration: IResolvable | typing.List[ElasticacheReplicationGroupNodeGroupConfiguration] = None,
  notification_topic_arn: str = None,
  num_cache_clusters: typing.Union[int, float] = None,
  num_node_groups: typing.Union[int, float] = None,
  port: typing.Union[int, float] = None,
  preferred_cache_cluster_a_zs: typing.List[str] = None,
  preferred_maintenance_window: str = None,
  primary_cluster_id: str = None,
  replicas_per_node_group: typing.Union[int, float] = None,
  replication_group_id: str = None,
  security_group_ids: typing.List[str] = None,
  snapshot_arns: typing.List[str] = None,
  snapshot_name: str = None,
  snapshot_retention_limit: typing.Union[int, float] = None,
  snapshotting_cluster_id: str = None,
  snapshot_window: str = None,
  tags: IResolvable | typing.List[ElasticacheReplicationGroupTags] = None,
  transit_encryption_enabled: bool | IResolvable = None,
  transit_encryption_mode: str = None,
  user_group_ids: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.replicationGroupDescription">replication_group_description</a></code> | <code>str</code> | A user-created description for the replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.atRestEncryptionEnabled">at_rest_encryption_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | A flag that enables encryption at rest when set to true.AtRestEncryptionEnabled after the replication group is created. To enable encryption at rest on a replication group you must set AtRestEncryptionEnabled to true when you create the replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.authToken">auth_token</a></code> | <code>str</code> | Reserved parameter. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.automaticFailoverEnabled">automatic_failover_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether a read-only replica is automatically promoted to read/write primary if the existing primary fails. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.autoMinorVersionUpgrade">auto_minor_version_upgrade</a></code> | <code>bool \| cdktn.IResolvable</code> | This parameter is currently disabled. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.cacheNodeType">cache_node_type</a></code> | <code>str</code> | The compute and memory capacity of the nodes in the node group (shard). |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.cacheParameterGroupName">cache_parameter_group_name</a></code> | <code>str</code> | The name of the parameter group to associate with this replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.cacheSecurityGroupNames">cache_security_group_names</a></code> | <code>typing.List[str]</code> | A list of cache security group names to associate with this replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.cacheSubnetGroupName">cache_subnet_group_name</a></code> | <code>str</code> | The name of the cache subnet group to be used for the replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.clusterMode">cluster_mode</a></code> | <code>str</code> | Enabled or Disabled. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.dataTieringEnabled">data_tiering_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Enables data tiering. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.durability">durability</a></code> | <code>str</code> | The durability setting for the replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.engine">engine</a></code> | <code>str</code> | The name of the cache engine to be used for the clusters in this replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.engineVersion">engine_version</a></code> | <code>str</code> | The version number of the cache engine to be used for the clusters in this replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.globalReplicationGroupId">global_replication_group_id</a></code> | <code>str</code> | The name of the Global datastore. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.ipDiscovery">ip_discovery</a></code> | <code>str</code> | The network type you choose when creating a replication group, either ipv4 \| ipv6. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The ID of the KMS key used to encrypt the disk on the cluster. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.logDeliveryConfigurations">log_delivery_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations">ElasticacheReplicationGroupLogDeliveryConfigurations</a>]</code> | Specifies the destination, format and type of the logs. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.multiAzEnabled">multi_az_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | A flag indicating if you have Multi-AZ enabled to enhance fault tolerance. For more information, see Minimizing Downtime: Multi-AZ. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.networkType">network_type</a></code> | <code>str</code> | Must be either ipv4 \| ipv6 \| dual_stack. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.nodeGroupConfiguration">node_group_configuration</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration">ElasticacheReplicationGroupNodeGroupConfiguration</a>]</code> | NodeGroupConfiguration is a property of the AWS::ElastiCache::ReplicationGroup resource that configures an Amazon ElastiCache (ElastiCache) Redis cluster node group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.notificationTopicArn">notification_topic_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.numCacheClusters">num_cache_clusters</a></code> | <code>typing.Union[int, float]</code> | The number of clusters this replication group initially has.This parameter is not used if there is more than one node group (shard). You should use ReplicasPerNodeGroup instead. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.numNodeGroups">num_node_groups</a></code> | <code>typing.Union[int, float]</code> | An optional parameter that specifies the number of node groups (shards) for this Redis (cluster mode enabled) replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | The port number on which each member of the replication group accepts connections. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.preferredCacheClusterAZs">preferred_cache_cluster_a_zs</a></code> | <code>typing.List[str]</code> | A list of EC2 Availability Zones in which the replication group's clusters are created. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.preferredMaintenanceWindow">preferred_maintenance_window</a></code> | <code>str</code> | Specifies the weekly time range during which maintenance on the cluster is performed. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.primaryClusterId">primary_cluster_id</a></code> | <code>str</code> | The identifier of the cluster that serves as the primary for this replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.replicasPerNodeGroup">replicas_per_node_group</a></code> | <code>typing.Union[int, float]</code> | An optional parameter that specifies the number of replica nodes in each node group (shard). |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.replicationGroupId">replication_group_id</a></code> | <code>str</code> | The replication group identifier. This parameter is stored as a lowercase string. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | One or more Amazon VPC security groups associated with this replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.snapshotArns">snapshot_arns</a></code> | <code>typing.List[str]</code> | A list of Amazon Resource Names (ARN) that uniquely identify the Redis RDB snapshot files stored in Amazon S3. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.snapshotName">snapshot_name</a></code> | <code>str</code> | The name of a snapshot from which to restore data into the new replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.snapshotRetentionLimit">snapshot_retention_limit</a></code> | <code>typing.Union[int, float]</code> | The number of days for which ElastiCache retains automatic snapshots before deleting them. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.snapshottingClusterId">snapshotting_cluster_id</a></code> | <code>str</code> | The cluster ID that is used as the daily snapshot source for the replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.snapshotWindow">snapshot_window</a></code> | <code>str</code> | The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your node group (shard). |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTags">ElasticacheReplicationGroupTags</a>]</code> | A list of cost allocation tags to be added to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.transitEncryptionEnabled">transit_encryption_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | A flag that enables in-transit encryption when set to true. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.transitEncryptionMode">transit_encryption_mode</a></code> | <code>str</code> | A setting that allows you to migrate your clients to use in-transit encryption, with no downtime. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.userGroupIds">user_group_ids</a></code> | <code>typing.List[str]</code> | The ID of user group to associate with the replication group. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `replication_group_description`<sup>Required</sup> <a name="replication_group_description" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.replicationGroupDescription"></a>

- *Type:* str

A user-created description for the replication group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#replication_group_description ElasticacheReplicationGroup#replication_group_description}

---

##### `at_rest_encryption_enabled`<sup>Optional</sup> <a name="at_rest_encryption_enabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.atRestEncryptionEnabled"></a>

- *Type:* bool | cdktn.IResolvable

A flag that enables encryption at rest when set to true.AtRestEncryptionEnabled after the replication group is created. To enable encryption at rest on a replication group you must set AtRestEncryptionEnabled to true when you create the replication group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#at_rest_encryption_enabled ElasticacheReplicationGroup#at_rest_encryption_enabled}

---

##### `auth_token`<sup>Optional</sup> <a name="auth_token" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.authToken"></a>

- *Type:* str

Reserved parameter.

The password used to access a password protected server.AuthToken can be specified only on replication groups where TransitEncryptionEnabled is true. For more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#auth_token ElasticacheReplicationGroup#auth_token}

---

##### `automatic_failover_enabled`<sup>Optional</sup> <a name="automatic_failover_enabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.automaticFailoverEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether a read-only replica is automatically promoted to read/write primary if the existing primary fails.

AutomaticFailoverEnabled must be enabled for Redis (cluster mode enabled) replication groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#automatic_failover_enabled ElasticacheReplicationGroup#automatic_failover_enabled}

---

##### `auto_minor_version_upgrade`<sup>Optional</sup> <a name="auto_minor_version_upgrade" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.autoMinorVersionUpgrade"></a>

- *Type:* bool | cdktn.IResolvable

This parameter is currently disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#auto_minor_version_upgrade ElasticacheReplicationGroup#auto_minor_version_upgrade}

---

##### `cache_node_type`<sup>Optional</sup> <a name="cache_node_type" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.cacheNodeType"></a>

- *Type:* str

The compute and memory capacity of the nodes in the node group (shard).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#cache_node_type ElasticacheReplicationGroup#cache_node_type}

---

##### `cache_parameter_group_name`<sup>Optional</sup> <a name="cache_parameter_group_name" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.cacheParameterGroupName"></a>

- *Type:* str

The name of the parameter group to associate with this replication group.

If this argument is omitted, the default cache parameter group for the specified engine is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#cache_parameter_group_name ElasticacheReplicationGroup#cache_parameter_group_name}

---

##### `cache_security_group_names`<sup>Optional</sup> <a name="cache_security_group_names" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.cacheSecurityGroupNames"></a>

- *Type:* typing.List[str]

A list of cache security group names to associate with this replication group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#cache_security_group_names ElasticacheReplicationGroup#cache_security_group_names}

---

##### `cache_subnet_group_name`<sup>Optional</sup> <a name="cache_subnet_group_name" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.cacheSubnetGroupName"></a>

- *Type:* str

The name of the cache subnet group to be used for the replication group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#cache_subnet_group_name ElasticacheReplicationGroup#cache_subnet_group_name}

---

##### `cluster_mode`<sup>Optional</sup> <a name="cluster_mode" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.clusterMode"></a>

- *Type:* str

Enabled or Disabled.

To modify cluster mode from Disabled to Enabled, you must first set the cluster mode to Compatible. Compatible mode allows your Redis OSS clients to connect using both cluster mode enabled and cluster mode disabled. After you migrate all Redis OSS clients to use cluster mode enabled, you can then complete cluster mode configuration and set the cluster mode to Enabled. For more information, see Modify cluster mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#cluster_mode ElasticacheReplicationGroup#cluster_mode}

---

##### `data_tiering_enabled`<sup>Optional</sup> <a name="data_tiering_enabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.dataTieringEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Enables data tiering.

Data tiering is only supported for replication groups using the r6gd node type. This parameter must be set to true when using r6gd nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#data_tiering_enabled ElasticacheReplicationGroup#data_tiering_enabled}

---

##### `durability`<sup>Optional</sup> <a name="durability" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.durability"></a>

- *Type:* str

The durability setting for the replication group.

Valid values: default, async, sync, disabled. Enabling durability on an existing non-durable cluster or disabling durability on an existing durable cluster is not currently supported and will result in an error; specify the desired durability at create time. The resolved state is returned in EffectiveDurability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#durability ElasticacheReplicationGroup#durability}

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.engine"></a>

- *Type:* str

The name of the cache engine to be used for the clusters in this replication group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#engine ElasticacheReplicationGroup#engine}

---

##### `engine_version`<sup>Optional</sup> <a name="engine_version" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.engineVersion"></a>

- *Type:* str

The version number of the cache engine to be used for the clusters in this replication group.

To view the supported cache engine versions, use the DescribeCacheEngineVersions operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#engine_version ElasticacheReplicationGroup#engine_version}

---

##### `global_replication_group_id`<sup>Optional</sup> <a name="global_replication_group_id" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.globalReplicationGroupId"></a>

- *Type:* str

The name of the Global datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#global_replication_group_id ElasticacheReplicationGroup#global_replication_group_id}

---

##### `ip_discovery`<sup>Optional</sup> <a name="ip_discovery" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.ipDiscovery"></a>

- *Type:* str

The network type you choose when creating a replication group, either ipv4 | ipv6.

IPv6 is supported for workloads using Redis OSS engine version 6.2 onward or Memcached engine version 1.6.6 on all instances built on the Nitro system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#ip_discovery ElasticacheReplicationGroup#ip_discovery}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

The ID of the KMS key used to encrypt the disk on the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#kms_key_id ElasticacheReplicationGroup#kms_key_id}

---

##### `log_delivery_configurations`<sup>Optional</sup> <a name="log_delivery_configurations" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.logDeliveryConfigurations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations">ElasticacheReplicationGroupLogDeliveryConfigurations</a>]

Specifies the destination, format and type of the logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#log_delivery_configurations ElasticacheReplicationGroup#log_delivery_configurations}

---

##### `multi_az_enabled`<sup>Optional</sup> <a name="multi_az_enabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.multiAzEnabled"></a>

- *Type:* bool | cdktn.IResolvable

A flag indicating if you have Multi-AZ enabled to enhance fault tolerance. For more information, see Minimizing Downtime: Multi-AZ.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#multi_az_enabled ElasticacheReplicationGroup#multi_az_enabled}

---

##### `network_type`<sup>Optional</sup> <a name="network_type" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.networkType"></a>

- *Type:* str

Must be either ipv4 | ipv6 | dual_stack.

IPv6 is supported for workloads using Redis OSS engine version 6.2 onward or Memcached engine version 1.6.6 on all instances built on the Nitro system

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#network_type ElasticacheReplicationGroup#network_type}

---

##### `node_group_configuration`<sup>Optional</sup> <a name="node_group_configuration" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.nodeGroupConfiguration"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration">ElasticacheReplicationGroupNodeGroupConfiguration</a>]

NodeGroupConfiguration is a property of the AWS::ElastiCache::ReplicationGroup resource that configures an Amazon ElastiCache (ElastiCache) Redis cluster node group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#node_group_configuration ElasticacheReplicationGroup#node_group_configuration}

---

##### `notification_topic_arn`<sup>Optional</sup> <a name="notification_topic_arn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.notificationTopicArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#notification_topic_arn ElasticacheReplicationGroup#notification_topic_arn}

---

##### `num_cache_clusters`<sup>Optional</sup> <a name="num_cache_clusters" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.numCacheClusters"></a>

- *Type:* typing.Union[int, float]

The number of clusters this replication group initially has.This parameter is not used if there is more than one node group (shard). You should use ReplicasPerNodeGroup instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#num_cache_clusters ElasticacheReplicationGroup#num_cache_clusters}

---

##### `num_node_groups`<sup>Optional</sup> <a name="num_node_groups" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.numNodeGroups"></a>

- *Type:* typing.Union[int, float]

An optional parameter that specifies the number of node groups (shards) for this Redis (cluster mode enabled) replication group.

For Redis (cluster mode disabled) either omit this parameter or set it to 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#num_node_groups ElasticacheReplicationGroup#num_node_groups}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

The port number on which each member of the replication group accepts connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#port ElasticacheReplicationGroup#port}

---

##### `preferred_cache_cluster_a_zs`<sup>Optional</sup> <a name="preferred_cache_cluster_a_zs" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.preferredCacheClusterAZs"></a>

- *Type:* typing.List[str]

A list of EC2 Availability Zones in which the replication group's clusters are created.

The order of the Availability Zones in the list is the order in which clusters are allocated. The primary cluster is created in the first AZ in the list. This parameter is not used if there is more than one node group (shard). You should use NodeGroupConfiguration instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#preferred_cache_cluster_a_zs ElasticacheReplicationGroup#preferred_cache_cluster_a_zs}

---

##### `preferred_maintenance_window`<sup>Optional</sup> <a name="preferred_maintenance_window" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.preferredMaintenanceWindow"></a>

- *Type:* str

Specifies the weekly time range during which maintenance on the cluster is performed.

It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#preferred_maintenance_window ElasticacheReplicationGroup#preferred_maintenance_window}

---

##### `primary_cluster_id`<sup>Optional</sup> <a name="primary_cluster_id" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.primaryClusterId"></a>

- *Type:* str

The identifier of the cluster that serves as the primary for this replication group.

This cluster must already exist and have a status of available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#primary_cluster_id ElasticacheReplicationGroup#primary_cluster_id}

---

##### `replicas_per_node_group`<sup>Optional</sup> <a name="replicas_per_node_group" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.replicasPerNodeGroup"></a>

- *Type:* typing.Union[int, float]

An optional parameter that specifies the number of replica nodes in each node group (shard).

Valid values are 0 to 5.

**Note:** Using ReplicasPerNodeGroup with NodeGroupConfiguration results in resource replacement. For online scaling, use ReplicasPerNodeGroup alone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#replicas_per_node_group ElasticacheReplicationGroup#replicas_per_node_group}

---

##### `replication_group_id`<sup>Optional</sup> <a name="replication_group_id" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.replicationGroupId"></a>

- *Type:* str

The replication group identifier. This parameter is stored as a lowercase string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#replication_group_id ElasticacheReplicationGroup#replication_group_id}

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

One or more Amazon VPC security groups associated with this replication group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#security_group_ids ElasticacheReplicationGroup#security_group_ids}

---

##### `snapshot_arns`<sup>Optional</sup> <a name="snapshot_arns" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.snapshotArns"></a>

- *Type:* typing.List[str]

A list of Amazon Resource Names (ARN) that uniquely identify the Redis RDB snapshot files stored in Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#snapshot_arns ElasticacheReplicationGroup#snapshot_arns}

---

##### `snapshot_name`<sup>Optional</sup> <a name="snapshot_name" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.snapshotName"></a>

- *Type:* str

The name of a snapshot from which to restore data into the new replication group.

The snapshot status changes to restoring while the new replication group is being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#snapshot_name ElasticacheReplicationGroup#snapshot_name}

---

##### `snapshot_retention_limit`<sup>Optional</sup> <a name="snapshot_retention_limit" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.snapshotRetentionLimit"></a>

- *Type:* typing.Union[int, float]

The number of days for which ElastiCache retains automatic snapshots before deleting them.

For example, if you set SnapshotRetentionLimit to 5, a snapshot that was taken today is retained for 5 days before being deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#snapshot_retention_limit ElasticacheReplicationGroup#snapshot_retention_limit}

---

##### `snapshotting_cluster_id`<sup>Optional</sup> <a name="snapshotting_cluster_id" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.snapshottingClusterId"></a>

- *Type:* str

The cluster ID that is used as the daily snapshot source for the replication group.

This parameter cannot be set for Redis (cluster mode enabled) replication groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#snapshotting_cluster_id ElasticacheReplicationGroup#snapshotting_cluster_id}

---

##### `snapshot_window`<sup>Optional</sup> <a name="snapshot_window" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.snapshotWindow"></a>

- *Type:* str

The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your node group (shard).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#snapshot_window ElasticacheReplicationGroup#snapshot_window}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTags">ElasticacheReplicationGroupTags</a>]

A list of cost allocation tags to be added to this resource.

Tags are comma-separated key,value pairs (e.g. Key=myKey, Value=myKeyValue. You can include multiple tags as shown following: Key=myKey, Value=myKeyValue Key=mySecondKey, Value=mySecondKeyValue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#tags ElasticacheReplicationGroup#tags}

---

##### `transit_encryption_enabled`<sup>Optional</sup> <a name="transit_encryption_enabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.transitEncryptionEnabled"></a>

- *Type:* bool | cdktn.IResolvable

A flag that enables in-transit encryption when set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#transit_encryption_enabled ElasticacheReplicationGroup#transit_encryption_enabled}

---

##### `transit_encryption_mode`<sup>Optional</sup> <a name="transit_encryption_mode" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.transitEncryptionMode"></a>

- *Type:* str

A setting that allows you to migrate your clients to use in-transit encryption, with no downtime.

When setting TransitEncryptionEnabled to true, you can set your TransitEncryptionMode to preferred in the same request, to allow both encrypted and unencrypted connections at the same time. Once you migrate all your Redis OSS clients to use encrypted connections you can modify the value to required to allow encrypted connections only. Setting TransitEncryptionMode to required is a two-step process that requires you to first set the TransitEncryptionMode to preferred, after that you can set TransitEncryptionMode to required. This process will not trigger the replacement of the replication group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#transit_encryption_mode ElasticacheReplicationGroup#transit_encryption_mode}

---

##### `user_group_ids`<sup>Optional</sup> <a name="user_group_ids" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.userGroupIds"></a>

- *Type:* typing.List[str]

The ID of user group to associate with the replication group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#user_group_ids ElasticacheReplicationGroup#user_group_ids}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.putLogDeliveryConfigurations">put_log_delivery_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.putNodeGroupConfiguration">put_node_group_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAtRestEncryptionEnabled">reset_at_rest_encryption_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAuthToken">reset_auth_token</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAutomaticFailoverEnabled">reset_automatic_failover_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAutoMinorVersionUpgrade">reset_auto_minor_version_upgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetCacheNodeType">reset_cache_node_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetCacheParameterGroupName">reset_cache_parameter_group_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetCacheSecurityGroupNames">reset_cache_security_group_names</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetCacheSubnetGroupName">reset_cache_subnet_group_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetClusterMode">reset_cluster_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetDataTieringEnabled">reset_data_tiering_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetDurability">reset_durability</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetEngine">reset_engine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetEngineVersion">reset_engine_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetGlobalReplicationGroupId">reset_global_replication_group_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetIpDiscovery">reset_ip_discovery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetLogDeliveryConfigurations">reset_log_delivery_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetMultiAzEnabled">reset_multi_az_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNetworkType">reset_network_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNodeGroupConfiguration">reset_node_group_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNotificationTopicArn">reset_notification_topic_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNumCacheClusters">reset_num_cache_clusters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNumNodeGroups">reset_num_node_groups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetPreferredCacheClusterAZs">reset_preferred_cache_cluster_a_zs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetPreferredMaintenanceWindow">reset_preferred_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetPrimaryClusterId">reset_primary_cluster_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetReplicasPerNodeGroup">reset_replicas_per_node_group</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetReplicationGroupId">reset_replication_group_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshotArns">reset_snapshot_arns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshotName">reset_snapshot_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshotRetentionLimit">reset_snapshot_retention_limit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshottingClusterId">reset_snapshotting_cluster_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshotWindow">reset_snapshot_window</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetTransitEncryptionEnabled">reset_transit_encryption_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetTransitEncryptionMode">reset_transit_encryption_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetUserGroupIds">reset_user_group_ids</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_log_delivery_configurations` <a name="put_log_delivery_configurations" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.putLogDeliveryConfigurations"></a>

```python
def put_log_delivery_configurations(
  value: IResolvable | typing.List[ElasticacheReplicationGroupLogDeliveryConfigurations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.putLogDeliveryConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations">ElasticacheReplicationGroupLogDeliveryConfigurations</a>]

---

##### `put_node_group_configuration` <a name="put_node_group_configuration" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.putNodeGroupConfiguration"></a>

```python
def put_node_group_configuration(
  value: IResolvable | typing.List[ElasticacheReplicationGroupNodeGroupConfiguration]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.putNodeGroupConfiguration.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration">ElasticacheReplicationGroupNodeGroupConfiguration</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ElasticacheReplicationGroupTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTags">ElasticacheReplicationGroupTags</a>]

---

##### `reset_at_rest_encryption_enabled` <a name="reset_at_rest_encryption_enabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAtRestEncryptionEnabled"></a>

```python
def reset_at_rest_encryption_enabled() -> None
```

##### `reset_auth_token` <a name="reset_auth_token" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAuthToken"></a>

```python
def reset_auth_token() -> None
```

##### `reset_automatic_failover_enabled` <a name="reset_automatic_failover_enabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAutomaticFailoverEnabled"></a>

```python
def reset_automatic_failover_enabled() -> None
```

##### `reset_auto_minor_version_upgrade` <a name="reset_auto_minor_version_upgrade" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAutoMinorVersionUpgrade"></a>

```python
def reset_auto_minor_version_upgrade() -> None
```

##### `reset_cache_node_type` <a name="reset_cache_node_type" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetCacheNodeType"></a>

```python
def reset_cache_node_type() -> None
```

##### `reset_cache_parameter_group_name` <a name="reset_cache_parameter_group_name" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetCacheParameterGroupName"></a>

```python
def reset_cache_parameter_group_name() -> None
```

##### `reset_cache_security_group_names` <a name="reset_cache_security_group_names" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetCacheSecurityGroupNames"></a>

```python
def reset_cache_security_group_names() -> None
```

##### `reset_cache_subnet_group_name` <a name="reset_cache_subnet_group_name" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetCacheSubnetGroupName"></a>

```python
def reset_cache_subnet_group_name() -> None
```

##### `reset_cluster_mode` <a name="reset_cluster_mode" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetClusterMode"></a>

```python
def reset_cluster_mode() -> None
```

##### `reset_data_tiering_enabled` <a name="reset_data_tiering_enabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetDataTieringEnabled"></a>

```python
def reset_data_tiering_enabled() -> None
```

##### `reset_durability` <a name="reset_durability" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetDurability"></a>

```python
def reset_durability() -> None
```

##### `reset_engine` <a name="reset_engine" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetEngine"></a>

```python
def reset_engine() -> None
```

##### `reset_engine_version` <a name="reset_engine_version" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetEngineVersion"></a>

```python
def reset_engine_version() -> None
```

##### `reset_global_replication_group_id` <a name="reset_global_replication_group_id" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetGlobalReplicationGroupId"></a>

```python
def reset_global_replication_group_id() -> None
```

##### `reset_ip_discovery` <a name="reset_ip_discovery" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetIpDiscovery"></a>

```python
def reset_ip_discovery() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_log_delivery_configurations` <a name="reset_log_delivery_configurations" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetLogDeliveryConfigurations"></a>

```python
def reset_log_delivery_configurations() -> None
```

##### `reset_multi_az_enabled` <a name="reset_multi_az_enabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetMultiAzEnabled"></a>

```python
def reset_multi_az_enabled() -> None
```

##### `reset_network_type` <a name="reset_network_type" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNetworkType"></a>

```python
def reset_network_type() -> None
```

##### `reset_node_group_configuration` <a name="reset_node_group_configuration" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNodeGroupConfiguration"></a>

```python
def reset_node_group_configuration() -> None
```

##### `reset_notification_topic_arn` <a name="reset_notification_topic_arn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNotificationTopicArn"></a>

```python
def reset_notification_topic_arn() -> None
```

##### `reset_num_cache_clusters` <a name="reset_num_cache_clusters" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNumCacheClusters"></a>

```python
def reset_num_cache_clusters() -> None
```

##### `reset_num_node_groups` <a name="reset_num_node_groups" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNumNodeGroups"></a>

```python
def reset_num_node_groups() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_preferred_cache_cluster_a_zs` <a name="reset_preferred_cache_cluster_a_zs" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetPreferredCacheClusterAZs"></a>

```python
def reset_preferred_cache_cluster_a_zs() -> None
```

##### `reset_preferred_maintenance_window` <a name="reset_preferred_maintenance_window" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetPreferredMaintenanceWindow"></a>

```python
def reset_preferred_maintenance_window() -> None
```

##### `reset_primary_cluster_id` <a name="reset_primary_cluster_id" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetPrimaryClusterId"></a>

```python
def reset_primary_cluster_id() -> None
```

##### `reset_replicas_per_node_group` <a name="reset_replicas_per_node_group" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetReplicasPerNodeGroup"></a>

```python
def reset_replicas_per_node_group() -> None
```

##### `reset_replication_group_id` <a name="reset_replication_group_id" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetReplicationGroupId"></a>

```python
def reset_replication_group_id() -> None
```

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_snapshot_arns` <a name="reset_snapshot_arns" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshotArns"></a>

```python
def reset_snapshot_arns() -> None
```

##### `reset_snapshot_name` <a name="reset_snapshot_name" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshotName"></a>

```python
def reset_snapshot_name() -> None
```

##### `reset_snapshot_retention_limit` <a name="reset_snapshot_retention_limit" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshotRetentionLimit"></a>

```python
def reset_snapshot_retention_limit() -> None
```

##### `reset_snapshotting_cluster_id` <a name="reset_snapshotting_cluster_id" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshottingClusterId"></a>

```python
def reset_snapshotting_cluster_id() -> None
```

##### `reset_snapshot_window` <a name="reset_snapshot_window" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshotWindow"></a>

```python
def reset_snapshot_window() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_transit_encryption_enabled` <a name="reset_transit_encryption_enabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetTransitEncryptionEnabled"></a>

```python
def reset_transit_encryption_enabled() -> None
```

##### `reset_transit_encryption_mode` <a name="reset_transit_encryption_mode" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetTransitEncryptionMode"></a>

```python
def reset_transit_encryption_mode() -> None
```

##### `reset_user_group_ids` <a name="reset_user_group_ids" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetUserGroupIds"></a>

```python
def reset_user_group_ids() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ElasticacheReplicationGroup resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.isConstruct"></a>

```python
from cdktn_provider_awscc import elasticache_replication_group

elasticacheReplicationGroup.ElasticacheReplicationGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.isTerraformElement"></a>

```python
from cdktn_provider_awscc import elasticache_replication_group

elasticacheReplicationGroup.ElasticacheReplicationGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.isTerraformResource"></a>

```python
from cdktn_provider_awscc import elasticache_replication_group

elasticacheReplicationGroup.ElasticacheReplicationGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import elasticache_replication_group

elasticacheReplicationGroup.ElasticacheReplicationGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ElasticacheReplicationGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ElasticacheReplicationGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ElasticacheReplicationGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ElasticacheReplicationGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.configurationEndPoint">configuration_end_point</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference">ElasticacheReplicationGroupConfigurationEndPointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.effectiveDurability">effective_durability</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.logDeliveryConfigurations">log_delivery_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList">ElasticacheReplicationGroupLogDeliveryConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.nodeGroupConfiguration">node_group_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList">ElasticacheReplicationGroupNodeGroupConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.primaryEndPoint">primary_end_point</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference">ElasticacheReplicationGroupPrimaryEndPointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.readEndPoint">read_end_point</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference">ElasticacheReplicationGroupReadEndPointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.readerEndPoint">reader_end_point</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference">ElasticacheReplicationGroupReaderEndPointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList">ElasticacheReplicationGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.atRestEncryptionEnabledInput">at_rest_encryption_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.authTokenInput">auth_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.automaticFailoverEnabledInput">automatic_failover_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.autoMinorVersionUpgradeInput">auto_minor_version_upgrade_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheNodeTypeInput">cache_node_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheParameterGroupNameInput">cache_parameter_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheSecurityGroupNamesInput">cache_security_group_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheSubnetGroupNameInput">cache_subnet_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.clusterModeInput">cluster_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.dataTieringEnabledInput">data_tiering_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.durabilityInput">durability_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engineInput">engine_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engineVersionInput">engine_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.globalReplicationGroupIdInput">global_replication_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.ipDiscoveryInput">ip_discovery_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.logDeliveryConfigurationsInput">log_delivery_configurations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations">ElasticacheReplicationGroupLogDeliveryConfigurations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.multiAzEnabledInput">multi_az_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.networkTypeInput">network_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.nodeGroupConfigurationInput">node_group_configuration_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration">ElasticacheReplicationGroupNodeGroupConfiguration</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.notificationTopicArnInput">notification_topic_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numCacheClustersInput">num_cache_clusters_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numNodeGroupsInput">num_node_groups_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.preferredCacheClusterAZsInput">preferred_cache_cluster_a_zs_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.preferredMaintenanceWindowInput">preferred_maintenance_window_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.primaryClusterIdInput">primary_cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicasPerNodeGroupInput">replicas_per_node_group_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicationGroupDescriptionInput">replication_group_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicationGroupIdInput">replication_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotArnsInput">snapshot_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotNameInput">snapshot_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotRetentionLimitInput">snapshot_retention_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshottingClusterIdInput">snapshotting_cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotWindowInput">snapshot_window_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTags">ElasticacheReplicationGroupTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.transitEncryptionEnabledInput">transit_encryption_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.transitEncryptionModeInput">transit_encryption_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.userGroupIdsInput">user_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.atRestEncryptionEnabled">at_rest_encryption_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.authToken">auth_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.automaticFailoverEnabled">automatic_failover_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.autoMinorVersionUpgrade">auto_minor_version_upgrade</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheNodeType">cache_node_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheParameterGroupName">cache_parameter_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheSecurityGroupNames">cache_security_group_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheSubnetGroupName">cache_subnet_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.clusterMode">cluster_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.dataTieringEnabled">data_tiering_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.durability">durability</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engine">engine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engineVersion">engine_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.globalReplicationGroupId">global_replication_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.ipDiscovery">ip_discovery</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.multiAzEnabled">multi_az_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.networkType">network_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.notificationTopicArn">notification_topic_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numCacheClusters">num_cache_clusters</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numNodeGroups">num_node_groups</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.preferredCacheClusterAZs">preferred_cache_cluster_a_zs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.preferredMaintenanceWindow">preferred_maintenance_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.primaryClusterId">primary_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicasPerNodeGroup">replicas_per_node_group</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicationGroupDescription">replication_group_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicationGroupId">replication_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotArns">snapshot_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotName">snapshot_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotRetentionLimit">snapshot_retention_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshottingClusterId">snapshotting_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotWindow">snapshot_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.transitEncryptionEnabled">transit_encryption_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.transitEncryptionMode">transit_encryption_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.userGroupIds">user_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `configuration_end_point`<sup>Required</sup> <a name="configuration_end_point" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.configurationEndPoint"></a>

```python
configuration_end_point: ElasticacheReplicationGroupConfigurationEndPointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference">ElasticacheReplicationGroupConfigurationEndPointOutputReference</a>

---

##### `effective_durability`<sup>Required</sup> <a name="effective_durability" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.effectiveDurability"></a>

```python
effective_durability: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `log_delivery_configurations`<sup>Required</sup> <a name="log_delivery_configurations" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.logDeliveryConfigurations"></a>

```python
log_delivery_configurations: ElasticacheReplicationGroupLogDeliveryConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList">ElasticacheReplicationGroupLogDeliveryConfigurationsList</a>

---

##### `node_group_configuration`<sup>Required</sup> <a name="node_group_configuration" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.nodeGroupConfiguration"></a>

```python
node_group_configuration: ElasticacheReplicationGroupNodeGroupConfigurationList
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList">ElasticacheReplicationGroupNodeGroupConfigurationList</a>

---

##### `primary_end_point`<sup>Required</sup> <a name="primary_end_point" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.primaryEndPoint"></a>

```python
primary_end_point: ElasticacheReplicationGroupPrimaryEndPointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference">ElasticacheReplicationGroupPrimaryEndPointOutputReference</a>

---

##### `read_end_point`<sup>Required</sup> <a name="read_end_point" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.readEndPoint"></a>

```python
read_end_point: ElasticacheReplicationGroupReadEndPointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference">ElasticacheReplicationGroupReadEndPointOutputReference</a>

---

##### `reader_end_point`<sup>Required</sup> <a name="reader_end_point" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.readerEndPoint"></a>

```python
reader_end_point: ElasticacheReplicationGroupReaderEndPointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference">ElasticacheReplicationGroupReaderEndPointOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.tags"></a>

```python
tags: ElasticacheReplicationGroupTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList">ElasticacheReplicationGroupTagsList</a>

---

##### `at_rest_encryption_enabled_input`<sup>Optional</sup> <a name="at_rest_encryption_enabled_input" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.atRestEncryptionEnabledInput"></a>

```python
at_rest_encryption_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `auth_token_input`<sup>Optional</sup> <a name="auth_token_input" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.authTokenInput"></a>

```python
auth_token_input: str
```

- *Type:* str

---

##### `automatic_failover_enabled_input`<sup>Optional</sup> <a name="automatic_failover_enabled_input" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.automaticFailoverEnabledInput"></a>

```python
automatic_failover_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `auto_minor_version_upgrade_input`<sup>Optional</sup> <a name="auto_minor_version_upgrade_input" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.autoMinorVersionUpgradeInput"></a>

```python
auto_minor_version_upgrade_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `cache_node_type_input`<sup>Optional</sup> <a name="cache_node_type_input" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheNodeTypeInput"></a>

```python
cache_node_type_input: str
```

- *Type:* str

---

##### `cache_parameter_group_name_input`<sup>Optional</sup> <a name="cache_parameter_group_name_input" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheParameterGroupNameInput"></a>

```python
cache_parameter_group_name_input: str
```

- *Type:* str

---

##### `cache_security_group_names_input`<sup>Optional</sup> <a name="cache_security_group_names_input" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheSecurityGroupNamesInput"></a>

```python
cache_security_group_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cache_subnet_group_name_input`<sup>Optional</sup> <a name="cache_subnet_group_name_input" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheSubnetGroupNameInput"></a>

```python
cache_subnet_group_name_input: str
```

- *Type:* str

---

##### `cluster_mode_input`<sup>Optional</sup> <a name="cluster_mode_input" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.clusterModeInput"></a>

```python
cluster_mode_input: str
```

- *Type:* str

---

##### `data_tiering_enabled_input`<sup>Optional</sup> <a name="data_tiering_enabled_input" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.dataTieringEnabledInput"></a>

```python
data_tiering_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `durability_input`<sup>Optional</sup> <a name="durability_input" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.durabilityInput"></a>

```python
durability_input: str
```

- *Type:* str

---

##### `engine_input`<sup>Optional</sup> <a name="engine_input" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engineInput"></a>

```python
engine_input: str
```

- *Type:* str

---

##### `engine_version_input`<sup>Optional</sup> <a name="engine_version_input" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engineVersionInput"></a>

```python
engine_version_input: str
```

- *Type:* str

---

##### `global_replication_group_id_input`<sup>Optional</sup> <a name="global_replication_group_id_input" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.globalReplicationGroupIdInput"></a>

```python
global_replication_group_id_input: str
```

- *Type:* str

---

##### `ip_discovery_input`<sup>Optional</sup> <a name="ip_discovery_input" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.ipDiscoveryInput"></a>

```python
ip_discovery_input: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `log_delivery_configurations_input`<sup>Optional</sup> <a name="log_delivery_configurations_input" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.logDeliveryConfigurationsInput"></a>

```python
log_delivery_configurations_input: IResolvable | typing.List[ElasticacheReplicationGroupLogDeliveryConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations">ElasticacheReplicationGroupLogDeliveryConfigurations</a>]

---

##### `multi_az_enabled_input`<sup>Optional</sup> <a name="multi_az_enabled_input" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.multiAzEnabledInput"></a>

```python
multi_az_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `network_type_input`<sup>Optional</sup> <a name="network_type_input" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.networkTypeInput"></a>

```python
network_type_input: str
```

- *Type:* str

---

##### `node_group_configuration_input`<sup>Optional</sup> <a name="node_group_configuration_input" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.nodeGroupConfigurationInput"></a>

```python
node_group_configuration_input: IResolvable | typing.List[ElasticacheReplicationGroupNodeGroupConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration">ElasticacheReplicationGroupNodeGroupConfiguration</a>]

---

##### `notification_topic_arn_input`<sup>Optional</sup> <a name="notification_topic_arn_input" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.notificationTopicArnInput"></a>

```python
notification_topic_arn_input: str
```

- *Type:* str

---

##### `num_cache_clusters_input`<sup>Optional</sup> <a name="num_cache_clusters_input" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numCacheClustersInput"></a>

```python
num_cache_clusters_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `num_node_groups_input`<sup>Optional</sup> <a name="num_node_groups_input" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numNodeGroupsInput"></a>

```python
num_node_groups_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `preferred_cache_cluster_a_zs_input`<sup>Optional</sup> <a name="preferred_cache_cluster_a_zs_input" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.preferredCacheClusterAZsInput"></a>

```python
preferred_cache_cluster_a_zs_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `preferred_maintenance_window_input`<sup>Optional</sup> <a name="preferred_maintenance_window_input" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.preferredMaintenanceWindowInput"></a>

```python
preferred_maintenance_window_input: str
```

- *Type:* str

---

##### `primary_cluster_id_input`<sup>Optional</sup> <a name="primary_cluster_id_input" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.primaryClusterIdInput"></a>

```python
primary_cluster_id_input: str
```

- *Type:* str

---

##### `replicas_per_node_group_input`<sup>Optional</sup> <a name="replicas_per_node_group_input" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicasPerNodeGroupInput"></a>

```python
replicas_per_node_group_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `replication_group_description_input`<sup>Optional</sup> <a name="replication_group_description_input" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicationGroupDescriptionInput"></a>

```python
replication_group_description_input: str
```

- *Type:* str

---

##### `replication_group_id_input`<sup>Optional</sup> <a name="replication_group_id_input" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicationGroupIdInput"></a>

```python
replication_group_id_input: str
```

- *Type:* str

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `snapshot_arns_input`<sup>Optional</sup> <a name="snapshot_arns_input" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotArnsInput"></a>

```python
snapshot_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `snapshot_name_input`<sup>Optional</sup> <a name="snapshot_name_input" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotNameInput"></a>

```python
snapshot_name_input: str
```

- *Type:* str

---

##### `snapshot_retention_limit_input`<sup>Optional</sup> <a name="snapshot_retention_limit_input" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotRetentionLimitInput"></a>

```python
snapshot_retention_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshotting_cluster_id_input`<sup>Optional</sup> <a name="snapshotting_cluster_id_input" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshottingClusterIdInput"></a>

```python
snapshotting_cluster_id_input: str
```

- *Type:* str

---

##### `snapshot_window_input`<sup>Optional</sup> <a name="snapshot_window_input" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotWindowInput"></a>

```python
snapshot_window_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ElasticacheReplicationGroupTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTags">ElasticacheReplicationGroupTags</a>]

---

##### `transit_encryption_enabled_input`<sup>Optional</sup> <a name="transit_encryption_enabled_input" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.transitEncryptionEnabledInput"></a>

```python
transit_encryption_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `transit_encryption_mode_input`<sup>Optional</sup> <a name="transit_encryption_mode_input" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.transitEncryptionModeInput"></a>

```python
transit_encryption_mode_input: str
```

- *Type:* str

---

##### `user_group_ids_input`<sup>Optional</sup> <a name="user_group_ids_input" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.userGroupIdsInput"></a>

```python
user_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `at_rest_encryption_enabled`<sup>Required</sup> <a name="at_rest_encryption_enabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.atRestEncryptionEnabled"></a>

```python
at_rest_encryption_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `auth_token`<sup>Required</sup> <a name="auth_token" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.authToken"></a>

```python
auth_token: str
```

- *Type:* str

---

##### `automatic_failover_enabled`<sup>Required</sup> <a name="automatic_failover_enabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.automaticFailoverEnabled"></a>

```python
automatic_failover_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `auto_minor_version_upgrade`<sup>Required</sup> <a name="auto_minor_version_upgrade" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.autoMinorVersionUpgrade"></a>

```python
auto_minor_version_upgrade: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `cache_node_type`<sup>Required</sup> <a name="cache_node_type" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheNodeType"></a>

```python
cache_node_type: str
```

- *Type:* str

---

##### `cache_parameter_group_name`<sup>Required</sup> <a name="cache_parameter_group_name" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheParameterGroupName"></a>

```python
cache_parameter_group_name: str
```

- *Type:* str

---

##### `cache_security_group_names`<sup>Required</sup> <a name="cache_security_group_names" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheSecurityGroupNames"></a>

```python
cache_security_group_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cache_subnet_group_name`<sup>Required</sup> <a name="cache_subnet_group_name" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheSubnetGroupName"></a>

```python
cache_subnet_group_name: str
```

- *Type:* str

---

##### `cluster_mode`<sup>Required</sup> <a name="cluster_mode" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.clusterMode"></a>

```python
cluster_mode: str
```

- *Type:* str

---

##### `data_tiering_enabled`<sup>Required</sup> <a name="data_tiering_enabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.dataTieringEnabled"></a>

```python
data_tiering_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `durability`<sup>Required</sup> <a name="durability" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.durability"></a>

```python
durability: str
```

- *Type:* str

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engine"></a>

```python
engine: str
```

- *Type:* str

---

##### `engine_version`<sup>Required</sup> <a name="engine_version" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

---

##### `global_replication_group_id`<sup>Required</sup> <a name="global_replication_group_id" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.globalReplicationGroupId"></a>

```python
global_replication_group_id: str
```

- *Type:* str

---

##### `ip_discovery`<sup>Required</sup> <a name="ip_discovery" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.ipDiscovery"></a>

```python
ip_discovery: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `multi_az_enabled`<sup>Required</sup> <a name="multi_az_enabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.multiAzEnabled"></a>

```python
multi_az_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `network_type`<sup>Required</sup> <a name="network_type" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.networkType"></a>

```python
network_type: str
```

- *Type:* str

---

##### `notification_topic_arn`<sup>Required</sup> <a name="notification_topic_arn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.notificationTopicArn"></a>

```python
notification_topic_arn: str
```

- *Type:* str

---

##### `num_cache_clusters`<sup>Required</sup> <a name="num_cache_clusters" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numCacheClusters"></a>

```python
num_cache_clusters: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `num_node_groups`<sup>Required</sup> <a name="num_node_groups" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numNodeGroups"></a>

```python
num_node_groups: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `preferred_cache_cluster_a_zs`<sup>Required</sup> <a name="preferred_cache_cluster_a_zs" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.preferredCacheClusterAZs"></a>

```python
preferred_cache_cluster_a_zs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `preferred_maintenance_window`<sup>Required</sup> <a name="preferred_maintenance_window" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.preferredMaintenanceWindow"></a>

```python
preferred_maintenance_window: str
```

- *Type:* str

---

##### `primary_cluster_id`<sup>Required</sup> <a name="primary_cluster_id" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.primaryClusterId"></a>

```python
primary_cluster_id: str
```

- *Type:* str

---

##### `replicas_per_node_group`<sup>Required</sup> <a name="replicas_per_node_group" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicasPerNodeGroup"></a>

```python
replicas_per_node_group: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `replication_group_description`<sup>Required</sup> <a name="replication_group_description" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicationGroupDescription"></a>

```python
replication_group_description: str
```

- *Type:* str

---

##### `replication_group_id`<sup>Required</sup> <a name="replication_group_id" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicationGroupId"></a>

```python
replication_group_id: str
```

- *Type:* str

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `snapshot_arns`<sup>Required</sup> <a name="snapshot_arns" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotArns"></a>

```python
snapshot_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `snapshot_name`<sup>Required</sup> <a name="snapshot_name" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotName"></a>

```python
snapshot_name: str
```

- *Type:* str

---

##### `snapshot_retention_limit`<sup>Required</sup> <a name="snapshot_retention_limit" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotRetentionLimit"></a>

```python
snapshot_retention_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshotting_cluster_id`<sup>Required</sup> <a name="snapshotting_cluster_id" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshottingClusterId"></a>

```python
snapshotting_cluster_id: str
```

- *Type:* str

---

##### `snapshot_window`<sup>Required</sup> <a name="snapshot_window" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotWindow"></a>

```python
snapshot_window: str
```

- *Type:* str

---

##### `transit_encryption_enabled`<sup>Required</sup> <a name="transit_encryption_enabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.transitEncryptionEnabled"></a>

```python
transit_encryption_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `transit_encryption_mode`<sup>Required</sup> <a name="transit_encryption_mode" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.transitEncryptionMode"></a>

```python
transit_encryption_mode: str
```

- *Type:* str

---

##### `user_group_ids`<sup>Required</sup> <a name="user_group_ids" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.userGroupIds"></a>

```python
user_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticacheReplicationGroupConfig <a name="ElasticacheReplicationGroupConfig" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.Initializer"></a>

```python
from cdktn_provider_awscc import elasticache_replication_group

elasticacheReplicationGroup.ElasticacheReplicationGroupConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  replication_group_description: str,
  at_rest_encryption_enabled: bool | IResolvable = None,
  auth_token: str = None,
  automatic_failover_enabled: bool | IResolvable = None,
  auto_minor_version_upgrade: bool | IResolvable = None,
  cache_node_type: str = None,
  cache_parameter_group_name: str = None,
  cache_security_group_names: typing.List[str] = None,
  cache_subnet_group_name: str = None,
  cluster_mode: str = None,
  data_tiering_enabled: bool | IResolvable = None,
  durability: str = None,
  engine: str = None,
  engine_version: str = None,
  global_replication_group_id: str = None,
  ip_discovery: str = None,
  kms_key_id: str = None,
  log_delivery_configurations: IResolvable | typing.List[ElasticacheReplicationGroupLogDeliveryConfigurations] = None,
  multi_az_enabled: bool | IResolvable = None,
  network_type: str = None,
  node_group_configuration: IResolvable | typing.List[ElasticacheReplicationGroupNodeGroupConfiguration] = None,
  notification_topic_arn: str = None,
  num_cache_clusters: typing.Union[int, float] = None,
  num_node_groups: typing.Union[int, float] = None,
  port: typing.Union[int, float] = None,
  preferred_cache_cluster_a_zs: typing.List[str] = None,
  preferred_maintenance_window: str = None,
  primary_cluster_id: str = None,
  replicas_per_node_group: typing.Union[int, float] = None,
  replication_group_id: str = None,
  security_group_ids: typing.List[str] = None,
  snapshot_arns: typing.List[str] = None,
  snapshot_name: str = None,
  snapshot_retention_limit: typing.Union[int, float] = None,
  snapshotting_cluster_id: str = None,
  snapshot_window: str = None,
  tags: IResolvable | typing.List[ElasticacheReplicationGroupTags] = None,
  transit_encryption_enabled: bool | IResolvable = None,
  transit_encryption_mode: str = None,
  user_group_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.replicationGroupDescription">replication_group_description</a></code> | <code>str</code> | A user-created description for the replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.atRestEncryptionEnabled">at_rest_encryption_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | A flag that enables encryption at rest when set to true.AtRestEncryptionEnabled after the replication group is created. To enable encryption at rest on a replication group you must set AtRestEncryptionEnabled to true when you create the replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.authToken">auth_token</a></code> | <code>str</code> | Reserved parameter. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.automaticFailoverEnabled">automatic_failover_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether a read-only replica is automatically promoted to read/write primary if the existing primary fails. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.autoMinorVersionUpgrade">auto_minor_version_upgrade</a></code> | <code>bool \| cdktn.IResolvable</code> | This parameter is currently disabled. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.cacheNodeType">cache_node_type</a></code> | <code>str</code> | The compute and memory capacity of the nodes in the node group (shard). |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.cacheParameterGroupName">cache_parameter_group_name</a></code> | <code>str</code> | The name of the parameter group to associate with this replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.cacheSecurityGroupNames">cache_security_group_names</a></code> | <code>typing.List[str]</code> | A list of cache security group names to associate with this replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.cacheSubnetGroupName">cache_subnet_group_name</a></code> | <code>str</code> | The name of the cache subnet group to be used for the replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.clusterMode">cluster_mode</a></code> | <code>str</code> | Enabled or Disabled. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.dataTieringEnabled">data_tiering_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Enables data tiering. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.durability">durability</a></code> | <code>str</code> | The durability setting for the replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.engine">engine</a></code> | <code>str</code> | The name of the cache engine to be used for the clusters in this replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.engineVersion">engine_version</a></code> | <code>str</code> | The version number of the cache engine to be used for the clusters in this replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.globalReplicationGroupId">global_replication_group_id</a></code> | <code>str</code> | The name of the Global datastore. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.ipDiscovery">ip_discovery</a></code> | <code>str</code> | The network type you choose when creating a replication group, either ipv4 \| ipv6. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The ID of the KMS key used to encrypt the disk on the cluster. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.logDeliveryConfigurations">log_delivery_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations">ElasticacheReplicationGroupLogDeliveryConfigurations</a>]</code> | Specifies the destination, format and type of the logs. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.multiAzEnabled">multi_az_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | A flag indicating if you have Multi-AZ enabled to enhance fault tolerance. For more information, see Minimizing Downtime: Multi-AZ. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.networkType">network_type</a></code> | <code>str</code> | Must be either ipv4 \| ipv6 \| dual_stack. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.nodeGroupConfiguration">node_group_configuration</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration">ElasticacheReplicationGroupNodeGroupConfiguration</a>]</code> | NodeGroupConfiguration is a property of the AWS::ElastiCache::ReplicationGroup resource that configures an Amazon ElastiCache (ElastiCache) Redis cluster node group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.notificationTopicArn">notification_topic_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.numCacheClusters">num_cache_clusters</a></code> | <code>typing.Union[int, float]</code> | The number of clusters this replication group initially has.This parameter is not used if there is more than one node group (shard). You should use ReplicasPerNodeGroup instead. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.numNodeGroups">num_node_groups</a></code> | <code>typing.Union[int, float]</code> | An optional parameter that specifies the number of node groups (shards) for this Redis (cluster mode enabled) replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The port number on which each member of the replication group accepts connections. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.preferredCacheClusterAZs">preferred_cache_cluster_a_zs</a></code> | <code>typing.List[str]</code> | A list of EC2 Availability Zones in which the replication group's clusters are created. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.preferredMaintenanceWindow">preferred_maintenance_window</a></code> | <code>str</code> | Specifies the weekly time range during which maintenance on the cluster is performed. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.primaryClusterId">primary_cluster_id</a></code> | <code>str</code> | The identifier of the cluster that serves as the primary for this replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.replicasPerNodeGroup">replicas_per_node_group</a></code> | <code>typing.Union[int, float]</code> | An optional parameter that specifies the number of replica nodes in each node group (shard). |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.replicationGroupId">replication_group_id</a></code> | <code>str</code> | The replication group identifier. This parameter is stored as a lowercase string. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | One or more Amazon VPC security groups associated with this replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshotArns">snapshot_arns</a></code> | <code>typing.List[str]</code> | A list of Amazon Resource Names (ARN) that uniquely identify the Redis RDB snapshot files stored in Amazon S3. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshotName">snapshot_name</a></code> | <code>str</code> | The name of a snapshot from which to restore data into the new replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshotRetentionLimit">snapshot_retention_limit</a></code> | <code>typing.Union[int, float]</code> | The number of days for which ElastiCache retains automatic snapshots before deleting them. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshottingClusterId">snapshotting_cluster_id</a></code> | <code>str</code> | The cluster ID that is used as the daily snapshot source for the replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshotWindow">snapshot_window</a></code> | <code>str</code> | The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your node group (shard). |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTags">ElasticacheReplicationGroupTags</a>]</code> | A list of cost allocation tags to be added to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.transitEncryptionEnabled">transit_encryption_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | A flag that enables in-transit encryption when set to true. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.transitEncryptionMode">transit_encryption_mode</a></code> | <code>str</code> | A setting that allows you to migrate your clients to use in-transit encryption, with no downtime. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.userGroupIds">user_group_ids</a></code> | <code>typing.List[str]</code> | The ID of user group to associate with the replication group. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `replication_group_description`<sup>Required</sup> <a name="replication_group_description" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.replicationGroupDescription"></a>

```python
replication_group_description: str
```

- *Type:* str

A user-created description for the replication group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#replication_group_description ElasticacheReplicationGroup#replication_group_description}

---

##### `at_rest_encryption_enabled`<sup>Optional</sup> <a name="at_rest_encryption_enabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.atRestEncryptionEnabled"></a>

```python
at_rest_encryption_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A flag that enables encryption at rest when set to true.AtRestEncryptionEnabled after the replication group is created. To enable encryption at rest on a replication group you must set AtRestEncryptionEnabled to true when you create the replication group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#at_rest_encryption_enabled ElasticacheReplicationGroup#at_rest_encryption_enabled}

---

##### `auth_token`<sup>Optional</sup> <a name="auth_token" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.authToken"></a>

```python
auth_token: str
```

- *Type:* str

Reserved parameter.

The password used to access a password protected server.AuthToken can be specified only on replication groups where TransitEncryptionEnabled is true. For more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#auth_token ElasticacheReplicationGroup#auth_token}

---

##### `automatic_failover_enabled`<sup>Optional</sup> <a name="automatic_failover_enabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.automaticFailoverEnabled"></a>

```python
automatic_failover_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether a read-only replica is automatically promoted to read/write primary if the existing primary fails.

AutomaticFailoverEnabled must be enabled for Redis (cluster mode enabled) replication groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#automatic_failover_enabled ElasticacheReplicationGroup#automatic_failover_enabled}

---

##### `auto_minor_version_upgrade`<sup>Optional</sup> <a name="auto_minor_version_upgrade" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.autoMinorVersionUpgrade"></a>

```python
auto_minor_version_upgrade: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

This parameter is currently disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#auto_minor_version_upgrade ElasticacheReplicationGroup#auto_minor_version_upgrade}

---

##### `cache_node_type`<sup>Optional</sup> <a name="cache_node_type" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.cacheNodeType"></a>

```python
cache_node_type: str
```

- *Type:* str

The compute and memory capacity of the nodes in the node group (shard).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#cache_node_type ElasticacheReplicationGroup#cache_node_type}

---

##### `cache_parameter_group_name`<sup>Optional</sup> <a name="cache_parameter_group_name" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.cacheParameterGroupName"></a>

```python
cache_parameter_group_name: str
```

- *Type:* str

The name of the parameter group to associate with this replication group.

If this argument is omitted, the default cache parameter group for the specified engine is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#cache_parameter_group_name ElasticacheReplicationGroup#cache_parameter_group_name}

---

##### `cache_security_group_names`<sup>Optional</sup> <a name="cache_security_group_names" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.cacheSecurityGroupNames"></a>

```python
cache_security_group_names: typing.List[str]
```

- *Type:* typing.List[str]

A list of cache security group names to associate with this replication group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#cache_security_group_names ElasticacheReplicationGroup#cache_security_group_names}

---

##### `cache_subnet_group_name`<sup>Optional</sup> <a name="cache_subnet_group_name" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.cacheSubnetGroupName"></a>

```python
cache_subnet_group_name: str
```

- *Type:* str

The name of the cache subnet group to be used for the replication group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#cache_subnet_group_name ElasticacheReplicationGroup#cache_subnet_group_name}

---

##### `cluster_mode`<sup>Optional</sup> <a name="cluster_mode" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.clusterMode"></a>

```python
cluster_mode: str
```

- *Type:* str

Enabled or Disabled.

To modify cluster mode from Disabled to Enabled, you must first set the cluster mode to Compatible. Compatible mode allows your Redis OSS clients to connect using both cluster mode enabled and cluster mode disabled. After you migrate all Redis OSS clients to use cluster mode enabled, you can then complete cluster mode configuration and set the cluster mode to Enabled. For more information, see Modify cluster mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#cluster_mode ElasticacheReplicationGroup#cluster_mode}

---

##### `data_tiering_enabled`<sup>Optional</sup> <a name="data_tiering_enabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.dataTieringEnabled"></a>

```python
data_tiering_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Enables data tiering.

Data tiering is only supported for replication groups using the r6gd node type. This parameter must be set to true when using r6gd nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#data_tiering_enabled ElasticacheReplicationGroup#data_tiering_enabled}

---

##### `durability`<sup>Optional</sup> <a name="durability" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.durability"></a>

```python
durability: str
```

- *Type:* str

The durability setting for the replication group.

Valid values: default, async, sync, disabled. Enabling durability on an existing non-durable cluster or disabling durability on an existing durable cluster is not currently supported and will result in an error; specify the desired durability at create time. The resolved state is returned in EffectiveDurability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#durability ElasticacheReplicationGroup#durability}

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.engine"></a>

```python
engine: str
```

- *Type:* str

The name of the cache engine to be used for the clusters in this replication group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#engine ElasticacheReplicationGroup#engine}

---

##### `engine_version`<sup>Optional</sup> <a name="engine_version" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

The version number of the cache engine to be used for the clusters in this replication group.

To view the supported cache engine versions, use the DescribeCacheEngineVersions operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#engine_version ElasticacheReplicationGroup#engine_version}

---

##### `global_replication_group_id`<sup>Optional</sup> <a name="global_replication_group_id" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.globalReplicationGroupId"></a>

```python
global_replication_group_id: str
```

- *Type:* str

The name of the Global datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#global_replication_group_id ElasticacheReplicationGroup#global_replication_group_id}

---

##### `ip_discovery`<sup>Optional</sup> <a name="ip_discovery" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.ipDiscovery"></a>

```python
ip_discovery: str
```

- *Type:* str

The network type you choose when creating a replication group, either ipv4 | ipv6.

IPv6 is supported for workloads using Redis OSS engine version 6.2 onward or Memcached engine version 1.6.6 on all instances built on the Nitro system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#ip_discovery ElasticacheReplicationGroup#ip_discovery}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

The ID of the KMS key used to encrypt the disk on the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#kms_key_id ElasticacheReplicationGroup#kms_key_id}

---

##### `log_delivery_configurations`<sup>Optional</sup> <a name="log_delivery_configurations" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.logDeliveryConfigurations"></a>

```python
log_delivery_configurations: IResolvable | typing.List[ElasticacheReplicationGroupLogDeliveryConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations">ElasticacheReplicationGroupLogDeliveryConfigurations</a>]

Specifies the destination, format and type of the logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#log_delivery_configurations ElasticacheReplicationGroup#log_delivery_configurations}

---

##### `multi_az_enabled`<sup>Optional</sup> <a name="multi_az_enabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.multiAzEnabled"></a>

```python
multi_az_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A flag indicating if you have Multi-AZ enabled to enhance fault tolerance. For more information, see Minimizing Downtime: Multi-AZ.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#multi_az_enabled ElasticacheReplicationGroup#multi_az_enabled}

---

##### `network_type`<sup>Optional</sup> <a name="network_type" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.networkType"></a>

```python
network_type: str
```

- *Type:* str

Must be either ipv4 | ipv6 | dual_stack.

IPv6 is supported for workloads using Redis OSS engine version 6.2 onward or Memcached engine version 1.6.6 on all instances built on the Nitro system

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#network_type ElasticacheReplicationGroup#network_type}

---

##### `node_group_configuration`<sup>Optional</sup> <a name="node_group_configuration" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.nodeGroupConfiguration"></a>

```python
node_group_configuration: IResolvable | typing.List[ElasticacheReplicationGroupNodeGroupConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration">ElasticacheReplicationGroupNodeGroupConfiguration</a>]

NodeGroupConfiguration is a property of the AWS::ElastiCache::ReplicationGroup resource that configures an Amazon ElastiCache (ElastiCache) Redis cluster node group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#node_group_configuration ElasticacheReplicationGroup#node_group_configuration}

---

##### `notification_topic_arn`<sup>Optional</sup> <a name="notification_topic_arn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.notificationTopicArn"></a>

```python
notification_topic_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#notification_topic_arn ElasticacheReplicationGroup#notification_topic_arn}

---

##### `num_cache_clusters`<sup>Optional</sup> <a name="num_cache_clusters" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.numCacheClusters"></a>

```python
num_cache_clusters: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of clusters this replication group initially has.This parameter is not used if there is more than one node group (shard). You should use ReplicasPerNodeGroup instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#num_cache_clusters ElasticacheReplicationGroup#num_cache_clusters}

---

##### `num_node_groups`<sup>Optional</sup> <a name="num_node_groups" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.numNodeGroups"></a>

```python
num_node_groups: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

An optional parameter that specifies the number of node groups (shards) for this Redis (cluster mode enabled) replication group.

For Redis (cluster mode disabled) either omit this parameter or set it to 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#num_node_groups ElasticacheReplicationGroup#num_node_groups}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The port number on which each member of the replication group accepts connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#port ElasticacheReplicationGroup#port}

---

##### `preferred_cache_cluster_a_zs`<sup>Optional</sup> <a name="preferred_cache_cluster_a_zs" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.preferredCacheClusterAZs"></a>

```python
preferred_cache_cluster_a_zs: typing.List[str]
```

- *Type:* typing.List[str]

A list of EC2 Availability Zones in which the replication group's clusters are created.

The order of the Availability Zones in the list is the order in which clusters are allocated. The primary cluster is created in the first AZ in the list. This parameter is not used if there is more than one node group (shard). You should use NodeGroupConfiguration instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#preferred_cache_cluster_a_zs ElasticacheReplicationGroup#preferred_cache_cluster_a_zs}

---

##### `preferred_maintenance_window`<sup>Optional</sup> <a name="preferred_maintenance_window" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.preferredMaintenanceWindow"></a>

```python
preferred_maintenance_window: str
```

- *Type:* str

Specifies the weekly time range during which maintenance on the cluster is performed.

It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#preferred_maintenance_window ElasticacheReplicationGroup#preferred_maintenance_window}

---

##### `primary_cluster_id`<sup>Optional</sup> <a name="primary_cluster_id" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.primaryClusterId"></a>

```python
primary_cluster_id: str
```

- *Type:* str

The identifier of the cluster that serves as the primary for this replication group.

This cluster must already exist and have a status of available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#primary_cluster_id ElasticacheReplicationGroup#primary_cluster_id}

---

##### `replicas_per_node_group`<sup>Optional</sup> <a name="replicas_per_node_group" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.replicasPerNodeGroup"></a>

```python
replicas_per_node_group: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

An optional parameter that specifies the number of replica nodes in each node group (shard).

Valid values are 0 to 5.

**Note:** Using ReplicasPerNodeGroup with NodeGroupConfiguration results in resource replacement. For online scaling, use ReplicasPerNodeGroup alone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#replicas_per_node_group ElasticacheReplicationGroup#replicas_per_node_group}

---

##### `replication_group_id`<sup>Optional</sup> <a name="replication_group_id" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.replicationGroupId"></a>

```python
replication_group_id: str
```

- *Type:* str

The replication group identifier. This parameter is stored as a lowercase string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#replication_group_id ElasticacheReplicationGroup#replication_group_id}

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

One or more Amazon VPC security groups associated with this replication group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#security_group_ids ElasticacheReplicationGroup#security_group_ids}

---

##### `snapshot_arns`<sup>Optional</sup> <a name="snapshot_arns" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshotArns"></a>

```python
snapshot_arns: typing.List[str]
```

- *Type:* typing.List[str]

A list of Amazon Resource Names (ARN) that uniquely identify the Redis RDB snapshot files stored in Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#snapshot_arns ElasticacheReplicationGroup#snapshot_arns}

---

##### `snapshot_name`<sup>Optional</sup> <a name="snapshot_name" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshotName"></a>

```python
snapshot_name: str
```

- *Type:* str

The name of a snapshot from which to restore data into the new replication group.

The snapshot status changes to restoring while the new replication group is being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#snapshot_name ElasticacheReplicationGroup#snapshot_name}

---

##### `snapshot_retention_limit`<sup>Optional</sup> <a name="snapshot_retention_limit" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshotRetentionLimit"></a>

```python
snapshot_retention_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of days for which ElastiCache retains automatic snapshots before deleting them.

For example, if you set SnapshotRetentionLimit to 5, a snapshot that was taken today is retained for 5 days before being deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#snapshot_retention_limit ElasticacheReplicationGroup#snapshot_retention_limit}

---

##### `snapshotting_cluster_id`<sup>Optional</sup> <a name="snapshotting_cluster_id" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshottingClusterId"></a>

```python
snapshotting_cluster_id: str
```

- *Type:* str

The cluster ID that is used as the daily snapshot source for the replication group.

This parameter cannot be set for Redis (cluster mode enabled) replication groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#snapshotting_cluster_id ElasticacheReplicationGroup#snapshotting_cluster_id}

---

##### `snapshot_window`<sup>Optional</sup> <a name="snapshot_window" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshotWindow"></a>

```python
snapshot_window: str
```

- *Type:* str

The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your node group (shard).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#snapshot_window ElasticacheReplicationGroup#snapshot_window}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ElasticacheReplicationGroupTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTags">ElasticacheReplicationGroupTags</a>]

A list of cost allocation tags to be added to this resource.

Tags are comma-separated key,value pairs (e.g. Key=myKey, Value=myKeyValue. You can include multiple tags as shown following: Key=myKey, Value=myKeyValue Key=mySecondKey, Value=mySecondKeyValue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#tags ElasticacheReplicationGroup#tags}

---

##### `transit_encryption_enabled`<sup>Optional</sup> <a name="transit_encryption_enabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.transitEncryptionEnabled"></a>

```python
transit_encryption_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A flag that enables in-transit encryption when set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#transit_encryption_enabled ElasticacheReplicationGroup#transit_encryption_enabled}

---

##### `transit_encryption_mode`<sup>Optional</sup> <a name="transit_encryption_mode" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.transitEncryptionMode"></a>

```python
transit_encryption_mode: str
```

- *Type:* str

A setting that allows you to migrate your clients to use in-transit encryption, with no downtime.

When setting TransitEncryptionEnabled to true, you can set your TransitEncryptionMode to preferred in the same request, to allow both encrypted and unencrypted connections at the same time. Once you migrate all your Redis OSS clients to use encrypted connections you can modify the value to required to allow encrypted connections only. Setting TransitEncryptionMode to required is a two-step process that requires you to first set the TransitEncryptionMode to preferred, after that you can set TransitEncryptionMode to required. This process will not trigger the replacement of the replication group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#transit_encryption_mode ElasticacheReplicationGroup#transit_encryption_mode}

---

##### `user_group_ids`<sup>Optional</sup> <a name="user_group_ids" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.userGroupIds"></a>

```python
user_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

The ID of user group to associate with the replication group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#user_group_ids ElasticacheReplicationGroup#user_group_ids}

---

### ElasticacheReplicationGroupConfigurationEndPoint <a name="ElasticacheReplicationGroupConfigurationEndPoint" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPoint.Initializer"></a>

```python
from cdktn_provider_awscc import elasticache_replication_group

elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPoint()
```


### ElasticacheReplicationGroupLogDeliveryConfigurations <a name="ElasticacheReplicationGroupLogDeliveryConfigurations" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import elasticache_replication_group

elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations(
  destination_details: ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails = None,
  destination_type: str = None,
  log_format: str = None,
  log_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations.property.destinationDetails">destination_details</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails</a></code> | Configuration details of either a CloudWatch Logs destination or Kinesis Data Firehose destination. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations.property.destinationType">destination_type</a></code> | <code>str</code> | Specify either CloudWatch Logs or Kinesis Data Firehose as the destination type. Valid values are either cloudwatch-logs or kinesis-firehose. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations.property.logFormat">log_format</a></code> | <code>str</code> | Valid values are either json or text. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations.property.logType">log_type</a></code> | <code>str</code> | Valid value is either slow-log, which refers to slow-log or engine-log. |

---

##### `destination_details`<sup>Optional</sup> <a name="destination_details" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations.property.destinationDetails"></a>

```python
destination_details: ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails</a>

Configuration details of either a CloudWatch Logs destination or Kinesis Data Firehose destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#destination_details ElasticacheReplicationGroup#destination_details}

---

##### `destination_type`<sup>Optional</sup> <a name="destination_type" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations.property.destinationType"></a>

```python
destination_type: str
```

- *Type:* str

Specify either CloudWatch Logs or Kinesis Data Firehose as the destination type. Valid values are either cloudwatch-logs or kinesis-firehose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#destination_type ElasticacheReplicationGroup#destination_type}

---

##### `log_format`<sup>Optional</sup> <a name="log_format" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations.property.logFormat"></a>

```python
log_format: str
```

- *Type:* str

Valid values are either json or text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#log_format ElasticacheReplicationGroup#log_format}

---

##### `log_type`<sup>Optional</sup> <a name="log_type" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations.property.logType"></a>

```python
log_type: str
```

- *Type:* str

Valid value is either slow-log, which refers to slow-log or engine-log.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#log_type ElasticacheReplicationGroup#log_type}

---

### ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails <a name="ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails.Initializer"></a>

```python
from cdktn_provider_awscc import elasticache_replication_group

elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails(
  cloudwatch_logs_details: ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails = None,
  kinesis_firehose_details: ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails.property.cloudwatchLogsDetails">cloudwatch_logs_details</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails</a></code> | The configuration details of the CloudWatch Logs destination. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails.property.kinesisFirehoseDetails">kinesis_firehose_details</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails</a></code> | The configuration details of the Kinesis Data Firehose destination. |

---

##### `cloudwatch_logs_details`<sup>Optional</sup> <a name="cloudwatch_logs_details" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails.property.cloudwatchLogsDetails"></a>

```python
cloudwatch_logs_details: ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails</a>

The configuration details of the CloudWatch Logs destination.

Note that this field is marked as required but only if CloudWatch Logs was chosen as the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#cloudwatch_logs_details ElasticacheReplicationGroup#cloudwatch_logs_details}

---

##### `kinesis_firehose_details`<sup>Optional</sup> <a name="kinesis_firehose_details" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails.property.kinesisFirehoseDetails"></a>

```python
kinesis_firehose_details: ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails</a>

The configuration details of the Kinesis Data Firehose destination.

Note that this field is marked as required but only if Kinesis Data Firehose was chosen as the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#kinesis_firehose_details ElasticacheReplicationGroup#kinesis_firehose_details}

---

### ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails <a name="ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails.Initializer"></a>

```python
from cdktn_provider_awscc import elasticache_replication_group

elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails(
  log_group: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails.property.logGroup">log_group</a></code> | <code>str</code> | The name of the CloudWatch Logs log group. |

---

##### `log_group`<sup>Optional</sup> <a name="log_group" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails.property.logGroup"></a>

```python
log_group: str
```

- *Type:* str

The name of the CloudWatch Logs log group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#log_group ElasticacheReplicationGroup#log_group}

---

### ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails <a name="ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails.Initializer"></a>

```python
from cdktn_provider_awscc import elasticache_replication_group

elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails(
  delivery_stream: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails.property.deliveryStream">delivery_stream</a></code> | <code>str</code> | The name of the Kinesis Data Firehose delivery stream. |

---

##### `delivery_stream`<sup>Optional</sup> <a name="delivery_stream" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails.property.deliveryStream"></a>

```python
delivery_stream: str
```

- *Type:* str

The name of the Kinesis Data Firehose delivery stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#delivery_stream ElasticacheReplicationGroup#delivery_stream}

---

### ElasticacheReplicationGroupNodeGroupConfiguration <a name="ElasticacheReplicationGroupNodeGroupConfiguration" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import elasticache_replication_group

elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration(
  node_group_id: str = None,
  primary_availability_zone: str = None,
  replica_availability_zones: typing.List[str] = None,
  replica_count: typing.Union[int, float] = None,
  slots: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration.property.nodeGroupId">node_group_id</a></code> | <code>str</code> | Either the ElastiCache for Redis supplied 4-digit id or a user supplied id for the node group these configuration values apply to. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration.property.primaryAvailabilityZone">primary_availability_zone</a></code> | <code>str</code> | The Availability Zone where the primary node of this node group (shard) is launched. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration.property.replicaAvailabilityZones">replica_availability_zones</a></code> | <code>typing.List[str]</code> | A list of Availability Zones to be used for the read replicas. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration.property.replicaCount">replica_count</a></code> | <code>typing.Union[int, float]</code> | The number of read replica nodes in this node group (shard). |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration.property.slots">slots</a></code> | <code>str</code> | A string of comma-separated values where the first set of values are the slot numbers (zero based), and the second set of values are the keyspaces for each slot. |

---

##### `node_group_id`<sup>Optional</sup> <a name="node_group_id" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration.property.nodeGroupId"></a>

```python
node_group_id: str
```

- *Type:* str

Either the ElastiCache for Redis supplied 4-digit id or a user supplied id for the node group these configuration values apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#node_group_id ElasticacheReplicationGroup#node_group_id}

---

##### `primary_availability_zone`<sup>Optional</sup> <a name="primary_availability_zone" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration.property.primaryAvailabilityZone"></a>

```python
primary_availability_zone: str
```

- *Type:* str

The Availability Zone where the primary node of this node group (shard) is launched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#primary_availability_zone ElasticacheReplicationGroup#primary_availability_zone}

---

##### `replica_availability_zones`<sup>Optional</sup> <a name="replica_availability_zones" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration.property.replicaAvailabilityZones"></a>

```python
replica_availability_zones: typing.List[str]
```

- *Type:* typing.List[str]

A list of Availability Zones to be used for the read replicas.

The number of Availability Zones in this list must match the value of ReplicaCount or ReplicasPerNodeGroup if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#replica_availability_zones ElasticacheReplicationGroup#replica_availability_zones}

---

##### `replica_count`<sup>Optional</sup> <a name="replica_count" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration.property.replicaCount"></a>

```python
replica_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of read replica nodes in this node group (shard).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#replica_count ElasticacheReplicationGroup#replica_count}

---

##### `slots`<sup>Optional</sup> <a name="slots" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration.property.slots"></a>

```python
slots: str
```

- *Type:* str

A string of comma-separated values where the first set of values are the slot numbers (zero based), and the second set of values are the keyspaces for each slot.

The following example specifies three slots (numbered 0, 1, and 2): 0,1,2,0-4999,5000-9999,10000-16,383.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#slots ElasticacheReplicationGroup#slots}

---

### ElasticacheReplicationGroupPrimaryEndPoint <a name="ElasticacheReplicationGroupPrimaryEndPoint" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPoint.Initializer"></a>

```python
from cdktn_provider_awscc import elasticache_replication_group

elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPoint()
```


### ElasticacheReplicationGroupReadEndPoint <a name="ElasticacheReplicationGroupReadEndPoint" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPoint.Initializer"></a>

```python
from cdktn_provider_awscc import elasticache_replication_group

elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPoint()
```


### ElasticacheReplicationGroupReaderEndPoint <a name="ElasticacheReplicationGroupReaderEndPoint" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPoint.Initializer"></a>

```python
from cdktn_provider_awscc import elasticache_replication_group

elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPoint()
```


### ElasticacheReplicationGroupTags <a name="ElasticacheReplicationGroupTags" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTags.Initializer"></a>

```python
from cdktn_provider_awscc import elasticache_replication_group

elasticacheReplicationGroup.ElasticacheReplicationGroupTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#key ElasticacheReplicationGroup#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#value ElasticacheReplicationGroup#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticacheReplicationGroupConfigurationEndPointOutputReference <a name="ElasticacheReplicationGroupConfigurationEndPointOutputReference" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticache_replication_group

elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.property.port">port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPoint">ElasticacheReplicationGroupConfigurationEndPoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.property.port"></a>

```python
port: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.property.internalValue"></a>

```python
internal_value: ElasticacheReplicationGroupConfigurationEndPoint
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPoint">ElasticacheReplicationGroupConfigurationEndPoint</a>

---


### ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference <a name="ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticache_replication_group

elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.resetLogGroup">reset_log_group</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_log_group` <a name="reset_log_group" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.resetLogGroup"></a>

```python
def reset_log_group() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.logGroupInput">log_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.logGroup">log_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_group_input`<sup>Optional</sup> <a name="log_group_input" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.logGroupInput"></a>

```python
log_group_input: str
```

- *Type:* str

---

##### `log_group`<sup>Required</sup> <a name="log_group" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.logGroup"></a>

```python
log_group: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails</a>

---


### ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference <a name="ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticache_replication_group

elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.resetDeliveryStream">reset_delivery_stream</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delivery_stream` <a name="reset_delivery_stream" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.resetDeliveryStream"></a>

```python
def reset_delivery_stream() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.deliveryStreamInput">delivery_stream_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.deliveryStream">delivery_stream</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delivery_stream_input`<sup>Optional</sup> <a name="delivery_stream_input" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.deliveryStreamInput"></a>

```python
delivery_stream_input: str
```

- *Type:* str

---

##### `delivery_stream`<sup>Required</sup> <a name="delivery_stream" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.deliveryStream"></a>

```python
delivery_stream: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails</a>

---


### ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference <a name="ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticache_replication_group

elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.putCloudwatchLogsDetails">put_cloudwatch_logs_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.putKinesisFirehoseDetails">put_kinesis_firehose_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.resetCloudwatchLogsDetails">reset_cloudwatch_logs_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.resetKinesisFirehoseDetails">reset_kinesis_firehose_details</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cloudwatch_logs_details` <a name="put_cloudwatch_logs_details" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.putCloudwatchLogsDetails"></a>

```python
def put_cloudwatch_logs_details(
  log_group: str = None
) -> None
```

###### `log_group`<sup>Optional</sup> <a name="log_group" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.putCloudwatchLogsDetails.parameter.logGroup"></a>

- *Type:* str

The name of the CloudWatch Logs log group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#log_group ElasticacheReplicationGroup#log_group}

---

##### `put_kinesis_firehose_details` <a name="put_kinesis_firehose_details" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.putKinesisFirehoseDetails"></a>

```python
def put_kinesis_firehose_details(
  delivery_stream: str = None
) -> None
```

###### `delivery_stream`<sup>Optional</sup> <a name="delivery_stream" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.putKinesisFirehoseDetails.parameter.deliveryStream"></a>

- *Type:* str

The name of the Kinesis Data Firehose delivery stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#delivery_stream ElasticacheReplicationGroup#delivery_stream}

---

##### `reset_cloudwatch_logs_details` <a name="reset_cloudwatch_logs_details" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.resetCloudwatchLogsDetails"></a>

```python
def reset_cloudwatch_logs_details() -> None
```

##### `reset_kinesis_firehose_details` <a name="reset_kinesis_firehose_details" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.resetKinesisFirehoseDetails"></a>

```python
def reset_kinesis_firehose_details() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.cloudwatchLogsDetails">cloudwatch_logs_details</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.kinesisFirehoseDetails">kinesis_firehose_details</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.cloudwatchLogsDetailsInput">cloudwatch_logs_details_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.kinesisFirehoseDetailsInput">kinesis_firehose_details_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_logs_details`<sup>Required</sup> <a name="cloudwatch_logs_details" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.cloudwatchLogsDetails"></a>

```python
cloudwatch_logs_details: ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference</a>

---

##### `kinesis_firehose_details`<sup>Required</sup> <a name="kinesis_firehose_details" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.kinesisFirehoseDetails"></a>

```python
kinesis_firehose_details: ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference</a>

---

##### `cloudwatch_logs_details_input`<sup>Optional</sup> <a name="cloudwatch_logs_details_input" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.cloudwatchLogsDetailsInput"></a>

```python
cloudwatch_logs_details_input: IResolvable | ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails</a>

---

##### `kinesis_firehose_details_input`<sup>Optional</sup> <a name="kinesis_firehose_details_input" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.kinesisFirehoseDetailsInput"></a>

```python
kinesis_firehose_details_input: IResolvable | ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails</a>

---


### ElasticacheReplicationGroupLogDeliveryConfigurationsList <a name="ElasticacheReplicationGroupLogDeliveryConfigurationsList" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import elasticache_replication_group

elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations">ElasticacheReplicationGroupLogDeliveryConfigurations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ElasticacheReplicationGroupLogDeliveryConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations">ElasticacheReplicationGroupLogDeliveryConfigurations</a>]

---


### ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference <a name="ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticache_replication_group

elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.putDestinationDetails">put_destination_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.resetDestinationDetails">reset_destination_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.resetDestinationType">reset_destination_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.resetLogFormat">reset_log_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.resetLogType">reset_log_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_destination_details` <a name="put_destination_details" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.putDestinationDetails"></a>

```python
def put_destination_details(
  cloudwatch_logs_details: ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails = None,
  kinesis_firehose_details: ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails = None
) -> None
```

###### `cloudwatch_logs_details`<sup>Optional</sup> <a name="cloudwatch_logs_details" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.putDestinationDetails.parameter.cloudwatchLogsDetails"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails</a>

The configuration details of the CloudWatch Logs destination.

Note that this field is marked as required but only if CloudWatch Logs was chosen as the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#cloudwatch_logs_details ElasticacheReplicationGroup#cloudwatch_logs_details}

---

###### `kinesis_firehose_details`<sup>Optional</sup> <a name="kinesis_firehose_details" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.putDestinationDetails.parameter.kinesisFirehoseDetails"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails</a>

The configuration details of the Kinesis Data Firehose destination.

Note that this field is marked as required but only if Kinesis Data Firehose was chosen as the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#kinesis_firehose_details ElasticacheReplicationGroup#kinesis_firehose_details}

---

##### `reset_destination_details` <a name="reset_destination_details" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.resetDestinationDetails"></a>

```python
def reset_destination_details() -> None
```

##### `reset_destination_type` <a name="reset_destination_type" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.resetDestinationType"></a>

```python
def reset_destination_type() -> None
```

##### `reset_log_format` <a name="reset_log_format" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.resetLogFormat"></a>

```python
def reset_log_format() -> None
```

##### `reset_log_type` <a name="reset_log_type" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.resetLogType"></a>

```python
def reset_log_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.destinationDetails">destination_details</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.destinationDetailsInput">destination_details_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.destinationTypeInput">destination_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.logFormatInput">log_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.logTypeInput">log_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.destinationType">destination_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.logFormat">log_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.logType">log_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations">ElasticacheReplicationGroupLogDeliveryConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_details`<sup>Required</sup> <a name="destination_details" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.destinationDetails"></a>

```python
destination_details: ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference</a>

---

##### `destination_details_input`<sup>Optional</sup> <a name="destination_details_input" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.destinationDetailsInput"></a>

```python
destination_details_input: IResolvable | ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails</a>

---

##### `destination_type_input`<sup>Optional</sup> <a name="destination_type_input" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.destinationTypeInput"></a>

```python
destination_type_input: str
```

- *Type:* str

---

##### `log_format_input`<sup>Optional</sup> <a name="log_format_input" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.logFormatInput"></a>

```python
log_format_input: str
```

- *Type:* str

---

##### `log_type_input`<sup>Optional</sup> <a name="log_type_input" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.logTypeInput"></a>

```python
log_type_input: str
```

- *Type:* str

---

##### `destination_type`<sup>Required</sup> <a name="destination_type" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.destinationType"></a>

```python
destination_type: str
```

- *Type:* str

---

##### `log_format`<sup>Required</sup> <a name="log_format" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.logFormat"></a>

```python
log_format: str
```

- *Type:* str

---

##### `log_type`<sup>Required</sup> <a name="log_type" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.logType"></a>

```python
log_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ElasticacheReplicationGroupLogDeliveryConfigurations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations">ElasticacheReplicationGroupLogDeliveryConfigurations</a>

---


### ElasticacheReplicationGroupNodeGroupConfigurationList <a name="ElasticacheReplicationGroupNodeGroupConfigurationList" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.Initializer"></a>

```python
from cdktn_provider_awscc import elasticache_replication_group

elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElasticacheReplicationGroupNodeGroupConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration">ElasticacheReplicationGroupNodeGroupConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ElasticacheReplicationGroupNodeGroupConfiguration]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration">ElasticacheReplicationGroupNodeGroupConfiguration</a>]

---


### ElasticacheReplicationGroupNodeGroupConfigurationOutputReference <a name="ElasticacheReplicationGroupNodeGroupConfigurationOutputReference" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticache_replication_group

elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.resetNodeGroupId">reset_node_group_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.resetPrimaryAvailabilityZone">reset_primary_availability_zone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.resetReplicaAvailabilityZones">reset_replica_availability_zones</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.resetReplicaCount">reset_replica_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.resetSlots">reset_slots</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_node_group_id` <a name="reset_node_group_id" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.resetNodeGroupId"></a>

```python
def reset_node_group_id() -> None
```

##### `reset_primary_availability_zone` <a name="reset_primary_availability_zone" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.resetPrimaryAvailabilityZone"></a>

```python
def reset_primary_availability_zone() -> None
```

##### `reset_replica_availability_zones` <a name="reset_replica_availability_zones" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.resetReplicaAvailabilityZones"></a>

```python
def reset_replica_availability_zones() -> None
```

##### `reset_replica_count` <a name="reset_replica_count" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.resetReplicaCount"></a>

```python
def reset_replica_count() -> None
```

##### `reset_slots` <a name="reset_slots" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.resetSlots"></a>

```python
def reset_slots() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.nodeGroupIdInput">node_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.primaryAvailabilityZoneInput">primary_availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.replicaAvailabilityZonesInput">replica_availability_zones_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.replicaCountInput">replica_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.slotsInput">slots_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.nodeGroupId">node_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.primaryAvailabilityZone">primary_availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.replicaAvailabilityZones">replica_availability_zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.replicaCount">replica_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.slots">slots</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration">ElasticacheReplicationGroupNodeGroupConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `node_group_id_input`<sup>Optional</sup> <a name="node_group_id_input" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.nodeGroupIdInput"></a>

```python
node_group_id_input: str
```

- *Type:* str

---

##### `primary_availability_zone_input`<sup>Optional</sup> <a name="primary_availability_zone_input" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.primaryAvailabilityZoneInput"></a>

```python
primary_availability_zone_input: str
```

- *Type:* str

---

##### `replica_availability_zones_input`<sup>Optional</sup> <a name="replica_availability_zones_input" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.replicaAvailabilityZonesInput"></a>

```python
replica_availability_zones_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `replica_count_input`<sup>Optional</sup> <a name="replica_count_input" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.replicaCountInput"></a>

```python
replica_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `slots_input`<sup>Optional</sup> <a name="slots_input" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.slotsInput"></a>

```python
slots_input: str
```

- *Type:* str

---

##### `node_group_id`<sup>Required</sup> <a name="node_group_id" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.nodeGroupId"></a>

```python
node_group_id: str
```

- *Type:* str

---

##### `primary_availability_zone`<sup>Required</sup> <a name="primary_availability_zone" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.primaryAvailabilityZone"></a>

```python
primary_availability_zone: str
```

- *Type:* str

---

##### `replica_availability_zones`<sup>Required</sup> <a name="replica_availability_zones" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.replicaAvailabilityZones"></a>

```python
replica_availability_zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `replica_count`<sup>Required</sup> <a name="replica_count" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.replicaCount"></a>

```python
replica_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `slots`<sup>Required</sup> <a name="slots" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.slots"></a>

```python
slots: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ElasticacheReplicationGroupNodeGroupConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration">ElasticacheReplicationGroupNodeGroupConfiguration</a>

---


### ElasticacheReplicationGroupPrimaryEndPointOutputReference <a name="ElasticacheReplicationGroupPrimaryEndPointOutputReference" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticache_replication_group

elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.property.port">port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPoint">ElasticacheReplicationGroupPrimaryEndPoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.property.port"></a>

```python
port: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.property.internalValue"></a>

```python
internal_value: ElasticacheReplicationGroupPrimaryEndPoint
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPoint">ElasticacheReplicationGroupPrimaryEndPoint</a>

---


### ElasticacheReplicationGroupReadEndPointOutputReference <a name="ElasticacheReplicationGroupReadEndPointOutputReference" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticache_replication_group

elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.property.addresses">addresses</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.property.addressesList">addresses_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.property.ports">ports</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.property.portsList">ports_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPoint">ElasticacheReplicationGroupReadEndPoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.property.addresses"></a>

```python
addresses: str
```

- *Type:* str

---

##### `addresses_list`<sup>Required</sup> <a name="addresses_list" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.property.addressesList"></a>

```python
addresses_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.property.ports"></a>

```python
ports: str
```

- *Type:* str

---

##### `ports_list`<sup>Required</sup> <a name="ports_list" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.property.portsList"></a>

```python
ports_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.property.internalValue"></a>

```python
internal_value: ElasticacheReplicationGroupReadEndPoint
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPoint">ElasticacheReplicationGroupReadEndPoint</a>

---


### ElasticacheReplicationGroupReaderEndPointOutputReference <a name="ElasticacheReplicationGroupReaderEndPointOutputReference" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticache_replication_group

elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.property.port">port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPoint">ElasticacheReplicationGroupReaderEndPoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.property.port"></a>

```python
port: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.property.internalValue"></a>

```python
internal_value: ElasticacheReplicationGroupReaderEndPoint
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPoint">ElasticacheReplicationGroupReaderEndPoint</a>

---


### ElasticacheReplicationGroupTagsList <a name="ElasticacheReplicationGroupTagsList" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import elasticache_replication_group

elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElasticacheReplicationGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTags">ElasticacheReplicationGroupTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ElasticacheReplicationGroupTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTags">ElasticacheReplicationGroupTags</a>]

---


### ElasticacheReplicationGroupTagsOutputReference <a name="ElasticacheReplicationGroupTagsOutputReference" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import elasticache_replication_group

elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTags">ElasticacheReplicationGroupTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ElasticacheReplicationGroupTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTags">ElasticacheReplicationGroupTags</a>

---



