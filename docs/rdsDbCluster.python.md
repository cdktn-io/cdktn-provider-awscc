# `rdsDbCluster` Submodule <a name="`rdsDbCluster` Submodule" id="@cdktn/provider-awscc.rdsDbCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsDbCluster <a name="RdsDbCluster" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster awscc_rds_db_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_cluster

rdsDbCluster.RdsDbCluster(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  allocated_storage: typing.Union[int, float] = None,
  associated_roles: IResolvable | typing.List[RdsDbClusterAssociatedRoles] = None,
  auto_minor_version_upgrade: bool | IResolvable = None,
  availability_zones: typing.List[str] = None,
  backtrack_window: typing.Union[int, float] = None,
  backup_retention_period: typing.Union[int, float] = None,
  cluster_scalability_type: str = None,
  copy_tags_to_snapshot: bool | IResolvable = None,
  database_insights_mode: str = None,
  database_name: str = None,
  db_cluster_identifier: str = None,
  db_cluster_instance_class: str = None,
  db_cluster_parameter_group_name: str = None,
  db_instance_parameter_group_name: str = None,
  db_subnet_group_name: str = None,
  db_system_id: str = None,
  delete_automated_backups: bool | IResolvable = None,
  deletion_protection: bool | IResolvable = None,
  domain: str = None,
  domain_iam_role_name: str = None,
  enable_cloudwatch_logs_exports: typing.List[str] = None,
  enable_global_write_forwarding: bool | IResolvable = None,
  enable_http_endpoint: bool | IResolvable = None,
  enable_iam_database_authentication: bool | IResolvable = None,
  enable_local_write_forwarding: bool | IResolvable = None,
  engine: str = None,
  engine_lifecycle_support: str = None,
  engine_mode: str = None,
  engine_version: str = None,
  global_cluster_identifier: str = None,
  iops: typing.Union[int, float] = None,
  kms_key_id: str = None,
  manage_master_user_password: bool | IResolvable = None,
  master_user_authentication_type: str = None,
  master_username: str = None,
  master_user_password: str = None,
  master_user_secret: RdsDbClusterMasterUserSecret = None,
  monitoring_interval: typing.Union[int, float] = None,
  monitoring_role_arn: str = None,
  network_type: str = None,
  performance_insights_enabled: bool | IResolvable = None,
  performance_insights_kms_key_id: str = None,
  performance_insights_retention_period: typing.Union[int, float] = None,
  port: typing.Union[int, float] = None,
  preferred_backup_window: str = None,
  preferred_maintenance_window: str = None,
  publicly_accessible: bool | IResolvable = None,
  replication_source_identifier: str = None,
  restore_to_time: str = None,
  restore_type: str = None,
  scaling_configuration: RdsDbClusterScalingConfiguration = None,
  serverless_v2_scaling_configuration: RdsDbClusterServerlessV2ScalingConfiguration = None,
  snapshot_identifier: str = None,
  source_db_cluster_identifier: str = None,
  source_db_cluster_resource_id: str = None,
  source_region: str = None,
  storage_encrypted: bool | IResolvable = None,
  storage_type: str = None,
  tags: IResolvable | typing.List[RdsDbClusterTags] = None,
  use_latest_restorable_time: bool | IResolvable = None,
  vpc_security_group_ids: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.allocatedStorage">allocated_storage</a></code> | <code>typing.Union[int, float]</code> | The amount of storage in gibibytes (GiB) to allocate to each DB instance in the Multi-AZ DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.associatedRoles">associated_roles</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRoles">RdsDbClusterAssociatedRoles</a>]</code> | Provides a list of the AWS Identity and Access Management (IAM) roles that are associated with the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.autoMinorVersionUpgrade">auto_minor_version_upgrade</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether minor engine upgrades are applied automatically to the DB cluster during the maintenance window. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.availabilityZones">availability_zones</a></code> | <code>typing.List[str]</code> | A list of Availability Zones (AZs) where instances in the DB cluster can be created. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.backtrackWindow">backtrack_window</a></code> | <code>typing.Union[int, float]</code> | The target backtrack window, in seconds. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.backupRetentionPeriod">backup_retention_period</a></code> | <code>typing.Union[int, float]</code> | The number of days for which automated backups are retained. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.clusterScalabilityType">cluster_scalability_type</a></code> | <code>str</code> | Specifies the scalability mode of the Aurora DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.copyTagsToSnapshot">copy_tags_to_snapshot</a></code> | <code>bool \| cdktn.IResolvable</code> | A value that indicates whether to copy all tags from the DB cluster to snapshots of the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.databaseInsightsMode">database_insights_mode</a></code> | <code>str</code> | The mode of Database Insights to enable for the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.databaseName">database_name</a></code> | <code>str</code> | The name of your database. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.dbClusterIdentifier">db_cluster_identifier</a></code> | <code>str</code> | The DB cluster identifier. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.dbClusterInstanceClass">db_cluster_instance_class</a></code> | <code>str</code> | The compute and memory capacity of each DB instance in the Multi-AZ DB cluster, for example ``db.m6gd.xlarge``. Not all DB instance classes are available in all AWS-Regions, or for all database engines.  For the full list of DB instance classes and availability for your engine, see [DB instance class](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html) in the *Amazon RDS User Guide*.  This setting is required to create a Multi-AZ DB cluster.  Valid for Cluster Type: Multi-AZ DB clusters only. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.dbClusterParameterGroupName">db_cluster_parameter_group_name</a></code> | <code>str</code> | The name of the DB cluster parameter group to associate with this DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.dbInstanceParameterGroupName">db_instance_parameter_group_name</a></code> | <code>str</code> | The name of the DB parameter group to apply to all instances of the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.dbSubnetGroupName">db_subnet_group_name</a></code> | <code>str</code> | A DB subnet group that you want to associate with this DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.dbSystemId">db_system_id</a></code> | <code>str</code> | Reserved for future use. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.deleteAutomatedBackups">delete_automated_backups</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether to remove automated backups immediately after the DB cluster is deleted. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.deletionProtection">deletion_protection</a></code> | <code>bool \| cdktn.IResolvable</code> | A value that indicates whether the DB cluster has deletion protection enabled. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.domain">domain</a></code> | <code>str</code> | Indicates the directory ID of the Active Directory to create the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.domainIamRoleName">domain_iam_role_name</a></code> | <code>str</code> | Specifies the name of the IAM role to use when making API calls to the Directory Service. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.enableCloudwatchLogsExports">enable_cloudwatch_logs_exports</a></code> | <code>typing.List[str]</code> | The list of log types that need to be enabled for exporting to CloudWatch Logs. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.enableGlobalWriteForwarding">enable_global_write_forwarding</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether to enable this DB cluster to forward write operations to the primary cluster of a global cluster (Aurora global database). |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.enableHttpEndpoint">enable_http_endpoint</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether to enable the HTTP endpoint for the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.enableIamDatabaseAuthentication">enable_iam_database_authentication</a></code> | <code>bool \| cdktn.IResolvable</code> | A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.enableLocalWriteForwarding">enable_local_write_forwarding</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether read replicas can forward write operations to the writer DB instance in the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.engine">engine</a></code> | <code>str</code> | The name of the database engine to be used for this DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.engineLifecycleSupport">engine_lifecycle_support</a></code> | <code>str</code> | The life cycle type for this DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.engineMode">engine_mode</a></code> | <code>str</code> | The DB engine mode of the DB cluster, either ``provisioned`` or ``serverless``. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.engineVersion">engine_version</a></code> | <code>str</code> | The version number of the database engine to use. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.globalClusterIdentifier">global_cluster_identifier</a></code> | <code>str</code> | If you are configuring an Aurora global database cluster and want your Aurora DB cluster to be a secondary member in the global database cluster, specify the global cluster ID of the global database cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.iops">iops</a></code> | <code>typing.Union[int, float]</code> | The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for each DB instance in the Multi-AZ DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the AWS KMS key that is used to encrypt the database instances in the DB cluster, such as ``arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef``. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.manageMasterUserPassword">manage_master_user_password</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether to manage the master user password with AWS Secrets Manager. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.masterUserAuthenticationType">master_user_authentication_type</a></code> | <code>str</code> | Specifies the authentication type for the master user. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.masterUsername">master_username</a></code> | <code>str</code> | The name of the master user for the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.masterUserPassword">master_user_password</a></code> | <code>str</code> | The master password for the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.masterUserSecret">master_user_secret</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecret">RdsDbClusterMasterUserSecret</a></code> | The secret managed by RDS in AWS Secrets Manager for the master user password. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.monitoringInterval">monitoring_interval</a></code> | <code>typing.Union[int, float]</code> | The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.monitoringRoleArn">monitoring_role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) for the IAM role that permits RDS to send Enhanced Monitoring metrics to Amazon CloudWatch Logs. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.networkType">network_type</a></code> | <code>str</code> | The network type of the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.performanceInsightsEnabled">performance_insights_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether to turn on Performance Insights for the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.performanceInsightsKmsKeyId">performance_insights_kms_key_id</a></code> | <code>str</code> | The AWS KMS key identifier for encryption of Performance Insights data. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.performanceInsightsRetentionPeriod">performance_insights_retention_period</a></code> | <code>typing.Union[int, float]</code> | The number of days to retain Performance Insights data. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | The port number on which the DB instances in the DB cluster accept connections. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.preferredBackupWindow">preferred_backup_window</a></code> | <code>str</code> | The daily time range during which automated backups are created. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.preferredMaintenanceWindow">preferred_maintenance_window</a></code> | <code>str</code> | The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC). |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.publiclyAccessible">publicly_accessible</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the DB cluster is publicly accessible. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.replicationSourceIdentifier">replication_source_identifier</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the source DB instance or DB cluster if this DB cluster is created as a read replica. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.restoreToTime">restore_to_time</a></code> | <code>str</code> | The date and time to restore the DB cluster to. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.restoreType">restore_type</a></code> | <code>str</code> | The type of restore to be performed. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.scalingConfiguration">scaling_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration">RdsDbClusterScalingConfiguration</a></code> | The scaling configuration of an Aurora Serverless v1 DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.serverlessV2ScalingConfiguration">serverless_v2_scaling_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfiguration">RdsDbClusterServerlessV2ScalingConfiguration</a></code> | The scaling configuration of an Aurora Serverless V2 DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.snapshotIdentifier">snapshot_identifier</a></code> | <code>str</code> | The identifier for the DB snapshot or DB cluster snapshot to restore from. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.sourceDbClusterIdentifier">source_db_cluster_identifier</a></code> | <code>str</code> | When restoring a DB cluster to a point in time, the identifier of the source DB cluster from which to restore. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.sourceDbClusterResourceId">source_db_cluster_resource_id</a></code> | <code>str</code> | The resource ID of the source DB cluster from which to restore. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.sourceRegion">source_region</a></code> | <code>str</code> | The AWS Region which contains the source DB cluster when replicating a DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.storageEncrypted">storage_encrypted</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether the DB cluster is encrypted. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.storageType">storage_type</a></code> | <code>str</code> | The storage type to associate with the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTags">RdsDbClusterTags</a>]</code> | Tags to assign to the DB cluster.  Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.useLatestRestorableTime">use_latest_restorable_time</a></code> | <code>bool \| cdktn.IResolvable</code> | A value that indicates whether to restore the DB cluster to the latest restorable backup time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | A list of EC2 VPC security groups to associate with this DB cluster. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `allocated_storage`<sup>Optional</sup> <a name="allocated_storage" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.allocatedStorage"></a>

- *Type:* typing.Union[int, float]

The amount of storage in gibibytes (GiB) to allocate to each DB instance in the Multi-AZ DB cluster.

Valid for Cluster Type: Multi-AZ DB clusters only
This setting is required to create a Multi-AZ DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#allocated_storage RdsDbCluster#allocated_storage}

---

##### `associated_roles`<sup>Optional</sup> <a name="associated_roles" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.associatedRoles"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRoles">RdsDbClusterAssociatedRoles</a>]

Provides a list of the AWS Identity and Access Management (IAM) roles that are associated with the DB cluster.

IAM roles that are associated with a DB cluster grant permission for the DB cluster to access other Amazon Web Services on your behalf.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#associated_roles RdsDbCluster#associated_roles}

---

##### `auto_minor_version_upgrade`<sup>Optional</sup> <a name="auto_minor_version_upgrade" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.autoMinorVersionUpgrade"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether minor engine upgrades are applied automatically to the DB cluster during the maintenance window.

By default, minor engine upgrades are applied automatically.
Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB cluster.
For more information about automatic minor version upgrades, see [Automatically upgrading the minor engine version](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Upgrading.html#USER_UpgradeDBInstance.Upgrading.AutoMinorVersionUpgrades).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#auto_minor_version_upgrade RdsDbCluster#auto_minor_version_upgrade}

---

##### `availability_zones`<sup>Optional</sup> <a name="availability_zones" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.availabilityZones"></a>

- *Type:* typing.List[str]

A list of Availability Zones (AZs) where instances in the DB cluster can be created.

For information on AWS Regions and Availability Zones, see [Choosing the Regions and Availability Zones](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.RegionsAndAvailabilityZones.html) in the *Amazon Aurora User Guide*.
Valid for: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#availability_zones RdsDbCluster#availability_zones}

---

##### `backtrack_window`<sup>Optional</sup> <a name="backtrack_window" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.backtrackWindow"></a>

- *Type:* typing.Union[int, float]

The target backtrack window, in seconds.

To disable backtracking, set this value to `0`.
Valid for Cluster Type: Aurora MySQL DB clusters only
Default: `0`
Constraints:

* If specified, this value must be set to a number from 0 to 259,200 (72 hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#backtrack_window RdsDbCluster#backtrack_window}

---

##### `backup_retention_period`<sup>Optional</sup> <a name="backup_retention_period" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.backupRetentionPeriod"></a>

- *Type:* typing.Union[int, float]

The number of days for which automated backups are retained.

Default: 1
Constraints:

* Must be a value from 1 to 35

Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#backup_retention_period RdsDbCluster#backup_retention_period}

---

##### `cluster_scalability_type`<sup>Optional</sup> <a name="cluster_scalability_type" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.clusterScalabilityType"></a>

- *Type:* str

Specifies the scalability mode of the Aurora DB cluster.

When set to `limitless`, the cluster operates as an Aurora Limitless Database, allowing you to create a DB shard group for horizontal scaling (sharding) capabilities. When set to `standard` (the default), the cluster uses normal DB instance creation.
*Important:* Automated backup retention isn't supported with Aurora Limitless Database clusters. If you set this property to `limitless`, you cannot set `DeleteAutomatedBackups` to `false`. To create a backup, use manual snapshots instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#cluster_scalability_type RdsDbCluster#cluster_scalability_type}

---

##### `copy_tags_to_snapshot`<sup>Optional</sup> <a name="copy_tags_to_snapshot" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.copyTagsToSnapshot"></a>

- *Type:* bool | cdktn.IResolvable

A value that indicates whether to copy all tags from the DB cluster to snapshots of the DB cluster.

The default is not to copy them.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#copy_tags_to_snapshot RdsDbCluster#copy_tags_to_snapshot}

---

##### `database_insights_mode`<sup>Optional</sup> <a name="database_insights_mode" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.databaseInsightsMode"></a>

- *Type:* str

The mode of Database Insights to enable for the DB cluster.

If you set this value to `advanced`, you must also set the `PerformanceInsightsEnabled` parameter to `true` and the `PerformanceInsightsRetentionPeriod` parameter to 465.
Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#database_insights_mode RdsDbCluster#database_insights_mode}

---

##### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.databaseName"></a>

- *Type:* str

The name of your database.

If you don't provide a name, then Amazon RDS won't create a database in this DB cluster. For naming constraints, see [Naming Constraints](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_Limits.html#RDS_Limits.Constraints) in the *Amazon Aurora User Guide*.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#database_name RdsDbCluster#database_name}

---

##### `db_cluster_identifier`<sup>Optional</sup> <a name="db_cluster_identifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.dbClusterIdentifier"></a>

- *Type:* str

The DB cluster identifier.

This parameter is stored as a lowercase string.
Constraints:

* Must contain from 1 to 63 letters, numbers, or hyphens.
* First character must be a letter.
* Can't end with a hyphen or contain two consecutive hyphens.

Example: `my-cluster1`
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#db_cluster_identifier RdsDbCluster#db_cluster_identifier}

---

##### `db_cluster_instance_class`<sup>Optional</sup> <a name="db_cluster_instance_class" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.dbClusterInstanceClass"></a>

- *Type:* str

The compute and memory capacity of each DB instance in the Multi-AZ DB cluster, for example ``db.m6gd.xlarge``. Not all DB instance classes are available in all AWS-Regions, or for all database engines.  For the full list of DB instance classes and availability for your engine, see [DB instance class](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html) in the *Amazon RDS User Guide*.  This setting is required to create a Multi-AZ DB cluster.  Valid for Cluster Type: Multi-AZ DB clusters only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#db_cluster_instance_class RdsDbCluster#db_cluster_instance_class}

---

##### `db_cluster_parameter_group_name`<sup>Optional</sup> <a name="db_cluster_parameter_group_name" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.dbClusterParameterGroupName"></a>

- *Type:* str

The name of the DB cluster parameter group to associate with this DB cluster.

If you apply a parameter group to an existing DB cluster, then its DB instances might need to reboot. This can result in an outage while the DB instances are rebooting.
If you apply a change to parameter group associated with a stopped DB cluster, then the update stack waits until the DB cluster is started.
To list all of the available DB cluster parameter group names, use the following command:
`aws rds describe-db-cluster-parameter-groups --query "DBClusterParameterGroups[].DBClusterParameterGroupName" --output text`
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#db_cluster_parameter_group_name RdsDbCluster#db_cluster_parameter_group_name}

---

##### `db_instance_parameter_group_name`<sup>Optional</sup> <a name="db_instance_parameter_group_name" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.dbInstanceParameterGroupName"></a>

- *Type:* str

The name of the DB parameter group to apply to all instances of the DB cluster.

When you apply a parameter group using the `DBInstanceParameterGroupName` parameter, the DB cluster isn't rebooted automatically. Also, parameter changes are applied immediately rather than during the next maintenance window.
Valid for Cluster Type: Aurora DB clusters only
Default: The existing name setting
Constraints:

* The DB parameter group must be in the same DB parameter group family as this DB cluster.
* The `DBInstanceParameterGroupName` parameter is valid in combination with the `AllowMajorVersionUpgrade` parameter for a major version upgrade only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#db_instance_parameter_group_name RdsDbCluster#db_instance_parameter_group_name}

---

##### `db_subnet_group_name`<sup>Optional</sup> <a name="db_subnet_group_name" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.dbSubnetGroupName"></a>

- *Type:* str

A DB subnet group that you want to associate with this DB cluster.

If you are restoring a DB cluster to a point in time with `RestoreType` set to `copy-on-write`, and don't specify a DB subnet group name, then the DB cluster is restored with a default DB subnet group.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#db_subnet_group_name RdsDbCluster#db_subnet_group_name}

---

##### `db_system_id`<sup>Optional</sup> <a name="db_system_id" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.dbSystemId"></a>

- *Type:* str

Reserved for future use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#db_system_id RdsDbCluster#db_system_id}

---

##### `delete_automated_backups`<sup>Optional</sup> <a name="delete_automated_backups" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.deleteAutomatedBackups"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether to remove automated backups immediately after the DB cluster is deleted.

This parameter isn't case-sensitive. The default is to remove automated backups immediately after the DB cluster is deleted, unless the AWS Backup policy specifies a point-in-time restore rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#delete_automated_backups RdsDbCluster#delete_automated_backups}

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.deletionProtection"></a>

- *Type:* bool | cdktn.IResolvable

A value that indicates whether the DB cluster has deletion protection enabled.

The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#deletion_protection RdsDbCluster#deletion_protection}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.domain"></a>

- *Type:* str

Indicates the directory ID of the Active Directory to create the DB cluster.

For Amazon Aurora DB clusters, Amazon RDS can use Kerberos authentication to authenticate users that connect to the DB cluster.
For more information, see [Kerberos authentication](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/kerberos-authentication.html) in the *Amazon Aurora User Guide*.
Valid for: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#domain RdsDbCluster#domain}

---

##### `domain_iam_role_name`<sup>Optional</sup> <a name="domain_iam_role_name" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.domainIamRoleName"></a>

- *Type:* str

Specifies the name of the IAM role to use when making API calls to the Directory Service.

Valid for: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#domain_iam_role_name RdsDbCluster#domain_iam_role_name}

---

##### `enable_cloudwatch_logs_exports`<sup>Optional</sup> <a name="enable_cloudwatch_logs_exports" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.enableCloudwatchLogsExports"></a>

- *Type:* typing.List[str]

The list of log types that need to be enabled for exporting to CloudWatch Logs.

The values in the list depend on the DB engine being used. For more information, see [Publishing Database Logs to Amazon CloudWatch Logs](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch) in the *Amazon Aurora User Guide*.
*Aurora MySQL*
Valid values: `audit`, `error`, `general`, `slowquery`
*Aurora PostgreSQL*
Valid values: `postgresql`
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#enable_cloudwatch_logs_exports RdsDbCluster#enable_cloudwatch_logs_exports}

---

##### `enable_global_write_forwarding`<sup>Optional</sup> <a name="enable_global_write_forwarding" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.enableGlobalWriteForwarding"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether to enable this DB cluster to forward write operations to the primary cluster of a global cluster (Aurora global database).

By default, write operations are not allowed on Aurora DB clusters that are secondary clusters in an Aurora global database.
You can set this value only on Aurora DB clusters that are members of an Aurora global database. With this parameter enabled, a secondary cluster can forward writes to the current primary cluster, and the resulting changes are replicated back to this cluster. For the primary DB cluster of an Aurora global database, this value is used immediately if the primary is demoted by a global cluster API operation, but it does nothing until then.
Valid for Cluster Type: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#enable_global_write_forwarding RdsDbCluster#enable_global_write_forwarding}

---

##### `enable_http_endpoint`<sup>Optional</sup> <a name="enable_http_endpoint" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.enableHttpEndpoint"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether to enable the HTTP endpoint for the DB cluster.

By default, the HTTP endpoint isn't enabled.
When enabled, the HTTP endpoint provides a connectionless web service API (RDS Data API) for running SQL queries on the DB cluster. You can also query your database from inside the RDS console with the RDS query editor.
For more information, see [Using RDS Data API](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html) in the *Amazon Aurora User Guide*.
Valid for Cluster Type: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#enable_http_endpoint RdsDbCluster#enable_http_endpoint}

---

##### `enable_iam_database_authentication`<sup>Optional</sup> <a name="enable_iam_database_authentication" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.enableIamDatabaseAuthentication"></a>

- *Type:* bool | cdktn.IResolvable

A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts.

By default, mapping is disabled.
For more information, see [IAM Database Authentication](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html) in the *Amazon Aurora User Guide.*
Valid for: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#enable_iam_database_authentication RdsDbCluster#enable_iam_database_authentication}

---

##### `enable_local_write_forwarding`<sup>Optional</sup> <a name="enable_local_write_forwarding" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.enableLocalWriteForwarding"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether read replicas can forward write operations to the writer DB instance in the DB cluster.

By default, write operations aren't allowed on reader DB instances.
Valid for: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#enable_local_write_forwarding RdsDbCluster#enable_local_write_forwarding}

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.engine"></a>

- *Type:* str

The name of the database engine to be used for this DB cluster.

Valid Values:

* `aurora-mysql`
* `aurora-postgresql`
* `mysql`
* `postgres`

Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#engine RdsDbCluster#engine}

---

##### `engine_lifecycle_support`<sup>Optional</sup> <a name="engine_lifecycle_support" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.engineLifecycleSupport"></a>

- *Type:* str

The life cycle type for this DB cluster.

By default, this value is set to `open-source-rds-extended-support`, which enrolls your DB cluster into Amazon RDS Extended Support. At the end of standard support, you can avoid charges for Extended Support by setting the value to `open-source-rds-extended-support-disabled`. In this case, creating the DB cluster will fail if the DB major version is past its end of standard support date.
You can use this setting to enroll your DB cluster into Amazon RDS Extended Support. With RDS Extended Support, you can run the selected major engine version on your DB cluster past the end of standard support for that engine version. For more information, see the following sections:

* Amazon Aurora - [Amazon RDS Extended Support with Amazon Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/extended-support.html) in the *Amazon Aurora User Guide*
* Amazon RDS - [Amazon RDS Extended Support with Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/extended-support.html) in the *Amazon RDS User Guide*

Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
Valid Values: `open-source-rds-extended-support | open-source-rds-extended-support-disabled`
Default: `open-source-rds-extended-support`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#engine_lifecycle_support RdsDbCluster#engine_lifecycle_support}

---

##### `engine_mode`<sup>Optional</sup> <a name="engine_mode" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.engineMode"></a>

- *Type:* str

The DB engine mode of the DB cluster, either ``provisioned`` or ``serverless``.

The `serverless` engine mode only applies for Aurora Serverless v1 DB clusters. Aurora Serverless v2 DB clusters use the `provisioned` engine mode.
For information about limitations and requirements for Serverless DB clusters, see the following sections in the *Amazon Aurora User Guide*:

* [Limitations of Aurora Serverless v1](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html#aurora-serverless.limitations)
* [Requirements for Aurora Serverless v2](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.requirements.html)

Valid for Cluster Type: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#engine_mode RdsDbCluster#engine_mode}

---

##### `engine_version`<sup>Optional</sup> <a name="engine_version" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.engineVersion"></a>

- *Type:* str

The version number of the database engine to use.

Don't use this property if your DB cluster is a member of a global database cluster. Instead, specify the `EngineVersion` property on the [AWS::RDS::GlobalCluster](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html) resource. Major version upgrades aren't supported for individual members of a global cluster. Use `ModifyGlobalCluster` to upgrade all members of the global cluster.
To list all of the available engine versions for Aurora MySQL version 2 (5.7-compatible) and version 3 (8.0-compatible), use the following command:
`aws rds describe-db-engine-versions --engine aurora-mysql --query "DBEngineVersions[].EngineVersion"`
You can supply either `5.7` or `8.0` to use the default engine version for Aurora MySQL version 2 or version 3, respectively.
To list all of the available engine versions for Aurora PostgreSQL, use the following command:
`aws rds describe-db-engine-versions --engine aurora-postgresql --query "DBEngineVersions[].EngineVersion"`
To list all of the available engine versions for RDS for MySQL, use the following command:
`aws rds describe-db-engine-versions --engine mysql --query "DBEngineVersions[].EngineVersion"`
To list all of the available engine versions for RDS for PostgreSQL, use the following command:
`aws rds describe-db-engine-versions --engine postgres --query "DBEngineVersions[].EngineVersion"`
*Aurora MySQL*
For information, see [Database engine updates for Amazon Aurora MySQL](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Updates.html) in the *Amazon Aurora User Guide*.
*Aurora PostgreSQL*
For information, see [Amazon Aurora PostgreSQL releases and engine versions](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraPostgreSQL.Updates.20180305.html) in the *Amazon Aurora User Guide*.
*MySQL*
For information, see [Amazon RDS for MySQL](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_MySQL.html#MySQL.Concepts.VersionMgmt) in the *Amazon RDS User Guide*.
*PostgreSQL*
For information, see [Amazon RDS for PostgreSQL](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_PostgreSQL.html#PostgreSQL.Concepts) in the *Amazon RDS User Guide*.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#engine_version RdsDbCluster#engine_version}

---

##### `global_cluster_identifier`<sup>Optional</sup> <a name="global_cluster_identifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.globalClusterIdentifier"></a>

- *Type:* str

If you are configuring an Aurora global database cluster and want your Aurora DB cluster to be a secondary member in the global database cluster, specify the global cluster ID of the global database cluster.

To define the primary database cluster of the global cluster, use the [AWS::RDS::GlobalCluster](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html) resource.
If you aren't configuring a global database cluster, don't specify this property.
To remove the DB cluster from a global database cluster, specify an empty value for the `GlobalClusterIdentifier` property.
For information about Aurora global databases, see [Working with Amazon Aurora Global Databases](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html) in the *Amazon Aurora User Guide*.
Valid for: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#global_cluster_identifier RdsDbCluster#global_cluster_identifier}

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.iops"></a>

- *Type:* typing.Union[int, float]

The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for each DB instance in the Multi-AZ DB cluster.

For information about valid IOPS values, see [Provisioned IOPS storage](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#USER_PIOPS) in the *Amazon RDS User Guide*.
This setting is required to create a Multi-AZ DB cluster.
Valid for Cluster Type: Multi-AZ DB clusters only
Constraints:

* Must be a multiple between .5 and 50 of the storage amount for the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#iops RdsDbCluster#iops}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the AWS KMS key that is used to encrypt the database instances in the DB cluster, such as ``arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef``.

If you enable the `StorageEncrypted` property but don't specify this property, the default KMS key is used. If you specify this property, you must set the `StorageEncrypted` property to `true`.
If you specify the `SnapshotIdentifier` property, the `StorageEncrypted` property value is inherited from the snapshot, and if the DB cluster is encrypted, the specified `KmsKeyId` property is used.
If you create a read replica of an encrypted DB cluster in another AWS Region, make sure to set `KmsKeyId` to a KMS key identifier that is valid in the destination AWS Region. This KMS key is used to encrypt the read replica in that AWS Region.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#kms_key_id RdsDbCluster#kms_key_id}

---

##### `manage_master_user_password`<sup>Optional</sup> <a name="manage_master_user_password" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.manageMasterUserPassword"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether to manage the master user password with AWS Secrets Manager.

For more information, see [Password management with Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the *Amazon RDS User Guide* and [Password management with Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-secrets-manager.html) in the *Amazon Aurora User Guide.*
Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
Constraints:

* Can't manage the master user password with AWS Secrets Manager if `MasterUserPassword` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#manage_master_user_password RdsDbCluster#manage_master_user_password}

---

##### `master_user_authentication_type`<sup>Optional</sup> <a name="master_user_authentication_type" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.masterUserAuthenticationType"></a>

- *Type:* str

Specifies the authentication type for the master user.

With IAM master user authentication, you can configure the master DB user with IAM database authentication when you create a DB cluster.
You can specify one of the following values:

* `password` - Use standard database authentication with a password.
* `iam-db-auth` - Use IAM database authentication for the master user.

Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
This option is only valid for RDS for MySQL, RDS for MariaDB, RDS for PostgreSQL, Aurora MySQL, and Aurora PostgreSQL engines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#master_user_authentication_type RdsDbCluster#master_user_authentication_type}

---

##### `master_username`<sup>Optional</sup> <a name="master_username" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.masterUsername"></a>

- *Type:* str

The name of the master user for the DB cluster.

If you specify the `SourceDBClusterIdentifier`, `SnapshotIdentifier`, or `GlobalClusterIdentifier` property, don't specify this property. The value is inherited from the source DB cluster, the snapshot, or the primary DB cluster for the global database cluster, respectively.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#master_username RdsDbCluster#master_username}

---

##### `master_user_password`<sup>Optional</sup> <a name="master_user_password" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.masterUserPassword"></a>

- *Type:* str

The master password for the DB instance.

If you specify the `SourceDBClusterIdentifier`, `SnapshotIdentifier`, or `GlobalClusterIdentifier` property, don't specify this property. The value is inherited from the source DB cluster, the snapshot, or the primary DB cluster for the global database cluster, respectively.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#master_user_password RdsDbCluster#master_user_password}

---

##### `master_user_secret`<sup>Optional</sup> <a name="master_user_secret" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.masterUserSecret"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecret">RdsDbClusterMasterUserSecret</a>

The secret managed by RDS in AWS Secrets Manager for the master user password.

When you restore a DB cluster from a snapshot, Amazon RDS generates a new secret instead of reusing the secret specified in the `SecretArn` property. This ensures that the restored DB cluster is securely managed with a dedicated secret. To maintain consistent integration with your application, you might need to update resource configurations to reference the newly created secret.
For more information, see [Password management with Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the *Amazon RDS User Guide* and [Password management with Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-secrets-manager.html) in the *Amazon Aurora User Guide.*

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#master_user_secret RdsDbCluster#master_user_secret}

---

##### `monitoring_interval`<sup>Optional</sup> <a name="monitoring_interval" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.monitoringInterval"></a>

- *Type:* typing.Union[int, float]

The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB cluster.

To turn off collecting Enhanced Monitoring metrics, specify `0`.
If `MonitoringRoleArn` is specified, also set `MonitoringInterval` to a value other than `0`.
Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
Valid Values: `0 | 1 | 5 | 10 | 15 | 30 | 60`
Default: `0`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#monitoring_interval RdsDbCluster#monitoring_interval}

---

##### `monitoring_role_arn`<sup>Optional</sup> <a name="monitoring_role_arn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.monitoringRoleArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) for the IAM role that permits RDS to send Enhanced Monitoring metrics to Amazon CloudWatch Logs.

An example is `arn:aws:iam:123456789012:role/emaccess`. For information on creating a monitoring role, see [Setting up and enabling Enhanced Monitoring](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.OS.html#USER_Monitoring.OS.Enabling) in the *Amazon RDS User Guide*.
If `MonitoringInterval` is set to a value other than `0`, supply a `MonitoringRoleArn` value.
Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#monitoring_role_arn RdsDbCluster#monitoring_role_arn}

---

##### `network_type`<sup>Optional</sup> <a name="network_type" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.networkType"></a>

- *Type:* str

The network type of the DB cluster.

Valid values:

* `IPV4`
* `DUAL`

The network type is determined by the `DBSubnetGroup` specified for the DB cluster. A `DBSubnetGroup` can support only the IPv4 protocol or the IPv4 and IPv6 protocols (`DUAL`).
For more information, see [Working with a DB instance in a VPC](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html) in the *Amazon Aurora User Guide.*
Valid for: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#network_type RdsDbCluster#network_type}

---

##### `performance_insights_enabled`<sup>Optional</sup> <a name="performance_insights_enabled" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.performanceInsightsEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether to turn on Performance Insights for the DB cluster.

For more information, see [Using Amazon Performance Insights](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html) in the *Amazon RDS User Guide*.
Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#performance_insights_enabled RdsDbCluster#performance_insights_enabled}

---

##### `performance_insights_kms_key_id`<sup>Optional</sup> <a name="performance_insights_kms_key_id" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.performanceInsightsKmsKeyId"></a>

- *Type:* str

The AWS KMS key identifier for encryption of Performance Insights data.

The AWS KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
If you don't specify a value for `PerformanceInsightsKMSKeyId`, then Amazon RDS uses your default KMS key. There is a default KMS key for your AWS-account. Your AWS-account has a different default KMS key for each AWS-Region.
Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#performance_insights_kms_key_id RdsDbCluster#performance_insights_kms_key_id}

---

##### `performance_insights_retention_period`<sup>Optional</sup> <a name="performance_insights_retention_period" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.performanceInsightsRetentionPeriod"></a>

- *Type:* typing.Union[int, float]

The number of days to retain Performance Insights data.

When creating a DB cluster without enabling Performance Insights, you can't specify the parameter `PerformanceInsightsRetentionPeriod`.
Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
Valid Values:

* `7`
* *month* * 31, where *month* is a number of months from 1-23. Examples: `93` (3 months * 31), `341` (11 months * 31), `589` (19 months * 31)
* `731`

Default: `7` days
If you specify a retention period that isn't valid, such as `94`, Amazon RDS issues an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#performance_insights_retention_period RdsDbCluster#performance_insights_retention_period}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

The port number on which the DB instances in the DB cluster accept connections.

Default:

* RDS for MySQL and Aurora MySQL - `3306`
* RDS for PostgreSQL and Aurora PostgreSQL - `5432`

The `No interruption` on update behavior only applies to DB clusters. If you are updating a DB instance, see [Port](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-database-instance.html#cfn-rds-dbinstance-port) for the AWS::RDS::DBInstance resource.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#port RdsDbCluster#port}

---

##### `preferred_backup_window`<sup>Optional</sup> <a name="preferred_backup_window" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.preferredBackupWindow"></a>

- *Type:* str

The daily time range during which automated backups are created.

For more information, see [Backup Window](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Backups.html#Aurora.Managing.Backups.BackupWindow) in the *Amazon Aurora User Guide.*
Constraints:

* Must be in the format `hh24:mi-hh24:mi`.
* Must be in Universal Coordinated Time (UTC).
* Must not conflict with the preferred maintenance window.
* Must be at least 30 minutes.

Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#preferred_backup_window RdsDbCluster#preferred_backup_window}

---

##### `preferred_maintenance_window`<sup>Optional</sup> <a name="preferred_maintenance_window" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.preferredMaintenanceWindow"></a>

- *Type:* str

The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).

Format: `ddd:hh24:mi-ddd:hh24:mi`
The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week. To see the time blocks available, see [Maintaining an Amazon Aurora DB cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow.Aurora) in the *Amazon Aurora User Guide.*
Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.
Constraints: Minimum 30-minute window.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#preferred_maintenance_window RdsDbCluster#preferred_maintenance_window}

---

##### `publicly_accessible`<sup>Optional</sup> <a name="publicly_accessible" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.publiclyAccessible"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether the DB cluster is publicly accessible.

Valid for Cluster Type: Multi-AZ DB clusters only
When the DB cluster is publicly accessible and you connect from outside of the DB cluster's virtual private cloud (VPC), its domain name system (DNS) endpoint resolves to the public IP address. When you connect from within the same VPC as the DB cluster, the endpoint resolves to the private IP address. Access to the DB cluster is controlled by its security group settings.
When the DB cluster isn't publicly accessible, it is an internal DB cluster with a DNS name that resolves to a private IP address.
The default behavior when `PubliclyAccessible` is not specified depends on whether a `DBSubnetGroup` is specified.
If `DBSubnetGroup` isn't specified, `PubliclyAccessible` defaults to `true`.
If `DBSubnetGroup` is specified, `PubliclyAccessible` defaults to `false` unless the value of `DBSubnetGroup` is `default`, in which case `PubliclyAccessible` defaults to `true`.
If `PubliclyAccessible` is true and the VPC that the `DBSubnetGroup` is in doesn't have an internet gateway attached to it, Amazon RDS returns an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#publicly_accessible RdsDbCluster#publicly_accessible}

---

##### `replication_source_identifier`<sup>Optional</sup> <a name="replication_source_identifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.replicationSourceIdentifier"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the source DB instance or DB cluster if this DB cluster is created as a read replica.

Valid for: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#replication_source_identifier RdsDbCluster#replication_source_identifier}

---

##### `restore_to_time`<sup>Optional</sup> <a name="restore_to_time" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.restoreToTime"></a>

- *Type:* str

The date and time to restore the DB cluster to.

Valid Values: Value must be a time in Universal Coordinated Time (UTC) format
Constraints:

* Must be before the latest restorable time for the DB instance
* Must be specified if `UseLatestRestorableTime` parameter isn't provided
* Can't be specified if the `UseLatestRestorableTime` parameter is enabled
* Can't be specified if the `RestoreType` parameter is `copy-on-write`

This property must be used with `SourceDBClusterIdentifier` property. The resulting cluster will have the identifier that matches the value of the `DBclusterIdentifier` property.
Example: `2015-03-07T23:45:00Z`
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#restore_to_time RdsDbCluster#restore_to_time}

---

##### `restore_type`<sup>Optional</sup> <a name="restore_type" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.restoreType"></a>

- *Type:* str

The type of restore to be performed.

You can specify one of the following values:

* `full-copy` - The new DB cluster is restored as a full copy of the source DB cluster.
* `copy-on-write` - The new DB cluster is restored as a clone of the source DB cluster.

If you don't specify a `RestoreType` value, then the new DB cluster is restored as a full copy of the source DB cluster.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#restore_type RdsDbCluster#restore_type}

---

##### `scaling_configuration`<sup>Optional</sup> <a name="scaling_configuration" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.scalingConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration">RdsDbClusterScalingConfiguration</a>

The scaling configuration of an Aurora Serverless v1 DB cluster.

This property is only supported for Aurora Serverless v1. For Aurora Serverless v2, Use the `ServerlessV2ScalingConfiguration` property.
Valid for: Aurora Serverless v1 DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#scaling_configuration RdsDbCluster#scaling_configuration}

---

##### `serverless_v2_scaling_configuration`<sup>Optional</sup> <a name="serverless_v2_scaling_configuration" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.serverlessV2ScalingConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfiguration">RdsDbClusterServerlessV2ScalingConfiguration</a>

The scaling configuration of an Aurora Serverless V2 DB cluster.

This property is only supported for Aurora Serverless v2. For Aurora Serverless v1, Use the `ScalingConfiguration` property.
Valid for: Aurora Serverless v2 DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#serverless_v2_scaling_configuration RdsDbCluster#serverless_v2_scaling_configuration}

---

##### `snapshot_identifier`<sup>Optional</sup> <a name="snapshot_identifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.snapshotIdentifier"></a>

- *Type:* str

The identifier for the DB snapshot or DB cluster snapshot to restore from.

You can use either the name or the Amazon Resource Name (ARN) to specify a DB cluster snapshot. However, you can use only the ARN to specify a DB snapshot.
After you restore a DB cluster with a `SnapshotIdentifier` property, you must specify the same `SnapshotIdentifier` property for any future updates to the DB cluster. When you specify this property for an update, the DB cluster is not restored from the snapshot again, and the data in the database is not changed. However, if you don't specify the `SnapshotIdentifier` property, an empty DB cluster is created, and the original DB cluster is deleted. If you specify a property that is different from the previous snapshot restore property, a new DB cluster is restored from the specified `SnapshotIdentifier` property, and the original DB cluster is deleted.
If you specify the `SnapshotIdentifier` property to restore a DB cluster (as opposed to specifying it for DB cluster updates), then don't specify the following properties:

* `GlobalClusterIdentifier`
* `MasterUsername`
* `MasterUserPassword`
* `ReplicationSourceIdentifier`
* `RestoreType`
* `SourceDBClusterIdentifier`
* `SourceRegion`
* `StorageEncrypted` (for an encrypted snapshot)
* `UseLatestRestorableTime`

Constraints:

* Must match the identifier of an existing Snapshot.

Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#snapshot_identifier RdsDbCluster#snapshot_identifier}

---

##### `source_db_cluster_identifier`<sup>Optional</sup> <a name="source_db_cluster_identifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.sourceDbClusterIdentifier"></a>

- *Type:* str

When restoring a DB cluster to a point in time, the identifier of the source DB cluster from which to restore.

Constraints:

* Must match the identifier of an existing DBCluster.
* Cannot be specified if `SourceDbClusterResourceId` is specified. You must specify either `SourceDBClusterIdentifier` or `SourceDbClusterResourceId`, but not both.

Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#source_db_cluster_identifier RdsDbCluster#source_db_cluster_identifier}

---

##### `source_db_cluster_resource_id`<sup>Optional</sup> <a name="source_db_cluster_resource_id" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.sourceDbClusterResourceId"></a>

- *Type:* str

The resource ID of the source DB cluster from which to restore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#source_db_cluster_resource_id RdsDbCluster#source_db_cluster_resource_id}

---

##### `source_region`<sup>Optional</sup> <a name="source_region" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.sourceRegion"></a>

- *Type:* str

The AWS Region which contains the source DB cluster when replicating a DB cluster.

For example, `us-east-1`.
Valid for: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#source_region RdsDbCluster#source_region}

---

##### `storage_encrypted`<sup>Optional</sup> <a name="storage_encrypted" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.storageEncrypted"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether the DB cluster is encrypted.

If you specify the `KmsKeyId` property, then you must enable encryption.
If you specify the `SourceDBClusterIdentifier` property, don't specify this property. The value is inherited from the source DB cluster, and if the DB cluster is encrypted, the specified `KmsKeyId` property is used.
If you specify the `SnapshotIdentifier` and the specified snapshot is encrypted, don't specify this property. The value is inherited from the snapshot, and the specified `KmsKeyId` property is used.
If you specify the `SnapshotIdentifier` and the specified snapshot isn't encrypted, you can use this property to specify that the restored DB cluster is encrypted. Specify the `KmsKeyId` property for the KMS key to use for encryption. If you don't want the restored DB cluster to be encrypted, then don't set this property or set it to `false`.
If you specify both the `StorageEncrypted` and `SnapshotIdentifier` properties without specifying the `KmsKeyId` property, then the restored DB cluster inherits the encryption settings from the DB snapshot that provide.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#storage_encrypted RdsDbCluster#storage_encrypted}

---

##### `storage_type`<sup>Optional</sup> <a name="storage_type" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.storageType"></a>

- *Type:* str

The storage type to associate with the DB cluster.

For information on storage types for Aurora DB clusters, see [Storage configurations for Amazon Aurora DB clusters](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Overview.StorageReliability.html#aurora-storage-type). For information on storage types for Multi-AZ DB clusters, see [Settings for creating Multi-AZ DB clusters](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/create-multi-az-db-cluster.html#create-multi-az-db-cluster-settings).
This setting is required to create a Multi-AZ DB cluster.
When specified for a Multi-AZ DB cluster, a value for the `Iops` parameter is required.
Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
Valid Values:

* Aurora DB clusters - `aurora | aurora-iopt1`
* Multi-AZ DB clusters - `io1 | io2 | gp3`

Default:

* Aurora DB clusters - `aurora`
* Multi-AZ DB clusters - `io1`

When you create an Aurora DB cluster with the storage type set to `aurora-iopt1`, the storage type is returned in the response. The storage type isn't returned when you set it to `aurora`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#storage_type RdsDbCluster#storage_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTags">RdsDbClusterTags</a>]

Tags to assign to the DB cluster.  Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#tags RdsDbCluster#tags}

---

##### `use_latest_restorable_time`<sup>Optional</sup> <a name="use_latest_restorable_time" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.useLatestRestorableTime"></a>

- *Type:* bool | cdktn.IResolvable

A value that indicates whether to restore the DB cluster to the latest restorable backup time.

By default, the DB cluster is not restored to the latest restorable backup time.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#use_latest_restorable_time RdsDbCluster#use_latest_restorable_time}

---

##### `vpc_security_group_ids`<sup>Optional</sup> <a name="vpc_security_group_ids" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.vpcSecurityGroupIds"></a>

- *Type:* typing.List[str]

A list of EC2 VPC security groups to associate with this DB cluster.

If you plan to update the resource, don't specify VPC security groups in a shared VPC.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#vpc_security_group_ids RdsDbCluster#vpc_security_group_ids}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putAssociatedRoles">put_associated_roles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putMasterUserSecret">put_master_user_secret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putScalingConfiguration">put_scaling_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putServerlessV2ScalingConfiguration">put_serverless_v2_scaling_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetAllocatedStorage">reset_allocated_storage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetAssociatedRoles">reset_associated_roles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetAutoMinorVersionUpgrade">reset_auto_minor_version_upgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetAvailabilityZones">reset_availability_zones</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetBacktrackWindow">reset_backtrack_window</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetBackupRetentionPeriod">reset_backup_retention_period</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetClusterScalabilityType">reset_cluster_scalability_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetCopyTagsToSnapshot">reset_copy_tags_to_snapshot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDatabaseInsightsMode">reset_database_insights_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDatabaseName">reset_database_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDbClusterIdentifier">reset_db_cluster_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDbClusterInstanceClass">reset_db_cluster_instance_class</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDbClusterParameterGroupName">reset_db_cluster_parameter_group_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDbInstanceParameterGroupName">reset_db_instance_parameter_group_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDbSubnetGroupName">reset_db_subnet_group_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDbSystemId">reset_db_system_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDeleteAutomatedBackups">reset_delete_automated_backups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDeletionProtection">reset_deletion_protection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDomain">reset_domain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDomainIamRoleName">reset_domain_iam_role_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEnableCloudwatchLogsExports">reset_enable_cloudwatch_logs_exports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEnableGlobalWriteForwarding">reset_enable_global_write_forwarding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEnableHttpEndpoint">reset_enable_http_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEnableIamDatabaseAuthentication">reset_enable_iam_database_authentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEnableLocalWriteForwarding">reset_enable_local_write_forwarding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEngine">reset_engine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEngineLifecycleSupport">reset_engine_lifecycle_support</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEngineMode">reset_engine_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEngineVersion">reset_engine_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetGlobalClusterIdentifier">reset_global_cluster_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetIops">reset_iops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetManageMasterUserPassword">reset_manage_master_user_password</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetMasterUserAuthenticationType">reset_master_user_authentication_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetMasterUsername">reset_master_username</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetMasterUserPassword">reset_master_user_password</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetMasterUserSecret">reset_master_user_secret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetMonitoringInterval">reset_monitoring_interval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetMonitoringRoleArn">reset_monitoring_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetNetworkType">reset_network_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetPerformanceInsightsEnabled">reset_performance_insights_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetPerformanceInsightsKmsKeyId">reset_performance_insights_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetPerformanceInsightsRetentionPeriod">reset_performance_insights_retention_period</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetPreferredBackupWindow">reset_preferred_backup_window</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetPreferredMaintenanceWindow">reset_preferred_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetPubliclyAccessible">reset_publicly_accessible</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetReplicationSourceIdentifier">reset_replication_source_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetRestoreToTime">reset_restore_to_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetRestoreType">reset_restore_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetScalingConfiguration">reset_scaling_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetServerlessV2ScalingConfiguration">reset_serverless_v2_scaling_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetSnapshotIdentifier">reset_snapshot_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetSourceDbClusterIdentifier">reset_source_db_cluster_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetSourceDbClusterResourceId">reset_source_db_cluster_resource_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetSourceRegion">reset_source_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetStorageEncrypted">reset_storage_encrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetStorageType">reset_storage_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetUseLatestRestorableTime">reset_use_latest_restorable_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetVpcSecurityGroupIds">reset_vpc_security_group_ids</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_associated_roles` <a name="put_associated_roles" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putAssociatedRoles"></a>

```python
def put_associated_roles(
  value: IResolvable | typing.List[RdsDbClusterAssociatedRoles]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putAssociatedRoles.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRoles">RdsDbClusterAssociatedRoles</a>]

---

##### `put_master_user_secret` <a name="put_master_user_secret" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putMasterUserSecret"></a>

```python
def put_master_user_secret(
  kms_key_id: str = None
) -> None
```

###### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putMasterUserSecret.parameter.kmsKeyId"></a>

- *Type:* str

The AWS KMS key identifier that is used to encrypt the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#kms_key_id RdsDbCluster#kms_key_id}

---

##### `put_scaling_configuration` <a name="put_scaling_configuration" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putScalingConfiguration"></a>

```python
def put_scaling_configuration(
  auto_pause: bool | IResolvable = None,
  max_capacity: typing.Union[int, float] = None,
  min_capacity: typing.Union[int, float] = None,
  seconds_before_timeout: typing.Union[int, float] = None,
  seconds_until_auto_pause: typing.Union[int, float] = None,
  timeout_action: str = None
) -> None
```

###### `auto_pause`<sup>Optional</sup> <a name="auto_pause" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putScalingConfiguration.parameter.autoPause"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether to allow or disallow automatic pause for an Aurora DB cluster in ``serverless`` DB engine mode.

A DB cluster can be paused only when it's idle (it has no connections).
If a DB cluster is paused for more than seven days, the DB cluster might be backed up with a snapshot. In this case, the DB cluster is restored when there is a request to connect to it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#auto_pause RdsDbCluster#auto_pause}

---

###### `max_capacity`<sup>Optional</sup> <a name="max_capacity" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putScalingConfiguration.parameter.maxCapacity"></a>

- *Type:* typing.Union[int, float]

The maximum capacity for an Aurora DB cluster in ``serverless`` DB engine mode.

For Aurora MySQL, valid capacity values are `1`, `2`, `4`, `8`, `16`, `32`, `64`, `128`, and `256`.
For Aurora PostgreSQL, valid capacity values are `2`, `4`, `8`, `16`, `32`, `64`, `192`, and `384`.
The maximum capacity must be greater than or equal to the minimum capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#max_capacity RdsDbCluster#max_capacity}

---

###### `min_capacity`<sup>Optional</sup> <a name="min_capacity" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putScalingConfiguration.parameter.minCapacity"></a>

- *Type:* typing.Union[int, float]

The minimum capacity for an Aurora DB cluster in ``serverless`` DB engine mode.

For Aurora MySQL, valid capacity values are `1`, `2`, `4`, `8`, `16`, `32`, `64`, `128`, and `256`.
For Aurora PostgreSQL, valid capacity values are `2`, `4`, `8`, `16`, `32`, `64`, `192`, and `384`.
The minimum capacity must be less than or equal to the maximum capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#min_capacity RdsDbCluster#min_capacity}

---

###### `seconds_before_timeout`<sup>Optional</sup> <a name="seconds_before_timeout" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putScalingConfiguration.parameter.secondsBeforeTimeout"></a>

- *Type:* typing.Union[int, float]

The amount of time, in seconds, that Aurora Serverless v1 tries to find a scaling point to perform seamless scaling before enforcing the timeout action.

The default is 300.
Specify a value between 60 and 600 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#seconds_before_timeout RdsDbCluster#seconds_before_timeout}

---

###### `seconds_until_auto_pause`<sup>Optional</sup> <a name="seconds_until_auto_pause" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putScalingConfiguration.parameter.secondsUntilAutoPause"></a>

- *Type:* typing.Union[int, float]

The time, in seconds, before an Aurora DB cluster in ``serverless`` mode is paused.

Specify a value between 300 and 86,400 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#seconds_until_auto_pause RdsDbCluster#seconds_until_auto_pause}

---

###### `timeout_action`<sup>Optional</sup> <a name="timeout_action" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putScalingConfiguration.parameter.timeoutAction"></a>

- *Type:* str

The action to take when the timeout is reached, either ``ForceApplyCapacityChange`` or ``RollbackCapacityChange``.

`ForceApplyCapacityChange` sets the capacity to the specified value as soon as possible.
`RollbackCapacityChange`, the default, ignores the capacity change if a scaling point isn't found in the timeout period.
If you specify `ForceApplyCapacityChange`, connections that prevent Aurora Serverless v1 from finding a scaling point might be dropped.
For more information, see [Autoscaling for Aurora Serverless v1](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.how-it-works.html#aurora-serverless.how-it-works.auto-scaling) in the *Amazon Aurora User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#timeout_action RdsDbCluster#timeout_action}

---

##### `put_serverless_v2_scaling_configuration` <a name="put_serverless_v2_scaling_configuration" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putServerlessV2ScalingConfiguration"></a>

```python
def put_serverless_v2_scaling_configuration(
  max_capacity: typing.Union[int, float] = None,
  min_capacity: typing.Union[int, float] = None,
  seconds_until_auto_pause: typing.Union[int, float] = None
) -> None
```

###### `max_capacity`<sup>Optional</sup> <a name="max_capacity" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putServerlessV2ScalingConfiguration.parameter.maxCapacity"></a>

- *Type:* typing.Union[int, float]

The maximum number of Aurora capacity units (ACUs) for a DB instance in an Aurora Serverless v2 cluster.

You can specify ACU values in half-step increments, such as 40, 40.5, 41, and so on. The largest value that you can use is 128.
The maximum capacity must be higher than 0.5 ACUs. For more information, see [Choosing the maximum Aurora Serverless v2 capacity setting for a cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.setting-capacity.html#aurora-serverless-v2.max_capacity_considerations) in the *Amazon Aurora User Guide*.
Aurora automatically sets certain parameters for Aurora Serverless V2 DB instances to values that depend on the maximum ACU value in the capacity range. When you update the maximum capacity value, the `ParameterApplyStatus` value for the DB instance changes to `pending-reboot`. You can update the parameter values by rebooting the DB instance after changing the capacity range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#max_capacity RdsDbCluster#max_capacity}

---

###### `min_capacity`<sup>Optional</sup> <a name="min_capacity" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putServerlessV2ScalingConfiguration.parameter.minCapacity"></a>

- *Type:* typing.Union[int, float]

The minimum number of Aurora capacity units (ACUs) for a DB instance in an Aurora Serverless v2 cluster.

You can specify ACU values in half-step increments, such as 8, 8.5, 9, and so on. For Aurora versions that support the Aurora Serverless v2 auto-pause feature, the smallest value that you can use is 0. For versions that don't support Aurora Serverless v2 auto-pause, the smallest value that you can use is 0.5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#min_capacity RdsDbCluster#min_capacity}

---

###### `seconds_until_auto_pause`<sup>Optional</sup> <a name="seconds_until_auto_pause" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putServerlessV2ScalingConfiguration.parameter.secondsUntilAutoPause"></a>

- *Type:* typing.Union[int, float]

Specifies the number of seconds an Aurora Serverless v2 DB instance must be idle before Aurora attempts to automatically pause it.

Specify a value between 300 seconds (five minutes) and 86,400 seconds (one day). The default is 300 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#seconds_until_auto_pause RdsDbCluster#seconds_until_auto_pause}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[RdsDbClusterTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTags">RdsDbClusterTags</a>]

---

##### `reset_allocated_storage` <a name="reset_allocated_storage" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetAllocatedStorage"></a>

```python
def reset_allocated_storage() -> None
```

##### `reset_associated_roles` <a name="reset_associated_roles" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetAssociatedRoles"></a>

```python
def reset_associated_roles() -> None
```

##### `reset_auto_minor_version_upgrade` <a name="reset_auto_minor_version_upgrade" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetAutoMinorVersionUpgrade"></a>

```python
def reset_auto_minor_version_upgrade() -> None
```

##### `reset_availability_zones` <a name="reset_availability_zones" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetAvailabilityZones"></a>

```python
def reset_availability_zones() -> None
```

##### `reset_backtrack_window` <a name="reset_backtrack_window" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetBacktrackWindow"></a>

```python
def reset_backtrack_window() -> None
```

##### `reset_backup_retention_period` <a name="reset_backup_retention_period" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetBackupRetentionPeriod"></a>

```python
def reset_backup_retention_period() -> None
```

##### `reset_cluster_scalability_type` <a name="reset_cluster_scalability_type" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetClusterScalabilityType"></a>

```python
def reset_cluster_scalability_type() -> None
```

##### `reset_copy_tags_to_snapshot` <a name="reset_copy_tags_to_snapshot" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetCopyTagsToSnapshot"></a>

```python
def reset_copy_tags_to_snapshot() -> None
```

##### `reset_database_insights_mode` <a name="reset_database_insights_mode" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDatabaseInsightsMode"></a>

```python
def reset_database_insights_mode() -> None
```

##### `reset_database_name` <a name="reset_database_name" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDatabaseName"></a>

```python
def reset_database_name() -> None
```

##### `reset_db_cluster_identifier` <a name="reset_db_cluster_identifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDbClusterIdentifier"></a>

```python
def reset_db_cluster_identifier() -> None
```

##### `reset_db_cluster_instance_class` <a name="reset_db_cluster_instance_class" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDbClusterInstanceClass"></a>

```python
def reset_db_cluster_instance_class() -> None
```

##### `reset_db_cluster_parameter_group_name` <a name="reset_db_cluster_parameter_group_name" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDbClusterParameterGroupName"></a>

```python
def reset_db_cluster_parameter_group_name() -> None
```

##### `reset_db_instance_parameter_group_name` <a name="reset_db_instance_parameter_group_name" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDbInstanceParameterGroupName"></a>

```python
def reset_db_instance_parameter_group_name() -> None
```

##### `reset_db_subnet_group_name` <a name="reset_db_subnet_group_name" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDbSubnetGroupName"></a>

```python
def reset_db_subnet_group_name() -> None
```

##### `reset_db_system_id` <a name="reset_db_system_id" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDbSystemId"></a>

```python
def reset_db_system_id() -> None
```

##### `reset_delete_automated_backups` <a name="reset_delete_automated_backups" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDeleteAutomatedBackups"></a>

```python
def reset_delete_automated_backups() -> None
```

##### `reset_deletion_protection` <a name="reset_deletion_protection" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDeletionProtection"></a>

```python
def reset_deletion_protection() -> None
```

##### `reset_domain` <a name="reset_domain" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDomain"></a>

```python
def reset_domain() -> None
```

##### `reset_domain_iam_role_name` <a name="reset_domain_iam_role_name" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDomainIamRoleName"></a>

```python
def reset_domain_iam_role_name() -> None
```

##### `reset_enable_cloudwatch_logs_exports` <a name="reset_enable_cloudwatch_logs_exports" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEnableCloudwatchLogsExports"></a>

```python
def reset_enable_cloudwatch_logs_exports() -> None
```

##### `reset_enable_global_write_forwarding` <a name="reset_enable_global_write_forwarding" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEnableGlobalWriteForwarding"></a>

```python
def reset_enable_global_write_forwarding() -> None
```

##### `reset_enable_http_endpoint` <a name="reset_enable_http_endpoint" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEnableHttpEndpoint"></a>

```python
def reset_enable_http_endpoint() -> None
```

##### `reset_enable_iam_database_authentication` <a name="reset_enable_iam_database_authentication" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEnableIamDatabaseAuthentication"></a>

```python
def reset_enable_iam_database_authentication() -> None
```

##### `reset_enable_local_write_forwarding` <a name="reset_enable_local_write_forwarding" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEnableLocalWriteForwarding"></a>

```python
def reset_enable_local_write_forwarding() -> None
```

##### `reset_engine` <a name="reset_engine" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEngine"></a>

```python
def reset_engine() -> None
```

##### `reset_engine_lifecycle_support` <a name="reset_engine_lifecycle_support" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEngineLifecycleSupport"></a>

```python
def reset_engine_lifecycle_support() -> None
```

##### `reset_engine_mode` <a name="reset_engine_mode" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEngineMode"></a>

```python
def reset_engine_mode() -> None
```

##### `reset_engine_version` <a name="reset_engine_version" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEngineVersion"></a>

```python
def reset_engine_version() -> None
```

##### `reset_global_cluster_identifier` <a name="reset_global_cluster_identifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetGlobalClusterIdentifier"></a>

```python
def reset_global_cluster_identifier() -> None
```

##### `reset_iops` <a name="reset_iops" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetIops"></a>

```python
def reset_iops() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_manage_master_user_password` <a name="reset_manage_master_user_password" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetManageMasterUserPassword"></a>

```python
def reset_manage_master_user_password() -> None
```

##### `reset_master_user_authentication_type` <a name="reset_master_user_authentication_type" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetMasterUserAuthenticationType"></a>

```python
def reset_master_user_authentication_type() -> None
```

##### `reset_master_username` <a name="reset_master_username" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetMasterUsername"></a>

```python
def reset_master_username() -> None
```

##### `reset_master_user_password` <a name="reset_master_user_password" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetMasterUserPassword"></a>

```python
def reset_master_user_password() -> None
```

##### `reset_master_user_secret` <a name="reset_master_user_secret" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetMasterUserSecret"></a>

```python
def reset_master_user_secret() -> None
```

##### `reset_monitoring_interval` <a name="reset_monitoring_interval" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetMonitoringInterval"></a>

```python
def reset_monitoring_interval() -> None
```

##### `reset_monitoring_role_arn` <a name="reset_monitoring_role_arn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetMonitoringRoleArn"></a>

```python
def reset_monitoring_role_arn() -> None
```

##### `reset_network_type` <a name="reset_network_type" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetNetworkType"></a>

```python
def reset_network_type() -> None
```

##### `reset_performance_insights_enabled` <a name="reset_performance_insights_enabled" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetPerformanceInsightsEnabled"></a>

```python
def reset_performance_insights_enabled() -> None
```

##### `reset_performance_insights_kms_key_id` <a name="reset_performance_insights_kms_key_id" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetPerformanceInsightsKmsKeyId"></a>

```python
def reset_performance_insights_kms_key_id() -> None
```

##### `reset_performance_insights_retention_period` <a name="reset_performance_insights_retention_period" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetPerformanceInsightsRetentionPeriod"></a>

```python
def reset_performance_insights_retention_period() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_preferred_backup_window` <a name="reset_preferred_backup_window" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetPreferredBackupWindow"></a>

```python
def reset_preferred_backup_window() -> None
```

##### `reset_preferred_maintenance_window` <a name="reset_preferred_maintenance_window" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetPreferredMaintenanceWindow"></a>

```python
def reset_preferred_maintenance_window() -> None
```

##### `reset_publicly_accessible` <a name="reset_publicly_accessible" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetPubliclyAccessible"></a>

```python
def reset_publicly_accessible() -> None
```

##### `reset_replication_source_identifier` <a name="reset_replication_source_identifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetReplicationSourceIdentifier"></a>

```python
def reset_replication_source_identifier() -> None
```

##### `reset_restore_to_time` <a name="reset_restore_to_time" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetRestoreToTime"></a>

```python
def reset_restore_to_time() -> None
```

##### `reset_restore_type` <a name="reset_restore_type" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetRestoreType"></a>

```python
def reset_restore_type() -> None
```

##### `reset_scaling_configuration` <a name="reset_scaling_configuration" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetScalingConfiguration"></a>

```python
def reset_scaling_configuration() -> None
```

##### `reset_serverless_v2_scaling_configuration` <a name="reset_serverless_v2_scaling_configuration" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetServerlessV2ScalingConfiguration"></a>

```python
def reset_serverless_v2_scaling_configuration() -> None
```

##### `reset_snapshot_identifier` <a name="reset_snapshot_identifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetSnapshotIdentifier"></a>

```python
def reset_snapshot_identifier() -> None
```

##### `reset_source_db_cluster_identifier` <a name="reset_source_db_cluster_identifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetSourceDbClusterIdentifier"></a>

```python
def reset_source_db_cluster_identifier() -> None
```

##### `reset_source_db_cluster_resource_id` <a name="reset_source_db_cluster_resource_id" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetSourceDbClusterResourceId"></a>

```python
def reset_source_db_cluster_resource_id() -> None
```

##### `reset_source_region` <a name="reset_source_region" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetSourceRegion"></a>

```python
def reset_source_region() -> None
```

##### `reset_storage_encrypted` <a name="reset_storage_encrypted" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetStorageEncrypted"></a>

```python
def reset_storage_encrypted() -> None
```

##### `reset_storage_type` <a name="reset_storage_type" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetStorageType"></a>

```python
def reset_storage_type() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_use_latest_restorable_time` <a name="reset_use_latest_restorable_time" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetUseLatestRestorableTime"></a>

```python
def reset_use_latest_restorable_time() -> None
```

##### `reset_vpc_security_group_ids` <a name="reset_vpc_security_group_ids" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetVpcSecurityGroupIds"></a>

```python
def reset_vpc_security_group_ids() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a RdsDbCluster resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.isConstruct"></a>

```python
from cdktn_provider_awscc import rds_db_cluster

rdsDbCluster.RdsDbCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.isTerraformElement"></a>

```python
from cdktn_provider_awscc import rds_db_cluster

rdsDbCluster.RdsDbCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.isTerraformResource"></a>

```python
from cdktn_provider_awscc import rds_db_cluster

rdsDbCluster.RdsDbCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import rds_db_cluster

rdsDbCluster.RdsDbCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a RdsDbCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RdsDbCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RdsDbCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RdsDbCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.associatedRoles">associated_roles</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList">RdsDbClusterAssociatedRolesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterArn">db_cluster_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterResourceId">db_cluster_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.endpoint">endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference">RdsDbClusterEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUserSecret">master_user_secret</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference">RdsDbClusterMasterUserSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.readEndpoint">read_endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference">RdsDbClusterReadEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.scalingConfiguration">scaling_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference">RdsDbClusterScalingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.serverlessV2ScalingConfiguration">serverless_v2_scaling_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference">RdsDbClusterServerlessV2ScalingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.storageEncryptionType">storage_encryption_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.storageThroughput">storage_throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList">RdsDbClusterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.allocatedStorageInput">allocated_storage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.associatedRolesInput">associated_roles_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRoles">RdsDbClusterAssociatedRoles</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.autoMinorVersionUpgradeInput">auto_minor_version_upgrade_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.availabilityZonesInput">availability_zones_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.backtrackWindowInput">backtrack_window_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.backupRetentionPeriodInput">backup_retention_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.clusterScalabilityTypeInput">cluster_scalability_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.copyTagsToSnapshotInput">copy_tags_to_snapshot_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.databaseInsightsModeInput">database_insights_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterIdentifierInput">db_cluster_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterInstanceClassInput">db_cluster_instance_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterParameterGroupNameInput">db_cluster_parameter_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbInstanceParameterGroupNameInput">db_instance_parameter_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbSubnetGroupNameInput">db_subnet_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbSystemIdInput">db_system_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.deleteAutomatedBackupsInput">delete_automated_backups_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.deletionProtectionInput">deletion_protection_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.domainIamRoleNameInput">domain_iam_role_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableCloudwatchLogsExportsInput">enable_cloudwatch_logs_exports_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableGlobalWriteForwardingInput">enable_global_write_forwarding_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableHttpEndpointInput">enable_http_endpoint_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableIamDatabaseAuthenticationInput">enable_iam_database_authentication_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableLocalWriteForwardingInput">enable_local_write_forwarding_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engineInput">engine_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engineLifecycleSupportInput">engine_lifecycle_support_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engineModeInput">engine_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engineVersionInput">engine_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.globalClusterIdentifierInput">global_cluster_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.iopsInput">iops_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.manageMasterUserPasswordInput">manage_master_user_password_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUserAuthenticationTypeInput">master_user_authentication_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUsernameInput">master_username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUserPasswordInput">master_user_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUserSecretInput">master_user_secret_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecret">RdsDbClusterMasterUserSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.monitoringIntervalInput">monitoring_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.monitoringRoleArnInput">monitoring_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.networkTypeInput">network_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.performanceInsightsEnabledInput">performance_insights_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.performanceInsightsKmsKeyIdInput">performance_insights_kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.performanceInsightsRetentionPeriodInput">performance_insights_retention_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.preferredBackupWindowInput">preferred_backup_window_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.preferredMaintenanceWindowInput">preferred_maintenance_window_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.publiclyAccessibleInput">publicly_accessible_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.replicationSourceIdentifierInput">replication_source_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.restoreToTimeInput">restore_to_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.restoreTypeInput">restore_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.scalingConfigurationInput">scaling_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration">RdsDbClusterScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.serverlessV2ScalingConfigurationInput">serverless_v2_scaling_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfiguration">RdsDbClusterServerlessV2ScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.snapshotIdentifierInput">snapshot_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.sourceDbClusterIdentifierInput">source_db_cluster_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.sourceDbClusterResourceIdInput">source_db_cluster_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.sourceRegionInput">source_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.storageEncryptedInput">storage_encrypted_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.storageTypeInput">storage_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTags">RdsDbClusterTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.useLatestRestorableTimeInput">use_latest_restorable_time_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.vpcSecurityGroupIdsInput">vpc_security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.allocatedStorage">allocated_storage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.autoMinorVersionUpgrade">auto_minor_version_upgrade</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.availabilityZones">availability_zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.backtrackWindow">backtrack_window</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.backupRetentionPeriod">backup_retention_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.clusterScalabilityType">cluster_scalability_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.copyTagsToSnapshot">copy_tags_to_snapshot</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.databaseInsightsMode">database_insights_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterIdentifier">db_cluster_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterInstanceClass">db_cluster_instance_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterParameterGroupName">db_cluster_parameter_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbInstanceParameterGroupName">db_instance_parameter_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbSubnetGroupName">db_subnet_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbSystemId">db_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.deleteAutomatedBackups">delete_automated_backups</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.deletionProtection">deletion_protection</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.domainIamRoleName">domain_iam_role_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableCloudwatchLogsExports">enable_cloudwatch_logs_exports</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableGlobalWriteForwarding">enable_global_write_forwarding</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableHttpEndpoint">enable_http_endpoint</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableIamDatabaseAuthentication">enable_iam_database_authentication</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableLocalWriteForwarding">enable_local_write_forwarding</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engine">engine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engineLifecycleSupport">engine_lifecycle_support</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engineMode">engine_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engineVersion">engine_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.globalClusterIdentifier">global_cluster_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.manageMasterUserPassword">manage_master_user_password</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUserAuthenticationType">master_user_authentication_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUsername">master_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUserPassword">master_user_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.monitoringInterval">monitoring_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.monitoringRoleArn">monitoring_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.networkType">network_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.performanceInsightsEnabled">performance_insights_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.performanceInsightsKmsKeyId">performance_insights_kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.performanceInsightsRetentionPeriod">performance_insights_retention_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.preferredBackupWindow">preferred_backup_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.preferredMaintenanceWindow">preferred_maintenance_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.publiclyAccessible">publicly_accessible</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.replicationSourceIdentifier">replication_source_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.restoreToTime">restore_to_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.restoreType">restore_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.snapshotIdentifier">snapshot_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.sourceDbClusterIdentifier">source_db_cluster_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.sourceDbClusterResourceId">source_db_cluster_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.sourceRegion">source_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.storageEncrypted">storage_encrypted</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.storageType">storage_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.useLatestRestorableTime">use_latest_restorable_time</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `associated_roles`<sup>Required</sup> <a name="associated_roles" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.associatedRoles"></a>

```python
associated_roles: RdsDbClusterAssociatedRolesList
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList">RdsDbClusterAssociatedRolesList</a>

---

##### `db_cluster_arn`<sup>Required</sup> <a name="db_cluster_arn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterArn"></a>

```python
db_cluster_arn: str
```

- *Type:* str

---

##### `db_cluster_resource_id`<sup>Required</sup> <a name="db_cluster_resource_id" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterResourceId"></a>

```python
db_cluster_resource_id: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.endpoint"></a>

```python
endpoint: RdsDbClusterEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference">RdsDbClusterEndpointOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `master_user_secret`<sup>Required</sup> <a name="master_user_secret" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUserSecret"></a>

```python
master_user_secret: RdsDbClusterMasterUserSecretOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference">RdsDbClusterMasterUserSecretOutputReference</a>

---

##### `read_endpoint`<sup>Required</sup> <a name="read_endpoint" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.readEndpoint"></a>

```python
read_endpoint: RdsDbClusterReadEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference">RdsDbClusterReadEndpointOutputReference</a>

---

##### `scaling_configuration`<sup>Required</sup> <a name="scaling_configuration" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.scalingConfiguration"></a>

```python
scaling_configuration: RdsDbClusterScalingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference">RdsDbClusterScalingConfigurationOutputReference</a>

---

##### `serverless_v2_scaling_configuration`<sup>Required</sup> <a name="serverless_v2_scaling_configuration" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.serverlessV2ScalingConfiguration"></a>

```python
serverless_v2_scaling_configuration: RdsDbClusterServerlessV2ScalingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference">RdsDbClusterServerlessV2ScalingConfigurationOutputReference</a>

---

##### `storage_encryption_type`<sup>Required</sup> <a name="storage_encryption_type" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.storageEncryptionType"></a>

```python
storage_encryption_type: str
```

- *Type:* str

---

##### `storage_throughput`<sup>Required</sup> <a name="storage_throughput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.storageThroughput"></a>

```python
storage_throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.tags"></a>

```python
tags: RdsDbClusterTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList">RdsDbClusterTagsList</a>

---

##### `allocated_storage_input`<sup>Optional</sup> <a name="allocated_storage_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.allocatedStorageInput"></a>

```python
allocated_storage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `associated_roles_input`<sup>Optional</sup> <a name="associated_roles_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.associatedRolesInput"></a>

```python
associated_roles_input: IResolvable | typing.List[RdsDbClusterAssociatedRoles]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRoles">RdsDbClusterAssociatedRoles</a>]

---

##### `auto_minor_version_upgrade_input`<sup>Optional</sup> <a name="auto_minor_version_upgrade_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.autoMinorVersionUpgradeInput"></a>

```python
auto_minor_version_upgrade_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `availability_zones_input`<sup>Optional</sup> <a name="availability_zones_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.availabilityZonesInput"></a>

```python
availability_zones_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `backtrack_window_input`<sup>Optional</sup> <a name="backtrack_window_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.backtrackWindowInput"></a>

```python
backtrack_window_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backup_retention_period_input`<sup>Optional</sup> <a name="backup_retention_period_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.backupRetentionPeriodInput"></a>

```python
backup_retention_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cluster_scalability_type_input`<sup>Optional</sup> <a name="cluster_scalability_type_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.clusterScalabilityTypeInput"></a>

```python
cluster_scalability_type_input: str
```

- *Type:* str

---

##### `copy_tags_to_snapshot_input`<sup>Optional</sup> <a name="copy_tags_to_snapshot_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.copyTagsToSnapshotInput"></a>

```python
copy_tags_to_snapshot_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `database_insights_mode_input`<sup>Optional</sup> <a name="database_insights_mode_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.databaseInsightsModeInput"></a>

```python
database_insights_mode_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `db_cluster_identifier_input`<sup>Optional</sup> <a name="db_cluster_identifier_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterIdentifierInput"></a>

```python
db_cluster_identifier_input: str
```

- *Type:* str

---

##### `db_cluster_instance_class_input`<sup>Optional</sup> <a name="db_cluster_instance_class_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterInstanceClassInput"></a>

```python
db_cluster_instance_class_input: str
```

- *Type:* str

---

##### `db_cluster_parameter_group_name_input`<sup>Optional</sup> <a name="db_cluster_parameter_group_name_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterParameterGroupNameInput"></a>

```python
db_cluster_parameter_group_name_input: str
```

- *Type:* str

---

##### `db_instance_parameter_group_name_input`<sup>Optional</sup> <a name="db_instance_parameter_group_name_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbInstanceParameterGroupNameInput"></a>

```python
db_instance_parameter_group_name_input: str
```

- *Type:* str

---

##### `db_subnet_group_name_input`<sup>Optional</sup> <a name="db_subnet_group_name_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbSubnetGroupNameInput"></a>

```python
db_subnet_group_name_input: str
```

- *Type:* str

---

##### `db_system_id_input`<sup>Optional</sup> <a name="db_system_id_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbSystemIdInput"></a>

```python
db_system_id_input: str
```

- *Type:* str

---

##### `delete_automated_backups_input`<sup>Optional</sup> <a name="delete_automated_backups_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.deleteAutomatedBackupsInput"></a>

```python
delete_automated_backups_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `deletion_protection_input`<sup>Optional</sup> <a name="deletion_protection_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.deletionProtectionInput"></a>

```python
deletion_protection_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `domain_iam_role_name_input`<sup>Optional</sup> <a name="domain_iam_role_name_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.domainIamRoleNameInput"></a>

```python
domain_iam_role_name_input: str
```

- *Type:* str

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `enable_cloudwatch_logs_exports_input`<sup>Optional</sup> <a name="enable_cloudwatch_logs_exports_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableCloudwatchLogsExportsInput"></a>

```python
enable_cloudwatch_logs_exports_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enable_global_write_forwarding_input`<sup>Optional</sup> <a name="enable_global_write_forwarding_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableGlobalWriteForwardingInput"></a>

```python
enable_global_write_forwarding_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_http_endpoint_input`<sup>Optional</sup> <a name="enable_http_endpoint_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableHttpEndpointInput"></a>

```python
enable_http_endpoint_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_iam_database_authentication_input`<sup>Optional</sup> <a name="enable_iam_database_authentication_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableIamDatabaseAuthenticationInput"></a>

```python
enable_iam_database_authentication_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_local_write_forwarding_input`<sup>Optional</sup> <a name="enable_local_write_forwarding_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableLocalWriteForwardingInput"></a>

```python
enable_local_write_forwarding_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `engine_input`<sup>Optional</sup> <a name="engine_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engineInput"></a>

```python
engine_input: str
```

- *Type:* str

---

##### `engine_lifecycle_support_input`<sup>Optional</sup> <a name="engine_lifecycle_support_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engineLifecycleSupportInput"></a>

```python
engine_lifecycle_support_input: str
```

- *Type:* str

---

##### `engine_mode_input`<sup>Optional</sup> <a name="engine_mode_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engineModeInput"></a>

```python
engine_mode_input: str
```

- *Type:* str

---

##### `engine_version_input`<sup>Optional</sup> <a name="engine_version_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engineVersionInput"></a>

```python
engine_version_input: str
```

- *Type:* str

---

##### `global_cluster_identifier_input`<sup>Optional</sup> <a name="global_cluster_identifier_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.globalClusterIdentifierInput"></a>

```python
global_cluster_identifier_input: str
```

- *Type:* str

---

##### `iops_input`<sup>Optional</sup> <a name="iops_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.iopsInput"></a>

```python
iops_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `manage_master_user_password_input`<sup>Optional</sup> <a name="manage_master_user_password_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.manageMasterUserPasswordInput"></a>

```python
manage_master_user_password_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `master_user_authentication_type_input`<sup>Optional</sup> <a name="master_user_authentication_type_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUserAuthenticationTypeInput"></a>

```python
master_user_authentication_type_input: str
```

- *Type:* str

---

##### `master_username_input`<sup>Optional</sup> <a name="master_username_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUsernameInput"></a>

```python
master_username_input: str
```

- *Type:* str

---

##### `master_user_password_input`<sup>Optional</sup> <a name="master_user_password_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUserPasswordInput"></a>

```python
master_user_password_input: str
```

- *Type:* str

---

##### `master_user_secret_input`<sup>Optional</sup> <a name="master_user_secret_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUserSecretInput"></a>

```python
master_user_secret_input: IResolvable | RdsDbClusterMasterUserSecret
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecret">RdsDbClusterMasterUserSecret</a>

---

##### `monitoring_interval_input`<sup>Optional</sup> <a name="monitoring_interval_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.monitoringIntervalInput"></a>

```python
monitoring_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `monitoring_role_arn_input`<sup>Optional</sup> <a name="monitoring_role_arn_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.monitoringRoleArnInput"></a>

```python
monitoring_role_arn_input: str
```

- *Type:* str

---

##### `network_type_input`<sup>Optional</sup> <a name="network_type_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.networkTypeInput"></a>

```python
network_type_input: str
```

- *Type:* str

---

##### `performance_insights_enabled_input`<sup>Optional</sup> <a name="performance_insights_enabled_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.performanceInsightsEnabledInput"></a>

```python
performance_insights_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `performance_insights_kms_key_id_input`<sup>Optional</sup> <a name="performance_insights_kms_key_id_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.performanceInsightsKmsKeyIdInput"></a>

```python
performance_insights_kms_key_id_input: str
```

- *Type:* str

---

##### `performance_insights_retention_period_input`<sup>Optional</sup> <a name="performance_insights_retention_period_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.performanceInsightsRetentionPeriodInput"></a>

```python
performance_insights_retention_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `preferred_backup_window_input`<sup>Optional</sup> <a name="preferred_backup_window_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.preferredBackupWindowInput"></a>

```python
preferred_backup_window_input: str
```

- *Type:* str

---

##### `preferred_maintenance_window_input`<sup>Optional</sup> <a name="preferred_maintenance_window_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.preferredMaintenanceWindowInput"></a>

```python
preferred_maintenance_window_input: str
```

- *Type:* str

---

##### `publicly_accessible_input`<sup>Optional</sup> <a name="publicly_accessible_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.publiclyAccessibleInput"></a>

```python
publicly_accessible_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `replication_source_identifier_input`<sup>Optional</sup> <a name="replication_source_identifier_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.replicationSourceIdentifierInput"></a>

```python
replication_source_identifier_input: str
```

- *Type:* str

---

##### `restore_to_time_input`<sup>Optional</sup> <a name="restore_to_time_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.restoreToTimeInput"></a>

```python
restore_to_time_input: str
```

- *Type:* str

---

##### `restore_type_input`<sup>Optional</sup> <a name="restore_type_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.restoreTypeInput"></a>

```python
restore_type_input: str
```

- *Type:* str

---

##### `scaling_configuration_input`<sup>Optional</sup> <a name="scaling_configuration_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.scalingConfigurationInput"></a>

```python
scaling_configuration_input: IResolvable | RdsDbClusterScalingConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration">RdsDbClusterScalingConfiguration</a>

---

##### `serverless_v2_scaling_configuration_input`<sup>Optional</sup> <a name="serverless_v2_scaling_configuration_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.serverlessV2ScalingConfigurationInput"></a>

```python
serverless_v2_scaling_configuration_input: IResolvable | RdsDbClusterServerlessV2ScalingConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfiguration">RdsDbClusterServerlessV2ScalingConfiguration</a>

---

##### `snapshot_identifier_input`<sup>Optional</sup> <a name="snapshot_identifier_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.snapshotIdentifierInput"></a>

```python
snapshot_identifier_input: str
```

- *Type:* str

---

##### `source_db_cluster_identifier_input`<sup>Optional</sup> <a name="source_db_cluster_identifier_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.sourceDbClusterIdentifierInput"></a>

```python
source_db_cluster_identifier_input: str
```

- *Type:* str

---

##### `source_db_cluster_resource_id_input`<sup>Optional</sup> <a name="source_db_cluster_resource_id_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.sourceDbClusterResourceIdInput"></a>

```python
source_db_cluster_resource_id_input: str
```

- *Type:* str

---

##### `source_region_input`<sup>Optional</sup> <a name="source_region_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.sourceRegionInput"></a>

```python
source_region_input: str
```

- *Type:* str

---

##### `storage_encrypted_input`<sup>Optional</sup> <a name="storage_encrypted_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.storageEncryptedInput"></a>

```python
storage_encrypted_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `storage_type_input`<sup>Optional</sup> <a name="storage_type_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.storageTypeInput"></a>

```python
storage_type_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[RdsDbClusterTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTags">RdsDbClusterTags</a>]

---

##### `use_latest_restorable_time_input`<sup>Optional</sup> <a name="use_latest_restorable_time_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.useLatestRestorableTimeInput"></a>

```python
use_latest_restorable_time_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `vpc_security_group_ids_input`<sup>Optional</sup> <a name="vpc_security_group_ids_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.vpcSecurityGroupIdsInput"></a>

```python
vpc_security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allocated_storage`<sup>Required</sup> <a name="allocated_storage" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.allocatedStorage"></a>

```python
allocated_storage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `auto_minor_version_upgrade`<sup>Required</sup> <a name="auto_minor_version_upgrade" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.autoMinorVersionUpgrade"></a>

```python
auto_minor_version_upgrade: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `availability_zones`<sup>Required</sup> <a name="availability_zones" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.availabilityZones"></a>

```python
availability_zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `backtrack_window`<sup>Required</sup> <a name="backtrack_window" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.backtrackWindow"></a>

```python
backtrack_window: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backup_retention_period`<sup>Required</sup> <a name="backup_retention_period" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.backupRetentionPeriod"></a>

```python
backup_retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cluster_scalability_type`<sup>Required</sup> <a name="cluster_scalability_type" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.clusterScalabilityType"></a>

```python
cluster_scalability_type: str
```

- *Type:* str

---

##### `copy_tags_to_snapshot`<sup>Required</sup> <a name="copy_tags_to_snapshot" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.copyTagsToSnapshot"></a>

```python
copy_tags_to_snapshot: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `database_insights_mode`<sup>Required</sup> <a name="database_insights_mode" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.databaseInsightsMode"></a>

```python
database_insights_mode: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `db_cluster_identifier`<sup>Required</sup> <a name="db_cluster_identifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterIdentifier"></a>

```python
db_cluster_identifier: str
```

- *Type:* str

---

##### `db_cluster_instance_class`<sup>Required</sup> <a name="db_cluster_instance_class" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterInstanceClass"></a>

```python
db_cluster_instance_class: str
```

- *Type:* str

---

##### `db_cluster_parameter_group_name`<sup>Required</sup> <a name="db_cluster_parameter_group_name" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterParameterGroupName"></a>

```python
db_cluster_parameter_group_name: str
```

- *Type:* str

---

##### `db_instance_parameter_group_name`<sup>Required</sup> <a name="db_instance_parameter_group_name" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbInstanceParameterGroupName"></a>

```python
db_instance_parameter_group_name: str
```

- *Type:* str

---

##### `db_subnet_group_name`<sup>Required</sup> <a name="db_subnet_group_name" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbSubnetGroupName"></a>

```python
db_subnet_group_name: str
```

- *Type:* str

---

##### `db_system_id`<sup>Required</sup> <a name="db_system_id" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbSystemId"></a>

```python
db_system_id: str
```

- *Type:* str

---

##### `delete_automated_backups`<sup>Required</sup> <a name="delete_automated_backups" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.deleteAutomatedBackups"></a>

```python
delete_automated_backups: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `deletion_protection`<sup>Required</sup> <a name="deletion_protection" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.deletionProtection"></a>

```python
deletion_protection: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `domain_iam_role_name`<sup>Required</sup> <a name="domain_iam_role_name" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.domainIamRoleName"></a>

```python
domain_iam_role_name: str
```

- *Type:* str

---

##### `enable_cloudwatch_logs_exports`<sup>Required</sup> <a name="enable_cloudwatch_logs_exports" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableCloudwatchLogsExports"></a>

```python
enable_cloudwatch_logs_exports: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enable_global_write_forwarding`<sup>Required</sup> <a name="enable_global_write_forwarding" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableGlobalWriteForwarding"></a>

```python
enable_global_write_forwarding: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_http_endpoint`<sup>Required</sup> <a name="enable_http_endpoint" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableHttpEndpoint"></a>

```python
enable_http_endpoint: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_iam_database_authentication`<sup>Required</sup> <a name="enable_iam_database_authentication" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableIamDatabaseAuthentication"></a>

```python
enable_iam_database_authentication: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_local_write_forwarding`<sup>Required</sup> <a name="enable_local_write_forwarding" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableLocalWriteForwarding"></a>

```python
enable_local_write_forwarding: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engine"></a>

```python
engine: str
```

- *Type:* str

---

##### `engine_lifecycle_support`<sup>Required</sup> <a name="engine_lifecycle_support" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engineLifecycleSupport"></a>

```python
engine_lifecycle_support: str
```

- *Type:* str

---

##### `engine_mode`<sup>Required</sup> <a name="engine_mode" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engineMode"></a>

```python
engine_mode: str
```

- *Type:* str

---

##### `engine_version`<sup>Required</sup> <a name="engine_version" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

---

##### `global_cluster_identifier`<sup>Required</sup> <a name="global_cluster_identifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.globalClusterIdentifier"></a>

```python
global_cluster_identifier: str
```

- *Type:* str

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `manage_master_user_password`<sup>Required</sup> <a name="manage_master_user_password" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.manageMasterUserPassword"></a>

```python
manage_master_user_password: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `master_user_authentication_type`<sup>Required</sup> <a name="master_user_authentication_type" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUserAuthenticationType"></a>

```python
master_user_authentication_type: str
```

- *Type:* str

---

##### `master_username`<sup>Required</sup> <a name="master_username" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUsername"></a>

```python
master_username: str
```

- *Type:* str

---

##### `master_user_password`<sup>Required</sup> <a name="master_user_password" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUserPassword"></a>

```python
master_user_password: str
```

- *Type:* str

---

##### `monitoring_interval`<sup>Required</sup> <a name="monitoring_interval" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.monitoringInterval"></a>

```python
monitoring_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `monitoring_role_arn`<sup>Required</sup> <a name="monitoring_role_arn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.monitoringRoleArn"></a>

```python
monitoring_role_arn: str
```

- *Type:* str

---

##### `network_type`<sup>Required</sup> <a name="network_type" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.networkType"></a>

```python
network_type: str
```

- *Type:* str

---

##### `performance_insights_enabled`<sup>Required</sup> <a name="performance_insights_enabled" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.performanceInsightsEnabled"></a>

```python
performance_insights_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `performance_insights_kms_key_id`<sup>Required</sup> <a name="performance_insights_kms_key_id" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.performanceInsightsKmsKeyId"></a>

```python
performance_insights_kms_key_id: str
```

- *Type:* str

---

##### `performance_insights_retention_period`<sup>Required</sup> <a name="performance_insights_retention_period" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.performanceInsightsRetentionPeriod"></a>

```python
performance_insights_retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `preferred_backup_window`<sup>Required</sup> <a name="preferred_backup_window" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.preferredBackupWindow"></a>

```python
preferred_backup_window: str
```

- *Type:* str

---

##### `preferred_maintenance_window`<sup>Required</sup> <a name="preferred_maintenance_window" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.preferredMaintenanceWindow"></a>

```python
preferred_maintenance_window: str
```

- *Type:* str

---

##### `publicly_accessible`<sup>Required</sup> <a name="publicly_accessible" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.publiclyAccessible"></a>

```python
publicly_accessible: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `replication_source_identifier`<sup>Required</sup> <a name="replication_source_identifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.replicationSourceIdentifier"></a>

```python
replication_source_identifier: str
```

- *Type:* str

---

##### `restore_to_time`<sup>Required</sup> <a name="restore_to_time" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.restoreToTime"></a>

```python
restore_to_time: str
```

- *Type:* str

---

##### `restore_type`<sup>Required</sup> <a name="restore_type" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.restoreType"></a>

```python
restore_type: str
```

- *Type:* str

---

##### `snapshot_identifier`<sup>Required</sup> <a name="snapshot_identifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.snapshotIdentifier"></a>

```python
snapshot_identifier: str
```

- *Type:* str

---

##### `source_db_cluster_identifier`<sup>Required</sup> <a name="source_db_cluster_identifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.sourceDbClusterIdentifier"></a>

```python
source_db_cluster_identifier: str
```

- *Type:* str

---

##### `source_db_cluster_resource_id`<sup>Required</sup> <a name="source_db_cluster_resource_id" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.sourceDbClusterResourceId"></a>

```python
source_db_cluster_resource_id: str
```

- *Type:* str

---

##### `source_region`<sup>Required</sup> <a name="source_region" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.sourceRegion"></a>

```python
source_region: str
```

- *Type:* str

---

##### `storage_encrypted`<sup>Required</sup> <a name="storage_encrypted" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.storageEncrypted"></a>

```python
storage_encrypted: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `storage_type`<sup>Required</sup> <a name="storage_type" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.storageType"></a>

```python
storage_type: str
```

- *Type:* str

---

##### `use_latest_restorable_time`<sup>Required</sup> <a name="use_latest_restorable_time" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.useLatestRestorableTime"></a>

```python
use_latest_restorable_time: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `vpc_security_group_ids`<sup>Required</sup> <a name="vpc_security_group_ids" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.vpcSecurityGroupIds"></a>

```python
vpc_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RdsDbClusterAssociatedRoles <a name="RdsDbClusterAssociatedRoles" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRoles.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_cluster

rdsDbCluster.RdsDbClusterAssociatedRoles(
  feature_name: str = None,
  role_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRoles.property.featureName">feature_name</a></code> | <code>str</code> | The name of the feature associated with the AWS Identity and Access Management (IAM) role. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRoles.property.roleArn">role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the IAM role that is associated with the DB cluster. |

---

##### `feature_name`<sup>Optional</sup> <a name="feature_name" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRoles.property.featureName"></a>

```python
feature_name: str
```

- *Type:* str

The name of the feature associated with the AWS Identity and Access Management (IAM) role.

IAM roles that are associated with a DB cluster grant permission for the DB cluster to access other AWS services on your behalf. For the list of supported feature names, see the `SupportedFeatureNames` description in [DBEngineVersion](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DBEngineVersion.html) in the *Amazon RDS API Reference*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#feature_name RdsDbCluster#feature_name}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRoles.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the IAM role that is associated with the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#role_arn RdsDbCluster#role_arn}

---

### RdsDbClusterConfig <a name="RdsDbClusterConfig" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_cluster

rdsDbCluster.RdsDbClusterConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  allocated_storage: typing.Union[int, float] = None,
  associated_roles: IResolvable | typing.List[RdsDbClusterAssociatedRoles] = None,
  auto_minor_version_upgrade: bool | IResolvable = None,
  availability_zones: typing.List[str] = None,
  backtrack_window: typing.Union[int, float] = None,
  backup_retention_period: typing.Union[int, float] = None,
  cluster_scalability_type: str = None,
  copy_tags_to_snapshot: bool | IResolvable = None,
  database_insights_mode: str = None,
  database_name: str = None,
  db_cluster_identifier: str = None,
  db_cluster_instance_class: str = None,
  db_cluster_parameter_group_name: str = None,
  db_instance_parameter_group_name: str = None,
  db_subnet_group_name: str = None,
  db_system_id: str = None,
  delete_automated_backups: bool | IResolvable = None,
  deletion_protection: bool | IResolvable = None,
  domain: str = None,
  domain_iam_role_name: str = None,
  enable_cloudwatch_logs_exports: typing.List[str] = None,
  enable_global_write_forwarding: bool | IResolvable = None,
  enable_http_endpoint: bool | IResolvable = None,
  enable_iam_database_authentication: bool | IResolvable = None,
  enable_local_write_forwarding: bool | IResolvable = None,
  engine: str = None,
  engine_lifecycle_support: str = None,
  engine_mode: str = None,
  engine_version: str = None,
  global_cluster_identifier: str = None,
  iops: typing.Union[int, float] = None,
  kms_key_id: str = None,
  manage_master_user_password: bool | IResolvable = None,
  master_user_authentication_type: str = None,
  master_username: str = None,
  master_user_password: str = None,
  master_user_secret: RdsDbClusterMasterUserSecret = None,
  monitoring_interval: typing.Union[int, float] = None,
  monitoring_role_arn: str = None,
  network_type: str = None,
  performance_insights_enabled: bool | IResolvable = None,
  performance_insights_kms_key_id: str = None,
  performance_insights_retention_period: typing.Union[int, float] = None,
  port: typing.Union[int, float] = None,
  preferred_backup_window: str = None,
  preferred_maintenance_window: str = None,
  publicly_accessible: bool | IResolvable = None,
  replication_source_identifier: str = None,
  restore_to_time: str = None,
  restore_type: str = None,
  scaling_configuration: RdsDbClusterScalingConfiguration = None,
  serverless_v2_scaling_configuration: RdsDbClusterServerlessV2ScalingConfiguration = None,
  snapshot_identifier: str = None,
  source_db_cluster_identifier: str = None,
  source_db_cluster_resource_id: str = None,
  source_region: str = None,
  storage_encrypted: bool | IResolvable = None,
  storage_type: str = None,
  tags: IResolvable | typing.List[RdsDbClusterTags] = None,
  use_latest_restorable_time: bool | IResolvable = None,
  vpc_security_group_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.allocatedStorage">allocated_storage</a></code> | <code>typing.Union[int, float]</code> | The amount of storage in gibibytes (GiB) to allocate to each DB instance in the Multi-AZ DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.associatedRoles">associated_roles</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRoles">RdsDbClusterAssociatedRoles</a>]</code> | Provides a list of the AWS Identity and Access Management (IAM) roles that are associated with the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.autoMinorVersionUpgrade">auto_minor_version_upgrade</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether minor engine upgrades are applied automatically to the DB cluster during the maintenance window. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.availabilityZones">availability_zones</a></code> | <code>typing.List[str]</code> | A list of Availability Zones (AZs) where instances in the DB cluster can be created. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.backtrackWindow">backtrack_window</a></code> | <code>typing.Union[int, float]</code> | The target backtrack window, in seconds. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.backupRetentionPeriod">backup_retention_period</a></code> | <code>typing.Union[int, float]</code> | The number of days for which automated backups are retained. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.clusterScalabilityType">cluster_scalability_type</a></code> | <code>str</code> | Specifies the scalability mode of the Aurora DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.copyTagsToSnapshot">copy_tags_to_snapshot</a></code> | <code>bool \| cdktn.IResolvable</code> | A value that indicates whether to copy all tags from the DB cluster to snapshots of the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.databaseInsightsMode">database_insights_mode</a></code> | <code>str</code> | The mode of Database Insights to enable for the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.databaseName">database_name</a></code> | <code>str</code> | The name of your database. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.dbClusterIdentifier">db_cluster_identifier</a></code> | <code>str</code> | The DB cluster identifier. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.dbClusterInstanceClass">db_cluster_instance_class</a></code> | <code>str</code> | The compute and memory capacity of each DB instance in the Multi-AZ DB cluster, for example ``db.m6gd.xlarge``. Not all DB instance classes are available in all AWS-Regions, or for all database engines.  For the full list of DB instance classes and availability for your engine, see [DB instance class](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html) in the *Amazon RDS User Guide*.  This setting is required to create a Multi-AZ DB cluster.  Valid for Cluster Type: Multi-AZ DB clusters only. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.dbClusterParameterGroupName">db_cluster_parameter_group_name</a></code> | <code>str</code> | The name of the DB cluster parameter group to associate with this DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.dbInstanceParameterGroupName">db_instance_parameter_group_name</a></code> | <code>str</code> | The name of the DB parameter group to apply to all instances of the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.dbSubnetGroupName">db_subnet_group_name</a></code> | <code>str</code> | A DB subnet group that you want to associate with this DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.dbSystemId">db_system_id</a></code> | <code>str</code> | Reserved for future use. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.deleteAutomatedBackups">delete_automated_backups</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether to remove automated backups immediately after the DB cluster is deleted. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.deletionProtection">deletion_protection</a></code> | <code>bool \| cdktn.IResolvable</code> | A value that indicates whether the DB cluster has deletion protection enabled. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.domain">domain</a></code> | <code>str</code> | Indicates the directory ID of the Active Directory to create the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.domainIamRoleName">domain_iam_role_name</a></code> | <code>str</code> | Specifies the name of the IAM role to use when making API calls to the Directory Service. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.enableCloudwatchLogsExports">enable_cloudwatch_logs_exports</a></code> | <code>typing.List[str]</code> | The list of log types that need to be enabled for exporting to CloudWatch Logs. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.enableGlobalWriteForwarding">enable_global_write_forwarding</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether to enable this DB cluster to forward write operations to the primary cluster of a global cluster (Aurora global database). |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.enableHttpEndpoint">enable_http_endpoint</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether to enable the HTTP endpoint for the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.enableIamDatabaseAuthentication">enable_iam_database_authentication</a></code> | <code>bool \| cdktn.IResolvable</code> | A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.enableLocalWriteForwarding">enable_local_write_forwarding</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether read replicas can forward write operations to the writer DB instance in the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.engine">engine</a></code> | <code>str</code> | The name of the database engine to be used for this DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.engineLifecycleSupport">engine_lifecycle_support</a></code> | <code>str</code> | The life cycle type for this DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.engineMode">engine_mode</a></code> | <code>str</code> | The DB engine mode of the DB cluster, either ``provisioned`` or ``serverless``. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.engineVersion">engine_version</a></code> | <code>str</code> | The version number of the database engine to use. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.globalClusterIdentifier">global_cluster_identifier</a></code> | <code>str</code> | If you are configuring an Aurora global database cluster and want your Aurora DB cluster to be a secondary member in the global database cluster, specify the global cluster ID of the global database cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for each DB instance in the Multi-AZ DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the AWS KMS key that is used to encrypt the database instances in the DB cluster, such as ``arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef``. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.manageMasterUserPassword">manage_master_user_password</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether to manage the master user password with AWS Secrets Manager. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.masterUserAuthenticationType">master_user_authentication_type</a></code> | <code>str</code> | Specifies the authentication type for the master user. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.masterUsername">master_username</a></code> | <code>str</code> | The name of the master user for the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.masterUserPassword">master_user_password</a></code> | <code>str</code> | The master password for the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.masterUserSecret">master_user_secret</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecret">RdsDbClusterMasterUserSecret</a></code> | The secret managed by RDS in AWS Secrets Manager for the master user password. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.monitoringInterval">monitoring_interval</a></code> | <code>typing.Union[int, float]</code> | The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.monitoringRoleArn">monitoring_role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) for the IAM role that permits RDS to send Enhanced Monitoring metrics to Amazon CloudWatch Logs. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.networkType">network_type</a></code> | <code>str</code> | The network type of the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.performanceInsightsEnabled">performance_insights_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether to turn on Performance Insights for the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.performanceInsightsKmsKeyId">performance_insights_kms_key_id</a></code> | <code>str</code> | The AWS KMS key identifier for encryption of Performance Insights data. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.performanceInsightsRetentionPeriod">performance_insights_retention_period</a></code> | <code>typing.Union[int, float]</code> | The number of days to retain Performance Insights data. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The port number on which the DB instances in the DB cluster accept connections. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.preferredBackupWindow">preferred_backup_window</a></code> | <code>str</code> | The daily time range during which automated backups are created. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.preferredMaintenanceWindow">preferred_maintenance_window</a></code> | <code>str</code> | The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC). |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.publiclyAccessible">publicly_accessible</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the DB cluster is publicly accessible. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.replicationSourceIdentifier">replication_source_identifier</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the source DB instance or DB cluster if this DB cluster is created as a read replica. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.restoreToTime">restore_to_time</a></code> | <code>str</code> | The date and time to restore the DB cluster to. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.restoreType">restore_type</a></code> | <code>str</code> | The type of restore to be performed. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.scalingConfiguration">scaling_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration">RdsDbClusterScalingConfiguration</a></code> | The scaling configuration of an Aurora Serverless v1 DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.serverlessV2ScalingConfiguration">serverless_v2_scaling_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfiguration">RdsDbClusterServerlessV2ScalingConfiguration</a></code> | The scaling configuration of an Aurora Serverless V2 DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.snapshotIdentifier">snapshot_identifier</a></code> | <code>str</code> | The identifier for the DB snapshot or DB cluster snapshot to restore from. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.sourceDbClusterIdentifier">source_db_cluster_identifier</a></code> | <code>str</code> | When restoring a DB cluster to a point in time, the identifier of the source DB cluster from which to restore. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.sourceDbClusterResourceId">source_db_cluster_resource_id</a></code> | <code>str</code> | The resource ID of the source DB cluster from which to restore. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.sourceRegion">source_region</a></code> | <code>str</code> | The AWS Region which contains the source DB cluster when replicating a DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.storageEncrypted">storage_encrypted</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether the DB cluster is encrypted. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.storageType">storage_type</a></code> | <code>str</code> | The storage type to associate with the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTags">RdsDbClusterTags</a>]</code> | Tags to assign to the DB cluster.  Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.useLatestRestorableTime">use_latest_restorable_time</a></code> | <code>bool \| cdktn.IResolvable</code> | A value that indicates whether to restore the DB cluster to the latest restorable backup time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | A list of EC2 VPC security groups to associate with this DB cluster. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `allocated_storage`<sup>Optional</sup> <a name="allocated_storage" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.allocatedStorage"></a>

```python
allocated_storage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of storage in gibibytes (GiB) to allocate to each DB instance in the Multi-AZ DB cluster.

Valid for Cluster Type: Multi-AZ DB clusters only
This setting is required to create a Multi-AZ DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#allocated_storage RdsDbCluster#allocated_storage}

---

##### `associated_roles`<sup>Optional</sup> <a name="associated_roles" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.associatedRoles"></a>

```python
associated_roles: IResolvable | typing.List[RdsDbClusterAssociatedRoles]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRoles">RdsDbClusterAssociatedRoles</a>]

Provides a list of the AWS Identity and Access Management (IAM) roles that are associated with the DB cluster.

IAM roles that are associated with a DB cluster grant permission for the DB cluster to access other Amazon Web Services on your behalf.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#associated_roles RdsDbCluster#associated_roles}

---

##### `auto_minor_version_upgrade`<sup>Optional</sup> <a name="auto_minor_version_upgrade" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.autoMinorVersionUpgrade"></a>

```python
auto_minor_version_upgrade: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether minor engine upgrades are applied automatically to the DB cluster during the maintenance window.

By default, minor engine upgrades are applied automatically.
Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB cluster.
For more information about automatic minor version upgrades, see [Automatically upgrading the minor engine version](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Upgrading.html#USER_UpgradeDBInstance.Upgrading.AutoMinorVersionUpgrades).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#auto_minor_version_upgrade RdsDbCluster#auto_minor_version_upgrade}

---

##### `availability_zones`<sup>Optional</sup> <a name="availability_zones" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.availabilityZones"></a>

```python
availability_zones: typing.List[str]
```

- *Type:* typing.List[str]

A list of Availability Zones (AZs) where instances in the DB cluster can be created.

For information on AWS Regions and Availability Zones, see [Choosing the Regions and Availability Zones](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.RegionsAndAvailabilityZones.html) in the *Amazon Aurora User Guide*.
Valid for: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#availability_zones RdsDbCluster#availability_zones}

---

##### `backtrack_window`<sup>Optional</sup> <a name="backtrack_window" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.backtrackWindow"></a>

```python
backtrack_window: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The target backtrack window, in seconds.

To disable backtracking, set this value to `0`.
Valid for Cluster Type: Aurora MySQL DB clusters only
Default: `0`
Constraints:

* If specified, this value must be set to a number from 0 to 259,200 (72 hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#backtrack_window RdsDbCluster#backtrack_window}

---

##### `backup_retention_period`<sup>Optional</sup> <a name="backup_retention_period" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.backupRetentionPeriod"></a>

```python
backup_retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of days for which automated backups are retained.

Default: 1
Constraints:

* Must be a value from 1 to 35

Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#backup_retention_period RdsDbCluster#backup_retention_period}

---

##### `cluster_scalability_type`<sup>Optional</sup> <a name="cluster_scalability_type" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.clusterScalabilityType"></a>

```python
cluster_scalability_type: str
```

- *Type:* str

Specifies the scalability mode of the Aurora DB cluster.

When set to `limitless`, the cluster operates as an Aurora Limitless Database, allowing you to create a DB shard group for horizontal scaling (sharding) capabilities. When set to `standard` (the default), the cluster uses normal DB instance creation.
*Important:* Automated backup retention isn't supported with Aurora Limitless Database clusters. If you set this property to `limitless`, you cannot set `DeleteAutomatedBackups` to `false`. To create a backup, use manual snapshots instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#cluster_scalability_type RdsDbCluster#cluster_scalability_type}

---

##### `copy_tags_to_snapshot`<sup>Optional</sup> <a name="copy_tags_to_snapshot" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.copyTagsToSnapshot"></a>

```python
copy_tags_to_snapshot: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A value that indicates whether to copy all tags from the DB cluster to snapshots of the DB cluster.

The default is not to copy them.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#copy_tags_to_snapshot RdsDbCluster#copy_tags_to_snapshot}

---

##### `database_insights_mode`<sup>Optional</sup> <a name="database_insights_mode" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.databaseInsightsMode"></a>

```python
database_insights_mode: str
```

- *Type:* str

The mode of Database Insights to enable for the DB cluster.

If you set this value to `advanced`, you must also set the `PerformanceInsightsEnabled` parameter to `true` and the `PerformanceInsightsRetentionPeriod` parameter to 465.
Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#database_insights_mode RdsDbCluster#database_insights_mode}

---

##### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

The name of your database.

If you don't provide a name, then Amazon RDS won't create a database in this DB cluster. For naming constraints, see [Naming Constraints](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_Limits.html#RDS_Limits.Constraints) in the *Amazon Aurora User Guide*.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#database_name RdsDbCluster#database_name}

---

##### `db_cluster_identifier`<sup>Optional</sup> <a name="db_cluster_identifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.dbClusterIdentifier"></a>

```python
db_cluster_identifier: str
```

- *Type:* str

The DB cluster identifier.

This parameter is stored as a lowercase string.
Constraints:

* Must contain from 1 to 63 letters, numbers, or hyphens.
* First character must be a letter.
* Can't end with a hyphen or contain two consecutive hyphens.

Example: `my-cluster1`
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#db_cluster_identifier RdsDbCluster#db_cluster_identifier}

---

##### `db_cluster_instance_class`<sup>Optional</sup> <a name="db_cluster_instance_class" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.dbClusterInstanceClass"></a>

```python
db_cluster_instance_class: str
```

- *Type:* str

The compute and memory capacity of each DB instance in the Multi-AZ DB cluster, for example ``db.m6gd.xlarge``. Not all DB instance classes are available in all AWS-Regions, or for all database engines.  For the full list of DB instance classes and availability for your engine, see [DB instance class](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html) in the *Amazon RDS User Guide*.  This setting is required to create a Multi-AZ DB cluster.  Valid for Cluster Type: Multi-AZ DB clusters only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#db_cluster_instance_class RdsDbCluster#db_cluster_instance_class}

---

##### `db_cluster_parameter_group_name`<sup>Optional</sup> <a name="db_cluster_parameter_group_name" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.dbClusterParameterGroupName"></a>

```python
db_cluster_parameter_group_name: str
```

- *Type:* str

The name of the DB cluster parameter group to associate with this DB cluster.

If you apply a parameter group to an existing DB cluster, then its DB instances might need to reboot. This can result in an outage while the DB instances are rebooting.
If you apply a change to parameter group associated with a stopped DB cluster, then the update stack waits until the DB cluster is started.
To list all of the available DB cluster parameter group names, use the following command:
`aws rds describe-db-cluster-parameter-groups --query "DBClusterParameterGroups[].DBClusterParameterGroupName" --output text`
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#db_cluster_parameter_group_name RdsDbCluster#db_cluster_parameter_group_name}

---

##### `db_instance_parameter_group_name`<sup>Optional</sup> <a name="db_instance_parameter_group_name" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.dbInstanceParameterGroupName"></a>

```python
db_instance_parameter_group_name: str
```

- *Type:* str

The name of the DB parameter group to apply to all instances of the DB cluster.

When you apply a parameter group using the `DBInstanceParameterGroupName` parameter, the DB cluster isn't rebooted automatically. Also, parameter changes are applied immediately rather than during the next maintenance window.
Valid for Cluster Type: Aurora DB clusters only
Default: The existing name setting
Constraints:

* The DB parameter group must be in the same DB parameter group family as this DB cluster.
* The `DBInstanceParameterGroupName` parameter is valid in combination with the `AllowMajorVersionUpgrade` parameter for a major version upgrade only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#db_instance_parameter_group_name RdsDbCluster#db_instance_parameter_group_name}

---

##### `db_subnet_group_name`<sup>Optional</sup> <a name="db_subnet_group_name" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.dbSubnetGroupName"></a>

```python
db_subnet_group_name: str
```

- *Type:* str

A DB subnet group that you want to associate with this DB cluster.

If you are restoring a DB cluster to a point in time with `RestoreType` set to `copy-on-write`, and don't specify a DB subnet group name, then the DB cluster is restored with a default DB subnet group.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#db_subnet_group_name RdsDbCluster#db_subnet_group_name}

---

##### `db_system_id`<sup>Optional</sup> <a name="db_system_id" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.dbSystemId"></a>

```python
db_system_id: str
```

- *Type:* str

Reserved for future use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#db_system_id RdsDbCluster#db_system_id}

---

##### `delete_automated_backups`<sup>Optional</sup> <a name="delete_automated_backups" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.deleteAutomatedBackups"></a>

```python
delete_automated_backups: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether to remove automated backups immediately after the DB cluster is deleted.

This parameter isn't case-sensitive. The default is to remove automated backups immediately after the DB cluster is deleted, unless the AWS Backup policy specifies a point-in-time restore rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#delete_automated_backups RdsDbCluster#delete_automated_backups}

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.deletionProtection"></a>

```python
deletion_protection: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A value that indicates whether the DB cluster has deletion protection enabled.

The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#deletion_protection RdsDbCluster#deletion_protection}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.domain"></a>

```python
domain: str
```

- *Type:* str

Indicates the directory ID of the Active Directory to create the DB cluster.

For Amazon Aurora DB clusters, Amazon RDS can use Kerberos authentication to authenticate users that connect to the DB cluster.
For more information, see [Kerberos authentication](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/kerberos-authentication.html) in the *Amazon Aurora User Guide*.
Valid for: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#domain RdsDbCluster#domain}

---

##### `domain_iam_role_name`<sup>Optional</sup> <a name="domain_iam_role_name" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.domainIamRoleName"></a>

```python
domain_iam_role_name: str
```

- *Type:* str

Specifies the name of the IAM role to use when making API calls to the Directory Service.

Valid for: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#domain_iam_role_name RdsDbCluster#domain_iam_role_name}

---

##### `enable_cloudwatch_logs_exports`<sup>Optional</sup> <a name="enable_cloudwatch_logs_exports" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.enableCloudwatchLogsExports"></a>

```python
enable_cloudwatch_logs_exports: typing.List[str]
```

- *Type:* typing.List[str]

The list of log types that need to be enabled for exporting to CloudWatch Logs.

The values in the list depend on the DB engine being used. For more information, see [Publishing Database Logs to Amazon CloudWatch Logs](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch) in the *Amazon Aurora User Guide*.
*Aurora MySQL*
Valid values: `audit`, `error`, `general`, `slowquery`
*Aurora PostgreSQL*
Valid values: `postgresql`
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#enable_cloudwatch_logs_exports RdsDbCluster#enable_cloudwatch_logs_exports}

---

##### `enable_global_write_forwarding`<sup>Optional</sup> <a name="enable_global_write_forwarding" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.enableGlobalWriteForwarding"></a>

```python
enable_global_write_forwarding: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether to enable this DB cluster to forward write operations to the primary cluster of a global cluster (Aurora global database).

By default, write operations are not allowed on Aurora DB clusters that are secondary clusters in an Aurora global database.
You can set this value only on Aurora DB clusters that are members of an Aurora global database. With this parameter enabled, a secondary cluster can forward writes to the current primary cluster, and the resulting changes are replicated back to this cluster. For the primary DB cluster of an Aurora global database, this value is used immediately if the primary is demoted by a global cluster API operation, but it does nothing until then.
Valid for Cluster Type: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#enable_global_write_forwarding RdsDbCluster#enable_global_write_forwarding}

---

##### `enable_http_endpoint`<sup>Optional</sup> <a name="enable_http_endpoint" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.enableHttpEndpoint"></a>

```python
enable_http_endpoint: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether to enable the HTTP endpoint for the DB cluster.

By default, the HTTP endpoint isn't enabled.
When enabled, the HTTP endpoint provides a connectionless web service API (RDS Data API) for running SQL queries on the DB cluster. You can also query your database from inside the RDS console with the RDS query editor.
For more information, see [Using RDS Data API](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html) in the *Amazon Aurora User Guide*.
Valid for Cluster Type: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#enable_http_endpoint RdsDbCluster#enable_http_endpoint}

---

##### `enable_iam_database_authentication`<sup>Optional</sup> <a name="enable_iam_database_authentication" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.enableIamDatabaseAuthentication"></a>

```python
enable_iam_database_authentication: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts.

By default, mapping is disabled.
For more information, see [IAM Database Authentication](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html) in the *Amazon Aurora User Guide.*
Valid for: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#enable_iam_database_authentication RdsDbCluster#enable_iam_database_authentication}

---

##### `enable_local_write_forwarding`<sup>Optional</sup> <a name="enable_local_write_forwarding" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.enableLocalWriteForwarding"></a>

```python
enable_local_write_forwarding: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether read replicas can forward write operations to the writer DB instance in the DB cluster.

By default, write operations aren't allowed on reader DB instances.
Valid for: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#enable_local_write_forwarding RdsDbCluster#enable_local_write_forwarding}

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.engine"></a>

```python
engine: str
```

- *Type:* str

The name of the database engine to be used for this DB cluster.

Valid Values:

* `aurora-mysql`
* `aurora-postgresql`
* `mysql`
* `postgres`

Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#engine RdsDbCluster#engine}

---

##### `engine_lifecycle_support`<sup>Optional</sup> <a name="engine_lifecycle_support" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.engineLifecycleSupport"></a>

```python
engine_lifecycle_support: str
```

- *Type:* str

The life cycle type for this DB cluster.

By default, this value is set to `open-source-rds-extended-support`, which enrolls your DB cluster into Amazon RDS Extended Support. At the end of standard support, you can avoid charges for Extended Support by setting the value to `open-source-rds-extended-support-disabled`. In this case, creating the DB cluster will fail if the DB major version is past its end of standard support date.
You can use this setting to enroll your DB cluster into Amazon RDS Extended Support. With RDS Extended Support, you can run the selected major engine version on your DB cluster past the end of standard support for that engine version. For more information, see the following sections:

* Amazon Aurora - [Amazon RDS Extended Support with Amazon Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/extended-support.html) in the *Amazon Aurora User Guide*
* Amazon RDS - [Amazon RDS Extended Support with Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/extended-support.html) in the *Amazon RDS User Guide*

Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
Valid Values: `open-source-rds-extended-support | open-source-rds-extended-support-disabled`
Default: `open-source-rds-extended-support`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#engine_lifecycle_support RdsDbCluster#engine_lifecycle_support}

---

##### `engine_mode`<sup>Optional</sup> <a name="engine_mode" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.engineMode"></a>

```python
engine_mode: str
```

- *Type:* str

The DB engine mode of the DB cluster, either ``provisioned`` or ``serverless``.

The `serverless` engine mode only applies for Aurora Serverless v1 DB clusters. Aurora Serverless v2 DB clusters use the `provisioned` engine mode.
For information about limitations and requirements for Serverless DB clusters, see the following sections in the *Amazon Aurora User Guide*:

* [Limitations of Aurora Serverless v1](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html#aurora-serverless.limitations)
* [Requirements for Aurora Serverless v2](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.requirements.html)

Valid for Cluster Type: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#engine_mode RdsDbCluster#engine_mode}

---

##### `engine_version`<sup>Optional</sup> <a name="engine_version" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

The version number of the database engine to use.

Don't use this property if your DB cluster is a member of a global database cluster. Instead, specify the `EngineVersion` property on the [AWS::RDS::GlobalCluster](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html) resource. Major version upgrades aren't supported for individual members of a global cluster. Use `ModifyGlobalCluster` to upgrade all members of the global cluster.
To list all of the available engine versions for Aurora MySQL version 2 (5.7-compatible) and version 3 (8.0-compatible), use the following command:
`aws rds describe-db-engine-versions --engine aurora-mysql --query "DBEngineVersions[].EngineVersion"`
You can supply either `5.7` or `8.0` to use the default engine version for Aurora MySQL version 2 or version 3, respectively.
To list all of the available engine versions for Aurora PostgreSQL, use the following command:
`aws rds describe-db-engine-versions --engine aurora-postgresql --query "DBEngineVersions[].EngineVersion"`
To list all of the available engine versions for RDS for MySQL, use the following command:
`aws rds describe-db-engine-versions --engine mysql --query "DBEngineVersions[].EngineVersion"`
To list all of the available engine versions for RDS for PostgreSQL, use the following command:
`aws rds describe-db-engine-versions --engine postgres --query "DBEngineVersions[].EngineVersion"`
*Aurora MySQL*
For information, see [Database engine updates for Amazon Aurora MySQL](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Updates.html) in the *Amazon Aurora User Guide*.
*Aurora PostgreSQL*
For information, see [Amazon Aurora PostgreSQL releases and engine versions](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraPostgreSQL.Updates.20180305.html) in the *Amazon Aurora User Guide*.
*MySQL*
For information, see [Amazon RDS for MySQL](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_MySQL.html#MySQL.Concepts.VersionMgmt) in the *Amazon RDS User Guide*.
*PostgreSQL*
For information, see [Amazon RDS for PostgreSQL](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_PostgreSQL.html#PostgreSQL.Concepts) in the *Amazon RDS User Guide*.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#engine_version RdsDbCluster#engine_version}

---

##### `global_cluster_identifier`<sup>Optional</sup> <a name="global_cluster_identifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.globalClusterIdentifier"></a>

```python
global_cluster_identifier: str
```

- *Type:* str

If you are configuring an Aurora global database cluster and want your Aurora DB cluster to be a secondary member in the global database cluster, specify the global cluster ID of the global database cluster.

To define the primary database cluster of the global cluster, use the [AWS::RDS::GlobalCluster](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html) resource.
If you aren't configuring a global database cluster, don't specify this property.
To remove the DB cluster from a global database cluster, specify an empty value for the `GlobalClusterIdentifier` property.
For information about Aurora global databases, see [Working with Amazon Aurora Global Databases](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html) in the *Amazon Aurora User Guide*.
Valid for: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#global_cluster_identifier RdsDbCluster#global_cluster_identifier}

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for each DB instance in the Multi-AZ DB cluster.

For information about valid IOPS values, see [Provisioned IOPS storage](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#USER_PIOPS) in the *Amazon RDS User Guide*.
This setting is required to create a Multi-AZ DB cluster.
Valid for Cluster Type: Multi-AZ DB clusters only
Constraints:

* Must be a multiple between .5 and 50 of the storage amount for the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#iops RdsDbCluster#iops}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the AWS KMS key that is used to encrypt the database instances in the DB cluster, such as ``arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef``.

If you enable the `StorageEncrypted` property but don't specify this property, the default KMS key is used. If you specify this property, you must set the `StorageEncrypted` property to `true`.
If you specify the `SnapshotIdentifier` property, the `StorageEncrypted` property value is inherited from the snapshot, and if the DB cluster is encrypted, the specified `KmsKeyId` property is used.
If you create a read replica of an encrypted DB cluster in another AWS Region, make sure to set `KmsKeyId` to a KMS key identifier that is valid in the destination AWS Region. This KMS key is used to encrypt the read replica in that AWS Region.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#kms_key_id RdsDbCluster#kms_key_id}

---

##### `manage_master_user_password`<sup>Optional</sup> <a name="manage_master_user_password" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.manageMasterUserPassword"></a>

```python
manage_master_user_password: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether to manage the master user password with AWS Secrets Manager.

For more information, see [Password management with Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the *Amazon RDS User Guide* and [Password management with Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-secrets-manager.html) in the *Amazon Aurora User Guide.*
Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
Constraints:

* Can't manage the master user password with AWS Secrets Manager if `MasterUserPassword` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#manage_master_user_password RdsDbCluster#manage_master_user_password}

---

##### `master_user_authentication_type`<sup>Optional</sup> <a name="master_user_authentication_type" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.masterUserAuthenticationType"></a>

```python
master_user_authentication_type: str
```

- *Type:* str

Specifies the authentication type for the master user.

With IAM master user authentication, you can configure the master DB user with IAM database authentication when you create a DB cluster.
You can specify one of the following values:

* `password` - Use standard database authentication with a password.
* `iam-db-auth` - Use IAM database authentication for the master user.

Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
This option is only valid for RDS for MySQL, RDS for MariaDB, RDS for PostgreSQL, Aurora MySQL, and Aurora PostgreSQL engines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#master_user_authentication_type RdsDbCluster#master_user_authentication_type}

---

##### `master_username`<sup>Optional</sup> <a name="master_username" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.masterUsername"></a>

```python
master_username: str
```

- *Type:* str

The name of the master user for the DB cluster.

If you specify the `SourceDBClusterIdentifier`, `SnapshotIdentifier`, or `GlobalClusterIdentifier` property, don't specify this property. The value is inherited from the source DB cluster, the snapshot, or the primary DB cluster for the global database cluster, respectively.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#master_username RdsDbCluster#master_username}

---

##### `master_user_password`<sup>Optional</sup> <a name="master_user_password" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.masterUserPassword"></a>

```python
master_user_password: str
```

- *Type:* str

The master password for the DB instance.

If you specify the `SourceDBClusterIdentifier`, `SnapshotIdentifier`, or `GlobalClusterIdentifier` property, don't specify this property. The value is inherited from the source DB cluster, the snapshot, or the primary DB cluster for the global database cluster, respectively.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#master_user_password RdsDbCluster#master_user_password}

---

##### `master_user_secret`<sup>Optional</sup> <a name="master_user_secret" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.masterUserSecret"></a>

```python
master_user_secret: RdsDbClusterMasterUserSecret
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecret">RdsDbClusterMasterUserSecret</a>

The secret managed by RDS in AWS Secrets Manager for the master user password.

When you restore a DB cluster from a snapshot, Amazon RDS generates a new secret instead of reusing the secret specified in the `SecretArn` property. This ensures that the restored DB cluster is securely managed with a dedicated secret. To maintain consistent integration with your application, you might need to update resource configurations to reference the newly created secret.
For more information, see [Password management with Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the *Amazon RDS User Guide* and [Password management with Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-secrets-manager.html) in the *Amazon Aurora User Guide.*

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#master_user_secret RdsDbCluster#master_user_secret}

---

##### `monitoring_interval`<sup>Optional</sup> <a name="monitoring_interval" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.monitoringInterval"></a>

```python
monitoring_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB cluster.

To turn off collecting Enhanced Monitoring metrics, specify `0`.
If `MonitoringRoleArn` is specified, also set `MonitoringInterval` to a value other than `0`.
Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
Valid Values: `0 | 1 | 5 | 10 | 15 | 30 | 60`
Default: `0`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#monitoring_interval RdsDbCluster#monitoring_interval}

---

##### `monitoring_role_arn`<sup>Optional</sup> <a name="monitoring_role_arn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.monitoringRoleArn"></a>

```python
monitoring_role_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) for the IAM role that permits RDS to send Enhanced Monitoring metrics to Amazon CloudWatch Logs.

An example is `arn:aws:iam:123456789012:role/emaccess`. For information on creating a monitoring role, see [Setting up and enabling Enhanced Monitoring](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.OS.html#USER_Monitoring.OS.Enabling) in the *Amazon RDS User Guide*.
If `MonitoringInterval` is set to a value other than `0`, supply a `MonitoringRoleArn` value.
Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#monitoring_role_arn RdsDbCluster#monitoring_role_arn}

---

##### `network_type`<sup>Optional</sup> <a name="network_type" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.networkType"></a>

```python
network_type: str
```

- *Type:* str

The network type of the DB cluster.

Valid values:

* `IPV4`
* `DUAL`

The network type is determined by the `DBSubnetGroup` specified for the DB cluster. A `DBSubnetGroup` can support only the IPv4 protocol or the IPv4 and IPv6 protocols (`DUAL`).
For more information, see [Working with a DB instance in a VPC](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html) in the *Amazon Aurora User Guide.*
Valid for: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#network_type RdsDbCluster#network_type}

---

##### `performance_insights_enabled`<sup>Optional</sup> <a name="performance_insights_enabled" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.performanceInsightsEnabled"></a>

```python
performance_insights_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether to turn on Performance Insights for the DB cluster.

For more information, see [Using Amazon Performance Insights](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html) in the *Amazon RDS User Guide*.
Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#performance_insights_enabled RdsDbCluster#performance_insights_enabled}

---

##### `performance_insights_kms_key_id`<sup>Optional</sup> <a name="performance_insights_kms_key_id" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.performanceInsightsKmsKeyId"></a>

```python
performance_insights_kms_key_id: str
```

- *Type:* str

The AWS KMS key identifier for encryption of Performance Insights data.

The AWS KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
If you don't specify a value for `PerformanceInsightsKMSKeyId`, then Amazon RDS uses your default KMS key. There is a default KMS key for your AWS-account. Your AWS-account has a different default KMS key for each AWS-Region.
Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#performance_insights_kms_key_id RdsDbCluster#performance_insights_kms_key_id}

---

##### `performance_insights_retention_period`<sup>Optional</sup> <a name="performance_insights_retention_period" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.performanceInsightsRetentionPeriod"></a>

```python
performance_insights_retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of days to retain Performance Insights data.

When creating a DB cluster without enabling Performance Insights, you can't specify the parameter `PerformanceInsightsRetentionPeriod`.
Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
Valid Values:

* `7`
* *month* * 31, where *month* is a number of months from 1-23. Examples: `93` (3 months * 31), `341` (11 months * 31), `589` (19 months * 31)
* `731`

Default: `7` days
If you specify a retention period that isn't valid, such as `94`, Amazon RDS issues an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#performance_insights_retention_period RdsDbCluster#performance_insights_retention_period}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The port number on which the DB instances in the DB cluster accept connections.

Default:

* RDS for MySQL and Aurora MySQL - `3306`
* RDS for PostgreSQL and Aurora PostgreSQL - `5432`

The `No interruption` on update behavior only applies to DB clusters. If you are updating a DB instance, see [Port](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-database-instance.html#cfn-rds-dbinstance-port) for the AWS::RDS::DBInstance resource.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#port RdsDbCluster#port}

---

##### `preferred_backup_window`<sup>Optional</sup> <a name="preferred_backup_window" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.preferredBackupWindow"></a>

```python
preferred_backup_window: str
```

- *Type:* str

The daily time range during which automated backups are created.

For more information, see [Backup Window](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Backups.html#Aurora.Managing.Backups.BackupWindow) in the *Amazon Aurora User Guide.*
Constraints:

* Must be in the format `hh24:mi-hh24:mi`.
* Must be in Universal Coordinated Time (UTC).
* Must not conflict with the preferred maintenance window.
* Must be at least 30 minutes.

Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#preferred_backup_window RdsDbCluster#preferred_backup_window}

---

##### `preferred_maintenance_window`<sup>Optional</sup> <a name="preferred_maintenance_window" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.preferredMaintenanceWindow"></a>

```python
preferred_maintenance_window: str
```

- *Type:* str

The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).

Format: `ddd:hh24:mi-ddd:hh24:mi`
The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week. To see the time blocks available, see [Maintaining an Amazon Aurora DB cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow.Aurora) in the *Amazon Aurora User Guide.*
Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.
Constraints: Minimum 30-minute window.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#preferred_maintenance_window RdsDbCluster#preferred_maintenance_window}

---

##### `publicly_accessible`<sup>Optional</sup> <a name="publicly_accessible" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.publiclyAccessible"></a>

```python
publicly_accessible: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether the DB cluster is publicly accessible.

Valid for Cluster Type: Multi-AZ DB clusters only
When the DB cluster is publicly accessible and you connect from outside of the DB cluster's virtual private cloud (VPC), its domain name system (DNS) endpoint resolves to the public IP address. When you connect from within the same VPC as the DB cluster, the endpoint resolves to the private IP address. Access to the DB cluster is controlled by its security group settings.
When the DB cluster isn't publicly accessible, it is an internal DB cluster with a DNS name that resolves to a private IP address.
The default behavior when `PubliclyAccessible` is not specified depends on whether a `DBSubnetGroup` is specified.
If `DBSubnetGroup` isn't specified, `PubliclyAccessible` defaults to `true`.
If `DBSubnetGroup` is specified, `PubliclyAccessible` defaults to `false` unless the value of `DBSubnetGroup` is `default`, in which case `PubliclyAccessible` defaults to `true`.
If `PubliclyAccessible` is true and the VPC that the `DBSubnetGroup` is in doesn't have an internet gateway attached to it, Amazon RDS returns an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#publicly_accessible RdsDbCluster#publicly_accessible}

---

##### `replication_source_identifier`<sup>Optional</sup> <a name="replication_source_identifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.replicationSourceIdentifier"></a>

```python
replication_source_identifier: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the source DB instance or DB cluster if this DB cluster is created as a read replica.

Valid for: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#replication_source_identifier RdsDbCluster#replication_source_identifier}

---

##### `restore_to_time`<sup>Optional</sup> <a name="restore_to_time" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.restoreToTime"></a>

```python
restore_to_time: str
```

- *Type:* str

The date and time to restore the DB cluster to.

Valid Values: Value must be a time in Universal Coordinated Time (UTC) format
Constraints:

* Must be before the latest restorable time for the DB instance
* Must be specified if `UseLatestRestorableTime` parameter isn't provided
* Can't be specified if the `UseLatestRestorableTime` parameter is enabled
* Can't be specified if the `RestoreType` parameter is `copy-on-write`

This property must be used with `SourceDBClusterIdentifier` property. The resulting cluster will have the identifier that matches the value of the `DBclusterIdentifier` property.
Example: `2015-03-07T23:45:00Z`
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#restore_to_time RdsDbCluster#restore_to_time}

---

##### `restore_type`<sup>Optional</sup> <a name="restore_type" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.restoreType"></a>

```python
restore_type: str
```

- *Type:* str

The type of restore to be performed.

You can specify one of the following values:

* `full-copy` - The new DB cluster is restored as a full copy of the source DB cluster.
* `copy-on-write` - The new DB cluster is restored as a clone of the source DB cluster.

If you don't specify a `RestoreType` value, then the new DB cluster is restored as a full copy of the source DB cluster.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#restore_type RdsDbCluster#restore_type}

---

##### `scaling_configuration`<sup>Optional</sup> <a name="scaling_configuration" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.scalingConfiguration"></a>

```python
scaling_configuration: RdsDbClusterScalingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration">RdsDbClusterScalingConfiguration</a>

The scaling configuration of an Aurora Serverless v1 DB cluster.

This property is only supported for Aurora Serverless v1. For Aurora Serverless v2, Use the `ServerlessV2ScalingConfiguration` property.
Valid for: Aurora Serverless v1 DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#scaling_configuration RdsDbCluster#scaling_configuration}

---

##### `serverless_v2_scaling_configuration`<sup>Optional</sup> <a name="serverless_v2_scaling_configuration" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.serverlessV2ScalingConfiguration"></a>

```python
serverless_v2_scaling_configuration: RdsDbClusterServerlessV2ScalingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfiguration">RdsDbClusterServerlessV2ScalingConfiguration</a>

The scaling configuration of an Aurora Serverless V2 DB cluster.

This property is only supported for Aurora Serverless v2. For Aurora Serverless v1, Use the `ScalingConfiguration` property.
Valid for: Aurora Serverless v2 DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#serverless_v2_scaling_configuration RdsDbCluster#serverless_v2_scaling_configuration}

---

##### `snapshot_identifier`<sup>Optional</sup> <a name="snapshot_identifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.snapshotIdentifier"></a>

```python
snapshot_identifier: str
```

- *Type:* str

The identifier for the DB snapshot or DB cluster snapshot to restore from.

You can use either the name or the Amazon Resource Name (ARN) to specify a DB cluster snapshot. However, you can use only the ARN to specify a DB snapshot.
After you restore a DB cluster with a `SnapshotIdentifier` property, you must specify the same `SnapshotIdentifier` property for any future updates to the DB cluster. When you specify this property for an update, the DB cluster is not restored from the snapshot again, and the data in the database is not changed. However, if you don't specify the `SnapshotIdentifier` property, an empty DB cluster is created, and the original DB cluster is deleted. If you specify a property that is different from the previous snapshot restore property, a new DB cluster is restored from the specified `SnapshotIdentifier` property, and the original DB cluster is deleted.
If you specify the `SnapshotIdentifier` property to restore a DB cluster (as opposed to specifying it for DB cluster updates), then don't specify the following properties:

* `GlobalClusterIdentifier`
* `MasterUsername`
* `MasterUserPassword`
* `ReplicationSourceIdentifier`
* `RestoreType`
* `SourceDBClusterIdentifier`
* `SourceRegion`
* `StorageEncrypted` (for an encrypted snapshot)
* `UseLatestRestorableTime`

Constraints:

* Must match the identifier of an existing Snapshot.

Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#snapshot_identifier RdsDbCluster#snapshot_identifier}

---

##### `source_db_cluster_identifier`<sup>Optional</sup> <a name="source_db_cluster_identifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.sourceDbClusterIdentifier"></a>

```python
source_db_cluster_identifier: str
```

- *Type:* str

When restoring a DB cluster to a point in time, the identifier of the source DB cluster from which to restore.

Constraints:

* Must match the identifier of an existing DBCluster.
* Cannot be specified if `SourceDbClusterResourceId` is specified. You must specify either `SourceDBClusterIdentifier` or `SourceDbClusterResourceId`, but not both.

Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#source_db_cluster_identifier RdsDbCluster#source_db_cluster_identifier}

---

##### `source_db_cluster_resource_id`<sup>Optional</sup> <a name="source_db_cluster_resource_id" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.sourceDbClusterResourceId"></a>

```python
source_db_cluster_resource_id: str
```

- *Type:* str

The resource ID of the source DB cluster from which to restore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#source_db_cluster_resource_id RdsDbCluster#source_db_cluster_resource_id}

---

##### `source_region`<sup>Optional</sup> <a name="source_region" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.sourceRegion"></a>

```python
source_region: str
```

- *Type:* str

The AWS Region which contains the source DB cluster when replicating a DB cluster.

For example, `us-east-1`.
Valid for: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#source_region RdsDbCluster#source_region}

---

##### `storage_encrypted`<sup>Optional</sup> <a name="storage_encrypted" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.storageEncrypted"></a>

```python
storage_encrypted: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether the DB cluster is encrypted.

If you specify the `KmsKeyId` property, then you must enable encryption.
If you specify the `SourceDBClusterIdentifier` property, don't specify this property. The value is inherited from the source DB cluster, and if the DB cluster is encrypted, the specified `KmsKeyId` property is used.
If you specify the `SnapshotIdentifier` and the specified snapshot is encrypted, don't specify this property. The value is inherited from the snapshot, and the specified `KmsKeyId` property is used.
If you specify the `SnapshotIdentifier` and the specified snapshot isn't encrypted, you can use this property to specify that the restored DB cluster is encrypted. Specify the `KmsKeyId` property for the KMS key to use for encryption. If you don't want the restored DB cluster to be encrypted, then don't set this property or set it to `false`.
If you specify both the `StorageEncrypted` and `SnapshotIdentifier` properties without specifying the `KmsKeyId` property, then the restored DB cluster inherits the encryption settings from the DB snapshot that provide.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#storage_encrypted RdsDbCluster#storage_encrypted}

---

##### `storage_type`<sup>Optional</sup> <a name="storage_type" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.storageType"></a>

```python
storage_type: str
```

- *Type:* str

The storage type to associate with the DB cluster.

For information on storage types for Aurora DB clusters, see [Storage configurations for Amazon Aurora DB clusters](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Overview.StorageReliability.html#aurora-storage-type). For information on storage types for Multi-AZ DB clusters, see [Settings for creating Multi-AZ DB clusters](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/create-multi-az-db-cluster.html#create-multi-az-db-cluster-settings).
This setting is required to create a Multi-AZ DB cluster.
When specified for a Multi-AZ DB cluster, a value for the `Iops` parameter is required.
Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
Valid Values:

* Aurora DB clusters - `aurora | aurora-iopt1`
* Multi-AZ DB clusters - `io1 | io2 | gp3`

Default:

* Aurora DB clusters - `aurora`
* Multi-AZ DB clusters - `io1`

When you create an Aurora DB cluster with the storage type set to `aurora-iopt1`, the storage type is returned in the response. The storage type isn't returned when you set it to `aurora`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#storage_type RdsDbCluster#storage_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[RdsDbClusterTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTags">RdsDbClusterTags</a>]

Tags to assign to the DB cluster.  Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#tags RdsDbCluster#tags}

---

##### `use_latest_restorable_time`<sup>Optional</sup> <a name="use_latest_restorable_time" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.useLatestRestorableTime"></a>

```python
use_latest_restorable_time: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A value that indicates whether to restore the DB cluster to the latest restorable backup time.

By default, the DB cluster is not restored to the latest restorable backup time.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#use_latest_restorable_time RdsDbCluster#use_latest_restorable_time}

---

##### `vpc_security_group_ids`<sup>Optional</sup> <a name="vpc_security_group_ids" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.vpcSecurityGroupIds"></a>

```python
vpc_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

A list of EC2 VPC security groups to associate with this DB cluster.

If you plan to update the resource, don't specify VPC security groups in a shared VPC.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#vpc_security_group_ids RdsDbCluster#vpc_security_group_ids}

---

### RdsDbClusterEndpoint <a name="RdsDbClusterEndpoint" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpoint.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_cluster

rdsDbCluster.RdsDbClusterEndpoint()
```


### RdsDbClusterMasterUserSecret <a name="RdsDbClusterMasterUserSecret" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecret.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_cluster

rdsDbCluster.RdsDbClusterMasterUserSecret(
  kms_key_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecret.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The AWS KMS key identifier that is used to encrypt the secret. |

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecret.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

The AWS KMS key identifier that is used to encrypt the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#kms_key_id RdsDbCluster#kms_key_id}

---

### RdsDbClusterReadEndpoint <a name="RdsDbClusterReadEndpoint" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpoint.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_cluster

rdsDbCluster.RdsDbClusterReadEndpoint()
```


### RdsDbClusterScalingConfiguration <a name="RdsDbClusterScalingConfiguration" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_cluster

rdsDbCluster.RdsDbClusterScalingConfiguration(
  auto_pause: bool | IResolvable = None,
  max_capacity: typing.Union[int, float] = None,
  min_capacity: typing.Union[int, float] = None,
  seconds_before_timeout: typing.Union[int, float] = None,
  seconds_until_auto_pause: typing.Union[int, float] = None,
  timeout_action: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration.property.autoPause">auto_pause</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether to allow or disallow automatic pause for an Aurora DB cluster in ``serverless`` DB engine mode. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration.property.maxCapacity">max_capacity</a></code> | <code>typing.Union[int, float]</code> | The maximum capacity for an Aurora DB cluster in ``serverless`` DB engine mode. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration.property.minCapacity">min_capacity</a></code> | <code>typing.Union[int, float]</code> | The minimum capacity for an Aurora DB cluster in ``serverless`` DB engine mode. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration.property.secondsBeforeTimeout">seconds_before_timeout</a></code> | <code>typing.Union[int, float]</code> | The amount of time, in seconds, that Aurora Serverless v1 tries to find a scaling point to perform seamless scaling before enforcing the timeout action. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration.property.secondsUntilAutoPause">seconds_until_auto_pause</a></code> | <code>typing.Union[int, float]</code> | The time, in seconds, before an Aurora DB cluster in ``serverless`` mode is paused. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration.property.timeoutAction">timeout_action</a></code> | <code>str</code> | The action to take when the timeout is reached, either ``ForceApplyCapacityChange`` or ``RollbackCapacityChange``. |

---

##### `auto_pause`<sup>Optional</sup> <a name="auto_pause" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration.property.autoPause"></a>

```python
auto_pause: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether to allow or disallow automatic pause for an Aurora DB cluster in ``serverless`` DB engine mode.

A DB cluster can be paused only when it's idle (it has no connections).
If a DB cluster is paused for more than seven days, the DB cluster might be backed up with a snapshot. In this case, the DB cluster is restored when there is a request to connect to it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#auto_pause RdsDbCluster#auto_pause}

---

##### `max_capacity`<sup>Optional</sup> <a name="max_capacity" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration.property.maxCapacity"></a>

```python
max_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum capacity for an Aurora DB cluster in ``serverless`` DB engine mode.

For Aurora MySQL, valid capacity values are `1`, `2`, `4`, `8`, `16`, `32`, `64`, `128`, and `256`.
For Aurora PostgreSQL, valid capacity values are `2`, `4`, `8`, `16`, `32`, `64`, `192`, and `384`.
The maximum capacity must be greater than or equal to the minimum capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#max_capacity RdsDbCluster#max_capacity}

---

##### `min_capacity`<sup>Optional</sup> <a name="min_capacity" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration.property.minCapacity"></a>

```python
min_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum capacity for an Aurora DB cluster in ``serverless`` DB engine mode.

For Aurora MySQL, valid capacity values are `1`, `2`, `4`, `8`, `16`, `32`, `64`, `128`, and `256`.
For Aurora PostgreSQL, valid capacity values are `2`, `4`, `8`, `16`, `32`, `64`, `192`, and `384`.
The minimum capacity must be less than or equal to the maximum capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#min_capacity RdsDbCluster#min_capacity}

---

##### `seconds_before_timeout`<sup>Optional</sup> <a name="seconds_before_timeout" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration.property.secondsBeforeTimeout"></a>

```python
seconds_before_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of time, in seconds, that Aurora Serverless v1 tries to find a scaling point to perform seamless scaling before enforcing the timeout action.

The default is 300.
Specify a value between 60 and 600 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#seconds_before_timeout RdsDbCluster#seconds_before_timeout}

---

##### `seconds_until_auto_pause`<sup>Optional</sup> <a name="seconds_until_auto_pause" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration.property.secondsUntilAutoPause"></a>

```python
seconds_until_auto_pause: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The time, in seconds, before an Aurora DB cluster in ``serverless`` mode is paused.

Specify a value between 300 and 86,400 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#seconds_until_auto_pause RdsDbCluster#seconds_until_auto_pause}

---

##### `timeout_action`<sup>Optional</sup> <a name="timeout_action" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration.property.timeoutAction"></a>

```python
timeout_action: str
```

- *Type:* str

The action to take when the timeout is reached, either ``ForceApplyCapacityChange`` or ``RollbackCapacityChange``.

`ForceApplyCapacityChange` sets the capacity to the specified value as soon as possible.
`RollbackCapacityChange`, the default, ignores the capacity change if a scaling point isn't found in the timeout period.
If you specify `ForceApplyCapacityChange`, connections that prevent Aurora Serverless v1 from finding a scaling point might be dropped.
For more information, see [Autoscaling for Aurora Serverless v1](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.how-it-works.html#aurora-serverless.how-it-works.auto-scaling) in the *Amazon Aurora User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#timeout_action RdsDbCluster#timeout_action}

---

### RdsDbClusterServerlessV2ScalingConfiguration <a name="RdsDbClusterServerlessV2ScalingConfiguration" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_cluster

rdsDbCluster.RdsDbClusterServerlessV2ScalingConfiguration(
  max_capacity: typing.Union[int, float] = None,
  min_capacity: typing.Union[int, float] = None,
  seconds_until_auto_pause: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfiguration.property.maxCapacity">max_capacity</a></code> | <code>typing.Union[int, float]</code> | The maximum number of Aurora capacity units (ACUs) for a DB instance in an Aurora Serverless v2 cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfiguration.property.minCapacity">min_capacity</a></code> | <code>typing.Union[int, float]</code> | The minimum number of Aurora capacity units (ACUs) for a DB instance in an Aurora Serverless v2 cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfiguration.property.secondsUntilAutoPause">seconds_until_auto_pause</a></code> | <code>typing.Union[int, float]</code> | Specifies the number of seconds an Aurora Serverless v2 DB instance must be idle before Aurora attempts to automatically pause it. |

---

##### `max_capacity`<sup>Optional</sup> <a name="max_capacity" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfiguration.property.maxCapacity"></a>

```python
max_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of Aurora capacity units (ACUs) for a DB instance in an Aurora Serverless v2 cluster.

You can specify ACU values in half-step increments, such as 40, 40.5, 41, and so on. The largest value that you can use is 128.
The maximum capacity must be higher than 0.5 ACUs. For more information, see [Choosing the maximum Aurora Serverless v2 capacity setting for a cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.setting-capacity.html#aurora-serverless-v2.max_capacity_considerations) in the *Amazon Aurora User Guide*.
Aurora automatically sets certain parameters for Aurora Serverless V2 DB instances to values that depend on the maximum ACU value in the capacity range. When you update the maximum capacity value, the `ParameterApplyStatus` value for the DB instance changes to `pending-reboot`. You can update the parameter values by rebooting the DB instance after changing the capacity range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#max_capacity RdsDbCluster#max_capacity}

---

##### `min_capacity`<sup>Optional</sup> <a name="min_capacity" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfiguration.property.minCapacity"></a>

```python
min_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum number of Aurora capacity units (ACUs) for a DB instance in an Aurora Serverless v2 cluster.

You can specify ACU values in half-step increments, such as 8, 8.5, 9, and so on. For Aurora versions that support the Aurora Serverless v2 auto-pause feature, the smallest value that you can use is 0. For versions that don't support Aurora Serverless v2 auto-pause, the smallest value that you can use is 0.5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#min_capacity RdsDbCluster#min_capacity}

---

##### `seconds_until_auto_pause`<sup>Optional</sup> <a name="seconds_until_auto_pause" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfiguration.property.secondsUntilAutoPause"></a>

```python
seconds_until_auto_pause: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the number of seconds an Aurora Serverless v2 DB instance must be idle before Aurora attempts to automatically pause it.

Specify a value between 300 seconds (five minutes) and 86,400 seconds (one day). The default is 300 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#seconds_until_auto_pause RdsDbCluster#seconds_until_auto_pause}

---

### RdsDbClusterTags <a name="RdsDbClusterTags" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTags.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_cluster

rdsDbCluster.RdsDbClusterTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTags.property.key">key</a></code> | <code>str</code> | A key is the required name of the tag. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTags.property.value">value</a></code> | <code>str</code> | A value is the optional value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTags.property.key"></a>

```python
key: str
```

- *Type:* str

A key is the required name of the tag.

The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with `aws:` or `rds:`. The string can only contain only the set of Unicode letters, digits, white-space, '*', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\p{L}\p{Z}\p{N}*.:/=+\-@]*)$").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#key RdsDbCluster#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTags.property.value"></a>

```python
value: str
```

- *Type:* str

A value is the optional value of the tag.

The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with `aws:` or `rds:`. The string can only contain only the set of Unicode letters, digits, white-space, '*', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\p{L}\p{Z}\p{N}*.:/=+\-@]*)$").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#value RdsDbCluster#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RdsDbClusterAssociatedRolesList <a name="RdsDbClusterAssociatedRolesList" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_cluster

rdsDbCluster.RdsDbClusterAssociatedRolesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RdsDbClusterAssociatedRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRoles">RdsDbClusterAssociatedRoles</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RdsDbClusterAssociatedRoles]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRoles">RdsDbClusterAssociatedRoles</a>]

---


### RdsDbClusterAssociatedRolesOutputReference <a name="RdsDbClusterAssociatedRolesOutputReference" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_cluster

rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.resetFeatureName">reset_feature_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_feature_name` <a name="reset_feature_name" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.resetFeatureName"></a>

```python
def reset_feature_name() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.property.featureNameInput">feature_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.property.featureName">feature_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRoles">RdsDbClusterAssociatedRoles</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `feature_name_input`<sup>Optional</sup> <a name="feature_name_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.property.featureNameInput"></a>

```python
feature_name_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `feature_name`<sup>Required</sup> <a name="feature_name" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.property.featureName"></a>

```python
feature_name: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RdsDbClusterAssociatedRoles
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRoles">RdsDbClusterAssociatedRoles</a>

---


### RdsDbClusterEndpointOutputReference <a name="RdsDbClusterEndpointOutputReference" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_cluster

rdsDbCluster.RdsDbClusterEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.property.port">port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpoint">RdsDbClusterEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.property.port"></a>

```python
port: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.property.internalValue"></a>

```python
internal_value: RdsDbClusterEndpoint
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpoint">RdsDbClusterEndpoint</a>

---


### RdsDbClusterMasterUserSecretOutputReference <a name="RdsDbClusterMasterUserSecretOutputReference" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_cluster

rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecret">RdsDbClusterMasterUserSecret</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RdsDbClusterMasterUserSecret
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecret">RdsDbClusterMasterUserSecret</a>

---


### RdsDbClusterReadEndpointOutputReference <a name="RdsDbClusterReadEndpointOutputReference" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_cluster

rdsDbCluster.RdsDbClusterReadEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpoint">RdsDbClusterReadEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.property.internalValue"></a>

```python
internal_value: RdsDbClusterReadEndpoint
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpoint">RdsDbClusterReadEndpoint</a>

---


### RdsDbClusterScalingConfigurationOutputReference <a name="RdsDbClusterScalingConfigurationOutputReference" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_cluster

rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.resetAutoPause">reset_auto_pause</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.resetMaxCapacity">reset_max_capacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.resetMinCapacity">reset_min_capacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.resetSecondsBeforeTimeout">reset_seconds_before_timeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.resetSecondsUntilAutoPause">reset_seconds_until_auto_pause</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.resetTimeoutAction">reset_timeout_action</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auto_pause` <a name="reset_auto_pause" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.resetAutoPause"></a>

```python
def reset_auto_pause() -> None
```

##### `reset_max_capacity` <a name="reset_max_capacity" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.resetMaxCapacity"></a>

```python
def reset_max_capacity() -> None
```

##### `reset_min_capacity` <a name="reset_min_capacity" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.resetMinCapacity"></a>

```python
def reset_min_capacity() -> None
```

##### `reset_seconds_before_timeout` <a name="reset_seconds_before_timeout" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.resetSecondsBeforeTimeout"></a>

```python
def reset_seconds_before_timeout() -> None
```

##### `reset_seconds_until_auto_pause` <a name="reset_seconds_until_auto_pause" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.resetSecondsUntilAutoPause"></a>

```python
def reset_seconds_until_auto_pause() -> None
```

##### `reset_timeout_action` <a name="reset_timeout_action" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.resetTimeoutAction"></a>

```python
def reset_timeout_action() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.autoPauseInput">auto_pause_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.maxCapacityInput">max_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.minCapacityInput">min_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.secondsBeforeTimeoutInput">seconds_before_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.secondsUntilAutoPauseInput">seconds_until_auto_pause_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.timeoutActionInput">timeout_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.autoPause">auto_pause</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.maxCapacity">max_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.minCapacity">min_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.secondsBeforeTimeout">seconds_before_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.secondsUntilAutoPause">seconds_until_auto_pause</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.timeoutAction">timeout_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration">RdsDbClusterScalingConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_pause_input`<sup>Optional</sup> <a name="auto_pause_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.autoPauseInput"></a>

```python
auto_pause_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `max_capacity_input`<sup>Optional</sup> <a name="max_capacity_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.maxCapacityInput"></a>

```python
max_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_capacity_input`<sup>Optional</sup> <a name="min_capacity_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.minCapacityInput"></a>

```python
min_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds_before_timeout_input`<sup>Optional</sup> <a name="seconds_before_timeout_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.secondsBeforeTimeoutInput"></a>

```python
seconds_before_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds_until_auto_pause_input`<sup>Optional</sup> <a name="seconds_until_auto_pause_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.secondsUntilAutoPauseInput"></a>

```python
seconds_until_auto_pause_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_action_input`<sup>Optional</sup> <a name="timeout_action_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.timeoutActionInput"></a>

```python
timeout_action_input: str
```

- *Type:* str

---

##### `auto_pause`<sup>Required</sup> <a name="auto_pause" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.autoPause"></a>

```python
auto_pause: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `max_capacity`<sup>Required</sup> <a name="max_capacity" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.maxCapacity"></a>

```python
max_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_capacity`<sup>Required</sup> <a name="min_capacity" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.minCapacity"></a>

```python
min_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds_before_timeout`<sup>Required</sup> <a name="seconds_before_timeout" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.secondsBeforeTimeout"></a>

```python
seconds_before_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds_until_auto_pause`<sup>Required</sup> <a name="seconds_until_auto_pause" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.secondsUntilAutoPause"></a>

```python
seconds_until_auto_pause: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_action`<sup>Required</sup> <a name="timeout_action" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.timeoutAction"></a>

```python
timeout_action: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RdsDbClusterScalingConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration">RdsDbClusterScalingConfiguration</a>

---


### RdsDbClusterServerlessV2ScalingConfigurationOutputReference <a name="RdsDbClusterServerlessV2ScalingConfigurationOutputReference" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_cluster

rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.resetMaxCapacity">reset_max_capacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.resetMinCapacity">reset_min_capacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.resetSecondsUntilAutoPause">reset_seconds_until_auto_pause</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_capacity` <a name="reset_max_capacity" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.resetMaxCapacity"></a>

```python
def reset_max_capacity() -> None
```

##### `reset_min_capacity` <a name="reset_min_capacity" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.resetMinCapacity"></a>

```python
def reset_min_capacity() -> None
```

##### `reset_seconds_until_auto_pause` <a name="reset_seconds_until_auto_pause" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.resetSecondsUntilAutoPause"></a>

```python
def reset_seconds_until_auto_pause() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.maxCapacityInput">max_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.minCapacityInput">min_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.secondsUntilAutoPauseInput">seconds_until_auto_pause_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.maxCapacity">max_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.minCapacity">min_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.secondsUntilAutoPause">seconds_until_auto_pause</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfiguration">RdsDbClusterServerlessV2ScalingConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_capacity_input`<sup>Optional</sup> <a name="max_capacity_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.maxCapacityInput"></a>

```python
max_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_capacity_input`<sup>Optional</sup> <a name="min_capacity_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.minCapacityInput"></a>

```python
min_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds_until_auto_pause_input`<sup>Optional</sup> <a name="seconds_until_auto_pause_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.secondsUntilAutoPauseInput"></a>

```python
seconds_until_auto_pause_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_capacity`<sup>Required</sup> <a name="max_capacity" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.maxCapacity"></a>

```python
max_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_capacity`<sup>Required</sup> <a name="min_capacity" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.minCapacity"></a>

```python
min_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds_until_auto_pause`<sup>Required</sup> <a name="seconds_until_auto_pause" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.secondsUntilAutoPause"></a>

```python
seconds_until_auto_pause: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RdsDbClusterServerlessV2ScalingConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfiguration">RdsDbClusterServerlessV2ScalingConfiguration</a>

---


### RdsDbClusterTagsList <a name="RdsDbClusterTagsList" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_cluster

rdsDbCluster.RdsDbClusterTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RdsDbClusterTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTags">RdsDbClusterTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RdsDbClusterTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTags">RdsDbClusterTags</a>]

---


### RdsDbClusterTagsOutputReference <a name="RdsDbClusterTagsOutputReference" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_cluster

rdsDbCluster.RdsDbClusterTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTags">RdsDbClusterTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RdsDbClusterTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTags">RdsDbClusterTags</a>

---



