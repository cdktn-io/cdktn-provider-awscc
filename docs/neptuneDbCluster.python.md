# `neptuneDbCluster` Submodule <a name="`neptuneDbCluster` Submodule" id="@cdktn/provider-awscc.neptuneDbCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NeptuneDbCluster <a name="NeptuneDbCluster" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster awscc_neptune_db_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer"></a>

```python
from cdktn_provider_awscc import neptune_db_cluster

neptuneDbCluster.NeptuneDbCluster(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  associated_roles: IResolvable | typing.List[NeptuneDbClusterAssociatedRoles] = None,
  availability_zones: typing.List[str] = None,
  backup_retention_period: typing.Union[int, float] = None,
  copy_tags_to_snapshot: bool | IResolvable = None,
  db_cluster_identifier: str = None,
  db_cluster_parameter_group_name: str = None,
  db_instance_parameter_group_name: str = None,
  db_port: typing.Union[int, float] = None,
  db_subnet_group_name: str = None,
  deletion_protection: bool | IResolvable = None,
  enable_cloudwatch_logs_exports: typing.List[str] = None,
  engine_version: str = None,
  global_cluster_identifier: str = None,
  iam_auth_enabled: bool | IResolvable = None,
  kms_key_id: str = None,
  network_type: str = None,
  preferred_backup_window: str = None,
  preferred_maintenance_window: str = None,
  restore_to_time: str = None,
  restore_type: str = None,
  serverless_scaling_configuration: NeptuneDbClusterServerlessScalingConfiguration = None,
  snapshot_identifier: str = None,
  source_db_cluster_identifier: str = None,
  storage_encrypted: bool | IResolvable = None,
  tags: IResolvable | typing.List[NeptuneDbClusterTags] = None,
  use_latest_restorable_time: bool | IResolvable = None,
  vpc_security_group_ids: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.associatedRoles">associated_roles</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRoles">NeptuneDbClusterAssociatedRoles</a>]</code> | Provides a list of the AWS Identity and Access Management (IAM) roles that are associated with the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.availabilityZones">availability_zones</a></code> | <code>typing.List[str]</code> | Provides the list of EC2 Availability Zones that instances in the DB cluster can be created in. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.backupRetentionPeriod">backup_retention_period</a></code> | <code>typing.Union[int, float]</code> | Specifies the number of days for which automatic DB snapshots are retained. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.copyTagsToSnapshot">copy_tags_to_snapshot</a></code> | <code>bool \| cdktn.IResolvable</code> | A value that indicates whether to copy all tags from the DB cluster to snapshots of the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.dbClusterIdentifier">db_cluster_identifier</a></code> | <code>str</code> | The DB cluster identifier. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.dbClusterParameterGroupName">db_cluster_parameter_group_name</a></code> | <code>str</code> | Provides the name of the DB cluster parameter group. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.dbInstanceParameterGroupName">db_instance_parameter_group_name</a></code> | <code>str</code> | The name of the DB parameter group to apply to all instances of the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.dbPort">db_port</a></code> | <code>typing.Union[int, float]</code> | The port number on which the DB instances in the DB cluster accept connections. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.dbSubnetGroupName">db_subnet_group_name</a></code> | <code>str</code> | Specifies information on the subnet group associated with the DB cluster, including the name, description, and subnets in the subnet group. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.deletionProtection">deletion_protection</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether or not the DB cluster has deletion protection enabled. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.enableCloudwatchLogsExports">enable_cloudwatch_logs_exports</a></code> | <code>typing.List[str]</code> | Specifies a list of log types that are enabled for export to CloudWatch Logs. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.engineVersion">engine_version</a></code> | <code>str</code> | Indicates the database engine version. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.globalClusterIdentifier">global_cluster_identifier</a></code> | <code>str</code> | The ID of the Neptune global database to which this new DB cluster should be added. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.iamAuthEnabled">iam_auth_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | True if mapping of Amazon Identity and Access Management (IAM) accounts to database accounts is enabled, and otherwise false. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the AWS KMS key that is used to encrypt the database instances in the DB cluster, such as arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.networkType">network_type</a></code> | <code>str</code> | The network type of the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.preferredBackupWindow">preferred_backup_window</a></code> | <code>str</code> | Specifies the daily time range during which automated backups are created if automated backups are enabled, as determined by the BackupRetentionPeriod. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.preferredMaintenanceWindow">preferred_maintenance_window</a></code> | <code>str</code> | Specifies the weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC). |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.restoreToTime">restore_to_time</a></code> | <code>str</code> | Creates a new DB cluster from a DB snapshot or DB cluster snapshot. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.restoreType">restore_type</a></code> | <code>str</code> | Creates a new DB cluster from a DB snapshot or DB cluster snapshot. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.serverlessScalingConfiguration">serverless_scaling_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfiguration">NeptuneDbClusterServerlessScalingConfiguration</a></code> | Contains the scaling configuration used by the Neptune Serverless Instances within this DB cluster. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.snapshotIdentifier">snapshot_identifier</a></code> | <code>str</code> | Specifies the identifier for a DB cluster snapshot. Must match the identifier of an existing snapshot. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.sourceDbClusterIdentifier">source_db_cluster_identifier</a></code> | <code>str</code> | Creates a new DB cluster from a DB snapshot or DB cluster snapshot. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.storageEncrypted">storage_encrypted</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether the DB cluster is encrypted. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTags">NeptuneDbClusterTags</a>]</code> | The tags assigned to this cluster. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.useLatestRestorableTime">use_latest_restorable_time</a></code> | <code>bool \| cdktn.IResolvable</code> | Creates a new DB cluster from a DB snapshot or DB cluster snapshot. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | Provides a list of VPC security groups that the DB cluster belongs to. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `associated_roles`<sup>Optional</sup> <a name="associated_roles" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.associatedRoles"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRoles">NeptuneDbClusterAssociatedRoles</a>]

Provides a list of the AWS Identity and Access Management (IAM) roles that are associated with the DB cluster.

IAM roles that are associated with a DB cluster grant permission for the DB cluster to access other AWS services on your behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#associated_roles NeptuneDbCluster#associated_roles}

---

##### `availability_zones`<sup>Optional</sup> <a name="availability_zones" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.availabilityZones"></a>

- *Type:* typing.List[str]

Provides the list of EC2 Availability Zones that instances in the DB cluster can be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#availability_zones NeptuneDbCluster#availability_zones}

---

##### `backup_retention_period`<sup>Optional</sup> <a name="backup_retention_period" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.backupRetentionPeriod"></a>

- *Type:* typing.Union[int, float]

Specifies the number of days for which automatic DB snapshots are retained.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#backup_retention_period NeptuneDbCluster#backup_retention_period}

---

##### `copy_tags_to_snapshot`<sup>Optional</sup> <a name="copy_tags_to_snapshot" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.copyTagsToSnapshot"></a>

- *Type:* bool | cdktn.IResolvable

A value that indicates whether to copy all tags from the DB cluster to snapshots of the DB cluster.

The default behaviour is not to copy them.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#copy_tags_to_snapshot NeptuneDbCluster#copy_tags_to_snapshot}

---

##### `db_cluster_identifier`<sup>Optional</sup> <a name="db_cluster_identifier" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.dbClusterIdentifier"></a>

- *Type:* str

The DB cluster identifier.

Contains a user-supplied DB cluster identifier. This identifier is the unique key that identifies a DB cluster stored as a lowercase string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#db_cluster_identifier NeptuneDbCluster#db_cluster_identifier}

---

##### `db_cluster_parameter_group_name`<sup>Optional</sup> <a name="db_cluster_parameter_group_name" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.dbClusterParameterGroupName"></a>

- *Type:* str

Provides the name of the DB cluster parameter group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#db_cluster_parameter_group_name NeptuneDbCluster#db_cluster_parameter_group_name}

---

##### `db_instance_parameter_group_name`<sup>Optional</sup> <a name="db_instance_parameter_group_name" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.dbInstanceParameterGroupName"></a>

- *Type:* str

The name of the DB parameter group to apply to all instances of the DB cluster.

Used only in case of a major EngineVersion upgrade request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#db_instance_parameter_group_name NeptuneDbCluster#db_instance_parameter_group_name}

---

##### `db_port`<sup>Optional</sup> <a name="db_port" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.dbPort"></a>

- *Type:* typing.Union[int, float]

The port number on which the DB instances in the DB cluster accept connections.

If not specified, the default port used is `8182`.

Note: `Port` property will soon be deprecated from this resource. Please update existing templates to rename it with new property `DBPort` having same functionalities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#db_port NeptuneDbCluster#db_port}

---

##### `db_subnet_group_name`<sup>Optional</sup> <a name="db_subnet_group_name" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.dbSubnetGroupName"></a>

- *Type:* str

Specifies information on the subnet group associated with the DB cluster, including the name, description, and subnets in the subnet group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#db_subnet_group_name NeptuneDbCluster#db_subnet_group_name}

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.deletionProtection"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether or not the DB cluster has deletion protection enabled.

The database can't be deleted when deletion protection is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#deletion_protection NeptuneDbCluster#deletion_protection}

---

##### `enable_cloudwatch_logs_exports`<sup>Optional</sup> <a name="enable_cloudwatch_logs_exports" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.enableCloudwatchLogsExports"></a>

- *Type:* typing.List[str]

Specifies a list of log types that are enabled for export to CloudWatch Logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#enable_cloudwatch_logs_exports NeptuneDbCluster#enable_cloudwatch_logs_exports}

---

##### `engine_version`<sup>Optional</sup> <a name="engine_version" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.engineVersion"></a>

- *Type:* str

Indicates the database engine version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#engine_version NeptuneDbCluster#engine_version}

---

##### `global_cluster_identifier`<sup>Optional</sup> <a name="global_cluster_identifier" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.globalClusterIdentifier"></a>

- *Type:* str

The ID of the Neptune global database to which this new DB cluster should be added.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#global_cluster_identifier NeptuneDbCluster#global_cluster_identifier}

---

##### `iam_auth_enabled`<sup>Optional</sup> <a name="iam_auth_enabled" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.iamAuthEnabled"></a>

- *Type:* bool | cdktn.IResolvable

True if mapping of Amazon Identity and Access Management (IAM) accounts to database accounts is enabled, and otherwise false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#iam_auth_enabled NeptuneDbCluster#iam_auth_enabled}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the AWS KMS key that is used to encrypt the database instances in the DB cluster, such as arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef.

If you enable the StorageEncrypted property but don't specify this property, the default KMS key is used. If you specify this property, you must set the StorageEncrypted property to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#kms_key_id NeptuneDbCluster#kms_key_id}

---

##### `network_type`<sup>Optional</sup> <a name="network_type" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.networkType"></a>

- *Type:* str

The network type of the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#network_type NeptuneDbCluster#network_type}

---

##### `preferred_backup_window`<sup>Optional</sup> <a name="preferred_backup_window" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.preferredBackupWindow"></a>

- *Type:* str

Specifies the daily time range during which automated backups are created if automated backups are enabled, as determined by the BackupRetentionPeriod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#preferred_backup_window NeptuneDbCluster#preferred_backup_window}

---

##### `preferred_maintenance_window`<sup>Optional</sup> <a name="preferred_maintenance_window" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.preferredMaintenanceWindow"></a>

- *Type:* str

Specifies the weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#preferred_maintenance_window NeptuneDbCluster#preferred_maintenance_window}

---

##### `restore_to_time`<sup>Optional</sup> <a name="restore_to_time" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.restoreToTime"></a>

- *Type:* str

Creates a new DB cluster from a DB snapshot or DB cluster snapshot.

If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group.

If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#restore_to_time NeptuneDbCluster#restore_to_time}

---

##### `restore_type`<sup>Optional</sup> <a name="restore_type" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.restoreType"></a>

- *Type:* str

Creates a new DB cluster from a DB snapshot or DB cluster snapshot.

If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group.

If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#restore_type NeptuneDbCluster#restore_type}

---

##### `serverless_scaling_configuration`<sup>Optional</sup> <a name="serverless_scaling_configuration" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.serverlessScalingConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfiguration">NeptuneDbClusterServerlessScalingConfiguration</a>

Contains the scaling configuration used by the Neptune Serverless Instances within this DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#serverless_scaling_configuration NeptuneDbCluster#serverless_scaling_configuration}

---

##### `snapshot_identifier`<sup>Optional</sup> <a name="snapshot_identifier" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.snapshotIdentifier"></a>

- *Type:* str

Specifies the identifier for a DB cluster snapshot. Must match the identifier of an existing snapshot.

After you restore a DB cluster using a SnapshotIdentifier, you must specify the same SnapshotIdentifier for any future updates to the DB cluster. When you specify this property for an update, the DB cluster is not restored from the snapshot again, and the data in the database is not changed.

However, if you don't specify the SnapshotIdentifier, an empty DB cluster is created, and the original DB cluster is deleted. If you specify a property that is different from the previous snapshot restore property, the DB cluster is restored from the snapshot specified by the SnapshotIdentifier, and the original DB cluster is deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#snapshot_identifier NeptuneDbCluster#snapshot_identifier}

---

##### `source_db_cluster_identifier`<sup>Optional</sup> <a name="source_db_cluster_identifier" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.sourceDbClusterIdentifier"></a>

- *Type:* str

Creates a new DB cluster from a DB snapshot or DB cluster snapshot.

If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group.

If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#source_db_cluster_identifier NeptuneDbCluster#source_db_cluster_identifier}

---

##### `storage_encrypted`<sup>Optional</sup> <a name="storage_encrypted" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.storageEncrypted"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether the DB cluster is encrypted.

If you specify the KmsKeyId property, then you must enable encryption and set this property to true.

If you enable the StorageEncrypted property but don't specify KmsKeyId property, then the default KMS key is used. If you specify KmsKeyId property, then that KMS Key is used to encrypt the database instances in the DB cluster.

If you specify the SourceDBClusterIdentifier property and don't specify this property or disable it. The value is inherited from the source DB cluster, and if the DB cluster is encrypted, the KmsKeyId property from the source cluster is used.

If you specify the DBSnapshotIdentifier and don't specify this property or disable it. The value is inherited from the snapshot, and the specified KmsKeyId property from the snapshot is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#storage_encrypted NeptuneDbCluster#storage_encrypted}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTags">NeptuneDbClusterTags</a>]

The tags assigned to this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#tags NeptuneDbCluster#tags}

---

##### `use_latest_restorable_time`<sup>Optional</sup> <a name="use_latest_restorable_time" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.useLatestRestorableTime"></a>

- *Type:* bool | cdktn.IResolvable

Creates a new DB cluster from a DB snapshot or DB cluster snapshot.

If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group.

If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#use_latest_restorable_time NeptuneDbCluster#use_latest_restorable_time}

---

##### `vpc_security_group_ids`<sup>Optional</sup> <a name="vpc_security_group_ids" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.Initializer.parameter.vpcSecurityGroupIds"></a>

- *Type:* typing.List[str]

Provides a list of VPC security groups that the DB cluster belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#vpc_security_group_ids NeptuneDbCluster#vpc_security_group_ids}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.putAssociatedRoles">put_associated_roles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.putServerlessScalingConfiguration">put_serverless_scaling_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetAssociatedRoles">reset_associated_roles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetAvailabilityZones">reset_availability_zones</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetBackupRetentionPeriod">reset_backup_retention_period</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetCopyTagsToSnapshot">reset_copy_tags_to_snapshot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetDbClusterIdentifier">reset_db_cluster_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetDbClusterParameterGroupName">reset_db_cluster_parameter_group_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetDbInstanceParameterGroupName">reset_db_instance_parameter_group_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetDbPort">reset_db_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetDbSubnetGroupName">reset_db_subnet_group_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetDeletionProtection">reset_deletion_protection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetEnableCloudwatchLogsExports">reset_enable_cloudwatch_logs_exports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetEngineVersion">reset_engine_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetGlobalClusterIdentifier">reset_global_cluster_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetIamAuthEnabled">reset_iam_auth_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetNetworkType">reset_network_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetPreferredBackupWindow">reset_preferred_backup_window</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetPreferredMaintenanceWindow">reset_preferred_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetRestoreToTime">reset_restore_to_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetRestoreType">reset_restore_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetServerlessScalingConfiguration">reset_serverless_scaling_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetSnapshotIdentifier">reset_snapshot_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetSourceDbClusterIdentifier">reset_source_db_cluster_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetStorageEncrypted">reset_storage_encrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetUseLatestRestorableTime">reset_use_latest_restorable_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetVpcSecurityGroupIds">reset_vpc_security_group_ids</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_associated_roles` <a name="put_associated_roles" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.putAssociatedRoles"></a>

```python
def put_associated_roles(
  value: IResolvable | typing.List[NeptuneDbClusterAssociatedRoles]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.putAssociatedRoles.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRoles">NeptuneDbClusterAssociatedRoles</a>]

---

##### `put_serverless_scaling_configuration` <a name="put_serverless_scaling_configuration" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.putServerlessScalingConfiguration"></a>

```python
def put_serverless_scaling_configuration(
  max_capacity: typing.Union[int, float] = None,
  min_capacity: typing.Union[int, float] = None
) -> None
```

###### `max_capacity`<sup>Optional</sup> <a name="max_capacity" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.putServerlessScalingConfiguration.parameter.maxCapacity"></a>

- *Type:* typing.Union[int, float]

The maximum number of Neptune capacity units (NCUs) for a DB instance in an Neptune Serverless cluster.

You can specify NCU values in half-step increments, such as 40, 40.5, 41, and so on. The smallest value you can use is 2.5, whereas the largest is 128.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#max_capacity NeptuneDbCluster#max_capacity}

---

###### `min_capacity`<sup>Optional</sup> <a name="min_capacity" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.putServerlessScalingConfiguration.parameter.minCapacity"></a>

- *Type:* typing.Union[int, float]

The minimum number of Neptune capacity units (NCUs) for a DB instance in an Neptune Serverless cluster.

You can specify NCU values in half-step increments, such as 8, 8.5, 9, and so on. The smallest value you can use is 1, whereas the largest is 128.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#min_capacity NeptuneDbCluster#min_capacity}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[NeptuneDbClusterTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTags">NeptuneDbClusterTags</a>]

---

##### `reset_associated_roles` <a name="reset_associated_roles" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetAssociatedRoles"></a>

```python
def reset_associated_roles() -> None
```

##### `reset_availability_zones` <a name="reset_availability_zones" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetAvailabilityZones"></a>

```python
def reset_availability_zones() -> None
```

##### `reset_backup_retention_period` <a name="reset_backup_retention_period" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetBackupRetentionPeriod"></a>

```python
def reset_backup_retention_period() -> None
```

##### `reset_copy_tags_to_snapshot` <a name="reset_copy_tags_to_snapshot" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetCopyTagsToSnapshot"></a>

```python
def reset_copy_tags_to_snapshot() -> None
```

##### `reset_db_cluster_identifier` <a name="reset_db_cluster_identifier" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetDbClusterIdentifier"></a>

```python
def reset_db_cluster_identifier() -> None
```

##### `reset_db_cluster_parameter_group_name` <a name="reset_db_cluster_parameter_group_name" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetDbClusterParameterGroupName"></a>

```python
def reset_db_cluster_parameter_group_name() -> None
```

##### `reset_db_instance_parameter_group_name` <a name="reset_db_instance_parameter_group_name" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetDbInstanceParameterGroupName"></a>

```python
def reset_db_instance_parameter_group_name() -> None
```

##### `reset_db_port` <a name="reset_db_port" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetDbPort"></a>

```python
def reset_db_port() -> None
```

##### `reset_db_subnet_group_name` <a name="reset_db_subnet_group_name" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetDbSubnetGroupName"></a>

```python
def reset_db_subnet_group_name() -> None
```

##### `reset_deletion_protection` <a name="reset_deletion_protection" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetDeletionProtection"></a>

```python
def reset_deletion_protection() -> None
```

##### `reset_enable_cloudwatch_logs_exports` <a name="reset_enable_cloudwatch_logs_exports" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetEnableCloudwatchLogsExports"></a>

```python
def reset_enable_cloudwatch_logs_exports() -> None
```

##### `reset_engine_version` <a name="reset_engine_version" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetEngineVersion"></a>

```python
def reset_engine_version() -> None
```

##### `reset_global_cluster_identifier` <a name="reset_global_cluster_identifier" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetGlobalClusterIdentifier"></a>

```python
def reset_global_cluster_identifier() -> None
```

##### `reset_iam_auth_enabled` <a name="reset_iam_auth_enabled" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetIamAuthEnabled"></a>

```python
def reset_iam_auth_enabled() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_network_type` <a name="reset_network_type" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetNetworkType"></a>

```python
def reset_network_type() -> None
```

##### `reset_preferred_backup_window` <a name="reset_preferred_backup_window" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetPreferredBackupWindow"></a>

```python
def reset_preferred_backup_window() -> None
```

##### `reset_preferred_maintenance_window` <a name="reset_preferred_maintenance_window" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetPreferredMaintenanceWindow"></a>

```python
def reset_preferred_maintenance_window() -> None
```

##### `reset_restore_to_time` <a name="reset_restore_to_time" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetRestoreToTime"></a>

```python
def reset_restore_to_time() -> None
```

##### `reset_restore_type` <a name="reset_restore_type" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetRestoreType"></a>

```python
def reset_restore_type() -> None
```

##### `reset_serverless_scaling_configuration` <a name="reset_serverless_scaling_configuration" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetServerlessScalingConfiguration"></a>

```python
def reset_serverless_scaling_configuration() -> None
```

##### `reset_snapshot_identifier` <a name="reset_snapshot_identifier" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetSnapshotIdentifier"></a>

```python
def reset_snapshot_identifier() -> None
```

##### `reset_source_db_cluster_identifier` <a name="reset_source_db_cluster_identifier" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetSourceDbClusterIdentifier"></a>

```python
def reset_source_db_cluster_identifier() -> None
```

##### `reset_storage_encrypted` <a name="reset_storage_encrypted" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetStorageEncrypted"></a>

```python
def reset_storage_encrypted() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_use_latest_restorable_time` <a name="reset_use_latest_restorable_time" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetUseLatestRestorableTime"></a>

```python
def reset_use_latest_restorable_time() -> None
```

##### `reset_vpc_security_group_ids` <a name="reset_vpc_security_group_ids" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.resetVpcSecurityGroupIds"></a>

```python
def reset_vpc_security_group_ids() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a NeptuneDbCluster resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.isConstruct"></a>

```python
from cdktn_provider_awscc import neptune_db_cluster

neptuneDbCluster.NeptuneDbCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.isTerraformElement"></a>

```python
from cdktn_provider_awscc import neptune_db_cluster

neptuneDbCluster.NeptuneDbCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.isTerraformResource"></a>

```python
from cdktn_provider_awscc import neptune_db_cluster

neptuneDbCluster.NeptuneDbCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import neptune_db_cluster

neptuneDbCluster.NeptuneDbCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a NeptuneDbCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NeptuneDbCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NeptuneDbCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NeptuneDbCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.associatedRoles">associated_roles</a></code> | <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList">NeptuneDbClusterAssociatedRolesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.clusterResourceId">cluster_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.port">port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.readEndpoint">read_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.serverlessScalingConfiguration">serverless_scaling_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference">NeptuneDbClusterServerlessScalingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList">NeptuneDbClusterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.associatedRolesInput">associated_roles_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRoles">NeptuneDbClusterAssociatedRoles</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.availabilityZonesInput">availability_zones_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.backupRetentionPeriodInput">backup_retention_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.copyTagsToSnapshotInput">copy_tags_to_snapshot_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dbClusterIdentifierInput">db_cluster_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dbClusterParameterGroupNameInput">db_cluster_parameter_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dbInstanceParameterGroupNameInput">db_instance_parameter_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dbPortInput">db_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dbSubnetGroupNameInput">db_subnet_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.deletionProtectionInput">deletion_protection_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.enableCloudwatchLogsExportsInput">enable_cloudwatch_logs_exports_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.engineVersionInput">engine_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.globalClusterIdentifierInput">global_cluster_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.iamAuthEnabledInput">iam_auth_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.networkTypeInput">network_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.preferredBackupWindowInput">preferred_backup_window_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.preferredMaintenanceWindowInput">preferred_maintenance_window_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.restoreToTimeInput">restore_to_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.restoreTypeInput">restore_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.serverlessScalingConfigurationInput">serverless_scaling_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfiguration">NeptuneDbClusterServerlessScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.snapshotIdentifierInput">snapshot_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.sourceDbClusterIdentifierInput">source_db_cluster_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.storageEncryptedInput">storage_encrypted_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTags">NeptuneDbClusterTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.useLatestRestorableTimeInput">use_latest_restorable_time_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.vpcSecurityGroupIdsInput">vpc_security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.availabilityZones">availability_zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.backupRetentionPeriod">backup_retention_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.copyTagsToSnapshot">copy_tags_to_snapshot</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dbClusterIdentifier">db_cluster_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dbClusterParameterGroupName">db_cluster_parameter_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dbInstanceParameterGroupName">db_instance_parameter_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dbPort">db_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dbSubnetGroupName">db_subnet_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.deletionProtection">deletion_protection</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.enableCloudwatchLogsExports">enable_cloudwatch_logs_exports</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.engineVersion">engine_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.globalClusterIdentifier">global_cluster_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.iamAuthEnabled">iam_auth_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.networkType">network_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.preferredBackupWindow">preferred_backup_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.preferredMaintenanceWindow">preferred_maintenance_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.restoreToTime">restore_to_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.restoreType">restore_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.snapshotIdentifier">snapshot_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.sourceDbClusterIdentifier">source_db_cluster_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.storageEncrypted">storage_encrypted</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.useLatestRestorableTime">use_latest_restorable_time</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `associated_roles`<sup>Required</sup> <a name="associated_roles" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.associatedRoles"></a>

```python
associated_roles: NeptuneDbClusterAssociatedRolesList
```

- *Type:* <a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList">NeptuneDbClusterAssociatedRolesList</a>

---

##### `cluster_resource_id`<sup>Required</sup> <a name="cluster_resource_id" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.clusterResourceId"></a>

```python
cluster_resource_id: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.port"></a>

```python
port: str
```

- *Type:* str

---

##### `read_endpoint`<sup>Required</sup> <a name="read_endpoint" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.readEndpoint"></a>

```python
read_endpoint: str
```

- *Type:* str

---

##### `serverless_scaling_configuration`<sup>Required</sup> <a name="serverless_scaling_configuration" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.serverlessScalingConfiguration"></a>

```python
serverless_scaling_configuration: NeptuneDbClusterServerlessScalingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference">NeptuneDbClusterServerlessScalingConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.tags"></a>

```python
tags: NeptuneDbClusterTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList">NeptuneDbClusterTagsList</a>

---

##### `associated_roles_input`<sup>Optional</sup> <a name="associated_roles_input" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.associatedRolesInput"></a>

```python
associated_roles_input: IResolvable | typing.List[NeptuneDbClusterAssociatedRoles]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRoles">NeptuneDbClusterAssociatedRoles</a>]

---

##### `availability_zones_input`<sup>Optional</sup> <a name="availability_zones_input" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.availabilityZonesInput"></a>

```python
availability_zones_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `backup_retention_period_input`<sup>Optional</sup> <a name="backup_retention_period_input" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.backupRetentionPeriodInput"></a>

```python
backup_retention_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `copy_tags_to_snapshot_input`<sup>Optional</sup> <a name="copy_tags_to_snapshot_input" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.copyTagsToSnapshotInput"></a>

```python
copy_tags_to_snapshot_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `db_cluster_identifier_input`<sup>Optional</sup> <a name="db_cluster_identifier_input" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dbClusterIdentifierInput"></a>

```python
db_cluster_identifier_input: str
```

- *Type:* str

---

##### `db_cluster_parameter_group_name_input`<sup>Optional</sup> <a name="db_cluster_parameter_group_name_input" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dbClusterParameterGroupNameInput"></a>

```python
db_cluster_parameter_group_name_input: str
```

- *Type:* str

---

##### `db_instance_parameter_group_name_input`<sup>Optional</sup> <a name="db_instance_parameter_group_name_input" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dbInstanceParameterGroupNameInput"></a>

```python
db_instance_parameter_group_name_input: str
```

- *Type:* str

---

##### `db_port_input`<sup>Optional</sup> <a name="db_port_input" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dbPortInput"></a>

```python
db_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_subnet_group_name_input`<sup>Optional</sup> <a name="db_subnet_group_name_input" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dbSubnetGroupNameInput"></a>

```python
db_subnet_group_name_input: str
```

- *Type:* str

---

##### `deletion_protection_input`<sup>Optional</sup> <a name="deletion_protection_input" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.deletionProtectionInput"></a>

```python
deletion_protection_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_cloudwatch_logs_exports_input`<sup>Optional</sup> <a name="enable_cloudwatch_logs_exports_input" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.enableCloudwatchLogsExportsInput"></a>

```python
enable_cloudwatch_logs_exports_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `engine_version_input`<sup>Optional</sup> <a name="engine_version_input" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.engineVersionInput"></a>

```python
engine_version_input: str
```

- *Type:* str

---

##### `global_cluster_identifier_input`<sup>Optional</sup> <a name="global_cluster_identifier_input" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.globalClusterIdentifierInput"></a>

```python
global_cluster_identifier_input: str
```

- *Type:* str

---

##### `iam_auth_enabled_input`<sup>Optional</sup> <a name="iam_auth_enabled_input" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.iamAuthEnabledInput"></a>

```python
iam_auth_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `network_type_input`<sup>Optional</sup> <a name="network_type_input" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.networkTypeInput"></a>

```python
network_type_input: str
```

- *Type:* str

---

##### `preferred_backup_window_input`<sup>Optional</sup> <a name="preferred_backup_window_input" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.preferredBackupWindowInput"></a>

```python
preferred_backup_window_input: str
```

- *Type:* str

---

##### `preferred_maintenance_window_input`<sup>Optional</sup> <a name="preferred_maintenance_window_input" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.preferredMaintenanceWindowInput"></a>

```python
preferred_maintenance_window_input: str
```

- *Type:* str

---

##### `restore_to_time_input`<sup>Optional</sup> <a name="restore_to_time_input" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.restoreToTimeInput"></a>

```python
restore_to_time_input: str
```

- *Type:* str

---

##### `restore_type_input`<sup>Optional</sup> <a name="restore_type_input" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.restoreTypeInput"></a>

```python
restore_type_input: str
```

- *Type:* str

---

##### `serverless_scaling_configuration_input`<sup>Optional</sup> <a name="serverless_scaling_configuration_input" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.serverlessScalingConfigurationInput"></a>

```python
serverless_scaling_configuration_input: IResolvable | NeptuneDbClusterServerlessScalingConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfiguration">NeptuneDbClusterServerlessScalingConfiguration</a>

---

##### `snapshot_identifier_input`<sup>Optional</sup> <a name="snapshot_identifier_input" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.snapshotIdentifierInput"></a>

```python
snapshot_identifier_input: str
```

- *Type:* str

---

##### `source_db_cluster_identifier_input`<sup>Optional</sup> <a name="source_db_cluster_identifier_input" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.sourceDbClusterIdentifierInput"></a>

```python
source_db_cluster_identifier_input: str
```

- *Type:* str

---

##### `storage_encrypted_input`<sup>Optional</sup> <a name="storage_encrypted_input" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.storageEncryptedInput"></a>

```python
storage_encrypted_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[NeptuneDbClusterTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTags">NeptuneDbClusterTags</a>]

---

##### `use_latest_restorable_time_input`<sup>Optional</sup> <a name="use_latest_restorable_time_input" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.useLatestRestorableTimeInput"></a>

```python
use_latest_restorable_time_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `vpc_security_group_ids_input`<sup>Optional</sup> <a name="vpc_security_group_ids_input" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.vpcSecurityGroupIdsInput"></a>

```python
vpc_security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `availability_zones`<sup>Required</sup> <a name="availability_zones" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.availabilityZones"></a>

```python
availability_zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `backup_retention_period`<sup>Required</sup> <a name="backup_retention_period" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.backupRetentionPeriod"></a>

```python
backup_retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `copy_tags_to_snapshot`<sup>Required</sup> <a name="copy_tags_to_snapshot" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.copyTagsToSnapshot"></a>

```python
copy_tags_to_snapshot: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `db_cluster_identifier`<sup>Required</sup> <a name="db_cluster_identifier" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dbClusterIdentifier"></a>

```python
db_cluster_identifier: str
```

- *Type:* str

---

##### `db_cluster_parameter_group_name`<sup>Required</sup> <a name="db_cluster_parameter_group_name" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dbClusterParameterGroupName"></a>

```python
db_cluster_parameter_group_name: str
```

- *Type:* str

---

##### `db_instance_parameter_group_name`<sup>Required</sup> <a name="db_instance_parameter_group_name" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dbInstanceParameterGroupName"></a>

```python
db_instance_parameter_group_name: str
```

- *Type:* str

---

##### `db_port`<sup>Required</sup> <a name="db_port" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dbPort"></a>

```python
db_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_subnet_group_name`<sup>Required</sup> <a name="db_subnet_group_name" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.dbSubnetGroupName"></a>

```python
db_subnet_group_name: str
```

- *Type:* str

---

##### `deletion_protection`<sup>Required</sup> <a name="deletion_protection" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.deletionProtection"></a>

```python
deletion_protection: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_cloudwatch_logs_exports`<sup>Required</sup> <a name="enable_cloudwatch_logs_exports" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.enableCloudwatchLogsExports"></a>

```python
enable_cloudwatch_logs_exports: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `engine_version`<sup>Required</sup> <a name="engine_version" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

---

##### `global_cluster_identifier`<sup>Required</sup> <a name="global_cluster_identifier" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.globalClusterIdentifier"></a>

```python
global_cluster_identifier: str
```

- *Type:* str

---

##### `iam_auth_enabled`<sup>Required</sup> <a name="iam_auth_enabled" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.iamAuthEnabled"></a>

```python
iam_auth_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `network_type`<sup>Required</sup> <a name="network_type" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.networkType"></a>

```python
network_type: str
```

- *Type:* str

---

##### `preferred_backup_window`<sup>Required</sup> <a name="preferred_backup_window" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.preferredBackupWindow"></a>

```python
preferred_backup_window: str
```

- *Type:* str

---

##### `preferred_maintenance_window`<sup>Required</sup> <a name="preferred_maintenance_window" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.preferredMaintenanceWindow"></a>

```python
preferred_maintenance_window: str
```

- *Type:* str

---

##### `restore_to_time`<sup>Required</sup> <a name="restore_to_time" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.restoreToTime"></a>

```python
restore_to_time: str
```

- *Type:* str

---

##### `restore_type`<sup>Required</sup> <a name="restore_type" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.restoreType"></a>

```python
restore_type: str
```

- *Type:* str

---

##### `snapshot_identifier`<sup>Required</sup> <a name="snapshot_identifier" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.snapshotIdentifier"></a>

```python
snapshot_identifier: str
```

- *Type:* str

---

##### `source_db_cluster_identifier`<sup>Required</sup> <a name="source_db_cluster_identifier" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.sourceDbClusterIdentifier"></a>

```python
source_db_cluster_identifier: str
```

- *Type:* str

---

##### `storage_encrypted`<sup>Required</sup> <a name="storage_encrypted" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.storageEncrypted"></a>

```python
storage_encrypted: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `use_latest_restorable_time`<sup>Required</sup> <a name="use_latest_restorable_time" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.useLatestRestorableTime"></a>

```python
use_latest_restorable_time: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `vpc_security_group_ids`<sup>Required</sup> <a name="vpc_security_group_ids" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.vpcSecurityGroupIds"></a>

```python
vpc_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NeptuneDbClusterAssociatedRoles <a name="NeptuneDbClusterAssociatedRoles" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRoles.Initializer"></a>

```python
from cdktn_provider_awscc import neptune_db_cluster

neptuneDbCluster.NeptuneDbClusterAssociatedRoles(
  feature_name: str = None,
  role_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRoles.property.featureName">feature_name</a></code> | <code>str</code> | The name of the feature associated with the AWS Identity and Access Management (IAM) role. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRoles.property.roleArn">role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the IAM role that is associated with the DB cluster. |

---

##### `feature_name`<sup>Optional</sup> <a name="feature_name" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRoles.property.featureName"></a>

```python
feature_name: str
```

- *Type:* str

The name of the feature associated with the AWS Identity and Access Management (IAM) role.

For the list of supported feature names, see DBEngineVersion in the Amazon Neptune API Reference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#feature_name NeptuneDbCluster#feature_name}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRoles.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the IAM role that is associated with the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#role_arn NeptuneDbCluster#role_arn}

---

### NeptuneDbClusterConfig <a name="NeptuneDbClusterConfig" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.Initializer"></a>

```python
from cdktn_provider_awscc import neptune_db_cluster

neptuneDbCluster.NeptuneDbClusterConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  associated_roles: IResolvable | typing.List[NeptuneDbClusterAssociatedRoles] = None,
  availability_zones: typing.List[str] = None,
  backup_retention_period: typing.Union[int, float] = None,
  copy_tags_to_snapshot: bool | IResolvable = None,
  db_cluster_identifier: str = None,
  db_cluster_parameter_group_name: str = None,
  db_instance_parameter_group_name: str = None,
  db_port: typing.Union[int, float] = None,
  db_subnet_group_name: str = None,
  deletion_protection: bool | IResolvable = None,
  enable_cloudwatch_logs_exports: typing.List[str] = None,
  engine_version: str = None,
  global_cluster_identifier: str = None,
  iam_auth_enabled: bool | IResolvable = None,
  kms_key_id: str = None,
  network_type: str = None,
  preferred_backup_window: str = None,
  preferred_maintenance_window: str = None,
  restore_to_time: str = None,
  restore_type: str = None,
  serverless_scaling_configuration: NeptuneDbClusterServerlessScalingConfiguration = None,
  snapshot_identifier: str = None,
  source_db_cluster_identifier: str = None,
  storage_encrypted: bool | IResolvable = None,
  tags: IResolvable | typing.List[NeptuneDbClusterTags] = None,
  use_latest_restorable_time: bool | IResolvable = None,
  vpc_security_group_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.associatedRoles">associated_roles</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRoles">NeptuneDbClusterAssociatedRoles</a>]</code> | Provides a list of the AWS Identity and Access Management (IAM) roles that are associated with the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.availabilityZones">availability_zones</a></code> | <code>typing.List[str]</code> | Provides the list of EC2 Availability Zones that instances in the DB cluster can be created in. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.backupRetentionPeriod">backup_retention_period</a></code> | <code>typing.Union[int, float]</code> | Specifies the number of days for which automatic DB snapshots are retained. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.copyTagsToSnapshot">copy_tags_to_snapshot</a></code> | <code>bool \| cdktn.IResolvable</code> | A value that indicates whether to copy all tags from the DB cluster to snapshots of the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.dbClusterIdentifier">db_cluster_identifier</a></code> | <code>str</code> | The DB cluster identifier. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.dbClusterParameterGroupName">db_cluster_parameter_group_name</a></code> | <code>str</code> | Provides the name of the DB cluster parameter group. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.dbInstanceParameterGroupName">db_instance_parameter_group_name</a></code> | <code>str</code> | The name of the DB parameter group to apply to all instances of the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.dbPort">db_port</a></code> | <code>typing.Union[int, float]</code> | The port number on which the DB instances in the DB cluster accept connections. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.dbSubnetGroupName">db_subnet_group_name</a></code> | <code>str</code> | Specifies information on the subnet group associated with the DB cluster, including the name, description, and subnets in the subnet group. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.deletionProtection">deletion_protection</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether or not the DB cluster has deletion protection enabled. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.enableCloudwatchLogsExports">enable_cloudwatch_logs_exports</a></code> | <code>typing.List[str]</code> | Specifies a list of log types that are enabled for export to CloudWatch Logs. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.engineVersion">engine_version</a></code> | <code>str</code> | Indicates the database engine version. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.globalClusterIdentifier">global_cluster_identifier</a></code> | <code>str</code> | The ID of the Neptune global database to which this new DB cluster should be added. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.iamAuthEnabled">iam_auth_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | True if mapping of Amazon Identity and Access Management (IAM) accounts to database accounts is enabled, and otherwise false. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the AWS KMS key that is used to encrypt the database instances in the DB cluster, such as arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.networkType">network_type</a></code> | <code>str</code> | The network type of the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.preferredBackupWindow">preferred_backup_window</a></code> | <code>str</code> | Specifies the daily time range during which automated backups are created if automated backups are enabled, as determined by the BackupRetentionPeriod. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.preferredMaintenanceWindow">preferred_maintenance_window</a></code> | <code>str</code> | Specifies the weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC). |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.restoreToTime">restore_to_time</a></code> | <code>str</code> | Creates a new DB cluster from a DB snapshot or DB cluster snapshot. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.restoreType">restore_type</a></code> | <code>str</code> | Creates a new DB cluster from a DB snapshot or DB cluster snapshot. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.serverlessScalingConfiguration">serverless_scaling_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfiguration">NeptuneDbClusterServerlessScalingConfiguration</a></code> | Contains the scaling configuration used by the Neptune Serverless Instances within this DB cluster. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.snapshotIdentifier">snapshot_identifier</a></code> | <code>str</code> | Specifies the identifier for a DB cluster snapshot. Must match the identifier of an existing snapshot. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.sourceDbClusterIdentifier">source_db_cluster_identifier</a></code> | <code>str</code> | Creates a new DB cluster from a DB snapshot or DB cluster snapshot. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.storageEncrypted">storage_encrypted</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether the DB cluster is encrypted. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTags">NeptuneDbClusterTags</a>]</code> | The tags assigned to this cluster. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.useLatestRestorableTime">use_latest_restorable_time</a></code> | <code>bool \| cdktn.IResolvable</code> | Creates a new DB cluster from a DB snapshot or DB cluster snapshot. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | Provides a list of VPC security groups that the DB cluster belongs to. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `associated_roles`<sup>Optional</sup> <a name="associated_roles" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.associatedRoles"></a>

```python
associated_roles: IResolvable | typing.List[NeptuneDbClusterAssociatedRoles]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRoles">NeptuneDbClusterAssociatedRoles</a>]

Provides a list of the AWS Identity and Access Management (IAM) roles that are associated with the DB cluster.

IAM roles that are associated with a DB cluster grant permission for the DB cluster to access other AWS services on your behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#associated_roles NeptuneDbCluster#associated_roles}

---

##### `availability_zones`<sup>Optional</sup> <a name="availability_zones" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.availabilityZones"></a>

```python
availability_zones: typing.List[str]
```

- *Type:* typing.List[str]

Provides the list of EC2 Availability Zones that instances in the DB cluster can be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#availability_zones NeptuneDbCluster#availability_zones}

---

##### `backup_retention_period`<sup>Optional</sup> <a name="backup_retention_period" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.backupRetentionPeriod"></a>

```python
backup_retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the number of days for which automatic DB snapshots are retained.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#backup_retention_period NeptuneDbCluster#backup_retention_period}

---

##### `copy_tags_to_snapshot`<sup>Optional</sup> <a name="copy_tags_to_snapshot" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.copyTagsToSnapshot"></a>

```python
copy_tags_to_snapshot: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A value that indicates whether to copy all tags from the DB cluster to snapshots of the DB cluster.

The default behaviour is not to copy them.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#copy_tags_to_snapshot NeptuneDbCluster#copy_tags_to_snapshot}

---

##### `db_cluster_identifier`<sup>Optional</sup> <a name="db_cluster_identifier" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.dbClusterIdentifier"></a>

```python
db_cluster_identifier: str
```

- *Type:* str

The DB cluster identifier.

Contains a user-supplied DB cluster identifier. This identifier is the unique key that identifies a DB cluster stored as a lowercase string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#db_cluster_identifier NeptuneDbCluster#db_cluster_identifier}

---

##### `db_cluster_parameter_group_name`<sup>Optional</sup> <a name="db_cluster_parameter_group_name" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.dbClusterParameterGroupName"></a>

```python
db_cluster_parameter_group_name: str
```

- *Type:* str

Provides the name of the DB cluster parameter group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#db_cluster_parameter_group_name NeptuneDbCluster#db_cluster_parameter_group_name}

---

##### `db_instance_parameter_group_name`<sup>Optional</sup> <a name="db_instance_parameter_group_name" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.dbInstanceParameterGroupName"></a>

```python
db_instance_parameter_group_name: str
```

- *Type:* str

The name of the DB parameter group to apply to all instances of the DB cluster.

Used only in case of a major EngineVersion upgrade request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#db_instance_parameter_group_name NeptuneDbCluster#db_instance_parameter_group_name}

---

##### `db_port`<sup>Optional</sup> <a name="db_port" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.dbPort"></a>

```python
db_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The port number on which the DB instances in the DB cluster accept connections.

If not specified, the default port used is `8182`.

Note: `Port` property will soon be deprecated from this resource. Please update existing templates to rename it with new property `DBPort` having same functionalities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#db_port NeptuneDbCluster#db_port}

---

##### `db_subnet_group_name`<sup>Optional</sup> <a name="db_subnet_group_name" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.dbSubnetGroupName"></a>

```python
db_subnet_group_name: str
```

- *Type:* str

Specifies information on the subnet group associated with the DB cluster, including the name, description, and subnets in the subnet group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#db_subnet_group_name NeptuneDbCluster#db_subnet_group_name}

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.deletionProtection"></a>

```python
deletion_protection: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether or not the DB cluster has deletion protection enabled.

The database can't be deleted when deletion protection is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#deletion_protection NeptuneDbCluster#deletion_protection}

---

##### `enable_cloudwatch_logs_exports`<sup>Optional</sup> <a name="enable_cloudwatch_logs_exports" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.enableCloudwatchLogsExports"></a>

```python
enable_cloudwatch_logs_exports: typing.List[str]
```

- *Type:* typing.List[str]

Specifies a list of log types that are enabled for export to CloudWatch Logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#enable_cloudwatch_logs_exports NeptuneDbCluster#enable_cloudwatch_logs_exports}

---

##### `engine_version`<sup>Optional</sup> <a name="engine_version" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

Indicates the database engine version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#engine_version NeptuneDbCluster#engine_version}

---

##### `global_cluster_identifier`<sup>Optional</sup> <a name="global_cluster_identifier" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.globalClusterIdentifier"></a>

```python
global_cluster_identifier: str
```

- *Type:* str

The ID of the Neptune global database to which this new DB cluster should be added.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#global_cluster_identifier NeptuneDbCluster#global_cluster_identifier}

---

##### `iam_auth_enabled`<sup>Optional</sup> <a name="iam_auth_enabled" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.iamAuthEnabled"></a>

```python
iam_auth_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

True if mapping of Amazon Identity and Access Management (IAM) accounts to database accounts is enabled, and otherwise false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#iam_auth_enabled NeptuneDbCluster#iam_auth_enabled}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the AWS KMS key that is used to encrypt the database instances in the DB cluster, such as arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef.

If you enable the StorageEncrypted property but don't specify this property, the default KMS key is used. If you specify this property, you must set the StorageEncrypted property to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#kms_key_id NeptuneDbCluster#kms_key_id}

---

##### `network_type`<sup>Optional</sup> <a name="network_type" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.networkType"></a>

```python
network_type: str
```

- *Type:* str

The network type of the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#network_type NeptuneDbCluster#network_type}

---

##### `preferred_backup_window`<sup>Optional</sup> <a name="preferred_backup_window" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.preferredBackupWindow"></a>

```python
preferred_backup_window: str
```

- *Type:* str

Specifies the daily time range during which automated backups are created if automated backups are enabled, as determined by the BackupRetentionPeriod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#preferred_backup_window NeptuneDbCluster#preferred_backup_window}

---

##### `preferred_maintenance_window`<sup>Optional</sup> <a name="preferred_maintenance_window" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.preferredMaintenanceWindow"></a>

```python
preferred_maintenance_window: str
```

- *Type:* str

Specifies the weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#preferred_maintenance_window NeptuneDbCluster#preferred_maintenance_window}

---

##### `restore_to_time`<sup>Optional</sup> <a name="restore_to_time" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.restoreToTime"></a>

```python
restore_to_time: str
```

- *Type:* str

Creates a new DB cluster from a DB snapshot or DB cluster snapshot.

If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group.

If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#restore_to_time NeptuneDbCluster#restore_to_time}

---

##### `restore_type`<sup>Optional</sup> <a name="restore_type" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.restoreType"></a>

```python
restore_type: str
```

- *Type:* str

Creates a new DB cluster from a DB snapshot or DB cluster snapshot.

If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group.

If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#restore_type NeptuneDbCluster#restore_type}

---

##### `serverless_scaling_configuration`<sup>Optional</sup> <a name="serverless_scaling_configuration" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.serverlessScalingConfiguration"></a>

```python
serverless_scaling_configuration: NeptuneDbClusterServerlessScalingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfiguration">NeptuneDbClusterServerlessScalingConfiguration</a>

Contains the scaling configuration used by the Neptune Serverless Instances within this DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#serverless_scaling_configuration NeptuneDbCluster#serverless_scaling_configuration}

---

##### `snapshot_identifier`<sup>Optional</sup> <a name="snapshot_identifier" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.snapshotIdentifier"></a>

```python
snapshot_identifier: str
```

- *Type:* str

Specifies the identifier for a DB cluster snapshot. Must match the identifier of an existing snapshot.

After you restore a DB cluster using a SnapshotIdentifier, you must specify the same SnapshotIdentifier for any future updates to the DB cluster. When you specify this property for an update, the DB cluster is not restored from the snapshot again, and the data in the database is not changed.

However, if you don't specify the SnapshotIdentifier, an empty DB cluster is created, and the original DB cluster is deleted. If you specify a property that is different from the previous snapshot restore property, the DB cluster is restored from the snapshot specified by the SnapshotIdentifier, and the original DB cluster is deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#snapshot_identifier NeptuneDbCluster#snapshot_identifier}

---

##### `source_db_cluster_identifier`<sup>Optional</sup> <a name="source_db_cluster_identifier" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.sourceDbClusterIdentifier"></a>

```python
source_db_cluster_identifier: str
```

- *Type:* str

Creates a new DB cluster from a DB snapshot or DB cluster snapshot.

If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group.

If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#source_db_cluster_identifier NeptuneDbCluster#source_db_cluster_identifier}

---

##### `storage_encrypted`<sup>Optional</sup> <a name="storage_encrypted" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.storageEncrypted"></a>

```python
storage_encrypted: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether the DB cluster is encrypted.

If you specify the KmsKeyId property, then you must enable encryption and set this property to true.

If you enable the StorageEncrypted property but don't specify KmsKeyId property, then the default KMS key is used. If you specify KmsKeyId property, then that KMS Key is used to encrypt the database instances in the DB cluster.

If you specify the SourceDBClusterIdentifier property and don't specify this property or disable it. The value is inherited from the source DB cluster, and if the DB cluster is encrypted, the KmsKeyId property from the source cluster is used.

If you specify the DBSnapshotIdentifier and don't specify this property or disable it. The value is inherited from the snapshot, and the specified KmsKeyId property from the snapshot is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#storage_encrypted NeptuneDbCluster#storage_encrypted}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[NeptuneDbClusterTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTags">NeptuneDbClusterTags</a>]

The tags assigned to this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#tags NeptuneDbCluster#tags}

---

##### `use_latest_restorable_time`<sup>Optional</sup> <a name="use_latest_restorable_time" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.useLatestRestorableTime"></a>

```python
use_latest_restorable_time: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Creates a new DB cluster from a DB snapshot or DB cluster snapshot.

If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group.

If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#use_latest_restorable_time NeptuneDbCluster#use_latest_restorable_time}

---

##### `vpc_security_group_ids`<sup>Optional</sup> <a name="vpc_security_group_ids" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterConfig.property.vpcSecurityGroupIds"></a>

```python
vpc_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Provides a list of VPC security groups that the DB cluster belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#vpc_security_group_ids NeptuneDbCluster#vpc_security_group_ids}

---

### NeptuneDbClusterServerlessScalingConfiguration <a name="NeptuneDbClusterServerlessScalingConfiguration" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import neptune_db_cluster

neptuneDbCluster.NeptuneDbClusterServerlessScalingConfiguration(
  max_capacity: typing.Union[int, float] = None,
  min_capacity: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfiguration.property.maxCapacity">max_capacity</a></code> | <code>typing.Union[int, float]</code> | The maximum number of Neptune capacity units (NCUs) for a DB instance in an Neptune Serverless cluster. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfiguration.property.minCapacity">min_capacity</a></code> | <code>typing.Union[int, float]</code> | The minimum number of Neptune capacity units (NCUs) for a DB instance in an Neptune Serverless cluster. |

---

##### `max_capacity`<sup>Optional</sup> <a name="max_capacity" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfiguration.property.maxCapacity"></a>

```python
max_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of Neptune capacity units (NCUs) for a DB instance in an Neptune Serverless cluster.

You can specify NCU values in half-step increments, such as 40, 40.5, 41, and so on. The smallest value you can use is 2.5, whereas the largest is 128.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#max_capacity NeptuneDbCluster#max_capacity}

---

##### `min_capacity`<sup>Optional</sup> <a name="min_capacity" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfiguration.property.minCapacity"></a>

```python
min_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum number of Neptune capacity units (NCUs) for a DB instance in an Neptune Serverless cluster.

You can specify NCU values in half-step increments, such as 8, 8.5, 9, and so on. The smallest value you can use is 1, whereas the largest is 128.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#min_capacity NeptuneDbCluster#min_capacity}

---

### NeptuneDbClusterTags <a name="NeptuneDbClusterTags" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTags.Initializer"></a>

```python
from cdktn_provider_awscc import neptune_db_cluster

neptuneDbCluster.NeptuneDbClusterTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#key NeptuneDbCluster#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/neptune_db_cluster#value NeptuneDbCluster#value}

---

## Classes <a name="Classes" id="Classes"></a>

### NeptuneDbClusterAssociatedRolesList <a name="NeptuneDbClusterAssociatedRolesList" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.Initializer"></a>

```python
from cdktn_provider_awscc import neptune_db_cluster

neptuneDbCluster.NeptuneDbClusterAssociatedRolesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NeptuneDbClusterAssociatedRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRoles">NeptuneDbClusterAssociatedRoles</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[NeptuneDbClusterAssociatedRoles]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRoles">NeptuneDbClusterAssociatedRoles</a>]

---


### NeptuneDbClusterAssociatedRolesOutputReference <a name="NeptuneDbClusterAssociatedRolesOutputReference" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import neptune_db_cluster

neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.resetFeatureName">reset_feature_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_feature_name` <a name="reset_feature_name" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.resetFeatureName"></a>

```python
def reset_feature_name() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.property.featureNameInput">feature_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.property.featureName">feature_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRoles">NeptuneDbClusterAssociatedRoles</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `feature_name_input`<sup>Optional</sup> <a name="feature_name_input" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.property.featureNameInput"></a>

```python
feature_name_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `feature_name`<sup>Required</sup> <a name="feature_name" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.property.featureName"></a>

```python
feature_name: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRolesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NeptuneDbClusterAssociatedRoles
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterAssociatedRoles">NeptuneDbClusterAssociatedRoles</a>

---


### NeptuneDbClusterServerlessScalingConfigurationOutputReference <a name="NeptuneDbClusterServerlessScalingConfigurationOutputReference" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import neptune_db_cluster

neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.resetMaxCapacity">reset_max_capacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.resetMinCapacity">reset_min_capacity</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_capacity` <a name="reset_max_capacity" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.resetMaxCapacity"></a>

```python
def reset_max_capacity() -> None
```

##### `reset_min_capacity` <a name="reset_min_capacity" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.resetMinCapacity"></a>

```python
def reset_min_capacity() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.property.maxCapacityInput">max_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.property.minCapacityInput">min_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.property.maxCapacity">max_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.property.minCapacity">min_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfiguration">NeptuneDbClusterServerlessScalingConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_capacity_input`<sup>Optional</sup> <a name="max_capacity_input" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.property.maxCapacityInput"></a>

```python
max_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_capacity_input`<sup>Optional</sup> <a name="min_capacity_input" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.property.minCapacityInput"></a>

```python
min_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_capacity`<sup>Required</sup> <a name="max_capacity" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.property.maxCapacity"></a>

```python
max_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_capacity`<sup>Required</sup> <a name="min_capacity" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.property.minCapacity"></a>

```python
min_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NeptuneDbClusterServerlessScalingConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterServerlessScalingConfiguration">NeptuneDbClusterServerlessScalingConfiguration</a>

---


### NeptuneDbClusterTagsList <a name="NeptuneDbClusterTagsList" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import neptune_db_cluster

neptuneDbCluster.NeptuneDbClusterTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NeptuneDbClusterTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTags">NeptuneDbClusterTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[NeptuneDbClusterTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTags">NeptuneDbClusterTags</a>]

---


### NeptuneDbClusterTagsOutputReference <a name="NeptuneDbClusterTagsOutputReference" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import neptune_db_cluster

neptuneDbCluster.NeptuneDbClusterTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTags">NeptuneDbClusterTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NeptuneDbClusterTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.neptuneDbCluster.NeptuneDbClusterTags">NeptuneDbClusterTags</a>

---



