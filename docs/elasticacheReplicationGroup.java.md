# `elasticacheReplicationGroup` Submodule <a name="`elasticacheReplicationGroup` Submodule" id="@cdktn/provider-awscc.elasticacheReplicationGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticacheReplicationGroup <a name="ElasticacheReplicationGroup" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group awscc_elasticache_replication_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticache_replication_group.ElasticacheReplicationGroup;

ElasticacheReplicationGroup.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .replicationGroupDescription(java.lang.String)
//  .atRestEncryptionEnabled(java.lang.Boolean|IResolvable)
//  .authToken(java.lang.String)
//  .automaticFailoverEnabled(java.lang.Boolean|IResolvable)
//  .autoMinorVersionUpgrade(java.lang.Boolean|IResolvable)
//  .cacheNodeType(java.lang.String)
//  .cacheParameterGroupName(java.lang.String)
//  .cacheSecurityGroupNames(java.util.List<java.lang.String>)
//  .cacheSubnetGroupName(java.lang.String)
//  .clusterMode(java.lang.String)
//  .dataTieringEnabled(java.lang.Boolean|IResolvable)
//  .durability(java.lang.String)
//  .engine(java.lang.String)
//  .engineVersion(java.lang.String)
//  .globalReplicationGroupId(java.lang.String)
//  .ipDiscovery(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .logDeliveryConfigurations(IResolvable|java.util.List<ElasticacheReplicationGroupLogDeliveryConfigurations>)
//  .multiAzEnabled(java.lang.Boolean|IResolvable)
//  .networkType(java.lang.String)
//  .nodeGroupConfiguration(IResolvable|java.util.List<ElasticacheReplicationGroupNodeGroupConfiguration>)
//  .notificationTopicArn(java.lang.String)
//  .numCacheClusters(java.lang.Number)
//  .numNodeGroups(java.lang.Number)
//  .port(java.lang.Number)
//  .preferredCacheClusterAZs(java.util.List<java.lang.String>)
//  .preferredMaintenanceWindow(java.lang.String)
//  .primaryClusterId(java.lang.String)
//  .replicasPerNodeGroup(java.lang.Number)
//  .replicationGroupId(java.lang.String)
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .snapshotArns(java.util.List<java.lang.String>)
//  .snapshotName(java.lang.String)
//  .snapshotRetentionLimit(java.lang.Number)
//  .snapshottingClusterId(java.lang.String)
//  .snapshotWindow(java.lang.String)
//  .tags(IResolvable|java.util.List<ElasticacheReplicationGroupTags>)
//  .transitEncryptionEnabled(java.lang.Boolean|IResolvable)
//  .transitEncryptionMode(java.lang.String)
//  .userGroupIds(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.replicationGroupDescription">replicationGroupDescription</a></code> | <code>java.lang.String</code> | A user-created description for the replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.atRestEncryptionEnabled">atRestEncryptionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A flag that enables encryption at rest when set to true.AtRestEncryptionEnabled after the replication group is created. To enable encryption at rest on a replication group you must set AtRestEncryptionEnabled to true when you create the replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.authToken">authToken</a></code> | <code>java.lang.String</code> | Reserved parameter. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.automaticFailoverEnabled">automaticFailoverEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether a read-only replica is automatically promoted to read/write primary if the existing primary fails. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | This parameter is currently disabled. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.cacheNodeType">cacheNodeType</a></code> | <code>java.lang.String</code> | The compute and memory capacity of the nodes in the node group (shard). |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.cacheParameterGroupName">cacheParameterGroupName</a></code> | <code>java.lang.String</code> | The name of the parameter group to associate with this replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.cacheSecurityGroupNames">cacheSecurityGroupNames</a></code> | <code>java.util.List<java.lang.String></code> | A list of cache security group names to associate with this replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.cacheSubnetGroupName">cacheSubnetGroupName</a></code> | <code>java.lang.String</code> | The name of the cache subnet group to be used for the replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.clusterMode">clusterMode</a></code> | <code>java.lang.String</code> | Enabled or Disabled. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.dataTieringEnabled">dataTieringEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enables data tiering. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.durability">durability</a></code> | <code>java.lang.String</code> | The durability setting for the replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.engine">engine</a></code> | <code>java.lang.String</code> | The name of the cache engine to be used for the clusters in this replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | The version number of the cache engine to be used for the clusters in this replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.globalReplicationGroupId">globalReplicationGroupId</a></code> | <code>java.lang.String</code> | The name of the Global datastore. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.ipDiscovery">ipDiscovery</a></code> | <code>java.lang.String</code> | The network type you choose when creating a replication group, either ipv4 \| ipv6. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | The ID of the KMS key used to encrypt the disk on the cluster. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.logDeliveryConfigurations">logDeliveryConfigurations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations">ElasticacheReplicationGroupLogDeliveryConfigurations</a>></code> | Specifies the destination, format and type of the logs. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.multiAzEnabled">multiAzEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A flag indicating if you have Multi-AZ enabled to enhance fault tolerance. For more information, see Minimizing Downtime: Multi-AZ. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.networkType">networkType</a></code> | <code>java.lang.String</code> | Must be either ipv4 \| ipv6 \| dual_stack. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.nodeGroupConfiguration">nodeGroupConfiguration</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration">ElasticacheReplicationGroupNodeGroupConfiguration</a>></code> | NodeGroupConfiguration is a property of the AWS::ElastiCache::ReplicationGroup resource that configures an Amazon ElastiCache (ElastiCache) Redis cluster node group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.notificationTopicArn">notificationTopicArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.numCacheClusters">numCacheClusters</a></code> | <code>java.lang.Number</code> | The number of clusters this replication group initially has.This parameter is not used if there is more than one node group (shard). You should use ReplicasPerNodeGroup instead. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.numNodeGroups">numNodeGroups</a></code> | <code>java.lang.Number</code> | An optional parameter that specifies the number of node groups (shards) for this Redis (cluster mode enabled) replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.port">port</a></code> | <code>java.lang.Number</code> | The port number on which each member of the replication group accepts connections. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.preferredCacheClusterAZs">preferredCacheClusterAZs</a></code> | <code>java.util.List<java.lang.String></code> | A list of EC2 Availability Zones in which the replication group's clusters are created. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>java.lang.String</code> | Specifies the weekly time range during which maintenance on the cluster is performed. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.primaryClusterId">primaryClusterId</a></code> | <code>java.lang.String</code> | The identifier of the cluster that serves as the primary for this replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.replicasPerNodeGroup">replicasPerNodeGroup</a></code> | <code>java.lang.Number</code> | An optional parameter that specifies the number of replica nodes in each node group (shard). |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.replicationGroupId">replicationGroupId</a></code> | <code>java.lang.String</code> | The replication group identifier. This parameter is stored as a lowercase string. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | One or more Amazon VPC security groups associated with this replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.snapshotArns">snapshotArns</a></code> | <code>java.util.List<java.lang.String></code> | A list of Amazon Resource Names (ARN) that uniquely identify the Redis RDB snapshot files stored in Amazon S3. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.snapshotName">snapshotName</a></code> | <code>java.lang.String</code> | The name of a snapshot from which to restore data into the new replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.snapshotRetentionLimit">snapshotRetentionLimit</a></code> | <code>java.lang.Number</code> | The number of days for which ElastiCache retains automatic snapshots before deleting them. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.snapshottingClusterId">snapshottingClusterId</a></code> | <code>java.lang.String</code> | The cluster ID that is used as the daily snapshot source for the replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.snapshotWindow">snapshotWindow</a></code> | <code>java.lang.String</code> | The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your node group (shard). |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTags">ElasticacheReplicationGroupTags</a>></code> | A list of cost allocation tags to be added to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.transitEncryptionEnabled">transitEncryptionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A flag that enables in-transit encryption when set to true. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.transitEncryptionMode">transitEncryptionMode</a></code> | <code>java.lang.String</code> | A setting that allows you to migrate your clients to use in-transit encryption, with no downtime. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.userGroupIds">userGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | The ID of user group to associate with the replication group. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `replicationGroupDescription`<sup>Required</sup> <a name="replicationGroupDescription" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.replicationGroupDescription"></a>

- *Type:* java.lang.String

A user-created description for the replication group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#replication_group_description ElasticacheReplicationGroup#replication_group_description}

---

##### `atRestEncryptionEnabled`<sup>Optional</sup> <a name="atRestEncryptionEnabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.atRestEncryptionEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A flag that enables encryption at rest when set to true.AtRestEncryptionEnabled after the replication group is created. To enable encryption at rest on a replication group you must set AtRestEncryptionEnabled to true when you create the replication group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#at_rest_encryption_enabled ElasticacheReplicationGroup#at_rest_encryption_enabled}

---

##### `authToken`<sup>Optional</sup> <a name="authToken" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.authToken"></a>

- *Type:* java.lang.String

Reserved parameter.

The password used to access a password protected server.AuthToken can be specified only on replication groups where TransitEncryptionEnabled is true. For more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#auth_token ElasticacheReplicationGroup#auth_token}

---

##### `automaticFailoverEnabled`<sup>Optional</sup> <a name="automaticFailoverEnabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.automaticFailoverEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether a read-only replica is automatically promoted to read/write primary if the existing primary fails.

AutomaticFailoverEnabled must be enabled for Redis (cluster mode enabled) replication groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#automatic_failover_enabled ElasticacheReplicationGroup#automatic_failover_enabled}

---

##### `autoMinorVersionUpgrade`<sup>Optional</sup> <a name="autoMinorVersionUpgrade" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.autoMinorVersionUpgrade"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

This parameter is currently disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#auto_minor_version_upgrade ElasticacheReplicationGroup#auto_minor_version_upgrade}

---

##### `cacheNodeType`<sup>Optional</sup> <a name="cacheNodeType" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.cacheNodeType"></a>

- *Type:* java.lang.String

The compute and memory capacity of the nodes in the node group (shard).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#cache_node_type ElasticacheReplicationGroup#cache_node_type}

---

##### `cacheParameterGroupName`<sup>Optional</sup> <a name="cacheParameterGroupName" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.cacheParameterGroupName"></a>

- *Type:* java.lang.String

The name of the parameter group to associate with this replication group.

If this argument is omitted, the default cache parameter group for the specified engine is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#cache_parameter_group_name ElasticacheReplicationGroup#cache_parameter_group_name}

---

##### `cacheSecurityGroupNames`<sup>Optional</sup> <a name="cacheSecurityGroupNames" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.cacheSecurityGroupNames"></a>

- *Type:* java.util.List<java.lang.String>

A list of cache security group names to associate with this replication group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#cache_security_group_names ElasticacheReplicationGroup#cache_security_group_names}

---

##### `cacheSubnetGroupName`<sup>Optional</sup> <a name="cacheSubnetGroupName" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.cacheSubnetGroupName"></a>

- *Type:* java.lang.String

The name of the cache subnet group to be used for the replication group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#cache_subnet_group_name ElasticacheReplicationGroup#cache_subnet_group_name}

---

##### `clusterMode`<sup>Optional</sup> <a name="clusterMode" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.clusterMode"></a>

- *Type:* java.lang.String

Enabled or Disabled.

To modify cluster mode from Disabled to Enabled, you must first set the cluster mode to Compatible. Compatible mode allows your Redis OSS clients to connect using both cluster mode enabled and cluster mode disabled. After you migrate all Redis OSS clients to use cluster mode enabled, you can then complete cluster mode configuration and set the cluster mode to Enabled. For more information, see Modify cluster mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#cluster_mode ElasticacheReplicationGroup#cluster_mode}

---

##### `dataTieringEnabled`<sup>Optional</sup> <a name="dataTieringEnabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.dataTieringEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enables data tiering.

Data tiering is only supported for replication groups using the r6gd node type. This parameter must be set to true when using r6gd nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#data_tiering_enabled ElasticacheReplicationGroup#data_tiering_enabled}

---

##### `durability`<sup>Optional</sup> <a name="durability" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.durability"></a>

- *Type:* java.lang.String

The durability setting for the replication group.

Valid values: default, async, sync, disabled. Enabling durability on an existing non-durable cluster or disabling durability on an existing durable cluster is not currently supported and will result in an error; specify the desired durability at create time. The resolved state is returned in EffectiveDurability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#durability ElasticacheReplicationGroup#durability}

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.engine"></a>

- *Type:* java.lang.String

The name of the cache engine to be used for the clusters in this replication group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#engine ElasticacheReplicationGroup#engine}

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.engineVersion"></a>

- *Type:* java.lang.String

The version number of the cache engine to be used for the clusters in this replication group.

To view the supported cache engine versions, use the DescribeCacheEngineVersions operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#engine_version ElasticacheReplicationGroup#engine_version}

---

##### `globalReplicationGroupId`<sup>Optional</sup> <a name="globalReplicationGroupId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.globalReplicationGroupId"></a>

- *Type:* java.lang.String

The name of the Global datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#global_replication_group_id ElasticacheReplicationGroup#global_replication_group_id}

---

##### `ipDiscovery`<sup>Optional</sup> <a name="ipDiscovery" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.ipDiscovery"></a>

- *Type:* java.lang.String

The network type you choose when creating a replication group, either ipv4 | ipv6.

IPv6 is supported for workloads using Redis OSS engine version 6.2 onward or Memcached engine version 1.6.6 on all instances built on the Nitro system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#ip_discovery ElasticacheReplicationGroup#ip_discovery}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.kmsKeyId"></a>

- *Type:* java.lang.String

The ID of the KMS key used to encrypt the disk on the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#kms_key_id ElasticacheReplicationGroup#kms_key_id}

---

##### `logDeliveryConfigurations`<sup>Optional</sup> <a name="logDeliveryConfigurations" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.logDeliveryConfigurations"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations">ElasticacheReplicationGroupLogDeliveryConfigurations</a>>

Specifies the destination, format and type of the logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#log_delivery_configurations ElasticacheReplicationGroup#log_delivery_configurations}

---

##### `multiAzEnabled`<sup>Optional</sup> <a name="multiAzEnabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.multiAzEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A flag indicating if you have Multi-AZ enabled to enhance fault tolerance. For more information, see Minimizing Downtime: Multi-AZ.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#multi_az_enabled ElasticacheReplicationGroup#multi_az_enabled}

---

##### `networkType`<sup>Optional</sup> <a name="networkType" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.networkType"></a>

- *Type:* java.lang.String

Must be either ipv4 | ipv6 | dual_stack.

IPv6 is supported for workloads using Redis OSS engine version 6.2 onward or Memcached engine version 1.6.6 on all instances built on the Nitro system

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#network_type ElasticacheReplicationGroup#network_type}

---

##### `nodeGroupConfiguration`<sup>Optional</sup> <a name="nodeGroupConfiguration" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.nodeGroupConfiguration"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration">ElasticacheReplicationGroupNodeGroupConfiguration</a>>

NodeGroupConfiguration is a property of the AWS::ElastiCache::ReplicationGroup resource that configures an Amazon ElastiCache (ElastiCache) Redis cluster node group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#node_group_configuration ElasticacheReplicationGroup#node_group_configuration}

---

##### `notificationTopicArn`<sup>Optional</sup> <a name="notificationTopicArn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.notificationTopicArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#notification_topic_arn ElasticacheReplicationGroup#notification_topic_arn}

---

##### `numCacheClusters`<sup>Optional</sup> <a name="numCacheClusters" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.numCacheClusters"></a>

- *Type:* java.lang.Number

The number of clusters this replication group initially has.This parameter is not used if there is more than one node group (shard). You should use ReplicasPerNodeGroup instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#num_cache_clusters ElasticacheReplicationGroup#num_cache_clusters}

---

##### `numNodeGroups`<sup>Optional</sup> <a name="numNodeGroups" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.numNodeGroups"></a>

- *Type:* java.lang.Number

An optional parameter that specifies the number of node groups (shards) for this Redis (cluster mode enabled) replication group.

For Redis (cluster mode disabled) either omit this parameter or set it to 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#num_node_groups ElasticacheReplicationGroup#num_node_groups}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.port"></a>

- *Type:* java.lang.Number

The port number on which each member of the replication group accepts connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#port ElasticacheReplicationGroup#port}

---

##### `preferredCacheClusterAZs`<sup>Optional</sup> <a name="preferredCacheClusterAZs" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.preferredCacheClusterAZs"></a>

- *Type:* java.util.List<java.lang.String>

A list of EC2 Availability Zones in which the replication group's clusters are created.

The order of the Availability Zones in the list is the order in which clusters are allocated. The primary cluster is created in the first AZ in the list. This parameter is not used if there is more than one node group (shard). You should use NodeGroupConfiguration instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#preferred_cache_cluster_a_zs ElasticacheReplicationGroup#preferred_cache_cluster_a_zs}

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.preferredMaintenanceWindow"></a>

- *Type:* java.lang.String

Specifies the weekly time range during which maintenance on the cluster is performed.

It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#preferred_maintenance_window ElasticacheReplicationGroup#preferred_maintenance_window}

---

##### `primaryClusterId`<sup>Optional</sup> <a name="primaryClusterId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.primaryClusterId"></a>

- *Type:* java.lang.String

The identifier of the cluster that serves as the primary for this replication group.

This cluster must already exist and have a status of available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#primary_cluster_id ElasticacheReplicationGroup#primary_cluster_id}

---

##### `replicasPerNodeGroup`<sup>Optional</sup> <a name="replicasPerNodeGroup" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.replicasPerNodeGroup"></a>

- *Type:* java.lang.Number

An optional parameter that specifies the number of replica nodes in each node group (shard).

Valid values are 0 to 5.

**Note:** Using ReplicasPerNodeGroup with NodeGroupConfiguration results in resource replacement. For online scaling, use ReplicasPerNodeGroup alone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#replicas_per_node_group ElasticacheReplicationGroup#replicas_per_node_group}

---

##### `replicationGroupId`<sup>Optional</sup> <a name="replicationGroupId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.replicationGroupId"></a>

- *Type:* java.lang.String

The replication group identifier. This parameter is stored as a lowercase string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#replication_group_id ElasticacheReplicationGroup#replication_group_id}

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.securityGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

One or more Amazon VPC security groups associated with this replication group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#security_group_ids ElasticacheReplicationGroup#security_group_ids}

---

##### `snapshotArns`<sup>Optional</sup> <a name="snapshotArns" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.snapshotArns"></a>

- *Type:* java.util.List<java.lang.String>

A list of Amazon Resource Names (ARN) that uniquely identify the Redis RDB snapshot files stored in Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#snapshot_arns ElasticacheReplicationGroup#snapshot_arns}

---

##### `snapshotName`<sup>Optional</sup> <a name="snapshotName" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.snapshotName"></a>

- *Type:* java.lang.String

The name of a snapshot from which to restore data into the new replication group.

The snapshot status changes to restoring while the new replication group is being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#snapshot_name ElasticacheReplicationGroup#snapshot_name}

---

##### `snapshotRetentionLimit`<sup>Optional</sup> <a name="snapshotRetentionLimit" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.snapshotRetentionLimit"></a>

- *Type:* java.lang.Number

The number of days for which ElastiCache retains automatic snapshots before deleting them.

For example, if you set SnapshotRetentionLimit to 5, a snapshot that was taken today is retained for 5 days before being deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#snapshot_retention_limit ElasticacheReplicationGroup#snapshot_retention_limit}

---

##### `snapshottingClusterId`<sup>Optional</sup> <a name="snapshottingClusterId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.snapshottingClusterId"></a>

- *Type:* java.lang.String

The cluster ID that is used as the daily snapshot source for the replication group.

This parameter cannot be set for Redis (cluster mode enabled) replication groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#snapshotting_cluster_id ElasticacheReplicationGroup#snapshotting_cluster_id}

---

##### `snapshotWindow`<sup>Optional</sup> <a name="snapshotWindow" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.snapshotWindow"></a>

- *Type:* java.lang.String

The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your node group (shard).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#snapshot_window ElasticacheReplicationGroup#snapshot_window}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTags">ElasticacheReplicationGroupTags</a>>

A list of cost allocation tags to be added to this resource.

Tags are comma-separated key,value pairs (e.g. Key=myKey, Value=myKeyValue. You can include multiple tags as shown following: Key=myKey, Value=myKeyValue Key=mySecondKey, Value=mySecondKeyValue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#tags ElasticacheReplicationGroup#tags}

---

##### `transitEncryptionEnabled`<sup>Optional</sup> <a name="transitEncryptionEnabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.transitEncryptionEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A flag that enables in-transit encryption when set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#transit_encryption_enabled ElasticacheReplicationGroup#transit_encryption_enabled}

---

##### `transitEncryptionMode`<sup>Optional</sup> <a name="transitEncryptionMode" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.transitEncryptionMode"></a>

- *Type:* java.lang.String

A setting that allows you to migrate your clients to use in-transit encryption, with no downtime.

When setting TransitEncryptionEnabled to true, you can set your TransitEncryptionMode to preferred in the same request, to allow both encrypted and unencrypted connections at the same time. Once you migrate all your Redis OSS clients to use encrypted connections you can modify the value to required to allow encrypted connections only. Setting TransitEncryptionMode to required is a two-step process that requires you to first set the TransitEncryptionMode to preferred, after that you can set TransitEncryptionMode to required. This process will not trigger the replacement of the replication group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#transit_encryption_mode ElasticacheReplicationGroup#transit_encryption_mode}

---

##### `userGroupIds`<sup>Optional</sup> <a name="userGroupIds" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.userGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

The ID of user group to associate with the replication group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#user_group_ids ElasticacheReplicationGroup#user_group_ids}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.putLogDeliveryConfigurations">putLogDeliveryConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.putNodeGroupConfiguration">putNodeGroupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAtRestEncryptionEnabled">resetAtRestEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAuthToken">resetAuthToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAutomaticFailoverEnabled">resetAutomaticFailoverEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAutoMinorVersionUpgrade">resetAutoMinorVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetCacheNodeType">resetCacheNodeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetCacheParameterGroupName">resetCacheParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetCacheSecurityGroupNames">resetCacheSecurityGroupNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetCacheSubnetGroupName">resetCacheSubnetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetClusterMode">resetClusterMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetDataTieringEnabled">resetDataTieringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetDurability">resetDurability</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetEngine">resetEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetEngineVersion">resetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetGlobalReplicationGroupId">resetGlobalReplicationGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetIpDiscovery">resetIpDiscovery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetLogDeliveryConfigurations">resetLogDeliveryConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetMultiAzEnabled">resetMultiAzEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNetworkType">resetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNodeGroupConfiguration">resetNodeGroupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNotificationTopicArn">resetNotificationTopicArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNumCacheClusters">resetNumCacheClusters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNumNodeGroups">resetNumNodeGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetPreferredCacheClusterAZs">resetPreferredCacheClusterAZs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetPreferredMaintenanceWindow">resetPreferredMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetPrimaryClusterId">resetPrimaryClusterId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetReplicasPerNodeGroup">resetReplicasPerNodeGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetReplicationGroupId">resetReplicationGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshotArns">resetSnapshotArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshotName">resetSnapshotName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshotRetentionLimit">resetSnapshotRetentionLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshottingClusterId">resetSnapshottingClusterId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshotWindow">resetSnapshotWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetTransitEncryptionEnabled">resetTransitEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetTransitEncryptionMode">resetTransitEncryptionMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetUserGroupIds">resetUserGroupIds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLogDeliveryConfigurations` <a name="putLogDeliveryConfigurations" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.putLogDeliveryConfigurations"></a>

```java
public void putLogDeliveryConfigurations(IResolvable|java.util.List<ElasticacheReplicationGroupLogDeliveryConfigurations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.putLogDeliveryConfigurations.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations">ElasticacheReplicationGroupLogDeliveryConfigurations</a>>

---

##### `putNodeGroupConfiguration` <a name="putNodeGroupConfiguration" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.putNodeGroupConfiguration"></a>

```java
public void putNodeGroupConfiguration(IResolvable|java.util.List<ElasticacheReplicationGroupNodeGroupConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.putNodeGroupConfiguration.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration">ElasticacheReplicationGroupNodeGroupConfiguration</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<ElasticacheReplicationGroupTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTags">ElasticacheReplicationGroupTags</a>>

---

##### `resetAtRestEncryptionEnabled` <a name="resetAtRestEncryptionEnabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAtRestEncryptionEnabled"></a>

```java
public void resetAtRestEncryptionEnabled()
```

##### `resetAuthToken` <a name="resetAuthToken" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAuthToken"></a>

```java
public void resetAuthToken()
```

##### `resetAutomaticFailoverEnabled` <a name="resetAutomaticFailoverEnabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAutomaticFailoverEnabled"></a>

```java
public void resetAutomaticFailoverEnabled()
```

##### `resetAutoMinorVersionUpgrade` <a name="resetAutoMinorVersionUpgrade" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAutoMinorVersionUpgrade"></a>

```java
public void resetAutoMinorVersionUpgrade()
```

##### `resetCacheNodeType` <a name="resetCacheNodeType" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetCacheNodeType"></a>

```java
public void resetCacheNodeType()
```

##### `resetCacheParameterGroupName` <a name="resetCacheParameterGroupName" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetCacheParameterGroupName"></a>

```java
public void resetCacheParameterGroupName()
```

##### `resetCacheSecurityGroupNames` <a name="resetCacheSecurityGroupNames" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetCacheSecurityGroupNames"></a>

```java
public void resetCacheSecurityGroupNames()
```

##### `resetCacheSubnetGroupName` <a name="resetCacheSubnetGroupName" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetCacheSubnetGroupName"></a>

```java
public void resetCacheSubnetGroupName()
```

##### `resetClusterMode` <a name="resetClusterMode" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetClusterMode"></a>

```java
public void resetClusterMode()
```

##### `resetDataTieringEnabled` <a name="resetDataTieringEnabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetDataTieringEnabled"></a>

```java
public void resetDataTieringEnabled()
```

##### `resetDurability` <a name="resetDurability" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetDurability"></a>

```java
public void resetDurability()
```

##### `resetEngine` <a name="resetEngine" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetEngine"></a>

```java
public void resetEngine()
```

##### `resetEngineVersion` <a name="resetEngineVersion" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetEngineVersion"></a>

```java
public void resetEngineVersion()
```

##### `resetGlobalReplicationGroupId` <a name="resetGlobalReplicationGroupId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetGlobalReplicationGroupId"></a>

```java
public void resetGlobalReplicationGroupId()
```

##### `resetIpDiscovery` <a name="resetIpDiscovery" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetIpDiscovery"></a>

```java
public void resetIpDiscovery()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetLogDeliveryConfigurations` <a name="resetLogDeliveryConfigurations" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetLogDeliveryConfigurations"></a>

```java
public void resetLogDeliveryConfigurations()
```

##### `resetMultiAzEnabled` <a name="resetMultiAzEnabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetMultiAzEnabled"></a>

```java
public void resetMultiAzEnabled()
```

##### `resetNetworkType` <a name="resetNetworkType" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNetworkType"></a>

```java
public void resetNetworkType()
```

##### `resetNodeGroupConfiguration` <a name="resetNodeGroupConfiguration" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNodeGroupConfiguration"></a>

```java
public void resetNodeGroupConfiguration()
```

##### `resetNotificationTopicArn` <a name="resetNotificationTopicArn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNotificationTopicArn"></a>

```java
public void resetNotificationTopicArn()
```

##### `resetNumCacheClusters` <a name="resetNumCacheClusters" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNumCacheClusters"></a>

```java
public void resetNumCacheClusters()
```

##### `resetNumNodeGroups` <a name="resetNumNodeGroups" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNumNodeGroups"></a>

```java
public void resetNumNodeGroups()
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetPort"></a>

```java
public void resetPort()
```

##### `resetPreferredCacheClusterAZs` <a name="resetPreferredCacheClusterAZs" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetPreferredCacheClusterAZs"></a>

```java
public void resetPreferredCacheClusterAZs()
```

##### `resetPreferredMaintenanceWindow` <a name="resetPreferredMaintenanceWindow" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetPreferredMaintenanceWindow"></a>

```java
public void resetPreferredMaintenanceWindow()
```

##### `resetPrimaryClusterId` <a name="resetPrimaryClusterId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetPrimaryClusterId"></a>

```java
public void resetPrimaryClusterId()
```

##### `resetReplicasPerNodeGroup` <a name="resetReplicasPerNodeGroup" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetReplicasPerNodeGroup"></a>

```java
public void resetReplicasPerNodeGroup()
```

##### `resetReplicationGroupId` <a name="resetReplicationGroupId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetReplicationGroupId"></a>

```java
public void resetReplicationGroupId()
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSecurityGroupIds"></a>

```java
public void resetSecurityGroupIds()
```

##### `resetSnapshotArns` <a name="resetSnapshotArns" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshotArns"></a>

```java
public void resetSnapshotArns()
```

##### `resetSnapshotName` <a name="resetSnapshotName" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshotName"></a>

```java
public void resetSnapshotName()
```

##### `resetSnapshotRetentionLimit` <a name="resetSnapshotRetentionLimit" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshotRetentionLimit"></a>

```java
public void resetSnapshotRetentionLimit()
```

##### `resetSnapshottingClusterId` <a name="resetSnapshottingClusterId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshottingClusterId"></a>

```java
public void resetSnapshottingClusterId()
```

##### `resetSnapshotWindow` <a name="resetSnapshotWindow" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshotWindow"></a>

```java
public void resetSnapshotWindow()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetTags"></a>

```java
public void resetTags()
```

##### `resetTransitEncryptionEnabled` <a name="resetTransitEncryptionEnabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetTransitEncryptionEnabled"></a>

```java
public void resetTransitEncryptionEnabled()
```

##### `resetTransitEncryptionMode` <a name="resetTransitEncryptionMode" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetTransitEncryptionMode"></a>

```java
public void resetTransitEncryptionMode()
```

##### `resetUserGroupIds` <a name="resetUserGroupIds" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetUserGroupIds"></a>

```java
public void resetUserGroupIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ElasticacheReplicationGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.isConstruct"></a>

```java
import io.cdktn.providers.awscc.elasticache_replication_group.ElasticacheReplicationGroup;

ElasticacheReplicationGroup.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.elasticache_replication_group.ElasticacheReplicationGroup;

ElasticacheReplicationGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.elasticache_replication_group.ElasticacheReplicationGroup;

ElasticacheReplicationGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.elasticache_replication_group.ElasticacheReplicationGroup;

ElasticacheReplicationGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ElasticacheReplicationGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ElasticacheReplicationGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ElasticacheReplicationGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ElasticacheReplicationGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ElasticacheReplicationGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.configurationEndPoint">configurationEndPoint</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference">ElasticacheReplicationGroupConfigurationEndPointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.effectiveDurability">effectiveDurability</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.logDeliveryConfigurations">logDeliveryConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList">ElasticacheReplicationGroupLogDeliveryConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.nodeGroupConfiguration">nodeGroupConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList">ElasticacheReplicationGroupNodeGroupConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.primaryEndPoint">primaryEndPoint</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference">ElasticacheReplicationGroupPrimaryEndPointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.readEndPoint">readEndPoint</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference">ElasticacheReplicationGroupReadEndPointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.readerEndPoint">readerEndPoint</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference">ElasticacheReplicationGroupReaderEndPointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList">ElasticacheReplicationGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.atRestEncryptionEnabledInput">atRestEncryptionEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.authTokenInput">authTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.automaticFailoverEnabledInput">automaticFailoverEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.autoMinorVersionUpgradeInput">autoMinorVersionUpgradeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheNodeTypeInput">cacheNodeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheParameterGroupNameInput">cacheParameterGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheSecurityGroupNamesInput">cacheSecurityGroupNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheSubnetGroupNameInput">cacheSubnetGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.clusterModeInput">clusterModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.dataTieringEnabledInput">dataTieringEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.durabilityInput">durabilityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engineInput">engineInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engineVersionInput">engineVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.globalReplicationGroupIdInput">globalReplicationGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.ipDiscoveryInput">ipDiscoveryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.logDeliveryConfigurationsInput">logDeliveryConfigurationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations">ElasticacheReplicationGroupLogDeliveryConfigurations</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.multiAzEnabledInput">multiAzEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.networkTypeInput">networkTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.nodeGroupConfigurationInput">nodeGroupConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration">ElasticacheReplicationGroupNodeGroupConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.notificationTopicArnInput">notificationTopicArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numCacheClustersInput">numCacheClustersInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numNodeGroupsInput">numNodeGroupsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.preferredCacheClusterAZsInput">preferredCacheClusterAZsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.preferredMaintenanceWindowInput">preferredMaintenanceWindowInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.primaryClusterIdInput">primaryClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicasPerNodeGroupInput">replicasPerNodeGroupInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicationGroupDescriptionInput">replicationGroupDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicationGroupIdInput">replicationGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotArnsInput">snapshotArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotNameInput">snapshotNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotRetentionLimitInput">snapshotRetentionLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshottingClusterIdInput">snapshottingClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotWindowInput">snapshotWindowInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTags">ElasticacheReplicationGroupTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.transitEncryptionEnabledInput">transitEncryptionEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.transitEncryptionModeInput">transitEncryptionModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.userGroupIdsInput">userGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.atRestEncryptionEnabled">atRestEncryptionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.authToken">authToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.automaticFailoverEnabled">automaticFailoverEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheNodeType">cacheNodeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheParameterGroupName">cacheParameterGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheSecurityGroupNames">cacheSecurityGroupNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheSubnetGroupName">cacheSubnetGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.clusterMode">clusterMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.dataTieringEnabled">dataTieringEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.durability">durability</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engine">engine</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.globalReplicationGroupId">globalReplicationGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.ipDiscovery">ipDiscovery</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.multiAzEnabled">multiAzEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.networkType">networkType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.notificationTopicArn">notificationTopicArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numCacheClusters">numCacheClusters</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numNodeGroups">numNodeGroups</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.preferredCacheClusterAZs">preferredCacheClusterAZs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.primaryClusterId">primaryClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicasPerNodeGroup">replicasPerNodeGroup</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicationGroupDescription">replicationGroupDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicationGroupId">replicationGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotArns">snapshotArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotName">snapshotName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotRetentionLimit">snapshotRetentionLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshottingClusterId">snapshottingClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotWindow">snapshotWindow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.transitEncryptionEnabled">transitEncryptionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.transitEncryptionMode">transitEncryptionMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.userGroupIds">userGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `configurationEndPoint`<sup>Required</sup> <a name="configurationEndPoint" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.configurationEndPoint"></a>

```java
public ElasticacheReplicationGroupConfigurationEndPointOutputReference getConfigurationEndPoint();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference">ElasticacheReplicationGroupConfigurationEndPointOutputReference</a>

---

##### `effectiveDurability`<sup>Required</sup> <a name="effectiveDurability" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.effectiveDurability"></a>

```java
public java.lang.String getEffectiveDurability();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `logDeliveryConfigurations`<sup>Required</sup> <a name="logDeliveryConfigurations" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.logDeliveryConfigurations"></a>

```java
public ElasticacheReplicationGroupLogDeliveryConfigurationsList getLogDeliveryConfigurations();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList">ElasticacheReplicationGroupLogDeliveryConfigurationsList</a>

---

##### `nodeGroupConfiguration`<sup>Required</sup> <a name="nodeGroupConfiguration" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.nodeGroupConfiguration"></a>

```java
public ElasticacheReplicationGroupNodeGroupConfigurationList getNodeGroupConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList">ElasticacheReplicationGroupNodeGroupConfigurationList</a>

---

##### `primaryEndPoint`<sup>Required</sup> <a name="primaryEndPoint" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.primaryEndPoint"></a>

```java
public ElasticacheReplicationGroupPrimaryEndPointOutputReference getPrimaryEndPoint();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference">ElasticacheReplicationGroupPrimaryEndPointOutputReference</a>

---

##### `readEndPoint`<sup>Required</sup> <a name="readEndPoint" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.readEndPoint"></a>

```java
public ElasticacheReplicationGroupReadEndPointOutputReference getReadEndPoint();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference">ElasticacheReplicationGroupReadEndPointOutputReference</a>

---

##### `readerEndPoint`<sup>Required</sup> <a name="readerEndPoint" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.readerEndPoint"></a>

```java
public ElasticacheReplicationGroupReaderEndPointOutputReference getReaderEndPoint();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference">ElasticacheReplicationGroupReaderEndPointOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.tags"></a>

```java
public ElasticacheReplicationGroupTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList">ElasticacheReplicationGroupTagsList</a>

---

##### `atRestEncryptionEnabledInput`<sup>Optional</sup> <a name="atRestEncryptionEnabledInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.atRestEncryptionEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getAtRestEncryptionEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `authTokenInput`<sup>Optional</sup> <a name="authTokenInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.authTokenInput"></a>

```java
public java.lang.String getAuthTokenInput();
```

- *Type:* java.lang.String

---

##### `automaticFailoverEnabledInput`<sup>Optional</sup> <a name="automaticFailoverEnabledInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.automaticFailoverEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getAutomaticFailoverEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `autoMinorVersionUpgradeInput`<sup>Optional</sup> <a name="autoMinorVersionUpgradeInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.autoMinorVersionUpgradeInput"></a>

```java
public java.lang.Boolean|IResolvable getAutoMinorVersionUpgradeInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `cacheNodeTypeInput`<sup>Optional</sup> <a name="cacheNodeTypeInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheNodeTypeInput"></a>

```java
public java.lang.String getCacheNodeTypeInput();
```

- *Type:* java.lang.String

---

##### `cacheParameterGroupNameInput`<sup>Optional</sup> <a name="cacheParameterGroupNameInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheParameterGroupNameInput"></a>

```java
public java.lang.String getCacheParameterGroupNameInput();
```

- *Type:* java.lang.String

---

##### `cacheSecurityGroupNamesInput`<sup>Optional</sup> <a name="cacheSecurityGroupNamesInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheSecurityGroupNamesInput"></a>

```java
public java.util.List<java.lang.String> getCacheSecurityGroupNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cacheSubnetGroupNameInput`<sup>Optional</sup> <a name="cacheSubnetGroupNameInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheSubnetGroupNameInput"></a>

```java
public java.lang.String getCacheSubnetGroupNameInput();
```

- *Type:* java.lang.String

---

##### `clusterModeInput`<sup>Optional</sup> <a name="clusterModeInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.clusterModeInput"></a>

```java
public java.lang.String getClusterModeInput();
```

- *Type:* java.lang.String

---

##### `dataTieringEnabledInput`<sup>Optional</sup> <a name="dataTieringEnabledInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.dataTieringEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDataTieringEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `durabilityInput`<sup>Optional</sup> <a name="durabilityInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.durabilityInput"></a>

```java
public java.lang.String getDurabilityInput();
```

- *Type:* java.lang.String

---

##### `engineInput`<sup>Optional</sup> <a name="engineInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engineInput"></a>

```java
public java.lang.String getEngineInput();
```

- *Type:* java.lang.String

---

##### `engineVersionInput`<sup>Optional</sup> <a name="engineVersionInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engineVersionInput"></a>

```java
public java.lang.String getEngineVersionInput();
```

- *Type:* java.lang.String

---

##### `globalReplicationGroupIdInput`<sup>Optional</sup> <a name="globalReplicationGroupIdInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.globalReplicationGroupIdInput"></a>

```java
public java.lang.String getGlobalReplicationGroupIdInput();
```

- *Type:* java.lang.String

---

##### `ipDiscoveryInput`<sup>Optional</sup> <a name="ipDiscoveryInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.ipDiscoveryInput"></a>

```java
public java.lang.String getIpDiscoveryInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `logDeliveryConfigurationsInput`<sup>Optional</sup> <a name="logDeliveryConfigurationsInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.logDeliveryConfigurationsInput"></a>

```java
public IResolvable|java.util.List<ElasticacheReplicationGroupLogDeliveryConfigurations> getLogDeliveryConfigurationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations">ElasticacheReplicationGroupLogDeliveryConfigurations</a>>

---

##### `multiAzEnabledInput`<sup>Optional</sup> <a name="multiAzEnabledInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.multiAzEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getMultiAzEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `networkTypeInput`<sup>Optional</sup> <a name="networkTypeInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.networkTypeInput"></a>

```java
public java.lang.String getNetworkTypeInput();
```

- *Type:* java.lang.String

---

##### `nodeGroupConfigurationInput`<sup>Optional</sup> <a name="nodeGroupConfigurationInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.nodeGroupConfigurationInput"></a>

```java
public IResolvable|java.util.List<ElasticacheReplicationGroupNodeGroupConfiguration> getNodeGroupConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration">ElasticacheReplicationGroupNodeGroupConfiguration</a>>

---

##### `notificationTopicArnInput`<sup>Optional</sup> <a name="notificationTopicArnInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.notificationTopicArnInput"></a>

```java
public java.lang.String getNotificationTopicArnInput();
```

- *Type:* java.lang.String

---

##### `numCacheClustersInput`<sup>Optional</sup> <a name="numCacheClustersInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numCacheClustersInput"></a>

```java
public java.lang.Number getNumCacheClustersInput();
```

- *Type:* java.lang.Number

---

##### `numNodeGroupsInput`<sup>Optional</sup> <a name="numNodeGroupsInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numNodeGroupsInput"></a>

```java
public java.lang.Number getNumNodeGroupsInput();
```

- *Type:* java.lang.Number

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `preferredCacheClusterAZsInput`<sup>Optional</sup> <a name="preferredCacheClusterAZsInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.preferredCacheClusterAZsInput"></a>

```java
public java.util.List<java.lang.String> getPreferredCacheClusterAZsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `preferredMaintenanceWindowInput`<sup>Optional</sup> <a name="preferredMaintenanceWindowInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.preferredMaintenanceWindowInput"></a>

```java
public java.lang.String getPreferredMaintenanceWindowInput();
```

- *Type:* java.lang.String

---

##### `primaryClusterIdInput`<sup>Optional</sup> <a name="primaryClusterIdInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.primaryClusterIdInput"></a>

```java
public java.lang.String getPrimaryClusterIdInput();
```

- *Type:* java.lang.String

---

##### `replicasPerNodeGroupInput`<sup>Optional</sup> <a name="replicasPerNodeGroupInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicasPerNodeGroupInput"></a>

```java
public java.lang.Number getReplicasPerNodeGroupInput();
```

- *Type:* java.lang.Number

---

##### `replicationGroupDescriptionInput`<sup>Optional</sup> <a name="replicationGroupDescriptionInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicationGroupDescriptionInput"></a>

```java
public java.lang.String getReplicationGroupDescriptionInput();
```

- *Type:* java.lang.String

---

##### `replicationGroupIdInput`<sup>Optional</sup> <a name="replicationGroupIdInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicationGroupIdInput"></a>

```java
public java.lang.String getReplicationGroupIdInput();
```

- *Type:* java.lang.String

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `snapshotArnsInput`<sup>Optional</sup> <a name="snapshotArnsInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotArnsInput"></a>

```java
public java.util.List<java.lang.String> getSnapshotArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `snapshotNameInput`<sup>Optional</sup> <a name="snapshotNameInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotNameInput"></a>

```java
public java.lang.String getSnapshotNameInput();
```

- *Type:* java.lang.String

---

##### `snapshotRetentionLimitInput`<sup>Optional</sup> <a name="snapshotRetentionLimitInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotRetentionLimitInput"></a>

```java
public java.lang.Number getSnapshotRetentionLimitInput();
```

- *Type:* java.lang.Number

---

##### `snapshottingClusterIdInput`<sup>Optional</sup> <a name="snapshottingClusterIdInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshottingClusterIdInput"></a>

```java
public java.lang.String getSnapshottingClusterIdInput();
```

- *Type:* java.lang.String

---

##### `snapshotWindowInput`<sup>Optional</sup> <a name="snapshotWindowInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotWindowInput"></a>

```java
public java.lang.String getSnapshotWindowInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.tagsInput"></a>

```java
public IResolvable|java.util.List<ElasticacheReplicationGroupTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTags">ElasticacheReplicationGroupTags</a>>

---

##### `transitEncryptionEnabledInput`<sup>Optional</sup> <a name="transitEncryptionEnabledInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.transitEncryptionEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getTransitEncryptionEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `transitEncryptionModeInput`<sup>Optional</sup> <a name="transitEncryptionModeInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.transitEncryptionModeInput"></a>

```java
public java.lang.String getTransitEncryptionModeInput();
```

- *Type:* java.lang.String

---

##### `userGroupIdsInput`<sup>Optional</sup> <a name="userGroupIdsInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.userGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getUserGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `atRestEncryptionEnabled`<sup>Required</sup> <a name="atRestEncryptionEnabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.atRestEncryptionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getAtRestEncryptionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `authToken`<sup>Required</sup> <a name="authToken" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.authToken"></a>

```java
public java.lang.String getAuthToken();
```

- *Type:* java.lang.String

---

##### `automaticFailoverEnabled`<sup>Required</sup> <a name="automaticFailoverEnabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.automaticFailoverEnabled"></a>

```java
public java.lang.Boolean|IResolvable getAutomaticFailoverEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `autoMinorVersionUpgrade`<sup>Required</sup> <a name="autoMinorVersionUpgrade" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.autoMinorVersionUpgrade"></a>

```java
public java.lang.Boolean|IResolvable getAutoMinorVersionUpgrade();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `cacheNodeType`<sup>Required</sup> <a name="cacheNodeType" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheNodeType"></a>

```java
public java.lang.String getCacheNodeType();
```

- *Type:* java.lang.String

---

##### `cacheParameterGroupName`<sup>Required</sup> <a name="cacheParameterGroupName" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheParameterGroupName"></a>

```java
public java.lang.String getCacheParameterGroupName();
```

- *Type:* java.lang.String

---

##### `cacheSecurityGroupNames`<sup>Required</sup> <a name="cacheSecurityGroupNames" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheSecurityGroupNames"></a>

```java
public java.util.List<java.lang.String> getCacheSecurityGroupNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cacheSubnetGroupName`<sup>Required</sup> <a name="cacheSubnetGroupName" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cacheSubnetGroupName"></a>

```java
public java.lang.String getCacheSubnetGroupName();
```

- *Type:* java.lang.String

---

##### `clusterMode`<sup>Required</sup> <a name="clusterMode" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.clusterMode"></a>

```java
public java.lang.String getClusterMode();
```

- *Type:* java.lang.String

---

##### `dataTieringEnabled`<sup>Required</sup> <a name="dataTieringEnabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.dataTieringEnabled"></a>

```java
public java.lang.Boolean|IResolvable getDataTieringEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `durability`<sup>Required</sup> <a name="durability" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.durability"></a>

```java
public java.lang.String getDurability();
```

- *Type:* java.lang.String

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engine"></a>

```java
public java.lang.String getEngine();
```

- *Type:* java.lang.String

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engineVersion"></a>

```java
public java.lang.String getEngineVersion();
```

- *Type:* java.lang.String

---

##### `globalReplicationGroupId`<sup>Required</sup> <a name="globalReplicationGroupId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.globalReplicationGroupId"></a>

```java
public java.lang.String getGlobalReplicationGroupId();
```

- *Type:* java.lang.String

---

##### `ipDiscovery`<sup>Required</sup> <a name="ipDiscovery" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.ipDiscovery"></a>

```java
public java.lang.String getIpDiscovery();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `multiAzEnabled`<sup>Required</sup> <a name="multiAzEnabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.multiAzEnabled"></a>

```java
public java.lang.Boolean|IResolvable getMultiAzEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.networkType"></a>

```java
public java.lang.String getNetworkType();
```

- *Type:* java.lang.String

---

##### `notificationTopicArn`<sup>Required</sup> <a name="notificationTopicArn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.notificationTopicArn"></a>

```java
public java.lang.String getNotificationTopicArn();
```

- *Type:* java.lang.String

---

##### `numCacheClusters`<sup>Required</sup> <a name="numCacheClusters" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numCacheClusters"></a>

```java
public java.lang.Number getNumCacheClusters();
```

- *Type:* java.lang.Number

---

##### `numNodeGroups`<sup>Required</sup> <a name="numNodeGroups" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numNodeGroups"></a>

```java
public java.lang.Number getNumNodeGroups();
```

- *Type:* java.lang.Number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `preferredCacheClusterAZs`<sup>Required</sup> <a name="preferredCacheClusterAZs" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.preferredCacheClusterAZs"></a>

```java
public java.util.List<java.lang.String> getPreferredCacheClusterAZs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.preferredMaintenanceWindow"></a>

```java
public java.lang.String getPreferredMaintenanceWindow();
```

- *Type:* java.lang.String

---

##### `primaryClusterId`<sup>Required</sup> <a name="primaryClusterId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.primaryClusterId"></a>

```java
public java.lang.String getPrimaryClusterId();
```

- *Type:* java.lang.String

---

##### `replicasPerNodeGroup`<sup>Required</sup> <a name="replicasPerNodeGroup" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicasPerNodeGroup"></a>

```java
public java.lang.Number getReplicasPerNodeGroup();
```

- *Type:* java.lang.Number

---

##### `replicationGroupDescription`<sup>Required</sup> <a name="replicationGroupDescription" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicationGroupDescription"></a>

```java
public java.lang.String getReplicationGroupDescription();
```

- *Type:* java.lang.String

---

##### `replicationGroupId`<sup>Required</sup> <a name="replicationGroupId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicationGroupId"></a>

```java
public java.lang.String getReplicationGroupId();
```

- *Type:* java.lang.String

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `snapshotArns`<sup>Required</sup> <a name="snapshotArns" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotArns"></a>

```java
public java.util.List<java.lang.String> getSnapshotArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `snapshotName`<sup>Required</sup> <a name="snapshotName" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotName"></a>

```java
public java.lang.String getSnapshotName();
```

- *Type:* java.lang.String

---

##### `snapshotRetentionLimit`<sup>Required</sup> <a name="snapshotRetentionLimit" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotRetentionLimit"></a>

```java
public java.lang.Number getSnapshotRetentionLimit();
```

- *Type:* java.lang.Number

---

##### `snapshottingClusterId`<sup>Required</sup> <a name="snapshottingClusterId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshottingClusterId"></a>

```java
public java.lang.String getSnapshottingClusterId();
```

- *Type:* java.lang.String

---

##### `snapshotWindow`<sup>Required</sup> <a name="snapshotWindow" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotWindow"></a>

```java
public java.lang.String getSnapshotWindow();
```

- *Type:* java.lang.String

---

##### `transitEncryptionEnabled`<sup>Required</sup> <a name="transitEncryptionEnabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.transitEncryptionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getTransitEncryptionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `transitEncryptionMode`<sup>Required</sup> <a name="transitEncryptionMode" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.transitEncryptionMode"></a>

```java
public java.lang.String getTransitEncryptionMode();
```

- *Type:* java.lang.String

---

##### `userGroupIds`<sup>Required</sup> <a name="userGroupIds" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.userGroupIds"></a>

```java
public java.util.List<java.lang.String> getUserGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticacheReplicationGroupConfig <a name="ElasticacheReplicationGroupConfig" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticache_replication_group.ElasticacheReplicationGroupConfig;

ElasticacheReplicationGroupConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .replicationGroupDescription(java.lang.String)
//  .atRestEncryptionEnabled(java.lang.Boolean|IResolvable)
//  .authToken(java.lang.String)
//  .automaticFailoverEnabled(java.lang.Boolean|IResolvable)
//  .autoMinorVersionUpgrade(java.lang.Boolean|IResolvable)
//  .cacheNodeType(java.lang.String)
//  .cacheParameterGroupName(java.lang.String)
//  .cacheSecurityGroupNames(java.util.List<java.lang.String>)
//  .cacheSubnetGroupName(java.lang.String)
//  .clusterMode(java.lang.String)
//  .dataTieringEnabled(java.lang.Boolean|IResolvable)
//  .durability(java.lang.String)
//  .engine(java.lang.String)
//  .engineVersion(java.lang.String)
//  .globalReplicationGroupId(java.lang.String)
//  .ipDiscovery(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .logDeliveryConfigurations(IResolvable|java.util.List<ElasticacheReplicationGroupLogDeliveryConfigurations>)
//  .multiAzEnabled(java.lang.Boolean|IResolvable)
//  .networkType(java.lang.String)
//  .nodeGroupConfiguration(IResolvable|java.util.List<ElasticacheReplicationGroupNodeGroupConfiguration>)
//  .notificationTopicArn(java.lang.String)
//  .numCacheClusters(java.lang.Number)
//  .numNodeGroups(java.lang.Number)
//  .port(java.lang.Number)
//  .preferredCacheClusterAZs(java.util.List<java.lang.String>)
//  .preferredMaintenanceWindow(java.lang.String)
//  .primaryClusterId(java.lang.String)
//  .replicasPerNodeGroup(java.lang.Number)
//  .replicationGroupId(java.lang.String)
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .snapshotArns(java.util.List<java.lang.String>)
//  .snapshotName(java.lang.String)
//  .snapshotRetentionLimit(java.lang.Number)
//  .snapshottingClusterId(java.lang.String)
//  .snapshotWindow(java.lang.String)
//  .tags(IResolvable|java.util.List<ElasticacheReplicationGroupTags>)
//  .transitEncryptionEnabled(java.lang.Boolean|IResolvable)
//  .transitEncryptionMode(java.lang.String)
//  .userGroupIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.replicationGroupDescription">replicationGroupDescription</a></code> | <code>java.lang.String</code> | A user-created description for the replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.atRestEncryptionEnabled">atRestEncryptionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A flag that enables encryption at rest when set to true.AtRestEncryptionEnabled after the replication group is created. To enable encryption at rest on a replication group you must set AtRestEncryptionEnabled to true when you create the replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.authToken">authToken</a></code> | <code>java.lang.String</code> | Reserved parameter. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.automaticFailoverEnabled">automaticFailoverEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether a read-only replica is automatically promoted to read/write primary if the existing primary fails. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | This parameter is currently disabled. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.cacheNodeType">cacheNodeType</a></code> | <code>java.lang.String</code> | The compute and memory capacity of the nodes in the node group (shard). |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.cacheParameterGroupName">cacheParameterGroupName</a></code> | <code>java.lang.String</code> | The name of the parameter group to associate with this replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.cacheSecurityGroupNames">cacheSecurityGroupNames</a></code> | <code>java.util.List<java.lang.String></code> | A list of cache security group names to associate with this replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.cacheSubnetGroupName">cacheSubnetGroupName</a></code> | <code>java.lang.String</code> | The name of the cache subnet group to be used for the replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.clusterMode">clusterMode</a></code> | <code>java.lang.String</code> | Enabled or Disabled. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.dataTieringEnabled">dataTieringEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enables data tiering. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.durability">durability</a></code> | <code>java.lang.String</code> | The durability setting for the replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.engine">engine</a></code> | <code>java.lang.String</code> | The name of the cache engine to be used for the clusters in this replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | The version number of the cache engine to be used for the clusters in this replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.globalReplicationGroupId">globalReplicationGroupId</a></code> | <code>java.lang.String</code> | The name of the Global datastore. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.ipDiscovery">ipDiscovery</a></code> | <code>java.lang.String</code> | The network type you choose when creating a replication group, either ipv4 \| ipv6. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | The ID of the KMS key used to encrypt the disk on the cluster. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.logDeliveryConfigurations">logDeliveryConfigurations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations">ElasticacheReplicationGroupLogDeliveryConfigurations</a>></code> | Specifies the destination, format and type of the logs. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.multiAzEnabled">multiAzEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A flag indicating if you have Multi-AZ enabled to enhance fault tolerance. For more information, see Minimizing Downtime: Multi-AZ. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.networkType">networkType</a></code> | <code>java.lang.String</code> | Must be either ipv4 \| ipv6 \| dual_stack. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.nodeGroupConfiguration">nodeGroupConfiguration</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration">ElasticacheReplicationGroupNodeGroupConfiguration</a>></code> | NodeGroupConfiguration is a property of the AWS::ElastiCache::ReplicationGroup resource that configures an Amazon ElastiCache (ElastiCache) Redis cluster node group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.notificationTopicArn">notificationTopicArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.numCacheClusters">numCacheClusters</a></code> | <code>java.lang.Number</code> | The number of clusters this replication group initially has.This parameter is not used if there is more than one node group (shard). You should use ReplicasPerNodeGroup instead. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.numNodeGroups">numNodeGroups</a></code> | <code>java.lang.Number</code> | An optional parameter that specifies the number of node groups (shards) for this Redis (cluster mode enabled) replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.port">port</a></code> | <code>java.lang.Number</code> | The port number on which each member of the replication group accepts connections. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.preferredCacheClusterAZs">preferredCacheClusterAZs</a></code> | <code>java.util.List<java.lang.String></code> | A list of EC2 Availability Zones in which the replication group's clusters are created. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>java.lang.String</code> | Specifies the weekly time range during which maintenance on the cluster is performed. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.primaryClusterId">primaryClusterId</a></code> | <code>java.lang.String</code> | The identifier of the cluster that serves as the primary for this replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.replicasPerNodeGroup">replicasPerNodeGroup</a></code> | <code>java.lang.Number</code> | An optional parameter that specifies the number of replica nodes in each node group (shard). |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.replicationGroupId">replicationGroupId</a></code> | <code>java.lang.String</code> | The replication group identifier. This parameter is stored as a lowercase string. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | One or more Amazon VPC security groups associated with this replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshotArns">snapshotArns</a></code> | <code>java.util.List<java.lang.String></code> | A list of Amazon Resource Names (ARN) that uniquely identify the Redis RDB snapshot files stored in Amazon S3. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshotName">snapshotName</a></code> | <code>java.lang.String</code> | The name of a snapshot from which to restore data into the new replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshotRetentionLimit">snapshotRetentionLimit</a></code> | <code>java.lang.Number</code> | The number of days for which ElastiCache retains automatic snapshots before deleting them. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshottingClusterId">snapshottingClusterId</a></code> | <code>java.lang.String</code> | The cluster ID that is used as the daily snapshot source for the replication group. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshotWindow">snapshotWindow</a></code> | <code>java.lang.String</code> | The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your node group (shard). |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTags">ElasticacheReplicationGroupTags</a>></code> | A list of cost allocation tags to be added to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.transitEncryptionEnabled">transitEncryptionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A flag that enables in-transit encryption when set to true. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.transitEncryptionMode">transitEncryptionMode</a></code> | <code>java.lang.String</code> | A setting that allows you to migrate your clients to use in-transit encryption, with no downtime. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.userGroupIds">userGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | The ID of user group to associate with the replication group. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `replicationGroupDescription`<sup>Required</sup> <a name="replicationGroupDescription" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.replicationGroupDescription"></a>

```java
public java.lang.String getReplicationGroupDescription();
```

- *Type:* java.lang.String

A user-created description for the replication group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#replication_group_description ElasticacheReplicationGroup#replication_group_description}

---

##### `atRestEncryptionEnabled`<sup>Optional</sup> <a name="atRestEncryptionEnabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.atRestEncryptionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getAtRestEncryptionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A flag that enables encryption at rest when set to true.AtRestEncryptionEnabled after the replication group is created. To enable encryption at rest on a replication group you must set AtRestEncryptionEnabled to true when you create the replication group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#at_rest_encryption_enabled ElasticacheReplicationGroup#at_rest_encryption_enabled}

---

##### `authToken`<sup>Optional</sup> <a name="authToken" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.authToken"></a>

```java
public java.lang.String getAuthToken();
```

- *Type:* java.lang.String

Reserved parameter.

The password used to access a password protected server.AuthToken can be specified only on replication groups where TransitEncryptionEnabled is true. For more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#auth_token ElasticacheReplicationGroup#auth_token}

---

##### `automaticFailoverEnabled`<sup>Optional</sup> <a name="automaticFailoverEnabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.automaticFailoverEnabled"></a>

```java
public java.lang.Boolean|IResolvable getAutomaticFailoverEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether a read-only replica is automatically promoted to read/write primary if the existing primary fails.

AutomaticFailoverEnabled must be enabled for Redis (cluster mode enabled) replication groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#automatic_failover_enabled ElasticacheReplicationGroup#automatic_failover_enabled}

---

##### `autoMinorVersionUpgrade`<sup>Optional</sup> <a name="autoMinorVersionUpgrade" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.autoMinorVersionUpgrade"></a>

```java
public java.lang.Boolean|IResolvable getAutoMinorVersionUpgrade();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

This parameter is currently disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#auto_minor_version_upgrade ElasticacheReplicationGroup#auto_minor_version_upgrade}

---

##### `cacheNodeType`<sup>Optional</sup> <a name="cacheNodeType" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.cacheNodeType"></a>

```java
public java.lang.String getCacheNodeType();
```

- *Type:* java.lang.String

The compute and memory capacity of the nodes in the node group (shard).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#cache_node_type ElasticacheReplicationGroup#cache_node_type}

---

##### `cacheParameterGroupName`<sup>Optional</sup> <a name="cacheParameterGroupName" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.cacheParameterGroupName"></a>

```java
public java.lang.String getCacheParameterGroupName();
```

- *Type:* java.lang.String

The name of the parameter group to associate with this replication group.

If this argument is omitted, the default cache parameter group for the specified engine is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#cache_parameter_group_name ElasticacheReplicationGroup#cache_parameter_group_name}

---

##### `cacheSecurityGroupNames`<sup>Optional</sup> <a name="cacheSecurityGroupNames" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.cacheSecurityGroupNames"></a>

```java
public java.util.List<java.lang.String> getCacheSecurityGroupNames();
```

- *Type:* java.util.List<java.lang.String>

A list of cache security group names to associate with this replication group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#cache_security_group_names ElasticacheReplicationGroup#cache_security_group_names}

---

##### `cacheSubnetGroupName`<sup>Optional</sup> <a name="cacheSubnetGroupName" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.cacheSubnetGroupName"></a>

```java
public java.lang.String getCacheSubnetGroupName();
```

- *Type:* java.lang.String

The name of the cache subnet group to be used for the replication group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#cache_subnet_group_name ElasticacheReplicationGroup#cache_subnet_group_name}

---

##### `clusterMode`<sup>Optional</sup> <a name="clusterMode" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.clusterMode"></a>

```java
public java.lang.String getClusterMode();
```

- *Type:* java.lang.String

Enabled or Disabled.

To modify cluster mode from Disabled to Enabled, you must first set the cluster mode to Compatible. Compatible mode allows your Redis OSS clients to connect using both cluster mode enabled and cluster mode disabled. After you migrate all Redis OSS clients to use cluster mode enabled, you can then complete cluster mode configuration and set the cluster mode to Enabled. For more information, see Modify cluster mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#cluster_mode ElasticacheReplicationGroup#cluster_mode}

---

##### `dataTieringEnabled`<sup>Optional</sup> <a name="dataTieringEnabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.dataTieringEnabled"></a>

```java
public java.lang.Boolean|IResolvable getDataTieringEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enables data tiering.

Data tiering is only supported for replication groups using the r6gd node type. This parameter must be set to true when using r6gd nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#data_tiering_enabled ElasticacheReplicationGroup#data_tiering_enabled}

---

##### `durability`<sup>Optional</sup> <a name="durability" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.durability"></a>

```java
public java.lang.String getDurability();
```

- *Type:* java.lang.String

The durability setting for the replication group.

Valid values: default, async, sync, disabled. Enabling durability on an existing non-durable cluster or disabling durability on an existing durable cluster is not currently supported and will result in an error; specify the desired durability at create time. The resolved state is returned in EffectiveDurability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#durability ElasticacheReplicationGroup#durability}

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.engine"></a>

```java
public java.lang.String getEngine();
```

- *Type:* java.lang.String

The name of the cache engine to be used for the clusters in this replication group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#engine ElasticacheReplicationGroup#engine}

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.engineVersion"></a>

```java
public java.lang.String getEngineVersion();
```

- *Type:* java.lang.String

The version number of the cache engine to be used for the clusters in this replication group.

To view the supported cache engine versions, use the DescribeCacheEngineVersions operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#engine_version ElasticacheReplicationGroup#engine_version}

---

##### `globalReplicationGroupId`<sup>Optional</sup> <a name="globalReplicationGroupId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.globalReplicationGroupId"></a>

```java
public java.lang.String getGlobalReplicationGroupId();
```

- *Type:* java.lang.String

The name of the Global datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#global_replication_group_id ElasticacheReplicationGroup#global_replication_group_id}

---

##### `ipDiscovery`<sup>Optional</sup> <a name="ipDiscovery" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.ipDiscovery"></a>

```java
public java.lang.String getIpDiscovery();
```

- *Type:* java.lang.String

The network type you choose when creating a replication group, either ipv4 | ipv6.

IPv6 is supported for workloads using Redis OSS engine version 6.2 onward or Memcached engine version 1.6.6 on all instances built on the Nitro system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#ip_discovery ElasticacheReplicationGroup#ip_discovery}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

The ID of the KMS key used to encrypt the disk on the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#kms_key_id ElasticacheReplicationGroup#kms_key_id}

---

##### `logDeliveryConfigurations`<sup>Optional</sup> <a name="logDeliveryConfigurations" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.logDeliveryConfigurations"></a>

```java
public IResolvable|java.util.List<ElasticacheReplicationGroupLogDeliveryConfigurations> getLogDeliveryConfigurations();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations">ElasticacheReplicationGroupLogDeliveryConfigurations</a>>

Specifies the destination, format and type of the logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#log_delivery_configurations ElasticacheReplicationGroup#log_delivery_configurations}

---

##### `multiAzEnabled`<sup>Optional</sup> <a name="multiAzEnabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.multiAzEnabled"></a>

```java
public java.lang.Boolean|IResolvable getMultiAzEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A flag indicating if you have Multi-AZ enabled to enhance fault tolerance. For more information, see Minimizing Downtime: Multi-AZ.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#multi_az_enabled ElasticacheReplicationGroup#multi_az_enabled}

---

##### `networkType`<sup>Optional</sup> <a name="networkType" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.networkType"></a>

```java
public java.lang.String getNetworkType();
```

- *Type:* java.lang.String

Must be either ipv4 | ipv6 | dual_stack.

IPv6 is supported for workloads using Redis OSS engine version 6.2 onward or Memcached engine version 1.6.6 on all instances built on the Nitro system

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#network_type ElasticacheReplicationGroup#network_type}

---

##### `nodeGroupConfiguration`<sup>Optional</sup> <a name="nodeGroupConfiguration" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.nodeGroupConfiguration"></a>

```java
public IResolvable|java.util.List<ElasticacheReplicationGroupNodeGroupConfiguration> getNodeGroupConfiguration();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration">ElasticacheReplicationGroupNodeGroupConfiguration</a>>

NodeGroupConfiguration is a property of the AWS::ElastiCache::ReplicationGroup resource that configures an Amazon ElastiCache (ElastiCache) Redis cluster node group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#node_group_configuration ElasticacheReplicationGroup#node_group_configuration}

---

##### `notificationTopicArn`<sup>Optional</sup> <a name="notificationTopicArn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.notificationTopicArn"></a>

```java
public java.lang.String getNotificationTopicArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#notification_topic_arn ElasticacheReplicationGroup#notification_topic_arn}

---

##### `numCacheClusters`<sup>Optional</sup> <a name="numCacheClusters" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.numCacheClusters"></a>

```java
public java.lang.Number getNumCacheClusters();
```

- *Type:* java.lang.Number

The number of clusters this replication group initially has.This parameter is not used if there is more than one node group (shard). You should use ReplicasPerNodeGroup instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#num_cache_clusters ElasticacheReplicationGroup#num_cache_clusters}

---

##### `numNodeGroups`<sup>Optional</sup> <a name="numNodeGroups" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.numNodeGroups"></a>

```java
public java.lang.Number getNumNodeGroups();
```

- *Type:* java.lang.Number

An optional parameter that specifies the number of node groups (shards) for this Redis (cluster mode enabled) replication group.

For Redis (cluster mode disabled) either omit this parameter or set it to 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#num_node_groups ElasticacheReplicationGroup#num_node_groups}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The port number on which each member of the replication group accepts connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#port ElasticacheReplicationGroup#port}

---

##### `preferredCacheClusterAZs`<sup>Optional</sup> <a name="preferredCacheClusterAZs" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.preferredCacheClusterAZs"></a>

```java
public java.util.List<java.lang.String> getPreferredCacheClusterAZs();
```

- *Type:* java.util.List<java.lang.String>

A list of EC2 Availability Zones in which the replication group's clusters are created.

The order of the Availability Zones in the list is the order in which clusters are allocated. The primary cluster is created in the first AZ in the list. This parameter is not used if there is more than one node group (shard). You should use NodeGroupConfiguration instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#preferred_cache_cluster_a_zs ElasticacheReplicationGroup#preferred_cache_cluster_a_zs}

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.preferredMaintenanceWindow"></a>

```java
public java.lang.String getPreferredMaintenanceWindow();
```

- *Type:* java.lang.String

Specifies the weekly time range during which maintenance on the cluster is performed.

It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#preferred_maintenance_window ElasticacheReplicationGroup#preferred_maintenance_window}

---

##### `primaryClusterId`<sup>Optional</sup> <a name="primaryClusterId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.primaryClusterId"></a>

```java
public java.lang.String getPrimaryClusterId();
```

- *Type:* java.lang.String

The identifier of the cluster that serves as the primary for this replication group.

This cluster must already exist and have a status of available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#primary_cluster_id ElasticacheReplicationGroup#primary_cluster_id}

---

##### `replicasPerNodeGroup`<sup>Optional</sup> <a name="replicasPerNodeGroup" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.replicasPerNodeGroup"></a>

```java
public java.lang.Number getReplicasPerNodeGroup();
```

- *Type:* java.lang.Number

An optional parameter that specifies the number of replica nodes in each node group (shard).

Valid values are 0 to 5.

**Note:** Using ReplicasPerNodeGroup with NodeGroupConfiguration results in resource replacement. For online scaling, use ReplicasPerNodeGroup alone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#replicas_per_node_group ElasticacheReplicationGroup#replicas_per_node_group}

---

##### `replicationGroupId`<sup>Optional</sup> <a name="replicationGroupId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.replicationGroupId"></a>

```java
public java.lang.String getReplicationGroupId();
```

- *Type:* java.lang.String

The replication group identifier. This parameter is stored as a lowercase string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#replication_group_id ElasticacheReplicationGroup#replication_group_id}

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

One or more Amazon VPC security groups associated with this replication group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#security_group_ids ElasticacheReplicationGroup#security_group_ids}

---

##### `snapshotArns`<sup>Optional</sup> <a name="snapshotArns" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshotArns"></a>

```java
public java.util.List<java.lang.String> getSnapshotArns();
```

- *Type:* java.util.List<java.lang.String>

A list of Amazon Resource Names (ARN) that uniquely identify the Redis RDB snapshot files stored in Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#snapshot_arns ElasticacheReplicationGroup#snapshot_arns}

---

##### `snapshotName`<sup>Optional</sup> <a name="snapshotName" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshotName"></a>

```java
public java.lang.String getSnapshotName();
```

- *Type:* java.lang.String

The name of a snapshot from which to restore data into the new replication group.

The snapshot status changes to restoring while the new replication group is being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#snapshot_name ElasticacheReplicationGroup#snapshot_name}

---

##### `snapshotRetentionLimit`<sup>Optional</sup> <a name="snapshotRetentionLimit" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshotRetentionLimit"></a>

```java
public java.lang.Number getSnapshotRetentionLimit();
```

- *Type:* java.lang.Number

The number of days for which ElastiCache retains automatic snapshots before deleting them.

For example, if you set SnapshotRetentionLimit to 5, a snapshot that was taken today is retained for 5 days before being deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#snapshot_retention_limit ElasticacheReplicationGroup#snapshot_retention_limit}

---

##### `snapshottingClusterId`<sup>Optional</sup> <a name="snapshottingClusterId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshottingClusterId"></a>

```java
public java.lang.String getSnapshottingClusterId();
```

- *Type:* java.lang.String

The cluster ID that is used as the daily snapshot source for the replication group.

This parameter cannot be set for Redis (cluster mode enabled) replication groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#snapshotting_cluster_id ElasticacheReplicationGroup#snapshotting_cluster_id}

---

##### `snapshotWindow`<sup>Optional</sup> <a name="snapshotWindow" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshotWindow"></a>

```java
public java.lang.String getSnapshotWindow();
```

- *Type:* java.lang.String

The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your node group (shard).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#snapshot_window ElasticacheReplicationGroup#snapshot_window}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.tags"></a>

```java
public IResolvable|java.util.List<ElasticacheReplicationGroupTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTags">ElasticacheReplicationGroupTags</a>>

A list of cost allocation tags to be added to this resource.

Tags are comma-separated key,value pairs (e.g. Key=myKey, Value=myKeyValue. You can include multiple tags as shown following: Key=myKey, Value=myKeyValue Key=mySecondKey, Value=mySecondKeyValue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#tags ElasticacheReplicationGroup#tags}

---

##### `transitEncryptionEnabled`<sup>Optional</sup> <a name="transitEncryptionEnabled" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.transitEncryptionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getTransitEncryptionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A flag that enables in-transit encryption when set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#transit_encryption_enabled ElasticacheReplicationGroup#transit_encryption_enabled}

---

##### `transitEncryptionMode`<sup>Optional</sup> <a name="transitEncryptionMode" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.transitEncryptionMode"></a>

```java
public java.lang.String getTransitEncryptionMode();
```

- *Type:* java.lang.String

A setting that allows you to migrate your clients to use in-transit encryption, with no downtime.

When setting TransitEncryptionEnabled to true, you can set your TransitEncryptionMode to preferred in the same request, to allow both encrypted and unencrypted connections at the same time. Once you migrate all your Redis OSS clients to use encrypted connections you can modify the value to required to allow encrypted connections only. Setting TransitEncryptionMode to required is a two-step process that requires you to first set the TransitEncryptionMode to preferred, after that you can set TransitEncryptionMode to required. This process will not trigger the replacement of the replication group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#transit_encryption_mode ElasticacheReplicationGroup#transit_encryption_mode}

---

##### `userGroupIds`<sup>Optional</sup> <a name="userGroupIds" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.userGroupIds"></a>

```java
public java.util.List<java.lang.String> getUserGroupIds();
```

- *Type:* java.util.List<java.lang.String>

The ID of user group to associate with the replication group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#user_group_ids ElasticacheReplicationGroup#user_group_ids}

---

### ElasticacheReplicationGroupConfigurationEndPoint <a name="ElasticacheReplicationGroupConfigurationEndPoint" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPoint.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticache_replication_group.ElasticacheReplicationGroupConfigurationEndPoint;

ElasticacheReplicationGroupConfigurationEndPoint.builder()
    .build();
```


### ElasticacheReplicationGroupLogDeliveryConfigurations <a name="ElasticacheReplicationGroupLogDeliveryConfigurations" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticache_replication_group.ElasticacheReplicationGroupLogDeliveryConfigurations;

ElasticacheReplicationGroupLogDeliveryConfigurations.builder()
//  .destinationDetails(ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails)
//  .destinationType(java.lang.String)
//  .logFormat(java.lang.String)
//  .logType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations.property.destinationDetails">destinationDetails</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails</a></code> | Configuration details of either a CloudWatch Logs destination or Kinesis Data Firehose destination. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations.property.destinationType">destinationType</a></code> | <code>java.lang.String</code> | Specify either CloudWatch Logs or Kinesis Data Firehose as the destination type. Valid values are either cloudwatch-logs or kinesis-firehose. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations.property.logFormat">logFormat</a></code> | <code>java.lang.String</code> | Valid values are either json or text. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations.property.logType">logType</a></code> | <code>java.lang.String</code> | Valid value is either slow-log, which refers to slow-log or engine-log. |

---

##### `destinationDetails`<sup>Optional</sup> <a name="destinationDetails" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations.property.destinationDetails"></a>

```java
public ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails getDestinationDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails</a>

Configuration details of either a CloudWatch Logs destination or Kinesis Data Firehose destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#destination_details ElasticacheReplicationGroup#destination_details}

---

##### `destinationType`<sup>Optional</sup> <a name="destinationType" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations.property.destinationType"></a>

```java
public java.lang.String getDestinationType();
```

- *Type:* java.lang.String

Specify either CloudWatch Logs or Kinesis Data Firehose as the destination type. Valid values are either cloudwatch-logs or kinesis-firehose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#destination_type ElasticacheReplicationGroup#destination_type}

---

##### `logFormat`<sup>Optional</sup> <a name="logFormat" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations.property.logFormat"></a>

```java
public java.lang.String getLogFormat();
```

- *Type:* java.lang.String

Valid values are either json or text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#log_format ElasticacheReplicationGroup#log_format}

---

##### `logType`<sup>Optional</sup> <a name="logType" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations.property.logType"></a>

```java
public java.lang.String getLogType();
```

- *Type:* java.lang.String

Valid value is either slow-log, which refers to slow-log or engine-log.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#log_type ElasticacheReplicationGroup#log_type}

---

### ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails <a name="ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticache_replication_group.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails;

ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails.builder()
//  .cloudwatchLogsDetails(ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails)
//  .kinesisFirehoseDetails(ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails.property.cloudwatchLogsDetails">cloudwatchLogsDetails</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails</a></code> | The configuration details of the CloudWatch Logs destination. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails.property.kinesisFirehoseDetails">kinesisFirehoseDetails</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails</a></code> | The configuration details of the Kinesis Data Firehose destination. |

---

##### `cloudwatchLogsDetails`<sup>Optional</sup> <a name="cloudwatchLogsDetails" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails.property.cloudwatchLogsDetails"></a>

```java
public ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails getCloudwatchLogsDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails</a>

The configuration details of the CloudWatch Logs destination.

Note that this field is marked as required but only if CloudWatch Logs was chosen as the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#cloudwatch_logs_details ElasticacheReplicationGroup#cloudwatch_logs_details}

---

##### `kinesisFirehoseDetails`<sup>Optional</sup> <a name="kinesisFirehoseDetails" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails.property.kinesisFirehoseDetails"></a>

```java
public ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails getKinesisFirehoseDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails</a>

The configuration details of the Kinesis Data Firehose destination.

Note that this field is marked as required but only if Kinesis Data Firehose was chosen as the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#kinesis_firehose_details ElasticacheReplicationGroup#kinesis_firehose_details}

---

### ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails <a name="ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticache_replication_group.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails;

ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails.builder()
//  .logGroup(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails.property.logGroup">logGroup</a></code> | <code>java.lang.String</code> | The name of the CloudWatch Logs log group. |

---

##### `logGroup`<sup>Optional</sup> <a name="logGroup" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails.property.logGroup"></a>

```java
public java.lang.String getLogGroup();
```

- *Type:* java.lang.String

The name of the CloudWatch Logs log group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#log_group ElasticacheReplicationGroup#log_group}

---

### ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails <a name="ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticache_replication_group.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails;

ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails.builder()
//  .deliveryStream(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails.property.deliveryStream">deliveryStream</a></code> | <code>java.lang.String</code> | The name of the Kinesis Data Firehose delivery stream. |

---

##### `deliveryStream`<sup>Optional</sup> <a name="deliveryStream" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails.property.deliveryStream"></a>

```java
public java.lang.String getDeliveryStream();
```

- *Type:* java.lang.String

The name of the Kinesis Data Firehose delivery stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#delivery_stream ElasticacheReplicationGroup#delivery_stream}

---

### ElasticacheReplicationGroupNodeGroupConfiguration <a name="ElasticacheReplicationGroupNodeGroupConfiguration" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticache_replication_group.ElasticacheReplicationGroupNodeGroupConfiguration;

ElasticacheReplicationGroupNodeGroupConfiguration.builder()
//  .nodeGroupId(java.lang.String)
//  .primaryAvailabilityZone(java.lang.String)
//  .replicaAvailabilityZones(java.util.List<java.lang.String>)
//  .replicaCount(java.lang.Number)
//  .slots(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration.property.nodeGroupId">nodeGroupId</a></code> | <code>java.lang.String</code> | Either the ElastiCache for Redis supplied 4-digit id or a user supplied id for the node group these configuration values apply to. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration.property.primaryAvailabilityZone">primaryAvailabilityZone</a></code> | <code>java.lang.String</code> | The Availability Zone where the primary node of this node group (shard) is launched. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration.property.replicaAvailabilityZones">replicaAvailabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | A list of Availability Zones to be used for the read replicas. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration.property.replicaCount">replicaCount</a></code> | <code>java.lang.Number</code> | The number of read replica nodes in this node group (shard). |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration.property.slots">slots</a></code> | <code>java.lang.String</code> | A string of comma-separated values where the first set of values are the slot numbers (zero based), and the second set of values are the keyspaces for each slot. |

---

##### `nodeGroupId`<sup>Optional</sup> <a name="nodeGroupId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration.property.nodeGroupId"></a>

```java
public java.lang.String getNodeGroupId();
```

- *Type:* java.lang.String

Either the ElastiCache for Redis supplied 4-digit id or a user supplied id for the node group these configuration values apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#node_group_id ElasticacheReplicationGroup#node_group_id}

---

##### `primaryAvailabilityZone`<sup>Optional</sup> <a name="primaryAvailabilityZone" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration.property.primaryAvailabilityZone"></a>

```java
public java.lang.String getPrimaryAvailabilityZone();
```

- *Type:* java.lang.String

The Availability Zone where the primary node of this node group (shard) is launched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#primary_availability_zone ElasticacheReplicationGroup#primary_availability_zone}

---

##### `replicaAvailabilityZones`<sup>Optional</sup> <a name="replicaAvailabilityZones" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration.property.replicaAvailabilityZones"></a>

```java
public java.util.List<java.lang.String> getReplicaAvailabilityZones();
```

- *Type:* java.util.List<java.lang.String>

A list of Availability Zones to be used for the read replicas.

The number of Availability Zones in this list must match the value of ReplicaCount or ReplicasPerNodeGroup if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#replica_availability_zones ElasticacheReplicationGroup#replica_availability_zones}

---

##### `replicaCount`<sup>Optional</sup> <a name="replicaCount" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration.property.replicaCount"></a>

```java
public java.lang.Number getReplicaCount();
```

- *Type:* java.lang.Number

The number of read replica nodes in this node group (shard).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#replica_count ElasticacheReplicationGroup#replica_count}

---

##### `slots`<sup>Optional</sup> <a name="slots" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration.property.slots"></a>

```java
public java.lang.String getSlots();
```

- *Type:* java.lang.String

A string of comma-separated values where the first set of values are the slot numbers (zero based), and the second set of values are the keyspaces for each slot.

The following example specifies three slots (numbered 0, 1, and 2): 0,1,2,0-4999,5000-9999,10000-16,383.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#slots ElasticacheReplicationGroup#slots}

---

### ElasticacheReplicationGroupPrimaryEndPoint <a name="ElasticacheReplicationGroupPrimaryEndPoint" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPoint.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticache_replication_group.ElasticacheReplicationGroupPrimaryEndPoint;

ElasticacheReplicationGroupPrimaryEndPoint.builder()
    .build();
```


### ElasticacheReplicationGroupReadEndPoint <a name="ElasticacheReplicationGroupReadEndPoint" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPoint.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticache_replication_group.ElasticacheReplicationGroupReadEndPoint;

ElasticacheReplicationGroupReadEndPoint.builder()
    .build();
```


### ElasticacheReplicationGroupReaderEndPoint <a name="ElasticacheReplicationGroupReaderEndPoint" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPoint.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticache_replication_group.ElasticacheReplicationGroupReaderEndPoint;

ElasticacheReplicationGroupReaderEndPoint.builder()
    .build();
```


### ElasticacheReplicationGroupTags <a name="ElasticacheReplicationGroupTags" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticache_replication_group.ElasticacheReplicationGroupTags;

ElasticacheReplicationGroupTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#key ElasticacheReplicationGroup#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticache_replication_group#value ElasticacheReplicationGroup#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticacheReplicationGroupConfigurationEndPointOutputReference <a name="ElasticacheReplicationGroupConfigurationEndPointOutputReference" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticache_replication_group.ElasticacheReplicationGroupConfigurationEndPointOutputReference;

new ElasticacheReplicationGroupConfigurationEndPointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.property.port">port</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPoint">ElasticacheReplicationGroupConfigurationEndPoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.property.port"></a>

```java
public java.lang.String getPort();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPointOutputReference.property.internalValue"></a>

```java
public ElasticacheReplicationGroupConfigurationEndPoint getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupConfigurationEndPoint">ElasticacheReplicationGroupConfigurationEndPoint</a>

---


### ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference <a name="ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticache_replication_group.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference;

new ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.resetLogGroup">resetLogGroup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogGroup` <a name="resetLogGroup" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.resetLogGroup"></a>

```java
public void resetLogGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.logGroupInput">logGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.logGroup">logGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logGroupInput`<sup>Optional</sup> <a name="logGroupInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.logGroupInput"></a>

```java
public java.lang.String getLogGroupInput();
```

- *Type:* java.lang.String

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.logGroup"></a>

```java
public java.lang.String getLogGroup();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.internalValue"></a>

```java
public IResolvable|ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails</a>

---


### ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference <a name="ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticache_replication_group.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference;

new ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.resetDeliveryStream">resetDeliveryStream</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeliveryStream` <a name="resetDeliveryStream" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.resetDeliveryStream"></a>

```java
public void resetDeliveryStream()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.deliveryStreamInput">deliveryStreamInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.deliveryStream">deliveryStream</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deliveryStreamInput`<sup>Optional</sup> <a name="deliveryStreamInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.deliveryStreamInput"></a>

```java
public java.lang.String getDeliveryStreamInput();
```

- *Type:* java.lang.String

---

##### `deliveryStream`<sup>Required</sup> <a name="deliveryStream" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.deliveryStream"></a>

```java
public java.lang.String getDeliveryStream();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.internalValue"></a>

```java
public IResolvable|ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails</a>

---


### ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference <a name="ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticache_replication_group.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference;

new ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.putCloudwatchLogsDetails">putCloudwatchLogsDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.putKinesisFirehoseDetails">putKinesisFirehoseDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.resetCloudwatchLogsDetails">resetCloudwatchLogsDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.resetKinesisFirehoseDetails">resetKinesisFirehoseDetails</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudwatchLogsDetails` <a name="putCloudwatchLogsDetails" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.putCloudwatchLogsDetails"></a>

```java
public void putCloudwatchLogsDetails(ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.putCloudwatchLogsDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails</a>

---

##### `putKinesisFirehoseDetails` <a name="putKinesisFirehoseDetails" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.putKinesisFirehoseDetails"></a>

```java
public void putKinesisFirehoseDetails(ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.putKinesisFirehoseDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails</a>

---

##### `resetCloudwatchLogsDetails` <a name="resetCloudwatchLogsDetails" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.resetCloudwatchLogsDetails"></a>

```java
public void resetCloudwatchLogsDetails()
```

##### `resetKinesisFirehoseDetails` <a name="resetKinesisFirehoseDetails" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.resetKinesisFirehoseDetails"></a>

```java
public void resetKinesisFirehoseDetails()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.cloudwatchLogsDetails">cloudwatchLogsDetails</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.kinesisFirehoseDetails">kinesisFirehoseDetails</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.cloudwatchLogsDetailsInput">cloudwatchLogsDetailsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.kinesisFirehoseDetailsInput">kinesisFirehoseDetailsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudwatchLogsDetails`<sup>Required</sup> <a name="cloudwatchLogsDetails" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.cloudwatchLogsDetails"></a>

```java
public ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference getCloudwatchLogsDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference</a>

---

##### `kinesisFirehoseDetails`<sup>Required</sup> <a name="kinesisFirehoseDetails" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.kinesisFirehoseDetails"></a>

```java
public ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference getKinesisFirehoseDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference</a>

---

##### `cloudwatchLogsDetailsInput`<sup>Optional</sup> <a name="cloudwatchLogsDetailsInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.cloudwatchLogsDetailsInput"></a>

```java
public IResolvable|ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails getCloudwatchLogsDetailsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails</a>

---

##### `kinesisFirehoseDetailsInput`<sup>Optional</sup> <a name="kinesisFirehoseDetailsInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.kinesisFirehoseDetailsInput"></a>

```java
public IResolvable|ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails getKinesisFirehoseDetailsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference.property.internalValue"></a>

```java
public IResolvable|ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails</a>

---


### ElasticacheReplicationGroupLogDeliveryConfigurationsList <a name="ElasticacheReplicationGroupLogDeliveryConfigurationsList" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticache_replication_group.ElasticacheReplicationGroupLogDeliveryConfigurationsList;

new ElasticacheReplicationGroupLogDeliveryConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.get"></a>

```java
public ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations">ElasticacheReplicationGroupLogDeliveryConfigurations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ElasticacheReplicationGroupLogDeliveryConfigurations> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations">ElasticacheReplicationGroupLogDeliveryConfigurations</a>>

---


### ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference <a name="ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticache_replication_group.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference;

new ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.putDestinationDetails">putDestinationDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.resetDestinationDetails">resetDestinationDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.resetDestinationType">resetDestinationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.resetLogFormat">resetLogFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.resetLogType">resetLogType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinationDetails` <a name="putDestinationDetails" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.putDestinationDetails"></a>

```java
public void putDestinationDetails(ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.putDestinationDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails</a>

---

##### `resetDestinationDetails` <a name="resetDestinationDetails" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.resetDestinationDetails"></a>

```java
public void resetDestinationDetails()
```

##### `resetDestinationType` <a name="resetDestinationType" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.resetDestinationType"></a>

```java
public void resetDestinationType()
```

##### `resetLogFormat` <a name="resetLogFormat" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.resetLogFormat"></a>

```java
public void resetLogFormat()
```

##### `resetLogType` <a name="resetLogType" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.resetLogType"></a>

```java
public void resetLogType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.destinationDetails">destinationDetails</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.destinationDetailsInput">destinationDetailsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.destinationTypeInput">destinationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.logFormatInput">logFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.logTypeInput">logTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.destinationType">destinationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.logFormat">logFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.logType">logType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations">ElasticacheReplicationGroupLogDeliveryConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationDetails`<sup>Required</sup> <a name="destinationDetails" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.destinationDetails"></a>

```java
public ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference getDestinationDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetailsOutputReference</a>

---

##### `destinationDetailsInput`<sup>Optional</sup> <a name="destinationDetailsInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.destinationDetailsInput"></a>

```java
public IResolvable|ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails getDestinationDetailsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails">ElasticacheReplicationGroupLogDeliveryConfigurationsDestinationDetails</a>

---

##### `destinationTypeInput`<sup>Optional</sup> <a name="destinationTypeInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.destinationTypeInput"></a>

```java
public java.lang.String getDestinationTypeInput();
```

- *Type:* java.lang.String

---

##### `logFormatInput`<sup>Optional</sup> <a name="logFormatInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.logFormatInput"></a>

```java
public java.lang.String getLogFormatInput();
```

- *Type:* java.lang.String

---

##### `logTypeInput`<sup>Optional</sup> <a name="logTypeInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.logTypeInput"></a>

```java
public java.lang.String getLogTypeInput();
```

- *Type:* java.lang.String

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.destinationType"></a>

```java
public java.lang.String getDestinationType();
```

- *Type:* java.lang.String

---

##### `logFormat`<sup>Required</sup> <a name="logFormat" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.logFormat"></a>

```java
public java.lang.String getLogFormat();
```

- *Type:* java.lang.String

---

##### `logType`<sup>Required</sup> <a name="logType" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.logType"></a>

```java
public java.lang.String getLogType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationsOutputReference.property.internalValue"></a>

```java
public IResolvable|ElasticacheReplicationGroupLogDeliveryConfigurations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurations">ElasticacheReplicationGroupLogDeliveryConfigurations</a>

---


### ElasticacheReplicationGroupNodeGroupConfigurationList <a name="ElasticacheReplicationGroupNodeGroupConfigurationList" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticache_replication_group.ElasticacheReplicationGroupNodeGroupConfigurationList;

new ElasticacheReplicationGroupNodeGroupConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.get"></a>

```java
public ElasticacheReplicationGroupNodeGroupConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration">ElasticacheReplicationGroupNodeGroupConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ElasticacheReplicationGroupNodeGroupConfiguration> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration">ElasticacheReplicationGroupNodeGroupConfiguration</a>>

---


### ElasticacheReplicationGroupNodeGroupConfigurationOutputReference <a name="ElasticacheReplicationGroupNodeGroupConfigurationOutputReference" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticache_replication_group.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference;

new ElasticacheReplicationGroupNodeGroupConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.resetNodeGroupId">resetNodeGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.resetPrimaryAvailabilityZone">resetPrimaryAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.resetReplicaAvailabilityZones">resetReplicaAvailabilityZones</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.resetReplicaCount">resetReplicaCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.resetSlots">resetSlots</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNodeGroupId` <a name="resetNodeGroupId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.resetNodeGroupId"></a>

```java
public void resetNodeGroupId()
```

##### `resetPrimaryAvailabilityZone` <a name="resetPrimaryAvailabilityZone" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.resetPrimaryAvailabilityZone"></a>

```java
public void resetPrimaryAvailabilityZone()
```

##### `resetReplicaAvailabilityZones` <a name="resetReplicaAvailabilityZones" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.resetReplicaAvailabilityZones"></a>

```java
public void resetReplicaAvailabilityZones()
```

##### `resetReplicaCount` <a name="resetReplicaCount" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.resetReplicaCount"></a>

```java
public void resetReplicaCount()
```

##### `resetSlots` <a name="resetSlots" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.resetSlots"></a>

```java
public void resetSlots()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.nodeGroupIdInput">nodeGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.primaryAvailabilityZoneInput">primaryAvailabilityZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.replicaAvailabilityZonesInput">replicaAvailabilityZonesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.replicaCountInput">replicaCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.slotsInput">slotsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.nodeGroupId">nodeGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.primaryAvailabilityZone">primaryAvailabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.replicaAvailabilityZones">replicaAvailabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.replicaCount">replicaCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.slots">slots</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration">ElasticacheReplicationGroupNodeGroupConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nodeGroupIdInput`<sup>Optional</sup> <a name="nodeGroupIdInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.nodeGroupIdInput"></a>

```java
public java.lang.String getNodeGroupIdInput();
```

- *Type:* java.lang.String

---

##### `primaryAvailabilityZoneInput`<sup>Optional</sup> <a name="primaryAvailabilityZoneInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.primaryAvailabilityZoneInput"></a>

```java
public java.lang.String getPrimaryAvailabilityZoneInput();
```

- *Type:* java.lang.String

---

##### `replicaAvailabilityZonesInput`<sup>Optional</sup> <a name="replicaAvailabilityZonesInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.replicaAvailabilityZonesInput"></a>

```java
public java.util.List<java.lang.String> getReplicaAvailabilityZonesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `replicaCountInput`<sup>Optional</sup> <a name="replicaCountInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.replicaCountInput"></a>

```java
public java.lang.Number getReplicaCountInput();
```

- *Type:* java.lang.Number

---

##### `slotsInput`<sup>Optional</sup> <a name="slotsInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.slotsInput"></a>

```java
public java.lang.String getSlotsInput();
```

- *Type:* java.lang.String

---

##### `nodeGroupId`<sup>Required</sup> <a name="nodeGroupId" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.nodeGroupId"></a>

```java
public java.lang.String getNodeGroupId();
```

- *Type:* java.lang.String

---

##### `primaryAvailabilityZone`<sup>Required</sup> <a name="primaryAvailabilityZone" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.primaryAvailabilityZone"></a>

```java
public java.lang.String getPrimaryAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `replicaAvailabilityZones`<sup>Required</sup> <a name="replicaAvailabilityZones" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.replicaAvailabilityZones"></a>

```java
public java.util.List<java.lang.String> getReplicaAvailabilityZones();
```

- *Type:* java.util.List<java.lang.String>

---

##### `replicaCount`<sup>Required</sup> <a name="replicaCount" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.replicaCount"></a>

```java
public java.lang.Number getReplicaCount();
```

- *Type:* java.lang.Number

---

##### `slots`<sup>Required</sup> <a name="slots" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.slots"></a>

```java
public java.lang.String getSlots();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|ElasticacheReplicationGroupNodeGroupConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupNodeGroupConfiguration">ElasticacheReplicationGroupNodeGroupConfiguration</a>

---


### ElasticacheReplicationGroupPrimaryEndPointOutputReference <a name="ElasticacheReplicationGroupPrimaryEndPointOutputReference" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticache_replication_group.ElasticacheReplicationGroupPrimaryEndPointOutputReference;

new ElasticacheReplicationGroupPrimaryEndPointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.property.port">port</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPoint">ElasticacheReplicationGroupPrimaryEndPoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.property.port"></a>

```java
public java.lang.String getPort();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPointOutputReference.property.internalValue"></a>

```java
public ElasticacheReplicationGroupPrimaryEndPoint getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupPrimaryEndPoint">ElasticacheReplicationGroupPrimaryEndPoint</a>

---


### ElasticacheReplicationGroupReadEndPointOutputReference <a name="ElasticacheReplicationGroupReadEndPointOutputReference" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticache_replication_group.ElasticacheReplicationGroupReadEndPointOutputReference;

new ElasticacheReplicationGroupReadEndPointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.property.addresses">addresses</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.property.addressesList">addressesList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.property.ports">ports</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.property.portsList">portsList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPoint">ElasticacheReplicationGroupReadEndPoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.property.addresses"></a>

```java
public java.lang.String getAddresses();
```

- *Type:* java.lang.String

---

##### `addressesList`<sup>Required</sup> <a name="addressesList" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.property.addressesList"></a>

```java
public java.util.List<java.lang.String> getAddressesList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.property.ports"></a>

```java
public java.lang.String getPorts();
```

- *Type:* java.lang.String

---

##### `portsList`<sup>Required</sup> <a name="portsList" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.property.portsList"></a>

```java
public java.util.List<java.lang.String> getPortsList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPointOutputReference.property.internalValue"></a>

```java
public ElasticacheReplicationGroupReadEndPoint getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReadEndPoint">ElasticacheReplicationGroupReadEndPoint</a>

---


### ElasticacheReplicationGroupReaderEndPointOutputReference <a name="ElasticacheReplicationGroupReaderEndPointOutputReference" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticache_replication_group.ElasticacheReplicationGroupReaderEndPointOutputReference;

new ElasticacheReplicationGroupReaderEndPointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.property.port">port</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPoint">ElasticacheReplicationGroupReaderEndPoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.property.port"></a>

```java
public java.lang.String getPort();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPointOutputReference.property.internalValue"></a>

```java
public ElasticacheReplicationGroupReaderEndPoint getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupReaderEndPoint">ElasticacheReplicationGroupReaderEndPoint</a>

---


### ElasticacheReplicationGroupTagsList <a name="ElasticacheReplicationGroupTagsList" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticache_replication_group.ElasticacheReplicationGroupTagsList;

new ElasticacheReplicationGroupTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.get"></a>

```java
public ElasticacheReplicationGroupTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTags">ElasticacheReplicationGroupTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ElasticacheReplicationGroupTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTags">ElasticacheReplicationGroupTags</a>>

---


### ElasticacheReplicationGroupTagsOutputReference <a name="ElasticacheReplicationGroupTagsOutputReference" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticache_replication_group.ElasticacheReplicationGroupTagsOutputReference;

new ElasticacheReplicationGroupTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTags">ElasticacheReplicationGroupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|ElasticacheReplicationGroupTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheReplicationGroup.ElasticacheReplicationGroupTags">ElasticacheReplicationGroupTags</a>

---



