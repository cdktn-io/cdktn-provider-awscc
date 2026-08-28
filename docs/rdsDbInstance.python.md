# `rdsDbInstance` Submodule <a name="`rdsDbInstance` Submodule" id="@cdktn/provider-awscc.rdsDbInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsDbInstance <a name="RdsDbInstance" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance awscc_rds_db_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_instance

rdsDbInstance.RdsDbInstance(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  additional_storage_volumes: IResolvable | typing.List[RdsDbInstanceAdditionalStorageVolumes] = None,
  allocated_storage: str = None,
  allow_major_version_upgrade: bool | IResolvable = None,
  apply_immediately: bool | IResolvable = None,
  associated_roles: IResolvable | typing.List[RdsDbInstanceAssociatedRoles] = None,
  automatic_backup_replication_kms_key_id: str = None,
  automatic_backup_replication_region: str = None,
  automatic_backup_replication_retention_period: typing.Union[int, float] = None,
  auto_minor_version_upgrade: bool | IResolvable = None,
  availability_zone: str = None,
  backup_retention_period: typing.Union[int, float] = None,
  backup_target: str = None,
  ca_certificate_identifier: str = None,
  certificate_rotation_restart: bool | IResolvable = None,
  character_set_name: str = None,
  copy_tags_to_snapshot: bool | IResolvable = None,
  custom_iam_instance_profile: str = None,
  database_insights_mode: str = None,
  db_cluster_identifier: str = None,
  db_cluster_snapshot_identifier: str = None,
  db_instance_class: str = None,
  db_instance_identifier: str = None,
  db_name: str = None,
  db_parameter_group_name: str = None,
  db_security_groups: typing.List[str] = None,
  db_snapshot_identifier: str = None,
  db_subnet_group_name: str = None,
  db_system_id: str = None,
  dedicated_log_volume: bool | IResolvable = None,
  delete_automated_backups: bool | IResolvable = None,
  deletion_protection: bool | IResolvable = None,
  domain: str = None,
  domain_auth_secret_arn: str = None,
  domain_dns_ips: typing.List[str] = None,
  domain_fqdn: str = None,
  domain_iam_role_name: str = None,
  domain_ou: str = None,
  enable_cloudwatch_logs_exports: typing.List[str] = None,
  enable_iam_database_authentication: bool | IResolvable = None,
  enable_performance_insights: bool | IResolvable = None,
  engine: str = None,
  engine_lifecycle_support: str = None,
  engine_version: str = None,
  iops: typing.Union[int, float] = None,
  kms_key_id: str = None,
  license_model: str = None,
  manage_master_user_password: bool | IResolvable = None,
  master_user_authentication_type: str = None,
  master_username: str = None,
  master_user_password: str = None,
  master_user_secret: RdsDbInstanceMasterUserSecret = None,
  max_allocated_storage: typing.Union[int, float] = None,
  monitoring_interval: typing.Union[int, float] = None,
  monitoring_role_arn: str = None,
  multi_az: bool | IResolvable = None,
  nchar_character_set_name: str = None,
  network_type: str = None,
  option_group_name: str = None,
  performance_insights_kms_key_id: str = None,
  performance_insights_retention_period: typing.Union[int, float] = None,
  port: str = None,
  preferred_backup_window: str = None,
  preferred_maintenance_window: str = None,
  processor_features: IResolvable | typing.List[RdsDbInstanceProcessorFeatures] = None,
  promotion_tier: typing.Union[int, float] = None,
  publicly_accessible: bool | IResolvable = None,
  replica_mode: str = None,
  restore_time: str = None,
  source_db_cluster_identifier: str = None,
  source_db_instance_automated_backups_arn: str = None,
  source_db_instance_identifier: str = None,
  source_dbi_resource_id: str = None,
  source_region: str = None,
  storage_encrypted: bool | IResolvable = None,
  storage_throughput: typing.Union[int, float] = None,
  storage_type: str = None,
  tags: IResolvable | typing.List[RdsDbInstanceTags] = None,
  tde_credential_arn: str = None,
  tde_credential_password: str = None,
  timezone: str = None,
  use_default_processor_features: bool | IResolvable = None,
  use_latest_restorable_time: bool | IResolvable = None,
  vpc_security_groups: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.additionalStorageVolumes">additional_storage_volumes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes">RdsDbInstanceAdditionalStorageVolumes</a>]</code> | The additional storage volumes associated with the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.allocatedStorage">allocated_storage</a></code> | <code>str</code> | The amount of storage in gibibytes (GiB) to be initially allocated for the database instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.allowMajorVersionUpgrade">allow_major_version_upgrade</a></code> | <code>bool \| cdktn.IResolvable</code> | A value that indicates whether major version upgrades are allowed. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.applyImmediately">apply_immediately</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether changes to the DB instance and any pending modifications are applied immediately, regardless of the ``PreferredMaintenanceWindow`` setting. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.associatedRoles">associated_roles</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRoles">RdsDbInstanceAssociatedRoles</a>]</code> | The IAMlong (IAM) roles associated with the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.automaticBackupReplicationKmsKeyId">automatic_backup_replication_kms_key_id</a></code> | <code>str</code> | The AWS KMS key identifier for encryption of the replicated automated backups. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.automaticBackupReplicationRegion">automatic_backup_replication_region</a></code> | <code>str</code> | The AWS-Region associated with the automated backup. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.automaticBackupReplicationRetentionPeriod">automatic_backup_replication_retention_period</a></code> | <code>typing.Union[int, float]</code> | The retention period for automated backups in a different AWS Region. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.autoMinorVersionUpgrade">auto_minor_version_upgrade</a></code> | <code>bool \| cdktn.IResolvable</code> | A value that indicates whether minor engine upgrades are applied automatically to the DB instance during the maintenance window. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.availabilityZone">availability_zone</a></code> | <code>str</code> | The Availability Zone (AZ) where the database will be created. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.backupRetentionPeriod">backup_retention_period</a></code> | <code>typing.Union[int, float]</code> | The number of days for which automated backups are retained. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.backupTarget">backup_target</a></code> | <code>str</code> | The location for storing automated backups and manual snapshots. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.caCertificateIdentifier">ca_certificate_identifier</a></code> | <code>str</code> | The identifier of the CA certificate for this DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.certificateRotationRestart">certificate_rotation_restart</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the DB instance is restarted when you rotate your SSL/TLS certificate. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.characterSetName">character_set_name</a></code> | <code>str</code> | For supported engines, indicates that the DB instance should be associated with the specified character set. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.copyTagsToSnapshot">copy_tags_to_snapshot</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether to copy tags from the DB instance to snapshots of the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.customIamInstanceProfile">custom_iam_instance_profile</a></code> | <code>str</code> | The instance profile associated with the underlying Amazon EC2 instance of an RDS Custom DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.databaseInsightsMode">database_insights_mode</a></code> | <code>str</code> | The mode of Database Insights to enable for the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.dbClusterIdentifier">db_cluster_identifier</a></code> | <code>str</code> | The identifier of the DB cluster that this DB instance will belong to. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.dbClusterSnapshotIdentifier">db_cluster_snapshot_identifier</a></code> | <code>str</code> | The identifier for the Multi-AZ DB cluster snapshot to restore from. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.dbInstanceClass">db_instance_class</a></code> | <code>str</code> | The compute and memory capacity of the DB instance, for example ``db.m5.large``. Not all DB instance classes are available in all AWS-Regions, or for all database engines. For the full list of DB instance classes, and availability for your engine, see [DB instance classes](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html) in the *Amazon RDS User Guide* or [Aurora DB instance classes](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.DBInstanceClass.html) in the *Amazon Aurora User Guide*. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.dbInstanceIdentifier">db_instance_identifier</a></code> | <code>str</code> | A name for the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.dbName">db_name</a></code> | <code>str</code> | The meaning of this parameter differs according to the database engine you use. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.dbParameterGroupName">db_parameter_group_name</a></code> | <code>str</code> | The name of an existing DB parameter group or a reference to an [AWS::RDS::DBParameterGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbparametergroup.html) resource created in the template.  To list all of the available DB parameter group names, use the following command:   ``aws rds describe-db-parameter-groups --query "DBParameterGroups[].DBParameterGroupName" --output text``    If any of the data members of the referenced parameter group are changed during an update, the DB instance might need to be restarted, which causes some interruption. If the parameter group contains static parameters, whether they were changed or not, an update triggers a reboot.   If you don't specify a value for ``DBParameterGroupName`` property, the default DB parameter group for the specified engine and engine version is used. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.dbSecurityGroups">db_security_groups</a></code> | <code>typing.List[str]</code> | A list of the DB security groups to assign to the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.dbSnapshotIdentifier">db_snapshot_identifier</a></code> | <code>str</code> | The name or Amazon Resource Name (ARN) of the DB snapshot that's used to restore the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.dbSubnetGroupName">db_subnet_group_name</a></code> | <code>str</code> | A DB subnet group to associate with the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.dbSystemId">db_system_id</a></code> | <code>str</code> | The Oracle system identifier (SID), which is the name of the Oracle database instance that manages your database files. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.dedicatedLogVolume">dedicated_log_volume</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether the DB instance has a dedicated log volume (DLV) enabled. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.deleteAutomatedBackups">delete_automated_backups</a></code> | <code>bool \| cdktn.IResolvable</code> | A value that indicates whether to remove automated backups immediately after the DB instance is deleted. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.deletionProtection">deletion_protection</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the DB instance has deletion protection enabled. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.domain">domain</a></code> | <code>str</code> | The Active Directory directory ID to create the DB instance in. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.domainAuthSecretArn">domain_auth_secret_arn</a></code> | <code>str</code> | The ARN for the Secrets Manager secret with the credentials for the user joining the domain.  Example: ``arn:aws:secretsmanager:region:account-number:secret:myselfmanagedADtestsecret-123456``. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.domainDnsIps">domain_dns_ips</a></code> | <code>typing.List[str]</code> | The IPv4 DNS IP addresses of your primary and secondary Active Directory domain controllers. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.domainFqdn">domain_fqdn</a></code> | <code>str</code> | The fully qualified domain name (FQDN) of an Active Directory domain. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.domainIamRoleName">domain_iam_role_name</a></code> | <code>str</code> | The name of the IAM role to use when making API calls to the Directory Service. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.domainOu">domain_ou</a></code> | <code>str</code> | The Active Directory organizational unit for your DB instance to join. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.enableCloudwatchLogsExports">enable_cloudwatch_logs_exports</a></code> | <code>typing.List[str]</code> | The list of log types that need to be enabled for exporting to CloudWatch Logs. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.enableIamDatabaseAuthentication">enable_iam_database_authentication</a></code> | <code>bool \| cdktn.IResolvable</code> | A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.enablePerformanceInsights">enable_performance_insights</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether to enable Performance Insights for the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.engine">engine</a></code> | <code>str</code> | The name of the database engine to use for this DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.engineLifecycleSupport">engine_lifecycle_support</a></code> | <code>str</code> | The lifecycle type for this DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.engineVersion">engine_version</a></code> | <code>str</code> | The version number of the database engine to use. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.iops">iops</a></code> | <code>typing.Union[int, float]</code> | The number of I/O operations per second (IOPS) that the database provisions. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The ARN of the AWS KMS key that's used to encrypt the DB instance, such as ``arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef``. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.licenseModel">license_model</a></code> | <code>str</code> | License model information for this DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.manageMasterUserPassword">manage_master_user_password</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether to manage the master user password with AWS Secrets Manager. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.masterUserAuthenticationType">master_user_authentication_type</a></code> | <code>str</code> | Specifies the authentication type for the master user. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.masterUsername">master_username</a></code> | <code>str</code> | The master user name for the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.masterUserPassword">master_user_password</a></code> | <code>str</code> | The password for the master user. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.masterUserSecret">master_user_secret</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecret">RdsDbInstanceMasterUserSecret</a></code> | The secret managed by RDS in AWS Secrets Manager for the master user password. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.maxAllocatedStorage">max_allocated_storage</a></code> | <code>typing.Union[int, float]</code> | The upper limit in gibibytes (GiB) to which Amazon RDS can automatically scale the storage of the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.monitoringInterval">monitoring_interval</a></code> | <code>typing.Union[int, float]</code> | The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.monitoringRoleArn">monitoring_role_arn</a></code> | <code>str</code> | The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to Amazon CloudWatch Logs. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.multiAz">multi_az</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the DB instance is a Multi-AZ deployment. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.ncharCharacterSetName">nchar_character_set_name</a></code> | <code>str</code> | The name of the NCHAR character set for the Oracle DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.networkType">network_type</a></code> | <code>str</code> | The network type of the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.optionGroupName">option_group_name</a></code> | <code>str</code> | Indicates that the DB instance should be associated with the specified option group. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.performanceInsightsKmsKeyId">performance_insights_kms_key_id</a></code> | <code>str</code> | The AWS KMS key identifier for encryption of Performance Insights data. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.performanceInsightsRetentionPeriod">performance_insights_retention_period</a></code> | <code>typing.Union[int, float]</code> | The number of days to retain Performance Insights data. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.port">port</a></code> | <code>str</code> | The port number on which the database accepts connections. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.preferredBackupWindow">preferred_backup_window</a></code> | <code>str</code> | The daily time range during which automated backups are created if automated backups are enabled, using the ``BackupRetentionPeriod`` parameter. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.preferredMaintenanceWindow">preferred_maintenance_window</a></code> | <code>str</code> | The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC). |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.processorFeatures">processor_features</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeatures">RdsDbInstanceProcessorFeatures</a>]</code> | The number of CPU cores and the number of threads per core for the DB instance class of the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.promotionTier">promotion_tier</a></code> | <code>typing.Union[int, float]</code> | The order of priority in which an Aurora Replica is promoted to the primary instance after a failure of the existing primary instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.publiclyAccessible">publicly_accessible</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether the DB instance is an internet-facing instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.replicaMode">replica_mode</a></code> | <code>str</code> | The open mode of an Oracle read replica. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.restoreTime">restore_time</a></code> | <code>str</code> | The date and time to restore from. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.sourceDbClusterIdentifier">source_db_cluster_identifier</a></code> | <code>str</code> | The identifier of the Multi-AZ DB cluster that will act as the source for the read replica. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.sourceDbInstanceAutomatedBackupsArn">source_db_instance_automated_backups_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the replicated automated backups from which to restore, for example, ``arn:aws:rds:us-east-1:123456789012:auto-backup:ab-L2IJCEXJP7XQ7HOJ4SIEXAMPLE``. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.sourceDbInstanceIdentifier">source_db_instance_identifier</a></code> | <code>str</code> | If you want to create a read replica DB instance, specify the ID of the source DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.sourceDbiResourceId">source_dbi_resource_id</a></code> | <code>str</code> | The resource ID of the source DB instance from which to restore. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.sourceRegion">source_region</a></code> | <code>str</code> | The ID of the region that contains the source DB instance for the read replica. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.storageEncrypted">storage_encrypted</a></code> | <code>bool \| cdktn.IResolvable</code> | A value that indicates whether the DB instance is encrypted. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.storageThroughput">storage_throughput</a></code> | <code>typing.Union[int, float]</code> | Specifies the storage throughput value, in mebibyte per second (MiBps), for the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.storageType">storage_type</a></code> | <code>str</code> | The storage type to associate with the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTags">RdsDbInstanceTags</a>]</code> | Tags to assign to the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.tdeCredentialArn">tde_credential_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#tde_credential_arn RdsDbInstance#tde_credential_arn}. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.tdeCredentialPassword">tde_credential_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#tde_credential_password RdsDbInstance#tde_credential_password}. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.timezone">timezone</a></code> | <code>str</code> | The time zone of the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.useDefaultProcessorFeatures">use_default_processor_features</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the DB instance class of the DB instance uses its default processor features. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.useLatestRestorableTime">use_latest_restorable_time</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the DB instance is restored from the latest backup time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.vpcSecurityGroups">vpc_security_groups</a></code> | <code>typing.List[str]</code> | A list of the VPC security group IDs to assign to the DB instance. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `additional_storage_volumes`<sup>Optional</sup> <a name="additional_storage_volumes" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.additionalStorageVolumes"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes">RdsDbInstanceAdditionalStorageVolumes</a>]

The additional storage volumes associated with the DB instance.

RDS supports additional storage volumes for RDS for Oracle and RDS for SQL Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#additional_storage_volumes RdsDbInstance#additional_storage_volumes}

---

##### `allocated_storage`<sup>Optional</sup> <a name="allocated_storage" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.allocatedStorage"></a>

- *Type:* str

The amount of storage in gibibytes (GiB) to be initially allocated for the database instance.

If any value is set in the `Iops` parameter, `AllocatedStorage` must be at least 100 GiB, which corresponds to the minimum Iops value of 1,000. If you increase the `Iops` value (in 1,000 IOPS increments), then you must also increase the `AllocatedStorage` value (in 100-GiB increments).
*Amazon Aurora*
Not applicable. Aurora cluster volumes automatically grow as the amount of data in your database increases, though you are only charged for the space that you use in an Aurora cluster volume.
*Db2*
Constraints to the amount of storage for each storage type are the following:

* General Purpose (SSD) storage (gp3): Must be an integer from 20 to 64000.
* Provisioned IOPS storage (io1): Must be an integer from 100 to 64000.

*MySQL*
Constraints to the amount of storage for each storage type are the following:

* General Purpose (SSD) storage (gp2): Must be an integer from 20 to 65536.
* Provisioned IOPS storage (io1): Must be an integer from 100 to 65536.
* Magnetic storage (standard): Must be an integer from 5 to 3072.

*MariaDB*
Constraints to the amount of storage for each storage type are the following:

* General Purpose (SSD) storage (gp2): Must be an integer from 20 to 65536.
* Provisioned IOPS storage (io1): Must be an integer from 100 to 65536.
* Magnetic storage (standard): Must be an integer from 5 to 3072.

*PostgreSQL*
Constraints to the amount of storage for each storage type are the following:

* General Purpose (SSD) storage (gp2): Must be an integer from 20 to 65536.
* Provisioned IOPS storage (io1): Must be an integer from 100 to 65536.
* Magnetic storage (standard): Must be an integer from 5 to 3072.

*Oracle*
Constraints to the amount of storage for each storage type are the following:

* General Purpose (SSD) storage (gp2): Must be an integer from 20 to 65536.
* Provisioned IOPS storage (io1): Must be an integer from 100 to 65536.
* Magnetic storage (standard): Must be an integer from 10 to 3072.

*SQL Server*
Constraints to the amount of storage for each storage type are the following:

* General Purpose (SSD) storage (gp2):
* Enterprise and Standard editions: Must be an integer from 20 to 16384.
* Web and Express editions: Must be an integer from 20 to 16384.
* Provisioned IOPS storage (io1):
* Enterprise and Standard editions: Must be an integer from 20 to 16384.
* Web and Express editions: Must be an integer from 20 to 16384.
* Magnetic storage (standard):
* Enterprise and Standard editions: Must be an integer from 20 to 1024.
* Web and Express editions: Must be an integer from 20 to 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#allocated_storage RdsDbInstance#allocated_storage}

---

##### `allow_major_version_upgrade`<sup>Optional</sup> <a name="allow_major_version_upgrade" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.allowMajorVersionUpgrade"></a>

- *Type:* bool | cdktn.IResolvable

A value that indicates whether major version upgrades are allowed.

Changing this parameter doesn't result in an outage and the change is asynchronously applied as soon as possible.
Constraints: Major version upgrades must be allowed when specifying a value for the `EngineVersion` parameter that is a different major version than the DB instance's current version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#allow_major_version_upgrade RdsDbInstance#allow_major_version_upgrade}

---

##### `apply_immediately`<sup>Optional</sup> <a name="apply_immediately" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.applyImmediately"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether changes to the DB instance and any pending modifications are applied immediately, regardless of the ``PreferredMaintenanceWindow`` setting.

If set to `false`, changes are applied during the next maintenance window. Until RDS applies the changes, the DB instance remains in a drift state. As a result, the configuration doesn't fully reflect the requested modifications and temporarily diverges from the intended state.
In addition to the settings described in [Modifying a DB instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBInstance.Modifying.html), this property also determines whether the DB instance reboots when a static parameter is modified in the associated DB parameter group.
Default: `true`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#apply_immediately RdsDbInstance#apply_immediately}

---

##### `associated_roles`<sup>Optional</sup> <a name="associated_roles" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.associatedRoles"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRoles">RdsDbInstanceAssociatedRoles</a>]

The IAMlong (IAM) roles associated with the DB instance.

*Amazon Aurora*
Not applicable. The associated roles are managed by the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#associated_roles RdsDbInstance#associated_roles}

---

##### `automatic_backup_replication_kms_key_id`<sup>Optional</sup> <a name="automatic_backup_replication_kms_key_id" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.automaticBackupReplicationKmsKeyId"></a>

- *Type:* str

The AWS KMS key identifier for encryption of the replicated automated backups.

The KMS key ID is the Amazon Resource Name (ARN) for the KMS encryption key in the destination AWS-Region, for example, `arn:aws:kms:us-east-1:123456789012:key/AKIAIOSFODNN7EXAMPLE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#automatic_backup_replication_kms_key_id RdsDbInstance#automatic_backup_replication_kms_key_id}

---

##### `automatic_backup_replication_region`<sup>Optional</sup> <a name="automatic_backup_replication_region" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.automaticBackupReplicationRegion"></a>

- *Type:* str

The AWS-Region associated with the automated backup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#automatic_backup_replication_region RdsDbInstance#automatic_backup_replication_region}

---

##### `automatic_backup_replication_retention_period`<sup>Optional</sup> <a name="automatic_backup_replication_retention_period" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.automaticBackupReplicationRetentionPeriod"></a>

- *Type:* typing.Union[int, float]

The retention period for automated backups in a different AWS Region.

Use this parameter to set a unique retention period that only applies to cross-Region automated backups. To enable automated backups in a different Region, specify a positive value for the `AutomaticBackupReplicationRegion` parameter.
If not specified, this parameter defaults to the value of the `BackupRetentionPeriod` parameter. The maximum allowed value is 35.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#automatic_backup_replication_retention_period RdsDbInstance#automatic_backup_replication_retention_period}

---

##### `auto_minor_version_upgrade`<sup>Optional</sup> <a name="auto_minor_version_upgrade" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.autoMinorVersionUpgrade"></a>

- *Type:* bool | cdktn.IResolvable

A value that indicates whether minor engine upgrades are applied automatically to the DB instance during the maintenance window.

By default, minor engine upgrades are applied automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#auto_minor_version_upgrade RdsDbInstance#auto_minor_version_upgrade}

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.availabilityZone"></a>

- *Type:* str

The Availability Zone (AZ) where the database will be created.

For information on AWS-Regions and Availability Zones, see [Regions and Availability Zones](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html).
For Amazon Aurora, each Aurora DB cluster hosts copies of its storage in three separate Availability Zones. Specify one of these Availability Zones. Aurora automatically chooses an appropriate Availability Zone if you don't specify one.
Default: A random, system-chosen Availability Zone in the endpoint's AWS-Region.
Constraints:

* The `AvailabilityZone` parameter can't be specified if the DB instance is a Multi-AZ deployment.
* The specified Availability Zone must be in the same AWS-Region as the current endpoint.

Example: `us-east-1d`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#availability_zone RdsDbInstance#availability_zone}

---

##### `backup_retention_period`<sup>Optional</sup> <a name="backup_retention_period" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.backupRetentionPeriod"></a>

- *Type:* typing.Union[int, float]

The number of days for which automated backups are retained.

Setting this parameter to a positive number enables backups. Setting this parameter to 0 disables automated backups.
*Amazon Aurora*
Not applicable. The retention period for automated backups is managed by the DB cluster.
Default: 1
Constraints:

* Must be a value from 0 to 35
* Can't be set to 0 if the DB instance is a source to read replicas

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#backup_retention_period RdsDbInstance#backup_retention_period}

---

##### `backup_target`<sup>Optional</sup> <a name="backup_target" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.backupTarget"></a>

- *Type:* str

The location for storing automated backups and manual snapshots.

Valid Values:

* `local` (Dedicated Local Zone)
* `outposts` (AWS Outposts)
* `region` (AWS-Region)

Default: `region`
For more information, see [Working with Amazon RDS on Outposts](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-on-outposts.html) in the *Amazon RDS User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#backup_target RdsDbInstance#backup_target}

---

##### `ca_certificate_identifier`<sup>Optional</sup> <a name="ca_certificate_identifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.caCertificateIdentifier"></a>

- *Type:* str

The identifier of the CA certificate for this DB instance.

For more information, see [Using SSL/TLS to encrypt a connection to a DB instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html) in the *Amazon RDS User Guide* and [Using SSL/TLS to encrypt a connection to a DB cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL.html) in the *Amazon Aurora User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#ca_certificate_identifier RdsDbInstance#ca_certificate_identifier}

---

##### `certificate_rotation_restart`<sup>Optional</sup> <a name="certificate_rotation_restart" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.certificateRotationRestart"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether the DB instance is restarted when you rotate your SSL/TLS certificate.

By default, the DB instance is restarted when you rotate your SSL/TLS certificate. The certificate is not updated until the DB instance is restarted.
Set this parameter only if you are *not* using SSL/TLS to connect to the DB instance.
If you are using SSL/TLS to connect to the DB instance, follow the appropriate instructions for your DB engine to rotate your SSL/TLS certificate:

* For more information about rotating your SSL/TLS certificate for RDS DB engines, see [Rotating Your SSL/TLS Certificate.](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL-certificate-rotation.html) in the *Amazon RDS User Guide.*
* For more information about rotating your SSL/TLS certificate for Aurora DB engines, see [Rotating Your SSL/TLS Certificate](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL-certificate-rotation.html) in the *Amazon Aurora User Guide*.

This setting doesn't apply to RDS Custom DB instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#certificate_rotation_restart RdsDbInstance#certificate_rotation_restart}

---

##### `character_set_name`<sup>Optional</sup> <a name="character_set_name" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.characterSetName"></a>

- *Type:* str

For supported engines, indicates that the DB instance should be associated with the specified character set.

*Amazon Aurora*
Not applicable. The character set is managed by the DB cluster. For more information, see [AWS::RDS::DBCluster](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#character_set_name RdsDbInstance#character_set_name}

---

##### `copy_tags_to_snapshot`<sup>Optional</sup> <a name="copy_tags_to_snapshot" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.copyTagsToSnapshot"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether to copy tags from the DB instance to snapshots of the DB instance.

By default, tags are not copied.
This setting doesn't apply to Amazon Aurora DB instances. Copying tags to snapshots is managed by the DB cluster. Setting this value for an Aurora DB instance has no effect on the DB cluster setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#copy_tags_to_snapshot RdsDbInstance#copy_tags_to_snapshot}

---

##### `custom_iam_instance_profile`<sup>Optional</sup> <a name="custom_iam_instance_profile" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.customIamInstanceProfile"></a>

- *Type:* str

The instance profile associated with the underlying Amazon EC2 instance of an RDS Custom DB instance.

This setting is required for RDS Custom.
Constraints:

* The profile must exist in your account.
* The profile must have an IAM role that Amazon EC2 has permissions to assume.
* The instance profile name and the associated IAM role name must start with the prefix `AWSRDSCustom`.

For the list of permissions required for the IAM role, see [Configure IAM and your VPC](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-setup-orcl.html#custom-setup-orcl.iam-vpc) in the *Amazon RDS User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#custom_iam_instance_profile RdsDbInstance#custom_iam_instance_profile}

---

##### `database_insights_mode`<sup>Optional</sup> <a name="database_insights_mode" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.databaseInsightsMode"></a>

- *Type:* str

The mode of Database Insights to enable for the DB instance.

Aurora DB instances inherit this value from the DB cluster, so you can't change this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#database_insights_mode RdsDbInstance#database_insights_mode}

---

##### `db_cluster_identifier`<sup>Optional</sup> <a name="db_cluster_identifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.dbClusterIdentifier"></a>

- *Type:* str

The identifier of the DB cluster that this DB instance will belong to.

This setting doesn't apply to RDS Custom DB instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#db_cluster_identifier RdsDbInstance#db_cluster_identifier}

---

##### `db_cluster_snapshot_identifier`<sup>Optional</sup> <a name="db_cluster_snapshot_identifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.dbClusterSnapshotIdentifier"></a>

- *Type:* str

The identifier for the Multi-AZ DB cluster snapshot to restore from.

For more information on Multi-AZ DB clusters, see [Multi-AZ DB cluster deployments](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html) in the *Amazon RDS User Guide*.
Constraints:

* Must match the identifier of an existing Multi-AZ DB cluster snapshot.
* Can't be specified when `DBSnapshotIdentifier` is specified.
* Must be specified when `DBSnapshotIdentifier` isn't specified.
* If you are restoring from a shared manual Multi-AZ DB cluster snapshot, the `DBClusterSnapshotIdentifier` must be the ARN of the shared snapshot.
* Can't be the identifier of an Aurora DB cluster snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#db_cluster_snapshot_identifier RdsDbInstance#db_cluster_snapshot_identifier}

---

##### `db_instance_class`<sup>Optional</sup> <a name="db_instance_class" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.dbInstanceClass"></a>

- *Type:* str

The compute and memory capacity of the DB instance, for example ``db.m5.large``. Not all DB instance classes are available in all AWS-Regions, or for all database engines. For the full list of DB instance classes, and availability for your engine, see [DB instance classes](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html) in the *Amazon RDS User Guide* or [Aurora DB instance classes](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.DBInstanceClass.html) in the *Amazon Aurora User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#db_instance_class RdsDbInstance#db_instance_class}

---

##### `db_instance_identifier`<sup>Optional</sup> <a name="db_instance_identifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.dbInstanceIdentifier"></a>

- *Type:* str

A name for the DB instance.

If you specify a name, AWS CloudFormation converts it to lowercase. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the DB instance. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
For information about constraints that apply to DB instance identifiers, see [Naming constraints in Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Limits.html#RDS_Limits.Constraints) in the *Amazon RDS User Guide*.
If you specify a name, you can't perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#db_instance_identifier RdsDbInstance#db_instance_identifier}

---

##### `db_name`<sup>Optional</sup> <a name="db_name" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.dbName"></a>

- *Type:* str

The meaning of this parameter differs according to the database engine you use.

If you specify the `DBSnapshotIdentifier` property, this property only applies to RDS for Oracle.
*Amazon Aurora*
Not applicable. The database name is managed by the DB cluster.
*Db2*
The name of the database to create when the DB instance is created. If this parameter isn't specified, no database is created in the DB instance.
Constraints:

* Must contain 1 to 64 letters or numbers.
* Must begin with a letter. Subsequent characters can be letters, underscores, or digits (0-9).
* Can't be a word reserved by the specified database engine.

*MySQL*
The name of the database to create when the DB instance is created. If this parameter is not specified, no database is created in the DB instance.
Constraints:

* Must contain 1 to 64 letters or numbers.
* Can't be a word reserved by the specified database engine

*MariaDB*
The name of the database to create when the DB instance is created. If this parameter is not specified, no database is created in the DB instance.
Constraints:

* Must contain 1 to 64 letters or numbers.
* Can't be a word reserved by the specified database engine

*PostgreSQL*
The name of the database to create when the DB instance is created. If this parameter is not specified, the default `postgres` database is created in the DB instance.
Constraints:

* Must begin with a letter. Subsequent characters can be letters, underscores, or digits (0-9).
* Must contain 1 to 63 characters.
* Can't be a word reserved by the specified database engine

*Oracle*
The Oracle System ID (SID) of the created DB instance. If you specify `null`, the default value `ORCL` is used. You can't specify the string NULL, or any other reserved word, for `DBName`.
Default: `ORCL`
Constraints:

* Can't be longer than 8 characters

*SQL Server*
Not applicable. Must be null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#db_name RdsDbInstance#db_name}

---

##### `db_parameter_group_name`<sup>Optional</sup> <a name="db_parameter_group_name" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.dbParameterGroupName"></a>

- *Type:* str

The name of an existing DB parameter group or a reference to an [AWS::RDS::DBParameterGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbparametergroup.html) resource created in the template.  To list all of the available DB parameter group names, use the following command:   ``aws rds describe-db-parameter-groups --query "DBParameterGroups[].DBParameterGroupName" --output text``    If any of the data members of the referenced parameter group are changed during an update, the DB instance might need to be restarted, which causes some interruption. If the parameter group contains static parameters, whether they were changed or not, an update triggers a reboot.   If you don't specify a value for ``DBParameterGroupName`` property, the default DB parameter group for the specified engine and engine version is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#db_parameter_group_name RdsDbInstance#db_parameter_group_name}

---

##### `db_security_groups`<sup>Optional</sup> <a name="db_security_groups" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.dbSecurityGroups"></a>

- *Type:* typing.List[str]

A list of the DB security groups to assign to the DB instance.

The list can include both the name of existing DB security groups or references to AWS::RDS::DBSecurityGroup resources created in the template.
If you set DBSecurityGroups, you must not set VPCSecurityGroups, and vice versa. Also, note that the DBSecurityGroups property exists only for backwards compatibility with older regions and is no longer recommended for providing security information to an RDS DB instance. Instead, use VPCSecurityGroups.
If you specify this property, AWS CloudFormation sends only the following properties (if specified) to Amazon RDS during create operations:

* `AllocatedStorage`
* `AutoMinorVersionUpgrade`
* `AvailabilityZone`
* `BackupRetentionPeriod`
* `CharacterSetName`
* `DBInstanceClass`
* `DBName`
* `DBParameterGroupName`
* `DBSecurityGroups`
* `DBSubnetGroupName`
* `Engine`
* `EngineVersion`
* `Iops`
* `LicenseModel`
* `MasterUsername`
* `MasterUserPassword`
* `MultiAZ`
* `OptionGroupName`
* `PreferredBackupWindow`
* `PreferredMaintenanceWindow`

All other properties are ignored. Specify a virtual private cloud (VPC) security group if you want to submit other properties, such as `StorageType`, `StorageEncrypted`, or `KmsKeyId`. If you're already using the `DBSecurityGroups` property, you can't use these other properties by updating your DB instance to use a VPC security group. You must recreate the DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#db_security_groups RdsDbInstance#db_security_groups}

---

##### `db_snapshot_identifier`<sup>Optional</sup> <a name="db_snapshot_identifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.dbSnapshotIdentifier"></a>

- *Type:* str

The name or Amazon Resource Name (ARN) of the DB snapshot that's used to restore the DB instance.

If you're restoring from a shared manual DB snapshot, you must specify the ARN of the snapshot.
By specifying this property, you can create a DB instance from the specified DB snapshot. If the `DBSnapshotIdentifier` property is an empty string or the `AWS::RDS::DBInstance` declaration has no `DBSnapshotIdentifier` property, AWS CloudFormation creates a new database. If the property contains a value (other than an empty string), AWS CloudFormation creates a database from the specified snapshot. If a snapshot with the specified name doesn't exist, AWS CloudFormation can't create the database and it rolls back the stack.
Some DB instance properties aren't valid when you restore from a snapshot, such as the `MasterUsername` and `MasterUserPassword` properties, and the point-in-time recovery properties `RestoreTime` and `UseLatestRestorableTime`. For information about the properties that you can specify, see the [RestoreDBInstanceFromDBSnapshot](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RestoreDBInstanceFromDBSnapshot.html) action in the *Amazon RDS API Reference*.
When you specify the same `DBSnapshotIdentifier` property value for an update, the DB instance is not restored from the DB snapshot again, and the data in the database is not changed. If you specify a different `DBSnapshotIdentifier` value, a new DB instance is restored from the specified snapshot, and the original DB instance is deleted.
If you specify the `DBSnapshotIdentifier` property to restore a DB instance (as opposed to specifying it for DB instance updates), then don't specify the following properties:

* `CharacterSetName`
* `DBClusterIdentifier`
* `DBName`
* `KmsKeyId`
* `MasterUsername`
* `MasterUserPassword`
* `PromotionTier`
* `SourceDBInstanceIdentifier`
* `SourceRegion`
* `StorageEncrypted` (for an unencrypted snapshot)
* `Timezone`

*Amazon Aurora*
Not applicable. Snapshot restore is managed by the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#db_snapshot_identifier RdsDbInstance#db_snapshot_identifier}

---

##### `db_subnet_group_name`<sup>Optional</sup> <a name="db_subnet_group_name" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.dbSubnetGroupName"></a>

- *Type:* str

A DB subnet group to associate with the DB instance.

If you update this value, the new subnet group must be a subnet group in a new VPC.
If you don't specify a DB subnet group, RDS uses the default DB subnet group if one exists. If a default DB subnet group does not exist, and you don't specify a `DBSubnetGroupName`, the DB instance fails to launch.
For more information about using Amazon RDS in a VPC, see [Amazon VPC and Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.html) in the *Amazon RDS User Guide*.
This setting doesn't apply to Amazon Aurora DB instances. The DB subnet group is managed by the DB cluster. If specified, the setting must match the DB cluster setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#db_subnet_group_name RdsDbInstance#db_subnet_group_name}

---

##### `db_system_id`<sup>Optional</sup> <a name="db_system_id" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.dbSystemId"></a>

- *Type:* str

The Oracle system identifier (SID), which is the name of the Oracle database instance that manages your database files.

In this context, the term "Oracle database instance" refers exclusively to the system global area (SGA) and Oracle background processes. If you don't specify a SID, the value defaults to `RDSCDB`. The Oracle SID is also the name of your CDB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#db_system_id RdsDbInstance#db_system_id}

---

##### `dedicated_log_volume`<sup>Optional</sup> <a name="dedicated_log_volume" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.dedicatedLogVolume"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether the DB instance has a dedicated log volume (DLV) enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#dedicated_log_volume RdsDbInstance#dedicated_log_volume}

---

##### `delete_automated_backups`<sup>Optional</sup> <a name="delete_automated_backups" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.deleteAutomatedBackups"></a>

- *Type:* bool | cdktn.IResolvable

A value that indicates whether to remove automated backups immediately after the DB instance is deleted.

This parameter isn't case-sensitive. The default is to remove automated backups immediately after the DB instance is deleted.
*Amazon Aurora*
Not applicable. When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered. Manual DB cluster snapshots of the DB cluster are not deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#delete_automated_backups RdsDbInstance#delete_automated_backups}

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.deletionProtection"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether the DB instance has deletion protection enabled.

The database can't be deleted when deletion protection is enabled. By default, deletion protection isn't enabled. For more information, see [Deleting a DB Instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_DeleteInstance.html).
This setting doesn't apply to Amazon Aurora DB instances. You can enable or disable deletion protection for the DB cluster. For more information, see `CreateDBCluster`. DB instances in a DB cluster can be deleted even when deletion protection is enabled for the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#deletion_protection RdsDbInstance#deletion_protection}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.domain"></a>

- *Type:* str

The Active Directory directory ID to create the DB instance in.

Currently, only Db2, MySQL, Microsoft SQL Server, Oracle, and PostgreSQL DB instances can be created in an Active Directory Domain.
For more information, see [Kerberos Authentication](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/kerberos-authentication.html) in the *Amazon RDS User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#domain RdsDbInstance#domain}

---

##### `domain_auth_secret_arn`<sup>Optional</sup> <a name="domain_auth_secret_arn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.domainAuthSecretArn"></a>

- *Type:* str

The ARN for the Secrets Manager secret with the credentials for the user joining the domain.  Example: ``arn:aws:secretsmanager:region:account-number:secret:myselfmanagedADtestsecret-123456``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#domain_auth_secret_arn RdsDbInstance#domain_auth_secret_arn}

---

##### `domain_dns_ips`<sup>Optional</sup> <a name="domain_dns_ips" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.domainDnsIps"></a>

- *Type:* typing.List[str]

The IPv4 DNS IP addresses of your primary and secondary Active Directory domain controllers.

Constraints:

* Two IP addresses must be provided. If there isn't a secondary domain controller, use the IP address of the primary domain controller for both entries in the list.

Example: `123.124.125.126,234.235.236.237`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#domain_dns_ips RdsDbInstance#domain_dns_ips}

---

##### `domain_fqdn`<sup>Optional</sup> <a name="domain_fqdn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.domainFqdn"></a>

- *Type:* str

The fully qualified domain name (FQDN) of an Active Directory domain.

Constraints:

* Can't be longer than 64 characters.

Example: `mymanagedADtest.mymanagedAD.mydomain`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#domain_fqdn RdsDbInstance#domain_fqdn}

---

##### `domain_iam_role_name`<sup>Optional</sup> <a name="domain_iam_role_name" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.domainIamRoleName"></a>

- *Type:* str

The name of the IAM role to use when making API calls to the Directory Service.

This setting doesn't apply to the following DB instances:

* Amazon Aurora (The domain is managed by the DB cluster.)
* RDS Custom

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#domain_iam_role_name RdsDbInstance#domain_iam_role_name}

---

##### `domain_ou`<sup>Optional</sup> <a name="domain_ou" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.domainOu"></a>

- *Type:* str

The Active Directory organizational unit for your DB instance to join.

Constraints:

* Must be in the distinguished name format.
* Can't be longer than 64 characters.

Example: `OU=mymanagedADtestOU,DC=mymanagedADtest,DC=mymanagedAD,DC=mydomain`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#domain_ou RdsDbInstance#domain_ou}

---

##### `enable_cloudwatch_logs_exports`<sup>Optional</sup> <a name="enable_cloudwatch_logs_exports" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.enableCloudwatchLogsExports"></a>

- *Type:* typing.List[str]

The list of log types that need to be enabled for exporting to CloudWatch Logs.

The values in the list depend on the DB engine being used. For more information, see [Publishing Database Logs to Amazon CloudWatch Logs](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch) in the *Amazon Relational Database Service User Guide*.
*Amazon Aurora*
Not applicable. CloudWatch Logs exports are managed by the DB cluster.
*Db2*
Valid values: `diag.log`, `notify.log`
*MariaDB*
Valid values: `audit`, `error`, `general`, `slowquery`
*Microsoft SQL Server*
Valid values: `agent`, `error`
*MySQL*
Valid values: `audit`, `error`, `general`, `slowquery`
*Oracle*
Valid values: `alert`, `audit`, `listener`, `trace`, `oemagent`
*PostgreSQL*
Valid values: `postgresql`, `upgrade`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#enable_cloudwatch_logs_exports RdsDbInstance#enable_cloudwatch_logs_exports}

---

##### `enable_iam_database_authentication`<sup>Optional</sup> <a name="enable_iam_database_authentication" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.enableIamDatabaseAuthentication"></a>

- *Type:* bool | cdktn.IResolvable

A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts.

By default, mapping is disabled.
This property is supported for RDS for MariaDB, RDS for MySQL, and RDS for PostgreSQL. For more information, see [IAM Database Authentication for MariaDB, MySQL, and PostgreSQL](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html) in the *Amazon RDS User Guide.*
*Amazon Aurora*
Not applicable. Mapping AWS IAM accounts to database accounts is managed by the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#enable_iam_database_authentication RdsDbInstance#enable_iam_database_authentication}

---

##### `enable_performance_insights`<sup>Optional</sup> <a name="enable_performance_insights" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.enablePerformanceInsights"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether to enable Performance Insights for the DB instance.

For more information, see [Using Amazon Performance Insights](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html) in the *Amazon RDS User Guide*.
This setting doesn't apply to RDS Custom DB instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#enable_performance_insights RdsDbInstance#enable_performance_insights}

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.engine"></a>

- *Type:* str

The name of the database engine to use for this DB instance.

Not every database engine is available in every AWS Region.
This property is required when creating a DB instance.
You can convert an Oracle database from the non-CDB architecture to the container database (CDB) architecture by updating the `Engine` value in your templates from `oracle-ee` to `oracle-ee-cdb` or from `oracle-se2` to `oracle-se2-cdb`. Converting to the CDB architecture requires an interruption.
Valid Values:

* `aurora-mysql` (for Aurora MySQL DB instances)
* `aurora-postgresql` (for Aurora PostgreSQL DB instances)
* `custom-oracle-ee` (for RDS Custom for Oracle DB instances)
* `custom-oracle-ee-cdb` (for RDS Custom for Oracle DB instances)
* `custom-sqlserver-ee` (for RDS Custom for SQL Server DB instances)
* `custom-sqlserver-se` (for RDS Custom for SQL Server DB instances)
* `custom-sqlserver-web` (for RDS Custom for SQL Server DB instances)
* `db2-ae`
* `db2-se`
* `mariadb`
* `mysql`
* `oracle-ee`
* `oracle-ee-cdb`
* `oracle-se2`
* `oracle-se2-cdb`
* `postgres`
* `sqlserver-ee`
* `sqlserver-se`
* `sqlserver-ex`
* `sqlserver-web`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#engine RdsDbInstance#engine}

---

##### `engine_lifecycle_support`<sup>Optional</sup> <a name="engine_lifecycle_support" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.engineLifecycleSupport"></a>

- *Type:* str

The lifecycle type for this DB instance.

By default, this value is set to `open-source-rds-extended-support`, which enrolls your DB instance into Amazon RDS Extended Support. At the end of standard support, you can avoid charges for Extended Support by setting the value to `open-source-rds-extended-support-disabled`. In this case, creating the DB instance will fail if the DB major version is past its end of standard support date.
This setting applies only to RDS for MySQL and RDS for PostgreSQL. For Amazon Aurora DB instances, the engine lifecycle support is managed by the DB cluster.
You can use this setting to enroll your DB instance into Amazon RDS Extended Support. With RDS Extended Support, you can run the selected major engine version on your DB instance past the end of standard support for that engine version. For more information, see [Amazon RDS Extended Support with Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/extended-support.html) in the *Amazon RDS User Guide*.
Valid Values: `open-source-rds-extended-support | open-source-rds-extended-support-disabled`
Default: `open-source-rds-extended-support`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#engine_lifecycle_support RdsDbInstance#engine_lifecycle_support}

---

##### `engine_version`<sup>Optional</sup> <a name="engine_version" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.engineVersion"></a>

- *Type:* str

The version number of the database engine to use.

For a list of valid engine versions, use the `DescribeDBEngineVersions` action.
The following are the database engines and links to information about the major and minor versions that are available with Amazon RDS. Not every database engine is available for every AWS Region.
*Amazon Aurora*
Not applicable. The version number of the database engine to be used by the DB instance is managed by the DB cluster.
*Db2*
See [Amazon RDS for Db2](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Db2.html#Db2.Concepts.VersionMgmt) in the *Amazon RDS User Guide.*
*MariaDB*
See [MariaDB on Amazon RDS Versions](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_MariaDB.html#MariaDB.Concepts.VersionMgmt) in the *Amazon RDS User Guide.*
*Microsoft SQL Server*
See [Microsoft SQL Server Versions on Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_SQLServer.html#SQLServer.Concepts.General.VersionSupport) in the *Amazon RDS User Guide.*
*MySQL*
See [MySQL on Amazon RDS Versions](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_MySQL.html#MySQL.Concepts.VersionMgmt) in the *Amazon RDS User Guide.*
*Oracle*
See [Oracle Database Engine Release Notes](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.Oracle.PatchComposition.html) in the *Amazon RDS User Guide.*
*PostgreSQL*
See [Supported PostgreSQL Database Versions](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_PostgreSQL.html#PostgreSQL.Concepts.General.DBVersions) in the *Amazon RDS User Guide.*

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#engine_version RdsDbInstance#engine_version}

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.iops"></a>

- *Type:* typing.Union[int, float]

The number of I/O operations per second (IOPS) that the database provisions.

The value must be equal to or greater than 1000.
If you specify this property, you must follow the range of allowed ratios of your requested IOPS rate to the amount of storage that you allocate (IOPS to allocated storage). For example, you can provision an Oracle database instance with 1000 IOPS and 200 GiB of storage (a ratio of 5:1), or specify 2000 IOPS with 200 GiB of storage (a ratio of 10:1). For more information, see [Amazon RDS Provisioned IOPS Storage to Improve Performance](https://docs.aws.amazon.com/AmazonRDS/latest/DeveloperGuide/CHAP_Storage.html#USER_PIOPS) in the *Amazon RDS User Guide*.
If you specify `io1` for the `StorageType` property, then you must also specify the `Iops` property.
Constraints:

* For RDS for Db2, MariaDB, MySQL, Oracle, and PostgreSQL - Must be a multiple between .5 and 50 of the storage amount for the DB instance.
* For RDS for SQL Server - Must be a multiple between 1 and 50 of the storage amount for the DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#iops RdsDbInstance#iops}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

The ARN of the AWS KMS key that's used to encrypt the DB instance, such as ``arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef``.

If you enable the StorageEncrypted property but don't specify this property, AWS CloudFormation uses the default KMS key. If you specify this property, you must set the StorageEncrypted property to true.
If you specify the `SourceDBInstanceIdentifier` or `SourceDbiResourceId` property, don't specify this property. The value is inherited from the source DB instance, and if the DB instance is encrypted, the specified `KmsKeyId` property is used. However, if the source DB instance is in a different AWS Region, you must specify a KMS key ID.
If you specify the `SourceDBInstanceAutomatedBackupsArn` property, don't specify this property. The value is inherited from the source DB instance automated backup, and if the automated backup is encrypted, the specified `KmsKeyId` property is used.
If you create an encrypted read replica in a different AWS Region, then you must specify a KMS key for the destination AWS Region. KMS encryption keys are specific to the region that they're created in, and you can't use encryption keys from one region in another region.
If you specify the `DBSnapshotIdentifier` property, don't specify this property. The `StorageEncrypted` property value is inherited from the snapshot. If the DB instance is encrypted, the specified `KmsKeyId` property is also inherited from the snapshot.
If you specify `DBSecurityGroups`, AWS CloudFormation ignores this property. To specify both a security group and this property, you must use a VPC security group. For more information about Amazon RDS and VPC, see [Using Amazon RDS with Amazon VPC](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.html) in the *Amazon RDS User Guide*.
*Amazon Aurora*
Not applicable. The KMS key identifier is managed by the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#kms_key_id RdsDbInstance#kms_key_id}

---

##### `license_model`<sup>Optional</sup> <a name="license_model" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.licenseModel"></a>

- *Type:* str

License model information for this DB instance.

Valid Values:

* Aurora MySQL - `general-public-license`
* Aurora PostgreSQL - `postgresql-license`
* RDS for Db2 - `bring-your-own-license`. For more information about RDS for Db2 licensing, see [](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/db2-licensing.html) in the *Amazon RDS User Guide.*
* RDS for MariaDB - `general-public-license`
* RDS for Microsoft SQL Server - `license-included` or `bring-your-own-media`
* RDS for MySQL - `general-public-license`
* RDS for Oracle - `bring-your-own-license` or `license-included`
* RDS for PostgreSQL - `postgresql-license`

If you've specified `DBSecurityGroups` and then you update the license model, AWS CloudFormation replaces the underlying DB instance. This will incur some interruptions to database availability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#license_model RdsDbInstance#license_model}

---

##### `manage_master_user_password`<sup>Optional</sup> <a name="manage_master_user_password" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.manageMasterUserPassword"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether to manage the master user password with AWS Secrets Manager.

For more information, see [Password management with Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the *Amazon RDS User Guide.*
Constraints:

* Can't manage the master user password with AWS Secrets Manager if `MasterUserPassword` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#manage_master_user_password RdsDbInstance#manage_master_user_password}

---

##### `master_user_authentication_type`<sup>Optional</sup> <a name="master_user_authentication_type" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.masterUserAuthenticationType"></a>

- *Type:* str

Specifies the authentication type for the master user.

With IAM master user authentication, you can configure the master DB user with IAM database authentication when you create a DB instance.
You can specify one of the following values:

* `password` - Use standard database authentication with a password.
* `iam-db-auth` - Use IAM database authentication for the master user.

This option is only valid for RDS for MySQL, RDS for MariaDB, RDS for PostgreSQL, Aurora MySQL, and Aurora PostgreSQL engines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#master_user_authentication_type RdsDbInstance#master_user_authentication_type}

---

##### `master_username`<sup>Optional</sup> <a name="master_username" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.masterUsername"></a>

- *Type:* str

The master user name for the DB instance.

If you specify the `SourceDBInstanceIdentifier` or `DBSnapshotIdentifier` property, don't specify this property. The value is inherited from the source DB instance or snapshot.
When migrating a self-managed Db2 database, we recommend that you use the same master username as your self-managed Db2 instance name.
*Amazon Aurora*
Not applicable. The name for the master user is managed by the DB cluster.
*RDS for Db2*
Constraints:

* Must be 1 to 16 letters or numbers.
* First character must be a letter.
* Can't be a reserved word for the chosen database engine.

*RDS for MariaDB*
Constraints:

* Must be 1 to 16 letters or numbers.
* Can't be a reserved word for the chosen database engine.

*RDS for Microsoft SQL Server*
Constraints:

* Must be 1 to 128 letters or numbers.
* First character must be a letter.
* Can't be a reserved word for the chosen database engine.

*RDS for MySQL*
Constraints:

* Must be 1 to 16 letters or numbers.
* First character must be a letter.
* Can't be a reserved word for the chosen database engine.

*RDS for Oracle*
Constraints:

* Must be 1 to 30 letters or numbers.
* First character must be a letter.
* Can't be a reserved word for the chosen database engine.

*RDS for PostgreSQL*
Constraints:

* Must be 1 to 63 letters or numbers.
* First character must be a letter.
* Can't be a reserved word for the chosen database engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#master_username RdsDbInstance#master_username}

---

##### `master_user_password`<sup>Optional</sup> <a name="master_user_password" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.masterUserPassword"></a>

- *Type:* str

The password for the master user.

The password can include any printable ASCII character except "/", """, or "@".
*Amazon Aurora*
Not applicable. The password for the master user is managed by the DB cluster.
*RDS for Db2*
Must contain from 8 to 255 characters.
*RDS for MariaDB*
Constraints: Must contain from 8 to 41 characters.
*RDS for Microsoft SQL Server*
Constraints: Must contain from 8 to 128 characters.
*RDS for MySQL*
Constraints: Must contain from 8 to 41 characters.
*RDS for Oracle*
Constraints: Must contain from 8 to 30 characters.
*RDS for PostgreSQL*
Constraints: Must contain from 8 to 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#master_user_password RdsDbInstance#master_user_password}

---

##### `master_user_secret`<sup>Optional</sup> <a name="master_user_secret" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.masterUserSecret"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecret">RdsDbInstanceMasterUserSecret</a>

The secret managed by RDS in AWS Secrets Manager for the master user password.

For more information, see [Password management with Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the *Amazon RDS User Guide.*

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#master_user_secret RdsDbInstance#master_user_secret}

---

##### `max_allocated_storage`<sup>Optional</sup> <a name="max_allocated_storage" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.maxAllocatedStorage"></a>

- *Type:* typing.Union[int, float]

The upper limit in gibibytes (GiB) to which Amazon RDS can automatically scale the storage of the DB instance.

For more information about this setting, including limitations that apply to it, see [Managing capacity automatically with Amazon RDS storage autoscaling](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.StorageTypes.html#USER_PIOPS.Autoscaling) in the *Amazon RDS User Guide*.
This setting doesn't apply to the following DB instances:

* Amazon Aurora (Storage is managed by the DB cluster.)
* RDS Custom

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#max_allocated_storage RdsDbInstance#max_allocated_storage}

---

##### `monitoring_interval`<sup>Optional</sup> <a name="monitoring_interval" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.monitoringInterval"></a>

- *Type:* typing.Union[int, float]

The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance.

To disable collection of Enhanced Monitoring metrics, specify `0`.
If `MonitoringRoleArn` is specified, then you must set `MonitoringInterval` to a value other than `0`.
This setting doesn't apply to RDS Custom DB instances.
Valid Values: `0 | 1 | 5 | 10 | 15 | 30 | 60`
Default: `0`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#monitoring_interval RdsDbInstance#monitoring_interval}

---

##### `monitoring_role_arn`<sup>Optional</sup> <a name="monitoring_role_arn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.monitoringRoleArn"></a>

- *Type:* str

The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to Amazon CloudWatch Logs.

For example, `arn:aws:iam:123456789012:role/emaccess`. For information on creating a monitoring role, see [Setting Up and Enabling Enhanced Monitoring](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.OS.html#USER_Monitoring.OS.Enabling) in the *Amazon RDS User Guide*.
If `MonitoringInterval` is set to a value other than `0`, then you must supply a `MonitoringRoleArn` value.
This setting doesn't apply to RDS Custom DB instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#monitoring_role_arn RdsDbInstance#monitoring_role_arn}

---

##### `multi_az`<sup>Optional</sup> <a name="multi_az" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.multiAz"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether the DB instance is a Multi-AZ deployment.

You can't set the `AvailabilityZone` parameter if the DB instance is a Multi-AZ deployment.
This setting doesn't apply to Amazon Aurora because the DB instance Availability Zones (AZs) are managed by the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#multi_az RdsDbInstance#multi_az}

---

##### `nchar_character_set_name`<sup>Optional</sup> <a name="nchar_character_set_name" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.ncharCharacterSetName"></a>

- *Type:* str

The name of the NCHAR character set for the Oracle DB instance.

This setting doesn't apply to RDS Custom DB instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#nchar_character_set_name RdsDbInstance#nchar_character_set_name}

---

##### `network_type`<sup>Optional</sup> <a name="network_type" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.networkType"></a>

- *Type:* str

The network type of the DB instance.

Valid values:

* `IPV4`
* `DUAL`

The network type is determined by the `DBSubnetGroup` specified for the DB instance. A `DBSubnetGroup` can support only the IPv4 protocol or the IPv4 and IPv6 protocols (`DUAL`).
For more information, see [Working with a DB instance in a VPC](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html) in the *Amazon RDS User Guide.*

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#network_type RdsDbInstance#network_type}

---

##### `option_group_name`<sup>Optional</sup> <a name="option_group_name" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.optionGroupName"></a>

- *Type:* str

Indicates that the DB instance should be associated with the specified option group.

Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed from an option group. Also, that option group can't be removed from a DB instance once it is associated with a DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#option_group_name RdsDbInstance#option_group_name}

---

##### `performance_insights_kms_key_id`<sup>Optional</sup> <a name="performance_insights_kms_key_id" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.performanceInsightsKmsKeyId"></a>

- *Type:* str

The AWS KMS key identifier for encryption of Performance Insights data.

The KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
If you do not specify a value for `PerformanceInsightsKMSKeyId`, then Amazon RDS uses your default KMS key. There is a default KMS key for your AWS account. Your AWS account has a different default KMS key for each AWS Region.
*Update behavior:* Once Performance Insights is enabled with a KMS key, you cannot change to a different physical KMS key without replacing the DB instance. However, the following updates do not require replacement:

* Enabling or disabling Performance Insights using the `EnablePerformanceInsights` property
* Changing between different identifier formats (key ARN, key ID, alias ARN, alias name) of the same physical KMS key
* Removing the `PerformanceInsightsKMSKeyId` property from your template

*Drift behavior:* If you specify `PerformanceInsightsKMSKeyId` while `EnablePerformanceInsights` is set to `false`, CloudFormation will report drift. This occurs because the RDS API does not allow setting a KMS key when Performance Insights is disabled. CloudFormation ignores the `PerformanceInsightsKMSKeyId` value during instance creation to avoid API errors, resulting in a mismatch between your template and the actual instance configuration.
To avoid drift, omit both `EnablePerformanceInsights` and `PerformanceInsightsKMSKeyId` during initial instance creation, then set both properties together when you're ready to enable Performance Insights.
For information about enabling Performance Insights, see [EnablePerformanceInsights](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-database-instance.html#cfn-rds-dbinstance-enableperformanceinsights).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#performance_insights_kms_key_id RdsDbInstance#performance_insights_kms_key_id}

---

##### `performance_insights_retention_period`<sup>Optional</sup> <a name="performance_insights_retention_period" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.performanceInsightsRetentionPeriod"></a>

- *Type:* typing.Union[int, float]

The number of days to retain Performance Insights data.

When creating a DB instance without enabling Performance Insights, you can't specify the parameter `PerformanceInsightsRetentionPeriod`.
This setting doesn't apply to RDS Custom DB instances.
Valid Values:

* `7`
* *month* * 31, where *month* is a number of months from 1-23. Examples: `93` (3 months * 31), `341` (11 months * 31), `589` (19 months * 31)
* `731`

Default: `7` days
If you specify a retention period that isn't valid, such as `94`, Amazon RDS returns an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#performance_insights_retention_period RdsDbInstance#performance_insights_retention_period}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.port"></a>

- *Type:* str

The port number on which the database accepts connections.

This setting doesn't apply to Aurora DB instances. The port number is managed by the cluster.
Valid Values: `1150-65535`
Default:

* RDS for Db2 - `50000`
* RDS for MariaDB - `3306`
* RDS for Microsoft SQL Server - `1433`
* RDS for MySQL - `3306`
* RDS for Oracle - `1521`
* RDS for PostgreSQL - `5432`

Constraints:

* For RDS for Microsoft SQL Server, the value can't be `1234`, `1434`, `3260`, `3343`, `3389`, `47001`, or `49152-49156`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#port RdsDbInstance#port}

---

##### `preferred_backup_window`<sup>Optional</sup> <a name="preferred_backup_window" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.preferredBackupWindow"></a>

- *Type:* str

The daily time range during which automated backups are created if automated backups are enabled, using the ``BackupRetentionPeriod`` parameter.

For more information, see [Backup Window](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html#USER_WorkingWithAutomatedBackups.BackupWindow) in the *Amazon RDS User Guide.*
Constraints:

* Must be in the format `hh24:mi-hh24:mi`.
* Must be in Universal Coordinated Time (UTC).
* Must not conflict with the preferred maintenance window.
* Must be at least 30 minutes.

*Amazon Aurora*
Not applicable. The daily time range for creating automated backups is managed by the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#preferred_backup_window RdsDbInstance#preferred_backup_window}

---

##### `preferred_maintenance_window`<sup>Optional</sup> <a name="preferred_maintenance_window" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.preferredMaintenanceWindow"></a>

- *Type:* str

The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).

Format: `ddd:hh24:mi-ddd:hh24:mi`
The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week. To see the time blocks available, see [Maintaining a DB instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow) in the *Amazon RDS User Guide.*
This property applies when AWS CloudFormation initially creates the DB instance. If you use AWS CloudFormation to update the DB instance, those updates are applied immediately.
Constraints: Minimum 30-minute window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#preferred_maintenance_window RdsDbInstance#preferred_maintenance_window}

---

##### `processor_features`<sup>Optional</sup> <a name="processor_features" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.processorFeatures"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeatures">RdsDbInstanceProcessorFeatures</a>]

The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.

This setting doesn't apply to Amazon Aurora or RDS Custom DB instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#processor_features RdsDbInstance#processor_features}

---

##### `promotion_tier`<sup>Optional</sup> <a name="promotion_tier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.promotionTier"></a>

- *Type:* typing.Union[int, float]

The order of priority in which an Aurora Replica is promoted to the primary instance after a failure of the existing primary instance.

For more information, see [Fault Tolerance for an Aurora DB Cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.AuroraHighAvailability.html#Aurora.Managing.FaultTolerance) in the *Amazon Aurora User Guide*.
This setting doesn't apply to RDS Custom DB instances.
Default: `1`
Valid Values: `0 - 15`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#promotion_tier RdsDbInstance#promotion_tier}

---

##### `publicly_accessible`<sup>Optional</sup> <a name="publicly_accessible" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.publiclyAccessible"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether the DB instance is an internet-facing instance.

If you specify true, AWS CloudFormation creates an instance with a publicly resolvable DNS name, which resolves to a public IP address. If you specify false, AWS CloudFormation creates an internal instance with a DNS name that resolves to a private IP address.
The default behavior value depends on your VPC setup and the database subnet group. For more information, see the `PubliclyAccessible` parameter in the [CreateDBInstance](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstance.html) in the *Amazon RDS API Reference*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#publicly_accessible RdsDbInstance#publicly_accessible}

---

##### `replica_mode`<sup>Optional</sup> <a name="replica_mode" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.replicaMode"></a>

- *Type:* str

The open mode of an Oracle read replica.

For more information, see [Working with Oracle Read Replicas for Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/oracle-read-replicas.html) in the *Amazon RDS User Guide*.
This setting is only supported in RDS for Oracle.
Default: `open-read-only`
Valid Values: `open-read-only` or `mounted`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#replica_mode RdsDbInstance#replica_mode}

---

##### `restore_time`<sup>Optional</sup> <a name="restore_time" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.restoreTime"></a>

- *Type:* str

The date and time to restore from.

This parameter applies to point-in-time recovery. For more information, see [Restoring a DB instance to a specified time](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIT.html) in the in the *Amazon RDS User Guide*.
Constraints:

* Must be a time in Universal Coordinated Time (UTC) format.
* Must be before the latest restorable time for the DB instance.
* Can't be specified if the `UseLatestRestorableTime` parameter is enabled.

Example: `2009-09-07T23:45:00Z`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#restore_time RdsDbInstance#restore_time}

---

##### `source_db_cluster_identifier`<sup>Optional</sup> <a name="source_db_cluster_identifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.sourceDbClusterIdentifier"></a>

- *Type:* str

The identifier of the Multi-AZ DB cluster that will act as the source for the read replica.

Each DB cluster can have up to 15 read replicas.
Constraints:

* Must be the identifier of an existing Multi-AZ DB cluster.
* Can't be specified if the `SourceDBInstanceIdentifier` parameter is also specified.
* The specified DB cluster must have automatic backups enabled, that is, its backup retention period must be greater than 0.
* The source DB cluster must be in the same AWS-Region as the read replica. Cross-Region replication isn't supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#source_db_cluster_identifier RdsDbInstance#source_db_cluster_identifier}

---

##### `source_db_instance_automated_backups_arn`<sup>Optional</sup> <a name="source_db_instance_automated_backups_arn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.sourceDbInstanceAutomatedBackupsArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the replicated automated backups from which to restore, for example, ``arn:aws:rds:us-east-1:123456789012:auto-backup:ab-L2IJCEXJP7XQ7HOJ4SIEXAMPLE``.

This setting doesn't apply to RDS Custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#source_db_instance_automated_backups_arn RdsDbInstance#source_db_instance_automated_backups_arn}

---

##### `source_db_instance_identifier`<sup>Optional</sup> <a name="source_db_instance_identifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.sourceDbInstanceIdentifier"></a>

- *Type:* str

If you want to create a read replica DB instance, specify the ID of the source DB instance.

Each DB instance can have a limited number of read replicas. For more information, see [Working with Read Replicas](https://docs.aws.amazon.com/AmazonRDS/latest/DeveloperGuide/USER_ReadRepl.html) in the *Amazon RDS User Guide*.
For information about constraints that apply to DB instance identifiers, see [Naming constraints in Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Limits.html#RDS_Limits.Constraints) in the *Amazon RDS User Guide*.
The `SourceDBInstanceIdentifier` property determines whether a DB instance is a read replica. If you remove the `SourceDBInstanceIdentifier` property from your template and then update your stack, AWS CloudFormation promotes the read replica to a standalone DB instance.
If you specify the `UseLatestRestorableTime` or `RestoreTime` properties in conjunction with the `SourceDBInstanceIdentifier` property, RDS restores the DB instance to the requested point in time, thereby creating a new DB instance.

* If you specify a source DB instance that uses VPC security groups, we recommend that you specify the `VPCSecurityGroups` property. If you don't specify the property, the read replica inherits the value of the `VPCSecurityGroups` property from the source DB when you create the replica. However, if you update the stack, AWS CloudFormation reverts the replica's `VPCSecurityGroups` property to the default value because it's not defined in the stack's template. This change might cause unexpected issues.
* Read replicas don't support deletion policies. AWS CloudFormation ignores any deletion policy that's associated with a read replica.
* If you specify `SourceDBInstanceIdentifier`, don't specify the `DBSnapshotIdentifier` property. You can't create a read replica from a snapshot.
* Don't set the `BackupRetentionPeriod`, `DBName`, `MasterUsername`, `MasterUserPassword`, and `PreferredBackupWindow` properties. The database attributes are inherited from the source DB instance, and backups are disabled for read replicas.
* If the source DB instance is in a different region than the read replica, specify the source region in `SourceRegion`, and specify an ARN for a valid DB instance in `SourceDBInstanceIdentifier`. For more information, see [Constructing a Amazon RDS Amazon Resource Name (ARN)](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html#USER_Tagging.ARN) in the *Amazon RDS User Guide*.
* For DB instances in Amazon Aurora clusters, don't specify this property. Amazon RDS automatically assigns writer and reader DB instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#source_db_instance_identifier RdsDbInstance#source_db_instance_identifier}

---

##### `source_dbi_resource_id`<sup>Optional</sup> <a name="source_dbi_resource_id" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.sourceDbiResourceId"></a>

- *Type:* str

The resource ID of the source DB instance from which to restore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#source_dbi_resource_id RdsDbInstance#source_dbi_resource_id}

---

##### `source_region`<sup>Optional</sup> <a name="source_region" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.sourceRegion"></a>

- *Type:* str

The ID of the region that contains the source DB instance for the read replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#source_region RdsDbInstance#source_region}

---

##### `storage_encrypted`<sup>Optional</sup> <a name="storage_encrypted" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.storageEncrypted"></a>

- *Type:* bool | cdktn.IResolvable

A value that indicates whether the DB instance is encrypted.

By default, it isn't encrypted.
If you specify the `KmsKeyId` property, then you must enable encryption.
If you specify the `SourceDBInstanceIdentifier` or `SourceDbiResourceId` property, don't specify this property. The value is inherited from the source DB instance, and if the DB instance is encrypted, the specified `KmsKeyId` property is used.
If you specify the `SourceDBInstanceAutomatedBackupsArn` property, don't specify this property. The value is inherited from the source DB instance automated backup.
If you specify `DBSnapshotIdentifier` property, don't specify this property. The value is inherited from the snapshot.
*Amazon Aurora*
Not applicable. The encryption for DB instances is managed by the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#storage_encrypted RdsDbInstance#storage_encrypted}

---

##### `storage_throughput`<sup>Optional</sup> <a name="storage_throughput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.storageThroughput"></a>

- *Type:* typing.Union[int, float]

Specifies the storage throughput value, in mebibyte per second (MiBps), for the DB instance.

This setting applies only to the `gp3` storage type.
This setting doesn't apply to RDS Custom or Amazon Aurora.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#storage_throughput RdsDbInstance#storage_throughput}

---

##### `storage_type`<sup>Optional</sup> <a name="storage_type" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.storageType"></a>

- *Type:* str

The storage type to associate with the DB instance.

If you specify `io1`, `io2`, or `gp3`, you must also include a value for the `Iops` parameter.
This setting doesn't apply to Amazon Aurora DB instances. Storage is managed by the DB cluster.
Valid Values: `gp2 | gp3 | io1 | io2 | standard`
Default: `io1`, if the `Iops` parameter is specified. Otherwise, `gp3`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#storage_type RdsDbInstance#storage_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTags">RdsDbInstanceTags</a>]

Tags to assign to the DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#tags RdsDbInstance#tags}

---

##### `tde_credential_arn`<sup>Optional</sup> <a name="tde_credential_arn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.tdeCredentialArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#tde_credential_arn RdsDbInstance#tde_credential_arn}.

---

##### `tde_credential_password`<sup>Optional</sup> <a name="tde_credential_password" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.tdeCredentialPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#tde_credential_password RdsDbInstance#tde_credential_password}.

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.timezone"></a>

- *Type:* str

The time zone of the DB instance.

The time zone parameter is currently supported only by [RDS for Db2](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/db2-time-zone) and [RDS for SQL Server](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_SQLServer.html#SQLServer.Concepts.General.TimeZone).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#timezone RdsDbInstance#timezone}

---

##### `use_default_processor_features`<sup>Optional</sup> <a name="use_default_processor_features" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.useDefaultProcessorFeatures"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether the DB instance class of the DB instance uses its default processor features.

This setting doesn't apply to RDS Custom DB instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#use_default_processor_features RdsDbInstance#use_default_processor_features}

---

##### `use_latest_restorable_time`<sup>Optional</sup> <a name="use_latest_restorable_time" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.useLatestRestorableTime"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether the DB instance is restored from the latest backup time.

By default, the DB instance isn't restored from the latest backup time. This parameter applies to point-in-time recovery. For more information, see [Restoring a DB instance to a specified time](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIT.html) in the in the *Amazon RDS User Guide*.
Constraints:

* Can't be specified if the `RestoreTime` parameter is provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#use_latest_restorable_time RdsDbInstance#use_latest_restorable_time}

---

##### `vpc_security_groups`<sup>Optional</sup> <a name="vpc_security_groups" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.vpcSecurityGroups"></a>

- *Type:* typing.List[str]

A list of the VPC security group IDs to assign to the DB instance.

The list can include both the physical IDs of existing VPC security groups and references to [AWS::EC2::SecurityGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-security-group.html) resources created in the template.
If you plan to update the resource, don't specify VPC security groups in a shared VPC.
If you set `VPCSecurityGroups`, you must not set [DBSecurityGroups](https://docs.aws.amazon.com//AWSCloudFormation/latest/UserGuide/aws-properties-rds-database-instance.html#cfn-rds-dbinstance-dbsecuritygroups), and vice versa.
You can migrate a DB instance in your stack from an RDS DB security group to a VPC security group, but keep the following in mind:

* You can't revert to using an RDS security group after you establish a VPC security group membership.
* When you migrate your DB instance to VPC security groups, if your stack update rolls back because the DB instance update fails or because an update fails in another AWS CloudFormation resource, the rollback fails because it can't revert to an RDS security group.
* To use the properties that are available when you use a VPC security group, you must recreate the DB instance. If you don't, AWS CloudFormation submits only the property values that are listed in the [DBSecurityGroups](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-database-instance.html#cfn-rds-dbinstance-dbsecuritygroups) property.

To avoid this situation, migrate your DB instance to using VPC security groups only when that is the only change in your stack template.
*Amazon Aurora*
Not applicable. The associated list of EC2 VPC security groups is managed by the DB cluster. If specified, the setting must match the DB cluster setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#vpc_security_groups RdsDbInstance#vpc_security_groups}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.putAdditionalStorageVolumes">put_additional_storage_volumes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.putAssociatedRoles">put_associated_roles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.putMasterUserSecret">put_master_user_secret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.putProcessorFeatures">put_processor_features</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAdditionalStorageVolumes">reset_additional_storage_volumes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAllocatedStorage">reset_allocated_storage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAllowMajorVersionUpgrade">reset_allow_major_version_upgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetApplyImmediately">reset_apply_immediately</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAssociatedRoles">reset_associated_roles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAutomaticBackupReplicationKmsKeyId">reset_automatic_backup_replication_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAutomaticBackupReplicationRegion">reset_automatic_backup_replication_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAutomaticBackupReplicationRetentionPeriod">reset_automatic_backup_replication_retention_period</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAutoMinorVersionUpgrade">reset_auto_minor_version_upgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetBackupRetentionPeriod">reset_backup_retention_period</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetBackupTarget">reset_backup_target</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetCaCertificateIdentifier">reset_ca_certificate_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetCertificateRotationRestart">reset_certificate_rotation_restart</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetCharacterSetName">reset_character_set_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetCopyTagsToSnapshot">reset_copy_tags_to_snapshot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetCustomIamInstanceProfile">reset_custom_iam_instance_profile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDatabaseInsightsMode">reset_database_insights_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbClusterIdentifier">reset_db_cluster_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbClusterSnapshotIdentifier">reset_db_cluster_snapshot_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbInstanceClass">reset_db_instance_class</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbInstanceIdentifier">reset_db_instance_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbName">reset_db_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbParameterGroupName">reset_db_parameter_group_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbSecurityGroups">reset_db_security_groups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbSnapshotIdentifier">reset_db_snapshot_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbSubnetGroupName">reset_db_subnet_group_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbSystemId">reset_db_system_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDedicatedLogVolume">reset_dedicated_log_volume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDeleteAutomatedBackups">reset_delete_automated_backups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDeletionProtection">reset_deletion_protection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDomain">reset_domain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDomainAuthSecretArn">reset_domain_auth_secret_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDomainDnsIps">reset_domain_dns_ips</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDomainFqdn">reset_domain_fqdn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDomainIamRoleName">reset_domain_iam_role_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDomainOu">reset_domain_ou</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetEnableCloudwatchLogsExports">reset_enable_cloudwatch_logs_exports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetEnableIamDatabaseAuthentication">reset_enable_iam_database_authentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetEnablePerformanceInsights">reset_enable_performance_insights</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetEngine">reset_engine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetEngineLifecycleSupport">reset_engine_lifecycle_support</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetEngineVersion">reset_engine_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetIops">reset_iops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetLicenseModel">reset_license_model</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetManageMasterUserPassword">reset_manage_master_user_password</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMasterUserAuthenticationType">reset_master_user_authentication_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMasterUsername">reset_master_username</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMasterUserPassword">reset_master_user_password</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMasterUserSecret">reset_master_user_secret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMaxAllocatedStorage">reset_max_allocated_storage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMonitoringInterval">reset_monitoring_interval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMonitoringRoleArn">reset_monitoring_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMultiAz">reset_multi_az</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetNcharCharacterSetName">reset_nchar_character_set_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetNetworkType">reset_network_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetOptionGroupName">reset_option_group_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetPerformanceInsightsKmsKeyId">reset_performance_insights_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetPerformanceInsightsRetentionPeriod">reset_performance_insights_retention_period</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetPreferredBackupWindow">reset_preferred_backup_window</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetPreferredMaintenanceWindow">reset_preferred_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetProcessorFeatures">reset_processor_features</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetPromotionTier">reset_promotion_tier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetPubliclyAccessible">reset_publicly_accessible</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetReplicaMode">reset_replica_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetRestoreTime">reset_restore_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetSourceDbClusterIdentifier">reset_source_db_cluster_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetSourceDbInstanceAutomatedBackupsArn">reset_source_db_instance_automated_backups_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetSourceDbInstanceIdentifier">reset_source_db_instance_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetSourceDbiResourceId">reset_source_dbi_resource_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetSourceRegion">reset_source_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetStorageEncrypted">reset_storage_encrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetStorageThroughput">reset_storage_throughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetStorageType">reset_storage_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetTdeCredentialArn">reset_tde_credential_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetTdeCredentialPassword">reset_tde_credential_password</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetTimezone">reset_timezone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetUseDefaultProcessorFeatures">reset_use_default_processor_features</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetUseLatestRestorableTime">reset_use_latest_restorable_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetVpcSecurityGroups">reset_vpc_security_groups</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_additional_storage_volumes` <a name="put_additional_storage_volumes" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.putAdditionalStorageVolumes"></a>

```python
def put_additional_storage_volumes(
  value: IResolvable | typing.List[RdsDbInstanceAdditionalStorageVolumes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.putAdditionalStorageVolumes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes">RdsDbInstanceAdditionalStorageVolumes</a>]

---

##### `put_associated_roles` <a name="put_associated_roles" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.putAssociatedRoles"></a>

```python
def put_associated_roles(
  value: IResolvable | typing.List[RdsDbInstanceAssociatedRoles]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.putAssociatedRoles.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRoles">RdsDbInstanceAssociatedRoles</a>]

---

##### `put_master_user_secret` <a name="put_master_user_secret" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.putMasterUserSecret"></a>

```python
def put_master_user_secret(
  kms_key_id: str = None
) -> None
```

###### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.putMasterUserSecret.parameter.kmsKeyId"></a>

- *Type:* str

The AWS KMS key identifier that is used to encrypt the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#kms_key_id RdsDbInstance#kms_key_id}

---

##### `put_processor_features` <a name="put_processor_features" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.putProcessorFeatures"></a>

```python
def put_processor_features(
  value: IResolvable | typing.List[RdsDbInstanceProcessorFeatures]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.putProcessorFeatures.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeatures">RdsDbInstanceProcessorFeatures</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[RdsDbInstanceTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTags">RdsDbInstanceTags</a>]

---

##### `reset_additional_storage_volumes` <a name="reset_additional_storage_volumes" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAdditionalStorageVolumes"></a>

```python
def reset_additional_storage_volumes() -> None
```

##### `reset_allocated_storage` <a name="reset_allocated_storage" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAllocatedStorage"></a>

```python
def reset_allocated_storage() -> None
```

##### `reset_allow_major_version_upgrade` <a name="reset_allow_major_version_upgrade" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAllowMajorVersionUpgrade"></a>

```python
def reset_allow_major_version_upgrade() -> None
```

##### `reset_apply_immediately` <a name="reset_apply_immediately" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetApplyImmediately"></a>

```python
def reset_apply_immediately() -> None
```

##### `reset_associated_roles` <a name="reset_associated_roles" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAssociatedRoles"></a>

```python
def reset_associated_roles() -> None
```

##### `reset_automatic_backup_replication_kms_key_id` <a name="reset_automatic_backup_replication_kms_key_id" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAutomaticBackupReplicationKmsKeyId"></a>

```python
def reset_automatic_backup_replication_kms_key_id() -> None
```

##### `reset_automatic_backup_replication_region` <a name="reset_automatic_backup_replication_region" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAutomaticBackupReplicationRegion"></a>

```python
def reset_automatic_backup_replication_region() -> None
```

##### `reset_automatic_backup_replication_retention_period` <a name="reset_automatic_backup_replication_retention_period" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAutomaticBackupReplicationRetentionPeriod"></a>

```python
def reset_automatic_backup_replication_retention_period() -> None
```

##### `reset_auto_minor_version_upgrade` <a name="reset_auto_minor_version_upgrade" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAutoMinorVersionUpgrade"></a>

```python
def reset_auto_minor_version_upgrade() -> None
```

##### `reset_availability_zone` <a name="reset_availability_zone" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAvailabilityZone"></a>

```python
def reset_availability_zone() -> None
```

##### `reset_backup_retention_period` <a name="reset_backup_retention_period" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetBackupRetentionPeriod"></a>

```python
def reset_backup_retention_period() -> None
```

##### `reset_backup_target` <a name="reset_backup_target" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetBackupTarget"></a>

```python
def reset_backup_target() -> None
```

##### `reset_ca_certificate_identifier` <a name="reset_ca_certificate_identifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetCaCertificateIdentifier"></a>

```python
def reset_ca_certificate_identifier() -> None
```

##### `reset_certificate_rotation_restart` <a name="reset_certificate_rotation_restart" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetCertificateRotationRestart"></a>

```python
def reset_certificate_rotation_restart() -> None
```

##### `reset_character_set_name` <a name="reset_character_set_name" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetCharacterSetName"></a>

```python
def reset_character_set_name() -> None
```

##### `reset_copy_tags_to_snapshot` <a name="reset_copy_tags_to_snapshot" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetCopyTagsToSnapshot"></a>

```python
def reset_copy_tags_to_snapshot() -> None
```

##### `reset_custom_iam_instance_profile` <a name="reset_custom_iam_instance_profile" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetCustomIamInstanceProfile"></a>

```python
def reset_custom_iam_instance_profile() -> None
```

##### `reset_database_insights_mode` <a name="reset_database_insights_mode" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDatabaseInsightsMode"></a>

```python
def reset_database_insights_mode() -> None
```

##### `reset_db_cluster_identifier` <a name="reset_db_cluster_identifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbClusterIdentifier"></a>

```python
def reset_db_cluster_identifier() -> None
```

##### `reset_db_cluster_snapshot_identifier` <a name="reset_db_cluster_snapshot_identifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbClusterSnapshotIdentifier"></a>

```python
def reset_db_cluster_snapshot_identifier() -> None
```

##### `reset_db_instance_class` <a name="reset_db_instance_class" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbInstanceClass"></a>

```python
def reset_db_instance_class() -> None
```

##### `reset_db_instance_identifier` <a name="reset_db_instance_identifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbInstanceIdentifier"></a>

```python
def reset_db_instance_identifier() -> None
```

##### `reset_db_name` <a name="reset_db_name" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbName"></a>

```python
def reset_db_name() -> None
```

##### `reset_db_parameter_group_name` <a name="reset_db_parameter_group_name" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbParameterGroupName"></a>

```python
def reset_db_parameter_group_name() -> None
```

##### `reset_db_security_groups` <a name="reset_db_security_groups" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbSecurityGroups"></a>

```python
def reset_db_security_groups() -> None
```

##### `reset_db_snapshot_identifier` <a name="reset_db_snapshot_identifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbSnapshotIdentifier"></a>

```python
def reset_db_snapshot_identifier() -> None
```

##### `reset_db_subnet_group_name` <a name="reset_db_subnet_group_name" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbSubnetGroupName"></a>

```python
def reset_db_subnet_group_name() -> None
```

##### `reset_db_system_id` <a name="reset_db_system_id" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbSystemId"></a>

```python
def reset_db_system_id() -> None
```

##### `reset_dedicated_log_volume` <a name="reset_dedicated_log_volume" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDedicatedLogVolume"></a>

```python
def reset_dedicated_log_volume() -> None
```

##### `reset_delete_automated_backups` <a name="reset_delete_automated_backups" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDeleteAutomatedBackups"></a>

```python
def reset_delete_automated_backups() -> None
```

##### `reset_deletion_protection` <a name="reset_deletion_protection" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDeletionProtection"></a>

```python
def reset_deletion_protection() -> None
```

##### `reset_domain` <a name="reset_domain" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDomain"></a>

```python
def reset_domain() -> None
```

##### `reset_domain_auth_secret_arn` <a name="reset_domain_auth_secret_arn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDomainAuthSecretArn"></a>

```python
def reset_domain_auth_secret_arn() -> None
```

##### `reset_domain_dns_ips` <a name="reset_domain_dns_ips" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDomainDnsIps"></a>

```python
def reset_domain_dns_ips() -> None
```

##### `reset_domain_fqdn` <a name="reset_domain_fqdn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDomainFqdn"></a>

```python
def reset_domain_fqdn() -> None
```

##### `reset_domain_iam_role_name` <a name="reset_domain_iam_role_name" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDomainIamRoleName"></a>

```python
def reset_domain_iam_role_name() -> None
```

##### `reset_domain_ou` <a name="reset_domain_ou" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDomainOu"></a>

```python
def reset_domain_ou() -> None
```

##### `reset_enable_cloudwatch_logs_exports` <a name="reset_enable_cloudwatch_logs_exports" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetEnableCloudwatchLogsExports"></a>

```python
def reset_enable_cloudwatch_logs_exports() -> None
```

##### `reset_enable_iam_database_authentication` <a name="reset_enable_iam_database_authentication" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetEnableIamDatabaseAuthentication"></a>

```python
def reset_enable_iam_database_authentication() -> None
```

##### `reset_enable_performance_insights` <a name="reset_enable_performance_insights" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetEnablePerformanceInsights"></a>

```python
def reset_enable_performance_insights() -> None
```

##### `reset_engine` <a name="reset_engine" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetEngine"></a>

```python
def reset_engine() -> None
```

##### `reset_engine_lifecycle_support` <a name="reset_engine_lifecycle_support" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetEngineLifecycleSupport"></a>

```python
def reset_engine_lifecycle_support() -> None
```

##### `reset_engine_version` <a name="reset_engine_version" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetEngineVersion"></a>

```python
def reset_engine_version() -> None
```

##### `reset_iops` <a name="reset_iops" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetIops"></a>

```python
def reset_iops() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_license_model` <a name="reset_license_model" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetLicenseModel"></a>

```python
def reset_license_model() -> None
```

##### `reset_manage_master_user_password` <a name="reset_manage_master_user_password" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetManageMasterUserPassword"></a>

```python
def reset_manage_master_user_password() -> None
```

##### `reset_master_user_authentication_type` <a name="reset_master_user_authentication_type" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMasterUserAuthenticationType"></a>

```python
def reset_master_user_authentication_type() -> None
```

##### `reset_master_username` <a name="reset_master_username" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMasterUsername"></a>

```python
def reset_master_username() -> None
```

##### `reset_master_user_password` <a name="reset_master_user_password" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMasterUserPassword"></a>

```python
def reset_master_user_password() -> None
```

##### `reset_master_user_secret` <a name="reset_master_user_secret" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMasterUserSecret"></a>

```python
def reset_master_user_secret() -> None
```

##### `reset_max_allocated_storage` <a name="reset_max_allocated_storage" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMaxAllocatedStorage"></a>

```python
def reset_max_allocated_storage() -> None
```

##### `reset_monitoring_interval` <a name="reset_monitoring_interval" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMonitoringInterval"></a>

```python
def reset_monitoring_interval() -> None
```

##### `reset_monitoring_role_arn` <a name="reset_monitoring_role_arn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMonitoringRoleArn"></a>

```python
def reset_monitoring_role_arn() -> None
```

##### `reset_multi_az` <a name="reset_multi_az" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMultiAz"></a>

```python
def reset_multi_az() -> None
```

##### `reset_nchar_character_set_name` <a name="reset_nchar_character_set_name" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetNcharCharacterSetName"></a>

```python
def reset_nchar_character_set_name() -> None
```

##### `reset_network_type` <a name="reset_network_type" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetNetworkType"></a>

```python
def reset_network_type() -> None
```

##### `reset_option_group_name` <a name="reset_option_group_name" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetOptionGroupName"></a>

```python
def reset_option_group_name() -> None
```

##### `reset_performance_insights_kms_key_id` <a name="reset_performance_insights_kms_key_id" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetPerformanceInsightsKmsKeyId"></a>

```python
def reset_performance_insights_kms_key_id() -> None
```

##### `reset_performance_insights_retention_period` <a name="reset_performance_insights_retention_period" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetPerformanceInsightsRetentionPeriod"></a>

```python
def reset_performance_insights_retention_period() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_preferred_backup_window` <a name="reset_preferred_backup_window" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetPreferredBackupWindow"></a>

```python
def reset_preferred_backup_window() -> None
```

##### `reset_preferred_maintenance_window` <a name="reset_preferred_maintenance_window" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetPreferredMaintenanceWindow"></a>

```python
def reset_preferred_maintenance_window() -> None
```

##### `reset_processor_features` <a name="reset_processor_features" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetProcessorFeatures"></a>

```python
def reset_processor_features() -> None
```

##### `reset_promotion_tier` <a name="reset_promotion_tier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetPromotionTier"></a>

```python
def reset_promotion_tier() -> None
```

##### `reset_publicly_accessible` <a name="reset_publicly_accessible" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetPubliclyAccessible"></a>

```python
def reset_publicly_accessible() -> None
```

##### `reset_replica_mode` <a name="reset_replica_mode" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetReplicaMode"></a>

```python
def reset_replica_mode() -> None
```

##### `reset_restore_time` <a name="reset_restore_time" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetRestoreTime"></a>

```python
def reset_restore_time() -> None
```

##### `reset_source_db_cluster_identifier` <a name="reset_source_db_cluster_identifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetSourceDbClusterIdentifier"></a>

```python
def reset_source_db_cluster_identifier() -> None
```

##### `reset_source_db_instance_automated_backups_arn` <a name="reset_source_db_instance_automated_backups_arn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetSourceDbInstanceAutomatedBackupsArn"></a>

```python
def reset_source_db_instance_automated_backups_arn() -> None
```

##### `reset_source_db_instance_identifier` <a name="reset_source_db_instance_identifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetSourceDbInstanceIdentifier"></a>

```python
def reset_source_db_instance_identifier() -> None
```

##### `reset_source_dbi_resource_id` <a name="reset_source_dbi_resource_id" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetSourceDbiResourceId"></a>

```python
def reset_source_dbi_resource_id() -> None
```

##### `reset_source_region` <a name="reset_source_region" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetSourceRegion"></a>

```python
def reset_source_region() -> None
```

##### `reset_storage_encrypted` <a name="reset_storage_encrypted" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetStorageEncrypted"></a>

```python
def reset_storage_encrypted() -> None
```

##### `reset_storage_throughput` <a name="reset_storage_throughput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetStorageThroughput"></a>

```python
def reset_storage_throughput() -> None
```

##### `reset_storage_type` <a name="reset_storage_type" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetStorageType"></a>

```python
def reset_storage_type() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tde_credential_arn` <a name="reset_tde_credential_arn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetTdeCredentialArn"></a>

```python
def reset_tde_credential_arn() -> None
```

##### `reset_tde_credential_password` <a name="reset_tde_credential_password" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetTdeCredentialPassword"></a>

```python
def reset_tde_credential_password() -> None
```

##### `reset_timezone` <a name="reset_timezone" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetTimezone"></a>

```python
def reset_timezone() -> None
```

##### `reset_use_default_processor_features` <a name="reset_use_default_processor_features" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetUseDefaultProcessorFeatures"></a>

```python
def reset_use_default_processor_features() -> None
```

##### `reset_use_latest_restorable_time` <a name="reset_use_latest_restorable_time" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetUseLatestRestorableTime"></a>

```python
def reset_use_latest_restorable_time() -> None
```

##### `reset_vpc_security_groups` <a name="reset_vpc_security_groups" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetVpcSecurityGroups"></a>

```python
def reset_vpc_security_groups() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a RdsDbInstance resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.isConstruct"></a>

```python
from cdktn_provider_awscc import rds_db_instance

rdsDbInstance.RdsDbInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.isTerraformElement"></a>

```python
from cdktn_provider_awscc import rds_db_instance

rdsDbInstance.RdsDbInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.isTerraformResource"></a>

```python
from cdktn_provider_awscc import rds_db_instance

rdsDbInstance.RdsDbInstance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import rds_db_instance

rdsDbInstance.RdsDbInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a RdsDbInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RdsDbInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RdsDbInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RdsDbInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.additionalStorageVolumes">additional_storage_volumes</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList">RdsDbInstanceAdditionalStorageVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.associatedRoles">associated_roles</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList">RdsDbInstanceAssociatedRolesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.automaticRestartTime">automatic_restart_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.certificateDetails">certificate_details</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference">RdsDbInstanceCertificateDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbInstanceArn">db_instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbInstanceStatus">db_instance_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbiResourceId">dbi_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.endpoint">endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference">RdsDbInstanceEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.instanceCreateTime">instance_create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.isStorageConfigUpgradeAvailable">is_storage_config_upgrade_available</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.latestRestorableTime">latest_restorable_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.listenerEndpoint">listener_endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference">RdsDbInstanceListenerEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUserSecret">master_user_secret</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference">RdsDbInstanceMasterUserSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.percentProgress">percent_progress</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.processorFeatures">processor_features</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList">RdsDbInstanceProcessorFeaturesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.readReplicaDbClusterIdentifiers">read_replica_db_cluster_identifiers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.readReplicaDbInstanceIdentifiers">read_replica_db_instance_identifiers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.resumeFullAutomationModeTime">resume_full_automation_mode_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.secondaryAvailabilityZone">secondary_availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.statusInfos">status_infos</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList">RdsDbInstanceStatusInfosList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList">RdsDbInstanceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.additionalStorageVolumesInput">additional_storage_volumes_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes">RdsDbInstanceAdditionalStorageVolumes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.allocatedStorageInput">allocated_storage_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.allowMajorVersionUpgradeInput">allow_major_version_upgrade_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.applyImmediatelyInput">apply_immediately_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.associatedRolesInput">associated_roles_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRoles">RdsDbInstanceAssociatedRoles</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.automaticBackupReplicationKmsKeyIdInput">automatic_backup_replication_kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.automaticBackupReplicationRegionInput">automatic_backup_replication_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.automaticBackupReplicationRetentionPeriodInput">automatic_backup_replication_retention_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.autoMinorVersionUpgradeInput">auto_minor_version_upgrade_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.backupRetentionPeriodInput">backup_retention_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.backupTargetInput">backup_target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.caCertificateIdentifierInput">ca_certificate_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.certificateRotationRestartInput">certificate_rotation_restart_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.characterSetNameInput">character_set_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.copyTagsToSnapshotInput">copy_tags_to_snapshot_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.customIamInstanceProfileInput">custom_iam_instance_profile_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.databaseInsightsModeInput">database_insights_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbClusterIdentifierInput">db_cluster_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbClusterSnapshotIdentifierInput">db_cluster_snapshot_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbInstanceClassInput">db_instance_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbInstanceIdentifierInput">db_instance_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbNameInput">db_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbParameterGroupNameInput">db_parameter_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSecurityGroupsInput">db_security_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSnapshotIdentifierInput">db_snapshot_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSubnetGroupNameInput">db_subnet_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSystemIdInput">db_system_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dedicatedLogVolumeInput">dedicated_log_volume_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.deleteAutomatedBackupsInput">delete_automated_backups_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.deletionProtectionInput">deletion_protection_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainAuthSecretArnInput">domain_auth_secret_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainDnsIpsInput">domain_dns_ips_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainFqdnInput">domain_fqdn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainIamRoleNameInput">domain_iam_role_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainOuInput">domain_ou_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.enableCloudwatchLogsExportsInput">enable_cloudwatch_logs_exports_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.enableIamDatabaseAuthenticationInput">enable_iam_database_authentication_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.enablePerformanceInsightsInput">enable_performance_insights_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.engineInput">engine_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.engineLifecycleSupportInput">engine_lifecycle_support_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.engineVersionInput">engine_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.iopsInput">iops_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.licenseModelInput">license_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.manageMasterUserPasswordInput">manage_master_user_password_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUserAuthenticationTypeInput">master_user_authentication_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUsernameInput">master_username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUserPasswordInput">master_user_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUserSecretInput">master_user_secret_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecret">RdsDbInstanceMasterUserSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.maxAllocatedStorageInput">max_allocated_storage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.monitoringIntervalInput">monitoring_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.monitoringRoleArnInput">monitoring_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.multiAzInput">multi_az_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.ncharCharacterSetNameInput">nchar_character_set_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.networkTypeInput">network_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.optionGroupNameInput">option_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.performanceInsightsKmsKeyIdInput">performance_insights_kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.performanceInsightsRetentionPeriodInput">performance_insights_retention_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.portInput">port_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.preferredBackupWindowInput">preferred_backup_window_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.preferredMaintenanceWindowInput">preferred_maintenance_window_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.processorFeaturesInput">processor_features_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeatures">RdsDbInstanceProcessorFeatures</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.promotionTierInput">promotion_tier_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.publiclyAccessibleInput">publicly_accessible_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.replicaModeInput">replica_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.restoreTimeInput">restore_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbClusterIdentifierInput">source_db_cluster_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbInstanceAutomatedBackupsArnInput">source_db_instance_automated_backups_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbInstanceIdentifierInput">source_db_instance_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbiResourceIdInput">source_dbi_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceRegionInput">source_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.storageEncryptedInput">storage_encrypted_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.storageThroughputInput">storage_throughput_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.storageTypeInput">storage_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTags">RdsDbInstanceTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.tdeCredentialArnInput">tde_credential_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.tdeCredentialPasswordInput">tde_credential_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.timezoneInput">timezone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.useDefaultProcessorFeaturesInput">use_default_processor_features_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.useLatestRestorableTimeInput">use_latest_restorable_time_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.vpcSecurityGroupsInput">vpc_security_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.allocatedStorage">allocated_storage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.allowMajorVersionUpgrade">allow_major_version_upgrade</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.applyImmediately">apply_immediately</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.automaticBackupReplicationKmsKeyId">automatic_backup_replication_kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.automaticBackupReplicationRegion">automatic_backup_replication_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.automaticBackupReplicationRetentionPeriod">automatic_backup_replication_retention_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.autoMinorVersionUpgrade">auto_minor_version_upgrade</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.backupRetentionPeriod">backup_retention_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.backupTarget">backup_target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.caCertificateIdentifier">ca_certificate_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.certificateRotationRestart">certificate_rotation_restart</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.characterSetName">character_set_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.copyTagsToSnapshot">copy_tags_to_snapshot</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.customIamInstanceProfile">custom_iam_instance_profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.databaseInsightsMode">database_insights_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbClusterIdentifier">db_cluster_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbClusterSnapshotIdentifier">db_cluster_snapshot_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbInstanceClass">db_instance_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbInstanceIdentifier">db_instance_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbName">db_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbParameterGroupName">db_parameter_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSecurityGroups">db_security_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSnapshotIdentifier">db_snapshot_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSubnetGroupName">db_subnet_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSystemId">db_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dedicatedLogVolume">dedicated_log_volume</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.deleteAutomatedBackups">delete_automated_backups</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.deletionProtection">deletion_protection</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainAuthSecretArn">domain_auth_secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainDnsIps">domain_dns_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainFqdn">domain_fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainIamRoleName">domain_iam_role_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainOu">domain_ou</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.enableCloudwatchLogsExports">enable_cloudwatch_logs_exports</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.enableIamDatabaseAuthentication">enable_iam_database_authentication</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.enablePerformanceInsights">enable_performance_insights</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.engine">engine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.engineLifecycleSupport">engine_lifecycle_support</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.engineVersion">engine_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.licenseModel">license_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.manageMasterUserPassword">manage_master_user_password</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUserAuthenticationType">master_user_authentication_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUsername">master_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUserPassword">master_user_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.maxAllocatedStorage">max_allocated_storage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.monitoringInterval">monitoring_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.monitoringRoleArn">monitoring_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.multiAz">multi_az</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.ncharCharacterSetName">nchar_character_set_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.networkType">network_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.optionGroupName">option_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.performanceInsightsKmsKeyId">performance_insights_kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.performanceInsightsRetentionPeriod">performance_insights_retention_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.port">port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.preferredBackupWindow">preferred_backup_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.preferredMaintenanceWindow">preferred_maintenance_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.promotionTier">promotion_tier</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.publiclyAccessible">publicly_accessible</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.replicaMode">replica_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.restoreTime">restore_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbClusterIdentifier">source_db_cluster_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbInstanceAutomatedBackupsArn">source_db_instance_automated_backups_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbInstanceIdentifier">source_db_instance_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbiResourceId">source_dbi_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceRegion">source_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.storageEncrypted">storage_encrypted</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.storageThroughput">storage_throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.storageType">storage_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.tdeCredentialArn">tde_credential_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.tdeCredentialPassword">tde_credential_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.useDefaultProcessorFeatures">use_default_processor_features</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.useLatestRestorableTime">use_latest_restorable_time</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.vpcSecurityGroups">vpc_security_groups</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `additional_storage_volumes`<sup>Required</sup> <a name="additional_storage_volumes" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.additionalStorageVolumes"></a>

```python
additional_storage_volumes: RdsDbInstanceAdditionalStorageVolumesList
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList">RdsDbInstanceAdditionalStorageVolumesList</a>

---

##### `associated_roles`<sup>Required</sup> <a name="associated_roles" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.associatedRoles"></a>

```python
associated_roles: RdsDbInstanceAssociatedRolesList
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList">RdsDbInstanceAssociatedRolesList</a>

---

##### `automatic_restart_time`<sup>Required</sup> <a name="automatic_restart_time" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.automaticRestartTime"></a>

```python
automatic_restart_time: str
```

- *Type:* str

---

##### `certificate_details`<sup>Required</sup> <a name="certificate_details" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.certificateDetails"></a>

```python
certificate_details: RdsDbInstanceCertificateDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference">RdsDbInstanceCertificateDetailsOutputReference</a>

---

##### `db_instance_arn`<sup>Required</sup> <a name="db_instance_arn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbInstanceArn"></a>

```python
db_instance_arn: str
```

- *Type:* str

---

##### `db_instance_status`<sup>Required</sup> <a name="db_instance_status" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbInstanceStatus"></a>

```python
db_instance_status: str
```

- *Type:* str

---

##### `dbi_resource_id`<sup>Required</sup> <a name="dbi_resource_id" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbiResourceId"></a>

```python
dbi_resource_id: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.endpoint"></a>

```python
endpoint: RdsDbInstanceEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference">RdsDbInstanceEndpointOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_create_time`<sup>Required</sup> <a name="instance_create_time" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.instanceCreateTime"></a>

```python
instance_create_time: str
```

- *Type:* str

---

##### `is_storage_config_upgrade_available`<sup>Required</sup> <a name="is_storage_config_upgrade_available" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.isStorageConfigUpgradeAvailable"></a>

```python
is_storage_config_upgrade_available: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `latest_restorable_time`<sup>Required</sup> <a name="latest_restorable_time" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.latestRestorableTime"></a>

```python
latest_restorable_time: str
```

- *Type:* str

---

##### `listener_endpoint`<sup>Required</sup> <a name="listener_endpoint" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.listenerEndpoint"></a>

```python
listener_endpoint: RdsDbInstanceListenerEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference">RdsDbInstanceListenerEndpointOutputReference</a>

---

##### `master_user_secret`<sup>Required</sup> <a name="master_user_secret" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUserSecret"></a>

```python
master_user_secret: RdsDbInstanceMasterUserSecretOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference">RdsDbInstanceMasterUserSecretOutputReference</a>

---

##### `percent_progress`<sup>Required</sup> <a name="percent_progress" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.percentProgress"></a>

```python
percent_progress: str
```

- *Type:* str

---

##### `processor_features`<sup>Required</sup> <a name="processor_features" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.processorFeatures"></a>

```python
processor_features: RdsDbInstanceProcessorFeaturesList
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList">RdsDbInstanceProcessorFeaturesList</a>

---

##### `read_replica_db_cluster_identifiers`<sup>Required</sup> <a name="read_replica_db_cluster_identifiers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.readReplicaDbClusterIdentifiers"></a>

```python
read_replica_db_cluster_identifiers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `read_replica_db_instance_identifiers`<sup>Required</sup> <a name="read_replica_db_instance_identifiers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.readReplicaDbInstanceIdentifiers"></a>

```python
read_replica_db_instance_identifiers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resume_full_automation_mode_time`<sup>Required</sup> <a name="resume_full_automation_mode_time" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.resumeFullAutomationModeTime"></a>

```python
resume_full_automation_mode_time: str
```

- *Type:* str

---

##### `secondary_availability_zone`<sup>Required</sup> <a name="secondary_availability_zone" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.secondaryAvailabilityZone"></a>

```python
secondary_availability_zone: str
```

- *Type:* str

---

##### `status_infos`<sup>Required</sup> <a name="status_infos" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.statusInfos"></a>

```python
status_infos: RdsDbInstanceStatusInfosList
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList">RdsDbInstanceStatusInfosList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.tags"></a>

```python
tags: RdsDbInstanceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList">RdsDbInstanceTagsList</a>

---

##### `additional_storage_volumes_input`<sup>Optional</sup> <a name="additional_storage_volumes_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.additionalStorageVolumesInput"></a>

```python
additional_storage_volumes_input: IResolvable | typing.List[RdsDbInstanceAdditionalStorageVolumes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes">RdsDbInstanceAdditionalStorageVolumes</a>]

---

##### `allocated_storage_input`<sup>Optional</sup> <a name="allocated_storage_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.allocatedStorageInput"></a>

```python
allocated_storage_input: str
```

- *Type:* str

---

##### `allow_major_version_upgrade_input`<sup>Optional</sup> <a name="allow_major_version_upgrade_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.allowMajorVersionUpgradeInput"></a>

```python
allow_major_version_upgrade_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `apply_immediately_input`<sup>Optional</sup> <a name="apply_immediately_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.applyImmediatelyInput"></a>

```python
apply_immediately_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `associated_roles_input`<sup>Optional</sup> <a name="associated_roles_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.associatedRolesInput"></a>

```python
associated_roles_input: IResolvable | typing.List[RdsDbInstanceAssociatedRoles]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRoles">RdsDbInstanceAssociatedRoles</a>]

---

##### `automatic_backup_replication_kms_key_id_input`<sup>Optional</sup> <a name="automatic_backup_replication_kms_key_id_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.automaticBackupReplicationKmsKeyIdInput"></a>

```python
automatic_backup_replication_kms_key_id_input: str
```

- *Type:* str

---

##### `automatic_backup_replication_region_input`<sup>Optional</sup> <a name="automatic_backup_replication_region_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.automaticBackupReplicationRegionInput"></a>

```python
automatic_backup_replication_region_input: str
```

- *Type:* str

---

##### `automatic_backup_replication_retention_period_input`<sup>Optional</sup> <a name="automatic_backup_replication_retention_period_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.automaticBackupReplicationRetentionPeriodInput"></a>

```python
automatic_backup_replication_retention_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `auto_minor_version_upgrade_input`<sup>Optional</sup> <a name="auto_minor_version_upgrade_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.autoMinorVersionUpgradeInput"></a>

```python
auto_minor_version_upgrade_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `backup_retention_period_input`<sup>Optional</sup> <a name="backup_retention_period_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.backupRetentionPeriodInput"></a>

```python
backup_retention_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backup_target_input`<sup>Optional</sup> <a name="backup_target_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.backupTargetInput"></a>

```python
backup_target_input: str
```

- *Type:* str

---

##### `ca_certificate_identifier_input`<sup>Optional</sup> <a name="ca_certificate_identifier_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.caCertificateIdentifierInput"></a>

```python
ca_certificate_identifier_input: str
```

- *Type:* str

---

##### `certificate_rotation_restart_input`<sup>Optional</sup> <a name="certificate_rotation_restart_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.certificateRotationRestartInput"></a>

```python
certificate_rotation_restart_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `character_set_name_input`<sup>Optional</sup> <a name="character_set_name_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.characterSetNameInput"></a>

```python
character_set_name_input: str
```

- *Type:* str

---

##### `copy_tags_to_snapshot_input`<sup>Optional</sup> <a name="copy_tags_to_snapshot_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.copyTagsToSnapshotInput"></a>

```python
copy_tags_to_snapshot_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `custom_iam_instance_profile_input`<sup>Optional</sup> <a name="custom_iam_instance_profile_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.customIamInstanceProfileInput"></a>

```python
custom_iam_instance_profile_input: str
```

- *Type:* str

---

##### `database_insights_mode_input`<sup>Optional</sup> <a name="database_insights_mode_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.databaseInsightsModeInput"></a>

```python
database_insights_mode_input: str
```

- *Type:* str

---

##### `db_cluster_identifier_input`<sup>Optional</sup> <a name="db_cluster_identifier_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbClusterIdentifierInput"></a>

```python
db_cluster_identifier_input: str
```

- *Type:* str

---

##### `db_cluster_snapshot_identifier_input`<sup>Optional</sup> <a name="db_cluster_snapshot_identifier_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbClusterSnapshotIdentifierInput"></a>

```python
db_cluster_snapshot_identifier_input: str
```

- *Type:* str

---

##### `db_instance_class_input`<sup>Optional</sup> <a name="db_instance_class_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbInstanceClassInput"></a>

```python
db_instance_class_input: str
```

- *Type:* str

---

##### `db_instance_identifier_input`<sup>Optional</sup> <a name="db_instance_identifier_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbInstanceIdentifierInput"></a>

```python
db_instance_identifier_input: str
```

- *Type:* str

---

##### `db_name_input`<sup>Optional</sup> <a name="db_name_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbNameInput"></a>

```python
db_name_input: str
```

- *Type:* str

---

##### `db_parameter_group_name_input`<sup>Optional</sup> <a name="db_parameter_group_name_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbParameterGroupNameInput"></a>

```python
db_parameter_group_name_input: str
```

- *Type:* str

---

##### `db_security_groups_input`<sup>Optional</sup> <a name="db_security_groups_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSecurityGroupsInput"></a>

```python
db_security_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `db_snapshot_identifier_input`<sup>Optional</sup> <a name="db_snapshot_identifier_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSnapshotIdentifierInput"></a>

```python
db_snapshot_identifier_input: str
```

- *Type:* str

---

##### `db_subnet_group_name_input`<sup>Optional</sup> <a name="db_subnet_group_name_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSubnetGroupNameInput"></a>

```python
db_subnet_group_name_input: str
```

- *Type:* str

---

##### `db_system_id_input`<sup>Optional</sup> <a name="db_system_id_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSystemIdInput"></a>

```python
db_system_id_input: str
```

- *Type:* str

---

##### `dedicated_log_volume_input`<sup>Optional</sup> <a name="dedicated_log_volume_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dedicatedLogVolumeInput"></a>

```python
dedicated_log_volume_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `delete_automated_backups_input`<sup>Optional</sup> <a name="delete_automated_backups_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.deleteAutomatedBackupsInput"></a>

```python
delete_automated_backups_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `deletion_protection_input`<sup>Optional</sup> <a name="deletion_protection_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.deletionProtectionInput"></a>

```python
deletion_protection_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `domain_auth_secret_arn_input`<sup>Optional</sup> <a name="domain_auth_secret_arn_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainAuthSecretArnInput"></a>

```python
domain_auth_secret_arn_input: str
```

- *Type:* str

---

##### `domain_dns_ips_input`<sup>Optional</sup> <a name="domain_dns_ips_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainDnsIpsInput"></a>

```python
domain_dns_ips_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `domain_fqdn_input`<sup>Optional</sup> <a name="domain_fqdn_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainFqdnInput"></a>

```python
domain_fqdn_input: str
```

- *Type:* str

---

##### `domain_iam_role_name_input`<sup>Optional</sup> <a name="domain_iam_role_name_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainIamRoleNameInput"></a>

```python
domain_iam_role_name_input: str
```

- *Type:* str

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `domain_ou_input`<sup>Optional</sup> <a name="domain_ou_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainOuInput"></a>

```python
domain_ou_input: str
```

- *Type:* str

---

##### `enable_cloudwatch_logs_exports_input`<sup>Optional</sup> <a name="enable_cloudwatch_logs_exports_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.enableCloudwatchLogsExportsInput"></a>

```python
enable_cloudwatch_logs_exports_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enable_iam_database_authentication_input`<sup>Optional</sup> <a name="enable_iam_database_authentication_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.enableIamDatabaseAuthenticationInput"></a>

```python
enable_iam_database_authentication_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_performance_insights_input`<sup>Optional</sup> <a name="enable_performance_insights_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.enablePerformanceInsightsInput"></a>

```python
enable_performance_insights_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `engine_input`<sup>Optional</sup> <a name="engine_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.engineInput"></a>

```python
engine_input: str
```

- *Type:* str

---

##### `engine_lifecycle_support_input`<sup>Optional</sup> <a name="engine_lifecycle_support_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.engineLifecycleSupportInput"></a>

```python
engine_lifecycle_support_input: str
```

- *Type:* str

---

##### `engine_version_input`<sup>Optional</sup> <a name="engine_version_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.engineVersionInput"></a>

```python
engine_version_input: str
```

- *Type:* str

---

##### `iops_input`<sup>Optional</sup> <a name="iops_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.iopsInput"></a>

```python
iops_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `license_model_input`<sup>Optional</sup> <a name="license_model_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.licenseModelInput"></a>

```python
license_model_input: str
```

- *Type:* str

---

##### `manage_master_user_password_input`<sup>Optional</sup> <a name="manage_master_user_password_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.manageMasterUserPasswordInput"></a>

```python
manage_master_user_password_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `master_user_authentication_type_input`<sup>Optional</sup> <a name="master_user_authentication_type_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUserAuthenticationTypeInput"></a>

```python
master_user_authentication_type_input: str
```

- *Type:* str

---

##### `master_username_input`<sup>Optional</sup> <a name="master_username_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUsernameInput"></a>

```python
master_username_input: str
```

- *Type:* str

---

##### `master_user_password_input`<sup>Optional</sup> <a name="master_user_password_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUserPasswordInput"></a>

```python
master_user_password_input: str
```

- *Type:* str

---

##### `master_user_secret_input`<sup>Optional</sup> <a name="master_user_secret_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUserSecretInput"></a>

```python
master_user_secret_input: IResolvable | RdsDbInstanceMasterUserSecret
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecret">RdsDbInstanceMasterUserSecret</a>

---

##### `max_allocated_storage_input`<sup>Optional</sup> <a name="max_allocated_storage_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.maxAllocatedStorageInput"></a>

```python
max_allocated_storage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `monitoring_interval_input`<sup>Optional</sup> <a name="monitoring_interval_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.monitoringIntervalInput"></a>

```python
monitoring_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `monitoring_role_arn_input`<sup>Optional</sup> <a name="monitoring_role_arn_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.monitoringRoleArnInput"></a>

```python
monitoring_role_arn_input: str
```

- *Type:* str

---

##### `multi_az_input`<sup>Optional</sup> <a name="multi_az_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.multiAzInput"></a>

```python
multi_az_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `nchar_character_set_name_input`<sup>Optional</sup> <a name="nchar_character_set_name_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.ncharCharacterSetNameInput"></a>

```python
nchar_character_set_name_input: str
```

- *Type:* str

---

##### `network_type_input`<sup>Optional</sup> <a name="network_type_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.networkTypeInput"></a>

```python
network_type_input: str
```

- *Type:* str

---

##### `option_group_name_input`<sup>Optional</sup> <a name="option_group_name_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.optionGroupNameInput"></a>

```python
option_group_name_input: str
```

- *Type:* str

---

##### `performance_insights_kms_key_id_input`<sup>Optional</sup> <a name="performance_insights_kms_key_id_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.performanceInsightsKmsKeyIdInput"></a>

```python
performance_insights_kms_key_id_input: str
```

- *Type:* str

---

##### `performance_insights_retention_period_input`<sup>Optional</sup> <a name="performance_insights_retention_period_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.performanceInsightsRetentionPeriodInput"></a>

```python
performance_insights_retention_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.portInput"></a>

```python
port_input: str
```

- *Type:* str

---

##### `preferred_backup_window_input`<sup>Optional</sup> <a name="preferred_backup_window_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.preferredBackupWindowInput"></a>

```python
preferred_backup_window_input: str
```

- *Type:* str

---

##### `preferred_maintenance_window_input`<sup>Optional</sup> <a name="preferred_maintenance_window_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.preferredMaintenanceWindowInput"></a>

```python
preferred_maintenance_window_input: str
```

- *Type:* str

---

##### `processor_features_input`<sup>Optional</sup> <a name="processor_features_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.processorFeaturesInput"></a>

```python
processor_features_input: IResolvable | typing.List[RdsDbInstanceProcessorFeatures]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeatures">RdsDbInstanceProcessorFeatures</a>]

---

##### `promotion_tier_input`<sup>Optional</sup> <a name="promotion_tier_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.promotionTierInput"></a>

```python
promotion_tier_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `publicly_accessible_input`<sup>Optional</sup> <a name="publicly_accessible_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.publiclyAccessibleInput"></a>

```python
publicly_accessible_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `replica_mode_input`<sup>Optional</sup> <a name="replica_mode_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.replicaModeInput"></a>

```python
replica_mode_input: str
```

- *Type:* str

---

##### `restore_time_input`<sup>Optional</sup> <a name="restore_time_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.restoreTimeInput"></a>

```python
restore_time_input: str
```

- *Type:* str

---

##### `source_db_cluster_identifier_input`<sup>Optional</sup> <a name="source_db_cluster_identifier_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbClusterIdentifierInput"></a>

```python
source_db_cluster_identifier_input: str
```

- *Type:* str

---

##### `source_db_instance_automated_backups_arn_input`<sup>Optional</sup> <a name="source_db_instance_automated_backups_arn_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbInstanceAutomatedBackupsArnInput"></a>

```python
source_db_instance_automated_backups_arn_input: str
```

- *Type:* str

---

##### `source_db_instance_identifier_input`<sup>Optional</sup> <a name="source_db_instance_identifier_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbInstanceIdentifierInput"></a>

```python
source_db_instance_identifier_input: str
```

- *Type:* str

---

##### `source_dbi_resource_id_input`<sup>Optional</sup> <a name="source_dbi_resource_id_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbiResourceIdInput"></a>

```python
source_dbi_resource_id_input: str
```

- *Type:* str

---

##### `source_region_input`<sup>Optional</sup> <a name="source_region_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceRegionInput"></a>

```python
source_region_input: str
```

- *Type:* str

---

##### `storage_encrypted_input`<sup>Optional</sup> <a name="storage_encrypted_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.storageEncryptedInput"></a>

```python
storage_encrypted_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `storage_throughput_input`<sup>Optional</sup> <a name="storage_throughput_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.storageThroughputInput"></a>

```python
storage_throughput_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_type_input`<sup>Optional</sup> <a name="storage_type_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.storageTypeInput"></a>

```python
storage_type_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[RdsDbInstanceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTags">RdsDbInstanceTags</a>]

---

##### `tde_credential_arn_input`<sup>Optional</sup> <a name="tde_credential_arn_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.tdeCredentialArnInput"></a>

```python
tde_credential_arn_input: str
```

- *Type:* str

---

##### `tde_credential_password_input`<sup>Optional</sup> <a name="tde_credential_password_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.tdeCredentialPasswordInput"></a>

```python
tde_credential_password_input: str
```

- *Type:* str

---

##### `timezone_input`<sup>Optional</sup> <a name="timezone_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.timezoneInput"></a>

```python
timezone_input: str
```

- *Type:* str

---

##### `use_default_processor_features_input`<sup>Optional</sup> <a name="use_default_processor_features_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.useDefaultProcessorFeaturesInput"></a>

```python
use_default_processor_features_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `use_latest_restorable_time_input`<sup>Optional</sup> <a name="use_latest_restorable_time_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.useLatestRestorableTimeInput"></a>

```python
use_latest_restorable_time_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `vpc_security_groups_input`<sup>Optional</sup> <a name="vpc_security_groups_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.vpcSecurityGroupsInput"></a>

```python
vpc_security_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allocated_storage`<sup>Required</sup> <a name="allocated_storage" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.allocatedStorage"></a>

```python
allocated_storage: str
```

- *Type:* str

---

##### `allow_major_version_upgrade`<sup>Required</sup> <a name="allow_major_version_upgrade" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.allowMajorVersionUpgrade"></a>

```python
allow_major_version_upgrade: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `apply_immediately`<sup>Required</sup> <a name="apply_immediately" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.applyImmediately"></a>

```python
apply_immediately: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `automatic_backup_replication_kms_key_id`<sup>Required</sup> <a name="automatic_backup_replication_kms_key_id" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.automaticBackupReplicationKmsKeyId"></a>

```python
automatic_backup_replication_kms_key_id: str
```

- *Type:* str

---

##### `automatic_backup_replication_region`<sup>Required</sup> <a name="automatic_backup_replication_region" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.automaticBackupReplicationRegion"></a>

```python
automatic_backup_replication_region: str
```

- *Type:* str

---

##### `automatic_backup_replication_retention_period`<sup>Required</sup> <a name="automatic_backup_replication_retention_period" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.automaticBackupReplicationRetentionPeriod"></a>

```python
automatic_backup_replication_retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `auto_minor_version_upgrade`<sup>Required</sup> <a name="auto_minor_version_upgrade" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.autoMinorVersionUpgrade"></a>

```python
auto_minor_version_upgrade: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `backup_retention_period`<sup>Required</sup> <a name="backup_retention_period" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.backupRetentionPeriod"></a>

```python
backup_retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backup_target`<sup>Required</sup> <a name="backup_target" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.backupTarget"></a>

```python
backup_target: str
```

- *Type:* str

---

##### `ca_certificate_identifier`<sup>Required</sup> <a name="ca_certificate_identifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.caCertificateIdentifier"></a>

```python
ca_certificate_identifier: str
```

- *Type:* str

---

##### `certificate_rotation_restart`<sup>Required</sup> <a name="certificate_rotation_restart" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.certificateRotationRestart"></a>

```python
certificate_rotation_restart: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `character_set_name`<sup>Required</sup> <a name="character_set_name" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.characterSetName"></a>

```python
character_set_name: str
```

- *Type:* str

---

##### `copy_tags_to_snapshot`<sup>Required</sup> <a name="copy_tags_to_snapshot" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.copyTagsToSnapshot"></a>

```python
copy_tags_to_snapshot: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `custom_iam_instance_profile`<sup>Required</sup> <a name="custom_iam_instance_profile" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.customIamInstanceProfile"></a>

```python
custom_iam_instance_profile: str
```

- *Type:* str

---

##### `database_insights_mode`<sup>Required</sup> <a name="database_insights_mode" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.databaseInsightsMode"></a>

```python
database_insights_mode: str
```

- *Type:* str

---

##### `db_cluster_identifier`<sup>Required</sup> <a name="db_cluster_identifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbClusterIdentifier"></a>

```python
db_cluster_identifier: str
```

- *Type:* str

---

##### `db_cluster_snapshot_identifier`<sup>Required</sup> <a name="db_cluster_snapshot_identifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbClusterSnapshotIdentifier"></a>

```python
db_cluster_snapshot_identifier: str
```

- *Type:* str

---

##### `db_instance_class`<sup>Required</sup> <a name="db_instance_class" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbInstanceClass"></a>

```python
db_instance_class: str
```

- *Type:* str

---

##### `db_instance_identifier`<sup>Required</sup> <a name="db_instance_identifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbInstanceIdentifier"></a>

```python
db_instance_identifier: str
```

- *Type:* str

---

##### `db_name`<sup>Required</sup> <a name="db_name" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbName"></a>

```python
db_name: str
```

- *Type:* str

---

##### `db_parameter_group_name`<sup>Required</sup> <a name="db_parameter_group_name" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbParameterGroupName"></a>

```python
db_parameter_group_name: str
```

- *Type:* str

---

##### `db_security_groups`<sup>Required</sup> <a name="db_security_groups" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSecurityGroups"></a>

```python
db_security_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `db_snapshot_identifier`<sup>Required</sup> <a name="db_snapshot_identifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSnapshotIdentifier"></a>

```python
db_snapshot_identifier: str
```

- *Type:* str

---

##### `db_subnet_group_name`<sup>Required</sup> <a name="db_subnet_group_name" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSubnetGroupName"></a>

```python
db_subnet_group_name: str
```

- *Type:* str

---

##### `db_system_id`<sup>Required</sup> <a name="db_system_id" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSystemId"></a>

```python
db_system_id: str
```

- *Type:* str

---

##### `dedicated_log_volume`<sup>Required</sup> <a name="dedicated_log_volume" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dedicatedLogVolume"></a>

```python
dedicated_log_volume: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `delete_automated_backups`<sup>Required</sup> <a name="delete_automated_backups" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.deleteAutomatedBackups"></a>

```python
delete_automated_backups: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `deletion_protection`<sup>Required</sup> <a name="deletion_protection" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.deletionProtection"></a>

```python
deletion_protection: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `domain_auth_secret_arn`<sup>Required</sup> <a name="domain_auth_secret_arn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainAuthSecretArn"></a>

```python
domain_auth_secret_arn: str
```

- *Type:* str

---

##### `domain_dns_ips`<sup>Required</sup> <a name="domain_dns_ips" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainDnsIps"></a>

```python
domain_dns_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `domain_fqdn`<sup>Required</sup> <a name="domain_fqdn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainFqdn"></a>

```python
domain_fqdn: str
```

- *Type:* str

---

##### `domain_iam_role_name`<sup>Required</sup> <a name="domain_iam_role_name" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainIamRoleName"></a>

```python
domain_iam_role_name: str
```

- *Type:* str

---

##### `domain_ou`<sup>Required</sup> <a name="domain_ou" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainOu"></a>

```python
domain_ou: str
```

- *Type:* str

---

##### `enable_cloudwatch_logs_exports`<sup>Required</sup> <a name="enable_cloudwatch_logs_exports" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.enableCloudwatchLogsExports"></a>

```python
enable_cloudwatch_logs_exports: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enable_iam_database_authentication`<sup>Required</sup> <a name="enable_iam_database_authentication" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.enableIamDatabaseAuthentication"></a>

```python
enable_iam_database_authentication: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_performance_insights`<sup>Required</sup> <a name="enable_performance_insights" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.enablePerformanceInsights"></a>

```python
enable_performance_insights: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.engine"></a>

```python
engine: str
```

- *Type:* str

---

##### `engine_lifecycle_support`<sup>Required</sup> <a name="engine_lifecycle_support" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.engineLifecycleSupport"></a>

```python
engine_lifecycle_support: str
```

- *Type:* str

---

##### `engine_version`<sup>Required</sup> <a name="engine_version" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `license_model`<sup>Required</sup> <a name="license_model" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

---

##### `manage_master_user_password`<sup>Required</sup> <a name="manage_master_user_password" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.manageMasterUserPassword"></a>

```python
manage_master_user_password: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `master_user_authentication_type`<sup>Required</sup> <a name="master_user_authentication_type" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUserAuthenticationType"></a>

```python
master_user_authentication_type: str
```

- *Type:* str

---

##### `master_username`<sup>Required</sup> <a name="master_username" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUsername"></a>

```python
master_username: str
```

- *Type:* str

---

##### `master_user_password`<sup>Required</sup> <a name="master_user_password" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUserPassword"></a>

```python
master_user_password: str
```

- *Type:* str

---

##### `max_allocated_storage`<sup>Required</sup> <a name="max_allocated_storage" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.maxAllocatedStorage"></a>

```python
max_allocated_storage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `monitoring_interval`<sup>Required</sup> <a name="monitoring_interval" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.monitoringInterval"></a>

```python
monitoring_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `monitoring_role_arn`<sup>Required</sup> <a name="monitoring_role_arn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.monitoringRoleArn"></a>

```python
monitoring_role_arn: str
```

- *Type:* str

---

##### `multi_az`<sup>Required</sup> <a name="multi_az" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.multiAz"></a>

```python
multi_az: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `nchar_character_set_name`<sup>Required</sup> <a name="nchar_character_set_name" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.ncharCharacterSetName"></a>

```python
nchar_character_set_name: str
```

- *Type:* str

---

##### `network_type`<sup>Required</sup> <a name="network_type" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.networkType"></a>

```python
network_type: str
```

- *Type:* str

---

##### `option_group_name`<sup>Required</sup> <a name="option_group_name" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.optionGroupName"></a>

```python
option_group_name: str
```

- *Type:* str

---

##### `performance_insights_kms_key_id`<sup>Required</sup> <a name="performance_insights_kms_key_id" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.performanceInsightsKmsKeyId"></a>

```python
performance_insights_kms_key_id: str
```

- *Type:* str

---

##### `performance_insights_retention_period`<sup>Required</sup> <a name="performance_insights_retention_period" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.performanceInsightsRetentionPeriod"></a>

```python
performance_insights_retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.port"></a>

```python
port: str
```

- *Type:* str

---

##### `preferred_backup_window`<sup>Required</sup> <a name="preferred_backup_window" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.preferredBackupWindow"></a>

```python
preferred_backup_window: str
```

- *Type:* str

---

##### `preferred_maintenance_window`<sup>Required</sup> <a name="preferred_maintenance_window" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.preferredMaintenanceWindow"></a>

```python
preferred_maintenance_window: str
```

- *Type:* str

---

##### `promotion_tier`<sup>Required</sup> <a name="promotion_tier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.promotionTier"></a>

```python
promotion_tier: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `publicly_accessible`<sup>Required</sup> <a name="publicly_accessible" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.publiclyAccessible"></a>

```python
publicly_accessible: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `replica_mode`<sup>Required</sup> <a name="replica_mode" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.replicaMode"></a>

```python
replica_mode: str
```

- *Type:* str

---

##### `restore_time`<sup>Required</sup> <a name="restore_time" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.restoreTime"></a>

```python
restore_time: str
```

- *Type:* str

---

##### `source_db_cluster_identifier`<sup>Required</sup> <a name="source_db_cluster_identifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbClusterIdentifier"></a>

```python
source_db_cluster_identifier: str
```

- *Type:* str

---

##### `source_db_instance_automated_backups_arn`<sup>Required</sup> <a name="source_db_instance_automated_backups_arn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbInstanceAutomatedBackupsArn"></a>

```python
source_db_instance_automated_backups_arn: str
```

- *Type:* str

---

##### `source_db_instance_identifier`<sup>Required</sup> <a name="source_db_instance_identifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbInstanceIdentifier"></a>

```python
source_db_instance_identifier: str
```

- *Type:* str

---

##### `source_dbi_resource_id`<sup>Required</sup> <a name="source_dbi_resource_id" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbiResourceId"></a>

```python
source_dbi_resource_id: str
```

- *Type:* str

---

##### `source_region`<sup>Required</sup> <a name="source_region" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceRegion"></a>

```python
source_region: str
```

- *Type:* str

---

##### `storage_encrypted`<sup>Required</sup> <a name="storage_encrypted" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.storageEncrypted"></a>

```python
storage_encrypted: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `storage_throughput`<sup>Required</sup> <a name="storage_throughput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.storageThroughput"></a>

```python
storage_throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_type`<sup>Required</sup> <a name="storage_type" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.storageType"></a>

```python
storage_type: str
```

- *Type:* str

---

##### `tde_credential_arn`<sup>Required</sup> <a name="tde_credential_arn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.tdeCredentialArn"></a>

```python
tde_credential_arn: str
```

- *Type:* str

---

##### `tde_credential_password`<sup>Required</sup> <a name="tde_credential_password" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.tdeCredentialPassword"></a>

```python
tde_credential_password: str
```

- *Type:* str

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

##### `use_default_processor_features`<sup>Required</sup> <a name="use_default_processor_features" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.useDefaultProcessorFeatures"></a>

```python
use_default_processor_features: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `use_latest_restorable_time`<sup>Required</sup> <a name="use_latest_restorable_time" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.useLatestRestorableTime"></a>

```python
use_latest_restorable_time: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `vpc_security_groups`<sup>Required</sup> <a name="vpc_security_groups" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.vpcSecurityGroups"></a>

```python
vpc_security_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RdsDbInstanceAdditionalStorageVolumes <a name="RdsDbInstanceAdditionalStorageVolumes" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_instance

rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes(
  allocated_storage: str = None,
  iops: typing.Union[int, float] = None,
  max_allocated_storage: typing.Union[int, float] = None,
  storage_throughput: typing.Union[int, float] = None,
  storage_type: str = None,
  volume_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.property.allocatedStorage">allocated_storage</a></code> | <code>str</code> | The amount of storage allocated for the additional storage volume, in gibibytes (GiB). |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | The number of I/O operations per second (IOPS) provisioned for the additional storage volume. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.property.maxAllocatedStorage">max_allocated_storage</a></code> | <code>typing.Union[int, float]</code> | The upper limit in gibibytes (GiB) to which RDS can automatically scale the storage of the additional storage volume. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.property.storageThroughput">storage_throughput</a></code> | <code>typing.Union[int, float]</code> | The storage throughput value for the additional storage volume, in mebibytes per second (MiBps). |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.property.storageType">storage_type</a></code> | <code>str</code> | The storage type for the additional storage volume.  Valid Values: ``GP3 \| IO2``. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.property.volumeName">volume_name</a></code> | <code>str</code> | The name of the additional storage volume.  Valid Values: ``RDSDBDATA2 \| RDSDBDATA3 \| RDSDBDATA4``. |

---

##### `allocated_storage`<sup>Optional</sup> <a name="allocated_storage" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.property.allocatedStorage"></a>

```python
allocated_storage: str
```

- *Type:* str

The amount of storage allocated for the additional storage volume, in gibibytes (GiB).

The minimum is 20 GiB. The maximum is 65,536 GiB (64 TiB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#allocated_storage RdsDbInstance#allocated_storage}

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of I/O operations per second (IOPS) provisioned for the additional storage volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#iops RdsDbInstance#iops}

---

##### `max_allocated_storage`<sup>Optional</sup> <a name="max_allocated_storage" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.property.maxAllocatedStorage"></a>

```python
max_allocated_storage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The upper limit in gibibytes (GiB) to which RDS can automatically scale the storage of the additional storage volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#max_allocated_storage RdsDbInstance#max_allocated_storage}

---

##### `storage_throughput`<sup>Optional</sup> <a name="storage_throughput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.property.storageThroughput"></a>

```python
storage_throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The storage throughput value for the additional storage volume, in mebibytes per second (MiBps).

This setting applies only to the General Purpose SSD (`gp3`) storage type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#storage_throughput RdsDbInstance#storage_throughput}

---

##### `storage_type`<sup>Optional</sup> <a name="storage_type" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.property.storageType"></a>

```python
storage_type: str
```

- *Type:* str

The storage type for the additional storage volume.  Valid Values: ``GP3 | IO2``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#storage_type RdsDbInstance#storage_type}

---

##### `volume_name`<sup>Optional</sup> <a name="volume_name" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.property.volumeName"></a>

```python
volume_name: str
```

- *Type:* str

The name of the additional storage volume.  Valid Values: ``RDSDBDATA2 | RDSDBDATA3 | RDSDBDATA4``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#volume_name RdsDbInstance#volume_name}

---

### RdsDbInstanceAssociatedRoles <a name="RdsDbInstanceAssociatedRoles" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRoles.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_instance

rdsDbInstance.RdsDbInstanceAssociatedRoles(
  feature_name: str = None,
  role_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRoles.property.featureName">feature_name</a></code> | <code>str</code> | The name of the feature associated with the AWS Identity and Access Management (IAM) role. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRoles.property.roleArn">role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the IAM role that is associated with the DB instance. |

---

##### `feature_name`<sup>Optional</sup> <a name="feature_name" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRoles.property.featureName"></a>

```python
feature_name: str
```

- *Type:* str

The name of the feature associated with the AWS Identity and Access Management (IAM) role.

IAM roles that are associated with a DB instance grant permission for the DB instance to access other AWS services on your behalf. For the list of supported feature names, see the `SupportedFeatureNames` description in [DBEngineVersion](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DBEngineVersion.html) in the *Amazon RDS API Reference*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#feature_name RdsDbInstance#feature_name}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRoles.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the IAM role that is associated with the DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#role_arn RdsDbInstance#role_arn}

---

### RdsDbInstanceCertificateDetails <a name="RdsDbInstanceCertificateDetails" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetails.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_instance

rdsDbInstance.RdsDbInstanceCertificateDetails()
```


### RdsDbInstanceConfig <a name="RdsDbInstanceConfig" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_instance

rdsDbInstance.RdsDbInstanceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  additional_storage_volumes: IResolvable | typing.List[RdsDbInstanceAdditionalStorageVolumes] = None,
  allocated_storage: str = None,
  allow_major_version_upgrade: bool | IResolvable = None,
  apply_immediately: bool | IResolvable = None,
  associated_roles: IResolvable | typing.List[RdsDbInstanceAssociatedRoles] = None,
  automatic_backup_replication_kms_key_id: str = None,
  automatic_backup_replication_region: str = None,
  automatic_backup_replication_retention_period: typing.Union[int, float] = None,
  auto_minor_version_upgrade: bool | IResolvable = None,
  availability_zone: str = None,
  backup_retention_period: typing.Union[int, float] = None,
  backup_target: str = None,
  ca_certificate_identifier: str = None,
  certificate_rotation_restart: bool | IResolvable = None,
  character_set_name: str = None,
  copy_tags_to_snapshot: bool | IResolvable = None,
  custom_iam_instance_profile: str = None,
  database_insights_mode: str = None,
  db_cluster_identifier: str = None,
  db_cluster_snapshot_identifier: str = None,
  db_instance_class: str = None,
  db_instance_identifier: str = None,
  db_name: str = None,
  db_parameter_group_name: str = None,
  db_security_groups: typing.List[str] = None,
  db_snapshot_identifier: str = None,
  db_subnet_group_name: str = None,
  db_system_id: str = None,
  dedicated_log_volume: bool | IResolvable = None,
  delete_automated_backups: bool | IResolvable = None,
  deletion_protection: bool | IResolvable = None,
  domain: str = None,
  domain_auth_secret_arn: str = None,
  domain_dns_ips: typing.List[str] = None,
  domain_fqdn: str = None,
  domain_iam_role_name: str = None,
  domain_ou: str = None,
  enable_cloudwatch_logs_exports: typing.List[str] = None,
  enable_iam_database_authentication: bool | IResolvable = None,
  enable_performance_insights: bool | IResolvable = None,
  engine: str = None,
  engine_lifecycle_support: str = None,
  engine_version: str = None,
  iops: typing.Union[int, float] = None,
  kms_key_id: str = None,
  license_model: str = None,
  manage_master_user_password: bool | IResolvable = None,
  master_user_authentication_type: str = None,
  master_username: str = None,
  master_user_password: str = None,
  master_user_secret: RdsDbInstanceMasterUserSecret = None,
  max_allocated_storage: typing.Union[int, float] = None,
  monitoring_interval: typing.Union[int, float] = None,
  monitoring_role_arn: str = None,
  multi_az: bool | IResolvable = None,
  nchar_character_set_name: str = None,
  network_type: str = None,
  option_group_name: str = None,
  performance_insights_kms_key_id: str = None,
  performance_insights_retention_period: typing.Union[int, float] = None,
  port: str = None,
  preferred_backup_window: str = None,
  preferred_maintenance_window: str = None,
  processor_features: IResolvable | typing.List[RdsDbInstanceProcessorFeatures] = None,
  promotion_tier: typing.Union[int, float] = None,
  publicly_accessible: bool | IResolvable = None,
  replica_mode: str = None,
  restore_time: str = None,
  source_db_cluster_identifier: str = None,
  source_db_instance_automated_backups_arn: str = None,
  source_db_instance_identifier: str = None,
  source_dbi_resource_id: str = None,
  source_region: str = None,
  storage_encrypted: bool | IResolvable = None,
  storage_throughput: typing.Union[int, float] = None,
  storage_type: str = None,
  tags: IResolvable | typing.List[RdsDbInstanceTags] = None,
  tde_credential_arn: str = None,
  tde_credential_password: str = None,
  timezone: str = None,
  use_default_processor_features: bool | IResolvable = None,
  use_latest_restorable_time: bool | IResolvable = None,
  vpc_security_groups: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.additionalStorageVolumes">additional_storage_volumes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes">RdsDbInstanceAdditionalStorageVolumes</a>]</code> | The additional storage volumes associated with the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.allocatedStorage">allocated_storage</a></code> | <code>str</code> | The amount of storage in gibibytes (GiB) to be initially allocated for the database instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.allowMajorVersionUpgrade">allow_major_version_upgrade</a></code> | <code>bool \| cdktn.IResolvable</code> | A value that indicates whether major version upgrades are allowed. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.applyImmediately">apply_immediately</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether changes to the DB instance and any pending modifications are applied immediately, regardless of the ``PreferredMaintenanceWindow`` setting. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.associatedRoles">associated_roles</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRoles">RdsDbInstanceAssociatedRoles</a>]</code> | The IAMlong (IAM) roles associated with the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.automaticBackupReplicationKmsKeyId">automatic_backup_replication_kms_key_id</a></code> | <code>str</code> | The AWS KMS key identifier for encryption of the replicated automated backups. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.automaticBackupReplicationRegion">automatic_backup_replication_region</a></code> | <code>str</code> | The AWS-Region associated with the automated backup. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.automaticBackupReplicationRetentionPeriod">automatic_backup_replication_retention_period</a></code> | <code>typing.Union[int, float]</code> | The retention period for automated backups in a different AWS Region. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.autoMinorVersionUpgrade">auto_minor_version_upgrade</a></code> | <code>bool \| cdktn.IResolvable</code> | A value that indicates whether minor engine upgrades are applied automatically to the DB instance during the maintenance window. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.availabilityZone">availability_zone</a></code> | <code>str</code> | The Availability Zone (AZ) where the database will be created. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.backupRetentionPeriod">backup_retention_period</a></code> | <code>typing.Union[int, float]</code> | The number of days for which automated backups are retained. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.backupTarget">backup_target</a></code> | <code>str</code> | The location for storing automated backups and manual snapshots. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.caCertificateIdentifier">ca_certificate_identifier</a></code> | <code>str</code> | The identifier of the CA certificate for this DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.certificateRotationRestart">certificate_rotation_restart</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the DB instance is restarted when you rotate your SSL/TLS certificate. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.characterSetName">character_set_name</a></code> | <code>str</code> | For supported engines, indicates that the DB instance should be associated with the specified character set. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.copyTagsToSnapshot">copy_tags_to_snapshot</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether to copy tags from the DB instance to snapshots of the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.customIamInstanceProfile">custom_iam_instance_profile</a></code> | <code>str</code> | The instance profile associated with the underlying Amazon EC2 instance of an RDS Custom DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.databaseInsightsMode">database_insights_mode</a></code> | <code>str</code> | The mode of Database Insights to enable for the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbClusterIdentifier">db_cluster_identifier</a></code> | <code>str</code> | The identifier of the DB cluster that this DB instance will belong to. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbClusterSnapshotIdentifier">db_cluster_snapshot_identifier</a></code> | <code>str</code> | The identifier for the Multi-AZ DB cluster snapshot to restore from. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbInstanceClass">db_instance_class</a></code> | <code>str</code> | The compute and memory capacity of the DB instance, for example ``db.m5.large``. Not all DB instance classes are available in all AWS-Regions, or for all database engines. For the full list of DB instance classes, and availability for your engine, see [DB instance classes](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html) in the *Amazon RDS User Guide* or [Aurora DB instance classes](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.DBInstanceClass.html) in the *Amazon Aurora User Guide*. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbInstanceIdentifier">db_instance_identifier</a></code> | <code>str</code> | A name for the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbName">db_name</a></code> | <code>str</code> | The meaning of this parameter differs according to the database engine you use. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbParameterGroupName">db_parameter_group_name</a></code> | <code>str</code> | The name of an existing DB parameter group or a reference to an [AWS::RDS::DBParameterGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbparametergroup.html) resource created in the template.  To list all of the available DB parameter group names, use the following command:   ``aws rds describe-db-parameter-groups --query "DBParameterGroups[].DBParameterGroupName" --output text``    If any of the data members of the referenced parameter group are changed during an update, the DB instance might need to be restarted, which causes some interruption. If the parameter group contains static parameters, whether they were changed or not, an update triggers a reboot.   If you don't specify a value for ``DBParameterGroupName`` property, the default DB parameter group for the specified engine and engine version is used. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbSecurityGroups">db_security_groups</a></code> | <code>typing.List[str]</code> | A list of the DB security groups to assign to the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbSnapshotIdentifier">db_snapshot_identifier</a></code> | <code>str</code> | The name or Amazon Resource Name (ARN) of the DB snapshot that's used to restore the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbSubnetGroupName">db_subnet_group_name</a></code> | <code>str</code> | A DB subnet group to associate with the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbSystemId">db_system_id</a></code> | <code>str</code> | The Oracle system identifier (SID), which is the name of the Oracle database instance that manages your database files. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dedicatedLogVolume">dedicated_log_volume</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether the DB instance has a dedicated log volume (DLV) enabled. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.deleteAutomatedBackups">delete_automated_backups</a></code> | <code>bool \| cdktn.IResolvable</code> | A value that indicates whether to remove automated backups immediately after the DB instance is deleted. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.deletionProtection">deletion_protection</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the DB instance has deletion protection enabled. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.domain">domain</a></code> | <code>str</code> | The Active Directory directory ID to create the DB instance in. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.domainAuthSecretArn">domain_auth_secret_arn</a></code> | <code>str</code> | The ARN for the Secrets Manager secret with the credentials for the user joining the domain.  Example: ``arn:aws:secretsmanager:region:account-number:secret:myselfmanagedADtestsecret-123456``. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.domainDnsIps">domain_dns_ips</a></code> | <code>typing.List[str]</code> | The IPv4 DNS IP addresses of your primary and secondary Active Directory domain controllers. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.domainFqdn">domain_fqdn</a></code> | <code>str</code> | The fully qualified domain name (FQDN) of an Active Directory domain. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.domainIamRoleName">domain_iam_role_name</a></code> | <code>str</code> | The name of the IAM role to use when making API calls to the Directory Service. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.domainOu">domain_ou</a></code> | <code>str</code> | The Active Directory organizational unit for your DB instance to join. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.enableCloudwatchLogsExports">enable_cloudwatch_logs_exports</a></code> | <code>typing.List[str]</code> | The list of log types that need to be enabled for exporting to CloudWatch Logs. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.enableIamDatabaseAuthentication">enable_iam_database_authentication</a></code> | <code>bool \| cdktn.IResolvable</code> | A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.enablePerformanceInsights">enable_performance_insights</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether to enable Performance Insights for the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.engine">engine</a></code> | <code>str</code> | The name of the database engine to use for this DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.engineLifecycleSupport">engine_lifecycle_support</a></code> | <code>str</code> | The lifecycle type for this DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.engineVersion">engine_version</a></code> | <code>str</code> | The version number of the database engine to use. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | The number of I/O operations per second (IOPS) that the database provisions. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The ARN of the AWS KMS key that's used to encrypt the DB instance, such as ``arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef``. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.licenseModel">license_model</a></code> | <code>str</code> | License model information for this DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.manageMasterUserPassword">manage_master_user_password</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether to manage the master user password with AWS Secrets Manager. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.masterUserAuthenticationType">master_user_authentication_type</a></code> | <code>str</code> | Specifies the authentication type for the master user. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.masterUsername">master_username</a></code> | <code>str</code> | The master user name for the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.masterUserPassword">master_user_password</a></code> | <code>str</code> | The password for the master user. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.masterUserSecret">master_user_secret</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecret">RdsDbInstanceMasterUserSecret</a></code> | The secret managed by RDS in AWS Secrets Manager for the master user password. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.maxAllocatedStorage">max_allocated_storage</a></code> | <code>typing.Union[int, float]</code> | The upper limit in gibibytes (GiB) to which Amazon RDS can automatically scale the storage of the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.monitoringInterval">monitoring_interval</a></code> | <code>typing.Union[int, float]</code> | The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.monitoringRoleArn">monitoring_role_arn</a></code> | <code>str</code> | The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to Amazon CloudWatch Logs. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.multiAz">multi_az</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the DB instance is a Multi-AZ deployment. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.ncharCharacterSetName">nchar_character_set_name</a></code> | <code>str</code> | The name of the NCHAR character set for the Oracle DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.networkType">network_type</a></code> | <code>str</code> | The network type of the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.optionGroupName">option_group_name</a></code> | <code>str</code> | Indicates that the DB instance should be associated with the specified option group. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.performanceInsightsKmsKeyId">performance_insights_kms_key_id</a></code> | <code>str</code> | The AWS KMS key identifier for encryption of Performance Insights data. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.performanceInsightsRetentionPeriod">performance_insights_retention_period</a></code> | <code>typing.Union[int, float]</code> | The number of days to retain Performance Insights data. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.port">port</a></code> | <code>str</code> | The port number on which the database accepts connections. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.preferredBackupWindow">preferred_backup_window</a></code> | <code>str</code> | The daily time range during which automated backups are created if automated backups are enabled, using the ``BackupRetentionPeriod`` parameter. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.preferredMaintenanceWindow">preferred_maintenance_window</a></code> | <code>str</code> | The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC). |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.processorFeatures">processor_features</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeatures">RdsDbInstanceProcessorFeatures</a>]</code> | The number of CPU cores and the number of threads per core for the DB instance class of the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.promotionTier">promotion_tier</a></code> | <code>typing.Union[int, float]</code> | The order of priority in which an Aurora Replica is promoted to the primary instance after a failure of the existing primary instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.publiclyAccessible">publicly_accessible</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether the DB instance is an internet-facing instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.replicaMode">replica_mode</a></code> | <code>str</code> | The open mode of an Oracle read replica. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.restoreTime">restore_time</a></code> | <code>str</code> | The date and time to restore from. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.sourceDbClusterIdentifier">source_db_cluster_identifier</a></code> | <code>str</code> | The identifier of the Multi-AZ DB cluster that will act as the source for the read replica. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.sourceDbInstanceAutomatedBackupsArn">source_db_instance_automated_backups_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the replicated automated backups from which to restore, for example, ``arn:aws:rds:us-east-1:123456789012:auto-backup:ab-L2IJCEXJP7XQ7HOJ4SIEXAMPLE``. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.sourceDbInstanceIdentifier">source_db_instance_identifier</a></code> | <code>str</code> | If you want to create a read replica DB instance, specify the ID of the source DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.sourceDbiResourceId">source_dbi_resource_id</a></code> | <code>str</code> | The resource ID of the source DB instance from which to restore. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.sourceRegion">source_region</a></code> | <code>str</code> | The ID of the region that contains the source DB instance for the read replica. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.storageEncrypted">storage_encrypted</a></code> | <code>bool \| cdktn.IResolvable</code> | A value that indicates whether the DB instance is encrypted. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.storageThroughput">storage_throughput</a></code> | <code>typing.Union[int, float]</code> | Specifies the storage throughput value, in mebibyte per second (MiBps), for the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.storageType">storage_type</a></code> | <code>str</code> | The storage type to associate with the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTags">RdsDbInstanceTags</a>]</code> | Tags to assign to the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.tdeCredentialArn">tde_credential_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#tde_credential_arn RdsDbInstance#tde_credential_arn}. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.tdeCredentialPassword">tde_credential_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#tde_credential_password RdsDbInstance#tde_credential_password}. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.timezone">timezone</a></code> | <code>str</code> | The time zone of the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.useDefaultProcessorFeatures">use_default_processor_features</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the DB instance class of the DB instance uses its default processor features. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.useLatestRestorableTime">use_latest_restorable_time</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the DB instance is restored from the latest backup time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.vpcSecurityGroups">vpc_security_groups</a></code> | <code>typing.List[str]</code> | A list of the VPC security group IDs to assign to the DB instance. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `additional_storage_volumes`<sup>Optional</sup> <a name="additional_storage_volumes" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.additionalStorageVolumes"></a>

```python
additional_storage_volumes: IResolvable | typing.List[RdsDbInstanceAdditionalStorageVolumes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes">RdsDbInstanceAdditionalStorageVolumes</a>]

The additional storage volumes associated with the DB instance.

RDS supports additional storage volumes for RDS for Oracle and RDS for SQL Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#additional_storage_volumes RdsDbInstance#additional_storage_volumes}

---

##### `allocated_storage`<sup>Optional</sup> <a name="allocated_storage" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.allocatedStorage"></a>

```python
allocated_storage: str
```

- *Type:* str

The amount of storage in gibibytes (GiB) to be initially allocated for the database instance.

If any value is set in the `Iops` parameter, `AllocatedStorage` must be at least 100 GiB, which corresponds to the minimum Iops value of 1,000. If you increase the `Iops` value (in 1,000 IOPS increments), then you must also increase the `AllocatedStorage` value (in 100-GiB increments).
*Amazon Aurora*
Not applicable. Aurora cluster volumes automatically grow as the amount of data in your database increases, though you are only charged for the space that you use in an Aurora cluster volume.
*Db2*
Constraints to the amount of storage for each storage type are the following:

* General Purpose (SSD) storage (gp3): Must be an integer from 20 to 64000.
* Provisioned IOPS storage (io1): Must be an integer from 100 to 64000.

*MySQL*
Constraints to the amount of storage for each storage type are the following:

* General Purpose (SSD) storage (gp2): Must be an integer from 20 to 65536.
* Provisioned IOPS storage (io1): Must be an integer from 100 to 65536.
* Magnetic storage (standard): Must be an integer from 5 to 3072.

*MariaDB*
Constraints to the amount of storage for each storage type are the following:

* General Purpose (SSD) storage (gp2): Must be an integer from 20 to 65536.
* Provisioned IOPS storage (io1): Must be an integer from 100 to 65536.
* Magnetic storage (standard): Must be an integer from 5 to 3072.

*PostgreSQL*
Constraints to the amount of storage for each storage type are the following:

* General Purpose (SSD) storage (gp2): Must be an integer from 20 to 65536.
* Provisioned IOPS storage (io1): Must be an integer from 100 to 65536.
* Magnetic storage (standard): Must be an integer from 5 to 3072.

*Oracle*
Constraints to the amount of storage for each storage type are the following:

* General Purpose (SSD) storage (gp2): Must be an integer from 20 to 65536.
* Provisioned IOPS storage (io1): Must be an integer from 100 to 65536.
* Magnetic storage (standard): Must be an integer from 10 to 3072.

*SQL Server*
Constraints to the amount of storage for each storage type are the following:

* General Purpose (SSD) storage (gp2):
* Enterprise and Standard editions: Must be an integer from 20 to 16384.
* Web and Express editions: Must be an integer from 20 to 16384.
* Provisioned IOPS storage (io1):
* Enterprise and Standard editions: Must be an integer from 20 to 16384.
* Web and Express editions: Must be an integer from 20 to 16384.
* Magnetic storage (standard):
* Enterprise and Standard editions: Must be an integer from 20 to 1024.
* Web and Express editions: Must be an integer from 20 to 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#allocated_storage RdsDbInstance#allocated_storage}

---

##### `allow_major_version_upgrade`<sup>Optional</sup> <a name="allow_major_version_upgrade" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.allowMajorVersionUpgrade"></a>

```python
allow_major_version_upgrade: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A value that indicates whether major version upgrades are allowed.

Changing this parameter doesn't result in an outage and the change is asynchronously applied as soon as possible.
Constraints: Major version upgrades must be allowed when specifying a value for the `EngineVersion` parameter that is a different major version than the DB instance's current version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#allow_major_version_upgrade RdsDbInstance#allow_major_version_upgrade}

---

##### `apply_immediately`<sup>Optional</sup> <a name="apply_immediately" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.applyImmediately"></a>

```python
apply_immediately: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether changes to the DB instance and any pending modifications are applied immediately, regardless of the ``PreferredMaintenanceWindow`` setting.

If set to `false`, changes are applied during the next maintenance window. Until RDS applies the changes, the DB instance remains in a drift state. As a result, the configuration doesn't fully reflect the requested modifications and temporarily diverges from the intended state.
In addition to the settings described in [Modifying a DB instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBInstance.Modifying.html), this property also determines whether the DB instance reboots when a static parameter is modified in the associated DB parameter group.
Default: `true`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#apply_immediately RdsDbInstance#apply_immediately}

---

##### `associated_roles`<sup>Optional</sup> <a name="associated_roles" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.associatedRoles"></a>

```python
associated_roles: IResolvable | typing.List[RdsDbInstanceAssociatedRoles]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRoles">RdsDbInstanceAssociatedRoles</a>]

The IAMlong (IAM) roles associated with the DB instance.

*Amazon Aurora*
Not applicable. The associated roles are managed by the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#associated_roles RdsDbInstance#associated_roles}

---

##### `automatic_backup_replication_kms_key_id`<sup>Optional</sup> <a name="automatic_backup_replication_kms_key_id" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.automaticBackupReplicationKmsKeyId"></a>

```python
automatic_backup_replication_kms_key_id: str
```

- *Type:* str

The AWS KMS key identifier for encryption of the replicated automated backups.

The KMS key ID is the Amazon Resource Name (ARN) for the KMS encryption key in the destination AWS-Region, for example, `arn:aws:kms:us-east-1:123456789012:key/AKIAIOSFODNN7EXAMPLE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#automatic_backup_replication_kms_key_id RdsDbInstance#automatic_backup_replication_kms_key_id}

---

##### `automatic_backup_replication_region`<sup>Optional</sup> <a name="automatic_backup_replication_region" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.automaticBackupReplicationRegion"></a>

```python
automatic_backup_replication_region: str
```

- *Type:* str

The AWS-Region associated with the automated backup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#automatic_backup_replication_region RdsDbInstance#automatic_backup_replication_region}

---

##### `automatic_backup_replication_retention_period`<sup>Optional</sup> <a name="automatic_backup_replication_retention_period" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.automaticBackupReplicationRetentionPeriod"></a>

```python
automatic_backup_replication_retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The retention period for automated backups in a different AWS Region.

Use this parameter to set a unique retention period that only applies to cross-Region automated backups. To enable automated backups in a different Region, specify a positive value for the `AutomaticBackupReplicationRegion` parameter.
If not specified, this parameter defaults to the value of the `BackupRetentionPeriod` parameter. The maximum allowed value is 35.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#automatic_backup_replication_retention_period RdsDbInstance#automatic_backup_replication_retention_period}

---

##### `auto_minor_version_upgrade`<sup>Optional</sup> <a name="auto_minor_version_upgrade" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.autoMinorVersionUpgrade"></a>

```python
auto_minor_version_upgrade: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A value that indicates whether minor engine upgrades are applied automatically to the DB instance during the maintenance window.

By default, minor engine upgrades are applied automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#auto_minor_version_upgrade RdsDbInstance#auto_minor_version_upgrade}

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

The Availability Zone (AZ) where the database will be created.

For information on AWS-Regions and Availability Zones, see [Regions and Availability Zones](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html).
For Amazon Aurora, each Aurora DB cluster hosts copies of its storage in three separate Availability Zones. Specify one of these Availability Zones. Aurora automatically chooses an appropriate Availability Zone if you don't specify one.
Default: A random, system-chosen Availability Zone in the endpoint's AWS-Region.
Constraints:

* The `AvailabilityZone` parameter can't be specified if the DB instance is a Multi-AZ deployment.
* The specified Availability Zone must be in the same AWS-Region as the current endpoint.

Example: `us-east-1d`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#availability_zone RdsDbInstance#availability_zone}

---

##### `backup_retention_period`<sup>Optional</sup> <a name="backup_retention_period" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.backupRetentionPeriod"></a>

```python
backup_retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of days for which automated backups are retained.

Setting this parameter to a positive number enables backups. Setting this parameter to 0 disables automated backups.
*Amazon Aurora*
Not applicable. The retention period for automated backups is managed by the DB cluster.
Default: 1
Constraints:

* Must be a value from 0 to 35
* Can't be set to 0 if the DB instance is a source to read replicas

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#backup_retention_period RdsDbInstance#backup_retention_period}

---

##### `backup_target`<sup>Optional</sup> <a name="backup_target" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.backupTarget"></a>

```python
backup_target: str
```

- *Type:* str

The location for storing automated backups and manual snapshots.

Valid Values:

* `local` (Dedicated Local Zone)
* `outposts` (AWS Outposts)
* `region` (AWS-Region)

Default: `region`
For more information, see [Working with Amazon RDS on Outposts](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-on-outposts.html) in the *Amazon RDS User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#backup_target RdsDbInstance#backup_target}

---

##### `ca_certificate_identifier`<sup>Optional</sup> <a name="ca_certificate_identifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.caCertificateIdentifier"></a>

```python
ca_certificate_identifier: str
```

- *Type:* str

The identifier of the CA certificate for this DB instance.

For more information, see [Using SSL/TLS to encrypt a connection to a DB instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html) in the *Amazon RDS User Guide* and [Using SSL/TLS to encrypt a connection to a DB cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL.html) in the *Amazon Aurora User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#ca_certificate_identifier RdsDbInstance#ca_certificate_identifier}

---

##### `certificate_rotation_restart`<sup>Optional</sup> <a name="certificate_rotation_restart" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.certificateRotationRestart"></a>

```python
certificate_rotation_restart: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether the DB instance is restarted when you rotate your SSL/TLS certificate.

By default, the DB instance is restarted when you rotate your SSL/TLS certificate. The certificate is not updated until the DB instance is restarted.
Set this parameter only if you are *not* using SSL/TLS to connect to the DB instance.
If you are using SSL/TLS to connect to the DB instance, follow the appropriate instructions for your DB engine to rotate your SSL/TLS certificate:

* For more information about rotating your SSL/TLS certificate for RDS DB engines, see [Rotating Your SSL/TLS Certificate.](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL-certificate-rotation.html) in the *Amazon RDS User Guide.*
* For more information about rotating your SSL/TLS certificate for Aurora DB engines, see [Rotating Your SSL/TLS Certificate](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL-certificate-rotation.html) in the *Amazon Aurora User Guide*.

This setting doesn't apply to RDS Custom DB instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#certificate_rotation_restart RdsDbInstance#certificate_rotation_restart}

---

##### `character_set_name`<sup>Optional</sup> <a name="character_set_name" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.characterSetName"></a>

```python
character_set_name: str
```

- *Type:* str

For supported engines, indicates that the DB instance should be associated with the specified character set.

*Amazon Aurora*
Not applicable. The character set is managed by the DB cluster. For more information, see [AWS::RDS::DBCluster](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#character_set_name RdsDbInstance#character_set_name}

---

##### `copy_tags_to_snapshot`<sup>Optional</sup> <a name="copy_tags_to_snapshot" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.copyTagsToSnapshot"></a>

```python
copy_tags_to_snapshot: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether to copy tags from the DB instance to snapshots of the DB instance.

By default, tags are not copied.
This setting doesn't apply to Amazon Aurora DB instances. Copying tags to snapshots is managed by the DB cluster. Setting this value for an Aurora DB instance has no effect on the DB cluster setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#copy_tags_to_snapshot RdsDbInstance#copy_tags_to_snapshot}

---

##### `custom_iam_instance_profile`<sup>Optional</sup> <a name="custom_iam_instance_profile" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.customIamInstanceProfile"></a>

```python
custom_iam_instance_profile: str
```

- *Type:* str

The instance profile associated with the underlying Amazon EC2 instance of an RDS Custom DB instance.

This setting is required for RDS Custom.
Constraints:

* The profile must exist in your account.
* The profile must have an IAM role that Amazon EC2 has permissions to assume.
* The instance profile name and the associated IAM role name must start with the prefix `AWSRDSCustom`.

For the list of permissions required for the IAM role, see [Configure IAM and your VPC](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-setup-orcl.html#custom-setup-orcl.iam-vpc) in the *Amazon RDS User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#custom_iam_instance_profile RdsDbInstance#custom_iam_instance_profile}

---

##### `database_insights_mode`<sup>Optional</sup> <a name="database_insights_mode" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.databaseInsightsMode"></a>

```python
database_insights_mode: str
```

- *Type:* str

The mode of Database Insights to enable for the DB instance.

Aurora DB instances inherit this value from the DB cluster, so you can't change this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#database_insights_mode RdsDbInstance#database_insights_mode}

---

##### `db_cluster_identifier`<sup>Optional</sup> <a name="db_cluster_identifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbClusterIdentifier"></a>

```python
db_cluster_identifier: str
```

- *Type:* str

The identifier of the DB cluster that this DB instance will belong to.

This setting doesn't apply to RDS Custom DB instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#db_cluster_identifier RdsDbInstance#db_cluster_identifier}

---

##### `db_cluster_snapshot_identifier`<sup>Optional</sup> <a name="db_cluster_snapshot_identifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbClusterSnapshotIdentifier"></a>

```python
db_cluster_snapshot_identifier: str
```

- *Type:* str

The identifier for the Multi-AZ DB cluster snapshot to restore from.

For more information on Multi-AZ DB clusters, see [Multi-AZ DB cluster deployments](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html) in the *Amazon RDS User Guide*.
Constraints:

* Must match the identifier of an existing Multi-AZ DB cluster snapshot.
* Can't be specified when `DBSnapshotIdentifier` is specified.
* Must be specified when `DBSnapshotIdentifier` isn't specified.
* If you are restoring from a shared manual Multi-AZ DB cluster snapshot, the `DBClusterSnapshotIdentifier` must be the ARN of the shared snapshot.
* Can't be the identifier of an Aurora DB cluster snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#db_cluster_snapshot_identifier RdsDbInstance#db_cluster_snapshot_identifier}

---

##### `db_instance_class`<sup>Optional</sup> <a name="db_instance_class" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbInstanceClass"></a>

```python
db_instance_class: str
```

- *Type:* str

The compute and memory capacity of the DB instance, for example ``db.m5.large``. Not all DB instance classes are available in all AWS-Regions, or for all database engines. For the full list of DB instance classes, and availability for your engine, see [DB instance classes](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html) in the *Amazon RDS User Guide* or [Aurora DB instance classes](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.DBInstanceClass.html) in the *Amazon Aurora User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#db_instance_class RdsDbInstance#db_instance_class}

---

##### `db_instance_identifier`<sup>Optional</sup> <a name="db_instance_identifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbInstanceIdentifier"></a>

```python
db_instance_identifier: str
```

- *Type:* str

A name for the DB instance.

If you specify a name, AWS CloudFormation converts it to lowercase. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the DB instance. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
For information about constraints that apply to DB instance identifiers, see [Naming constraints in Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Limits.html#RDS_Limits.Constraints) in the *Amazon RDS User Guide*.
If you specify a name, you can't perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#db_instance_identifier RdsDbInstance#db_instance_identifier}

---

##### `db_name`<sup>Optional</sup> <a name="db_name" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbName"></a>

```python
db_name: str
```

- *Type:* str

The meaning of this parameter differs according to the database engine you use.

If you specify the `DBSnapshotIdentifier` property, this property only applies to RDS for Oracle.
*Amazon Aurora*
Not applicable. The database name is managed by the DB cluster.
*Db2*
The name of the database to create when the DB instance is created. If this parameter isn't specified, no database is created in the DB instance.
Constraints:

* Must contain 1 to 64 letters or numbers.
* Must begin with a letter. Subsequent characters can be letters, underscores, or digits (0-9).
* Can't be a word reserved by the specified database engine.

*MySQL*
The name of the database to create when the DB instance is created. If this parameter is not specified, no database is created in the DB instance.
Constraints:

* Must contain 1 to 64 letters or numbers.
* Can't be a word reserved by the specified database engine

*MariaDB*
The name of the database to create when the DB instance is created. If this parameter is not specified, no database is created in the DB instance.
Constraints:

* Must contain 1 to 64 letters or numbers.
* Can't be a word reserved by the specified database engine

*PostgreSQL*
The name of the database to create when the DB instance is created. If this parameter is not specified, the default `postgres` database is created in the DB instance.
Constraints:

* Must begin with a letter. Subsequent characters can be letters, underscores, or digits (0-9).
* Must contain 1 to 63 characters.
* Can't be a word reserved by the specified database engine

*Oracle*
The Oracle System ID (SID) of the created DB instance. If you specify `null`, the default value `ORCL` is used. You can't specify the string NULL, or any other reserved word, for `DBName`.
Default: `ORCL`
Constraints:

* Can't be longer than 8 characters

*SQL Server*
Not applicable. Must be null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#db_name RdsDbInstance#db_name}

---

##### `db_parameter_group_name`<sup>Optional</sup> <a name="db_parameter_group_name" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbParameterGroupName"></a>

```python
db_parameter_group_name: str
```

- *Type:* str

The name of an existing DB parameter group or a reference to an [AWS::RDS::DBParameterGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbparametergroup.html) resource created in the template.  To list all of the available DB parameter group names, use the following command:   ``aws rds describe-db-parameter-groups --query "DBParameterGroups[].DBParameterGroupName" --output text``    If any of the data members of the referenced parameter group are changed during an update, the DB instance might need to be restarted, which causes some interruption. If the parameter group contains static parameters, whether they were changed or not, an update triggers a reboot.   If you don't specify a value for ``DBParameterGroupName`` property, the default DB parameter group for the specified engine and engine version is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#db_parameter_group_name RdsDbInstance#db_parameter_group_name}

---

##### `db_security_groups`<sup>Optional</sup> <a name="db_security_groups" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbSecurityGroups"></a>

```python
db_security_groups: typing.List[str]
```

- *Type:* typing.List[str]

A list of the DB security groups to assign to the DB instance.

The list can include both the name of existing DB security groups or references to AWS::RDS::DBSecurityGroup resources created in the template.
If you set DBSecurityGroups, you must not set VPCSecurityGroups, and vice versa. Also, note that the DBSecurityGroups property exists only for backwards compatibility with older regions and is no longer recommended for providing security information to an RDS DB instance. Instead, use VPCSecurityGroups.
If you specify this property, AWS CloudFormation sends only the following properties (if specified) to Amazon RDS during create operations:

* `AllocatedStorage`
* `AutoMinorVersionUpgrade`
* `AvailabilityZone`
* `BackupRetentionPeriod`
* `CharacterSetName`
* `DBInstanceClass`
* `DBName`
* `DBParameterGroupName`
* `DBSecurityGroups`
* `DBSubnetGroupName`
* `Engine`
* `EngineVersion`
* `Iops`
* `LicenseModel`
* `MasterUsername`
* `MasterUserPassword`
* `MultiAZ`
* `OptionGroupName`
* `PreferredBackupWindow`
* `PreferredMaintenanceWindow`

All other properties are ignored. Specify a virtual private cloud (VPC) security group if you want to submit other properties, such as `StorageType`, `StorageEncrypted`, or `KmsKeyId`. If you're already using the `DBSecurityGroups` property, you can't use these other properties by updating your DB instance to use a VPC security group. You must recreate the DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#db_security_groups RdsDbInstance#db_security_groups}

---

##### `db_snapshot_identifier`<sup>Optional</sup> <a name="db_snapshot_identifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbSnapshotIdentifier"></a>

```python
db_snapshot_identifier: str
```

- *Type:* str

The name or Amazon Resource Name (ARN) of the DB snapshot that's used to restore the DB instance.

If you're restoring from a shared manual DB snapshot, you must specify the ARN of the snapshot.
By specifying this property, you can create a DB instance from the specified DB snapshot. If the `DBSnapshotIdentifier` property is an empty string or the `AWS::RDS::DBInstance` declaration has no `DBSnapshotIdentifier` property, AWS CloudFormation creates a new database. If the property contains a value (other than an empty string), AWS CloudFormation creates a database from the specified snapshot. If a snapshot with the specified name doesn't exist, AWS CloudFormation can't create the database and it rolls back the stack.
Some DB instance properties aren't valid when you restore from a snapshot, such as the `MasterUsername` and `MasterUserPassword` properties, and the point-in-time recovery properties `RestoreTime` and `UseLatestRestorableTime`. For information about the properties that you can specify, see the [RestoreDBInstanceFromDBSnapshot](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RestoreDBInstanceFromDBSnapshot.html) action in the *Amazon RDS API Reference*.
When you specify the same `DBSnapshotIdentifier` property value for an update, the DB instance is not restored from the DB snapshot again, and the data in the database is not changed. If you specify a different `DBSnapshotIdentifier` value, a new DB instance is restored from the specified snapshot, and the original DB instance is deleted.
If you specify the `DBSnapshotIdentifier` property to restore a DB instance (as opposed to specifying it for DB instance updates), then don't specify the following properties:

* `CharacterSetName`
* `DBClusterIdentifier`
* `DBName`
* `KmsKeyId`
* `MasterUsername`
* `MasterUserPassword`
* `PromotionTier`
* `SourceDBInstanceIdentifier`
* `SourceRegion`
* `StorageEncrypted` (for an unencrypted snapshot)
* `Timezone`

*Amazon Aurora*
Not applicable. Snapshot restore is managed by the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#db_snapshot_identifier RdsDbInstance#db_snapshot_identifier}

---

##### `db_subnet_group_name`<sup>Optional</sup> <a name="db_subnet_group_name" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbSubnetGroupName"></a>

```python
db_subnet_group_name: str
```

- *Type:* str

A DB subnet group to associate with the DB instance.

If you update this value, the new subnet group must be a subnet group in a new VPC.
If you don't specify a DB subnet group, RDS uses the default DB subnet group if one exists. If a default DB subnet group does not exist, and you don't specify a `DBSubnetGroupName`, the DB instance fails to launch.
For more information about using Amazon RDS in a VPC, see [Amazon VPC and Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.html) in the *Amazon RDS User Guide*.
This setting doesn't apply to Amazon Aurora DB instances. The DB subnet group is managed by the DB cluster. If specified, the setting must match the DB cluster setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#db_subnet_group_name RdsDbInstance#db_subnet_group_name}

---

##### `db_system_id`<sup>Optional</sup> <a name="db_system_id" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbSystemId"></a>

```python
db_system_id: str
```

- *Type:* str

The Oracle system identifier (SID), which is the name of the Oracle database instance that manages your database files.

In this context, the term "Oracle database instance" refers exclusively to the system global area (SGA) and Oracle background processes. If you don't specify a SID, the value defaults to `RDSCDB`. The Oracle SID is also the name of your CDB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#db_system_id RdsDbInstance#db_system_id}

---

##### `dedicated_log_volume`<sup>Optional</sup> <a name="dedicated_log_volume" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dedicatedLogVolume"></a>

```python
dedicated_log_volume: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether the DB instance has a dedicated log volume (DLV) enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#dedicated_log_volume RdsDbInstance#dedicated_log_volume}

---

##### `delete_automated_backups`<sup>Optional</sup> <a name="delete_automated_backups" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.deleteAutomatedBackups"></a>

```python
delete_automated_backups: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A value that indicates whether to remove automated backups immediately after the DB instance is deleted.

This parameter isn't case-sensitive. The default is to remove automated backups immediately after the DB instance is deleted.
*Amazon Aurora*
Not applicable. When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered. Manual DB cluster snapshots of the DB cluster are not deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#delete_automated_backups RdsDbInstance#delete_automated_backups}

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.deletionProtection"></a>

```python
deletion_protection: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether the DB instance has deletion protection enabled.

The database can't be deleted when deletion protection is enabled. By default, deletion protection isn't enabled. For more information, see [Deleting a DB Instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_DeleteInstance.html).
This setting doesn't apply to Amazon Aurora DB instances. You can enable or disable deletion protection for the DB cluster. For more information, see `CreateDBCluster`. DB instances in a DB cluster can be deleted even when deletion protection is enabled for the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#deletion_protection RdsDbInstance#deletion_protection}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.domain"></a>

```python
domain: str
```

- *Type:* str

The Active Directory directory ID to create the DB instance in.

Currently, only Db2, MySQL, Microsoft SQL Server, Oracle, and PostgreSQL DB instances can be created in an Active Directory Domain.
For more information, see [Kerberos Authentication](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/kerberos-authentication.html) in the *Amazon RDS User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#domain RdsDbInstance#domain}

---

##### `domain_auth_secret_arn`<sup>Optional</sup> <a name="domain_auth_secret_arn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.domainAuthSecretArn"></a>

```python
domain_auth_secret_arn: str
```

- *Type:* str

The ARN for the Secrets Manager secret with the credentials for the user joining the domain.  Example: ``arn:aws:secretsmanager:region:account-number:secret:myselfmanagedADtestsecret-123456``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#domain_auth_secret_arn RdsDbInstance#domain_auth_secret_arn}

---

##### `domain_dns_ips`<sup>Optional</sup> <a name="domain_dns_ips" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.domainDnsIps"></a>

```python
domain_dns_ips: typing.List[str]
```

- *Type:* typing.List[str]

The IPv4 DNS IP addresses of your primary and secondary Active Directory domain controllers.

Constraints:

* Two IP addresses must be provided. If there isn't a secondary domain controller, use the IP address of the primary domain controller for both entries in the list.

Example: `123.124.125.126,234.235.236.237`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#domain_dns_ips RdsDbInstance#domain_dns_ips}

---

##### `domain_fqdn`<sup>Optional</sup> <a name="domain_fqdn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.domainFqdn"></a>

```python
domain_fqdn: str
```

- *Type:* str

The fully qualified domain name (FQDN) of an Active Directory domain.

Constraints:

* Can't be longer than 64 characters.

Example: `mymanagedADtest.mymanagedAD.mydomain`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#domain_fqdn RdsDbInstance#domain_fqdn}

---

##### `domain_iam_role_name`<sup>Optional</sup> <a name="domain_iam_role_name" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.domainIamRoleName"></a>

```python
domain_iam_role_name: str
```

- *Type:* str

The name of the IAM role to use when making API calls to the Directory Service.

This setting doesn't apply to the following DB instances:

* Amazon Aurora (The domain is managed by the DB cluster.)
* RDS Custom

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#domain_iam_role_name RdsDbInstance#domain_iam_role_name}

---

##### `domain_ou`<sup>Optional</sup> <a name="domain_ou" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.domainOu"></a>

```python
domain_ou: str
```

- *Type:* str

The Active Directory organizational unit for your DB instance to join.

Constraints:

* Must be in the distinguished name format.
* Can't be longer than 64 characters.

Example: `OU=mymanagedADtestOU,DC=mymanagedADtest,DC=mymanagedAD,DC=mydomain`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#domain_ou RdsDbInstance#domain_ou}

---

##### `enable_cloudwatch_logs_exports`<sup>Optional</sup> <a name="enable_cloudwatch_logs_exports" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.enableCloudwatchLogsExports"></a>

```python
enable_cloudwatch_logs_exports: typing.List[str]
```

- *Type:* typing.List[str]

The list of log types that need to be enabled for exporting to CloudWatch Logs.

The values in the list depend on the DB engine being used. For more information, see [Publishing Database Logs to Amazon CloudWatch Logs](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch) in the *Amazon Relational Database Service User Guide*.
*Amazon Aurora*
Not applicable. CloudWatch Logs exports are managed by the DB cluster.
*Db2*
Valid values: `diag.log`, `notify.log`
*MariaDB*
Valid values: `audit`, `error`, `general`, `slowquery`
*Microsoft SQL Server*
Valid values: `agent`, `error`
*MySQL*
Valid values: `audit`, `error`, `general`, `slowquery`
*Oracle*
Valid values: `alert`, `audit`, `listener`, `trace`, `oemagent`
*PostgreSQL*
Valid values: `postgresql`, `upgrade`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#enable_cloudwatch_logs_exports RdsDbInstance#enable_cloudwatch_logs_exports}

---

##### `enable_iam_database_authentication`<sup>Optional</sup> <a name="enable_iam_database_authentication" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.enableIamDatabaseAuthentication"></a>

```python
enable_iam_database_authentication: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts.

By default, mapping is disabled.
This property is supported for RDS for MariaDB, RDS for MySQL, and RDS for PostgreSQL. For more information, see [IAM Database Authentication for MariaDB, MySQL, and PostgreSQL](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html) in the *Amazon RDS User Guide.*
*Amazon Aurora*
Not applicable. Mapping AWS IAM accounts to database accounts is managed by the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#enable_iam_database_authentication RdsDbInstance#enable_iam_database_authentication}

---

##### `enable_performance_insights`<sup>Optional</sup> <a name="enable_performance_insights" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.enablePerformanceInsights"></a>

```python
enable_performance_insights: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether to enable Performance Insights for the DB instance.

For more information, see [Using Amazon Performance Insights](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html) in the *Amazon RDS User Guide*.
This setting doesn't apply to RDS Custom DB instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#enable_performance_insights RdsDbInstance#enable_performance_insights}

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.engine"></a>

```python
engine: str
```

- *Type:* str

The name of the database engine to use for this DB instance.

Not every database engine is available in every AWS Region.
This property is required when creating a DB instance.
You can convert an Oracle database from the non-CDB architecture to the container database (CDB) architecture by updating the `Engine` value in your templates from `oracle-ee` to `oracle-ee-cdb` or from `oracle-se2` to `oracle-se2-cdb`. Converting to the CDB architecture requires an interruption.
Valid Values:

* `aurora-mysql` (for Aurora MySQL DB instances)
* `aurora-postgresql` (for Aurora PostgreSQL DB instances)
* `custom-oracle-ee` (for RDS Custom for Oracle DB instances)
* `custom-oracle-ee-cdb` (for RDS Custom for Oracle DB instances)
* `custom-sqlserver-ee` (for RDS Custom for SQL Server DB instances)
* `custom-sqlserver-se` (for RDS Custom for SQL Server DB instances)
* `custom-sqlserver-web` (for RDS Custom for SQL Server DB instances)
* `db2-ae`
* `db2-se`
* `mariadb`
* `mysql`
* `oracle-ee`
* `oracle-ee-cdb`
* `oracle-se2`
* `oracle-se2-cdb`
* `postgres`
* `sqlserver-ee`
* `sqlserver-se`
* `sqlserver-ex`
* `sqlserver-web`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#engine RdsDbInstance#engine}

---

##### `engine_lifecycle_support`<sup>Optional</sup> <a name="engine_lifecycle_support" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.engineLifecycleSupport"></a>

```python
engine_lifecycle_support: str
```

- *Type:* str

The lifecycle type for this DB instance.

By default, this value is set to `open-source-rds-extended-support`, which enrolls your DB instance into Amazon RDS Extended Support. At the end of standard support, you can avoid charges for Extended Support by setting the value to `open-source-rds-extended-support-disabled`. In this case, creating the DB instance will fail if the DB major version is past its end of standard support date.
This setting applies only to RDS for MySQL and RDS for PostgreSQL. For Amazon Aurora DB instances, the engine lifecycle support is managed by the DB cluster.
You can use this setting to enroll your DB instance into Amazon RDS Extended Support. With RDS Extended Support, you can run the selected major engine version on your DB instance past the end of standard support for that engine version. For more information, see [Amazon RDS Extended Support with Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/extended-support.html) in the *Amazon RDS User Guide*.
Valid Values: `open-source-rds-extended-support | open-source-rds-extended-support-disabled`
Default: `open-source-rds-extended-support`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#engine_lifecycle_support RdsDbInstance#engine_lifecycle_support}

---

##### `engine_version`<sup>Optional</sup> <a name="engine_version" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

The version number of the database engine to use.

For a list of valid engine versions, use the `DescribeDBEngineVersions` action.
The following are the database engines and links to information about the major and minor versions that are available with Amazon RDS. Not every database engine is available for every AWS Region.
*Amazon Aurora*
Not applicable. The version number of the database engine to be used by the DB instance is managed by the DB cluster.
*Db2*
See [Amazon RDS for Db2](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Db2.html#Db2.Concepts.VersionMgmt) in the *Amazon RDS User Guide.*
*MariaDB*
See [MariaDB on Amazon RDS Versions](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_MariaDB.html#MariaDB.Concepts.VersionMgmt) in the *Amazon RDS User Guide.*
*Microsoft SQL Server*
See [Microsoft SQL Server Versions on Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_SQLServer.html#SQLServer.Concepts.General.VersionSupport) in the *Amazon RDS User Guide.*
*MySQL*
See [MySQL on Amazon RDS Versions](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_MySQL.html#MySQL.Concepts.VersionMgmt) in the *Amazon RDS User Guide.*
*Oracle*
See [Oracle Database Engine Release Notes](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.Oracle.PatchComposition.html) in the *Amazon RDS User Guide.*
*PostgreSQL*
See [Supported PostgreSQL Database Versions](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_PostgreSQL.html#PostgreSQL.Concepts.General.DBVersions) in the *Amazon RDS User Guide.*

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#engine_version RdsDbInstance#engine_version}

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of I/O operations per second (IOPS) that the database provisions.

The value must be equal to or greater than 1000.
If you specify this property, you must follow the range of allowed ratios of your requested IOPS rate to the amount of storage that you allocate (IOPS to allocated storage). For example, you can provision an Oracle database instance with 1000 IOPS and 200 GiB of storage (a ratio of 5:1), or specify 2000 IOPS with 200 GiB of storage (a ratio of 10:1). For more information, see [Amazon RDS Provisioned IOPS Storage to Improve Performance](https://docs.aws.amazon.com/AmazonRDS/latest/DeveloperGuide/CHAP_Storage.html#USER_PIOPS) in the *Amazon RDS User Guide*.
If you specify `io1` for the `StorageType` property, then you must also specify the `Iops` property.
Constraints:

* For RDS for Db2, MariaDB, MySQL, Oracle, and PostgreSQL - Must be a multiple between .5 and 50 of the storage amount for the DB instance.
* For RDS for SQL Server - Must be a multiple between 1 and 50 of the storage amount for the DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#iops RdsDbInstance#iops}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

The ARN of the AWS KMS key that's used to encrypt the DB instance, such as ``arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef``.

If you enable the StorageEncrypted property but don't specify this property, AWS CloudFormation uses the default KMS key. If you specify this property, you must set the StorageEncrypted property to true.
If you specify the `SourceDBInstanceIdentifier` or `SourceDbiResourceId` property, don't specify this property. The value is inherited from the source DB instance, and if the DB instance is encrypted, the specified `KmsKeyId` property is used. However, if the source DB instance is in a different AWS Region, you must specify a KMS key ID.
If you specify the `SourceDBInstanceAutomatedBackupsArn` property, don't specify this property. The value is inherited from the source DB instance automated backup, and if the automated backup is encrypted, the specified `KmsKeyId` property is used.
If you create an encrypted read replica in a different AWS Region, then you must specify a KMS key for the destination AWS Region. KMS encryption keys are specific to the region that they're created in, and you can't use encryption keys from one region in another region.
If you specify the `DBSnapshotIdentifier` property, don't specify this property. The `StorageEncrypted` property value is inherited from the snapshot. If the DB instance is encrypted, the specified `KmsKeyId` property is also inherited from the snapshot.
If you specify `DBSecurityGroups`, AWS CloudFormation ignores this property. To specify both a security group and this property, you must use a VPC security group. For more information about Amazon RDS and VPC, see [Using Amazon RDS with Amazon VPC](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.html) in the *Amazon RDS User Guide*.
*Amazon Aurora*
Not applicable. The KMS key identifier is managed by the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#kms_key_id RdsDbInstance#kms_key_id}

---

##### `license_model`<sup>Optional</sup> <a name="license_model" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

License model information for this DB instance.

Valid Values:

* Aurora MySQL - `general-public-license`
* Aurora PostgreSQL - `postgresql-license`
* RDS for Db2 - `bring-your-own-license`. For more information about RDS for Db2 licensing, see [](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/db2-licensing.html) in the *Amazon RDS User Guide.*
* RDS for MariaDB - `general-public-license`
* RDS for Microsoft SQL Server - `license-included` or `bring-your-own-media`
* RDS for MySQL - `general-public-license`
* RDS for Oracle - `bring-your-own-license` or `license-included`
* RDS for PostgreSQL - `postgresql-license`

If you've specified `DBSecurityGroups` and then you update the license model, AWS CloudFormation replaces the underlying DB instance. This will incur some interruptions to database availability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#license_model RdsDbInstance#license_model}

---

##### `manage_master_user_password`<sup>Optional</sup> <a name="manage_master_user_password" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.manageMasterUserPassword"></a>

```python
manage_master_user_password: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether to manage the master user password with AWS Secrets Manager.

For more information, see [Password management with Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the *Amazon RDS User Guide.*
Constraints:

* Can't manage the master user password with AWS Secrets Manager if `MasterUserPassword` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#manage_master_user_password RdsDbInstance#manage_master_user_password}

---

##### `master_user_authentication_type`<sup>Optional</sup> <a name="master_user_authentication_type" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.masterUserAuthenticationType"></a>

```python
master_user_authentication_type: str
```

- *Type:* str

Specifies the authentication type for the master user.

With IAM master user authentication, you can configure the master DB user with IAM database authentication when you create a DB instance.
You can specify one of the following values:

* `password` - Use standard database authentication with a password.
* `iam-db-auth` - Use IAM database authentication for the master user.

This option is only valid for RDS for MySQL, RDS for MariaDB, RDS for PostgreSQL, Aurora MySQL, and Aurora PostgreSQL engines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#master_user_authentication_type RdsDbInstance#master_user_authentication_type}

---

##### `master_username`<sup>Optional</sup> <a name="master_username" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.masterUsername"></a>

```python
master_username: str
```

- *Type:* str

The master user name for the DB instance.

If you specify the `SourceDBInstanceIdentifier` or `DBSnapshotIdentifier` property, don't specify this property. The value is inherited from the source DB instance or snapshot.
When migrating a self-managed Db2 database, we recommend that you use the same master username as your self-managed Db2 instance name.
*Amazon Aurora*
Not applicable. The name for the master user is managed by the DB cluster.
*RDS for Db2*
Constraints:

* Must be 1 to 16 letters or numbers.
* First character must be a letter.
* Can't be a reserved word for the chosen database engine.

*RDS for MariaDB*
Constraints:

* Must be 1 to 16 letters or numbers.
* Can't be a reserved word for the chosen database engine.

*RDS for Microsoft SQL Server*
Constraints:

* Must be 1 to 128 letters or numbers.
* First character must be a letter.
* Can't be a reserved word for the chosen database engine.

*RDS for MySQL*
Constraints:

* Must be 1 to 16 letters or numbers.
* First character must be a letter.
* Can't be a reserved word for the chosen database engine.

*RDS for Oracle*
Constraints:

* Must be 1 to 30 letters or numbers.
* First character must be a letter.
* Can't be a reserved word for the chosen database engine.

*RDS for PostgreSQL*
Constraints:

* Must be 1 to 63 letters or numbers.
* First character must be a letter.
* Can't be a reserved word for the chosen database engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#master_username RdsDbInstance#master_username}

---

##### `master_user_password`<sup>Optional</sup> <a name="master_user_password" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.masterUserPassword"></a>

```python
master_user_password: str
```

- *Type:* str

The password for the master user.

The password can include any printable ASCII character except "/", """, or "@".
*Amazon Aurora*
Not applicable. The password for the master user is managed by the DB cluster.
*RDS for Db2*
Must contain from 8 to 255 characters.
*RDS for MariaDB*
Constraints: Must contain from 8 to 41 characters.
*RDS for Microsoft SQL Server*
Constraints: Must contain from 8 to 128 characters.
*RDS for MySQL*
Constraints: Must contain from 8 to 41 characters.
*RDS for Oracle*
Constraints: Must contain from 8 to 30 characters.
*RDS for PostgreSQL*
Constraints: Must contain from 8 to 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#master_user_password RdsDbInstance#master_user_password}

---

##### `master_user_secret`<sup>Optional</sup> <a name="master_user_secret" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.masterUserSecret"></a>

```python
master_user_secret: RdsDbInstanceMasterUserSecret
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecret">RdsDbInstanceMasterUserSecret</a>

The secret managed by RDS in AWS Secrets Manager for the master user password.

For more information, see [Password management with Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the *Amazon RDS User Guide.*

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#master_user_secret RdsDbInstance#master_user_secret}

---

##### `max_allocated_storage`<sup>Optional</sup> <a name="max_allocated_storage" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.maxAllocatedStorage"></a>

```python
max_allocated_storage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The upper limit in gibibytes (GiB) to which Amazon RDS can automatically scale the storage of the DB instance.

For more information about this setting, including limitations that apply to it, see [Managing capacity automatically with Amazon RDS storage autoscaling](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.StorageTypes.html#USER_PIOPS.Autoscaling) in the *Amazon RDS User Guide*.
This setting doesn't apply to the following DB instances:

* Amazon Aurora (Storage is managed by the DB cluster.)
* RDS Custom

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#max_allocated_storage RdsDbInstance#max_allocated_storage}

---

##### `monitoring_interval`<sup>Optional</sup> <a name="monitoring_interval" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.monitoringInterval"></a>

```python
monitoring_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance.

To disable collection of Enhanced Monitoring metrics, specify `0`.
If `MonitoringRoleArn` is specified, then you must set `MonitoringInterval` to a value other than `0`.
This setting doesn't apply to RDS Custom DB instances.
Valid Values: `0 | 1 | 5 | 10 | 15 | 30 | 60`
Default: `0`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#monitoring_interval RdsDbInstance#monitoring_interval}

---

##### `monitoring_role_arn`<sup>Optional</sup> <a name="monitoring_role_arn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.monitoringRoleArn"></a>

```python
monitoring_role_arn: str
```

- *Type:* str

The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to Amazon CloudWatch Logs.

For example, `arn:aws:iam:123456789012:role/emaccess`. For information on creating a monitoring role, see [Setting Up and Enabling Enhanced Monitoring](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.OS.html#USER_Monitoring.OS.Enabling) in the *Amazon RDS User Guide*.
If `MonitoringInterval` is set to a value other than `0`, then you must supply a `MonitoringRoleArn` value.
This setting doesn't apply to RDS Custom DB instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#monitoring_role_arn RdsDbInstance#monitoring_role_arn}

---

##### `multi_az`<sup>Optional</sup> <a name="multi_az" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.multiAz"></a>

```python
multi_az: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether the DB instance is a Multi-AZ deployment.

You can't set the `AvailabilityZone` parameter if the DB instance is a Multi-AZ deployment.
This setting doesn't apply to Amazon Aurora because the DB instance Availability Zones (AZs) are managed by the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#multi_az RdsDbInstance#multi_az}

---

##### `nchar_character_set_name`<sup>Optional</sup> <a name="nchar_character_set_name" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.ncharCharacterSetName"></a>

```python
nchar_character_set_name: str
```

- *Type:* str

The name of the NCHAR character set for the Oracle DB instance.

This setting doesn't apply to RDS Custom DB instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#nchar_character_set_name RdsDbInstance#nchar_character_set_name}

---

##### `network_type`<sup>Optional</sup> <a name="network_type" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.networkType"></a>

```python
network_type: str
```

- *Type:* str

The network type of the DB instance.

Valid values:

* `IPV4`
* `DUAL`

The network type is determined by the `DBSubnetGroup` specified for the DB instance. A `DBSubnetGroup` can support only the IPv4 protocol or the IPv4 and IPv6 protocols (`DUAL`).
For more information, see [Working with a DB instance in a VPC](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html) in the *Amazon RDS User Guide.*

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#network_type RdsDbInstance#network_type}

---

##### `option_group_name`<sup>Optional</sup> <a name="option_group_name" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.optionGroupName"></a>

```python
option_group_name: str
```

- *Type:* str

Indicates that the DB instance should be associated with the specified option group.

Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed from an option group. Also, that option group can't be removed from a DB instance once it is associated with a DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#option_group_name RdsDbInstance#option_group_name}

---

##### `performance_insights_kms_key_id`<sup>Optional</sup> <a name="performance_insights_kms_key_id" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.performanceInsightsKmsKeyId"></a>

```python
performance_insights_kms_key_id: str
```

- *Type:* str

The AWS KMS key identifier for encryption of Performance Insights data.

The KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
If you do not specify a value for `PerformanceInsightsKMSKeyId`, then Amazon RDS uses your default KMS key. There is a default KMS key for your AWS account. Your AWS account has a different default KMS key for each AWS Region.
*Update behavior:* Once Performance Insights is enabled with a KMS key, you cannot change to a different physical KMS key without replacing the DB instance. However, the following updates do not require replacement:

* Enabling or disabling Performance Insights using the `EnablePerformanceInsights` property
* Changing between different identifier formats (key ARN, key ID, alias ARN, alias name) of the same physical KMS key
* Removing the `PerformanceInsightsKMSKeyId` property from your template

*Drift behavior:* If you specify `PerformanceInsightsKMSKeyId` while `EnablePerformanceInsights` is set to `false`, CloudFormation will report drift. This occurs because the RDS API does not allow setting a KMS key when Performance Insights is disabled. CloudFormation ignores the `PerformanceInsightsKMSKeyId` value during instance creation to avoid API errors, resulting in a mismatch between your template and the actual instance configuration.
To avoid drift, omit both `EnablePerformanceInsights` and `PerformanceInsightsKMSKeyId` during initial instance creation, then set both properties together when you're ready to enable Performance Insights.
For information about enabling Performance Insights, see [EnablePerformanceInsights](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-database-instance.html#cfn-rds-dbinstance-enableperformanceinsights).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#performance_insights_kms_key_id RdsDbInstance#performance_insights_kms_key_id}

---

##### `performance_insights_retention_period`<sup>Optional</sup> <a name="performance_insights_retention_period" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.performanceInsightsRetentionPeriod"></a>

```python
performance_insights_retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of days to retain Performance Insights data.

When creating a DB instance without enabling Performance Insights, you can't specify the parameter `PerformanceInsightsRetentionPeriod`.
This setting doesn't apply to RDS Custom DB instances.
Valid Values:

* `7`
* *month* * 31, where *month* is a number of months from 1-23. Examples: `93` (3 months * 31), `341` (11 months * 31), `589` (19 months * 31)
* `731`

Default: `7` days
If you specify a retention period that isn't valid, such as `94`, Amazon RDS returns an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#performance_insights_retention_period RdsDbInstance#performance_insights_retention_period}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.port"></a>

```python
port: str
```

- *Type:* str

The port number on which the database accepts connections.

This setting doesn't apply to Aurora DB instances. The port number is managed by the cluster.
Valid Values: `1150-65535`
Default:

* RDS for Db2 - `50000`
* RDS for MariaDB - `3306`
* RDS for Microsoft SQL Server - `1433`
* RDS for MySQL - `3306`
* RDS for Oracle - `1521`
* RDS for PostgreSQL - `5432`

Constraints:

* For RDS for Microsoft SQL Server, the value can't be `1234`, `1434`, `3260`, `3343`, `3389`, `47001`, or `49152-49156`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#port RdsDbInstance#port}

---

##### `preferred_backup_window`<sup>Optional</sup> <a name="preferred_backup_window" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.preferredBackupWindow"></a>

```python
preferred_backup_window: str
```

- *Type:* str

The daily time range during which automated backups are created if automated backups are enabled, using the ``BackupRetentionPeriod`` parameter.

For more information, see [Backup Window](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html#USER_WorkingWithAutomatedBackups.BackupWindow) in the *Amazon RDS User Guide.*
Constraints:

* Must be in the format `hh24:mi-hh24:mi`.
* Must be in Universal Coordinated Time (UTC).
* Must not conflict with the preferred maintenance window.
* Must be at least 30 minutes.

*Amazon Aurora*
Not applicable. The daily time range for creating automated backups is managed by the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#preferred_backup_window RdsDbInstance#preferred_backup_window}

---

##### `preferred_maintenance_window`<sup>Optional</sup> <a name="preferred_maintenance_window" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.preferredMaintenanceWindow"></a>

```python
preferred_maintenance_window: str
```

- *Type:* str

The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).

Format: `ddd:hh24:mi-ddd:hh24:mi`
The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week. To see the time blocks available, see [Maintaining a DB instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow) in the *Amazon RDS User Guide.*
This property applies when AWS CloudFormation initially creates the DB instance. If you use AWS CloudFormation to update the DB instance, those updates are applied immediately.
Constraints: Minimum 30-minute window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#preferred_maintenance_window RdsDbInstance#preferred_maintenance_window}

---

##### `processor_features`<sup>Optional</sup> <a name="processor_features" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.processorFeatures"></a>

```python
processor_features: IResolvable | typing.List[RdsDbInstanceProcessorFeatures]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeatures">RdsDbInstanceProcessorFeatures</a>]

The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.

This setting doesn't apply to Amazon Aurora or RDS Custom DB instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#processor_features RdsDbInstance#processor_features}

---

##### `promotion_tier`<sup>Optional</sup> <a name="promotion_tier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.promotionTier"></a>

```python
promotion_tier: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The order of priority in which an Aurora Replica is promoted to the primary instance after a failure of the existing primary instance.

For more information, see [Fault Tolerance for an Aurora DB Cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.AuroraHighAvailability.html#Aurora.Managing.FaultTolerance) in the *Amazon Aurora User Guide*.
This setting doesn't apply to RDS Custom DB instances.
Default: `1`
Valid Values: `0 - 15`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#promotion_tier RdsDbInstance#promotion_tier}

---

##### `publicly_accessible`<sup>Optional</sup> <a name="publicly_accessible" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.publiclyAccessible"></a>

```python
publicly_accessible: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether the DB instance is an internet-facing instance.

If you specify true, AWS CloudFormation creates an instance with a publicly resolvable DNS name, which resolves to a public IP address. If you specify false, AWS CloudFormation creates an internal instance with a DNS name that resolves to a private IP address.
The default behavior value depends on your VPC setup and the database subnet group. For more information, see the `PubliclyAccessible` parameter in the [CreateDBInstance](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstance.html) in the *Amazon RDS API Reference*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#publicly_accessible RdsDbInstance#publicly_accessible}

---

##### `replica_mode`<sup>Optional</sup> <a name="replica_mode" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.replicaMode"></a>

```python
replica_mode: str
```

- *Type:* str

The open mode of an Oracle read replica.

For more information, see [Working with Oracle Read Replicas for Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/oracle-read-replicas.html) in the *Amazon RDS User Guide*.
This setting is only supported in RDS for Oracle.
Default: `open-read-only`
Valid Values: `open-read-only` or `mounted`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#replica_mode RdsDbInstance#replica_mode}

---

##### `restore_time`<sup>Optional</sup> <a name="restore_time" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.restoreTime"></a>

```python
restore_time: str
```

- *Type:* str

The date and time to restore from.

This parameter applies to point-in-time recovery. For more information, see [Restoring a DB instance to a specified time](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIT.html) in the in the *Amazon RDS User Guide*.
Constraints:

* Must be a time in Universal Coordinated Time (UTC) format.
* Must be before the latest restorable time for the DB instance.
* Can't be specified if the `UseLatestRestorableTime` parameter is enabled.

Example: `2009-09-07T23:45:00Z`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#restore_time RdsDbInstance#restore_time}

---

##### `source_db_cluster_identifier`<sup>Optional</sup> <a name="source_db_cluster_identifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.sourceDbClusterIdentifier"></a>

```python
source_db_cluster_identifier: str
```

- *Type:* str

The identifier of the Multi-AZ DB cluster that will act as the source for the read replica.

Each DB cluster can have up to 15 read replicas.
Constraints:

* Must be the identifier of an existing Multi-AZ DB cluster.
* Can't be specified if the `SourceDBInstanceIdentifier` parameter is also specified.
* The specified DB cluster must have automatic backups enabled, that is, its backup retention period must be greater than 0.
* The source DB cluster must be in the same AWS-Region as the read replica. Cross-Region replication isn't supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#source_db_cluster_identifier RdsDbInstance#source_db_cluster_identifier}

---

##### `source_db_instance_automated_backups_arn`<sup>Optional</sup> <a name="source_db_instance_automated_backups_arn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.sourceDbInstanceAutomatedBackupsArn"></a>

```python
source_db_instance_automated_backups_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the replicated automated backups from which to restore, for example, ``arn:aws:rds:us-east-1:123456789012:auto-backup:ab-L2IJCEXJP7XQ7HOJ4SIEXAMPLE``.

This setting doesn't apply to RDS Custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#source_db_instance_automated_backups_arn RdsDbInstance#source_db_instance_automated_backups_arn}

---

##### `source_db_instance_identifier`<sup>Optional</sup> <a name="source_db_instance_identifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.sourceDbInstanceIdentifier"></a>

```python
source_db_instance_identifier: str
```

- *Type:* str

If you want to create a read replica DB instance, specify the ID of the source DB instance.

Each DB instance can have a limited number of read replicas. For more information, see [Working with Read Replicas](https://docs.aws.amazon.com/AmazonRDS/latest/DeveloperGuide/USER_ReadRepl.html) in the *Amazon RDS User Guide*.
For information about constraints that apply to DB instance identifiers, see [Naming constraints in Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Limits.html#RDS_Limits.Constraints) in the *Amazon RDS User Guide*.
The `SourceDBInstanceIdentifier` property determines whether a DB instance is a read replica. If you remove the `SourceDBInstanceIdentifier` property from your template and then update your stack, AWS CloudFormation promotes the read replica to a standalone DB instance.
If you specify the `UseLatestRestorableTime` or `RestoreTime` properties in conjunction with the `SourceDBInstanceIdentifier` property, RDS restores the DB instance to the requested point in time, thereby creating a new DB instance.

* If you specify a source DB instance that uses VPC security groups, we recommend that you specify the `VPCSecurityGroups` property. If you don't specify the property, the read replica inherits the value of the `VPCSecurityGroups` property from the source DB when you create the replica. However, if you update the stack, AWS CloudFormation reverts the replica's `VPCSecurityGroups` property to the default value because it's not defined in the stack's template. This change might cause unexpected issues.
* Read replicas don't support deletion policies. AWS CloudFormation ignores any deletion policy that's associated with a read replica.
* If you specify `SourceDBInstanceIdentifier`, don't specify the `DBSnapshotIdentifier` property. You can't create a read replica from a snapshot.
* Don't set the `BackupRetentionPeriod`, `DBName`, `MasterUsername`, `MasterUserPassword`, and `PreferredBackupWindow` properties. The database attributes are inherited from the source DB instance, and backups are disabled for read replicas.
* If the source DB instance is in a different region than the read replica, specify the source region in `SourceRegion`, and specify an ARN for a valid DB instance in `SourceDBInstanceIdentifier`. For more information, see [Constructing a Amazon RDS Amazon Resource Name (ARN)](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html#USER_Tagging.ARN) in the *Amazon RDS User Guide*.
* For DB instances in Amazon Aurora clusters, don't specify this property. Amazon RDS automatically assigns writer and reader DB instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#source_db_instance_identifier RdsDbInstance#source_db_instance_identifier}

---

##### `source_dbi_resource_id`<sup>Optional</sup> <a name="source_dbi_resource_id" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.sourceDbiResourceId"></a>

```python
source_dbi_resource_id: str
```

- *Type:* str

The resource ID of the source DB instance from which to restore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#source_dbi_resource_id RdsDbInstance#source_dbi_resource_id}

---

##### `source_region`<sup>Optional</sup> <a name="source_region" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.sourceRegion"></a>

```python
source_region: str
```

- *Type:* str

The ID of the region that contains the source DB instance for the read replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#source_region RdsDbInstance#source_region}

---

##### `storage_encrypted`<sup>Optional</sup> <a name="storage_encrypted" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.storageEncrypted"></a>

```python
storage_encrypted: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A value that indicates whether the DB instance is encrypted.

By default, it isn't encrypted.
If you specify the `KmsKeyId` property, then you must enable encryption.
If you specify the `SourceDBInstanceIdentifier` or `SourceDbiResourceId` property, don't specify this property. The value is inherited from the source DB instance, and if the DB instance is encrypted, the specified `KmsKeyId` property is used.
If you specify the `SourceDBInstanceAutomatedBackupsArn` property, don't specify this property. The value is inherited from the source DB instance automated backup.
If you specify `DBSnapshotIdentifier` property, don't specify this property. The value is inherited from the snapshot.
*Amazon Aurora*
Not applicable. The encryption for DB instances is managed by the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#storage_encrypted RdsDbInstance#storage_encrypted}

---

##### `storage_throughput`<sup>Optional</sup> <a name="storage_throughput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.storageThroughput"></a>

```python
storage_throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the storage throughput value, in mebibyte per second (MiBps), for the DB instance.

This setting applies only to the `gp3` storage type.
This setting doesn't apply to RDS Custom or Amazon Aurora.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#storage_throughput RdsDbInstance#storage_throughput}

---

##### `storage_type`<sup>Optional</sup> <a name="storage_type" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.storageType"></a>

```python
storage_type: str
```

- *Type:* str

The storage type to associate with the DB instance.

If you specify `io1`, `io2`, or `gp3`, you must also include a value for the `Iops` parameter.
This setting doesn't apply to Amazon Aurora DB instances. Storage is managed by the DB cluster.
Valid Values: `gp2 | gp3 | io1 | io2 | standard`
Default: `io1`, if the `Iops` parameter is specified. Otherwise, `gp3`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#storage_type RdsDbInstance#storage_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[RdsDbInstanceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTags">RdsDbInstanceTags</a>]

Tags to assign to the DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#tags RdsDbInstance#tags}

---

##### `tde_credential_arn`<sup>Optional</sup> <a name="tde_credential_arn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.tdeCredentialArn"></a>

```python
tde_credential_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#tde_credential_arn RdsDbInstance#tde_credential_arn}.

---

##### `tde_credential_password`<sup>Optional</sup> <a name="tde_credential_password" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.tdeCredentialPassword"></a>

```python
tde_credential_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#tde_credential_password RdsDbInstance#tde_credential_password}.

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

The time zone of the DB instance.

The time zone parameter is currently supported only by [RDS for Db2](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/db2-time-zone) and [RDS for SQL Server](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_SQLServer.html#SQLServer.Concepts.General.TimeZone).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#timezone RdsDbInstance#timezone}

---

##### `use_default_processor_features`<sup>Optional</sup> <a name="use_default_processor_features" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.useDefaultProcessorFeatures"></a>

```python
use_default_processor_features: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether the DB instance class of the DB instance uses its default processor features.

This setting doesn't apply to RDS Custom DB instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#use_default_processor_features RdsDbInstance#use_default_processor_features}

---

##### `use_latest_restorable_time`<sup>Optional</sup> <a name="use_latest_restorable_time" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.useLatestRestorableTime"></a>

```python
use_latest_restorable_time: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether the DB instance is restored from the latest backup time.

By default, the DB instance isn't restored from the latest backup time. This parameter applies to point-in-time recovery. For more information, see [Restoring a DB instance to a specified time](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIT.html) in the in the *Amazon RDS User Guide*.
Constraints:

* Can't be specified if the `RestoreTime` parameter is provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#use_latest_restorable_time RdsDbInstance#use_latest_restorable_time}

---

##### `vpc_security_groups`<sup>Optional</sup> <a name="vpc_security_groups" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.vpcSecurityGroups"></a>

```python
vpc_security_groups: typing.List[str]
```

- *Type:* typing.List[str]

A list of the VPC security group IDs to assign to the DB instance.

The list can include both the physical IDs of existing VPC security groups and references to [AWS::EC2::SecurityGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-security-group.html) resources created in the template.
If you plan to update the resource, don't specify VPC security groups in a shared VPC.
If you set `VPCSecurityGroups`, you must not set [DBSecurityGroups](https://docs.aws.amazon.com//AWSCloudFormation/latest/UserGuide/aws-properties-rds-database-instance.html#cfn-rds-dbinstance-dbsecuritygroups), and vice versa.
You can migrate a DB instance in your stack from an RDS DB security group to a VPC security group, but keep the following in mind:

* You can't revert to using an RDS security group after you establish a VPC security group membership.
* When you migrate your DB instance to VPC security groups, if your stack update rolls back because the DB instance update fails or because an update fails in another AWS CloudFormation resource, the rollback fails because it can't revert to an RDS security group.
* To use the properties that are available when you use a VPC security group, you must recreate the DB instance. If you don't, AWS CloudFormation submits only the property values that are listed in the [DBSecurityGroups](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-database-instance.html#cfn-rds-dbinstance-dbsecuritygroups) property.

To avoid this situation, migrate your DB instance to using VPC security groups only when that is the only change in your stack template.
*Amazon Aurora*
Not applicable. The associated list of EC2 VPC security groups is managed by the DB cluster. If specified, the setting must match the DB cluster setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#vpc_security_groups RdsDbInstance#vpc_security_groups}

---

### RdsDbInstanceEndpoint <a name="RdsDbInstanceEndpoint" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpoint.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_instance

rdsDbInstance.RdsDbInstanceEndpoint()
```


### RdsDbInstanceListenerEndpoint <a name="RdsDbInstanceListenerEndpoint" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpoint.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_instance

rdsDbInstance.RdsDbInstanceListenerEndpoint()
```


### RdsDbInstanceMasterUserSecret <a name="RdsDbInstanceMasterUserSecret" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecret.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_instance

rdsDbInstance.RdsDbInstanceMasterUserSecret(
  kms_key_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecret.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The AWS KMS key identifier that is used to encrypt the secret. |

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecret.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

The AWS KMS key identifier that is used to encrypt the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#kms_key_id RdsDbInstance#kms_key_id}

---

### RdsDbInstanceProcessorFeatures <a name="RdsDbInstanceProcessorFeatures" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeatures.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_instance

rdsDbInstance.RdsDbInstanceProcessorFeatures(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeatures.property.name">name</a></code> | <code>str</code> | The name of the processor feature. Valid names are ``coreCount`` and ``threadsPerCore``. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeatures.property.value">value</a></code> | <code>str</code> | The value of a processor feature. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeatures.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the processor feature. Valid names are ``coreCount`` and ``threadsPerCore``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#name RdsDbInstance#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeatures.property.value"></a>

```python
value: str
```

- *Type:* str

The value of a processor feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#value RdsDbInstance#value}

---

### RdsDbInstanceStatusInfos <a name="RdsDbInstanceStatusInfos" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfos"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfos.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_instance

rdsDbInstance.RdsDbInstanceStatusInfos()
```


### RdsDbInstanceTags <a name="RdsDbInstanceTags" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTags.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_instance

rdsDbInstance.RdsDbInstanceTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTags.property.key">key</a></code> | <code>str</code> | A key is the required name of the tag. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTags.property.value">value</a></code> | <code>str</code> | A value is the optional value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTags.property.key"></a>

```python
key: str
```

- *Type:* str

A key is the required name of the tag.

The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with `aws:` or `rds:`. The string can only contain only the set of Unicode letters, digits, white-space, '*', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\p{L}\p{Z}\p{N}*.:/=+\-@]*)$").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#key RdsDbInstance#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTags.property.value"></a>

```python
value: str
```

- *Type:* str

A value is the optional value of the tag.

The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with `aws:` or `rds:`. The string can only contain only the set of Unicode letters, digits, white-space, '*', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\p{L}\p{Z}\p{N}*.:/=+\-@]*)$").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#value RdsDbInstance#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RdsDbInstanceAdditionalStorageVolumesList <a name="RdsDbInstanceAdditionalStorageVolumesList" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_instance

rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RdsDbInstanceAdditionalStorageVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes">RdsDbInstanceAdditionalStorageVolumes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RdsDbInstanceAdditionalStorageVolumes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes">RdsDbInstanceAdditionalStorageVolumes</a>]

---


### RdsDbInstanceAdditionalStorageVolumesOutputReference <a name="RdsDbInstanceAdditionalStorageVolumesOutputReference" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_instance

rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resetAllocatedStorage">reset_allocated_storage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resetIops">reset_iops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resetMaxAllocatedStorage">reset_max_allocated_storage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resetStorageThroughput">reset_storage_throughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resetStorageType">reset_storage_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resetVolumeName">reset_volume_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allocated_storage` <a name="reset_allocated_storage" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resetAllocatedStorage"></a>

```python
def reset_allocated_storage() -> None
```

##### `reset_iops` <a name="reset_iops" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resetIops"></a>

```python
def reset_iops() -> None
```

##### `reset_max_allocated_storage` <a name="reset_max_allocated_storage" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resetMaxAllocatedStorage"></a>

```python
def reset_max_allocated_storage() -> None
```

##### `reset_storage_throughput` <a name="reset_storage_throughput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resetStorageThroughput"></a>

```python
def reset_storage_throughput() -> None
```

##### `reset_storage_type` <a name="reset_storage_type" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resetStorageType"></a>

```python
def reset_storage_type() -> None
```

##### `reset_volume_name` <a name="reset_volume_name" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resetVolumeName"></a>

```python
def reset_volume_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.allocatedStorageInput">allocated_storage_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.iopsInput">iops_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.maxAllocatedStorageInput">max_allocated_storage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.storageThroughputInput">storage_throughput_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.storageTypeInput">storage_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.volumeNameInput">volume_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.allocatedStorage">allocated_storage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.maxAllocatedStorage">max_allocated_storage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.storageThroughput">storage_throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.storageType">storage_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.volumeName">volume_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes">RdsDbInstanceAdditionalStorageVolumes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allocated_storage_input`<sup>Optional</sup> <a name="allocated_storage_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.allocatedStorageInput"></a>

```python
allocated_storage_input: str
```

- *Type:* str

---

##### `iops_input`<sup>Optional</sup> <a name="iops_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.iopsInput"></a>

```python
iops_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_allocated_storage_input`<sup>Optional</sup> <a name="max_allocated_storage_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.maxAllocatedStorageInput"></a>

```python
max_allocated_storage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_throughput_input`<sup>Optional</sup> <a name="storage_throughput_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.storageThroughputInput"></a>

```python
storage_throughput_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_type_input`<sup>Optional</sup> <a name="storage_type_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.storageTypeInput"></a>

```python
storage_type_input: str
```

- *Type:* str

---

##### `volume_name_input`<sup>Optional</sup> <a name="volume_name_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.volumeNameInput"></a>

```python
volume_name_input: str
```

- *Type:* str

---

##### `allocated_storage`<sup>Required</sup> <a name="allocated_storage" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.allocatedStorage"></a>

```python
allocated_storage: str
```

- *Type:* str

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_allocated_storage`<sup>Required</sup> <a name="max_allocated_storage" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.maxAllocatedStorage"></a>

```python
max_allocated_storage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_throughput`<sup>Required</sup> <a name="storage_throughput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.storageThroughput"></a>

```python
storage_throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_type`<sup>Required</sup> <a name="storage_type" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.storageType"></a>

```python
storage_type: str
```

- *Type:* str

---

##### `volume_name`<sup>Required</sup> <a name="volume_name" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.volumeName"></a>

```python
volume_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RdsDbInstanceAdditionalStorageVolumes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes">RdsDbInstanceAdditionalStorageVolumes</a>

---


### RdsDbInstanceAssociatedRolesList <a name="RdsDbInstanceAssociatedRolesList" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_instance

rdsDbInstance.RdsDbInstanceAssociatedRolesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RdsDbInstanceAssociatedRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRoles">RdsDbInstanceAssociatedRoles</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RdsDbInstanceAssociatedRoles]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRoles">RdsDbInstanceAssociatedRoles</a>]

---


### RdsDbInstanceAssociatedRolesOutputReference <a name="RdsDbInstanceAssociatedRolesOutputReference" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_instance

rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.resetFeatureName">reset_feature_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_feature_name` <a name="reset_feature_name" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.resetFeatureName"></a>

```python
def reset_feature_name() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.property.featureNameInput">feature_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.property.featureName">feature_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRoles">RdsDbInstanceAssociatedRoles</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `feature_name_input`<sup>Optional</sup> <a name="feature_name_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.property.featureNameInput"></a>

```python
feature_name_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `feature_name`<sup>Required</sup> <a name="feature_name" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.property.featureName"></a>

```python
feature_name: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RdsDbInstanceAssociatedRoles
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRoles">RdsDbInstanceAssociatedRoles</a>

---


### RdsDbInstanceCertificateDetailsOutputReference <a name="RdsDbInstanceCertificateDetailsOutputReference" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_instance

rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.property.caIdentifier">ca_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.property.validTill">valid_till</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetails">RdsDbInstanceCertificateDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ca_identifier`<sup>Required</sup> <a name="ca_identifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.property.caIdentifier"></a>

```python
ca_identifier: str
```

- *Type:* str

---

##### `valid_till`<sup>Required</sup> <a name="valid_till" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.property.validTill"></a>

```python
valid_till: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.property.internalValue"></a>

```python
internal_value: RdsDbInstanceCertificateDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetails">RdsDbInstanceCertificateDetails</a>

---


### RdsDbInstanceEndpointOutputReference <a name="RdsDbInstanceEndpointOutputReference" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_instance

rdsDbInstance.RdsDbInstanceEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.property.hostedZoneId">hosted_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.property.port">port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpoint">RdsDbInstanceEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `hosted_zone_id`<sup>Required</sup> <a name="hosted_zone_id" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.property.hostedZoneId"></a>

```python
hosted_zone_id: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.property.port"></a>

```python
port: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.property.internalValue"></a>

```python
internal_value: RdsDbInstanceEndpoint
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpoint">RdsDbInstanceEndpoint</a>

---


### RdsDbInstanceListenerEndpointOutputReference <a name="RdsDbInstanceListenerEndpointOutputReference" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_instance

rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.property.hostedZoneId">hosted_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.property.port">port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpoint">RdsDbInstanceListenerEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `hosted_zone_id`<sup>Required</sup> <a name="hosted_zone_id" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.property.hostedZoneId"></a>

```python
hosted_zone_id: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.property.port"></a>

```python
port: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.property.internalValue"></a>

```python
internal_value: RdsDbInstanceListenerEndpoint
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpoint">RdsDbInstanceListenerEndpoint</a>

---


### RdsDbInstanceMasterUserSecretOutputReference <a name="RdsDbInstanceMasterUserSecretOutputReference" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_instance

rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecret">RdsDbInstanceMasterUserSecret</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RdsDbInstanceMasterUserSecret
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecret">RdsDbInstanceMasterUserSecret</a>

---


### RdsDbInstanceProcessorFeaturesList <a name="RdsDbInstanceProcessorFeaturesList" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_instance

rdsDbInstance.RdsDbInstanceProcessorFeaturesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RdsDbInstanceProcessorFeaturesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeatures">RdsDbInstanceProcessorFeatures</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RdsDbInstanceProcessorFeatures]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeatures">RdsDbInstanceProcessorFeatures</a>]

---


### RdsDbInstanceProcessorFeaturesOutputReference <a name="RdsDbInstanceProcessorFeaturesOutputReference" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_instance

rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeatures">RdsDbInstanceProcessorFeatures</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RdsDbInstanceProcessorFeatures
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeatures">RdsDbInstanceProcessorFeatures</a>

---


### RdsDbInstanceStatusInfosList <a name="RdsDbInstanceStatusInfosList" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_instance

rdsDbInstance.RdsDbInstanceStatusInfosList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RdsDbInstanceStatusInfosOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### RdsDbInstanceStatusInfosOutputReference <a name="RdsDbInstanceStatusInfosOutputReference" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_instance

rdsDbInstance.RdsDbInstanceStatusInfosOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.property.normal">normal</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.property.statusType">status_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfos">RdsDbInstanceStatusInfos</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `normal`<sup>Required</sup> <a name="normal" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.property.normal"></a>

```python
normal: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_type`<sup>Required</sup> <a name="status_type" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.property.statusType"></a>

```python
status_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.property.internalValue"></a>

```python
internal_value: RdsDbInstanceStatusInfos
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfos">RdsDbInstanceStatusInfos</a>

---


### RdsDbInstanceTagsList <a name="RdsDbInstanceTagsList" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_instance

rdsDbInstance.RdsDbInstanceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RdsDbInstanceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTags">RdsDbInstanceTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RdsDbInstanceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTags">RdsDbInstanceTags</a>]

---


### RdsDbInstanceTagsOutputReference <a name="RdsDbInstanceTagsOutputReference" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_instance

rdsDbInstance.RdsDbInstanceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTags">RdsDbInstanceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RdsDbInstanceTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTags">RdsDbInstanceTags</a>

---



