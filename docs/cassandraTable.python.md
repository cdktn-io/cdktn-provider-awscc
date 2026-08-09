# `cassandraTable` Submodule <a name="`cassandraTable` Submodule" id="@cdktn/provider-awscc.cassandraTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CassandraTable <a name="CassandraTable" id="@cdktn/provider-awscc.cassandraTable.CassandraTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table awscc_cassandra_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer"></a>

```python
from cdktn_provider_awscc import cassandra_table

cassandraTable.CassandraTable(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  keyspace_name: str,
  partition_key_columns: IResolvable | typing.List[CassandraTablePartitionKeyColumns],
  auto_scaling_specifications: CassandraTableAutoScalingSpecifications = None,
  billing_mode: CassandraTableBillingMode = None,
  cdc_specification: CassandraTableCdcSpecification = None,
  client_side_timestamps_enabled: bool | IResolvable = None,
  clustering_key_columns: IResolvable | typing.List[CassandraTableClusteringKeyColumns] = None,
  default_time_to_live: typing.Union[int, float] = None,
  encryption_specification: CassandraTableEncryptionSpecification = None,
  point_in_time_recovery_enabled: bool | IResolvable = None,
  regular_columns: IResolvable | typing.List[CassandraTableRegularColumns] = None,
  replica_specifications: IResolvable | typing.List[CassandraTableReplicaSpecifications] = None,
  table_name: str = None,
  tags: IResolvable | typing.List[CassandraTableTags] = None,
  warm_throughput: CassandraTableWarmThroughput = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer.parameter.keyspaceName">keyspace_name</a></code> | <code>str</code> | Name for Cassandra keyspace. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer.parameter.partitionKeyColumns">partition_key_columns</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumns">CassandraTablePartitionKeyColumns</a>]</code> | Partition key columns of the table. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer.parameter.autoScalingSpecifications">auto_scaling_specifications</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecifications">CassandraTableAutoScalingSpecifications</a></code> | Represents the read and write settings used for AutoScaling. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer.parameter.billingMode">billing_mode</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingMode">CassandraTableBillingMode</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#billing_mode CassandraTable#billing_mode}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer.parameter.cdcSpecification">cdc_specification</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecification">CassandraTableCdcSpecification</a></code> | Represents the CDC configuration for the table. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer.parameter.clientSideTimestampsEnabled">client_side_timestamps_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether client side timestamps are enabled (true) or disabled (false) on the table. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer.parameter.clusteringKeyColumns">clustering_key_columns</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumns">CassandraTableClusteringKeyColumns</a>]</code> | Clustering key columns of the table. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer.parameter.defaultTimeToLive">default_time_to_live</a></code> | <code>typing.Union[int, float]</code> | Default TTL (Time To Live) in seconds, where zero is disabled. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer.parameter.encryptionSpecification">encryption_specification</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecification">CassandraTableEncryptionSpecification</a></code> | Represents the settings used to enable server-side encryption. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer.parameter.pointInTimeRecoveryEnabled">point_in_time_recovery_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether point in time recovery is enabled (true) or disabled (false) on the table. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer.parameter.regularColumns">regular_columns</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumns">CassandraTableRegularColumns</a>]</code> | Non-key columns of the table. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer.parameter.replicaSpecifications">replica_specifications</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecifications">CassandraTableReplicaSpecifications</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#replica_specifications CassandraTable#replica_specifications}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer.parameter.tableName">table_name</a></code> | <code>str</code> | Name for Cassandra table. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTags">CassandraTableTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer.parameter.warmThroughput">warm_throughput</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughput">CassandraTableWarmThroughput</a></code> | Warm throughput configuration for the table. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `keyspace_name`<sup>Required</sup> <a name="keyspace_name" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer.parameter.keyspaceName"></a>

- *Type:* str

Name for Cassandra keyspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#keyspace_name CassandraTable#keyspace_name}

---

##### `partition_key_columns`<sup>Required</sup> <a name="partition_key_columns" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer.parameter.partitionKeyColumns"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumns">CassandraTablePartitionKeyColumns</a>]

Partition key columns of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#partition_key_columns CassandraTable#partition_key_columns}

---

##### `auto_scaling_specifications`<sup>Optional</sup> <a name="auto_scaling_specifications" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer.parameter.autoScalingSpecifications"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecifications">CassandraTableAutoScalingSpecifications</a>

Represents the read and write settings used for AutoScaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#auto_scaling_specifications CassandraTable#auto_scaling_specifications}

---

##### `billing_mode`<sup>Optional</sup> <a name="billing_mode" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer.parameter.billingMode"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingMode">CassandraTableBillingMode</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#billing_mode CassandraTable#billing_mode}.

---

##### `cdc_specification`<sup>Optional</sup> <a name="cdc_specification" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer.parameter.cdcSpecification"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecification">CassandraTableCdcSpecification</a>

Represents the CDC configuration for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#cdc_specification CassandraTable#cdc_specification}

---

##### `client_side_timestamps_enabled`<sup>Optional</sup> <a name="client_side_timestamps_enabled" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer.parameter.clientSideTimestampsEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether client side timestamps are enabled (true) or disabled (false) on the table.

False by default, once it is enabled it cannot be disabled again.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#client_side_timestamps_enabled CassandraTable#client_side_timestamps_enabled}

---

##### `clustering_key_columns`<sup>Optional</sup> <a name="clustering_key_columns" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer.parameter.clusteringKeyColumns"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumns">CassandraTableClusteringKeyColumns</a>]

Clustering key columns of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#clustering_key_columns CassandraTable#clustering_key_columns}

---

##### `default_time_to_live`<sup>Optional</sup> <a name="default_time_to_live" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer.parameter.defaultTimeToLive"></a>

- *Type:* typing.Union[int, float]

Default TTL (Time To Live) in seconds, where zero is disabled.

If the value is greater than zero, TTL is enabled for the entire table and an expiration timestamp is added to each column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#default_time_to_live CassandraTable#default_time_to_live}

---

##### `encryption_specification`<sup>Optional</sup> <a name="encryption_specification" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer.parameter.encryptionSpecification"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecification">CassandraTableEncryptionSpecification</a>

Represents the settings used to enable server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#encryption_specification CassandraTable#encryption_specification}

---

##### `point_in_time_recovery_enabled`<sup>Optional</sup> <a name="point_in_time_recovery_enabled" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer.parameter.pointInTimeRecoveryEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether point in time recovery is enabled (true) or disabled (false) on the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#point_in_time_recovery_enabled CassandraTable#point_in_time_recovery_enabled}

---

##### `regular_columns`<sup>Optional</sup> <a name="regular_columns" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer.parameter.regularColumns"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumns">CassandraTableRegularColumns</a>]

Non-key columns of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#regular_columns CassandraTable#regular_columns}

---

##### `replica_specifications`<sup>Optional</sup> <a name="replica_specifications" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer.parameter.replicaSpecifications"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecifications">CassandraTableReplicaSpecifications</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#replica_specifications CassandraTable#replica_specifications}.

---

##### `table_name`<sup>Optional</sup> <a name="table_name" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer.parameter.tableName"></a>

- *Type:* str

Name for Cassandra table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#table_name CassandraTable#table_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTags">CassandraTableTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#tags CassandraTable#tags}

---

##### `warm_throughput`<sup>Optional</sup> <a name="warm_throughput" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer.parameter.warmThroughput"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughput">CassandraTableWarmThroughput</a>

Warm throughput configuration for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#warm_throughput CassandraTable#warm_throughput}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.putAutoScalingSpecifications">put_auto_scaling_specifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.putBillingMode">put_billing_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.putCdcSpecification">put_cdc_specification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.putClusteringKeyColumns">put_clustering_key_columns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.putEncryptionSpecification">put_encryption_specification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.putPartitionKeyColumns">put_partition_key_columns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.putRegularColumns">put_regular_columns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.putReplicaSpecifications">put_replica_specifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.putWarmThroughput">put_warm_throughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.resetAutoScalingSpecifications">reset_auto_scaling_specifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.resetBillingMode">reset_billing_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.resetCdcSpecification">reset_cdc_specification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.resetClientSideTimestampsEnabled">reset_client_side_timestamps_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.resetClusteringKeyColumns">reset_clustering_key_columns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.resetDefaultTimeToLive">reset_default_time_to_live</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.resetEncryptionSpecification">reset_encryption_specification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.resetPointInTimeRecoveryEnabled">reset_point_in_time_recovery_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.resetRegularColumns">reset_regular_columns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.resetReplicaSpecifications">reset_replica_specifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.resetTableName">reset_table_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.resetWarmThroughput">reset_warm_throughput</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_auto_scaling_specifications` <a name="put_auto_scaling_specifications" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putAutoScalingSpecifications"></a>

```python
def put_auto_scaling_specifications(
  read_capacity_auto_scaling: CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling = None,
  write_capacity_auto_scaling: CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling = None
) -> None
```

###### `read_capacity_auto_scaling`<sup>Optional</sup> <a name="read_capacity_auto_scaling" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putAutoScalingSpecifications.parameter.readCapacityAutoScaling"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling">CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling</a>

Represents configuration for auto scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#read_capacity_auto_scaling CassandraTable#read_capacity_auto_scaling}

---

###### `write_capacity_auto_scaling`<sup>Optional</sup> <a name="write_capacity_auto_scaling" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putAutoScalingSpecifications.parameter.writeCapacityAutoScaling"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling</a>

Represents configuration for auto scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#write_capacity_auto_scaling CassandraTable#write_capacity_auto_scaling}

---

##### `put_billing_mode` <a name="put_billing_mode" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putBillingMode"></a>

```python
def put_billing_mode(
  mode: str = None,
  provisioned_throughput: CassandraTableBillingModeProvisionedThroughput = None
) -> None
```

###### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putBillingMode.parameter.mode"></a>

- *Type:* str

Capacity mode for the specified table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#mode CassandraTable#mode}

---

###### `provisioned_throughput`<sup>Optional</sup> <a name="provisioned_throughput" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putBillingMode.parameter.provisionedThroughput"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughput">CassandraTableBillingModeProvisionedThroughput</a>

Throughput for the specified table, which consists of values for ReadCapacityUnits and WriteCapacityUnits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#provisioned_throughput CassandraTable#provisioned_throughput}

---

##### `put_cdc_specification` <a name="put_cdc_specification" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putCdcSpecification"></a>

```python
def put_cdc_specification(
  status: str = None,
  tags: IResolvable | typing.List[CassandraTableCdcSpecificationTags] = None,
  view_type: str = None
) -> None
```

###### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putCdcSpecification.parameter.status"></a>

- *Type:* str

Indicates whether CDC is enabled or disabled for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#status CassandraTable#status}

---

###### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putCdcSpecification.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTags">CassandraTableCdcSpecificationTags</a>]

An array of key-value pairs to apply to the CDC stream resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#tags CassandraTable#tags}

---

###### `view_type`<sup>Optional</sup> <a name="view_type" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putCdcSpecification.parameter.viewType"></a>

- *Type:* str

Specifies what data should be captured in the change data stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#view_type CassandraTable#view_type}

---

##### `put_clustering_key_columns` <a name="put_clustering_key_columns" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putClusteringKeyColumns"></a>

```python
def put_clustering_key_columns(
  value: IResolvable | typing.List[CassandraTableClusteringKeyColumns]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putClusteringKeyColumns.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumns">CassandraTableClusteringKeyColumns</a>]

---

##### `put_encryption_specification` <a name="put_encryption_specification" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putEncryptionSpecification"></a>

```python
def put_encryption_specification(
  encryption_type: str = None,
  kms_key_identifier: str = None
) -> None
```

###### `encryption_type`<sup>Optional</sup> <a name="encryption_type" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putEncryptionSpecification.parameter.encryptionType"></a>

- *Type:* str

Server-side encryption type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#encryption_type CassandraTable#encryption_type}

---

###### `kms_key_identifier`<sup>Optional</sup> <a name="kms_key_identifier" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putEncryptionSpecification.parameter.kmsKeyIdentifier"></a>

- *Type:* str

The AWS KMS customer master key (CMK) that should be used for the AWS KMS encryption.

To specify a CMK, use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#kms_key_identifier CassandraTable#kms_key_identifier}

---

##### `put_partition_key_columns` <a name="put_partition_key_columns" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putPartitionKeyColumns"></a>

```python
def put_partition_key_columns(
  value: IResolvable | typing.List[CassandraTablePartitionKeyColumns]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putPartitionKeyColumns.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumns">CassandraTablePartitionKeyColumns</a>]

---

##### `put_regular_columns` <a name="put_regular_columns" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putRegularColumns"></a>

```python
def put_regular_columns(
  value: IResolvable | typing.List[CassandraTableRegularColumns]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putRegularColumns.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumns">CassandraTableRegularColumns</a>]

---

##### `put_replica_specifications` <a name="put_replica_specifications" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putReplicaSpecifications"></a>

```python
def put_replica_specifications(
  value: IResolvable | typing.List[CassandraTableReplicaSpecifications]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putReplicaSpecifications.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecifications">CassandraTableReplicaSpecifications</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[CassandraTableTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTags">CassandraTableTags</a>]

---

##### `put_warm_throughput` <a name="put_warm_throughput" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putWarmThroughput"></a>

```python
def put_warm_throughput(
  read_units_per_second: typing.Union[int, float] = None,
  write_units_per_second: typing.Union[int, float] = None
) -> None
```

###### `read_units_per_second`<sup>Optional</sup> <a name="read_units_per_second" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putWarmThroughput.parameter.readUnitsPerSecond"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#read_units_per_second CassandraTable#read_units_per_second}.

---

###### `write_units_per_second`<sup>Optional</sup> <a name="write_units_per_second" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putWarmThroughput.parameter.writeUnitsPerSecond"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#write_units_per_second CassandraTable#write_units_per_second}.

---

##### `reset_auto_scaling_specifications` <a name="reset_auto_scaling_specifications" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.resetAutoScalingSpecifications"></a>

```python
def reset_auto_scaling_specifications() -> None
```

##### `reset_billing_mode` <a name="reset_billing_mode" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.resetBillingMode"></a>

```python
def reset_billing_mode() -> None
```

##### `reset_cdc_specification` <a name="reset_cdc_specification" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.resetCdcSpecification"></a>

```python
def reset_cdc_specification() -> None
```

##### `reset_client_side_timestamps_enabled` <a name="reset_client_side_timestamps_enabled" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.resetClientSideTimestampsEnabled"></a>

```python
def reset_client_side_timestamps_enabled() -> None
```

##### `reset_clustering_key_columns` <a name="reset_clustering_key_columns" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.resetClusteringKeyColumns"></a>

```python
def reset_clustering_key_columns() -> None
```

##### `reset_default_time_to_live` <a name="reset_default_time_to_live" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.resetDefaultTimeToLive"></a>

```python
def reset_default_time_to_live() -> None
```

##### `reset_encryption_specification` <a name="reset_encryption_specification" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.resetEncryptionSpecification"></a>

```python
def reset_encryption_specification() -> None
```

##### `reset_point_in_time_recovery_enabled` <a name="reset_point_in_time_recovery_enabled" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.resetPointInTimeRecoveryEnabled"></a>

```python
def reset_point_in_time_recovery_enabled() -> None
```

##### `reset_regular_columns` <a name="reset_regular_columns" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.resetRegularColumns"></a>

```python
def reset_regular_columns() -> None
```

##### `reset_replica_specifications` <a name="reset_replica_specifications" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.resetReplicaSpecifications"></a>

```python
def reset_replica_specifications() -> None
```

##### `reset_table_name` <a name="reset_table_name" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.resetTableName"></a>

```python
def reset_table_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_warm_throughput` <a name="reset_warm_throughput" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.resetWarmThroughput"></a>

```python
def reset_warm_throughput() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CassandraTable resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.isConstruct"></a>

```python
from cdktn_provider_awscc import cassandra_table

cassandraTable.CassandraTable.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.isTerraformElement"></a>

```python
from cdktn_provider_awscc import cassandra_table

cassandraTable.CassandraTable.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.isTerraformResource"></a>

```python
from cdktn_provider_awscc import cassandra_table

cassandraTable.CassandraTable.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import cassandra_table

cassandraTable.CassandraTable.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CassandraTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CassandraTable to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CassandraTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CassandraTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.autoScalingSpecifications">auto_scaling_specifications</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference">CassandraTableAutoScalingSpecificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.billingMode">billing_mode</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference">CassandraTableBillingModeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.cdcSpecification">cdc_specification</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference">CassandraTableCdcSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.clusteringKeyColumns">clustering_key_columns</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList">CassandraTableClusteringKeyColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.encryptionSpecification">encryption_specification</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference">CassandraTableEncryptionSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.partitionKeyColumns">partition_key_columns</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList">CassandraTablePartitionKeyColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.regularColumns">regular_columns</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList">CassandraTableRegularColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.replicaSpecifications">replica_specifications</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList">CassandraTableReplicaSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList">CassandraTableTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.warmThroughput">warm_throughput</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference">CassandraTableWarmThroughputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.autoScalingSpecificationsInput">auto_scaling_specifications_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecifications">CassandraTableAutoScalingSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.billingModeInput">billing_mode_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingMode">CassandraTableBillingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.cdcSpecificationInput">cdc_specification_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecification">CassandraTableCdcSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.clientSideTimestampsEnabledInput">client_side_timestamps_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.clusteringKeyColumnsInput">clustering_key_columns_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumns">CassandraTableClusteringKeyColumns</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.defaultTimeToLiveInput">default_time_to_live_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.encryptionSpecificationInput">encryption_specification_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecification">CassandraTableEncryptionSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.keyspaceNameInput">keyspace_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.partitionKeyColumnsInput">partition_key_columns_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumns">CassandraTablePartitionKeyColumns</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.pointInTimeRecoveryEnabledInput">point_in_time_recovery_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.regularColumnsInput">regular_columns_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumns">CassandraTableRegularColumns</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.replicaSpecificationsInput">replica_specifications_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecifications">CassandraTableReplicaSpecifications</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTags">CassandraTableTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.warmThroughputInput">warm_throughput_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughput">CassandraTableWarmThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.clientSideTimestampsEnabled">client_side_timestamps_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.defaultTimeToLive">default_time_to_live</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.keyspaceName">keyspace_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.pointInTimeRecoveryEnabled">point_in_time_recovery_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `auto_scaling_specifications`<sup>Required</sup> <a name="auto_scaling_specifications" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.autoScalingSpecifications"></a>

```python
auto_scaling_specifications: CassandraTableAutoScalingSpecificationsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference">CassandraTableAutoScalingSpecificationsOutputReference</a>

---

##### `billing_mode`<sup>Required</sup> <a name="billing_mode" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.billingMode"></a>

```python
billing_mode: CassandraTableBillingModeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference">CassandraTableBillingModeOutputReference</a>

---

##### `cdc_specification`<sup>Required</sup> <a name="cdc_specification" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.cdcSpecification"></a>

```python
cdc_specification: CassandraTableCdcSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference">CassandraTableCdcSpecificationOutputReference</a>

---

##### `clustering_key_columns`<sup>Required</sup> <a name="clustering_key_columns" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.clusteringKeyColumns"></a>

```python
clustering_key_columns: CassandraTableClusteringKeyColumnsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList">CassandraTableClusteringKeyColumnsList</a>

---

##### `encryption_specification`<sup>Required</sup> <a name="encryption_specification" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.encryptionSpecification"></a>

```python
encryption_specification: CassandraTableEncryptionSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference">CassandraTableEncryptionSpecificationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `partition_key_columns`<sup>Required</sup> <a name="partition_key_columns" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.partitionKeyColumns"></a>

```python
partition_key_columns: CassandraTablePartitionKeyColumnsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList">CassandraTablePartitionKeyColumnsList</a>

---

##### `regular_columns`<sup>Required</sup> <a name="regular_columns" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.regularColumns"></a>

```python
regular_columns: CassandraTableRegularColumnsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList">CassandraTableRegularColumnsList</a>

---

##### `replica_specifications`<sup>Required</sup> <a name="replica_specifications" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.replicaSpecifications"></a>

```python
replica_specifications: CassandraTableReplicaSpecificationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList">CassandraTableReplicaSpecificationsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.tags"></a>

```python
tags: CassandraTableTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList">CassandraTableTagsList</a>

---

##### `warm_throughput`<sup>Required</sup> <a name="warm_throughput" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.warmThroughput"></a>

```python
warm_throughput: CassandraTableWarmThroughputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference">CassandraTableWarmThroughputOutputReference</a>

---

##### `auto_scaling_specifications_input`<sup>Optional</sup> <a name="auto_scaling_specifications_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.autoScalingSpecificationsInput"></a>

```python
auto_scaling_specifications_input: IResolvable | CassandraTableAutoScalingSpecifications
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecifications">CassandraTableAutoScalingSpecifications</a>

---

##### `billing_mode_input`<sup>Optional</sup> <a name="billing_mode_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.billingModeInput"></a>

```python
billing_mode_input: IResolvable | CassandraTableBillingMode
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingMode">CassandraTableBillingMode</a>

---

##### `cdc_specification_input`<sup>Optional</sup> <a name="cdc_specification_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.cdcSpecificationInput"></a>

```python
cdc_specification_input: IResolvable | CassandraTableCdcSpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecification">CassandraTableCdcSpecification</a>

---

##### `client_side_timestamps_enabled_input`<sup>Optional</sup> <a name="client_side_timestamps_enabled_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.clientSideTimestampsEnabledInput"></a>

```python
client_side_timestamps_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `clustering_key_columns_input`<sup>Optional</sup> <a name="clustering_key_columns_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.clusteringKeyColumnsInput"></a>

```python
clustering_key_columns_input: IResolvable | typing.List[CassandraTableClusteringKeyColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumns">CassandraTableClusteringKeyColumns</a>]

---

##### `default_time_to_live_input`<sup>Optional</sup> <a name="default_time_to_live_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.defaultTimeToLiveInput"></a>

```python
default_time_to_live_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `encryption_specification_input`<sup>Optional</sup> <a name="encryption_specification_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.encryptionSpecificationInput"></a>

```python
encryption_specification_input: IResolvable | CassandraTableEncryptionSpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecification">CassandraTableEncryptionSpecification</a>

---

##### `keyspace_name_input`<sup>Optional</sup> <a name="keyspace_name_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.keyspaceNameInput"></a>

```python
keyspace_name_input: str
```

- *Type:* str

---

##### `partition_key_columns_input`<sup>Optional</sup> <a name="partition_key_columns_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.partitionKeyColumnsInput"></a>

```python
partition_key_columns_input: IResolvable | typing.List[CassandraTablePartitionKeyColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumns">CassandraTablePartitionKeyColumns</a>]

---

##### `point_in_time_recovery_enabled_input`<sup>Optional</sup> <a name="point_in_time_recovery_enabled_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.pointInTimeRecoveryEnabledInput"></a>

```python
point_in_time_recovery_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `regular_columns_input`<sup>Optional</sup> <a name="regular_columns_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.regularColumnsInput"></a>

```python
regular_columns_input: IResolvable | typing.List[CassandraTableRegularColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumns">CassandraTableRegularColumns</a>]

---

##### `replica_specifications_input`<sup>Optional</sup> <a name="replica_specifications_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.replicaSpecificationsInput"></a>

```python
replica_specifications_input: IResolvable | typing.List[CassandraTableReplicaSpecifications]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecifications">CassandraTableReplicaSpecifications</a>]

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[CassandraTableTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTags">CassandraTableTags</a>]

---

##### `warm_throughput_input`<sup>Optional</sup> <a name="warm_throughput_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.warmThroughputInput"></a>

```python
warm_throughput_input: IResolvable | CassandraTableWarmThroughput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughput">CassandraTableWarmThroughput</a>

---

##### `client_side_timestamps_enabled`<sup>Required</sup> <a name="client_side_timestamps_enabled" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.clientSideTimestampsEnabled"></a>

```python
client_side_timestamps_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `default_time_to_live`<sup>Required</sup> <a name="default_time_to_live" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.defaultTimeToLive"></a>

```python
default_time_to_live: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `keyspace_name`<sup>Required</sup> <a name="keyspace_name" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.keyspaceName"></a>

```python
keyspace_name: str
```

- *Type:* str

---

##### `point_in_time_recovery_enabled`<sup>Required</sup> <a name="point_in_time_recovery_enabled" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.pointInTimeRecoveryEnabled"></a>

```python
point_in_time_recovery_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CassandraTableAutoScalingSpecifications <a name="CassandraTableAutoScalingSpecifications" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecifications.Initializer"></a>

```python
from cdktn_provider_awscc import cassandra_table

cassandraTable.CassandraTableAutoScalingSpecifications(
  read_capacity_auto_scaling: CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling = None,
  write_capacity_auto_scaling: CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecifications.property.readCapacityAutoScaling">read_capacity_auto_scaling</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling">CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling</a></code> | Represents configuration for auto scaling. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecifications.property.writeCapacityAutoScaling">write_capacity_auto_scaling</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling</a></code> | Represents configuration for auto scaling. |

---

##### `read_capacity_auto_scaling`<sup>Optional</sup> <a name="read_capacity_auto_scaling" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecifications.property.readCapacityAutoScaling"></a>

```python
read_capacity_auto_scaling: CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling">CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling</a>

Represents configuration for auto scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#read_capacity_auto_scaling CassandraTable#read_capacity_auto_scaling}

---

##### `write_capacity_auto_scaling`<sup>Optional</sup> <a name="write_capacity_auto_scaling" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecifications.property.writeCapacityAutoScaling"></a>

```python
write_capacity_auto_scaling: CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling</a>

Represents configuration for auto scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#write_capacity_auto_scaling CassandraTable#write_capacity_auto_scaling}

---

### CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling <a name="CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling.Initializer"></a>

```python
from cdktn_provider_awscc import cassandra_table

cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling(
  auto_scaling_disabled: bool | IResolvable = None,
  maximum_units: typing.Union[int, float] = None,
  minimum_units: typing.Union[int, float] = None,
  scaling_policy: CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling.property.autoScalingDisabled">auto_scaling_disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#auto_scaling_disabled CassandraTable#auto_scaling_disabled}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling.property.maximumUnits">maximum_units</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#maximum_units CassandraTable#maximum_units}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling.property.minimumUnits">minimum_units</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#minimum_units CassandraTable#minimum_units}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling.property.scalingPolicy">scaling_policy</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy">CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy</a></code> | Represents scaling policy. |

---

##### `auto_scaling_disabled`<sup>Optional</sup> <a name="auto_scaling_disabled" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling.property.autoScalingDisabled"></a>

```python
auto_scaling_disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#auto_scaling_disabled CassandraTable#auto_scaling_disabled}.

---

##### `maximum_units`<sup>Optional</sup> <a name="maximum_units" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling.property.maximumUnits"></a>

```python
maximum_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#maximum_units CassandraTable#maximum_units}.

---

##### `minimum_units`<sup>Optional</sup> <a name="minimum_units" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling.property.minimumUnits"></a>

```python
minimum_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#minimum_units CassandraTable#minimum_units}.

---

##### `scaling_policy`<sup>Optional</sup> <a name="scaling_policy" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling.property.scalingPolicy"></a>

```python
scaling_policy: CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy">CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy</a>

Represents scaling policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#scaling_policy CassandraTable#scaling_policy}

---

### CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy <a name="CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import cassandra_table

cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy(
  target_tracking_scaling_policy_configuration: CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy.property.targetTrackingScalingPolicyConfiguration">target_tracking_scaling_policy_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a></code> | Represents configuration for target tracking scaling policy. |

---

##### `target_tracking_scaling_policy_configuration`<sup>Optional</sup> <a name="target_tracking_scaling_policy_configuration" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy.property.targetTrackingScalingPolicyConfiguration"></a>

```python
target_tracking_scaling_policy_configuration: CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a>

Represents configuration for target tracking scaling policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#target_tracking_scaling_policy_configuration CassandraTable#target_tracking_scaling_policy_configuration}

---

### CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration <a name="CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import cassandra_table

cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration(
  disable_scale_in: bool | IResolvable = None,
  scale_in_cooldown: typing.Union[int, float] = None,
  scale_out_cooldown: typing.Union[int, float] = None,
  target_value: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.disableScaleIn">disable_scale_in</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#disable_scale_in CassandraTable#disable_scale_in}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.scaleInCooldown">scale_in_cooldown</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#scale_in_cooldown CassandraTable#scale_in_cooldown}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.scaleOutCooldown">scale_out_cooldown</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#scale_out_cooldown CassandraTable#scale_out_cooldown}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.targetValue">target_value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#target_value CassandraTable#target_value}. |

---

##### `disable_scale_in`<sup>Optional</sup> <a name="disable_scale_in" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.disableScaleIn"></a>

```python
disable_scale_in: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#disable_scale_in CassandraTable#disable_scale_in}.

---

##### `scale_in_cooldown`<sup>Optional</sup> <a name="scale_in_cooldown" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.scaleInCooldown"></a>

```python
scale_in_cooldown: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#scale_in_cooldown CassandraTable#scale_in_cooldown}.

---

##### `scale_out_cooldown`<sup>Optional</sup> <a name="scale_out_cooldown" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.scaleOutCooldown"></a>

```python
scale_out_cooldown: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#scale_out_cooldown CassandraTable#scale_out_cooldown}.

---

##### `target_value`<sup>Optional</sup> <a name="target_value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.targetValue"></a>

```python
target_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#target_value CassandraTable#target_value}.

---

### CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling <a name="CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling.Initializer"></a>

```python
from cdktn_provider_awscc import cassandra_table

cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling(
  auto_scaling_disabled: bool | IResolvable = None,
  maximum_units: typing.Union[int, float] = None,
  minimum_units: typing.Union[int, float] = None,
  scaling_policy: CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling.property.autoScalingDisabled">auto_scaling_disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#auto_scaling_disabled CassandraTable#auto_scaling_disabled}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling.property.maximumUnits">maximum_units</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#maximum_units CassandraTable#maximum_units}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling.property.minimumUnits">minimum_units</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#minimum_units CassandraTable#minimum_units}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling.property.scalingPolicy">scaling_policy</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy</a></code> | Represents scaling policy. |

---

##### `auto_scaling_disabled`<sup>Optional</sup> <a name="auto_scaling_disabled" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling.property.autoScalingDisabled"></a>

```python
auto_scaling_disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#auto_scaling_disabled CassandraTable#auto_scaling_disabled}.

---

##### `maximum_units`<sup>Optional</sup> <a name="maximum_units" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling.property.maximumUnits"></a>

```python
maximum_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#maximum_units CassandraTable#maximum_units}.

---

##### `minimum_units`<sup>Optional</sup> <a name="minimum_units" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling.property.minimumUnits"></a>

```python
minimum_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#minimum_units CassandraTable#minimum_units}.

---

##### `scaling_policy`<sup>Optional</sup> <a name="scaling_policy" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling.property.scalingPolicy"></a>

```python
scaling_policy: CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy</a>

Represents scaling policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#scaling_policy CassandraTable#scaling_policy}

---

### CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy <a name="CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import cassandra_table

cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy(
  target_tracking_scaling_policy_configuration: CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy.property.targetTrackingScalingPolicyConfiguration">target_tracking_scaling_policy_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a></code> | Represents configuration for target tracking scaling policy. |

---

##### `target_tracking_scaling_policy_configuration`<sup>Optional</sup> <a name="target_tracking_scaling_policy_configuration" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy.property.targetTrackingScalingPolicyConfiguration"></a>

```python
target_tracking_scaling_policy_configuration: CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a>

Represents configuration for target tracking scaling policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#target_tracking_scaling_policy_configuration CassandraTable#target_tracking_scaling_policy_configuration}

---

### CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration <a name="CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import cassandra_table

cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration(
  disable_scale_in: bool | IResolvable = None,
  scale_in_cooldown: typing.Union[int, float] = None,
  scale_out_cooldown: typing.Union[int, float] = None,
  target_value: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.disableScaleIn">disable_scale_in</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#disable_scale_in CassandraTable#disable_scale_in}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.scaleInCooldown">scale_in_cooldown</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#scale_in_cooldown CassandraTable#scale_in_cooldown}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.scaleOutCooldown">scale_out_cooldown</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#scale_out_cooldown CassandraTable#scale_out_cooldown}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.targetValue">target_value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#target_value CassandraTable#target_value}. |

---

##### `disable_scale_in`<sup>Optional</sup> <a name="disable_scale_in" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.disableScaleIn"></a>

```python
disable_scale_in: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#disable_scale_in CassandraTable#disable_scale_in}.

---

##### `scale_in_cooldown`<sup>Optional</sup> <a name="scale_in_cooldown" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.scaleInCooldown"></a>

```python
scale_in_cooldown: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#scale_in_cooldown CassandraTable#scale_in_cooldown}.

---

##### `scale_out_cooldown`<sup>Optional</sup> <a name="scale_out_cooldown" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.scaleOutCooldown"></a>

```python
scale_out_cooldown: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#scale_out_cooldown CassandraTable#scale_out_cooldown}.

---

##### `target_value`<sup>Optional</sup> <a name="target_value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.targetValue"></a>

```python
target_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#target_value CassandraTable#target_value}.

---

### CassandraTableBillingMode <a name="CassandraTableBillingMode" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingMode"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingMode.Initializer"></a>

```python
from cdktn_provider_awscc import cassandra_table

cassandraTable.CassandraTableBillingMode(
  mode: str = None,
  provisioned_throughput: CassandraTableBillingModeProvisionedThroughput = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingMode.property.mode">mode</a></code> | <code>str</code> | Capacity mode for the specified table. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingMode.property.provisionedThroughput">provisioned_throughput</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughput">CassandraTableBillingModeProvisionedThroughput</a></code> | Throughput for the specified table, which consists of values for ReadCapacityUnits and WriteCapacityUnits. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingMode.property.mode"></a>

```python
mode: str
```

- *Type:* str

Capacity mode for the specified table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#mode CassandraTable#mode}

---

##### `provisioned_throughput`<sup>Optional</sup> <a name="provisioned_throughput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingMode.property.provisionedThroughput"></a>

```python
provisioned_throughput: CassandraTableBillingModeProvisionedThroughput
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughput">CassandraTableBillingModeProvisionedThroughput</a>

Throughput for the specified table, which consists of values for ReadCapacityUnits and WriteCapacityUnits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#provisioned_throughput CassandraTable#provisioned_throughput}

---

### CassandraTableBillingModeProvisionedThroughput <a name="CassandraTableBillingModeProvisionedThroughput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughput.Initializer"></a>

```python
from cdktn_provider_awscc import cassandra_table

cassandraTable.CassandraTableBillingModeProvisionedThroughput(
  read_capacity_units: typing.Union[int, float] = None,
  write_capacity_units: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughput.property.readCapacityUnits">read_capacity_units</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#read_capacity_units CassandraTable#read_capacity_units}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughput.property.writeCapacityUnits">write_capacity_units</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#write_capacity_units CassandraTable#write_capacity_units}. |

---

##### `read_capacity_units`<sup>Optional</sup> <a name="read_capacity_units" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughput.property.readCapacityUnits"></a>

```python
read_capacity_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#read_capacity_units CassandraTable#read_capacity_units}.

---

##### `write_capacity_units`<sup>Optional</sup> <a name="write_capacity_units" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughput.property.writeCapacityUnits"></a>

```python
write_capacity_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#write_capacity_units CassandraTable#write_capacity_units}.

---

### CassandraTableCdcSpecification <a name="CassandraTableCdcSpecification" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import cassandra_table

cassandraTable.CassandraTableCdcSpecification(
  status: str = None,
  tags: IResolvable | typing.List[CassandraTableCdcSpecificationTags] = None,
  view_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecification.property.status">status</a></code> | <code>str</code> | Indicates whether CDC is enabled or disabled for the table. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecification.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTags">CassandraTableCdcSpecificationTags</a>]</code> | An array of key-value pairs to apply to the CDC stream resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecification.property.viewType">view_type</a></code> | <code>str</code> | Specifies what data should be captured in the change data stream. |

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecification.property.status"></a>

```python
status: str
```

- *Type:* str

Indicates whether CDC is enabled or disabled for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#status CassandraTable#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecification.property.tags"></a>

```python
tags: IResolvable | typing.List[CassandraTableCdcSpecificationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTags">CassandraTableCdcSpecificationTags</a>]

An array of key-value pairs to apply to the CDC stream resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#tags CassandraTable#tags}

---

##### `view_type`<sup>Optional</sup> <a name="view_type" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecification.property.viewType"></a>

```python
view_type: str
```

- *Type:* str

Specifies what data should be captured in the change data stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#view_type CassandraTable#view_type}

---

### CassandraTableCdcSpecificationTags <a name="CassandraTableCdcSpecificationTags" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTags.Initializer"></a>

```python
from cdktn_provider_awscc import cassandra_table

cassandraTable.CassandraTableCdcSpecificationTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#key CassandraTable#key}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#value CassandraTable#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#key CassandraTable#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#value CassandraTable#value}.

---

### CassandraTableClusteringKeyColumns <a name="CassandraTableClusteringKeyColumns" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumns.Initializer"></a>

```python
from cdktn_provider_awscc import cassandra_table

cassandraTable.CassandraTableClusteringKeyColumns(
  column: CassandraTableClusteringKeyColumnsColumn = None,
  order_by: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumns.property.column">column</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumn">CassandraTableClusteringKeyColumnsColumn</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#column CassandraTable#column}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumns.property.orderBy">order_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#order_by CassandraTable#order_by}. |

---

##### `column`<sup>Optional</sup> <a name="column" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumns.property.column"></a>

```python
column: CassandraTableClusteringKeyColumnsColumn
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumn">CassandraTableClusteringKeyColumnsColumn</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#column CassandraTable#column}.

---

##### `order_by`<sup>Optional</sup> <a name="order_by" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumns.property.orderBy"></a>

```python
order_by: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#order_by CassandraTable#order_by}.

---

### CassandraTableClusteringKeyColumnsColumn <a name="CassandraTableClusteringKeyColumnsColumn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumn.Initializer"></a>

```python
from cdktn_provider_awscc import cassandra_table

cassandraTable.CassandraTableClusteringKeyColumnsColumn(
  column_name: str = None,
  column_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumn.property.columnName">column_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#column_name CassandraTable#column_name}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumn.property.columnType">column_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#column_type CassandraTable#column_type}. |

---

##### `column_name`<sup>Optional</sup> <a name="column_name" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumn.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#column_name CassandraTable#column_name}.

---

##### `column_type`<sup>Optional</sup> <a name="column_type" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumn.property.columnType"></a>

```python
column_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#column_type CassandraTable#column_type}.

---

### CassandraTableConfig <a name="CassandraTableConfig" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cassandra_table

cassandraTable.CassandraTableConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  keyspace_name: str,
  partition_key_columns: IResolvable | typing.List[CassandraTablePartitionKeyColumns],
  auto_scaling_specifications: CassandraTableAutoScalingSpecifications = None,
  billing_mode: CassandraTableBillingMode = None,
  cdc_specification: CassandraTableCdcSpecification = None,
  client_side_timestamps_enabled: bool | IResolvable = None,
  clustering_key_columns: IResolvable | typing.List[CassandraTableClusteringKeyColumns] = None,
  default_time_to_live: typing.Union[int, float] = None,
  encryption_specification: CassandraTableEncryptionSpecification = None,
  point_in_time_recovery_enabled: bool | IResolvable = None,
  regular_columns: IResolvable | typing.List[CassandraTableRegularColumns] = None,
  replica_specifications: IResolvable | typing.List[CassandraTableReplicaSpecifications] = None,
  table_name: str = None,
  tags: IResolvable | typing.List[CassandraTableTags] = None,
  warm_throughput: CassandraTableWarmThroughput = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.keyspaceName">keyspace_name</a></code> | <code>str</code> | Name for Cassandra keyspace. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.partitionKeyColumns">partition_key_columns</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumns">CassandraTablePartitionKeyColumns</a>]</code> | Partition key columns of the table. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.autoScalingSpecifications">auto_scaling_specifications</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecifications">CassandraTableAutoScalingSpecifications</a></code> | Represents the read and write settings used for AutoScaling. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.billingMode">billing_mode</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingMode">CassandraTableBillingMode</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#billing_mode CassandraTable#billing_mode}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.cdcSpecification">cdc_specification</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecification">CassandraTableCdcSpecification</a></code> | Represents the CDC configuration for the table. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.clientSideTimestampsEnabled">client_side_timestamps_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether client side timestamps are enabled (true) or disabled (false) on the table. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.clusteringKeyColumns">clustering_key_columns</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumns">CassandraTableClusteringKeyColumns</a>]</code> | Clustering key columns of the table. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.defaultTimeToLive">default_time_to_live</a></code> | <code>typing.Union[int, float]</code> | Default TTL (Time To Live) in seconds, where zero is disabled. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.encryptionSpecification">encryption_specification</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecification">CassandraTableEncryptionSpecification</a></code> | Represents the settings used to enable server-side encryption. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.pointInTimeRecoveryEnabled">point_in_time_recovery_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether point in time recovery is enabled (true) or disabled (false) on the table. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.regularColumns">regular_columns</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumns">CassandraTableRegularColumns</a>]</code> | Non-key columns of the table. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.replicaSpecifications">replica_specifications</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecifications">CassandraTableReplicaSpecifications</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#replica_specifications CassandraTable#replica_specifications}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.tableName">table_name</a></code> | <code>str</code> | Name for Cassandra table. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTags">CassandraTableTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.warmThroughput">warm_throughput</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughput">CassandraTableWarmThroughput</a></code> | Warm throughput configuration for the table. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `keyspace_name`<sup>Required</sup> <a name="keyspace_name" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.keyspaceName"></a>

```python
keyspace_name: str
```

- *Type:* str

Name for Cassandra keyspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#keyspace_name CassandraTable#keyspace_name}

---

##### `partition_key_columns`<sup>Required</sup> <a name="partition_key_columns" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.partitionKeyColumns"></a>

```python
partition_key_columns: IResolvable | typing.List[CassandraTablePartitionKeyColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumns">CassandraTablePartitionKeyColumns</a>]

Partition key columns of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#partition_key_columns CassandraTable#partition_key_columns}

---

##### `auto_scaling_specifications`<sup>Optional</sup> <a name="auto_scaling_specifications" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.autoScalingSpecifications"></a>

```python
auto_scaling_specifications: CassandraTableAutoScalingSpecifications
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecifications">CassandraTableAutoScalingSpecifications</a>

Represents the read and write settings used for AutoScaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#auto_scaling_specifications CassandraTable#auto_scaling_specifications}

---

##### `billing_mode`<sup>Optional</sup> <a name="billing_mode" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.billingMode"></a>

```python
billing_mode: CassandraTableBillingMode
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingMode">CassandraTableBillingMode</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#billing_mode CassandraTable#billing_mode}.

---

##### `cdc_specification`<sup>Optional</sup> <a name="cdc_specification" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.cdcSpecification"></a>

```python
cdc_specification: CassandraTableCdcSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecification">CassandraTableCdcSpecification</a>

Represents the CDC configuration for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#cdc_specification CassandraTable#cdc_specification}

---

##### `client_side_timestamps_enabled`<sup>Optional</sup> <a name="client_side_timestamps_enabled" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.clientSideTimestampsEnabled"></a>

```python
client_side_timestamps_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether client side timestamps are enabled (true) or disabled (false) on the table.

False by default, once it is enabled it cannot be disabled again.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#client_side_timestamps_enabled CassandraTable#client_side_timestamps_enabled}

---

##### `clustering_key_columns`<sup>Optional</sup> <a name="clustering_key_columns" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.clusteringKeyColumns"></a>

```python
clustering_key_columns: IResolvable | typing.List[CassandraTableClusteringKeyColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumns">CassandraTableClusteringKeyColumns</a>]

Clustering key columns of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#clustering_key_columns CassandraTable#clustering_key_columns}

---

##### `default_time_to_live`<sup>Optional</sup> <a name="default_time_to_live" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.defaultTimeToLive"></a>

```python
default_time_to_live: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Default TTL (Time To Live) in seconds, where zero is disabled.

If the value is greater than zero, TTL is enabled for the entire table and an expiration timestamp is added to each column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#default_time_to_live CassandraTable#default_time_to_live}

---

##### `encryption_specification`<sup>Optional</sup> <a name="encryption_specification" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.encryptionSpecification"></a>

```python
encryption_specification: CassandraTableEncryptionSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecification">CassandraTableEncryptionSpecification</a>

Represents the settings used to enable server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#encryption_specification CassandraTable#encryption_specification}

---

##### `point_in_time_recovery_enabled`<sup>Optional</sup> <a name="point_in_time_recovery_enabled" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.pointInTimeRecoveryEnabled"></a>

```python
point_in_time_recovery_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether point in time recovery is enabled (true) or disabled (false) on the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#point_in_time_recovery_enabled CassandraTable#point_in_time_recovery_enabled}

---

##### `regular_columns`<sup>Optional</sup> <a name="regular_columns" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.regularColumns"></a>

```python
regular_columns: IResolvable | typing.List[CassandraTableRegularColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumns">CassandraTableRegularColumns</a>]

Non-key columns of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#regular_columns CassandraTable#regular_columns}

---

##### `replica_specifications`<sup>Optional</sup> <a name="replica_specifications" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.replicaSpecifications"></a>

```python
replica_specifications: IResolvable | typing.List[CassandraTableReplicaSpecifications]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecifications">CassandraTableReplicaSpecifications</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#replica_specifications CassandraTable#replica_specifications}.

---

##### `table_name`<sup>Optional</sup> <a name="table_name" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

Name for Cassandra table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#table_name CassandraTable#table_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[CassandraTableTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTags">CassandraTableTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#tags CassandraTable#tags}

---

##### `warm_throughput`<sup>Optional</sup> <a name="warm_throughput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.warmThroughput"></a>

```python
warm_throughput: CassandraTableWarmThroughput
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughput">CassandraTableWarmThroughput</a>

Warm throughput configuration for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#warm_throughput CassandraTable#warm_throughput}

---

### CassandraTableEncryptionSpecification <a name="CassandraTableEncryptionSpecification" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import cassandra_table

cassandraTable.CassandraTableEncryptionSpecification(
  encryption_type: str = None,
  kms_key_identifier: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecification.property.encryptionType">encryption_type</a></code> | <code>str</code> | Server-side encryption type. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecification.property.kmsKeyIdentifier">kms_key_identifier</a></code> | <code>str</code> | The AWS KMS customer master key (CMK) that should be used for the AWS KMS encryption. |

---

##### `encryption_type`<sup>Optional</sup> <a name="encryption_type" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecification.property.encryptionType"></a>

```python
encryption_type: str
```

- *Type:* str

Server-side encryption type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#encryption_type CassandraTable#encryption_type}

---

##### `kms_key_identifier`<sup>Optional</sup> <a name="kms_key_identifier" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecification.property.kmsKeyIdentifier"></a>

```python
kms_key_identifier: str
```

- *Type:* str

The AWS KMS customer master key (CMK) that should be used for the AWS KMS encryption.

To specify a CMK, use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#kms_key_identifier CassandraTable#kms_key_identifier}

---

### CassandraTablePartitionKeyColumns <a name="CassandraTablePartitionKeyColumns" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumns.Initializer"></a>

```python
from cdktn_provider_awscc import cassandra_table

cassandraTable.CassandraTablePartitionKeyColumns(
  column_name: str,
  column_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumns.property.columnName">column_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#column_name CassandraTable#column_name}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumns.property.columnType">column_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#column_type CassandraTable#column_type}. |

---

##### `column_name`<sup>Required</sup> <a name="column_name" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumns.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#column_name CassandraTable#column_name}.

---

##### `column_type`<sup>Required</sup> <a name="column_type" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumns.property.columnType"></a>

```python
column_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#column_type CassandraTable#column_type}.

---

### CassandraTableRegularColumns <a name="CassandraTableRegularColumns" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumns.Initializer"></a>

```python
from cdktn_provider_awscc import cassandra_table

cassandraTable.CassandraTableRegularColumns(
  column_name: str = None,
  column_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumns.property.columnName">column_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#column_name CassandraTable#column_name}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumns.property.columnType">column_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#column_type CassandraTable#column_type}. |

---

##### `column_name`<sup>Optional</sup> <a name="column_name" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumns.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#column_name CassandraTable#column_name}.

---

##### `column_type`<sup>Optional</sup> <a name="column_type" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumns.property.columnType"></a>

```python
column_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#column_type CassandraTable#column_type}.

---

### CassandraTableReplicaSpecifications <a name="CassandraTableReplicaSpecifications" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecifications.Initializer"></a>

```python
from cdktn_provider_awscc import cassandra_table

cassandraTable.CassandraTableReplicaSpecifications(
  read_capacity_auto_scaling: CassandraTableReplicaSpecificationsReadCapacityAutoScaling = None,
  read_capacity_units: typing.Union[int, float] = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecifications.property.readCapacityAutoScaling">read_capacity_auto_scaling</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScaling">CassandraTableReplicaSpecificationsReadCapacityAutoScaling</a></code> | Represents configuration for auto scaling. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecifications.property.readCapacityUnits">read_capacity_units</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#read_capacity_units CassandraTable#read_capacity_units}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecifications.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#region CassandraTable#region}. |

---

##### `read_capacity_auto_scaling`<sup>Optional</sup> <a name="read_capacity_auto_scaling" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecifications.property.readCapacityAutoScaling"></a>

```python
read_capacity_auto_scaling: CassandraTableReplicaSpecificationsReadCapacityAutoScaling
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScaling">CassandraTableReplicaSpecificationsReadCapacityAutoScaling</a>

Represents configuration for auto scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#read_capacity_auto_scaling CassandraTable#read_capacity_auto_scaling}

---

##### `read_capacity_units`<sup>Optional</sup> <a name="read_capacity_units" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecifications.property.readCapacityUnits"></a>

```python
read_capacity_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#read_capacity_units CassandraTable#read_capacity_units}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecifications.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#region CassandraTable#region}.

---

### CassandraTableReplicaSpecificationsReadCapacityAutoScaling <a name="CassandraTableReplicaSpecificationsReadCapacityAutoScaling" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScaling.Initializer"></a>

```python
from cdktn_provider_awscc import cassandra_table

cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScaling(
  auto_scaling_disabled: bool | IResolvable = None,
  maximum_units: typing.Union[int, float] = None,
  minimum_units: typing.Union[int, float] = None,
  scaling_policy: CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScaling.property.autoScalingDisabled">auto_scaling_disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#auto_scaling_disabled CassandraTable#auto_scaling_disabled}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScaling.property.maximumUnits">maximum_units</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#maximum_units CassandraTable#maximum_units}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScaling.property.minimumUnits">minimum_units</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#minimum_units CassandraTable#minimum_units}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScaling.property.scalingPolicy">scaling_policy</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy">CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy</a></code> | Represents scaling policy. |

---

##### `auto_scaling_disabled`<sup>Optional</sup> <a name="auto_scaling_disabled" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScaling.property.autoScalingDisabled"></a>

```python
auto_scaling_disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#auto_scaling_disabled CassandraTable#auto_scaling_disabled}.

---

##### `maximum_units`<sup>Optional</sup> <a name="maximum_units" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScaling.property.maximumUnits"></a>

```python
maximum_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#maximum_units CassandraTable#maximum_units}.

---

##### `minimum_units`<sup>Optional</sup> <a name="minimum_units" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScaling.property.minimumUnits"></a>

```python
minimum_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#minimum_units CassandraTable#minimum_units}.

---

##### `scaling_policy`<sup>Optional</sup> <a name="scaling_policy" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScaling.property.scalingPolicy"></a>

```python
scaling_policy: CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy">CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy</a>

Represents scaling policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#scaling_policy CassandraTable#scaling_policy}

---

### CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy <a name="CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import cassandra_table

cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy(
  target_tracking_scaling_policy_configuration: CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy.property.targetTrackingScalingPolicyConfiguration">target_tracking_scaling_policy_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a></code> | Represents configuration for target tracking scaling policy. |

---

##### `target_tracking_scaling_policy_configuration`<sup>Optional</sup> <a name="target_tracking_scaling_policy_configuration" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy.property.targetTrackingScalingPolicyConfiguration"></a>

```python
target_tracking_scaling_policy_configuration: CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a>

Represents configuration for target tracking scaling policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#target_tracking_scaling_policy_configuration CassandraTable#target_tracking_scaling_policy_configuration}

---

### CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration <a name="CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import cassandra_table

cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration(
  disable_scale_in: bool | IResolvable = None,
  scale_in_cooldown: typing.Union[int, float] = None,
  scale_out_cooldown: typing.Union[int, float] = None,
  target_value: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.disableScaleIn">disable_scale_in</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#disable_scale_in CassandraTable#disable_scale_in}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.scaleInCooldown">scale_in_cooldown</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#scale_in_cooldown CassandraTable#scale_in_cooldown}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.scaleOutCooldown">scale_out_cooldown</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#scale_out_cooldown CassandraTable#scale_out_cooldown}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.targetValue">target_value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#target_value CassandraTable#target_value}. |

---

##### `disable_scale_in`<sup>Optional</sup> <a name="disable_scale_in" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.disableScaleIn"></a>

```python
disable_scale_in: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#disable_scale_in CassandraTable#disable_scale_in}.

---

##### `scale_in_cooldown`<sup>Optional</sup> <a name="scale_in_cooldown" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.scaleInCooldown"></a>

```python
scale_in_cooldown: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#scale_in_cooldown CassandraTable#scale_in_cooldown}.

---

##### `scale_out_cooldown`<sup>Optional</sup> <a name="scale_out_cooldown" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.scaleOutCooldown"></a>

```python
scale_out_cooldown: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#scale_out_cooldown CassandraTable#scale_out_cooldown}.

---

##### `target_value`<sup>Optional</sup> <a name="target_value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.targetValue"></a>

```python
target_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#target_value CassandraTable#target_value}.

---

### CassandraTableTags <a name="CassandraTableTags" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTags.Initializer"></a>

```python
from cdktn_provider_awscc import cassandra_table

cassandraTable.CassandraTableTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#key CassandraTable#key}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#value CassandraTable#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#key CassandraTable#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#value CassandraTable#value}.

---

### CassandraTableWarmThroughput <a name="CassandraTableWarmThroughput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughput.Initializer"></a>

```python
from cdktn_provider_awscc import cassandra_table

cassandraTable.CassandraTableWarmThroughput(
  read_units_per_second: typing.Union[int, float] = None,
  write_units_per_second: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughput.property.readUnitsPerSecond">read_units_per_second</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#read_units_per_second CassandraTable#read_units_per_second}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughput.property.writeUnitsPerSecond">write_units_per_second</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#write_units_per_second CassandraTable#write_units_per_second}. |

---

##### `read_units_per_second`<sup>Optional</sup> <a name="read_units_per_second" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughput.property.readUnitsPerSecond"></a>

```python
read_units_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#read_units_per_second CassandraTable#read_units_per_second}.

---

##### `write_units_per_second`<sup>Optional</sup> <a name="write_units_per_second" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughput.property.writeUnitsPerSecond"></a>

```python
write_units_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#write_units_per_second CassandraTable#write_units_per_second}.

---

## Classes <a name="Classes" id="Classes"></a>

### CassandraTableAutoScalingSpecificationsOutputReference <a name="CassandraTableAutoScalingSpecificationsOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cassandra_table

cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.putReadCapacityAutoScaling">put_read_capacity_auto_scaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.putWriteCapacityAutoScaling">put_write_capacity_auto_scaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.resetReadCapacityAutoScaling">reset_read_capacity_auto_scaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.resetWriteCapacityAutoScaling">reset_write_capacity_auto_scaling</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_read_capacity_auto_scaling` <a name="put_read_capacity_auto_scaling" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.putReadCapacityAutoScaling"></a>

```python
def put_read_capacity_auto_scaling(
  auto_scaling_disabled: bool | IResolvable = None,
  maximum_units: typing.Union[int, float] = None,
  minimum_units: typing.Union[int, float] = None,
  scaling_policy: CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy = None
) -> None
```

###### `auto_scaling_disabled`<sup>Optional</sup> <a name="auto_scaling_disabled" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.putReadCapacityAutoScaling.parameter.autoScalingDisabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#auto_scaling_disabled CassandraTable#auto_scaling_disabled}.

---

###### `maximum_units`<sup>Optional</sup> <a name="maximum_units" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.putReadCapacityAutoScaling.parameter.maximumUnits"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#maximum_units CassandraTable#maximum_units}.

---

###### `minimum_units`<sup>Optional</sup> <a name="minimum_units" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.putReadCapacityAutoScaling.parameter.minimumUnits"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#minimum_units CassandraTable#minimum_units}.

---

###### `scaling_policy`<sup>Optional</sup> <a name="scaling_policy" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.putReadCapacityAutoScaling.parameter.scalingPolicy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy">CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy</a>

Represents scaling policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#scaling_policy CassandraTable#scaling_policy}

---

##### `put_write_capacity_auto_scaling` <a name="put_write_capacity_auto_scaling" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.putWriteCapacityAutoScaling"></a>

```python
def put_write_capacity_auto_scaling(
  auto_scaling_disabled: bool | IResolvable = None,
  maximum_units: typing.Union[int, float] = None,
  minimum_units: typing.Union[int, float] = None,
  scaling_policy: CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy = None
) -> None
```

###### `auto_scaling_disabled`<sup>Optional</sup> <a name="auto_scaling_disabled" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.putWriteCapacityAutoScaling.parameter.autoScalingDisabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#auto_scaling_disabled CassandraTable#auto_scaling_disabled}.

---

###### `maximum_units`<sup>Optional</sup> <a name="maximum_units" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.putWriteCapacityAutoScaling.parameter.maximumUnits"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#maximum_units CassandraTable#maximum_units}.

---

###### `minimum_units`<sup>Optional</sup> <a name="minimum_units" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.putWriteCapacityAutoScaling.parameter.minimumUnits"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#minimum_units CassandraTable#minimum_units}.

---

###### `scaling_policy`<sup>Optional</sup> <a name="scaling_policy" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.putWriteCapacityAutoScaling.parameter.scalingPolicy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy</a>

Represents scaling policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#scaling_policy CassandraTable#scaling_policy}

---

##### `reset_read_capacity_auto_scaling` <a name="reset_read_capacity_auto_scaling" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.resetReadCapacityAutoScaling"></a>

```python
def reset_read_capacity_auto_scaling() -> None
```

##### `reset_write_capacity_auto_scaling` <a name="reset_write_capacity_auto_scaling" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.resetWriteCapacityAutoScaling"></a>

```python
def reset_write_capacity_auto_scaling() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.property.readCapacityAutoScaling">read_capacity_auto_scaling</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference">CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.property.writeCapacityAutoScaling">write_capacity_auto_scaling</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.property.readCapacityAutoScalingInput">read_capacity_auto_scaling_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling">CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.property.writeCapacityAutoScalingInput">write_capacity_auto_scaling_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecifications">CassandraTableAutoScalingSpecifications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_capacity_auto_scaling`<sup>Required</sup> <a name="read_capacity_auto_scaling" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.property.readCapacityAutoScaling"></a>

```python
read_capacity_auto_scaling: CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference">CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference</a>

---

##### `write_capacity_auto_scaling`<sup>Required</sup> <a name="write_capacity_auto_scaling" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.property.writeCapacityAutoScaling"></a>

```python
write_capacity_auto_scaling: CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference</a>

---

##### `read_capacity_auto_scaling_input`<sup>Optional</sup> <a name="read_capacity_auto_scaling_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.property.readCapacityAutoScalingInput"></a>

```python
read_capacity_auto_scaling_input: IResolvable | CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling">CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling</a>

---

##### `write_capacity_auto_scaling_input`<sup>Optional</sup> <a name="write_capacity_auto_scaling_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.property.writeCapacityAutoScalingInput"></a>

```python
write_capacity_auto_scaling_input: IResolvable | CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CassandraTableAutoScalingSpecifications
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecifications">CassandraTableAutoScalingSpecifications</a>

---


### CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference <a name="CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cassandra_table

cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.putScalingPolicy">put_scaling_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.resetAutoScalingDisabled">reset_auto_scaling_disabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.resetMaximumUnits">reset_maximum_units</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.resetMinimumUnits">reset_minimum_units</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.resetScalingPolicy">reset_scaling_policy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_scaling_policy` <a name="put_scaling_policy" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.putScalingPolicy"></a>

```python
def put_scaling_policy(
  target_tracking_scaling_policy_configuration: CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration = None
) -> None
```

###### `target_tracking_scaling_policy_configuration`<sup>Optional</sup> <a name="target_tracking_scaling_policy_configuration" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.putScalingPolicy.parameter.targetTrackingScalingPolicyConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a>

Represents configuration for target tracking scaling policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#target_tracking_scaling_policy_configuration CassandraTable#target_tracking_scaling_policy_configuration}

---

##### `reset_auto_scaling_disabled` <a name="reset_auto_scaling_disabled" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.resetAutoScalingDisabled"></a>

```python
def reset_auto_scaling_disabled() -> None
```

##### `reset_maximum_units` <a name="reset_maximum_units" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.resetMaximumUnits"></a>

```python
def reset_maximum_units() -> None
```

##### `reset_minimum_units` <a name="reset_minimum_units" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.resetMinimumUnits"></a>

```python
def reset_minimum_units() -> None
```

##### `reset_scaling_policy` <a name="reset_scaling_policy" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.resetScalingPolicy"></a>

```python
def reset_scaling_policy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.scalingPolicy">scaling_policy</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference">CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.autoScalingDisabledInput">auto_scaling_disabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.maximumUnitsInput">maximum_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.minimumUnitsInput">minimum_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.scalingPolicyInput">scaling_policy_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy">CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.autoScalingDisabled">auto_scaling_disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.maximumUnits">maximum_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.minimumUnits">minimum_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling">CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scaling_policy`<sup>Required</sup> <a name="scaling_policy" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.scalingPolicy"></a>

```python
scaling_policy: CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference">CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference</a>

---

##### `auto_scaling_disabled_input`<sup>Optional</sup> <a name="auto_scaling_disabled_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.autoScalingDisabledInput"></a>

```python
auto_scaling_disabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `maximum_units_input`<sup>Optional</sup> <a name="maximum_units_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.maximumUnitsInput"></a>

```python
maximum_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_units_input`<sup>Optional</sup> <a name="minimum_units_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.minimumUnitsInput"></a>

```python
minimum_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scaling_policy_input`<sup>Optional</sup> <a name="scaling_policy_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.scalingPolicyInput"></a>

```python
scaling_policy_input: IResolvable | CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy">CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy</a>

---

##### `auto_scaling_disabled`<sup>Required</sup> <a name="auto_scaling_disabled" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.autoScalingDisabled"></a>

```python
auto_scaling_disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `maximum_units`<sup>Required</sup> <a name="maximum_units" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.maximumUnits"></a>

```python
maximum_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_units`<sup>Required</sup> <a name="minimum_units" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.minimumUnits"></a>

```python
minimum_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling">CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling</a>

---


### CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference <a name="CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cassandra_table

cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.putTargetTrackingScalingPolicyConfiguration">put_target_tracking_scaling_policy_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.resetTargetTrackingScalingPolicyConfiguration">reset_target_tracking_scaling_policy_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_target_tracking_scaling_policy_configuration` <a name="put_target_tracking_scaling_policy_configuration" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.putTargetTrackingScalingPolicyConfiguration"></a>

```python
def put_target_tracking_scaling_policy_configuration(
  disable_scale_in: bool | IResolvable = None,
  scale_in_cooldown: typing.Union[int, float] = None,
  scale_out_cooldown: typing.Union[int, float] = None,
  target_value: typing.Union[int, float] = None
) -> None
```

###### `disable_scale_in`<sup>Optional</sup> <a name="disable_scale_in" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.putTargetTrackingScalingPolicyConfiguration.parameter.disableScaleIn"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#disable_scale_in CassandraTable#disable_scale_in}.

---

###### `scale_in_cooldown`<sup>Optional</sup> <a name="scale_in_cooldown" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.putTargetTrackingScalingPolicyConfiguration.parameter.scaleInCooldown"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#scale_in_cooldown CassandraTable#scale_in_cooldown}.

---

###### `scale_out_cooldown`<sup>Optional</sup> <a name="scale_out_cooldown" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.putTargetTrackingScalingPolicyConfiguration.parameter.scaleOutCooldown"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#scale_out_cooldown CassandraTable#scale_out_cooldown}.

---

###### `target_value`<sup>Optional</sup> <a name="target_value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.putTargetTrackingScalingPolicyConfiguration.parameter.targetValue"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#target_value CassandraTable#target_value}.

---

##### `reset_target_tracking_scaling_policy_configuration` <a name="reset_target_tracking_scaling_policy_configuration" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.resetTargetTrackingScalingPolicyConfiguration"></a>

```python
def reset_target_tracking_scaling_policy_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.property.targetTrackingScalingPolicyConfiguration">target_tracking_scaling_policy_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference">CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.property.targetTrackingScalingPolicyConfigurationInput">target_tracking_scaling_policy_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy">CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_tracking_scaling_policy_configuration`<sup>Required</sup> <a name="target_tracking_scaling_policy_configuration" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.property.targetTrackingScalingPolicyConfiguration"></a>

```python
target_tracking_scaling_policy_configuration: CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference">CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference</a>

---

##### `target_tracking_scaling_policy_configuration_input`<sup>Optional</sup> <a name="target_tracking_scaling_policy_configuration_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.property.targetTrackingScalingPolicyConfigurationInput"></a>

```python
target_tracking_scaling_policy_configuration_input: IResolvable | CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy">CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy</a>

---


### CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference <a name="CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cassandra_table

cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetDisableScaleIn">reset_disable_scale_in</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetScaleInCooldown">reset_scale_in_cooldown</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetScaleOutCooldown">reset_scale_out_cooldown</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetTargetValue">reset_target_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disable_scale_in` <a name="reset_disable_scale_in" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetDisableScaleIn"></a>

```python
def reset_disable_scale_in() -> None
```

##### `reset_scale_in_cooldown` <a name="reset_scale_in_cooldown" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetScaleInCooldown"></a>

```python
def reset_scale_in_cooldown() -> None
```

##### `reset_scale_out_cooldown` <a name="reset_scale_out_cooldown" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetScaleOutCooldown"></a>

```python
def reset_scale_out_cooldown() -> None
```

##### `reset_target_value` <a name="reset_target_value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetTargetValue"></a>

```python
def reset_target_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleInInput">disable_scale_in_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldownInput">scale_in_cooldown_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldownInput">scale_out_cooldown_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValueInput">target_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleIn">disable_scale_in</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldown">scale_in_cooldown</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldown">scale_out_cooldown</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValue">target_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disable_scale_in_input`<sup>Optional</sup> <a name="disable_scale_in_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleInInput"></a>

```python
disable_scale_in_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `scale_in_cooldown_input`<sup>Optional</sup> <a name="scale_in_cooldown_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldownInput"></a>

```python
scale_in_cooldown_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_out_cooldown_input`<sup>Optional</sup> <a name="scale_out_cooldown_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldownInput"></a>

```python
scale_out_cooldown_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_value_input`<sup>Optional</sup> <a name="target_value_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValueInput"></a>

```python
target_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disable_scale_in`<sup>Required</sup> <a name="disable_scale_in" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleIn"></a>

```python
disable_scale_in: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `scale_in_cooldown`<sup>Required</sup> <a name="scale_in_cooldown" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldown"></a>

```python
scale_in_cooldown: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_out_cooldown`<sup>Required</sup> <a name="scale_out_cooldown" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldown"></a>

```python
scale_out_cooldown: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_value`<sup>Required</sup> <a name="target_value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValue"></a>

```python
target_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a>

---


### CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference <a name="CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cassandra_table

cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.putScalingPolicy">put_scaling_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.resetAutoScalingDisabled">reset_auto_scaling_disabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.resetMaximumUnits">reset_maximum_units</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.resetMinimumUnits">reset_minimum_units</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.resetScalingPolicy">reset_scaling_policy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_scaling_policy` <a name="put_scaling_policy" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.putScalingPolicy"></a>

```python
def put_scaling_policy(
  target_tracking_scaling_policy_configuration: CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration = None
) -> None
```

###### `target_tracking_scaling_policy_configuration`<sup>Optional</sup> <a name="target_tracking_scaling_policy_configuration" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.putScalingPolicy.parameter.targetTrackingScalingPolicyConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a>

Represents configuration for target tracking scaling policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#target_tracking_scaling_policy_configuration CassandraTable#target_tracking_scaling_policy_configuration}

---

##### `reset_auto_scaling_disabled` <a name="reset_auto_scaling_disabled" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.resetAutoScalingDisabled"></a>

```python
def reset_auto_scaling_disabled() -> None
```

##### `reset_maximum_units` <a name="reset_maximum_units" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.resetMaximumUnits"></a>

```python
def reset_maximum_units() -> None
```

##### `reset_minimum_units` <a name="reset_minimum_units" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.resetMinimumUnits"></a>

```python
def reset_minimum_units() -> None
```

##### `reset_scaling_policy` <a name="reset_scaling_policy" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.resetScalingPolicy"></a>

```python
def reset_scaling_policy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.scalingPolicy">scaling_policy</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.autoScalingDisabledInput">auto_scaling_disabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.maximumUnitsInput">maximum_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.minimumUnitsInput">minimum_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.scalingPolicyInput">scaling_policy_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.autoScalingDisabled">auto_scaling_disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.maximumUnits">maximum_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.minimumUnits">minimum_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scaling_policy`<sup>Required</sup> <a name="scaling_policy" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.scalingPolicy"></a>

```python
scaling_policy: CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference</a>

---

##### `auto_scaling_disabled_input`<sup>Optional</sup> <a name="auto_scaling_disabled_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.autoScalingDisabledInput"></a>

```python
auto_scaling_disabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `maximum_units_input`<sup>Optional</sup> <a name="maximum_units_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.maximumUnitsInput"></a>

```python
maximum_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_units_input`<sup>Optional</sup> <a name="minimum_units_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.minimumUnitsInput"></a>

```python
minimum_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scaling_policy_input`<sup>Optional</sup> <a name="scaling_policy_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.scalingPolicyInput"></a>

```python
scaling_policy_input: IResolvable | CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy</a>

---

##### `auto_scaling_disabled`<sup>Required</sup> <a name="auto_scaling_disabled" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.autoScalingDisabled"></a>

```python
auto_scaling_disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `maximum_units`<sup>Required</sup> <a name="maximum_units" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.maximumUnits"></a>

```python
maximum_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_units`<sup>Required</sup> <a name="minimum_units" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.minimumUnits"></a>

```python
minimum_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling</a>

---


### CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference <a name="CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cassandra_table

cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.putTargetTrackingScalingPolicyConfiguration">put_target_tracking_scaling_policy_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.resetTargetTrackingScalingPolicyConfiguration">reset_target_tracking_scaling_policy_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_target_tracking_scaling_policy_configuration` <a name="put_target_tracking_scaling_policy_configuration" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.putTargetTrackingScalingPolicyConfiguration"></a>

```python
def put_target_tracking_scaling_policy_configuration(
  disable_scale_in: bool | IResolvable = None,
  scale_in_cooldown: typing.Union[int, float] = None,
  scale_out_cooldown: typing.Union[int, float] = None,
  target_value: typing.Union[int, float] = None
) -> None
```

###### `disable_scale_in`<sup>Optional</sup> <a name="disable_scale_in" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.putTargetTrackingScalingPolicyConfiguration.parameter.disableScaleIn"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#disable_scale_in CassandraTable#disable_scale_in}.

---

###### `scale_in_cooldown`<sup>Optional</sup> <a name="scale_in_cooldown" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.putTargetTrackingScalingPolicyConfiguration.parameter.scaleInCooldown"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#scale_in_cooldown CassandraTable#scale_in_cooldown}.

---

###### `scale_out_cooldown`<sup>Optional</sup> <a name="scale_out_cooldown" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.putTargetTrackingScalingPolicyConfiguration.parameter.scaleOutCooldown"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#scale_out_cooldown CassandraTable#scale_out_cooldown}.

---

###### `target_value`<sup>Optional</sup> <a name="target_value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.putTargetTrackingScalingPolicyConfiguration.parameter.targetValue"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#target_value CassandraTable#target_value}.

---

##### `reset_target_tracking_scaling_policy_configuration` <a name="reset_target_tracking_scaling_policy_configuration" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.resetTargetTrackingScalingPolicyConfiguration"></a>

```python
def reset_target_tracking_scaling_policy_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.property.targetTrackingScalingPolicyConfiguration">target_tracking_scaling_policy_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.property.targetTrackingScalingPolicyConfigurationInput">target_tracking_scaling_policy_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_tracking_scaling_policy_configuration`<sup>Required</sup> <a name="target_tracking_scaling_policy_configuration" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.property.targetTrackingScalingPolicyConfiguration"></a>

```python
target_tracking_scaling_policy_configuration: CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference</a>

---

##### `target_tracking_scaling_policy_configuration_input`<sup>Optional</sup> <a name="target_tracking_scaling_policy_configuration_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.property.targetTrackingScalingPolicyConfigurationInput"></a>

```python
target_tracking_scaling_policy_configuration_input: IResolvable | CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy</a>

---


### CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference <a name="CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cassandra_table

cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetDisableScaleIn">reset_disable_scale_in</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetScaleInCooldown">reset_scale_in_cooldown</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetScaleOutCooldown">reset_scale_out_cooldown</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetTargetValue">reset_target_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disable_scale_in` <a name="reset_disable_scale_in" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetDisableScaleIn"></a>

```python
def reset_disable_scale_in() -> None
```

##### `reset_scale_in_cooldown` <a name="reset_scale_in_cooldown" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetScaleInCooldown"></a>

```python
def reset_scale_in_cooldown() -> None
```

##### `reset_scale_out_cooldown` <a name="reset_scale_out_cooldown" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetScaleOutCooldown"></a>

```python
def reset_scale_out_cooldown() -> None
```

##### `reset_target_value` <a name="reset_target_value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetTargetValue"></a>

```python
def reset_target_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleInInput">disable_scale_in_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldownInput">scale_in_cooldown_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldownInput">scale_out_cooldown_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValueInput">target_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleIn">disable_scale_in</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldown">scale_in_cooldown</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldown">scale_out_cooldown</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValue">target_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disable_scale_in_input`<sup>Optional</sup> <a name="disable_scale_in_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleInInput"></a>

```python
disable_scale_in_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `scale_in_cooldown_input`<sup>Optional</sup> <a name="scale_in_cooldown_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldownInput"></a>

```python
scale_in_cooldown_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_out_cooldown_input`<sup>Optional</sup> <a name="scale_out_cooldown_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldownInput"></a>

```python
scale_out_cooldown_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_value_input`<sup>Optional</sup> <a name="target_value_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValueInput"></a>

```python
target_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disable_scale_in`<sup>Required</sup> <a name="disable_scale_in" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleIn"></a>

```python
disable_scale_in: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `scale_in_cooldown`<sup>Required</sup> <a name="scale_in_cooldown" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldown"></a>

```python
scale_in_cooldown: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_out_cooldown`<sup>Required</sup> <a name="scale_out_cooldown" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldown"></a>

```python
scale_out_cooldown: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_value`<sup>Required</sup> <a name="target_value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValue"></a>

```python
target_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a>

---


### CassandraTableBillingModeOutputReference <a name="CassandraTableBillingModeOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cassandra_table

cassandraTable.CassandraTableBillingModeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.putProvisionedThroughput">put_provisioned_throughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.resetProvisionedThroughput">reset_provisioned_throughput</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_provisioned_throughput` <a name="put_provisioned_throughput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.putProvisionedThroughput"></a>

```python
def put_provisioned_throughput(
  read_capacity_units: typing.Union[int, float] = None,
  write_capacity_units: typing.Union[int, float] = None
) -> None
```

###### `read_capacity_units`<sup>Optional</sup> <a name="read_capacity_units" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.putProvisionedThroughput.parameter.readCapacityUnits"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#read_capacity_units CassandraTable#read_capacity_units}.

---

###### `write_capacity_units`<sup>Optional</sup> <a name="write_capacity_units" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.putProvisionedThroughput.parameter.writeCapacityUnits"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#write_capacity_units CassandraTable#write_capacity_units}.

---

##### `reset_mode` <a name="reset_mode" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_provisioned_throughput` <a name="reset_provisioned_throughput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.resetProvisionedThroughput"></a>

```python
def reset_provisioned_throughput() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.property.provisionedThroughput">provisioned_throughput</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference">CassandraTableBillingModeProvisionedThroughputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.property.provisionedThroughputInput">provisioned_throughput_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughput">CassandraTableBillingModeProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingMode">CassandraTableBillingMode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `provisioned_throughput`<sup>Required</sup> <a name="provisioned_throughput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.property.provisionedThroughput"></a>

```python
provisioned_throughput: CassandraTableBillingModeProvisionedThroughputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference">CassandraTableBillingModeProvisionedThroughputOutputReference</a>

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `provisioned_throughput_input`<sup>Optional</sup> <a name="provisioned_throughput_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.property.provisionedThroughputInput"></a>

```python
provisioned_throughput_input: IResolvable | CassandraTableBillingModeProvisionedThroughput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughput">CassandraTableBillingModeProvisionedThroughput</a>

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CassandraTableBillingMode
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingMode">CassandraTableBillingMode</a>

---


### CassandraTableBillingModeProvisionedThroughputOutputReference <a name="CassandraTableBillingModeProvisionedThroughputOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cassandra_table

cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.resetReadCapacityUnits">reset_read_capacity_units</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.resetWriteCapacityUnits">reset_write_capacity_units</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read_capacity_units` <a name="reset_read_capacity_units" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.resetReadCapacityUnits"></a>

```python
def reset_read_capacity_units() -> None
```

##### `reset_write_capacity_units` <a name="reset_write_capacity_units" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.resetWriteCapacityUnits"></a>

```python
def reset_write_capacity_units() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.property.readCapacityUnitsInput">read_capacity_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.property.writeCapacityUnitsInput">write_capacity_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.property.readCapacityUnits">read_capacity_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.property.writeCapacityUnits">write_capacity_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughput">CassandraTableBillingModeProvisionedThroughput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_capacity_units_input`<sup>Optional</sup> <a name="read_capacity_units_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.property.readCapacityUnitsInput"></a>

```python
read_capacity_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `write_capacity_units_input`<sup>Optional</sup> <a name="write_capacity_units_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.property.writeCapacityUnitsInput"></a>

```python
write_capacity_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `read_capacity_units`<sup>Required</sup> <a name="read_capacity_units" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.property.readCapacityUnits"></a>

```python
read_capacity_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `write_capacity_units`<sup>Required</sup> <a name="write_capacity_units" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.property.writeCapacityUnits"></a>

```python
write_capacity_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CassandraTableBillingModeProvisionedThroughput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughput">CassandraTableBillingModeProvisionedThroughput</a>

---


### CassandraTableCdcSpecificationOutputReference <a name="CassandraTableCdcSpecificationOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cassandra_table

cassandraTable.CassandraTableCdcSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.resetViewType">reset_view_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[CassandraTableCdcSpecificationTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTags">CassandraTableCdcSpecificationTags</a>]

---

##### `reset_status` <a name="reset_status" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_view_type` <a name="reset_view_type" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.resetViewType"></a>

```python
def reset_view_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList">CassandraTableCdcSpecificationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTags">CassandraTableCdcSpecificationTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.property.viewTypeInput">view_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.property.viewType">view_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecification">CassandraTableCdcSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.property.tags"></a>

```python
tags: CassandraTableCdcSpecificationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList">CassandraTableCdcSpecificationTagsList</a>

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[CassandraTableCdcSpecificationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTags">CassandraTableCdcSpecificationTags</a>]

---

##### `view_type_input`<sup>Optional</sup> <a name="view_type_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.property.viewTypeInput"></a>

```python
view_type_input: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `view_type`<sup>Required</sup> <a name="view_type" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.property.viewType"></a>

```python
view_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CassandraTableCdcSpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecification">CassandraTableCdcSpecification</a>

---


### CassandraTableCdcSpecificationTagsList <a name="CassandraTableCdcSpecificationTagsList" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import cassandra_table

cassandraTable.CassandraTableCdcSpecificationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CassandraTableCdcSpecificationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTags">CassandraTableCdcSpecificationTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CassandraTableCdcSpecificationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTags">CassandraTableCdcSpecificationTags</a>]

---


### CassandraTableCdcSpecificationTagsOutputReference <a name="CassandraTableCdcSpecificationTagsOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cassandra_table

cassandraTable.CassandraTableCdcSpecificationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTags">CassandraTableCdcSpecificationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CassandraTableCdcSpecificationTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTags">CassandraTableCdcSpecificationTags</a>

---


### CassandraTableClusteringKeyColumnsColumnOutputReference <a name="CassandraTableClusteringKeyColumnsColumnOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cassandra_table

cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.resetColumnName">reset_column_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.resetColumnType">reset_column_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_column_name` <a name="reset_column_name" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.resetColumnName"></a>

```python
def reset_column_name() -> None
```

##### `reset_column_type` <a name="reset_column_type" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.resetColumnType"></a>

```python
def reset_column_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.property.columnNameInput">column_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.property.columnTypeInput">column_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.property.columnName">column_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.property.columnType">column_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumn">CassandraTableClusteringKeyColumnsColumn</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_name_input`<sup>Optional</sup> <a name="column_name_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.property.columnNameInput"></a>

```python
column_name_input: str
```

- *Type:* str

---

##### `column_type_input`<sup>Optional</sup> <a name="column_type_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.property.columnTypeInput"></a>

```python
column_type_input: str
```

- *Type:* str

---

##### `column_name`<sup>Required</sup> <a name="column_name" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

---

##### `column_type`<sup>Required</sup> <a name="column_type" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.property.columnType"></a>

```python
column_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CassandraTableClusteringKeyColumnsColumn
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumn">CassandraTableClusteringKeyColumnsColumn</a>

---


### CassandraTableClusteringKeyColumnsList <a name="CassandraTableClusteringKeyColumnsList" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.Initializer"></a>

```python
from cdktn_provider_awscc import cassandra_table

cassandraTable.CassandraTableClusteringKeyColumnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CassandraTableClusteringKeyColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumns">CassandraTableClusteringKeyColumns</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CassandraTableClusteringKeyColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumns">CassandraTableClusteringKeyColumns</a>]

---


### CassandraTableClusteringKeyColumnsOutputReference <a name="CassandraTableClusteringKeyColumnsOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cassandra_table

cassandraTable.CassandraTableClusteringKeyColumnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.putColumn">put_column</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.resetColumn">reset_column</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.resetOrderBy">reset_order_by</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_column` <a name="put_column" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.putColumn"></a>

```python
def put_column(
  column_name: str = None,
  column_type: str = None
) -> None
```

###### `column_name`<sup>Optional</sup> <a name="column_name" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.putColumn.parameter.columnName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#column_name CassandraTable#column_name}.

---

###### `column_type`<sup>Optional</sup> <a name="column_type" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.putColumn.parameter.columnType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#column_type CassandraTable#column_type}.

---

##### `reset_column` <a name="reset_column" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.resetColumn"></a>

```python
def reset_column() -> None
```

##### `reset_order_by` <a name="reset_order_by" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.resetOrderBy"></a>

```python
def reset_order_by() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.property.column">column</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference">CassandraTableClusteringKeyColumnsColumnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.property.columnInput">column_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumn">CassandraTableClusteringKeyColumnsColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.property.orderByInput">order_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.property.orderBy">order_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumns">CassandraTableClusteringKeyColumns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.property.column"></a>

```python
column: CassandraTableClusteringKeyColumnsColumnOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference">CassandraTableClusteringKeyColumnsColumnOutputReference</a>

---

##### `column_input`<sup>Optional</sup> <a name="column_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.property.columnInput"></a>

```python
column_input: IResolvable | CassandraTableClusteringKeyColumnsColumn
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumn">CassandraTableClusteringKeyColumnsColumn</a>

---

##### `order_by_input`<sup>Optional</sup> <a name="order_by_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.property.orderByInput"></a>

```python
order_by_input: str
```

- *Type:* str

---

##### `order_by`<sup>Required</sup> <a name="order_by" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.property.orderBy"></a>

```python
order_by: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CassandraTableClusteringKeyColumns
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumns">CassandraTableClusteringKeyColumns</a>

---


### CassandraTableEncryptionSpecificationOutputReference <a name="CassandraTableEncryptionSpecificationOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cassandra_table

cassandraTable.CassandraTableEncryptionSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.resetEncryptionType">reset_encryption_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.resetKmsKeyIdentifier">reset_kms_key_identifier</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_encryption_type` <a name="reset_encryption_type" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.resetEncryptionType"></a>

```python
def reset_encryption_type() -> None
```

##### `reset_kms_key_identifier` <a name="reset_kms_key_identifier" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.resetKmsKeyIdentifier"></a>

```python
def reset_kms_key_identifier() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.property.encryptionTypeInput">encryption_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.property.kmsKeyIdentifierInput">kms_key_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.property.encryptionType">encryption_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.property.kmsKeyIdentifier">kms_key_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecification">CassandraTableEncryptionSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_type_input`<sup>Optional</sup> <a name="encryption_type_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.property.encryptionTypeInput"></a>

```python
encryption_type_input: str
```

- *Type:* str

---

##### `kms_key_identifier_input`<sup>Optional</sup> <a name="kms_key_identifier_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.property.kmsKeyIdentifierInput"></a>

```python
kms_key_identifier_input: str
```

- *Type:* str

---

##### `encryption_type`<sup>Required</sup> <a name="encryption_type" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.property.encryptionType"></a>

```python
encryption_type: str
```

- *Type:* str

---

##### `kms_key_identifier`<sup>Required</sup> <a name="kms_key_identifier" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.property.kmsKeyIdentifier"></a>

```python
kms_key_identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CassandraTableEncryptionSpecification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecification">CassandraTableEncryptionSpecification</a>

---


### CassandraTablePartitionKeyColumnsList <a name="CassandraTablePartitionKeyColumnsList" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.Initializer"></a>

```python
from cdktn_provider_awscc import cassandra_table

cassandraTable.CassandraTablePartitionKeyColumnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CassandraTablePartitionKeyColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumns">CassandraTablePartitionKeyColumns</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CassandraTablePartitionKeyColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumns">CassandraTablePartitionKeyColumns</a>]

---


### CassandraTablePartitionKeyColumnsOutputReference <a name="CassandraTablePartitionKeyColumnsOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cassandra_table

cassandraTable.CassandraTablePartitionKeyColumnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.property.columnNameInput">column_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.property.columnTypeInput">column_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.property.columnName">column_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.property.columnType">column_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumns">CassandraTablePartitionKeyColumns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_name_input`<sup>Optional</sup> <a name="column_name_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.property.columnNameInput"></a>

```python
column_name_input: str
```

- *Type:* str

---

##### `column_type_input`<sup>Optional</sup> <a name="column_type_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.property.columnTypeInput"></a>

```python
column_type_input: str
```

- *Type:* str

---

##### `column_name`<sup>Required</sup> <a name="column_name" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

---

##### `column_type`<sup>Required</sup> <a name="column_type" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.property.columnType"></a>

```python
column_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CassandraTablePartitionKeyColumns
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumns">CassandraTablePartitionKeyColumns</a>

---


### CassandraTableRegularColumnsList <a name="CassandraTableRegularColumnsList" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.Initializer"></a>

```python
from cdktn_provider_awscc import cassandra_table

cassandraTable.CassandraTableRegularColumnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CassandraTableRegularColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumns">CassandraTableRegularColumns</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CassandraTableRegularColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumns">CassandraTableRegularColumns</a>]

---


### CassandraTableRegularColumnsOutputReference <a name="CassandraTableRegularColumnsOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cassandra_table

cassandraTable.CassandraTableRegularColumnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.resetColumnName">reset_column_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.resetColumnType">reset_column_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_column_name` <a name="reset_column_name" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.resetColumnName"></a>

```python
def reset_column_name() -> None
```

##### `reset_column_type` <a name="reset_column_type" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.resetColumnType"></a>

```python
def reset_column_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.property.columnNameInput">column_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.property.columnTypeInput">column_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.property.columnName">column_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.property.columnType">column_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumns">CassandraTableRegularColumns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_name_input`<sup>Optional</sup> <a name="column_name_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.property.columnNameInput"></a>

```python
column_name_input: str
```

- *Type:* str

---

##### `column_type_input`<sup>Optional</sup> <a name="column_type_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.property.columnTypeInput"></a>

```python
column_type_input: str
```

- *Type:* str

---

##### `column_name`<sup>Required</sup> <a name="column_name" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

---

##### `column_type`<sup>Required</sup> <a name="column_type" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.property.columnType"></a>

```python
column_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CassandraTableRegularColumns
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumns">CassandraTableRegularColumns</a>

---


### CassandraTableReplicaSpecificationsList <a name="CassandraTableReplicaSpecificationsList" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.Initializer"></a>

```python
from cdktn_provider_awscc import cassandra_table

cassandraTable.CassandraTableReplicaSpecificationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CassandraTableReplicaSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecifications">CassandraTableReplicaSpecifications</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CassandraTableReplicaSpecifications]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecifications">CassandraTableReplicaSpecifications</a>]

---


### CassandraTableReplicaSpecificationsOutputReference <a name="CassandraTableReplicaSpecificationsOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cassandra_table

cassandraTable.CassandraTableReplicaSpecificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.putReadCapacityAutoScaling">put_read_capacity_auto_scaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.resetReadCapacityAutoScaling">reset_read_capacity_auto_scaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.resetReadCapacityUnits">reset_read_capacity_units</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.resetRegion">reset_region</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_read_capacity_auto_scaling` <a name="put_read_capacity_auto_scaling" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.putReadCapacityAutoScaling"></a>

```python
def put_read_capacity_auto_scaling(
  auto_scaling_disabled: bool | IResolvable = None,
  maximum_units: typing.Union[int, float] = None,
  minimum_units: typing.Union[int, float] = None,
  scaling_policy: CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy = None
) -> None
```

###### `auto_scaling_disabled`<sup>Optional</sup> <a name="auto_scaling_disabled" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.putReadCapacityAutoScaling.parameter.autoScalingDisabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#auto_scaling_disabled CassandraTable#auto_scaling_disabled}.

---

###### `maximum_units`<sup>Optional</sup> <a name="maximum_units" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.putReadCapacityAutoScaling.parameter.maximumUnits"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#maximum_units CassandraTable#maximum_units}.

---

###### `minimum_units`<sup>Optional</sup> <a name="minimum_units" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.putReadCapacityAutoScaling.parameter.minimumUnits"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#minimum_units CassandraTable#minimum_units}.

---

###### `scaling_policy`<sup>Optional</sup> <a name="scaling_policy" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.putReadCapacityAutoScaling.parameter.scalingPolicy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy">CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy</a>

Represents scaling policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#scaling_policy CassandraTable#scaling_policy}

---

##### `reset_read_capacity_auto_scaling` <a name="reset_read_capacity_auto_scaling" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.resetReadCapacityAutoScaling"></a>

```python
def reset_read_capacity_auto_scaling() -> None
```

##### `reset_read_capacity_units` <a name="reset_read_capacity_units" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.resetReadCapacityUnits"></a>

```python
def reset_read_capacity_units() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.property.readCapacityAutoScaling">read_capacity_auto_scaling</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference">CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.property.readCapacityAutoScalingInput">read_capacity_auto_scaling_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScaling">CassandraTableReplicaSpecificationsReadCapacityAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.property.readCapacityUnitsInput">read_capacity_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.property.readCapacityUnits">read_capacity_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecifications">CassandraTableReplicaSpecifications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_capacity_auto_scaling`<sup>Required</sup> <a name="read_capacity_auto_scaling" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.property.readCapacityAutoScaling"></a>

```python
read_capacity_auto_scaling: CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference">CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference</a>

---

##### `read_capacity_auto_scaling_input`<sup>Optional</sup> <a name="read_capacity_auto_scaling_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.property.readCapacityAutoScalingInput"></a>

```python
read_capacity_auto_scaling_input: IResolvable | CassandraTableReplicaSpecificationsReadCapacityAutoScaling
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScaling">CassandraTableReplicaSpecificationsReadCapacityAutoScaling</a>

---

##### `read_capacity_units_input`<sup>Optional</sup> <a name="read_capacity_units_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.property.readCapacityUnitsInput"></a>

```python
read_capacity_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `read_capacity_units`<sup>Required</sup> <a name="read_capacity_units" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.property.readCapacityUnits"></a>

```python
read_capacity_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CassandraTableReplicaSpecifications
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecifications">CassandraTableReplicaSpecifications</a>

---


### CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference <a name="CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cassandra_table

cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.putScalingPolicy">put_scaling_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.resetAutoScalingDisabled">reset_auto_scaling_disabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.resetMaximumUnits">reset_maximum_units</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.resetMinimumUnits">reset_minimum_units</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.resetScalingPolicy">reset_scaling_policy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_scaling_policy` <a name="put_scaling_policy" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.putScalingPolicy"></a>

```python
def put_scaling_policy(
  target_tracking_scaling_policy_configuration: CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration = None
) -> None
```

###### `target_tracking_scaling_policy_configuration`<sup>Optional</sup> <a name="target_tracking_scaling_policy_configuration" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.putScalingPolicy.parameter.targetTrackingScalingPolicyConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a>

Represents configuration for target tracking scaling policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#target_tracking_scaling_policy_configuration CassandraTable#target_tracking_scaling_policy_configuration}

---

##### `reset_auto_scaling_disabled` <a name="reset_auto_scaling_disabled" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.resetAutoScalingDisabled"></a>

```python
def reset_auto_scaling_disabled() -> None
```

##### `reset_maximum_units` <a name="reset_maximum_units" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.resetMaximumUnits"></a>

```python
def reset_maximum_units() -> None
```

##### `reset_minimum_units` <a name="reset_minimum_units" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.resetMinimumUnits"></a>

```python
def reset_minimum_units() -> None
```

##### `reset_scaling_policy` <a name="reset_scaling_policy" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.resetScalingPolicy"></a>

```python
def reset_scaling_policy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.scalingPolicy">scaling_policy</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference">CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.autoScalingDisabledInput">auto_scaling_disabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.maximumUnitsInput">maximum_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.minimumUnitsInput">minimum_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.scalingPolicyInput">scaling_policy_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy">CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.autoScalingDisabled">auto_scaling_disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.maximumUnits">maximum_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.minimumUnits">minimum_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScaling">CassandraTableReplicaSpecificationsReadCapacityAutoScaling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scaling_policy`<sup>Required</sup> <a name="scaling_policy" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.scalingPolicy"></a>

```python
scaling_policy: CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference">CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference</a>

---

##### `auto_scaling_disabled_input`<sup>Optional</sup> <a name="auto_scaling_disabled_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.autoScalingDisabledInput"></a>

```python
auto_scaling_disabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `maximum_units_input`<sup>Optional</sup> <a name="maximum_units_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.maximumUnitsInput"></a>

```python
maximum_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_units_input`<sup>Optional</sup> <a name="minimum_units_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.minimumUnitsInput"></a>

```python
minimum_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scaling_policy_input`<sup>Optional</sup> <a name="scaling_policy_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.scalingPolicyInput"></a>

```python
scaling_policy_input: IResolvable | CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy">CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy</a>

---

##### `auto_scaling_disabled`<sup>Required</sup> <a name="auto_scaling_disabled" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.autoScalingDisabled"></a>

```python
auto_scaling_disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `maximum_units`<sup>Required</sup> <a name="maximum_units" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.maximumUnits"></a>

```python
maximum_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_units`<sup>Required</sup> <a name="minimum_units" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.minimumUnits"></a>

```python
minimum_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CassandraTableReplicaSpecificationsReadCapacityAutoScaling
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScaling">CassandraTableReplicaSpecificationsReadCapacityAutoScaling</a>

---


### CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference <a name="CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cassandra_table

cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.putTargetTrackingScalingPolicyConfiguration">put_target_tracking_scaling_policy_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.resetTargetTrackingScalingPolicyConfiguration">reset_target_tracking_scaling_policy_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_target_tracking_scaling_policy_configuration` <a name="put_target_tracking_scaling_policy_configuration" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.putTargetTrackingScalingPolicyConfiguration"></a>

```python
def put_target_tracking_scaling_policy_configuration(
  disable_scale_in: bool | IResolvable = None,
  scale_in_cooldown: typing.Union[int, float] = None,
  scale_out_cooldown: typing.Union[int, float] = None,
  target_value: typing.Union[int, float] = None
) -> None
```

###### `disable_scale_in`<sup>Optional</sup> <a name="disable_scale_in" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.putTargetTrackingScalingPolicyConfiguration.parameter.disableScaleIn"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#disable_scale_in CassandraTable#disable_scale_in}.

---

###### `scale_in_cooldown`<sup>Optional</sup> <a name="scale_in_cooldown" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.putTargetTrackingScalingPolicyConfiguration.parameter.scaleInCooldown"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#scale_in_cooldown CassandraTable#scale_in_cooldown}.

---

###### `scale_out_cooldown`<sup>Optional</sup> <a name="scale_out_cooldown" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.putTargetTrackingScalingPolicyConfiguration.parameter.scaleOutCooldown"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#scale_out_cooldown CassandraTable#scale_out_cooldown}.

---

###### `target_value`<sup>Optional</sup> <a name="target_value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.putTargetTrackingScalingPolicyConfiguration.parameter.targetValue"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cassandra_table#target_value CassandraTable#target_value}.

---

##### `reset_target_tracking_scaling_policy_configuration` <a name="reset_target_tracking_scaling_policy_configuration" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.resetTargetTrackingScalingPolicyConfiguration"></a>

```python
def reset_target_tracking_scaling_policy_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.property.targetTrackingScalingPolicyConfiguration">target_tracking_scaling_policy_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference">CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.property.targetTrackingScalingPolicyConfigurationInput">target_tracking_scaling_policy_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy">CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_tracking_scaling_policy_configuration`<sup>Required</sup> <a name="target_tracking_scaling_policy_configuration" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.property.targetTrackingScalingPolicyConfiguration"></a>

```python
target_tracking_scaling_policy_configuration: CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference">CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference</a>

---

##### `target_tracking_scaling_policy_configuration_input`<sup>Optional</sup> <a name="target_tracking_scaling_policy_configuration_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.property.targetTrackingScalingPolicyConfigurationInput"></a>

```python
target_tracking_scaling_policy_configuration_input: IResolvable | CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy">CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy</a>

---


### CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference <a name="CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cassandra_table

cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetDisableScaleIn">reset_disable_scale_in</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetScaleInCooldown">reset_scale_in_cooldown</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetScaleOutCooldown">reset_scale_out_cooldown</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetTargetValue">reset_target_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disable_scale_in` <a name="reset_disable_scale_in" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetDisableScaleIn"></a>

```python
def reset_disable_scale_in() -> None
```

##### `reset_scale_in_cooldown` <a name="reset_scale_in_cooldown" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetScaleInCooldown"></a>

```python
def reset_scale_in_cooldown() -> None
```

##### `reset_scale_out_cooldown` <a name="reset_scale_out_cooldown" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetScaleOutCooldown"></a>

```python
def reset_scale_out_cooldown() -> None
```

##### `reset_target_value` <a name="reset_target_value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetTargetValue"></a>

```python
def reset_target_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleInInput">disable_scale_in_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldownInput">scale_in_cooldown_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldownInput">scale_out_cooldown_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValueInput">target_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleIn">disable_scale_in</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldown">scale_in_cooldown</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldown">scale_out_cooldown</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValue">target_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disable_scale_in_input`<sup>Optional</sup> <a name="disable_scale_in_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleInInput"></a>

```python
disable_scale_in_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `scale_in_cooldown_input`<sup>Optional</sup> <a name="scale_in_cooldown_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldownInput"></a>

```python
scale_in_cooldown_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_out_cooldown_input`<sup>Optional</sup> <a name="scale_out_cooldown_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldownInput"></a>

```python
scale_out_cooldown_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_value_input`<sup>Optional</sup> <a name="target_value_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValueInput"></a>

```python
target_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disable_scale_in`<sup>Required</sup> <a name="disable_scale_in" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleIn"></a>

```python
disable_scale_in: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `scale_in_cooldown`<sup>Required</sup> <a name="scale_in_cooldown" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldown"></a>

```python
scale_in_cooldown: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_out_cooldown`<sup>Required</sup> <a name="scale_out_cooldown" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldown"></a>

```python
scale_out_cooldown: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_value`<sup>Required</sup> <a name="target_value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValue"></a>

```python
target_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a>

---


### CassandraTableTagsList <a name="CassandraTableTagsList" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import cassandra_table

cassandraTable.CassandraTableTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CassandraTableTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTags">CassandraTableTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CassandraTableTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTags">CassandraTableTags</a>]

---


### CassandraTableTagsOutputReference <a name="CassandraTableTagsOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cassandra_table

cassandraTable.CassandraTableTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTags">CassandraTableTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CassandraTableTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTags">CassandraTableTags</a>

---


### CassandraTableWarmThroughputOutputReference <a name="CassandraTableWarmThroughputOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cassandra_table

cassandraTable.CassandraTableWarmThroughputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.resetReadUnitsPerSecond">reset_read_units_per_second</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.resetWriteUnitsPerSecond">reset_write_units_per_second</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read_units_per_second` <a name="reset_read_units_per_second" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.resetReadUnitsPerSecond"></a>

```python
def reset_read_units_per_second() -> None
```

##### `reset_write_units_per_second` <a name="reset_write_units_per_second" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.resetWriteUnitsPerSecond"></a>

```python
def reset_write_units_per_second() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.property.readUnitsPerSecondInput">read_units_per_second_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.property.writeUnitsPerSecondInput">write_units_per_second_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.property.readUnitsPerSecond">read_units_per_second</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.property.writeUnitsPerSecond">write_units_per_second</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughput">CassandraTableWarmThroughput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_units_per_second_input`<sup>Optional</sup> <a name="read_units_per_second_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.property.readUnitsPerSecondInput"></a>

```python
read_units_per_second_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `write_units_per_second_input`<sup>Optional</sup> <a name="write_units_per_second_input" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.property.writeUnitsPerSecondInput"></a>

```python
write_units_per_second_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `read_units_per_second`<sup>Required</sup> <a name="read_units_per_second" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.property.readUnitsPerSecond"></a>

```python
read_units_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `write_units_per_second`<sup>Required</sup> <a name="write_units_per_second" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.property.writeUnitsPerSecond"></a>

```python
write_units_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CassandraTableWarmThroughput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughput">CassandraTableWarmThroughput</a>

---



