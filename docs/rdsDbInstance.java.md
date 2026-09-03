# `rdsDbInstance` Submodule <a name="`rdsDbInstance` Submodule" id="@cdktn/provider-awscc.rdsDbInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsDbInstance <a name="RdsDbInstance" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance awscc_rds_db_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_instance.RdsDbInstance;

RdsDbInstance.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .additionalStorageVolumes(IResolvable|java.util.List<RdsDbInstanceAdditionalStorageVolumes>)
//  .allocatedStorage(java.lang.String)
//  .allowMajorVersionUpgrade(java.lang.Boolean|IResolvable)
//  .applyImmediately(java.lang.Boolean|IResolvable)
//  .associatedRoles(IResolvable|java.util.List<RdsDbInstanceAssociatedRoles>)
//  .automaticBackupReplicationKmsKeyId(java.lang.String)
//  .automaticBackupReplicationRegion(java.lang.String)
//  .automaticBackupReplicationRetentionPeriod(java.lang.Number)
//  .autoMinorVersionUpgrade(java.lang.Boolean|IResolvable)
//  .availabilityZone(java.lang.String)
//  .backupRetentionPeriod(java.lang.Number)
//  .backupTarget(java.lang.String)
//  .caCertificateIdentifier(java.lang.String)
//  .certificateRotationRestart(java.lang.Boolean|IResolvable)
//  .characterSetName(java.lang.String)
//  .copyTagsToSnapshot(java.lang.Boolean|IResolvable)
//  .customIamInstanceProfile(java.lang.String)
//  .databaseInsightsMode(java.lang.String)
//  .dbClusterIdentifier(java.lang.String)
//  .dbClusterSnapshotIdentifier(java.lang.String)
//  .dbInstanceClass(java.lang.String)
//  .dbInstanceIdentifier(java.lang.String)
//  .dbName(java.lang.String)
//  .dbParameterGroupName(java.lang.String)
//  .dbSecurityGroups(java.util.List<java.lang.String>)
//  .dbSnapshotIdentifier(java.lang.String)
//  .dbSubnetGroupName(java.lang.String)
//  .dbSystemId(java.lang.String)
//  .dedicatedLogVolume(java.lang.Boolean|IResolvable)
//  .deleteAutomatedBackups(java.lang.Boolean|IResolvable)
//  .deletionProtection(java.lang.Boolean|IResolvable)
//  .domain(java.lang.String)
//  .domainAuthSecretArn(java.lang.String)
//  .domainDnsIps(java.util.List<java.lang.String>)
//  .domainFqdn(java.lang.String)
//  .domainIamRoleName(java.lang.String)
//  .domainOu(java.lang.String)
//  .enableCloudwatchLogsExports(java.util.List<java.lang.String>)
//  .enableIamDatabaseAuthentication(java.lang.Boolean|IResolvable)
//  .enablePerformanceInsights(java.lang.Boolean|IResolvable)
//  .engine(java.lang.String)
//  .engineLifecycleSupport(java.lang.String)
//  .engineVersion(java.lang.String)
//  .iops(java.lang.Number)
//  .kmsKeyId(java.lang.String)
//  .licenseModel(java.lang.String)
//  .manageMasterUserPassword(java.lang.Boolean|IResolvable)
//  .masterUserAuthenticationType(java.lang.String)
//  .masterUsername(java.lang.String)
//  .masterUserPassword(java.lang.String)
//  .masterUserSecret(RdsDbInstanceMasterUserSecret)
//  .maxAllocatedStorage(java.lang.Number)
//  .monitoringInterval(java.lang.Number)
//  .monitoringRoleArn(java.lang.String)
//  .multiAz(java.lang.Boolean|IResolvable)
//  .ncharCharacterSetName(java.lang.String)
//  .networkType(java.lang.String)
//  .optionGroupName(java.lang.String)
//  .performanceInsightsKmsKeyId(java.lang.String)
//  .performanceInsightsRetentionPeriod(java.lang.Number)
//  .port(java.lang.String)
//  .preferredBackupWindow(java.lang.String)
//  .preferredMaintenanceWindow(java.lang.String)
//  .processorFeatures(IResolvable|java.util.List<RdsDbInstanceProcessorFeatures>)
//  .promotionTier(java.lang.Number)
//  .publiclyAccessible(java.lang.Boolean|IResolvable)
//  .replicaMode(java.lang.String)
//  .restoreTime(java.lang.String)
//  .sourceDbClusterIdentifier(java.lang.String)
//  .sourceDbInstanceAutomatedBackupsArn(java.lang.String)
//  .sourceDbInstanceIdentifier(java.lang.String)
//  .sourceDbiResourceId(java.lang.String)
//  .sourceRegion(java.lang.String)
//  .storageEncrypted(java.lang.Boolean|IResolvable)
//  .storageThroughput(java.lang.Number)
//  .storageType(java.lang.String)
//  .tags(IResolvable|java.util.List<RdsDbInstanceTags>)
//  .tdeCredentialArn(java.lang.String)
//  .tdeCredentialPassword(java.lang.String)
//  .timezone(java.lang.String)
//  .useDefaultProcessorFeatures(java.lang.Boolean|IResolvable)
//  .useLatestRestorableTime(java.lang.Boolean|IResolvable)
//  .vpcSecurityGroups(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.additionalStorageVolumes">additionalStorageVolumes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes">RdsDbInstanceAdditionalStorageVolumes</a>></code> | The additional storage volumes associated with the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.allocatedStorage">allocatedStorage</a></code> | <code>java.lang.String</code> | The amount of storage in gibibytes (GiB) to be initially allocated for the database instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.allowMajorVersionUpgrade">allowMajorVersionUpgrade</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A value that indicates whether major version upgrades are allowed. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.applyImmediately">applyImmediately</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether changes to the DB instance and any pending modifications are applied immediately, regardless of the ``PreferredMaintenanceWindow`` setting. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.associatedRoles">associatedRoles</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRoles">RdsDbInstanceAssociatedRoles</a>></code> | The IAMlong (IAM) roles associated with the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.automaticBackupReplicationKmsKeyId">automaticBackupReplicationKmsKeyId</a></code> | <code>java.lang.String</code> | The AWS KMS key identifier for encryption of the replicated automated backups. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.automaticBackupReplicationRegion">automaticBackupReplicationRegion</a></code> | <code>java.lang.String</code> | The AWS-Region associated with the automated backup. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.automaticBackupReplicationRetentionPeriod">automaticBackupReplicationRetentionPeriod</a></code> | <code>java.lang.Number</code> | The retention period for automated backups in a different AWS Region. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A value that indicates whether minor engine upgrades are applied automatically to the DB instance during the maintenance window. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | The Availability Zone (AZ) where the database will be created. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.backupRetentionPeriod">backupRetentionPeriod</a></code> | <code>java.lang.Number</code> | The number of days for which automated backups are retained. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.backupTarget">backupTarget</a></code> | <code>java.lang.String</code> | The location for storing automated backups and manual snapshots. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.caCertificateIdentifier">caCertificateIdentifier</a></code> | <code>java.lang.String</code> | The identifier of the CA certificate for this DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.certificateRotationRestart">certificateRotationRestart</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether the DB instance is restarted when you rotate your SSL/TLS certificate. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.characterSetName">characterSetName</a></code> | <code>java.lang.String</code> | For supported engines, indicates that the DB instance should be associated with the specified character set. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.copyTagsToSnapshot">copyTagsToSnapshot</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether to copy tags from the DB instance to snapshots of the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.customIamInstanceProfile">customIamInstanceProfile</a></code> | <code>java.lang.String</code> | The instance profile associated with the underlying Amazon EC2 instance of an RDS Custom DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.databaseInsightsMode">databaseInsightsMode</a></code> | <code>java.lang.String</code> | The mode of Database Insights to enable for the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.dbClusterIdentifier">dbClusterIdentifier</a></code> | <code>java.lang.String</code> | The identifier of the DB cluster that this DB instance will belong to. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.dbClusterSnapshotIdentifier">dbClusterSnapshotIdentifier</a></code> | <code>java.lang.String</code> | The identifier for the Multi-AZ DB cluster snapshot to restore from. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.dbInstanceClass">dbInstanceClass</a></code> | <code>java.lang.String</code> | The compute and memory capacity of the DB instance, for example ``db.m5.large``. Not all DB instance classes are available in all AWS-Regions, or for all database engines. For the full list of DB instance classes, and availability for your engine, see [DB instance classes](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html) in the *Amazon RDS User Guide* or [Aurora DB instance classes](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.DBInstanceClass.html) in the *Amazon Aurora User Guide*. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.dbInstanceIdentifier">dbInstanceIdentifier</a></code> | <code>java.lang.String</code> | A name for the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.dbName">dbName</a></code> | <code>java.lang.String</code> | The meaning of this parameter differs according to the database engine you use. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.dbParameterGroupName">dbParameterGroupName</a></code> | <code>java.lang.String</code> | The name of an existing DB parameter group or a reference to an [AWS::RDS::DBParameterGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbparametergroup.html) resource created in the template.  To list all of the available DB parameter group names, use the following command:   ``aws rds describe-db-parameter-groups --query "DBParameterGroups[].DBParameterGroupName" --output text``    If any of the data members of the referenced parameter group are changed during an update, the DB instance might need to be restarted, which causes some interruption. If the parameter group contains static parameters, whether they were changed or not, an update triggers a reboot.   If you don't specify a value for ``DBParameterGroupName`` property, the default DB parameter group for the specified engine and engine version is used. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.dbSecurityGroups">dbSecurityGroups</a></code> | <code>java.util.List<java.lang.String></code> | A list of the DB security groups to assign to the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.dbSnapshotIdentifier">dbSnapshotIdentifier</a></code> | <code>java.lang.String</code> | The name or Amazon Resource Name (ARN) of the DB snapshot that's used to restore the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.dbSubnetGroupName">dbSubnetGroupName</a></code> | <code>java.lang.String</code> | A DB subnet group to associate with the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.dbSystemId">dbSystemId</a></code> | <code>java.lang.String</code> | The Oracle system identifier (SID), which is the name of the Oracle database instance that manages your database files. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.dedicatedLogVolume">dedicatedLogVolume</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether the DB instance has a dedicated log volume (DLV) enabled. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.deleteAutomatedBackups">deleteAutomatedBackups</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A value that indicates whether to remove automated backups immediately after the DB instance is deleted. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether the DB instance has deletion protection enabled. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.domain">domain</a></code> | <code>java.lang.String</code> | The Active Directory directory ID to create the DB instance in. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.domainAuthSecretArn">domainAuthSecretArn</a></code> | <code>java.lang.String</code> | The ARN for the Secrets Manager secret with the credentials for the user joining the domain.  Example: ``arn:aws:secretsmanager:region:account-number:secret:myselfmanagedADtestsecret-123456``. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.domainDnsIps">domainDnsIps</a></code> | <code>java.util.List<java.lang.String></code> | The IPv4 DNS IP addresses of your primary and secondary Active Directory domain controllers. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.domainFqdn">domainFqdn</a></code> | <code>java.lang.String</code> | The fully qualified domain name (FQDN) of an Active Directory domain. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.domainIamRoleName">domainIamRoleName</a></code> | <code>java.lang.String</code> | The name of the IAM role to use when making API calls to the Directory Service. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.domainOu">domainOu</a></code> | <code>java.lang.String</code> | The Active Directory organizational unit for your DB instance to join. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.enableCloudwatchLogsExports">enableCloudwatchLogsExports</a></code> | <code>java.util.List<java.lang.String></code> | The list of log types that need to be enabled for exporting to CloudWatch Logs. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.enableIamDatabaseAuthentication">enableIamDatabaseAuthentication</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.enablePerformanceInsights">enablePerformanceInsights</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether to enable Performance Insights for the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.engine">engine</a></code> | <code>java.lang.String</code> | The name of the database engine to use for this DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.engineLifecycleSupport">engineLifecycleSupport</a></code> | <code>java.lang.String</code> | The lifecycle type for this DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | The version number of the database engine to use. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.iops">iops</a></code> | <code>java.lang.Number</code> | The number of I/O operations per second (IOPS) that the database provisions. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | The ARN of the AWS KMS key that's used to encrypt the DB instance, such as ``arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef``. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | License model information for this DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.manageMasterUserPassword">manageMasterUserPassword</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether to manage the master user password with AWS Secrets Manager. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.masterUserAuthenticationType">masterUserAuthenticationType</a></code> | <code>java.lang.String</code> | Specifies the authentication type for the master user. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.masterUsername">masterUsername</a></code> | <code>java.lang.String</code> | The master user name for the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.masterUserPassword">masterUserPassword</a></code> | <code>java.lang.String</code> | The password for the master user. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.masterUserSecret">masterUserSecret</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecret">RdsDbInstanceMasterUserSecret</a></code> | The secret managed by RDS in AWS Secrets Manager for the master user password. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.maxAllocatedStorage">maxAllocatedStorage</a></code> | <code>java.lang.Number</code> | The upper limit in gibibytes (GiB) to which Amazon RDS can automatically scale the storage of the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.monitoringInterval">monitoringInterval</a></code> | <code>java.lang.Number</code> | The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.monitoringRoleArn">monitoringRoleArn</a></code> | <code>java.lang.String</code> | The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to Amazon CloudWatch Logs. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.multiAz">multiAz</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether the DB instance is a Multi-AZ deployment. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.ncharCharacterSetName">ncharCharacterSetName</a></code> | <code>java.lang.String</code> | The name of the NCHAR character set for the Oracle DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.networkType">networkType</a></code> | <code>java.lang.String</code> | The network type of the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.optionGroupName">optionGroupName</a></code> | <code>java.lang.String</code> | Indicates that the DB instance should be associated with the specified option group. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.performanceInsightsKmsKeyId">performanceInsightsKmsKeyId</a></code> | <code>java.lang.String</code> | The AWS KMS key identifier for encryption of Performance Insights data. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.performanceInsightsRetentionPeriod">performanceInsightsRetentionPeriod</a></code> | <code>java.lang.Number</code> | The number of days to retain Performance Insights data. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.port">port</a></code> | <code>java.lang.String</code> | The port number on which the database accepts connections. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.preferredBackupWindow">preferredBackupWindow</a></code> | <code>java.lang.String</code> | The daily time range during which automated backups are created if automated backups are enabled, using the ``BackupRetentionPeriod`` parameter. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>java.lang.String</code> | The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC). |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.processorFeatures">processorFeatures</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeatures">RdsDbInstanceProcessorFeatures</a>></code> | The number of CPU cores and the number of threads per core for the DB instance class of the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.promotionTier">promotionTier</a></code> | <code>java.lang.Number</code> | The order of priority in which an Aurora Replica is promoted to the primary instance after a failure of the existing primary instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.publiclyAccessible">publiclyAccessible</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether the DB instance is an internet-facing instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.replicaMode">replicaMode</a></code> | <code>java.lang.String</code> | The open mode of an Oracle read replica. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.restoreTime">restoreTime</a></code> | <code>java.lang.String</code> | The date and time to restore from. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.sourceDbClusterIdentifier">sourceDbClusterIdentifier</a></code> | <code>java.lang.String</code> | The identifier of the Multi-AZ DB cluster that will act as the source for the read replica. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.sourceDbInstanceAutomatedBackupsArn">sourceDbInstanceAutomatedBackupsArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the replicated automated backups from which to restore, for example, ``arn:aws:rds:us-east-1:123456789012:auto-backup:ab-L2IJCEXJP7XQ7HOJ4SIEXAMPLE``. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.sourceDbInstanceIdentifier">sourceDbInstanceIdentifier</a></code> | <code>java.lang.String</code> | If you want to create a read replica DB instance, specify the ID of the source DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.sourceDbiResourceId">sourceDbiResourceId</a></code> | <code>java.lang.String</code> | The resource ID of the source DB instance from which to restore. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.sourceRegion">sourceRegion</a></code> | <code>java.lang.String</code> | The ID of the region that contains the source DB instance for the read replica. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.storageEncrypted">storageEncrypted</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A value that indicates whether the DB instance is encrypted. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.storageThroughput">storageThroughput</a></code> | <code>java.lang.Number</code> | Specifies the storage throughput value, in mebibyte per second (MiBps), for the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.storageType">storageType</a></code> | <code>java.lang.String</code> | The storage type to associate with the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTags">RdsDbInstanceTags</a>></code> | Tags to assign to the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.tdeCredentialArn">tdeCredentialArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#tde_credential_arn RdsDbInstance#tde_credential_arn}. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.tdeCredentialPassword">tdeCredentialPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#tde_credential_password RdsDbInstance#tde_credential_password}. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.timezone">timezone</a></code> | <code>java.lang.String</code> | The time zone of the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.useDefaultProcessorFeatures">useDefaultProcessorFeatures</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether the DB instance class of the DB instance uses its default processor features. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.useLatestRestorableTime">useLatestRestorableTime</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether the DB instance is restored from the latest backup time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.vpcSecurityGroups">vpcSecurityGroups</a></code> | <code>java.util.List<java.lang.String></code> | A list of the VPC security group IDs to assign to the DB instance. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `additionalStorageVolumes`<sup>Optional</sup> <a name="additionalStorageVolumes" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.additionalStorageVolumes"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes">RdsDbInstanceAdditionalStorageVolumes</a>>

The additional storage volumes associated with the DB instance.

RDS supports additional storage volumes for RDS for Oracle and RDS for SQL Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#additional_storage_volumes RdsDbInstance#additional_storage_volumes}

---

##### `allocatedStorage`<sup>Optional</sup> <a name="allocatedStorage" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.allocatedStorage"></a>

- *Type:* java.lang.String

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#allocated_storage RdsDbInstance#allocated_storage}

---

##### `allowMajorVersionUpgrade`<sup>Optional</sup> <a name="allowMajorVersionUpgrade" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.allowMajorVersionUpgrade"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A value that indicates whether major version upgrades are allowed.

Changing this parameter doesn't result in an outage and the change is asynchronously applied as soon as possible.
Constraints: Major version upgrades must be allowed when specifying a value for the `EngineVersion` parameter that is a different major version than the DB instance's current version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#allow_major_version_upgrade RdsDbInstance#allow_major_version_upgrade}

---

##### `applyImmediately`<sup>Optional</sup> <a name="applyImmediately" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.applyImmediately"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether changes to the DB instance and any pending modifications are applied immediately, regardless of the ``PreferredMaintenanceWindow`` setting.

If set to `false`, changes are applied during the next maintenance window. Until RDS applies the changes, the DB instance remains in a drift state. As a result, the configuration doesn't fully reflect the requested modifications and temporarily diverges from the intended state.
In addition to the settings described in [Modifying a DB instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBInstance.Modifying.html), this property also determines whether the DB instance reboots when a static parameter is modified in the associated DB parameter group.
Default: `true`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#apply_immediately RdsDbInstance#apply_immediately}

---

##### `associatedRoles`<sup>Optional</sup> <a name="associatedRoles" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.associatedRoles"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRoles">RdsDbInstanceAssociatedRoles</a>>

The IAMlong (IAM) roles associated with the DB instance.

*Amazon Aurora*
Not applicable. The associated roles are managed by the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#associated_roles RdsDbInstance#associated_roles}

---

##### `automaticBackupReplicationKmsKeyId`<sup>Optional</sup> <a name="automaticBackupReplicationKmsKeyId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.automaticBackupReplicationKmsKeyId"></a>

- *Type:* java.lang.String

The AWS KMS key identifier for encryption of the replicated automated backups.

The KMS key ID is the Amazon Resource Name (ARN) for the KMS encryption key in the destination AWS-Region, for example, `arn:aws:kms:us-east-1:123456789012:key/AKIAIOSFODNN7EXAMPLE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#automatic_backup_replication_kms_key_id RdsDbInstance#automatic_backup_replication_kms_key_id}

---

##### `automaticBackupReplicationRegion`<sup>Optional</sup> <a name="automaticBackupReplicationRegion" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.automaticBackupReplicationRegion"></a>

- *Type:* java.lang.String

The AWS-Region associated with the automated backup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#automatic_backup_replication_region RdsDbInstance#automatic_backup_replication_region}

---

##### `automaticBackupReplicationRetentionPeriod`<sup>Optional</sup> <a name="automaticBackupReplicationRetentionPeriod" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.automaticBackupReplicationRetentionPeriod"></a>

- *Type:* java.lang.Number

The retention period for automated backups in a different AWS Region.

Use this parameter to set a unique retention period that only applies to cross-Region automated backups. To enable automated backups in a different Region, specify a positive value for the `AutomaticBackupReplicationRegion` parameter.
If not specified, this parameter defaults to the value of the `BackupRetentionPeriod` parameter. The maximum allowed value is 35.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#automatic_backup_replication_retention_period RdsDbInstance#automatic_backup_replication_retention_period}

---

##### `autoMinorVersionUpgrade`<sup>Optional</sup> <a name="autoMinorVersionUpgrade" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.autoMinorVersionUpgrade"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A value that indicates whether minor engine upgrades are applied automatically to the DB instance during the maintenance window.

By default, minor engine upgrades are applied automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#auto_minor_version_upgrade RdsDbInstance#auto_minor_version_upgrade}

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.availabilityZone"></a>

- *Type:* java.lang.String

The Availability Zone (AZ) where the database will be created.

For information on AWS-Regions and Availability Zones, see [Regions and Availability Zones](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html).
For Amazon Aurora, each Aurora DB cluster hosts copies of its storage in three separate Availability Zones. Specify one of these Availability Zones. Aurora automatically chooses an appropriate Availability Zone if you don't specify one.
Default: A random, system-chosen Availability Zone in the endpoint's AWS-Region.
Constraints:

* The `AvailabilityZone` parameter can't be specified if the DB instance is a Multi-AZ deployment.
* The specified Availability Zone must be in the same AWS-Region as the current endpoint.

Example: `us-east-1d`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#availability_zone RdsDbInstance#availability_zone}

---

##### `backupRetentionPeriod`<sup>Optional</sup> <a name="backupRetentionPeriod" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.backupRetentionPeriod"></a>

- *Type:* java.lang.Number

The number of days for which automated backups are retained.

Setting this parameter to a positive number enables backups. Setting this parameter to 0 disables automated backups.
*Amazon Aurora*
Not applicable. The retention period for automated backups is managed by the DB cluster.
Default: 1
Constraints:

* Must be a value from 0 to 35
* Can't be set to 0 if the DB instance is a source to read replicas

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#backup_retention_period RdsDbInstance#backup_retention_period}

---

##### `backupTarget`<sup>Optional</sup> <a name="backupTarget" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.backupTarget"></a>

- *Type:* java.lang.String

The location for storing automated backups and manual snapshots.

Valid Values:

* `local` (Dedicated Local Zone)
* `outposts` (AWS Outposts)
* `region` (AWS-Region)

Default: `region`
For more information, see [Working with Amazon RDS on Outposts](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-on-outposts.html) in the *Amazon RDS User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#backup_target RdsDbInstance#backup_target}

---

##### `caCertificateIdentifier`<sup>Optional</sup> <a name="caCertificateIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.caCertificateIdentifier"></a>

- *Type:* java.lang.String

The identifier of the CA certificate for this DB instance.

For more information, see [Using SSL/TLS to encrypt a connection to a DB instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html) in the *Amazon RDS User Guide* and [Using SSL/TLS to encrypt a connection to a DB cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL.html) in the *Amazon Aurora User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#ca_certificate_identifier RdsDbInstance#ca_certificate_identifier}

---

##### `certificateRotationRestart`<sup>Optional</sup> <a name="certificateRotationRestart" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.certificateRotationRestart"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether the DB instance is restarted when you rotate your SSL/TLS certificate.

By default, the DB instance is restarted when you rotate your SSL/TLS certificate. The certificate is not updated until the DB instance is restarted.
Set this parameter only if you are *not* using SSL/TLS to connect to the DB instance.
If you are using SSL/TLS to connect to the DB instance, follow the appropriate instructions for your DB engine to rotate your SSL/TLS certificate:

* For more information about rotating your SSL/TLS certificate for RDS DB engines, see [Rotating Your SSL/TLS Certificate.](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL-certificate-rotation.html) in the *Amazon RDS User Guide.*
* For more information about rotating your SSL/TLS certificate for Aurora DB engines, see [Rotating Your SSL/TLS Certificate](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL-certificate-rotation.html) in the *Amazon Aurora User Guide*.

This setting doesn't apply to RDS Custom DB instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#certificate_rotation_restart RdsDbInstance#certificate_rotation_restart}

---

##### `characterSetName`<sup>Optional</sup> <a name="characterSetName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.characterSetName"></a>

- *Type:* java.lang.String

For supported engines, indicates that the DB instance should be associated with the specified character set.

*Amazon Aurora*
Not applicable. The character set is managed by the DB cluster. For more information, see [AWS::RDS::DBCluster](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#character_set_name RdsDbInstance#character_set_name}

---

##### `copyTagsToSnapshot`<sup>Optional</sup> <a name="copyTagsToSnapshot" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.copyTagsToSnapshot"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether to copy tags from the DB instance to snapshots of the DB instance.

By default, tags are not copied.
This setting doesn't apply to Amazon Aurora DB instances. Copying tags to snapshots is managed by the DB cluster. Setting this value for an Aurora DB instance has no effect on the DB cluster setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#copy_tags_to_snapshot RdsDbInstance#copy_tags_to_snapshot}

---

##### `customIamInstanceProfile`<sup>Optional</sup> <a name="customIamInstanceProfile" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.customIamInstanceProfile"></a>

- *Type:* java.lang.String

The instance profile associated with the underlying Amazon EC2 instance of an RDS Custom DB instance.

This setting is required for RDS Custom.
Constraints:

* The profile must exist in your account.
* The profile must have an IAM role that Amazon EC2 has permissions to assume.
* The instance profile name and the associated IAM role name must start with the prefix `AWSRDSCustom`.

For the list of permissions required for the IAM role, see [Configure IAM and your VPC](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-setup-orcl.html#custom-setup-orcl.iam-vpc) in the *Amazon RDS User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#custom_iam_instance_profile RdsDbInstance#custom_iam_instance_profile}

---

##### `databaseInsightsMode`<sup>Optional</sup> <a name="databaseInsightsMode" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.databaseInsightsMode"></a>

- *Type:* java.lang.String

The mode of Database Insights to enable for the DB instance.

Aurora DB instances inherit this value from the DB cluster, so you can't change this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#database_insights_mode RdsDbInstance#database_insights_mode}

---

##### `dbClusterIdentifier`<sup>Optional</sup> <a name="dbClusterIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.dbClusterIdentifier"></a>

- *Type:* java.lang.String

The identifier of the DB cluster that this DB instance will belong to.

This setting doesn't apply to RDS Custom DB instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#db_cluster_identifier RdsDbInstance#db_cluster_identifier}

---

##### `dbClusterSnapshotIdentifier`<sup>Optional</sup> <a name="dbClusterSnapshotIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.dbClusterSnapshotIdentifier"></a>

- *Type:* java.lang.String

The identifier for the Multi-AZ DB cluster snapshot to restore from.

For more information on Multi-AZ DB clusters, see [Multi-AZ DB cluster deployments](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html) in the *Amazon RDS User Guide*.
Constraints:

* Must match the identifier of an existing Multi-AZ DB cluster snapshot.
* Can't be specified when `DBSnapshotIdentifier` is specified.
* Must be specified when `DBSnapshotIdentifier` isn't specified.
* If you are restoring from a shared manual Multi-AZ DB cluster snapshot, the `DBClusterSnapshotIdentifier` must be the ARN of the shared snapshot.
* Can't be the identifier of an Aurora DB cluster snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#db_cluster_snapshot_identifier RdsDbInstance#db_cluster_snapshot_identifier}

---

##### `dbInstanceClass`<sup>Optional</sup> <a name="dbInstanceClass" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.dbInstanceClass"></a>

- *Type:* java.lang.String

The compute and memory capacity of the DB instance, for example ``db.m5.large``. Not all DB instance classes are available in all AWS-Regions, or for all database engines. For the full list of DB instance classes, and availability for your engine, see [DB instance classes](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html) in the *Amazon RDS User Guide* or [Aurora DB instance classes](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.DBInstanceClass.html) in the *Amazon Aurora User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#db_instance_class RdsDbInstance#db_instance_class}

---

##### `dbInstanceIdentifier`<sup>Optional</sup> <a name="dbInstanceIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.dbInstanceIdentifier"></a>

- *Type:* java.lang.String

A name for the DB instance.

If you specify a name, AWS CloudFormation converts it to lowercase. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the DB instance. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
For information about constraints that apply to DB instance identifiers, see [Naming constraints in Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Limits.html#RDS_Limits.Constraints) in the *Amazon RDS User Guide*.
If you specify a name, you can't perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#db_instance_identifier RdsDbInstance#db_instance_identifier}

---

##### `dbName`<sup>Optional</sup> <a name="dbName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.dbName"></a>

- *Type:* java.lang.String

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#db_name RdsDbInstance#db_name}

---

##### `dbParameterGroupName`<sup>Optional</sup> <a name="dbParameterGroupName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.dbParameterGroupName"></a>

- *Type:* java.lang.String

The name of an existing DB parameter group or a reference to an [AWS::RDS::DBParameterGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbparametergroup.html) resource created in the template.  To list all of the available DB parameter group names, use the following command:   ``aws rds describe-db-parameter-groups --query "DBParameterGroups[].DBParameterGroupName" --output text``    If any of the data members of the referenced parameter group are changed during an update, the DB instance might need to be restarted, which causes some interruption. If the parameter group contains static parameters, whether they were changed or not, an update triggers a reboot.   If you don't specify a value for ``DBParameterGroupName`` property, the default DB parameter group for the specified engine and engine version is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#db_parameter_group_name RdsDbInstance#db_parameter_group_name}

---

##### `dbSecurityGroups`<sup>Optional</sup> <a name="dbSecurityGroups" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.dbSecurityGroups"></a>

- *Type:* java.util.List<java.lang.String>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#db_security_groups RdsDbInstance#db_security_groups}

---

##### `dbSnapshotIdentifier`<sup>Optional</sup> <a name="dbSnapshotIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.dbSnapshotIdentifier"></a>

- *Type:* java.lang.String

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#db_snapshot_identifier RdsDbInstance#db_snapshot_identifier}

---

##### `dbSubnetGroupName`<sup>Optional</sup> <a name="dbSubnetGroupName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.dbSubnetGroupName"></a>

- *Type:* java.lang.String

A DB subnet group to associate with the DB instance.

If you update this value, the new subnet group must be a subnet group in a new VPC.
If you don't specify a DB subnet group, RDS uses the default DB subnet group if one exists. If a default DB subnet group does not exist, and you don't specify a `DBSubnetGroupName`, the DB instance fails to launch.
For more information about using Amazon RDS in a VPC, see [Amazon VPC and Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.html) in the *Amazon RDS User Guide*.
This setting doesn't apply to Amazon Aurora DB instances. The DB subnet group is managed by the DB cluster. If specified, the setting must match the DB cluster setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#db_subnet_group_name RdsDbInstance#db_subnet_group_name}

---

##### `dbSystemId`<sup>Optional</sup> <a name="dbSystemId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.dbSystemId"></a>

- *Type:* java.lang.String

The Oracle system identifier (SID), which is the name of the Oracle database instance that manages your database files.

In this context, the term "Oracle database instance" refers exclusively to the system global area (SGA) and Oracle background processes. If you don't specify a SID, the value defaults to `RDSCDB`. The Oracle SID is also the name of your CDB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#db_system_id RdsDbInstance#db_system_id}

---

##### `dedicatedLogVolume`<sup>Optional</sup> <a name="dedicatedLogVolume" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.dedicatedLogVolume"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether the DB instance has a dedicated log volume (DLV) enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#dedicated_log_volume RdsDbInstance#dedicated_log_volume}

---

##### `deleteAutomatedBackups`<sup>Optional</sup> <a name="deleteAutomatedBackups" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.deleteAutomatedBackups"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A value that indicates whether to remove automated backups immediately after the DB instance is deleted.

This parameter isn't case-sensitive. The default is to remove automated backups immediately after the DB instance is deleted.
*Amazon Aurora*
Not applicable. When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered. Manual DB cluster snapshots of the DB cluster are not deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#delete_automated_backups RdsDbInstance#delete_automated_backups}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.deletionProtection"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether the DB instance has deletion protection enabled.

The database can't be deleted when deletion protection is enabled. By default, deletion protection isn't enabled. For more information, see [Deleting a DB Instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_DeleteInstance.html).
This setting doesn't apply to Amazon Aurora DB instances. You can enable or disable deletion protection for the DB cluster. For more information, see `CreateDBCluster`. DB instances in a DB cluster can be deleted even when deletion protection is enabled for the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#deletion_protection RdsDbInstance#deletion_protection}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.domain"></a>

- *Type:* java.lang.String

The Active Directory directory ID to create the DB instance in.

Currently, only Db2, MySQL, Microsoft SQL Server, Oracle, and PostgreSQL DB instances can be created in an Active Directory Domain.
For more information, see [Kerberos Authentication](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/kerberos-authentication.html) in the *Amazon RDS User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#domain RdsDbInstance#domain}

---

##### `domainAuthSecretArn`<sup>Optional</sup> <a name="domainAuthSecretArn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.domainAuthSecretArn"></a>

- *Type:* java.lang.String

The ARN for the Secrets Manager secret with the credentials for the user joining the domain.  Example: ``arn:aws:secretsmanager:region:account-number:secret:myselfmanagedADtestsecret-123456``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#domain_auth_secret_arn RdsDbInstance#domain_auth_secret_arn}

---

##### `domainDnsIps`<sup>Optional</sup> <a name="domainDnsIps" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.domainDnsIps"></a>

- *Type:* java.util.List<java.lang.String>

The IPv4 DNS IP addresses of your primary and secondary Active Directory domain controllers.

Constraints:

* Two IP addresses must be provided. If there isn't a secondary domain controller, use the IP address of the primary domain controller for both entries in the list.

Example: `123.124.125.126,234.235.236.237`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#domain_dns_ips RdsDbInstance#domain_dns_ips}

---

##### `domainFqdn`<sup>Optional</sup> <a name="domainFqdn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.domainFqdn"></a>

- *Type:* java.lang.String

The fully qualified domain name (FQDN) of an Active Directory domain.

Constraints:

* Can't be longer than 64 characters.

Example: `mymanagedADtest.mymanagedAD.mydomain`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#domain_fqdn RdsDbInstance#domain_fqdn}

---

##### `domainIamRoleName`<sup>Optional</sup> <a name="domainIamRoleName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.domainIamRoleName"></a>

- *Type:* java.lang.String

The name of the IAM role to use when making API calls to the Directory Service.

This setting doesn't apply to the following DB instances:

* Amazon Aurora (The domain is managed by the DB cluster.)
* RDS Custom

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#domain_iam_role_name RdsDbInstance#domain_iam_role_name}

---

##### `domainOu`<sup>Optional</sup> <a name="domainOu" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.domainOu"></a>

- *Type:* java.lang.String

The Active Directory organizational unit for your DB instance to join.

Constraints:

* Must be in the distinguished name format.
* Can't be longer than 64 characters.

Example: `OU=mymanagedADtestOU,DC=mymanagedADtest,DC=mymanagedAD,DC=mydomain`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#domain_ou RdsDbInstance#domain_ou}

---

##### `enableCloudwatchLogsExports`<sup>Optional</sup> <a name="enableCloudwatchLogsExports" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.enableCloudwatchLogsExports"></a>

- *Type:* java.util.List<java.lang.String>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#enable_cloudwatch_logs_exports RdsDbInstance#enable_cloudwatch_logs_exports}

---

##### `enableIamDatabaseAuthentication`<sup>Optional</sup> <a name="enableIamDatabaseAuthentication" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.enableIamDatabaseAuthentication"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts.

By default, mapping is disabled.
This property is supported for RDS for MariaDB, RDS for MySQL, and RDS for PostgreSQL. For more information, see [IAM Database Authentication for MariaDB, MySQL, and PostgreSQL](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html) in the *Amazon RDS User Guide.*
*Amazon Aurora*
Not applicable. Mapping AWS IAM accounts to database accounts is managed by the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#enable_iam_database_authentication RdsDbInstance#enable_iam_database_authentication}

---

##### `enablePerformanceInsights`<sup>Optional</sup> <a name="enablePerformanceInsights" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.enablePerformanceInsights"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether to enable Performance Insights for the DB instance.

For more information, see [Using Amazon Performance Insights](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html) in the *Amazon RDS User Guide*.
This setting doesn't apply to RDS Custom DB instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#enable_performance_insights RdsDbInstance#enable_performance_insights}

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.engine"></a>

- *Type:* java.lang.String

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#engine RdsDbInstance#engine}

---

##### `engineLifecycleSupport`<sup>Optional</sup> <a name="engineLifecycleSupport" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.engineLifecycleSupport"></a>

- *Type:* java.lang.String

The lifecycle type for this DB instance.

By default, this value is set to `open-source-rds-extended-support`, which enrolls your DB instance into Amazon RDS Extended Support. At the end of standard support, you can avoid charges for Extended Support by setting the value to `open-source-rds-extended-support-disabled`. In this case, creating the DB instance will fail if the DB major version is past its end of standard support date.
This setting applies only to RDS for MySQL and RDS for PostgreSQL. For Amazon Aurora DB instances, the engine lifecycle support is managed by the DB cluster.
You can use this setting to enroll your DB instance into Amazon RDS Extended Support. With RDS Extended Support, you can run the selected major engine version on your DB instance past the end of standard support for that engine version. For more information, see [Amazon RDS Extended Support with Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/extended-support.html) in the *Amazon RDS User Guide*.
Valid Values: `open-source-rds-extended-support | open-source-rds-extended-support-disabled`
Default: `open-source-rds-extended-support`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#engine_lifecycle_support RdsDbInstance#engine_lifecycle_support}

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.engineVersion"></a>

- *Type:* java.lang.String

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#engine_version RdsDbInstance#engine_version}

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.iops"></a>

- *Type:* java.lang.Number

The number of I/O operations per second (IOPS) that the database provisions.

The value must be equal to or greater than 1000.
If you specify this property, you must follow the range of allowed ratios of your requested IOPS rate to the amount of storage that you allocate (IOPS to allocated storage). For example, you can provision an Oracle database instance with 1000 IOPS and 200 GiB of storage (a ratio of 5:1), or specify 2000 IOPS with 200 GiB of storage (a ratio of 10:1). For more information, see [Amazon RDS Provisioned IOPS Storage to Improve Performance](https://docs.aws.amazon.com/AmazonRDS/latest/DeveloperGuide/CHAP_Storage.html#USER_PIOPS) in the *Amazon RDS User Guide*.
If you specify `io1` for the `StorageType` property, then you must also specify the `Iops` property.
Constraints:

* For RDS for Db2, MariaDB, MySQL, Oracle, and PostgreSQL - Must be a multiple between .5 and 50 of the storage amount for the DB instance.
* For RDS for SQL Server - Must be a multiple between 1 and 50 of the storage amount for the DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#iops RdsDbInstance#iops}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.kmsKeyId"></a>

- *Type:* java.lang.String

The ARN of the AWS KMS key that's used to encrypt the DB instance, such as ``arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef``.

If you enable the StorageEncrypted property but don't specify this property, AWS CloudFormation uses the default KMS key. If you specify this property, you must set the StorageEncrypted property to true.
If you specify the `SourceDBInstanceIdentifier` or `SourceDbiResourceId` property, don't specify this property. The value is inherited from the source DB instance, and if the DB instance is encrypted, the specified `KmsKeyId` property is used. However, if the source DB instance is in a different AWS Region, you must specify a KMS key ID.
If you specify the `SourceDBInstanceAutomatedBackupsArn` property, don't specify this property. The value is inherited from the source DB instance automated backup, and if the automated backup is encrypted, the specified `KmsKeyId` property is used.
If you create an encrypted read replica in a different AWS Region, then you must specify a KMS key for the destination AWS Region. KMS encryption keys are specific to the region that they're created in, and you can't use encryption keys from one region in another region.
If you specify the `DBSnapshotIdentifier` property, don't specify this property. The `StorageEncrypted` property value is inherited from the snapshot. If the DB instance is encrypted, the specified `KmsKeyId` property is also inherited from the snapshot.
If you specify `DBSecurityGroups`, AWS CloudFormation ignores this property. To specify both a security group and this property, you must use a VPC security group. For more information about Amazon RDS and VPC, see [Using Amazon RDS with Amazon VPC](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.html) in the *Amazon RDS User Guide*.
*Amazon Aurora*
Not applicable. The KMS key identifier is managed by the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#kms_key_id RdsDbInstance#kms_key_id}

---

##### `licenseModel`<sup>Optional</sup> <a name="licenseModel" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.licenseModel"></a>

- *Type:* java.lang.String

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#license_model RdsDbInstance#license_model}

---

##### `manageMasterUserPassword`<sup>Optional</sup> <a name="manageMasterUserPassword" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.manageMasterUserPassword"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether to manage the master user password with AWS Secrets Manager.

For more information, see [Password management with Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the *Amazon RDS User Guide.*
Constraints:

* Can't manage the master user password with AWS Secrets Manager if `MasterUserPassword` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#manage_master_user_password RdsDbInstance#manage_master_user_password}

---

##### `masterUserAuthenticationType`<sup>Optional</sup> <a name="masterUserAuthenticationType" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.masterUserAuthenticationType"></a>

- *Type:* java.lang.String

Specifies the authentication type for the master user.

With IAM master user authentication, you can configure the master DB user with IAM database authentication when you create a DB instance.
You can specify one of the following values:

* `password` - Use standard database authentication with a password.
* `iam-db-auth` - Use IAM database authentication for the master user.

This option is only valid for RDS for MySQL, RDS for MariaDB, RDS for PostgreSQL, Aurora MySQL, and Aurora PostgreSQL engines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#master_user_authentication_type RdsDbInstance#master_user_authentication_type}

---

##### `masterUsername`<sup>Optional</sup> <a name="masterUsername" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.masterUsername"></a>

- *Type:* java.lang.String

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#master_username RdsDbInstance#master_username}

---

##### `masterUserPassword`<sup>Optional</sup> <a name="masterUserPassword" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.masterUserPassword"></a>

- *Type:* java.lang.String

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#master_user_password RdsDbInstance#master_user_password}

---

##### `masterUserSecret`<sup>Optional</sup> <a name="masterUserSecret" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.masterUserSecret"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecret">RdsDbInstanceMasterUserSecret</a>

The secret managed by RDS in AWS Secrets Manager for the master user password.

For more information, see [Password management with Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the *Amazon RDS User Guide.*

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#master_user_secret RdsDbInstance#master_user_secret}

---

##### `maxAllocatedStorage`<sup>Optional</sup> <a name="maxAllocatedStorage" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.maxAllocatedStorage"></a>

- *Type:* java.lang.Number

The upper limit in gibibytes (GiB) to which Amazon RDS can automatically scale the storage of the DB instance.

For more information about this setting, including limitations that apply to it, see [Managing capacity automatically with Amazon RDS storage autoscaling](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.StorageTypes.html#USER_PIOPS.Autoscaling) in the *Amazon RDS User Guide*.
This setting doesn't apply to the following DB instances:

* Amazon Aurora (Storage is managed by the DB cluster.)
* RDS Custom

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#max_allocated_storage RdsDbInstance#max_allocated_storage}

---

##### `monitoringInterval`<sup>Optional</sup> <a name="monitoringInterval" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.monitoringInterval"></a>

- *Type:* java.lang.Number

The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance.

To disable collection of Enhanced Monitoring metrics, specify `0`.
If `MonitoringRoleArn` is specified, then you must set `MonitoringInterval` to a value other than `0`.
This setting doesn't apply to RDS Custom DB instances.
Valid Values: `0 | 1 | 5 | 10 | 15 | 30 | 60`
Default: `0`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#monitoring_interval RdsDbInstance#monitoring_interval}

---

##### `monitoringRoleArn`<sup>Optional</sup> <a name="monitoringRoleArn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.monitoringRoleArn"></a>

- *Type:* java.lang.String

The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to Amazon CloudWatch Logs.

For example, `arn:aws:iam:123456789012:role/emaccess`. For information on creating a monitoring role, see [Setting Up and Enabling Enhanced Monitoring](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.OS.html#USER_Monitoring.OS.Enabling) in the *Amazon RDS User Guide*.
If `MonitoringInterval` is set to a value other than `0`, then you must supply a `MonitoringRoleArn` value.
This setting doesn't apply to RDS Custom DB instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#monitoring_role_arn RdsDbInstance#monitoring_role_arn}

---

##### `multiAz`<sup>Optional</sup> <a name="multiAz" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.multiAz"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether the DB instance is a Multi-AZ deployment.

You can't set the `AvailabilityZone` parameter if the DB instance is a Multi-AZ deployment.
This setting doesn't apply to Amazon Aurora because the DB instance Availability Zones (AZs) are managed by the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#multi_az RdsDbInstance#multi_az}

---

##### `ncharCharacterSetName`<sup>Optional</sup> <a name="ncharCharacterSetName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.ncharCharacterSetName"></a>

- *Type:* java.lang.String

The name of the NCHAR character set for the Oracle DB instance.

This setting doesn't apply to RDS Custom DB instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#nchar_character_set_name RdsDbInstance#nchar_character_set_name}

---

##### `networkType`<sup>Optional</sup> <a name="networkType" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.networkType"></a>

- *Type:* java.lang.String

The network type of the DB instance.

Valid values:

* `IPV4`
* `DUAL`

The network type is determined by the `DBSubnetGroup` specified for the DB instance. A `DBSubnetGroup` can support only the IPv4 protocol or the IPv4 and IPv6 protocols (`DUAL`).
For more information, see [Working with a DB instance in a VPC](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html) in the *Amazon RDS User Guide.*

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#network_type RdsDbInstance#network_type}

---

##### `optionGroupName`<sup>Optional</sup> <a name="optionGroupName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.optionGroupName"></a>

- *Type:* java.lang.String

Indicates that the DB instance should be associated with the specified option group.

Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed from an option group. Also, that option group can't be removed from a DB instance once it is associated with a DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#option_group_name RdsDbInstance#option_group_name}

---

##### `performanceInsightsKmsKeyId`<sup>Optional</sup> <a name="performanceInsightsKmsKeyId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.performanceInsightsKmsKeyId"></a>

- *Type:* java.lang.String

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#performance_insights_kms_key_id RdsDbInstance#performance_insights_kms_key_id}

---

##### `performanceInsightsRetentionPeriod`<sup>Optional</sup> <a name="performanceInsightsRetentionPeriod" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.performanceInsightsRetentionPeriod"></a>

- *Type:* java.lang.Number

The number of days to retain Performance Insights data.

When creating a DB instance without enabling Performance Insights, you can't specify the parameter `PerformanceInsightsRetentionPeriod`.
This setting doesn't apply to RDS Custom DB instances.
Valid Values:

* `7`
* *month* * 31, where *month* is a number of months from 1-23. Examples: `93` (3 months * 31), `341` (11 months * 31), `589` (19 months * 31)
* `731`

Default: `7` days
If you specify a retention period that isn't valid, such as `94`, Amazon RDS returns an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#performance_insights_retention_period RdsDbInstance#performance_insights_retention_period}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.port"></a>

- *Type:* java.lang.String

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#port RdsDbInstance#port}

---

##### `preferredBackupWindow`<sup>Optional</sup> <a name="preferredBackupWindow" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.preferredBackupWindow"></a>

- *Type:* java.lang.String

The daily time range during which automated backups are created if automated backups are enabled, using the ``BackupRetentionPeriod`` parameter.

For more information, see [Backup Window](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html#USER_WorkingWithAutomatedBackups.BackupWindow) in the *Amazon RDS User Guide.*
Constraints:

* Must be in the format `hh24:mi-hh24:mi`.
* Must be in Universal Coordinated Time (UTC).
* Must not conflict with the preferred maintenance window.
* Must be at least 30 minutes.

*Amazon Aurora*
Not applicable. The daily time range for creating automated backups is managed by the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#preferred_backup_window RdsDbInstance#preferred_backup_window}

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.preferredMaintenanceWindow"></a>

- *Type:* java.lang.String

The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).

Format: `ddd:hh24:mi-ddd:hh24:mi`
The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week. To see the time blocks available, see [Maintaining a DB instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow) in the *Amazon RDS User Guide.*
This property applies when AWS CloudFormation initially creates the DB instance. If you use AWS CloudFormation to update the DB instance, those updates are applied immediately.
Constraints: Minimum 30-minute window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#preferred_maintenance_window RdsDbInstance#preferred_maintenance_window}

---

##### `processorFeatures`<sup>Optional</sup> <a name="processorFeatures" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.processorFeatures"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeatures">RdsDbInstanceProcessorFeatures</a>>

The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.

This setting doesn't apply to Amazon Aurora or RDS Custom DB instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#processor_features RdsDbInstance#processor_features}

---

##### `promotionTier`<sup>Optional</sup> <a name="promotionTier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.promotionTier"></a>

- *Type:* java.lang.Number

The order of priority in which an Aurora Replica is promoted to the primary instance after a failure of the existing primary instance.

For more information, see [Fault Tolerance for an Aurora DB Cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.AuroraHighAvailability.html#Aurora.Managing.FaultTolerance) in the *Amazon Aurora User Guide*.
This setting doesn't apply to RDS Custom DB instances.
Default: `1`
Valid Values: `0 - 15`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#promotion_tier RdsDbInstance#promotion_tier}

---

##### `publiclyAccessible`<sup>Optional</sup> <a name="publiclyAccessible" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.publiclyAccessible"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether the DB instance is an internet-facing instance.

If you specify true, AWS CloudFormation creates an instance with a publicly resolvable DNS name, which resolves to a public IP address. If you specify false, AWS CloudFormation creates an internal instance with a DNS name that resolves to a private IP address.
The default behavior value depends on your VPC setup and the database subnet group. For more information, see the `PubliclyAccessible` parameter in the [CreateDBInstance](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstance.html) in the *Amazon RDS API Reference*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#publicly_accessible RdsDbInstance#publicly_accessible}

---

##### `replicaMode`<sup>Optional</sup> <a name="replicaMode" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.replicaMode"></a>

- *Type:* java.lang.String

The open mode of an Oracle read replica.

For more information, see [Working with Oracle Read Replicas for Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/oracle-read-replicas.html) in the *Amazon RDS User Guide*.
This setting is only supported in RDS for Oracle.
Default: `open-read-only`
Valid Values: `open-read-only` or `mounted`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#replica_mode RdsDbInstance#replica_mode}

---

##### `restoreTime`<sup>Optional</sup> <a name="restoreTime" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.restoreTime"></a>

- *Type:* java.lang.String

The date and time to restore from.

This parameter applies to point-in-time recovery. For more information, see [Restoring a DB instance to a specified time](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIT.html) in the in the *Amazon RDS User Guide*.
Constraints:

* Must be a time in Universal Coordinated Time (UTC) format.
* Must be before the latest restorable time for the DB instance.
* Can't be specified if the `UseLatestRestorableTime` parameter is enabled.

Example: `2009-09-07T23:45:00Z`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#restore_time RdsDbInstance#restore_time}

---

##### `sourceDbClusterIdentifier`<sup>Optional</sup> <a name="sourceDbClusterIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.sourceDbClusterIdentifier"></a>

- *Type:* java.lang.String

The identifier of the Multi-AZ DB cluster that will act as the source for the read replica.

Each DB cluster can have up to 15 read replicas.
Constraints:

* Must be the identifier of an existing Multi-AZ DB cluster.
* Can't be specified if the `SourceDBInstanceIdentifier` parameter is also specified.
* The specified DB cluster must have automatic backups enabled, that is, its backup retention period must be greater than 0.
* The source DB cluster must be in the same AWS-Region as the read replica. Cross-Region replication isn't supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#source_db_cluster_identifier RdsDbInstance#source_db_cluster_identifier}

---

##### `sourceDbInstanceAutomatedBackupsArn`<sup>Optional</sup> <a name="sourceDbInstanceAutomatedBackupsArn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.sourceDbInstanceAutomatedBackupsArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the replicated automated backups from which to restore, for example, ``arn:aws:rds:us-east-1:123456789012:auto-backup:ab-L2IJCEXJP7XQ7HOJ4SIEXAMPLE``.

This setting doesn't apply to RDS Custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#source_db_instance_automated_backups_arn RdsDbInstance#source_db_instance_automated_backups_arn}

---

##### `sourceDbInstanceIdentifier`<sup>Optional</sup> <a name="sourceDbInstanceIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.sourceDbInstanceIdentifier"></a>

- *Type:* java.lang.String

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#source_db_instance_identifier RdsDbInstance#source_db_instance_identifier}

---

##### `sourceDbiResourceId`<sup>Optional</sup> <a name="sourceDbiResourceId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.sourceDbiResourceId"></a>

- *Type:* java.lang.String

The resource ID of the source DB instance from which to restore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#source_dbi_resource_id RdsDbInstance#source_dbi_resource_id}

---

##### `sourceRegion`<sup>Optional</sup> <a name="sourceRegion" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.sourceRegion"></a>

- *Type:* java.lang.String

The ID of the region that contains the source DB instance for the read replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#source_region RdsDbInstance#source_region}

---

##### `storageEncrypted`<sup>Optional</sup> <a name="storageEncrypted" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.storageEncrypted"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A value that indicates whether the DB instance is encrypted.

By default, it isn't encrypted.
If you specify the `KmsKeyId` property, then you must enable encryption.
If you specify the `SourceDBInstanceIdentifier` or `SourceDbiResourceId` property, don't specify this property. The value is inherited from the source DB instance, and if the DB instance is encrypted, the specified `KmsKeyId` property is used.
If you specify the `SourceDBInstanceAutomatedBackupsArn` property, don't specify this property. The value is inherited from the source DB instance automated backup.
If you specify `DBSnapshotIdentifier` property, don't specify this property. The value is inherited from the snapshot.
*Amazon Aurora*
Not applicable. The encryption for DB instances is managed by the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#storage_encrypted RdsDbInstance#storage_encrypted}

---

##### `storageThroughput`<sup>Optional</sup> <a name="storageThroughput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.storageThroughput"></a>

- *Type:* java.lang.Number

Specifies the storage throughput value, in mebibyte per second (MiBps), for the DB instance.

This setting applies only to the `gp3` storage type.
This setting doesn't apply to RDS Custom or Amazon Aurora.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#storage_throughput RdsDbInstance#storage_throughput}

---

##### `storageType`<sup>Optional</sup> <a name="storageType" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.storageType"></a>

- *Type:* java.lang.String

The storage type to associate with the DB instance.

If you specify `io1`, `io2`, or `gp3`, you must also include a value for the `Iops` parameter.
This setting doesn't apply to Amazon Aurora DB instances. Storage is managed by the DB cluster.
Valid Values: `gp2 | gp3 | io1 | io2 | standard`
Default: `io1`, if the `Iops` parameter is specified. Otherwise, `gp3`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#storage_type RdsDbInstance#storage_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTags">RdsDbInstanceTags</a>>

Tags to assign to the DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#tags RdsDbInstance#tags}

---

##### `tdeCredentialArn`<sup>Optional</sup> <a name="tdeCredentialArn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.tdeCredentialArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#tde_credential_arn RdsDbInstance#tde_credential_arn}.

---

##### `tdeCredentialPassword`<sup>Optional</sup> <a name="tdeCredentialPassword" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.tdeCredentialPassword"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#tde_credential_password RdsDbInstance#tde_credential_password}.

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.timezone"></a>

- *Type:* java.lang.String

The time zone of the DB instance.

The time zone parameter is currently supported only by [RDS for Db2](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/db2-time-zone) and [RDS for SQL Server](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_SQLServer.html#SQLServer.Concepts.General.TimeZone).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#timezone RdsDbInstance#timezone}

---

##### `useDefaultProcessorFeatures`<sup>Optional</sup> <a name="useDefaultProcessorFeatures" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.useDefaultProcessorFeatures"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether the DB instance class of the DB instance uses its default processor features.

This setting doesn't apply to RDS Custom DB instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#use_default_processor_features RdsDbInstance#use_default_processor_features}

---

##### `useLatestRestorableTime`<sup>Optional</sup> <a name="useLatestRestorableTime" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.useLatestRestorableTime"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether the DB instance is restored from the latest backup time.

By default, the DB instance isn't restored from the latest backup time. This parameter applies to point-in-time recovery. For more information, see [Restoring a DB instance to a specified time](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIT.html) in the in the *Amazon RDS User Guide*.
Constraints:

* Can't be specified if the `RestoreTime` parameter is provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#use_latest_restorable_time RdsDbInstance#use_latest_restorable_time}

---

##### `vpcSecurityGroups`<sup>Optional</sup> <a name="vpcSecurityGroups" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.Initializer.parameter.vpcSecurityGroups"></a>

- *Type:* java.util.List<java.lang.String>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#vpc_security_groups RdsDbInstance#vpc_security_groups}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.putAdditionalStorageVolumes">putAdditionalStorageVolumes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.putAssociatedRoles">putAssociatedRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.putMasterUserSecret">putMasterUserSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.putProcessorFeatures">putProcessorFeatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAdditionalStorageVolumes">resetAdditionalStorageVolumes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAllocatedStorage">resetAllocatedStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAllowMajorVersionUpgrade">resetAllowMajorVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetApplyImmediately">resetApplyImmediately</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAssociatedRoles">resetAssociatedRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAutomaticBackupReplicationKmsKeyId">resetAutomaticBackupReplicationKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAutomaticBackupReplicationRegion">resetAutomaticBackupReplicationRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAutomaticBackupReplicationRetentionPeriod">resetAutomaticBackupReplicationRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAutoMinorVersionUpgrade">resetAutoMinorVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetBackupRetentionPeriod">resetBackupRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetBackupTarget">resetBackupTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetCaCertificateIdentifier">resetCaCertificateIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetCertificateRotationRestart">resetCertificateRotationRestart</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetCharacterSetName">resetCharacterSetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetCopyTagsToSnapshot">resetCopyTagsToSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetCustomIamInstanceProfile">resetCustomIamInstanceProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDatabaseInsightsMode">resetDatabaseInsightsMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbClusterIdentifier">resetDbClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbClusterSnapshotIdentifier">resetDbClusterSnapshotIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbInstanceClass">resetDbInstanceClass</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbInstanceIdentifier">resetDbInstanceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbName">resetDbName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbParameterGroupName">resetDbParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbSecurityGroups">resetDbSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbSnapshotIdentifier">resetDbSnapshotIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbSubnetGroupName">resetDbSubnetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbSystemId">resetDbSystemId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDedicatedLogVolume">resetDedicatedLogVolume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDeleteAutomatedBackups">resetDeleteAutomatedBackups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDomainAuthSecretArn">resetDomainAuthSecretArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDomainDnsIps">resetDomainDnsIps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDomainFqdn">resetDomainFqdn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDomainIamRoleName">resetDomainIamRoleName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDomainOu">resetDomainOu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetEnableCloudwatchLogsExports">resetEnableCloudwatchLogsExports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetEnableIamDatabaseAuthentication">resetEnableIamDatabaseAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetEnablePerformanceInsights">resetEnablePerformanceInsights</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetEngine">resetEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetEngineLifecycleSupport">resetEngineLifecycleSupport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetEngineVersion">resetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetLicenseModel">resetLicenseModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetManageMasterUserPassword">resetManageMasterUserPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMasterUserAuthenticationType">resetMasterUserAuthenticationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMasterUsername">resetMasterUsername</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMasterUserPassword">resetMasterUserPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMasterUserSecret">resetMasterUserSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMaxAllocatedStorage">resetMaxAllocatedStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMonitoringInterval">resetMonitoringInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMonitoringRoleArn">resetMonitoringRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMultiAz">resetMultiAz</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetNcharCharacterSetName">resetNcharCharacterSetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetNetworkType">resetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetOptionGroupName">resetOptionGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetPerformanceInsightsKmsKeyId">resetPerformanceInsightsKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetPerformanceInsightsRetentionPeriod">resetPerformanceInsightsRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetPreferredBackupWindow">resetPreferredBackupWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetPreferredMaintenanceWindow">resetPreferredMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetProcessorFeatures">resetProcessorFeatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetPromotionTier">resetPromotionTier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetPubliclyAccessible">resetPubliclyAccessible</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetReplicaMode">resetReplicaMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetRestoreTime">resetRestoreTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetSourceDbClusterIdentifier">resetSourceDbClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetSourceDbInstanceAutomatedBackupsArn">resetSourceDbInstanceAutomatedBackupsArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetSourceDbInstanceIdentifier">resetSourceDbInstanceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetSourceDbiResourceId">resetSourceDbiResourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetSourceRegion">resetSourceRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetStorageEncrypted">resetStorageEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetStorageThroughput">resetStorageThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetStorageType">resetStorageType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetTdeCredentialArn">resetTdeCredentialArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetTdeCredentialPassword">resetTdeCredentialPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetTimezone">resetTimezone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetUseDefaultProcessorFeatures">resetUseDefaultProcessorFeatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetUseLatestRestorableTime">resetUseLatestRestorableTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetVpcSecurityGroups">resetVpcSecurityGroups</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdditionalStorageVolumes` <a name="putAdditionalStorageVolumes" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.putAdditionalStorageVolumes"></a>

```java
public void putAdditionalStorageVolumes(IResolvable|java.util.List<RdsDbInstanceAdditionalStorageVolumes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.putAdditionalStorageVolumes.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes">RdsDbInstanceAdditionalStorageVolumes</a>>

---

##### `putAssociatedRoles` <a name="putAssociatedRoles" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.putAssociatedRoles"></a>

```java
public void putAssociatedRoles(IResolvable|java.util.List<RdsDbInstanceAssociatedRoles> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.putAssociatedRoles.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRoles">RdsDbInstanceAssociatedRoles</a>>

---

##### `putMasterUserSecret` <a name="putMasterUserSecret" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.putMasterUserSecret"></a>

```java
public void putMasterUserSecret(RdsDbInstanceMasterUserSecret value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.putMasterUserSecret.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecret">RdsDbInstanceMasterUserSecret</a>

---

##### `putProcessorFeatures` <a name="putProcessorFeatures" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.putProcessorFeatures"></a>

```java
public void putProcessorFeatures(IResolvable|java.util.List<RdsDbInstanceProcessorFeatures> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.putProcessorFeatures.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeatures">RdsDbInstanceProcessorFeatures</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<RdsDbInstanceTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTags">RdsDbInstanceTags</a>>

---

##### `resetAdditionalStorageVolumes` <a name="resetAdditionalStorageVolumes" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAdditionalStorageVolumes"></a>

```java
public void resetAdditionalStorageVolumes()
```

##### `resetAllocatedStorage` <a name="resetAllocatedStorage" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAllocatedStorage"></a>

```java
public void resetAllocatedStorage()
```

##### `resetAllowMajorVersionUpgrade` <a name="resetAllowMajorVersionUpgrade" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAllowMajorVersionUpgrade"></a>

```java
public void resetAllowMajorVersionUpgrade()
```

##### `resetApplyImmediately` <a name="resetApplyImmediately" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetApplyImmediately"></a>

```java
public void resetApplyImmediately()
```

##### `resetAssociatedRoles` <a name="resetAssociatedRoles" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAssociatedRoles"></a>

```java
public void resetAssociatedRoles()
```

##### `resetAutomaticBackupReplicationKmsKeyId` <a name="resetAutomaticBackupReplicationKmsKeyId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAutomaticBackupReplicationKmsKeyId"></a>

```java
public void resetAutomaticBackupReplicationKmsKeyId()
```

##### `resetAutomaticBackupReplicationRegion` <a name="resetAutomaticBackupReplicationRegion" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAutomaticBackupReplicationRegion"></a>

```java
public void resetAutomaticBackupReplicationRegion()
```

##### `resetAutomaticBackupReplicationRetentionPeriod` <a name="resetAutomaticBackupReplicationRetentionPeriod" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAutomaticBackupReplicationRetentionPeriod"></a>

```java
public void resetAutomaticBackupReplicationRetentionPeriod()
```

##### `resetAutoMinorVersionUpgrade` <a name="resetAutoMinorVersionUpgrade" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAutoMinorVersionUpgrade"></a>

```java
public void resetAutoMinorVersionUpgrade()
```

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetAvailabilityZone"></a>

```java
public void resetAvailabilityZone()
```

##### `resetBackupRetentionPeriod` <a name="resetBackupRetentionPeriod" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetBackupRetentionPeriod"></a>

```java
public void resetBackupRetentionPeriod()
```

##### `resetBackupTarget` <a name="resetBackupTarget" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetBackupTarget"></a>

```java
public void resetBackupTarget()
```

##### `resetCaCertificateIdentifier` <a name="resetCaCertificateIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetCaCertificateIdentifier"></a>

```java
public void resetCaCertificateIdentifier()
```

##### `resetCertificateRotationRestart` <a name="resetCertificateRotationRestart" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetCertificateRotationRestart"></a>

```java
public void resetCertificateRotationRestart()
```

##### `resetCharacterSetName` <a name="resetCharacterSetName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetCharacterSetName"></a>

```java
public void resetCharacterSetName()
```

##### `resetCopyTagsToSnapshot` <a name="resetCopyTagsToSnapshot" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetCopyTagsToSnapshot"></a>

```java
public void resetCopyTagsToSnapshot()
```

##### `resetCustomIamInstanceProfile` <a name="resetCustomIamInstanceProfile" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetCustomIamInstanceProfile"></a>

```java
public void resetCustomIamInstanceProfile()
```

##### `resetDatabaseInsightsMode` <a name="resetDatabaseInsightsMode" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDatabaseInsightsMode"></a>

```java
public void resetDatabaseInsightsMode()
```

##### `resetDbClusterIdentifier` <a name="resetDbClusterIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbClusterIdentifier"></a>

```java
public void resetDbClusterIdentifier()
```

##### `resetDbClusterSnapshotIdentifier` <a name="resetDbClusterSnapshotIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbClusterSnapshotIdentifier"></a>

```java
public void resetDbClusterSnapshotIdentifier()
```

##### `resetDbInstanceClass` <a name="resetDbInstanceClass" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbInstanceClass"></a>

```java
public void resetDbInstanceClass()
```

##### `resetDbInstanceIdentifier` <a name="resetDbInstanceIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbInstanceIdentifier"></a>

```java
public void resetDbInstanceIdentifier()
```

##### `resetDbName` <a name="resetDbName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbName"></a>

```java
public void resetDbName()
```

##### `resetDbParameterGroupName` <a name="resetDbParameterGroupName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbParameterGroupName"></a>

```java
public void resetDbParameterGroupName()
```

##### `resetDbSecurityGroups` <a name="resetDbSecurityGroups" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbSecurityGroups"></a>

```java
public void resetDbSecurityGroups()
```

##### `resetDbSnapshotIdentifier` <a name="resetDbSnapshotIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbSnapshotIdentifier"></a>

```java
public void resetDbSnapshotIdentifier()
```

##### `resetDbSubnetGroupName` <a name="resetDbSubnetGroupName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbSubnetGroupName"></a>

```java
public void resetDbSubnetGroupName()
```

##### `resetDbSystemId` <a name="resetDbSystemId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDbSystemId"></a>

```java
public void resetDbSystemId()
```

##### `resetDedicatedLogVolume` <a name="resetDedicatedLogVolume" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDedicatedLogVolume"></a>

```java
public void resetDedicatedLogVolume()
```

##### `resetDeleteAutomatedBackups` <a name="resetDeleteAutomatedBackups" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDeleteAutomatedBackups"></a>

```java
public void resetDeleteAutomatedBackups()
```

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDeletionProtection"></a>

```java
public void resetDeletionProtection()
```

##### `resetDomain` <a name="resetDomain" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDomain"></a>

```java
public void resetDomain()
```

##### `resetDomainAuthSecretArn` <a name="resetDomainAuthSecretArn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDomainAuthSecretArn"></a>

```java
public void resetDomainAuthSecretArn()
```

##### `resetDomainDnsIps` <a name="resetDomainDnsIps" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDomainDnsIps"></a>

```java
public void resetDomainDnsIps()
```

##### `resetDomainFqdn` <a name="resetDomainFqdn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDomainFqdn"></a>

```java
public void resetDomainFqdn()
```

##### `resetDomainIamRoleName` <a name="resetDomainIamRoleName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDomainIamRoleName"></a>

```java
public void resetDomainIamRoleName()
```

##### `resetDomainOu` <a name="resetDomainOu" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetDomainOu"></a>

```java
public void resetDomainOu()
```

##### `resetEnableCloudwatchLogsExports` <a name="resetEnableCloudwatchLogsExports" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetEnableCloudwatchLogsExports"></a>

```java
public void resetEnableCloudwatchLogsExports()
```

##### `resetEnableIamDatabaseAuthentication` <a name="resetEnableIamDatabaseAuthentication" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetEnableIamDatabaseAuthentication"></a>

```java
public void resetEnableIamDatabaseAuthentication()
```

##### `resetEnablePerformanceInsights` <a name="resetEnablePerformanceInsights" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetEnablePerformanceInsights"></a>

```java
public void resetEnablePerformanceInsights()
```

##### `resetEngine` <a name="resetEngine" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetEngine"></a>

```java
public void resetEngine()
```

##### `resetEngineLifecycleSupport` <a name="resetEngineLifecycleSupport" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetEngineLifecycleSupport"></a>

```java
public void resetEngineLifecycleSupport()
```

##### `resetEngineVersion` <a name="resetEngineVersion" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetEngineVersion"></a>

```java
public void resetEngineVersion()
```

##### `resetIops` <a name="resetIops" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetIops"></a>

```java
public void resetIops()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetLicenseModel` <a name="resetLicenseModel" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetLicenseModel"></a>

```java
public void resetLicenseModel()
```

##### `resetManageMasterUserPassword` <a name="resetManageMasterUserPassword" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetManageMasterUserPassword"></a>

```java
public void resetManageMasterUserPassword()
```

##### `resetMasterUserAuthenticationType` <a name="resetMasterUserAuthenticationType" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMasterUserAuthenticationType"></a>

```java
public void resetMasterUserAuthenticationType()
```

##### `resetMasterUsername` <a name="resetMasterUsername" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMasterUsername"></a>

```java
public void resetMasterUsername()
```

##### `resetMasterUserPassword` <a name="resetMasterUserPassword" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMasterUserPassword"></a>

```java
public void resetMasterUserPassword()
```

##### `resetMasterUserSecret` <a name="resetMasterUserSecret" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMasterUserSecret"></a>

```java
public void resetMasterUserSecret()
```

##### `resetMaxAllocatedStorage` <a name="resetMaxAllocatedStorage" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMaxAllocatedStorage"></a>

```java
public void resetMaxAllocatedStorage()
```

##### `resetMonitoringInterval` <a name="resetMonitoringInterval" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMonitoringInterval"></a>

```java
public void resetMonitoringInterval()
```

##### `resetMonitoringRoleArn` <a name="resetMonitoringRoleArn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMonitoringRoleArn"></a>

```java
public void resetMonitoringRoleArn()
```

##### `resetMultiAz` <a name="resetMultiAz" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetMultiAz"></a>

```java
public void resetMultiAz()
```

##### `resetNcharCharacterSetName` <a name="resetNcharCharacterSetName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetNcharCharacterSetName"></a>

```java
public void resetNcharCharacterSetName()
```

##### `resetNetworkType` <a name="resetNetworkType" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetNetworkType"></a>

```java
public void resetNetworkType()
```

##### `resetOptionGroupName` <a name="resetOptionGroupName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetOptionGroupName"></a>

```java
public void resetOptionGroupName()
```

##### `resetPerformanceInsightsKmsKeyId` <a name="resetPerformanceInsightsKmsKeyId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetPerformanceInsightsKmsKeyId"></a>

```java
public void resetPerformanceInsightsKmsKeyId()
```

##### `resetPerformanceInsightsRetentionPeriod` <a name="resetPerformanceInsightsRetentionPeriod" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetPerformanceInsightsRetentionPeriod"></a>

```java
public void resetPerformanceInsightsRetentionPeriod()
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetPort"></a>

```java
public void resetPort()
```

##### `resetPreferredBackupWindow` <a name="resetPreferredBackupWindow" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetPreferredBackupWindow"></a>

```java
public void resetPreferredBackupWindow()
```

##### `resetPreferredMaintenanceWindow` <a name="resetPreferredMaintenanceWindow" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetPreferredMaintenanceWindow"></a>

```java
public void resetPreferredMaintenanceWindow()
```

##### `resetProcessorFeatures` <a name="resetProcessorFeatures" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetProcessorFeatures"></a>

```java
public void resetProcessorFeatures()
```

##### `resetPromotionTier` <a name="resetPromotionTier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetPromotionTier"></a>

```java
public void resetPromotionTier()
```

##### `resetPubliclyAccessible` <a name="resetPubliclyAccessible" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetPubliclyAccessible"></a>

```java
public void resetPubliclyAccessible()
```

##### `resetReplicaMode` <a name="resetReplicaMode" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetReplicaMode"></a>

```java
public void resetReplicaMode()
```

##### `resetRestoreTime` <a name="resetRestoreTime" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetRestoreTime"></a>

```java
public void resetRestoreTime()
```

##### `resetSourceDbClusterIdentifier` <a name="resetSourceDbClusterIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetSourceDbClusterIdentifier"></a>

```java
public void resetSourceDbClusterIdentifier()
```

##### `resetSourceDbInstanceAutomatedBackupsArn` <a name="resetSourceDbInstanceAutomatedBackupsArn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetSourceDbInstanceAutomatedBackupsArn"></a>

```java
public void resetSourceDbInstanceAutomatedBackupsArn()
```

##### `resetSourceDbInstanceIdentifier` <a name="resetSourceDbInstanceIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetSourceDbInstanceIdentifier"></a>

```java
public void resetSourceDbInstanceIdentifier()
```

##### `resetSourceDbiResourceId` <a name="resetSourceDbiResourceId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetSourceDbiResourceId"></a>

```java
public void resetSourceDbiResourceId()
```

##### `resetSourceRegion` <a name="resetSourceRegion" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetSourceRegion"></a>

```java
public void resetSourceRegion()
```

##### `resetStorageEncrypted` <a name="resetStorageEncrypted" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetStorageEncrypted"></a>

```java
public void resetStorageEncrypted()
```

##### `resetStorageThroughput` <a name="resetStorageThroughput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetStorageThroughput"></a>

```java
public void resetStorageThroughput()
```

##### `resetStorageType` <a name="resetStorageType" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetStorageType"></a>

```java
public void resetStorageType()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetTags"></a>

```java
public void resetTags()
```

##### `resetTdeCredentialArn` <a name="resetTdeCredentialArn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetTdeCredentialArn"></a>

```java
public void resetTdeCredentialArn()
```

##### `resetTdeCredentialPassword` <a name="resetTdeCredentialPassword" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetTdeCredentialPassword"></a>

```java
public void resetTdeCredentialPassword()
```

##### `resetTimezone` <a name="resetTimezone" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetTimezone"></a>

```java
public void resetTimezone()
```

##### `resetUseDefaultProcessorFeatures` <a name="resetUseDefaultProcessorFeatures" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetUseDefaultProcessorFeatures"></a>

```java
public void resetUseDefaultProcessorFeatures()
```

##### `resetUseLatestRestorableTime` <a name="resetUseLatestRestorableTime" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetUseLatestRestorableTime"></a>

```java
public void resetUseLatestRestorableTime()
```

##### `resetVpcSecurityGroups` <a name="resetVpcSecurityGroups" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.resetVpcSecurityGroups"></a>

```java
public void resetVpcSecurityGroups()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RdsDbInstance resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.isConstruct"></a>

```java
import io.cdktn.providers.awscc.rds_db_instance.RdsDbInstance;

RdsDbInstance.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.rds_db_instance.RdsDbInstance;

RdsDbInstance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.rds_db_instance.RdsDbInstance;

RdsDbInstance.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.rds_db_instance.RdsDbInstance;

RdsDbInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RdsDbInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a RdsDbInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RdsDbInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RdsDbInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the RdsDbInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.additionalStorageVolumes">additionalStorageVolumes</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList">RdsDbInstanceAdditionalStorageVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.associatedRoles">associatedRoles</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList">RdsDbInstanceAssociatedRolesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.automaticRestartTime">automaticRestartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.certificateDetails">certificateDetails</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference">RdsDbInstanceCertificateDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbInstanceArn">dbInstanceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbInstanceStatus">dbInstanceStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbiResourceId">dbiResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.endpoint">endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference">RdsDbInstanceEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.instanceCreateTime">instanceCreateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.isStorageConfigUpgradeAvailable">isStorageConfigUpgradeAvailable</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.latestRestorableTime">latestRestorableTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.listenerEndpoint">listenerEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference">RdsDbInstanceListenerEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUserSecret">masterUserSecret</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference">RdsDbInstanceMasterUserSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.percentProgress">percentProgress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.processorFeatures">processorFeatures</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList">RdsDbInstanceProcessorFeaturesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.readReplicaDbClusterIdentifiers">readReplicaDbClusterIdentifiers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.readReplicaDbInstanceIdentifiers">readReplicaDbInstanceIdentifiers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.resumeFullAutomationModeTime">resumeFullAutomationModeTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.secondaryAvailabilityZone">secondaryAvailabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.statusInfos">statusInfos</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList">RdsDbInstanceStatusInfosList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.storageOperationPercentProgress">storageOperationPercentProgress</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.storageOperationStatus">storageOperationStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList">RdsDbInstanceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.additionalStorageVolumesInput">additionalStorageVolumesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes">RdsDbInstanceAdditionalStorageVolumes</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.allocatedStorageInput">allocatedStorageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.allowMajorVersionUpgradeInput">allowMajorVersionUpgradeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.applyImmediatelyInput">applyImmediatelyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.associatedRolesInput">associatedRolesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRoles">RdsDbInstanceAssociatedRoles</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.automaticBackupReplicationKmsKeyIdInput">automaticBackupReplicationKmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.automaticBackupReplicationRegionInput">automaticBackupReplicationRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.automaticBackupReplicationRetentionPeriodInput">automaticBackupReplicationRetentionPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.autoMinorVersionUpgradeInput">autoMinorVersionUpgradeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.backupRetentionPeriodInput">backupRetentionPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.backupTargetInput">backupTargetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.caCertificateIdentifierInput">caCertificateIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.certificateRotationRestartInput">certificateRotationRestartInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.characterSetNameInput">characterSetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.copyTagsToSnapshotInput">copyTagsToSnapshotInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.customIamInstanceProfileInput">customIamInstanceProfileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.databaseInsightsModeInput">databaseInsightsModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbClusterIdentifierInput">dbClusterIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbClusterSnapshotIdentifierInput">dbClusterSnapshotIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbInstanceClassInput">dbInstanceClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbInstanceIdentifierInput">dbInstanceIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbNameInput">dbNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbParameterGroupNameInput">dbParameterGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSecurityGroupsInput">dbSecurityGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSnapshotIdentifierInput">dbSnapshotIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSubnetGroupNameInput">dbSubnetGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSystemIdInput">dbSystemIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dedicatedLogVolumeInput">dedicatedLogVolumeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.deleteAutomatedBackupsInput">deleteAutomatedBackupsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainAuthSecretArnInput">domainAuthSecretArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainDnsIpsInput">domainDnsIpsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainFqdnInput">domainFqdnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainIamRoleNameInput">domainIamRoleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainInput">domainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainOuInput">domainOuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.enableCloudwatchLogsExportsInput">enableCloudwatchLogsExportsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.enableIamDatabaseAuthenticationInput">enableIamDatabaseAuthenticationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.enablePerformanceInsightsInput">enablePerformanceInsightsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.engineInput">engineInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.engineLifecycleSupportInput">engineLifecycleSupportInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.engineVersionInput">engineVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.iopsInput">iopsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.licenseModelInput">licenseModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.manageMasterUserPasswordInput">manageMasterUserPasswordInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUserAuthenticationTypeInput">masterUserAuthenticationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUsernameInput">masterUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUserPasswordInput">masterUserPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUserSecretInput">masterUserSecretInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecret">RdsDbInstanceMasterUserSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.maxAllocatedStorageInput">maxAllocatedStorageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.monitoringIntervalInput">monitoringIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.monitoringRoleArnInput">monitoringRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.multiAzInput">multiAzInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.ncharCharacterSetNameInput">ncharCharacterSetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.networkTypeInput">networkTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.optionGroupNameInput">optionGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.performanceInsightsKmsKeyIdInput">performanceInsightsKmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.performanceInsightsRetentionPeriodInput">performanceInsightsRetentionPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.portInput">portInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.preferredBackupWindowInput">preferredBackupWindowInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.preferredMaintenanceWindowInput">preferredMaintenanceWindowInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.processorFeaturesInput">processorFeaturesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeatures">RdsDbInstanceProcessorFeatures</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.promotionTierInput">promotionTierInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.publiclyAccessibleInput">publiclyAccessibleInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.replicaModeInput">replicaModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.restoreTimeInput">restoreTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbClusterIdentifierInput">sourceDbClusterIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbInstanceAutomatedBackupsArnInput">sourceDbInstanceAutomatedBackupsArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbInstanceIdentifierInput">sourceDbInstanceIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbiResourceIdInput">sourceDbiResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceRegionInput">sourceRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.storageEncryptedInput">storageEncryptedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.storageThroughputInput">storageThroughputInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.storageTypeInput">storageTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTags">RdsDbInstanceTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.tdeCredentialArnInput">tdeCredentialArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.tdeCredentialPasswordInput">tdeCredentialPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.timezoneInput">timezoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.useDefaultProcessorFeaturesInput">useDefaultProcessorFeaturesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.useLatestRestorableTimeInput">useLatestRestorableTimeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.vpcSecurityGroupsInput">vpcSecurityGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.allocatedStorage">allocatedStorage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.allowMajorVersionUpgrade">allowMajorVersionUpgrade</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.applyImmediately">applyImmediately</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.automaticBackupReplicationKmsKeyId">automaticBackupReplicationKmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.automaticBackupReplicationRegion">automaticBackupReplicationRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.automaticBackupReplicationRetentionPeriod">automaticBackupReplicationRetentionPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.backupRetentionPeriod">backupRetentionPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.backupTarget">backupTarget</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.caCertificateIdentifier">caCertificateIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.certificateRotationRestart">certificateRotationRestart</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.characterSetName">characterSetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.copyTagsToSnapshot">copyTagsToSnapshot</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.customIamInstanceProfile">customIamInstanceProfile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.databaseInsightsMode">databaseInsightsMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbClusterIdentifier">dbClusterIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbClusterSnapshotIdentifier">dbClusterSnapshotIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbInstanceClass">dbInstanceClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbInstanceIdentifier">dbInstanceIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbName">dbName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbParameterGroupName">dbParameterGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSecurityGroups">dbSecurityGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSnapshotIdentifier">dbSnapshotIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSubnetGroupName">dbSubnetGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSystemId">dbSystemId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dedicatedLogVolume">dedicatedLogVolume</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.deleteAutomatedBackups">deleteAutomatedBackups</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainAuthSecretArn">domainAuthSecretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainDnsIps">domainDnsIps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainFqdn">domainFqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainIamRoleName">domainIamRoleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainOu">domainOu</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.enableCloudwatchLogsExports">enableCloudwatchLogsExports</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.enableIamDatabaseAuthentication">enableIamDatabaseAuthentication</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.enablePerformanceInsights">enablePerformanceInsights</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.engine">engine</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.engineLifecycleSupport">engineLifecycleSupport</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.iops">iops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.manageMasterUserPassword">manageMasterUserPassword</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUserAuthenticationType">masterUserAuthenticationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUsername">masterUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUserPassword">masterUserPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.maxAllocatedStorage">maxAllocatedStorage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.monitoringInterval">monitoringInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.monitoringRoleArn">monitoringRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.multiAz">multiAz</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.ncharCharacterSetName">ncharCharacterSetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.networkType">networkType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.optionGroupName">optionGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.performanceInsightsKmsKeyId">performanceInsightsKmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.performanceInsightsRetentionPeriod">performanceInsightsRetentionPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.port">port</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.preferredBackupWindow">preferredBackupWindow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.promotionTier">promotionTier</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.publiclyAccessible">publiclyAccessible</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.replicaMode">replicaMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.restoreTime">restoreTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbClusterIdentifier">sourceDbClusterIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbInstanceAutomatedBackupsArn">sourceDbInstanceAutomatedBackupsArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbInstanceIdentifier">sourceDbInstanceIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbiResourceId">sourceDbiResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceRegion">sourceRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.storageEncrypted">storageEncrypted</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.storageThroughput">storageThroughput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.storageType">storageType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.tdeCredentialArn">tdeCredentialArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.tdeCredentialPassword">tdeCredentialPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.timezone">timezone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.useDefaultProcessorFeatures">useDefaultProcessorFeatures</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.useLatestRestorableTime">useLatestRestorableTime</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.vpcSecurityGroups">vpcSecurityGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `additionalStorageVolumes`<sup>Required</sup> <a name="additionalStorageVolumes" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.additionalStorageVolumes"></a>

```java
public RdsDbInstanceAdditionalStorageVolumesList getAdditionalStorageVolumes();
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList">RdsDbInstanceAdditionalStorageVolumesList</a>

---

##### `associatedRoles`<sup>Required</sup> <a name="associatedRoles" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.associatedRoles"></a>

```java
public RdsDbInstanceAssociatedRolesList getAssociatedRoles();
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList">RdsDbInstanceAssociatedRolesList</a>

---

##### `automaticRestartTime`<sup>Required</sup> <a name="automaticRestartTime" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.automaticRestartTime"></a>

```java
public java.lang.String getAutomaticRestartTime();
```

- *Type:* java.lang.String

---

##### `certificateDetails`<sup>Required</sup> <a name="certificateDetails" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.certificateDetails"></a>

```java
public RdsDbInstanceCertificateDetailsOutputReference getCertificateDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference">RdsDbInstanceCertificateDetailsOutputReference</a>

---

##### `dbInstanceArn`<sup>Required</sup> <a name="dbInstanceArn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbInstanceArn"></a>

```java
public java.lang.String getDbInstanceArn();
```

- *Type:* java.lang.String

---

##### `dbInstanceStatus`<sup>Required</sup> <a name="dbInstanceStatus" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbInstanceStatus"></a>

```java
public java.lang.String getDbInstanceStatus();
```

- *Type:* java.lang.String

---

##### `dbiResourceId`<sup>Required</sup> <a name="dbiResourceId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbiResourceId"></a>

```java
public java.lang.String getDbiResourceId();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.endpoint"></a>

```java
public RdsDbInstanceEndpointOutputReference getEndpoint();
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference">RdsDbInstanceEndpointOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceCreateTime`<sup>Required</sup> <a name="instanceCreateTime" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.instanceCreateTime"></a>

```java
public java.lang.String getInstanceCreateTime();
```

- *Type:* java.lang.String

---

##### `isStorageConfigUpgradeAvailable`<sup>Required</sup> <a name="isStorageConfigUpgradeAvailable" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.isStorageConfigUpgradeAvailable"></a>

```java
public IResolvable getIsStorageConfigUpgradeAvailable();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `latestRestorableTime`<sup>Required</sup> <a name="latestRestorableTime" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.latestRestorableTime"></a>

```java
public java.lang.String getLatestRestorableTime();
```

- *Type:* java.lang.String

---

##### `listenerEndpoint`<sup>Required</sup> <a name="listenerEndpoint" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.listenerEndpoint"></a>

```java
public RdsDbInstanceListenerEndpointOutputReference getListenerEndpoint();
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference">RdsDbInstanceListenerEndpointOutputReference</a>

---

##### `masterUserSecret`<sup>Required</sup> <a name="masterUserSecret" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUserSecret"></a>

```java
public RdsDbInstanceMasterUserSecretOutputReference getMasterUserSecret();
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference">RdsDbInstanceMasterUserSecretOutputReference</a>

---

##### `percentProgress`<sup>Required</sup> <a name="percentProgress" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.percentProgress"></a>

```java
public java.lang.String getPercentProgress();
```

- *Type:* java.lang.String

---

##### `processorFeatures`<sup>Required</sup> <a name="processorFeatures" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.processorFeatures"></a>

```java
public RdsDbInstanceProcessorFeaturesList getProcessorFeatures();
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList">RdsDbInstanceProcessorFeaturesList</a>

---

##### `readReplicaDbClusterIdentifiers`<sup>Required</sup> <a name="readReplicaDbClusterIdentifiers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.readReplicaDbClusterIdentifiers"></a>

```java
public java.util.List<java.lang.String> getReadReplicaDbClusterIdentifiers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `readReplicaDbInstanceIdentifiers`<sup>Required</sup> <a name="readReplicaDbInstanceIdentifiers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.readReplicaDbInstanceIdentifiers"></a>

```java
public java.util.List<java.lang.String> getReadReplicaDbInstanceIdentifiers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resumeFullAutomationModeTime`<sup>Required</sup> <a name="resumeFullAutomationModeTime" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.resumeFullAutomationModeTime"></a>

```java
public java.lang.String getResumeFullAutomationModeTime();
```

- *Type:* java.lang.String

---

##### `secondaryAvailabilityZone`<sup>Required</sup> <a name="secondaryAvailabilityZone" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.secondaryAvailabilityZone"></a>

```java
public java.lang.String getSecondaryAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `statusInfos`<sup>Required</sup> <a name="statusInfos" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.statusInfos"></a>

```java
public RdsDbInstanceStatusInfosList getStatusInfos();
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList">RdsDbInstanceStatusInfosList</a>

---

##### `storageOperationPercentProgress`<sup>Required</sup> <a name="storageOperationPercentProgress" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.storageOperationPercentProgress"></a>

```java
public java.lang.Number getStorageOperationPercentProgress();
```

- *Type:* java.lang.Number

---

##### `storageOperationStatus`<sup>Required</sup> <a name="storageOperationStatus" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.storageOperationStatus"></a>

```java
public java.lang.String getStorageOperationStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.tags"></a>

```java
public RdsDbInstanceTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList">RdsDbInstanceTagsList</a>

---

##### `additionalStorageVolumesInput`<sup>Optional</sup> <a name="additionalStorageVolumesInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.additionalStorageVolumesInput"></a>

```java
public IResolvable|java.util.List<RdsDbInstanceAdditionalStorageVolumes> getAdditionalStorageVolumesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes">RdsDbInstanceAdditionalStorageVolumes</a>>

---

##### `allocatedStorageInput`<sup>Optional</sup> <a name="allocatedStorageInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.allocatedStorageInput"></a>

```java
public java.lang.String getAllocatedStorageInput();
```

- *Type:* java.lang.String

---

##### `allowMajorVersionUpgradeInput`<sup>Optional</sup> <a name="allowMajorVersionUpgradeInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.allowMajorVersionUpgradeInput"></a>

```java
public java.lang.Boolean|IResolvable getAllowMajorVersionUpgradeInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `applyImmediatelyInput`<sup>Optional</sup> <a name="applyImmediatelyInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.applyImmediatelyInput"></a>

```java
public java.lang.Boolean|IResolvable getApplyImmediatelyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `associatedRolesInput`<sup>Optional</sup> <a name="associatedRolesInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.associatedRolesInput"></a>

```java
public IResolvable|java.util.List<RdsDbInstanceAssociatedRoles> getAssociatedRolesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRoles">RdsDbInstanceAssociatedRoles</a>>

---

##### `automaticBackupReplicationKmsKeyIdInput`<sup>Optional</sup> <a name="automaticBackupReplicationKmsKeyIdInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.automaticBackupReplicationKmsKeyIdInput"></a>

```java
public java.lang.String getAutomaticBackupReplicationKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `automaticBackupReplicationRegionInput`<sup>Optional</sup> <a name="automaticBackupReplicationRegionInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.automaticBackupReplicationRegionInput"></a>

```java
public java.lang.String getAutomaticBackupReplicationRegionInput();
```

- *Type:* java.lang.String

---

##### `automaticBackupReplicationRetentionPeriodInput`<sup>Optional</sup> <a name="automaticBackupReplicationRetentionPeriodInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.automaticBackupReplicationRetentionPeriodInput"></a>

```java
public java.lang.Number getAutomaticBackupReplicationRetentionPeriodInput();
```

- *Type:* java.lang.Number

---

##### `autoMinorVersionUpgradeInput`<sup>Optional</sup> <a name="autoMinorVersionUpgradeInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.autoMinorVersionUpgradeInput"></a>

```java
public java.lang.Boolean|IResolvable getAutoMinorVersionUpgradeInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.availabilityZoneInput"></a>

```java
public java.lang.String getAvailabilityZoneInput();
```

- *Type:* java.lang.String

---

##### `backupRetentionPeriodInput`<sup>Optional</sup> <a name="backupRetentionPeriodInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.backupRetentionPeriodInput"></a>

```java
public java.lang.Number getBackupRetentionPeriodInput();
```

- *Type:* java.lang.Number

---

##### `backupTargetInput`<sup>Optional</sup> <a name="backupTargetInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.backupTargetInput"></a>

```java
public java.lang.String getBackupTargetInput();
```

- *Type:* java.lang.String

---

##### `caCertificateIdentifierInput`<sup>Optional</sup> <a name="caCertificateIdentifierInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.caCertificateIdentifierInput"></a>

```java
public java.lang.String getCaCertificateIdentifierInput();
```

- *Type:* java.lang.String

---

##### `certificateRotationRestartInput`<sup>Optional</sup> <a name="certificateRotationRestartInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.certificateRotationRestartInput"></a>

```java
public java.lang.Boolean|IResolvable getCertificateRotationRestartInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `characterSetNameInput`<sup>Optional</sup> <a name="characterSetNameInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.characterSetNameInput"></a>

```java
public java.lang.String getCharacterSetNameInput();
```

- *Type:* java.lang.String

---

##### `copyTagsToSnapshotInput`<sup>Optional</sup> <a name="copyTagsToSnapshotInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.copyTagsToSnapshotInput"></a>

```java
public java.lang.Boolean|IResolvable getCopyTagsToSnapshotInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `customIamInstanceProfileInput`<sup>Optional</sup> <a name="customIamInstanceProfileInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.customIamInstanceProfileInput"></a>

```java
public java.lang.String getCustomIamInstanceProfileInput();
```

- *Type:* java.lang.String

---

##### `databaseInsightsModeInput`<sup>Optional</sup> <a name="databaseInsightsModeInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.databaseInsightsModeInput"></a>

```java
public java.lang.String getDatabaseInsightsModeInput();
```

- *Type:* java.lang.String

---

##### `dbClusterIdentifierInput`<sup>Optional</sup> <a name="dbClusterIdentifierInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbClusterIdentifierInput"></a>

```java
public java.lang.String getDbClusterIdentifierInput();
```

- *Type:* java.lang.String

---

##### `dbClusterSnapshotIdentifierInput`<sup>Optional</sup> <a name="dbClusterSnapshotIdentifierInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbClusterSnapshotIdentifierInput"></a>

```java
public java.lang.String getDbClusterSnapshotIdentifierInput();
```

- *Type:* java.lang.String

---

##### `dbInstanceClassInput`<sup>Optional</sup> <a name="dbInstanceClassInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbInstanceClassInput"></a>

```java
public java.lang.String getDbInstanceClassInput();
```

- *Type:* java.lang.String

---

##### `dbInstanceIdentifierInput`<sup>Optional</sup> <a name="dbInstanceIdentifierInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbInstanceIdentifierInput"></a>

```java
public java.lang.String getDbInstanceIdentifierInput();
```

- *Type:* java.lang.String

---

##### `dbNameInput`<sup>Optional</sup> <a name="dbNameInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbNameInput"></a>

```java
public java.lang.String getDbNameInput();
```

- *Type:* java.lang.String

---

##### `dbParameterGroupNameInput`<sup>Optional</sup> <a name="dbParameterGroupNameInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbParameterGroupNameInput"></a>

```java
public java.lang.String getDbParameterGroupNameInput();
```

- *Type:* java.lang.String

---

##### `dbSecurityGroupsInput`<sup>Optional</sup> <a name="dbSecurityGroupsInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSecurityGroupsInput"></a>

```java
public java.util.List<java.lang.String> getDbSecurityGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dbSnapshotIdentifierInput`<sup>Optional</sup> <a name="dbSnapshotIdentifierInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSnapshotIdentifierInput"></a>

```java
public java.lang.String getDbSnapshotIdentifierInput();
```

- *Type:* java.lang.String

---

##### `dbSubnetGroupNameInput`<sup>Optional</sup> <a name="dbSubnetGroupNameInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSubnetGroupNameInput"></a>

```java
public java.lang.String getDbSubnetGroupNameInput();
```

- *Type:* java.lang.String

---

##### `dbSystemIdInput`<sup>Optional</sup> <a name="dbSystemIdInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSystemIdInput"></a>

```java
public java.lang.String getDbSystemIdInput();
```

- *Type:* java.lang.String

---

##### `dedicatedLogVolumeInput`<sup>Optional</sup> <a name="dedicatedLogVolumeInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dedicatedLogVolumeInput"></a>

```java
public java.lang.Boolean|IResolvable getDedicatedLogVolumeInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `deleteAutomatedBackupsInput`<sup>Optional</sup> <a name="deleteAutomatedBackupsInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.deleteAutomatedBackupsInput"></a>

```java
public java.lang.Boolean|IResolvable getDeleteAutomatedBackupsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.deletionProtectionInput"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtectionInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `domainAuthSecretArnInput`<sup>Optional</sup> <a name="domainAuthSecretArnInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainAuthSecretArnInput"></a>

```java
public java.lang.String getDomainAuthSecretArnInput();
```

- *Type:* java.lang.String

---

##### `domainDnsIpsInput`<sup>Optional</sup> <a name="domainDnsIpsInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainDnsIpsInput"></a>

```java
public java.util.List<java.lang.String> getDomainDnsIpsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `domainFqdnInput`<sup>Optional</sup> <a name="domainFqdnInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainFqdnInput"></a>

```java
public java.lang.String getDomainFqdnInput();
```

- *Type:* java.lang.String

---

##### `domainIamRoleNameInput`<sup>Optional</sup> <a name="domainIamRoleNameInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainIamRoleNameInput"></a>

```java
public java.lang.String getDomainIamRoleNameInput();
```

- *Type:* java.lang.String

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainInput"></a>

```java
public java.lang.String getDomainInput();
```

- *Type:* java.lang.String

---

##### `domainOuInput`<sup>Optional</sup> <a name="domainOuInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainOuInput"></a>

```java
public java.lang.String getDomainOuInput();
```

- *Type:* java.lang.String

---

##### `enableCloudwatchLogsExportsInput`<sup>Optional</sup> <a name="enableCloudwatchLogsExportsInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.enableCloudwatchLogsExportsInput"></a>

```java
public java.util.List<java.lang.String> getEnableCloudwatchLogsExportsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enableIamDatabaseAuthenticationInput`<sup>Optional</sup> <a name="enableIamDatabaseAuthenticationInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.enableIamDatabaseAuthenticationInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableIamDatabaseAuthenticationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enablePerformanceInsightsInput`<sup>Optional</sup> <a name="enablePerformanceInsightsInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.enablePerformanceInsightsInput"></a>

```java
public java.lang.Boolean|IResolvable getEnablePerformanceInsightsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `engineInput`<sup>Optional</sup> <a name="engineInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.engineInput"></a>

```java
public java.lang.String getEngineInput();
```

- *Type:* java.lang.String

---

##### `engineLifecycleSupportInput`<sup>Optional</sup> <a name="engineLifecycleSupportInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.engineLifecycleSupportInput"></a>

```java
public java.lang.String getEngineLifecycleSupportInput();
```

- *Type:* java.lang.String

---

##### `engineVersionInput`<sup>Optional</sup> <a name="engineVersionInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.engineVersionInput"></a>

```java
public java.lang.String getEngineVersionInput();
```

- *Type:* java.lang.String

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.iopsInput"></a>

```java
public java.lang.Number getIopsInput();
```

- *Type:* java.lang.Number

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `licenseModelInput`<sup>Optional</sup> <a name="licenseModelInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.licenseModelInput"></a>

```java
public java.lang.String getLicenseModelInput();
```

- *Type:* java.lang.String

---

##### `manageMasterUserPasswordInput`<sup>Optional</sup> <a name="manageMasterUserPasswordInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.manageMasterUserPasswordInput"></a>

```java
public java.lang.Boolean|IResolvable getManageMasterUserPasswordInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `masterUserAuthenticationTypeInput`<sup>Optional</sup> <a name="masterUserAuthenticationTypeInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUserAuthenticationTypeInput"></a>

```java
public java.lang.String getMasterUserAuthenticationTypeInput();
```

- *Type:* java.lang.String

---

##### `masterUsernameInput`<sup>Optional</sup> <a name="masterUsernameInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUsernameInput"></a>

```java
public java.lang.String getMasterUsernameInput();
```

- *Type:* java.lang.String

---

##### `masterUserPasswordInput`<sup>Optional</sup> <a name="masterUserPasswordInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUserPasswordInput"></a>

```java
public java.lang.String getMasterUserPasswordInput();
```

- *Type:* java.lang.String

---

##### `masterUserSecretInput`<sup>Optional</sup> <a name="masterUserSecretInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUserSecretInput"></a>

```java
public IResolvable|RdsDbInstanceMasterUserSecret getMasterUserSecretInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecret">RdsDbInstanceMasterUserSecret</a>

---

##### `maxAllocatedStorageInput`<sup>Optional</sup> <a name="maxAllocatedStorageInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.maxAllocatedStorageInput"></a>

```java
public java.lang.Number getMaxAllocatedStorageInput();
```

- *Type:* java.lang.Number

---

##### `monitoringIntervalInput`<sup>Optional</sup> <a name="monitoringIntervalInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.monitoringIntervalInput"></a>

```java
public java.lang.Number getMonitoringIntervalInput();
```

- *Type:* java.lang.Number

---

##### `monitoringRoleArnInput`<sup>Optional</sup> <a name="monitoringRoleArnInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.monitoringRoleArnInput"></a>

```java
public java.lang.String getMonitoringRoleArnInput();
```

- *Type:* java.lang.String

---

##### `multiAzInput`<sup>Optional</sup> <a name="multiAzInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.multiAzInput"></a>

```java
public java.lang.Boolean|IResolvable getMultiAzInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ncharCharacterSetNameInput`<sup>Optional</sup> <a name="ncharCharacterSetNameInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.ncharCharacterSetNameInput"></a>

```java
public java.lang.String getNcharCharacterSetNameInput();
```

- *Type:* java.lang.String

---

##### `networkTypeInput`<sup>Optional</sup> <a name="networkTypeInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.networkTypeInput"></a>

```java
public java.lang.String getNetworkTypeInput();
```

- *Type:* java.lang.String

---

##### `optionGroupNameInput`<sup>Optional</sup> <a name="optionGroupNameInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.optionGroupNameInput"></a>

```java
public java.lang.String getOptionGroupNameInput();
```

- *Type:* java.lang.String

---

##### `performanceInsightsKmsKeyIdInput`<sup>Optional</sup> <a name="performanceInsightsKmsKeyIdInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.performanceInsightsKmsKeyIdInput"></a>

```java
public java.lang.String getPerformanceInsightsKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `performanceInsightsRetentionPeriodInput`<sup>Optional</sup> <a name="performanceInsightsRetentionPeriodInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.performanceInsightsRetentionPeriodInput"></a>

```java
public java.lang.Number getPerformanceInsightsRetentionPeriodInput();
```

- *Type:* java.lang.Number

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.portInput"></a>

```java
public java.lang.String getPortInput();
```

- *Type:* java.lang.String

---

##### `preferredBackupWindowInput`<sup>Optional</sup> <a name="preferredBackupWindowInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.preferredBackupWindowInput"></a>

```java
public java.lang.String getPreferredBackupWindowInput();
```

- *Type:* java.lang.String

---

##### `preferredMaintenanceWindowInput`<sup>Optional</sup> <a name="preferredMaintenanceWindowInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.preferredMaintenanceWindowInput"></a>

```java
public java.lang.String getPreferredMaintenanceWindowInput();
```

- *Type:* java.lang.String

---

##### `processorFeaturesInput`<sup>Optional</sup> <a name="processorFeaturesInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.processorFeaturesInput"></a>

```java
public IResolvable|java.util.List<RdsDbInstanceProcessorFeatures> getProcessorFeaturesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeatures">RdsDbInstanceProcessorFeatures</a>>

---

##### `promotionTierInput`<sup>Optional</sup> <a name="promotionTierInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.promotionTierInput"></a>

```java
public java.lang.Number getPromotionTierInput();
```

- *Type:* java.lang.Number

---

##### `publiclyAccessibleInput`<sup>Optional</sup> <a name="publiclyAccessibleInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.publiclyAccessibleInput"></a>

```java
public java.lang.Boolean|IResolvable getPubliclyAccessibleInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `replicaModeInput`<sup>Optional</sup> <a name="replicaModeInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.replicaModeInput"></a>

```java
public java.lang.String getReplicaModeInput();
```

- *Type:* java.lang.String

---

##### `restoreTimeInput`<sup>Optional</sup> <a name="restoreTimeInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.restoreTimeInput"></a>

```java
public java.lang.String getRestoreTimeInput();
```

- *Type:* java.lang.String

---

##### `sourceDbClusterIdentifierInput`<sup>Optional</sup> <a name="sourceDbClusterIdentifierInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbClusterIdentifierInput"></a>

```java
public java.lang.String getSourceDbClusterIdentifierInput();
```

- *Type:* java.lang.String

---

##### `sourceDbInstanceAutomatedBackupsArnInput`<sup>Optional</sup> <a name="sourceDbInstanceAutomatedBackupsArnInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbInstanceAutomatedBackupsArnInput"></a>

```java
public java.lang.String getSourceDbInstanceAutomatedBackupsArnInput();
```

- *Type:* java.lang.String

---

##### `sourceDbInstanceIdentifierInput`<sup>Optional</sup> <a name="sourceDbInstanceIdentifierInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbInstanceIdentifierInput"></a>

```java
public java.lang.String getSourceDbInstanceIdentifierInput();
```

- *Type:* java.lang.String

---

##### `sourceDbiResourceIdInput`<sup>Optional</sup> <a name="sourceDbiResourceIdInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbiResourceIdInput"></a>

```java
public java.lang.String getSourceDbiResourceIdInput();
```

- *Type:* java.lang.String

---

##### `sourceRegionInput`<sup>Optional</sup> <a name="sourceRegionInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceRegionInput"></a>

```java
public java.lang.String getSourceRegionInput();
```

- *Type:* java.lang.String

---

##### `storageEncryptedInput`<sup>Optional</sup> <a name="storageEncryptedInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.storageEncryptedInput"></a>

```java
public java.lang.Boolean|IResolvable getStorageEncryptedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `storageThroughputInput`<sup>Optional</sup> <a name="storageThroughputInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.storageThroughputInput"></a>

```java
public java.lang.Number getStorageThroughputInput();
```

- *Type:* java.lang.Number

---

##### `storageTypeInput`<sup>Optional</sup> <a name="storageTypeInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.storageTypeInput"></a>

```java
public java.lang.String getStorageTypeInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.tagsInput"></a>

```java
public IResolvable|java.util.List<RdsDbInstanceTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTags">RdsDbInstanceTags</a>>

---

##### `tdeCredentialArnInput`<sup>Optional</sup> <a name="tdeCredentialArnInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.tdeCredentialArnInput"></a>

```java
public java.lang.String getTdeCredentialArnInput();
```

- *Type:* java.lang.String

---

##### `tdeCredentialPasswordInput`<sup>Optional</sup> <a name="tdeCredentialPasswordInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.tdeCredentialPasswordInput"></a>

```java
public java.lang.String getTdeCredentialPasswordInput();
```

- *Type:* java.lang.String

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.timezoneInput"></a>

```java
public java.lang.String getTimezoneInput();
```

- *Type:* java.lang.String

---

##### `useDefaultProcessorFeaturesInput`<sup>Optional</sup> <a name="useDefaultProcessorFeaturesInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.useDefaultProcessorFeaturesInput"></a>

```java
public java.lang.Boolean|IResolvable getUseDefaultProcessorFeaturesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `useLatestRestorableTimeInput`<sup>Optional</sup> <a name="useLatestRestorableTimeInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.useLatestRestorableTimeInput"></a>

```java
public java.lang.Boolean|IResolvable getUseLatestRestorableTimeInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `vpcSecurityGroupsInput`<sup>Optional</sup> <a name="vpcSecurityGroupsInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.vpcSecurityGroupsInput"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allocatedStorage`<sup>Required</sup> <a name="allocatedStorage" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.allocatedStorage"></a>

```java
public java.lang.String getAllocatedStorage();
```

- *Type:* java.lang.String

---

##### `allowMajorVersionUpgrade`<sup>Required</sup> <a name="allowMajorVersionUpgrade" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.allowMajorVersionUpgrade"></a>

```java
public java.lang.Boolean|IResolvable getAllowMajorVersionUpgrade();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `applyImmediately`<sup>Required</sup> <a name="applyImmediately" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.applyImmediately"></a>

```java
public java.lang.Boolean|IResolvable getApplyImmediately();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `automaticBackupReplicationKmsKeyId`<sup>Required</sup> <a name="automaticBackupReplicationKmsKeyId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.automaticBackupReplicationKmsKeyId"></a>

```java
public java.lang.String getAutomaticBackupReplicationKmsKeyId();
```

- *Type:* java.lang.String

---

##### `automaticBackupReplicationRegion`<sup>Required</sup> <a name="automaticBackupReplicationRegion" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.automaticBackupReplicationRegion"></a>

```java
public java.lang.String getAutomaticBackupReplicationRegion();
```

- *Type:* java.lang.String

---

##### `automaticBackupReplicationRetentionPeriod`<sup>Required</sup> <a name="automaticBackupReplicationRetentionPeriod" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.automaticBackupReplicationRetentionPeriod"></a>

```java
public java.lang.Number getAutomaticBackupReplicationRetentionPeriod();
```

- *Type:* java.lang.Number

---

##### `autoMinorVersionUpgrade`<sup>Required</sup> <a name="autoMinorVersionUpgrade" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.autoMinorVersionUpgrade"></a>

```java
public java.lang.Boolean|IResolvable getAutoMinorVersionUpgrade();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `backupRetentionPeriod`<sup>Required</sup> <a name="backupRetentionPeriod" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.backupRetentionPeriod"></a>

```java
public java.lang.Number getBackupRetentionPeriod();
```

- *Type:* java.lang.Number

---

##### `backupTarget`<sup>Required</sup> <a name="backupTarget" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.backupTarget"></a>

```java
public java.lang.String getBackupTarget();
```

- *Type:* java.lang.String

---

##### `caCertificateIdentifier`<sup>Required</sup> <a name="caCertificateIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.caCertificateIdentifier"></a>

```java
public java.lang.String getCaCertificateIdentifier();
```

- *Type:* java.lang.String

---

##### `certificateRotationRestart`<sup>Required</sup> <a name="certificateRotationRestart" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.certificateRotationRestart"></a>

```java
public java.lang.Boolean|IResolvable getCertificateRotationRestart();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `characterSetName`<sup>Required</sup> <a name="characterSetName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.characterSetName"></a>

```java
public java.lang.String getCharacterSetName();
```

- *Type:* java.lang.String

---

##### `copyTagsToSnapshot`<sup>Required</sup> <a name="copyTagsToSnapshot" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.copyTagsToSnapshot"></a>

```java
public java.lang.Boolean|IResolvable getCopyTagsToSnapshot();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `customIamInstanceProfile`<sup>Required</sup> <a name="customIamInstanceProfile" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.customIamInstanceProfile"></a>

```java
public java.lang.String getCustomIamInstanceProfile();
```

- *Type:* java.lang.String

---

##### `databaseInsightsMode`<sup>Required</sup> <a name="databaseInsightsMode" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.databaseInsightsMode"></a>

```java
public java.lang.String getDatabaseInsightsMode();
```

- *Type:* java.lang.String

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="dbClusterIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbClusterIdentifier"></a>

```java
public java.lang.String getDbClusterIdentifier();
```

- *Type:* java.lang.String

---

##### `dbClusterSnapshotIdentifier`<sup>Required</sup> <a name="dbClusterSnapshotIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbClusterSnapshotIdentifier"></a>

```java
public java.lang.String getDbClusterSnapshotIdentifier();
```

- *Type:* java.lang.String

---

##### `dbInstanceClass`<sup>Required</sup> <a name="dbInstanceClass" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbInstanceClass"></a>

```java
public java.lang.String getDbInstanceClass();
```

- *Type:* java.lang.String

---

##### `dbInstanceIdentifier`<sup>Required</sup> <a name="dbInstanceIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbInstanceIdentifier"></a>

```java
public java.lang.String getDbInstanceIdentifier();
```

- *Type:* java.lang.String

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbName"></a>

```java
public java.lang.String getDbName();
```

- *Type:* java.lang.String

---

##### `dbParameterGroupName`<sup>Required</sup> <a name="dbParameterGroupName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbParameterGroupName"></a>

```java
public java.lang.String getDbParameterGroupName();
```

- *Type:* java.lang.String

---

##### `dbSecurityGroups`<sup>Required</sup> <a name="dbSecurityGroups" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSecurityGroups"></a>

```java
public java.util.List<java.lang.String> getDbSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dbSnapshotIdentifier`<sup>Required</sup> <a name="dbSnapshotIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSnapshotIdentifier"></a>

```java
public java.lang.String getDbSnapshotIdentifier();
```

- *Type:* java.lang.String

---

##### `dbSubnetGroupName`<sup>Required</sup> <a name="dbSubnetGroupName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSubnetGroupName"></a>

```java
public java.lang.String getDbSubnetGroupName();
```

- *Type:* java.lang.String

---

##### `dbSystemId`<sup>Required</sup> <a name="dbSystemId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dbSystemId"></a>

```java
public java.lang.String getDbSystemId();
```

- *Type:* java.lang.String

---

##### `dedicatedLogVolume`<sup>Required</sup> <a name="dedicatedLogVolume" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.dedicatedLogVolume"></a>

```java
public java.lang.Boolean|IResolvable getDedicatedLogVolume();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `deleteAutomatedBackups`<sup>Required</sup> <a name="deleteAutomatedBackups" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.deleteAutomatedBackups"></a>

```java
public java.lang.Boolean|IResolvable getDeleteAutomatedBackups();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.deletionProtection"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtection();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `domainAuthSecretArn`<sup>Required</sup> <a name="domainAuthSecretArn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainAuthSecretArn"></a>

```java
public java.lang.String getDomainAuthSecretArn();
```

- *Type:* java.lang.String

---

##### `domainDnsIps`<sup>Required</sup> <a name="domainDnsIps" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainDnsIps"></a>

```java
public java.util.List<java.lang.String> getDomainDnsIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `domainFqdn`<sup>Required</sup> <a name="domainFqdn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainFqdn"></a>

```java
public java.lang.String getDomainFqdn();
```

- *Type:* java.lang.String

---

##### `domainIamRoleName`<sup>Required</sup> <a name="domainIamRoleName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainIamRoleName"></a>

```java
public java.lang.String getDomainIamRoleName();
```

- *Type:* java.lang.String

---

##### `domainOu`<sup>Required</sup> <a name="domainOu" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.domainOu"></a>

```java
public java.lang.String getDomainOu();
```

- *Type:* java.lang.String

---

##### `enableCloudwatchLogsExports`<sup>Required</sup> <a name="enableCloudwatchLogsExports" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.enableCloudwatchLogsExports"></a>

```java
public java.util.List<java.lang.String> getEnableCloudwatchLogsExports();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enableIamDatabaseAuthentication`<sup>Required</sup> <a name="enableIamDatabaseAuthentication" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.enableIamDatabaseAuthentication"></a>

```java
public java.lang.Boolean|IResolvable getEnableIamDatabaseAuthentication();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enablePerformanceInsights`<sup>Required</sup> <a name="enablePerformanceInsights" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.enablePerformanceInsights"></a>

```java
public java.lang.Boolean|IResolvable getEnablePerformanceInsights();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.engine"></a>

```java
public java.lang.String getEngine();
```

- *Type:* java.lang.String

---

##### `engineLifecycleSupport`<sup>Required</sup> <a name="engineLifecycleSupport" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.engineLifecycleSupport"></a>

```java
public java.lang.String getEngineLifecycleSupport();
```

- *Type:* java.lang.String

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.engineVersion"></a>

```java
public java.lang.String getEngineVersion();
```

- *Type:* java.lang.String

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.licenseModel"></a>

```java
public java.lang.String getLicenseModel();
```

- *Type:* java.lang.String

---

##### `manageMasterUserPassword`<sup>Required</sup> <a name="manageMasterUserPassword" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.manageMasterUserPassword"></a>

```java
public java.lang.Boolean|IResolvable getManageMasterUserPassword();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `masterUserAuthenticationType`<sup>Required</sup> <a name="masterUserAuthenticationType" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUserAuthenticationType"></a>

```java
public java.lang.String getMasterUserAuthenticationType();
```

- *Type:* java.lang.String

---

##### `masterUsername`<sup>Required</sup> <a name="masterUsername" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUsername"></a>

```java
public java.lang.String getMasterUsername();
```

- *Type:* java.lang.String

---

##### `masterUserPassword`<sup>Required</sup> <a name="masterUserPassword" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.masterUserPassword"></a>

```java
public java.lang.String getMasterUserPassword();
```

- *Type:* java.lang.String

---

##### `maxAllocatedStorage`<sup>Required</sup> <a name="maxAllocatedStorage" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.maxAllocatedStorage"></a>

```java
public java.lang.Number getMaxAllocatedStorage();
```

- *Type:* java.lang.Number

---

##### `monitoringInterval`<sup>Required</sup> <a name="monitoringInterval" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.monitoringInterval"></a>

```java
public java.lang.Number getMonitoringInterval();
```

- *Type:* java.lang.Number

---

##### `monitoringRoleArn`<sup>Required</sup> <a name="monitoringRoleArn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.monitoringRoleArn"></a>

```java
public java.lang.String getMonitoringRoleArn();
```

- *Type:* java.lang.String

---

##### `multiAz`<sup>Required</sup> <a name="multiAz" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.multiAz"></a>

```java
public java.lang.Boolean|IResolvable getMultiAz();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ncharCharacterSetName`<sup>Required</sup> <a name="ncharCharacterSetName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.ncharCharacterSetName"></a>

```java
public java.lang.String getNcharCharacterSetName();
```

- *Type:* java.lang.String

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.networkType"></a>

```java
public java.lang.String getNetworkType();
```

- *Type:* java.lang.String

---

##### `optionGroupName`<sup>Required</sup> <a name="optionGroupName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.optionGroupName"></a>

```java
public java.lang.String getOptionGroupName();
```

- *Type:* java.lang.String

---

##### `performanceInsightsKmsKeyId`<sup>Required</sup> <a name="performanceInsightsKmsKeyId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.performanceInsightsKmsKeyId"></a>

```java
public java.lang.String getPerformanceInsightsKmsKeyId();
```

- *Type:* java.lang.String

---

##### `performanceInsightsRetentionPeriod`<sup>Required</sup> <a name="performanceInsightsRetentionPeriod" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.performanceInsightsRetentionPeriod"></a>

```java
public java.lang.Number getPerformanceInsightsRetentionPeriod();
```

- *Type:* java.lang.Number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.port"></a>

```java
public java.lang.String getPort();
```

- *Type:* java.lang.String

---

##### `preferredBackupWindow`<sup>Required</sup> <a name="preferredBackupWindow" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.preferredBackupWindow"></a>

```java
public java.lang.String getPreferredBackupWindow();
```

- *Type:* java.lang.String

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.preferredMaintenanceWindow"></a>

```java
public java.lang.String getPreferredMaintenanceWindow();
```

- *Type:* java.lang.String

---

##### `promotionTier`<sup>Required</sup> <a name="promotionTier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.promotionTier"></a>

```java
public java.lang.Number getPromotionTier();
```

- *Type:* java.lang.Number

---

##### `publiclyAccessible`<sup>Required</sup> <a name="publiclyAccessible" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.publiclyAccessible"></a>

```java
public java.lang.Boolean|IResolvable getPubliclyAccessible();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `replicaMode`<sup>Required</sup> <a name="replicaMode" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.replicaMode"></a>

```java
public java.lang.String getReplicaMode();
```

- *Type:* java.lang.String

---

##### `restoreTime`<sup>Required</sup> <a name="restoreTime" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.restoreTime"></a>

```java
public java.lang.String getRestoreTime();
```

- *Type:* java.lang.String

---

##### `sourceDbClusterIdentifier`<sup>Required</sup> <a name="sourceDbClusterIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbClusterIdentifier"></a>

```java
public java.lang.String getSourceDbClusterIdentifier();
```

- *Type:* java.lang.String

---

##### `sourceDbInstanceAutomatedBackupsArn`<sup>Required</sup> <a name="sourceDbInstanceAutomatedBackupsArn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbInstanceAutomatedBackupsArn"></a>

```java
public java.lang.String getSourceDbInstanceAutomatedBackupsArn();
```

- *Type:* java.lang.String

---

##### `sourceDbInstanceIdentifier`<sup>Required</sup> <a name="sourceDbInstanceIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbInstanceIdentifier"></a>

```java
public java.lang.String getSourceDbInstanceIdentifier();
```

- *Type:* java.lang.String

---

##### `sourceDbiResourceId`<sup>Required</sup> <a name="sourceDbiResourceId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceDbiResourceId"></a>

```java
public java.lang.String getSourceDbiResourceId();
```

- *Type:* java.lang.String

---

##### `sourceRegion`<sup>Required</sup> <a name="sourceRegion" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.sourceRegion"></a>

```java
public java.lang.String getSourceRegion();
```

- *Type:* java.lang.String

---

##### `storageEncrypted`<sup>Required</sup> <a name="storageEncrypted" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.storageEncrypted"></a>

```java
public java.lang.Boolean|IResolvable getStorageEncrypted();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `storageThroughput`<sup>Required</sup> <a name="storageThroughput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.storageThroughput"></a>

```java
public java.lang.Number getStorageThroughput();
```

- *Type:* java.lang.Number

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.storageType"></a>

```java
public java.lang.String getStorageType();
```

- *Type:* java.lang.String

---

##### `tdeCredentialArn`<sup>Required</sup> <a name="tdeCredentialArn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.tdeCredentialArn"></a>

```java
public java.lang.String getTdeCredentialArn();
```

- *Type:* java.lang.String

---

##### `tdeCredentialPassword`<sup>Required</sup> <a name="tdeCredentialPassword" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.tdeCredentialPassword"></a>

```java
public java.lang.String getTdeCredentialPassword();
```

- *Type:* java.lang.String

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

---

##### `useDefaultProcessorFeatures`<sup>Required</sup> <a name="useDefaultProcessorFeatures" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.useDefaultProcessorFeatures"></a>

```java
public java.lang.Boolean|IResolvable getUseDefaultProcessorFeatures();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `useLatestRestorableTime`<sup>Required</sup> <a name="useLatestRestorableTime" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.useLatestRestorableTime"></a>

```java
public java.lang.Boolean|IResolvable getUseLatestRestorableTime();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `vpcSecurityGroups`<sup>Required</sup> <a name="vpcSecurityGroups" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.vpcSecurityGroups"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RdsDbInstanceAdditionalStorageVolumes <a name="RdsDbInstanceAdditionalStorageVolumes" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_instance.RdsDbInstanceAdditionalStorageVolumes;

RdsDbInstanceAdditionalStorageVolumes.builder()
//  .allocatedStorage(java.lang.String)
//  .iops(java.lang.Number)
//  .maxAllocatedStorage(java.lang.Number)
//  .storageOperationPercentProgress(java.lang.Number)
//  .storageOperationStatus(java.lang.String)
//  .storageThroughput(java.lang.Number)
//  .storageType(java.lang.String)
//  .volumeName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.property.allocatedStorage">allocatedStorage</a></code> | <code>java.lang.String</code> | The amount of storage allocated for the additional storage volume, in gibibytes (GiB). |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.property.iops">iops</a></code> | <code>java.lang.Number</code> | The number of I/O operations per second (IOPS) provisioned for the additional storage volume. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.property.maxAllocatedStorage">maxAllocatedStorage</a></code> | <code>java.lang.Number</code> | The upper limit in gibibytes (GiB) to which RDS can automatically scale the storage of the additional storage volume. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.property.storageOperationPercentProgress">storageOperationPercentProgress</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#storage_operation_percent_progress RdsDbInstance#storage_operation_percent_progress}. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.property.storageOperationStatus">storageOperationStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#storage_operation_status RdsDbInstance#storage_operation_status}. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.property.storageThroughput">storageThroughput</a></code> | <code>java.lang.Number</code> | The storage throughput value for the additional storage volume, in mebibytes per second (MiBps). |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.property.storageType">storageType</a></code> | <code>java.lang.String</code> | The storage type for the additional storage volume.  Valid Values: ``GP3 \| IO2``. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.property.volumeName">volumeName</a></code> | <code>java.lang.String</code> | The name of the additional storage volume.  Valid Values: ``RDSDBDATA2 \| RDSDBDATA3 \| RDSDBDATA4``. |

---

##### `allocatedStorage`<sup>Optional</sup> <a name="allocatedStorage" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.property.allocatedStorage"></a>

```java
public java.lang.String getAllocatedStorage();
```

- *Type:* java.lang.String

The amount of storage allocated for the additional storage volume, in gibibytes (GiB).

The minimum is 20 GiB. The maximum is 65,536 GiB (64 TiB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#allocated_storage RdsDbInstance#allocated_storage}

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

The number of I/O operations per second (IOPS) provisioned for the additional storage volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#iops RdsDbInstance#iops}

---

##### `maxAllocatedStorage`<sup>Optional</sup> <a name="maxAllocatedStorage" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.property.maxAllocatedStorage"></a>

```java
public java.lang.Number getMaxAllocatedStorage();
```

- *Type:* java.lang.Number

The upper limit in gibibytes (GiB) to which RDS can automatically scale the storage of the additional storage volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#max_allocated_storage RdsDbInstance#max_allocated_storage}

---

##### `storageOperationPercentProgress`<sup>Optional</sup> <a name="storageOperationPercentProgress" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.property.storageOperationPercentProgress"></a>

```java
public java.lang.Number getStorageOperationPercentProgress();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#storage_operation_percent_progress RdsDbInstance#storage_operation_percent_progress}.

---

##### `storageOperationStatus`<sup>Optional</sup> <a name="storageOperationStatus" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.property.storageOperationStatus"></a>

```java
public java.lang.String getStorageOperationStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#storage_operation_status RdsDbInstance#storage_operation_status}.

---

##### `storageThroughput`<sup>Optional</sup> <a name="storageThroughput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.property.storageThroughput"></a>

```java
public java.lang.Number getStorageThroughput();
```

- *Type:* java.lang.Number

The storage throughput value for the additional storage volume, in mebibytes per second (MiBps).

This setting applies only to the General Purpose SSD (`gp3`) storage type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#storage_throughput RdsDbInstance#storage_throughput}

---

##### `storageType`<sup>Optional</sup> <a name="storageType" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.property.storageType"></a>

```java
public java.lang.String getStorageType();
```

- *Type:* java.lang.String

The storage type for the additional storage volume.  Valid Values: ``GP3 | IO2``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#storage_type RdsDbInstance#storage_type}

---

##### `volumeName`<sup>Optional</sup> <a name="volumeName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes.property.volumeName"></a>

```java
public java.lang.String getVolumeName();
```

- *Type:* java.lang.String

The name of the additional storage volume.  Valid Values: ``RDSDBDATA2 | RDSDBDATA3 | RDSDBDATA4``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#volume_name RdsDbInstance#volume_name}

---

### RdsDbInstanceAssociatedRoles <a name="RdsDbInstanceAssociatedRoles" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRoles.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_instance.RdsDbInstanceAssociatedRoles;

RdsDbInstanceAssociatedRoles.builder()
//  .featureName(java.lang.String)
//  .roleArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRoles.property.featureName">featureName</a></code> | <code>java.lang.String</code> | The name of the feature associated with the AWS Identity and Access Management (IAM) role. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRoles.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the IAM role that is associated with the DB instance. |

---

##### `featureName`<sup>Optional</sup> <a name="featureName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRoles.property.featureName"></a>

```java
public java.lang.String getFeatureName();
```

- *Type:* java.lang.String

The name of the feature associated with the AWS Identity and Access Management (IAM) role.

IAM roles that are associated with a DB instance grant permission for the DB instance to access other AWS services on your behalf. For the list of supported feature names, see the `SupportedFeatureNames` description in [DBEngineVersion](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DBEngineVersion.html) in the *Amazon RDS API Reference*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#feature_name RdsDbInstance#feature_name}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRoles.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the IAM role that is associated with the DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#role_arn RdsDbInstance#role_arn}

---

### RdsDbInstanceCertificateDetails <a name="RdsDbInstanceCertificateDetails" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetails.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_instance.RdsDbInstanceCertificateDetails;

RdsDbInstanceCertificateDetails.builder()
    .build();
```


### RdsDbInstanceConfig <a name="RdsDbInstanceConfig" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_instance.RdsDbInstanceConfig;

RdsDbInstanceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .additionalStorageVolumes(IResolvable|java.util.List<RdsDbInstanceAdditionalStorageVolumes>)
//  .allocatedStorage(java.lang.String)
//  .allowMajorVersionUpgrade(java.lang.Boolean|IResolvable)
//  .applyImmediately(java.lang.Boolean|IResolvable)
//  .associatedRoles(IResolvable|java.util.List<RdsDbInstanceAssociatedRoles>)
//  .automaticBackupReplicationKmsKeyId(java.lang.String)
//  .automaticBackupReplicationRegion(java.lang.String)
//  .automaticBackupReplicationRetentionPeriod(java.lang.Number)
//  .autoMinorVersionUpgrade(java.lang.Boolean|IResolvable)
//  .availabilityZone(java.lang.String)
//  .backupRetentionPeriod(java.lang.Number)
//  .backupTarget(java.lang.String)
//  .caCertificateIdentifier(java.lang.String)
//  .certificateRotationRestart(java.lang.Boolean|IResolvable)
//  .characterSetName(java.lang.String)
//  .copyTagsToSnapshot(java.lang.Boolean|IResolvable)
//  .customIamInstanceProfile(java.lang.String)
//  .databaseInsightsMode(java.lang.String)
//  .dbClusterIdentifier(java.lang.String)
//  .dbClusterSnapshotIdentifier(java.lang.String)
//  .dbInstanceClass(java.lang.String)
//  .dbInstanceIdentifier(java.lang.String)
//  .dbName(java.lang.String)
//  .dbParameterGroupName(java.lang.String)
//  .dbSecurityGroups(java.util.List<java.lang.String>)
//  .dbSnapshotIdentifier(java.lang.String)
//  .dbSubnetGroupName(java.lang.String)
//  .dbSystemId(java.lang.String)
//  .dedicatedLogVolume(java.lang.Boolean|IResolvable)
//  .deleteAutomatedBackups(java.lang.Boolean|IResolvable)
//  .deletionProtection(java.lang.Boolean|IResolvable)
//  .domain(java.lang.String)
//  .domainAuthSecretArn(java.lang.String)
//  .domainDnsIps(java.util.List<java.lang.String>)
//  .domainFqdn(java.lang.String)
//  .domainIamRoleName(java.lang.String)
//  .domainOu(java.lang.String)
//  .enableCloudwatchLogsExports(java.util.List<java.lang.String>)
//  .enableIamDatabaseAuthentication(java.lang.Boolean|IResolvable)
//  .enablePerformanceInsights(java.lang.Boolean|IResolvable)
//  .engine(java.lang.String)
//  .engineLifecycleSupport(java.lang.String)
//  .engineVersion(java.lang.String)
//  .iops(java.lang.Number)
//  .kmsKeyId(java.lang.String)
//  .licenseModel(java.lang.String)
//  .manageMasterUserPassword(java.lang.Boolean|IResolvable)
//  .masterUserAuthenticationType(java.lang.String)
//  .masterUsername(java.lang.String)
//  .masterUserPassword(java.lang.String)
//  .masterUserSecret(RdsDbInstanceMasterUserSecret)
//  .maxAllocatedStorage(java.lang.Number)
//  .monitoringInterval(java.lang.Number)
//  .monitoringRoleArn(java.lang.String)
//  .multiAz(java.lang.Boolean|IResolvable)
//  .ncharCharacterSetName(java.lang.String)
//  .networkType(java.lang.String)
//  .optionGroupName(java.lang.String)
//  .performanceInsightsKmsKeyId(java.lang.String)
//  .performanceInsightsRetentionPeriod(java.lang.Number)
//  .port(java.lang.String)
//  .preferredBackupWindow(java.lang.String)
//  .preferredMaintenanceWindow(java.lang.String)
//  .processorFeatures(IResolvable|java.util.List<RdsDbInstanceProcessorFeatures>)
//  .promotionTier(java.lang.Number)
//  .publiclyAccessible(java.lang.Boolean|IResolvable)
//  .replicaMode(java.lang.String)
//  .restoreTime(java.lang.String)
//  .sourceDbClusterIdentifier(java.lang.String)
//  .sourceDbInstanceAutomatedBackupsArn(java.lang.String)
//  .sourceDbInstanceIdentifier(java.lang.String)
//  .sourceDbiResourceId(java.lang.String)
//  .sourceRegion(java.lang.String)
//  .storageEncrypted(java.lang.Boolean|IResolvable)
//  .storageThroughput(java.lang.Number)
//  .storageType(java.lang.String)
//  .tags(IResolvable|java.util.List<RdsDbInstanceTags>)
//  .tdeCredentialArn(java.lang.String)
//  .tdeCredentialPassword(java.lang.String)
//  .timezone(java.lang.String)
//  .useDefaultProcessorFeatures(java.lang.Boolean|IResolvable)
//  .useLatestRestorableTime(java.lang.Boolean|IResolvable)
//  .vpcSecurityGroups(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.additionalStorageVolumes">additionalStorageVolumes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes">RdsDbInstanceAdditionalStorageVolumes</a>></code> | The additional storage volumes associated with the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.allocatedStorage">allocatedStorage</a></code> | <code>java.lang.String</code> | The amount of storage in gibibytes (GiB) to be initially allocated for the database instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.allowMajorVersionUpgrade">allowMajorVersionUpgrade</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A value that indicates whether major version upgrades are allowed. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.applyImmediately">applyImmediately</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether changes to the DB instance and any pending modifications are applied immediately, regardless of the ``PreferredMaintenanceWindow`` setting. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.associatedRoles">associatedRoles</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRoles">RdsDbInstanceAssociatedRoles</a>></code> | The IAMlong (IAM) roles associated with the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.automaticBackupReplicationKmsKeyId">automaticBackupReplicationKmsKeyId</a></code> | <code>java.lang.String</code> | The AWS KMS key identifier for encryption of the replicated automated backups. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.automaticBackupReplicationRegion">automaticBackupReplicationRegion</a></code> | <code>java.lang.String</code> | The AWS-Region associated with the automated backup. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.automaticBackupReplicationRetentionPeriod">automaticBackupReplicationRetentionPeriod</a></code> | <code>java.lang.Number</code> | The retention period for automated backups in a different AWS Region. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A value that indicates whether minor engine upgrades are applied automatically to the DB instance during the maintenance window. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | The Availability Zone (AZ) where the database will be created. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.backupRetentionPeriod">backupRetentionPeriod</a></code> | <code>java.lang.Number</code> | The number of days for which automated backups are retained. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.backupTarget">backupTarget</a></code> | <code>java.lang.String</code> | The location for storing automated backups and manual snapshots. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.caCertificateIdentifier">caCertificateIdentifier</a></code> | <code>java.lang.String</code> | The identifier of the CA certificate for this DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.certificateRotationRestart">certificateRotationRestart</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether the DB instance is restarted when you rotate your SSL/TLS certificate. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.characterSetName">characterSetName</a></code> | <code>java.lang.String</code> | For supported engines, indicates that the DB instance should be associated with the specified character set. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.copyTagsToSnapshot">copyTagsToSnapshot</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether to copy tags from the DB instance to snapshots of the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.customIamInstanceProfile">customIamInstanceProfile</a></code> | <code>java.lang.String</code> | The instance profile associated with the underlying Amazon EC2 instance of an RDS Custom DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.databaseInsightsMode">databaseInsightsMode</a></code> | <code>java.lang.String</code> | The mode of Database Insights to enable for the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbClusterIdentifier">dbClusterIdentifier</a></code> | <code>java.lang.String</code> | The identifier of the DB cluster that this DB instance will belong to. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbClusterSnapshotIdentifier">dbClusterSnapshotIdentifier</a></code> | <code>java.lang.String</code> | The identifier for the Multi-AZ DB cluster snapshot to restore from. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbInstanceClass">dbInstanceClass</a></code> | <code>java.lang.String</code> | The compute and memory capacity of the DB instance, for example ``db.m5.large``. Not all DB instance classes are available in all AWS-Regions, or for all database engines. For the full list of DB instance classes, and availability for your engine, see [DB instance classes](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html) in the *Amazon RDS User Guide* or [Aurora DB instance classes](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.DBInstanceClass.html) in the *Amazon Aurora User Guide*. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbInstanceIdentifier">dbInstanceIdentifier</a></code> | <code>java.lang.String</code> | A name for the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbName">dbName</a></code> | <code>java.lang.String</code> | The meaning of this parameter differs according to the database engine you use. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbParameterGroupName">dbParameterGroupName</a></code> | <code>java.lang.String</code> | The name of an existing DB parameter group or a reference to an [AWS::RDS::DBParameterGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbparametergroup.html) resource created in the template.  To list all of the available DB parameter group names, use the following command:   ``aws rds describe-db-parameter-groups --query "DBParameterGroups[].DBParameterGroupName" --output text``    If any of the data members of the referenced parameter group are changed during an update, the DB instance might need to be restarted, which causes some interruption. If the parameter group contains static parameters, whether they were changed or not, an update triggers a reboot.   If you don't specify a value for ``DBParameterGroupName`` property, the default DB parameter group for the specified engine and engine version is used. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbSecurityGroups">dbSecurityGroups</a></code> | <code>java.util.List<java.lang.String></code> | A list of the DB security groups to assign to the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbSnapshotIdentifier">dbSnapshotIdentifier</a></code> | <code>java.lang.String</code> | The name or Amazon Resource Name (ARN) of the DB snapshot that's used to restore the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbSubnetGroupName">dbSubnetGroupName</a></code> | <code>java.lang.String</code> | A DB subnet group to associate with the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbSystemId">dbSystemId</a></code> | <code>java.lang.String</code> | The Oracle system identifier (SID), which is the name of the Oracle database instance that manages your database files. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dedicatedLogVolume">dedicatedLogVolume</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether the DB instance has a dedicated log volume (DLV) enabled. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.deleteAutomatedBackups">deleteAutomatedBackups</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A value that indicates whether to remove automated backups immediately after the DB instance is deleted. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether the DB instance has deletion protection enabled. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.domain">domain</a></code> | <code>java.lang.String</code> | The Active Directory directory ID to create the DB instance in. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.domainAuthSecretArn">domainAuthSecretArn</a></code> | <code>java.lang.String</code> | The ARN for the Secrets Manager secret with the credentials for the user joining the domain.  Example: ``arn:aws:secretsmanager:region:account-number:secret:myselfmanagedADtestsecret-123456``. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.domainDnsIps">domainDnsIps</a></code> | <code>java.util.List<java.lang.String></code> | The IPv4 DNS IP addresses of your primary and secondary Active Directory domain controllers. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.domainFqdn">domainFqdn</a></code> | <code>java.lang.String</code> | The fully qualified domain name (FQDN) of an Active Directory domain. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.domainIamRoleName">domainIamRoleName</a></code> | <code>java.lang.String</code> | The name of the IAM role to use when making API calls to the Directory Service. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.domainOu">domainOu</a></code> | <code>java.lang.String</code> | The Active Directory organizational unit for your DB instance to join. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.enableCloudwatchLogsExports">enableCloudwatchLogsExports</a></code> | <code>java.util.List<java.lang.String></code> | The list of log types that need to be enabled for exporting to CloudWatch Logs. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.enableIamDatabaseAuthentication">enableIamDatabaseAuthentication</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.enablePerformanceInsights">enablePerformanceInsights</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether to enable Performance Insights for the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.engine">engine</a></code> | <code>java.lang.String</code> | The name of the database engine to use for this DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.engineLifecycleSupport">engineLifecycleSupport</a></code> | <code>java.lang.String</code> | The lifecycle type for this DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | The version number of the database engine to use. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.iops">iops</a></code> | <code>java.lang.Number</code> | The number of I/O operations per second (IOPS) that the database provisions. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | The ARN of the AWS KMS key that's used to encrypt the DB instance, such as ``arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef``. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | License model information for this DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.manageMasterUserPassword">manageMasterUserPassword</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether to manage the master user password with AWS Secrets Manager. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.masterUserAuthenticationType">masterUserAuthenticationType</a></code> | <code>java.lang.String</code> | Specifies the authentication type for the master user. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.masterUsername">masterUsername</a></code> | <code>java.lang.String</code> | The master user name for the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.masterUserPassword">masterUserPassword</a></code> | <code>java.lang.String</code> | The password for the master user. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.masterUserSecret">masterUserSecret</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecret">RdsDbInstanceMasterUserSecret</a></code> | The secret managed by RDS in AWS Secrets Manager for the master user password. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.maxAllocatedStorage">maxAllocatedStorage</a></code> | <code>java.lang.Number</code> | The upper limit in gibibytes (GiB) to which Amazon RDS can automatically scale the storage of the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.monitoringInterval">monitoringInterval</a></code> | <code>java.lang.Number</code> | The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.monitoringRoleArn">monitoringRoleArn</a></code> | <code>java.lang.String</code> | The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to Amazon CloudWatch Logs. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.multiAz">multiAz</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether the DB instance is a Multi-AZ deployment. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.ncharCharacterSetName">ncharCharacterSetName</a></code> | <code>java.lang.String</code> | The name of the NCHAR character set for the Oracle DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.networkType">networkType</a></code> | <code>java.lang.String</code> | The network type of the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.optionGroupName">optionGroupName</a></code> | <code>java.lang.String</code> | Indicates that the DB instance should be associated with the specified option group. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.performanceInsightsKmsKeyId">performanceInsightsKmsKeyId</a></code> | <code>java.lang.String</code> | The AWS KMS key identifier for encryption of Performance Insights data. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.performanceInsightsRetentionPeriod">performanceInsightsRetentionPeriod</a></code> | <code>java.lang.Number</code> | The number of days to retain Performance Insights data. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.port">port</a></code> | <code>java.lang.String</code> | The port number on which the database accepts connections. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.preferredBackupWindow">preferredBackupWindow</a></code> | <code>java.lang.String</code> | The daily time range during which automated backups are created if automated backups are enabled, using the ``BackupRetentionPeriod`` parameter. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>java.lang.String</code> | The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC). |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.processorFeatures">processorFeatures</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeatures">RdsDbInstanceProcessorFeatures</a>></code> | The number of CPU cores and the number of threads per core for the DB instance class of the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.promotionTier">promotionTier</a></code> | <code>java.lang.Number</code> | The order of priority in which an Aurora Replica is promoted to the primary instance after a failure of the existing primary instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.publiclyAccessible">publiclyAccessible</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether the DB instance is an internet-facing instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.replicaMode">replicaMode</a></code> | <code>java.lang.String</code> | The open mode of an Oracle read replica. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.restoreTime">restoreTime</a></code> | <code>java.lang.String</code> | The date and time to restore from. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.sourceDbClusterIdentifier">sourceDbClusterIdentifier</a></code> | <code>java.lang.String</code> | The identifier of the Multi-AZ DB cluster that will act as the source for the read replica. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.sourceDbInstanceAutomatedBackupsArn">sourceDbInstanceAutomatedBackupsArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the replicated automated backups from which to restore, for example, ``arn:aws:rds:us-east-1:123456789012:auto-backup:ab-L2IJCEXJP7XQ7HOJ4SIEXAMPLE``. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.sourceDbInstanceIdentifier">sourceDbInstanceIdentifier</a></code> | <code>java.lang.String</code> | If you want to create a read replica DB instance, specify the ID of the source DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.sourceDbiResourceId">sourceDbiResourceId</a></code> | <code>java.lang.String</code> | The resource ID of the source DB instance from which to restore. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.sourceRegion">sourceRegion</a></code> | <code>java.lang.String</code> | The ID of the region that contains the source DB instance for the read replica. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.storageEncrypted">storageEncrypted</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A value that indicates whether the DB instance is encrypted. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.storageThroughput">storageThroughput</a></code> | <code>java.lang.Number</code> | Specifies the storage throughput value, in mebibyte per second (MiBps), for the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.storageType">storageType</a></code> | <code>java.lang.String</code> | The storage type to associate with the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTags">RdsDbInstanceTags</a>></code> | Tags to assign to the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.tdeCredentialArn">tdeCredentialArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#tde_credential_arn RdsDbInstance#tde_credential_arn}. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.tdeCredentialPassword">tdeCredentialPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#tde_credential_password RdsDbInstance#tde_credential_password}. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.timezone">timezone</a></code> | <code>java.lang.String</code> | The time zone of the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.useDefaultProcessorFeatures">useDefaultProcessorFeatures</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether the DB instance class of the DB instance uses its default processor features. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.useLatestRestorableTime">useLatestRestorableTime</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether the DB instance is restored from the latest backup time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.vpcSecurityGroups">vpcSecurityGroups</a></code> | <code>java.util.List<java.lang.String></code> | A list of the VPC security group IDs to assign to the DB instance. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `additionalStorageVolumes`<sup>Optional</sup> <a name="additionalStorageVolumes" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.additionalStorageVolumes"></a>

```java
public IResolvable|java.util.List<RdsDbInstanceAdditionalStorageVolumes> getAdditionalStorageVolumes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes">RdsDbInstanceAdditionalStorageVolumes</a>>

The additional storage volumes associated with the DB instance.

RDS supports additional storage volumes for RDS for Oracle and RDS for SQL Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#additional_storage_volumes RdsDbInstance#additional_storage_volumes}

---

##### `allocatedStorage`<sup>Optional</sup> <a name="allocatedStorage" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.allocatedStorage"></a>

```java
public java.lang.String getAllocatedStorage();
```

- *Type:* java.lang.String

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#allocated_storage RdsDbInstance#allocated_storage}

---

##### `allowMajorVersionUpgrade`<sup>Optional</sup> <a name="allowMajorVersionUpgrade" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.allowMajorVersionUpgrade"></a>

```java
public java.lang.Boolean|IResolvable getAllowMajorVersionUpgrade();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A value that indicates whether major version upgrades are allowed.

Changing this parameter doesn't result in an outage and the change is asynchronously applied as soon as possible.
Constraints: Major version upgrades must be allowed when specifying a value for the `EngineVersion` parameter that is a different major version than the DB instance's current version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#allow_major_version_upgrade RdsDbInstance#allow_major_version_upgrade}

---

##### `applyImmediately`<sup>Optional</sup> <a name="applyImmediately" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.applyImmediately"></a>

```java
public java.lang.Boolean|IResolvable getApplyImmediately();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether changes to the DB instance and any pending modifications are applied immediately, regardless of the ``PreferredMaintenanceWindow`` setting.

If set to `false`, changes are applied during the next maintenance window. Until RDS applies the changes, the DB instance remains in a drift state. As a result, the configuration doesn't fully reflect the requested modifications and temporarily diverges from the intended state.
In addition to the settings described in [Modifying a DB instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBInstance.Modifying.html), this property also determines whether the DB instance reboots when a static parameter is modified in the associated DB parameter group.
Default: `true`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#apply_immediately RdsDbInstance#apply_immediately}

---

##### `associatedRoles`<sup>Optional</sup> <a name="associatedRoles" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.associatedRoles"></a>

```java
public IResolvable|java.util.List<RdsDbInstanceAssociatedRoles> getAssociatedRoles();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRoles">RdsDbInstanceAssociatedRoles</a>>

The IAMlong (IAM) roles associated with the DB instance.

*Amazon Aurora*
Not applicable. The associated roles are managed by the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#associated_roles RdsDbInstance#associated_roles}

---

##### `automaticBackupReplicationKmsKeyId`<sup>Optional</sup> <a name="automaticBackupReplicationKmsKeyId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.automaticBackupReplicationKmsKeyId"></a>

```java
public java.lang.String getAutomaticBackupReplicationKmsKeyId();
```

- *Type:* java.lang.String

The AWS KMS key identifier for encryption of the replicated automated backups.

The KMS key ID is the Amazon Resource Name (ARN) for the KMS encryption key in the destination AWS-Region, for example, `arn:aws:kms:us-east-1:123456789012:key/AKIAIOSFODNN7EXAMPLE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#automatic_backup_replication_kms_key_id RdsDbInstance#automatic_backup_replication_kms_key_id}

---

##### `automaticBackupReplicationRegion`<sup>Optional</sup> <a name="automaticBackupReplicationRegion" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.automaticBackupReplicationRegion"></a>

```java
public java.lang.String getAutomaticBackupReplicationRegion();
```

- *Type:* java.lang.String

The AWS-Region associated with the automated backup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#automatic_backup_replication_region RdsDbInstance#automatic_backup_replication_region}

---

##### `automaticBackupReplicationRetentionPeriod`<sup>Optional</sup> <a name="automaticBackupReplicationRetentionPeriod" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.automaticBackupReplicationRetentionPeriod"></a>

```java
public java.lang.Number getAutomaticBackupReplicationRetentionPeriod();
```

- *Type:* java.lang.Number

The retention period for automated backups in a different AWS Region.

Use this parameter to set a unique retention period that only applies to cross-Region automated backups. To enable automated backups in a different Region, specify a positive value for the `AutomaticBackupReplicationRegion` parameter.
If not specified, this parameter defaults to the value of the `BackupRetentionPeriod` parameter. The maximum allowed value is 35.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#automatic_backup_replication_retention_period RdsDbInstance#automatic_backup_replication_retention_period}

---

##### `autoMinorVersionUpgrade`<sup>Optional</sup> <a name="autoMinorVersionUpgrade" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.autoMinorVersionUpgrade"></a>

```java
public java.lang.Boolean|IResolvable getAutoMinorVersionUpgrade();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A value that indicates whether minor engine upgrades are applied automatically to the DB instance during the maintenance window.

By default, minor engine upgrades are applied automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#auto_minor_version_upgrade RdsDbInstance#auto_minor_version_upgrade}

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

The Availability Zone (AZ) where the database will be created.

For information on AWS-Regions and Availability Zones, see [Regions and Availability Zones](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html).
For Amazon Aurora, each Aurora DB cluster hosts copies of its storage in three separate Availability Zones. Specify one of these Availability Zones. Aurora automatically chooses an appropriate Availability Zone if you don't specify one.
Default: A random, system-chosen Availability Zone in the endpoint's AWS-Region.
Constraints:

* The `AvailabilityZone` parameter can't be specified if the DB instance is a Multi-AZ deployment.
* The specified Availability Zone must be in the same AWS-Region as the current endpoint.

Example: `us-east-1d`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#availability_zone RdsDbInstance#availability_zone}

---

##### `backupRetentionPeriod`<sup>Optional</sup> <a name="backupRetentionPeriod" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.backupRetentionPeriod"></a>

```java
public java.lang.Number getBackupRetentionPeriod();
```

- *Type:* java.lang.Number

The number of days for which automated backups are retained.

Setting this parameter to a positive number enables backups. Setting this parameter to 0 disables automated backups.
*Amazon Aurora*
Not applicable. The retention period for automated backups is managed by the DB cluster.
Default: 1
Constraints:

* Must be a value from 0 to 35
* Can't be set to 0 if the DB instance is a source to read replicas

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#backup_retention_period RdsDbInstance#backup_retention_period}

---

##### `backupTarget`<sup>Optional</sup> <a name="backupTarget" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.backupTarget"></a>

```java
public java.lang.String getBackupTarget();
```

- *Type:* java.lang.String

The location for storing automated backups and manual snapshots.

Valid Values:

* `local` (Dedicated Local Zone)
* `outposts` (AWS Outposts)
* `region` (AWS-Region)

Default: `region`
For more information, see [Working with Amazon RDS on Outposts](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-on-outposts.html) in the *Amazon RDS User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#backup_target RdsDbInstance#backup_target}

---

##### `caCertificateIdentifier`<sup>Optional</sup> <a name="caCertificateIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.caCertificateIdentifier"></a>

```java
public java.lang.String getCaCertificateIdentifier();
```

- *Type:* java.lang.String

The identifier of the CA certificate for this DB instance.

For more information, see [Using SSL/TLS to encrypt a connection to a DB instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html) in the *Amazon RDS User Guide* and [Using SSL/TLS to encrypt a connection to a DB cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL.html) in the *Amazon Aurora User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#ca_certificate_identifier RdsDbInstance#ca_certificate_identifier}

---

##### `certificateRotationRestart`<sup>Optional</sup> <a name="certificateRotationRestart" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.certificateRotationRestart"></a>

```java
public java.lang.Boolean|IResolvable getCertificateRotationRestart();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether the DB instance is restarted when you rotate your SSL/TLS certificate.

By default, the DB instance is restarted when you rotate your SSL/TLS certificate. The certificate is not updated until the DB instance is restarted.
Set this parameter only if you are *not* using SSL/TLS to connect to the DB instance.
If you are using SSL/TLS to connect to the DB instance, follow the appropriate instructions for your DB engine to rotate your SSL/TLS certificate:

* For more information about rotating your SSL/TLS certificate for RDS DB engines, see [Rotating Your SSL/TLS Certificate.](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL-certificate-rotation.html) in the *Amazon RDS User Guide.*
* For more information about rotating your SSL/TLS certificate for Aurora DB engines, see [Rotating Your SSL/TLS Certificate](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL-certificate-rotation.html) in the *Amazon Aurora User Guide*.

This setting doesn't apply to RDS Custom DB instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#certificate_rotation_restart RdsDbInstance#certificate_rotation_restart}

---

##### `characterSetName`<sup>Optional</sup> <a name="characterSetName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.characterSetName"></a>

```java
public java.lang.String getCharacterSetName();
```

- *Type:* java.lang.String

For supported engines, indicates that the DB instance should be associated with the specified character set.

*Amazon Aurora*
Not applicable. The character set is managed by the DB cluster. For more information, see [AWS::RDS::DBCluster](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#character_set_name RdsDbInstance#character_set_name}

---

##### `copyTagsToSnapshot`<sup>Optional</sup> <a name="copyTagsToSnapshot" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.copyTagsToSnapshot"></a>

```java
public java.lang.Boolean|IResolvable getCopyTagsToSnapshot();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether to copy tags from the DB instance to snapshots of the DB instance.

By default, tags are not copied.
This setting doesn't apply to Amazon Aurora DB instances. Copying tags to snapshots is managed by the DB cluster. Setting this value for an Aurora DB instance has no effect on the DB cluster setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#copy_tags_to_snapshot RdsDbInstance#copy_tags_to_snapshot}

---

##### `customIamInstanceProfile`<sup>Optional</sup> <a name="customIamInstanceProfile" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.customIamInstanceProfile"></a>

```java
public java.lang.String getCustomIamInstanceProfile();
```

- *Type:* java.lang.String

The instance profile associated with the underlying Amazon EC2 instance of an RDS Custom DB instance.

This setting is required for RDS Custom.
Constraints:

* The profile must exist in your account.
* The profile must have an IAM role that Amazon EC2 has permissions to assume.
* The instance profile name and the associated IAM role name must start with the prefix `AWSRDSCustom`.

For the list of permissions required for the IAM role, see [Configure IAM and your VPC](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-setup-orcl.html#custom-setup-orcl.iam-vpc) in the *Amazon RDS User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#custom_iam_instance_profile RdsDbInstance#custom_iam_instance_profile}

---

##### `databaseInsightsMode`<sup>Optional</sup> <a name="databaseInsightsMode" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.databaseInsightsMode"></a>

```java
public java.lang.String getDatabaseInsightsMode();
```

- *Type:* java.lang.String

The mode of Database Insights to enable for the DB instance.

Aurora DB instances inherit this value from the DB cluster, so you can't change this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#database_insights_mode RdsDbInstance#database_insights_mode}

---

##### `dbClusterIdentifier`<sup>Optional</sup> <a name="dbClusterIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbClusterIdentifier"></a>

```java
public java.lang.String getDbClusterIdentifier();
```

- *Type:* java.lang.String

The identifier of the DB cluster that this DB instance will belong to.

This setting doesn't apply to RDS Custom DB instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#db_cluster_identifier RdsDbInstance#db_cluster_identifier}

---

##### `dbClusterSnapshotIdentifier`<sup>Optional</sup> <a name="dbClusterSnapshotIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbClusterSnapshotIdentifier"></a>

```java
public java.lang.String getDbClusterSnapshotIdentifier();
```

- *Type:* java.lang.String

The identifier for the Multi-AZ DB cluster snapshot to restore from.

For more information on Multi-AZ DB clusters, see [Multi-AZ DB cluster deployments](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html) in the *Amazon RDS User Guide*.
Constraints:

* Must match the identifier of an existing Multi-AZ DB cluster snapshot.
* Can't be specified when `DBSnapshotIdentifier` is specified.
* Must be specified when `DBSnapshotIdentifier` isn't specified.
* If you are restoring from a shared manual Multi-AZ DB cluster snapshot, the `DBClusterSnapshotIdentifier` must be the ARN of the shared snapshot.
* Can't be the identifier of an Aurora DB cluster snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#db_cluster_snapshot_identifier RdsDbInstance#db_cluster_snapshot_identifier}

---

##### `dbInstanceClass`<sup>Optional</sup> <a name="dbInstanceClass" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbInstanceClass"></a>

```java
public java.lang.String getDbInstanceClass();
```

- *Type:* java.lang.String

The compute and memory capacity of the DB instance, for example ``db.m5.large``. Not all DB instance classes are available in all AWS-Regions, or for all database engines. For the full list of DB instance classes, and availability for your engine, see [DB instance classes](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html) in the *Amazon RDS User Guide* or [Aurora DB instance classes](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.DBInstanceClass.html) in the *Amazon Aurora User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#db_instance_class RdsDbInstance#db_instance_class}

---

##### `dbInstanceIdentifier`<sup>Optional</sup> <a name="dbInstanceIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbInstanceIdentifier"></a>

```java
public java.lang.String getDbInstanceIdentifier();
```

- *Type:* java.lang.String

A name for the DB instance.

If you specify a name, AWS CloudFormation converts it to lowercase. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the DB instance. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
For information about constraints that apply to DB instance identifiers, see [Naming constraints in Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Limits.html#RDS_Limits.Constraints) in the *Amazon RDS User Guide*.
If you specify a name, you can't perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#db_instance_identifier RdsDbInstance#db_instance_identifier}

---

##### `dbName`<sup>Optional</sup> <a name="dbName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbName"></a>

```java
public java.lang.String getDbName();
```

- *Type:* java.lang.String

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#db_name RdsDbInstance#db_name}

---

##### `dbParameterGroupName`<sup>Optional</sup> <a name="dbParameterGroupName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbParameterGroupName"></a>

```java
public java.lang.String getDbParameterGroupName();
```

- *Type:* java.lang.String

The name of an existing DB parameter group or a reference to an [AWS::RDS::DBParameterGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbparametergroup.html) resource created in the template.  To list all of the available DB parameter group names, use the following command:   ``aws rds describe-db-parameter-groups --query "DBParameterGroups[].DBParameterGroupName" --output text``    If any of the data members of the referenced parameter group are changed during an update, the DB instance might need to be restarted, which causes some interruption. If the parameter group contains static parameters, whether they were changed or not, an update triggers a reboot.   If you don't specify a value for ``DBParameterGroupName`` property, the default DB parameter group for the specified engine and engine version is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#db_parameter_group_name RdsDbInstance#db_parameter_group_name}

---

##### `dbSecurityGroups`<sup>Optional</sup> <a name="dbSecurityGroups" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbSecurityGroups"></a>

```java
public java.util.List<java.lang.String> getDbSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#db_security_groups RdsDbInstance#db_security_groups}

---

##### `dbSnapshotIdentifier`<sup>Optional</sup> <a name="dbSnapshotIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbSnapshotIdentifier"></a>

```java
public java.lang.String getDbSnapshotIdentifier();
```

- *Type:* java.lang.String

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#db_snapshot_identifier RdsDbInstance#db_snapshot_identifier}

---

##### `dbSubnetGroupName`<sup>Optional</sup> <a name="dbSubnetGroupName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbSubnetGroupName"></a>

```java
public java.lang.String getDbSubnetGroupName();
```

- *Type:* java.lang.String

A DB subnet group to associate with the DB instance.

If you update this value, the new subnet group must be a subnet group in a new VPC.
If you don't specify a DB subnet group, RDS uses the default DB subnet group if one exists. If a default DB subnet group does not exist, and you don't specify a `DBSubnetGroupName`, the DB instance fails to launch.
For more information about using Amazon RDS in a VPC, see [Amazon VPC and Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.html) in the *Amazon RDS User Guide*.
This setting doesn't apply to Amazon Aurora DB instances. The DB subnet group is managed by the DB cluster. If specified, the setting must match the DB cluster setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#db_subnet_group_name RdsDbInstance#db_subnet_group_name}

---

##### `dbSystemId`<sup>Optional</sup> <a name="dbSystemId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dbSystemId"></a>

```java
public java.lang.String getDbSystemId();
```

- *Type:* java.lang.String

The Oracle system identifier (SID), which is the name of the Oracle database instance that manages your database files.

In this context, the term "Oracle database instance" refers exclusively to the system global area (SGA) and Oracle background processes. If you don't specify a SID, the value defaults to `RDSCDB`. The Oracle SID is also the name of your CDB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#db_system_id RdsDbInstance#db_system_id}

---

##### `dedicatedLogVolume`<sup>Optional</sup> <a name="dedicatedLogVolume" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.dedicatedLogVolume"></a>

```java
public java.lang.Boolean|IResolvable getDedicatedLogVolume();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether the DB instance has a dedicated log volume (DLV) enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#dedicated_log_volume RdsDbInstance#dedicated_log_volume}

---

##### `deleteAutomatedBackups`<sup>Optional</sup> <a name="deleteAutomatedBackups" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.deleteAutomatedBackups"></a>

```java
public java.lang.Boolean|IResolvable getDeleteAutomatedBackups();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A value that indicates whether to remove automated backups immediately after the DB instance is deleted.

This parameter isn't case-sensitive. The default is to remove automated backups immediately after the DB instance is deleted.
*Amazon Aurora*
Not applicable. When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered. Manual DB cluster snapshots of the DB cluster are not deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#delete_automated_backups RdsDbInstance#delete_automated_backups}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.deletionProtection"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtection();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether the DB instance has deletion protection enabled.

The database can't be deleted when deletion protection is enabled. By default, deletion protection isn't enabled. For more information, see [Deleting a DB Instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_DeleteInstance.html).
This setting doesn't apply to Amazon Aurora DB instances. You can enable or disable deletion protection for the DB cluster. For more information, see `CreateDBCluster`. DB instances in a DB cluster can be deleted even when deletion protection is enabled for the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#deletion_protection RdsDbInstance#deletion_protection}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

The Active Directory directory ID to create the DB instance in.

Currently, only Db2, MySQL, Microsoft SQL Server, Oracle, and PostgreSQL DB instances can be created in an Active Directory Domain.
For more information, see [Kerberos Authentication](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/kerberos-authentication.html) in the *Amazon RDS User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#domain RdsDbInstance#domain}

---

##### `domainAuthSecretArn`<sup>Optional</sup> <a name="domainAuthSecretArn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.domainAuthSecretArn"></a>

```java
public java.lang.String getDomainAuthSecretArn();
```

- *Type:* java.lang.String

The ARN for the Secrets Manager secret with the credentials for the user joining the domain.  Example: ``arn:aws:secretsmanager:region:account-number:secret:myselfmanagedADtestsecret-123456``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#domain_auth_secret_arn RdsDbInstance#domain_auth_secret_arn}

---

##### `domainDnsIps`<sup>Optional</sup> <a name="domainDnsIps" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.domainDnsIps"></a>

```java
public java.util.List<java.lang.String> getDomainDnsIps();
```

- *Type:* java.util.List<java.lang.String>

The IPv4 DNS IP addresses of your primary and secondary Active Directory domain controllers.

Constraints:

* Two IP addresses must be provided. If there isn't a secondary domain controller, use the IP address of the primary domain controller for both entries in the list.

Example: `123.124.125.126,234.235.236.237`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#domain_dns_ips RdsDbInstance#domain_dns_ips}

---

##### `domainFqdn`<sup>Optional</sup> <a name="domainFqdn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.domainFqdn"></a>

```java
public java.lang.String getDomainFqdn();
```

- *Type:* java.lang.String

The fully qualified domain name (FQDN) of an Active Directory domain.

Constraints:

* Can't be longer than 64 characters.

Example: `mymanagedADtest.mymanagedAD.mydomain`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#domain_fqdn RdsDbInstance#domain_fqdn}

---

##### `domainIamRoleName`<sup>Optional</sup> <a name="domainIamRoleName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.domainIamRoleName"></a>

```java
public java.lang.String getDomainIamRoleName();
```

- *Type:* java.lang.String

The name of the IAM role to use when making API calls to the Directory Service.

This setting doesn't apply to the following DB instances:

* Amazon Aurora (The domain is managed by the DB cluster.)
* RDS Custom

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#domain_iam_role_name RdsDbInstance#domain_iam_role_name}

---

##### `domainOu`<sup>Optional</sup> <a name="domainOu" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.domainOu"></a>

```java
public java.lang.String getDomainOu();
```

- *Type:* java.lang.String

The Active Directory organizational unit for your DB instance to join.

Constraints:

* Must be in the distinguished name format.
* Can't be longer than 64 characters.

Example: `OU=mymanagedADtestOU,DC=mymanagedADtest,DC=mymanagedAD,DC=mydomain`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#domain_ou RdsDbInstance#domain_ou}

---

##### `enableCloudwatchLogsExports`<sup>Optional</sup> <a name="enableCloudwatchLogsExports" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.enableCloudwatchLogsExports"></a>

```java
public java.util.List<java.lang.String> getEnableCloudwatchLogsExports();
```

- *Type:* java.util.List<java.lang.String>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#enable_cloudwatch_logs_exports RdsDbInstance#enable_cloudwatch_logs_exports}

---

##### `enableIamDatabaseAuthentication`<sup>Optional</sup> <a name="enableIamDatabaseAuthentication" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.enableIamDatabaseAuthentication"></a>

```java
public java.lang.Boolean|IResolvable getEnableIamDatabaseAuthentication();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts.

By default, mapping is disabled.
This property is supported for RDS for MariaDB, RDS for MySQL, and RDS for PostgreSQL. For more information, see [IAM Database Authentication for MariaDB, MySQL, and PostgreSQL](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html) in the *Amazon RDS User Guide.*
*Amazon Aurora*
Not applicable. Mapping AWS IAM accounts to database accounts is managed by the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#enable_iam_database_authentication RdsDbInstance#enable_iam_database_authentication}

---

##### `enablePerformanceInsights`<sup>Optional</sup> <a name="enablePerformanceInsights" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.enablePerformanceInsights"></a>

```java
public java.lang.Boolean|IResolvable getEnablePerformanceInsights();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether to enable Performance Insights for the DB instance.

For more information, see [Using Amazon Performance Insights](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html) in the *Amazon RDS User Guide*.
This setting doesn't apply to RDS Custom DB instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#enable_performance_insights RdsDbInstance#enable_performance_insights}

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.engine"></a>

```java
public java.lang.String getEngine();
```

- *Type:* java.lang.String

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#engine RdsDbInstance#engine}

---

##### `engineLifecycleSupport`<sup>Optional</sup> <a name="engineLifecycleSupport" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.engineLifecycleSupport"></a>

```java
public java.lang.String getEngineLifecycleSupport();
```

- *Type:* java.lang.String

The lifecycle type for this DB instance.

By default, this value is set to `open-source-rds-extended-support`, which enrolls your DB instance into Amazon RDS Extended Support. At the end of standard support, you can avoid charges for Extended Support by setting the value to `open-source-rds-extended-support-disabled`. In this case, creating the DB instance will fail if the DB major version is past its end of standard support date.
This setting applies only to RDS for MySQL and RDS for PostgreSQL. For Amazon Aurora DB instances, the engine lifecycle support is managed by the DB cluster.
You can use this setting to enroll your DB instance into Amazon RDS Extended Support. With RDS Extended Support, you can run the selected major engine version on your DB instance past the end of standard support for that engine version. For more information, see [Amazon RDS Extended Support with Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/extended-support.html) in the *Amazon RDS User Guide*.
Valid Values: `open-source-rds-extended-support | open-source-rds-extended-support-disabled`
Default: `open-source-rds-extended-support`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#engine_lifecycle_support RdsDbInstance#engine_lifecycle_support}

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.engineVersion"></a>

```java
public java.lang.String getEngineVersion();
```

- *Type:* java.lang.String

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#engine_version RdsDbInstance#engine_version}

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

The number of I/O operations per second (IOPS) that the database provisions.

The value must be equal to or greater than 1000.
If you specify this property, you must follow the range of allowed ratios of your requested IOPS rate to the amount of storage that you allocate (IOPS to allocated storage). For example, you can provision an Oracle database instance with 1000 IOPS and 200 GiB of storage (a ratio of 5:1), or specify 2000 IOPS with 200 GiB of storage (a ratio of 10:1). For more information, see [Amazon RDS Provisioned IOPS Storage to Improve Performance](https://docs.aws.amazon.com/AmazonRDS/latest/DeveloperGuide/CHAP_Storage.html#USER_PIOPS) in the *Amazon RDS User Guide*.
If you specify `io1` for the `StorageType` property, then you must also specify the `Iops` property.
Constraints:

* For RDS for Db2, MariaDB, MySQL, Oracle, and PostgreSQL - Must be a multiple between .5 and 50 of the storage amount for the DB instance.
* For RDS for SQL Server - Must be a multiple between 1 and 50 of the storage amount for the DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#iops RdsDbInstance#iops}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

The ARN of the AWS KMS key that's used to encrypt the DB instance, such as ``arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef``.

If you enable the StorageEncrypted property but don't specify this property, AWS CloudFormation uses the default KMS key. If you specify this property, you must set the StorageEncrypted property to true.
If you specify the `SourceDBInstanceIdentifier` or `SourceDbiResourceId` property, don't specify this property. The value is inherited from the source DB instance, and if the DB instance is encrypted, the specified `KmsKeyId` property is used. However, if the source DB instance is in a different AWS Region, you must specify a KMS key ID.
If you specify the `SourceDBInstanceAutomatedBackupsArn` property, don't specify this property. The value is inherited from the source DB instance automated backup, and if the automated backup is encrypted, the specified `KmsKeyId` property is used.
If you create an encrypted read replica in a different AWS Region, then you must specify a KMS key for the destination AWS Region. KMS encryption keys are specific to the region that they're created in, and you can't use encryption keys from one region in another region.
If you specify the `DBSnapshotIdentifier` property, don't specify this property. The `StorageEncrypted` property value is inherited from the snapshot. If the DB instance is encrypted, the specified `KmsKeyId` property is also inherited from the snapshot.
If you specify `DBSecurityGroups`, AWS CloudFormation ignores this property. To specify both a security group and this property, you must use a VPC security group. For more information about Amazon RDS and VPC, see [Using Amazon RDS with Amazon VPC](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.html) in the *Amazon RDS User Guide*.
*Amazon Aurora*
Not applicable. The KMS key identifier is managed by the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#kms_key_id RdsDbInstance#kms_key_id}

---

##### `licenseModel`<sup>Optional</sup> <a name="licenseModel" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.licenseModel"></a>

```java
public java.lang.String getLicenseModel();
```

- *Type:* java.lang.String

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#license_model RdsDbInstance#license_model}

---

##### `manageMasterUserPassword`<sup>Optional</sup> <a name="manageMasterUserPassword" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.manageMasterUserPassword"></a>

```java
public java.lang.Boolean|IResolvable getManageMasterUserPassword();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether to manage the master user password with AWS Secrets Manager.

For more information, see [Password management with Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the *Amazon RDS User Guide.*
Constraints:

* Can't manage the master user password with AWS Secrets Manager if `MasterUserPassword` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#manage_master_user_password RdsDbInstance#manage_master_user_password}

---

##### `masterUserAuthenticationType`<sup>Optional</sup> <a name="masterUserAuthenticationType" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.masterUserAuthenticationType"></a>

```java
public java.lang.String getMasterUserAuthenticationType();
```

- *Type:* java.lang.String

Specifies the authentication type for the master user.

With IAM master user authentication, you can configure the master DB user with IAM database authentication when you create a DB instance.
You can specify one of the following values:

* `password` - Use standard database authentication with a password.
* `iam-db-auth` - Use IAM database authentication for the master user.

This option is only valid for RDS for MySQL, RDS for MariaDB, RDS for PostgreSQL, Aurora MySQL, and Aurora PostgreSQL engines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#master_user_authentication_type RdsDbInstance#master_user_authentication_type}

---

##### `masterUsername`<sup>Optional</sup> <a name="masterUsername" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.masterUsername"></a>

```java
public java.lang.String getMasterUsername();
```

- *Type:* java.lang.String

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#master_username RdsDbInstance#master_username}

---

##### `masterUserPassword`<sup>Optional</sup> <a name="masterUserPassword" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.masterUserPassword"></a>

```java
public java.lang.String getMasterUserPassword();
```

- *Type:* java.lang.String

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#master_user_password RdsDbInstance#master_user_password}

---

##### `masterUserSecret`<sup>Optional</sup> <a name="masterUserSecret" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.masterUserSecret"></a>

```java
public RdsDbInstanceMasterUserSecret getMasterUserSecret();
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecret">RdsDbInstanceMasterUserSecret</a>

The secret managed by RDS in AWS Secrets Manager for the master user password.

For more information, see [Password management with Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the *Amazon RDS User Guide.*

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#master_user_secret RdsDbInstance#master_user_secret}

---

##### `maxAllocatedStorage`<sup>Optional</sup> <a name="maxAllocatedStorage" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.maxAllocatedStorage"></a>

```java
public java.lang.Number getMaxAllocatedStorage();
```

- *Type:* java.lang.Number

The upper limit in gibibytes (GiB) to which Amazon RDS can automatically scale the storage of the DB instance.

For more information about this setting, including limitations that apply to it, see [Managing capacity automatically with Amazon RDS storage autoscaling](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.StorageTypes.html#USER_PIOPS.Autoscaling) in the *Amazon RDS User Guide*.
This setting doesn't apply to the following DB instances:

* Amazon Aurora (Storage is managed by the DB cluster.)
* RDS Custom

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#max_allocated_storage RdsDbInstance#max_allocated_storage}

---

##### `monitoringInterval`<sup>Optional</sup> <a name="monitoringInterval" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.monitoringInterval"></a>

```java
public java.lang.Number getMonitoringInterval();
```

- *Type:* java.lang.Number

The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance.

To disable collection of Enhanced Monitoring metrics, specify `0`.
If `MonitoringRoleArn` is specified, then you must set `MonitoringInterval` to a value other than `0`.
This setting doesn't apply to RDS Custom DB instances.
Valid Values: `0 | 1 | 5 | 10 | 15 | 30 | 60`
Default: `0`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#monitoring_interval RdsDbInstance#monitoring_interval}

---

##### `monitoringRoleArn`<sup>Optional</sup> <a name="monitoringRoleArn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.monitoringRoleArn"></a>

```java
public java.lang.String getMonitoringRoleArn();
```

- *Type:* java.lang.String

The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to Amazon CloudWatch Logs.

For example, `arn:aws:iam:123456789012:role/emaccess`. For information on creating a monitoring role, see [Setting Up and Enabling Enhanced Monitoring](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.OS.html#USER_Monitoring.OS.Enabling) in the *Amazon RDS User Guide*.
If `MonitoringInterval` is set to a value other than `0`, then you must supply a `MonitoringRoleArn` value.
This setting doesn't apply to RDS Custom DB instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#monitoring_role_arn RdsDbInstance#monitoring_role_arn}

---

##### `multiAz`<sup>Optional</sup> <a name="multiAz" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.multiAz"></a>

```java
public java.lang.Boolean|IResolvable getMultiAz();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether the DB instance is a Multi-AZ deployment.

You can't set the `AvailabilityZone` parameter if the DB instance is a Multi-AZ deployment.
This setting doesn't apply to Amazon Aurora because the DB instance Availability Zones (AZs) are managed by the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#multi_az RdsDbInstance#multi_az}

---

##### `ncharCharacterSetName`<sup>Optional</sup> <a name="ncharCharacterSetName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.ncharCharacterSetName"></a>

```java
public java.lang.String getNcharCharacterSetName();
```

- *Type:* java.lang.String

The name of the NCHAR character set for the Oracle DB instance.

This setting doesn't apply to RDS Custom DB instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#nchar_character_set_name RdsDbInstance#nchar_character_set_name}

---

##### `networkType`<sup>Optional</sup> <a name="networkType" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.networkType"></a>

```java
public java.lang.String getNetworkType();
```

- *Type:* java.lang.String

The network type of the DB instance.

Valid values:

* `IPV4`
* `DUAL`

The network type is determined by the `DBSubnetGroup` specified for the DB instance. A `DBSubnetGroup` can support only the IPv4 protocol or the IPv4 and IPv6 protocols (`DUAL`).
For more information, see [Working with a DB instance in a VPC](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html) in the *Amazon RDS User Guide.*

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#network_type RdsDbInstance#network_type}

---

##### `optionGroupName`<sup>Optional</sup> <a name="optionGroupName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.optionGroupName"></a>

```java
public java.lang.String getOptionGroupName();
```

- *Type:* java.lang.String

Indicates that the DB instance should be associated with the specified option group.

Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed from an option group. Also, that option group can't be removed from a DB instance once it is associated with a DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#option_group_name RdsDbInstance#option_group_name}

---

##### `performanceInsightsKmsKeyId`<sup>Optional</sup> <a name="performanceInsightsKmsKeyId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.performanceInsightsKmsKeyId"></a>

```java
public java.lang.String getPerformanceInsightsKmsKeyId();
```

- *Type:* java.lang.String

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#performance_insights_kms_key_id RdsDbInstance#performance_insights_kms_key_id}

---

##### `performanceInsightsRetentionPeriod`<sup>Optional</sup> <a name="performanceInsightsRetentionPeriod" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.performanceInsightsRetentionPeriod"></a>

```java
public java.lang.Number getPerformanceInsightsRetentionPeriod();
```

- *Type:* java.lang.Number

The number of days to retain Performance Insights data.

When creating a DB instance without enabling Performance Insights, you can't specify the parameter `PerformanceInsightsRetentionPeriod`.
This setting doesn't apply to RDS Custom DB instances.
Valid Values:

* `7`
* *month* * 31, where *month* is a number of months from 1-23. Examples: `93` (3 months * 31), `341` (11 months * 31), `589` (19 months * 31)
* `731`

Default: `7` days
If you specify a retention period that isn't valid, such as `94`, Amazon RDS returns an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#performance_insights_retention_period RdsDbInstance#performance_insights_retention_period}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.port"></a>

```java
public java.lang.String getPort();
```

- *Type:* java.lang.String

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#port RdsDbInstance#port}

---

##### `preferredBackupWindow`<sup>Optional</sup> <a name="preferredBackupWindow" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.preferredBackupWindow"></a>

```java
public java.lang.String getPreferredBackupWindow();
```

- *Type:* java.lang.String

The daily time range during which automated backups are created if automated backups are enabled, using the ``BackupRetentionPeriod`` parameter.

For more information, see [Backup Window](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html#USER_WorkingWithAutomatedBackups.BackupWindow) in the *Amazon RDS User Guide.*
Constraints:

* Must be in the format `hh24:mi-hh24:mi`.
* Must be in Universal Coordinated Time (UTC).
* Must not conflict with the preferred maintenance window.
* Must be at least 30 minutes.

*Amazon Aurora*
Not applicable. The daily time range for creating automated backups is managed by the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#preferred_backup_window RdsDbInstance#preferred_backup_window}

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.preferredMaintenanceWindow"></a>

```java
public java.lang.String getPreferredMaintenanceWindow();
```

- *Type:* java.lang.String

The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).

Format: `ddd:hh24:mi-ddd:hh24:mi`
The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week. To see the time blocks available, see [Maintaining a DB instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow) in the *Amazon RDS User Guide.*
This property applies when AWS CloudFormation initially creates the DB instance. If you use AWS CloudFormation to update the DB instance, those updates are applied immediately.
Constraints: Minimum 30-minute window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#preferred_maintenance_window RdsDbInstance#preferred_maintenance_window}

---

##### `processorFeatures`<sup>Optional</sup> <a name="processorFeatures" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.processorFeatures"></a>

```java
public IResolvable|java.util.List<RdsDbInstanceProcessorFeatures> getProcessorFeatures();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeatures">RdsDbInstanceProcessorFeatures</a>>

The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.

This setting doesn't apply to Amazon Aurora or RDS Custom DB instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#processor_features RdsDbInstance#processor_features}

---

##### `promotionTier`<sup>Optional</sup> <a name="promotionTier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.promotionTier"></a>

```java
public java.lang.Number getPromotionTier();
```

- *Type:* java.lang.Number

The order of priority in which an Aurora Replica is promoted to the primary instance after a failure of the existing primary instance.

For more information, see [Fault Tolerance for an Aurora DB Cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.AuroraHighAvailability.html#Aurora.Managing.FaultTolerance) in the *Amazon Aurora User Guide*.
This setting doesn't apply to RDS Custom DB instances.
Default: `1`
Valid Values: `0 - 15`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#promotion_tier RdsDbInstance#promotion_tier}

---

##### `publiclyAccessible`<sup>Optional</sup> <a name="publiclyAccessible" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.publiclyAccessible"></a>

```java
public java.lang.Boolean|IResolvable getPubliclyAccessible();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether the DB instance is an internet-facing instance.

If you specify true, AWS CloudFormation creates an instance with a publicly resolvable DNS name, which resolves to a public IP address. If you specify false, AWS CloudFormation creates an internal instance with a DNS name that resolves to a private IP address.
The default behavior value depends on your VPC setup and the database subnet group. For more information, see the `PubliclyAccessible` parameter in the [CreateDBInstance](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstance.html) in the *Amazon RDS API Reference*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#publicly_accessible RdsDbInstance#publicly_accessible}

---

##### `replicaMode`<sup>Optional</sup> <a name="replicaMode" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.replicaMode"></a>

```java
public java.lang.String getReplicaMode();
```

- *Type:* java.lang.String

The open mode of an Oracle read replica.

For more information, see [Working with Oracle Read Replicas for Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/oracle-read-replicas.html) in the *Amazon RDS User Guide*.
This setting is only supported in RDS for Oracle.
Default: `open-read-only`
Valid Values: `open-read-only` or `mounted`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#replica_mode RdsDbInstance#replica_mode}

---

##### `restoreTime`<sup>Optional</sup> <a name="restoreTime" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.restoreTime"></a>

```java
public java.lang.String getRestoreTime();
```

- *Type:* java.lang.String

The date and time to restore from.

This parameter applies to point-in-time recovery. For more information, see [Restoring a DB instance to a specified time](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIT.html) in the in the *Amazon RDS User Guide*.
Constraints:

* Must be a time in Universal Coordinated Time (UTC) format.
* Must be before the latest restorable time for the DB instance.
* Can't be specified if the `UseLatestRestorableTime` parameter is enabled.

Example: `2009-09-07T23:45:00Z`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#restore_time RdsDbInstance#restore_time}

---

##### `sourceDbClusterIdentifier`<sup>Optional</sup> <a name="sourceDbClusterIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.sourceDbClusterIdentifier"></a>

```java
public java.lang.String getSourceDbClusterIdentifier();
```

- *Type:* java.lang.String

The identifier of the Multi-AZ DB cluster that will act as the source for the read replica.

Each DB cluster can have up to 15 read replicas.
Constraints:

* Must be the identifier of an existing Multi-AZ DB cluster.
* Can't be specified if the `SourceDBInstanceIdentifier` parameter is also specified.
* The specified DB cluster must have automatic backups enabled, that is, its backup retention period must be greater than 0.
* The source DB cluster must be in the same AWS-Region as the read replica. Cross-Region replication isn't supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#source_db_cluster_identifier RdsDbInstance#source_db_cluster_identifier}

---

##### `sourceDbInstanceAutomatedBackupsArn`<sup>Optional</sup> <a name="sourceDbInstanceAutomatedBackupsArn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.sourceDbInstanceAutomatedBackupsArn"></a>

```java
public java.lang.String getSourceDbInstanceAutomatedBackupsArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the replicated automated backups from which to restore, for example, ``arn:aws:rds:us-east-1:123456789012:auto-backup:ab-L2IJCEXJP7XQ7HOJ4SIEXAMPLE``.

This setting doesn't apply to RDS Custom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#source_db_instance_automated_backups_arn RdsDbInstance#source_db_instance_automated_backups_arn}

---

##### `sourceDbInstanceIdentifier`<sup>Optional</sup> <a name="sourceDbInstanceIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.sourceDbInstanceIdentifier"></a>

```java
public java.lang.String getSourceDbInstanceIdentifier();
```

- *Type:* java.lang.String

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#source_db_instance_identifier RdsDbInstance#source_db_instance_identifier}

---

##### `sourceDbiResourceId`<sup>Optional</sup> <a name="sourceDbiResourceId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.sourceDbiResourceId"></a>

```java
public java.lang.String getSourceDbiResourceId();
```

- *Type:* java.lang.String

The resource ID of the source DB instance from which to restore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#source_dbi_resource_id RdsDbInstance#source_dbi_resource_id}

---

##### `sourceRegion`<sup>Optional</sup> <a name="sourceRegion" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.sourceRegion"></a>

```java
public java.lang.String getSourceRegion();
```

- *Type:* java.lang.String

The ID of the region that contains the source DB instance for the read replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#source_region RdsDbInstance#source_region}

---

##### `storageEncrypted`<sup>Optional</sup> <a name="storageEncrypted" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.storageEncrypted"></a>

```java
public java.lang.Boolean|IResolvable getStorageEncrypted();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A value that indicates whether the DB instance is encrypted.

By default, it isn't encrypted.
If you specify the `KmsKeyId` property, then you must enable encryption.
If you specify the `SourceDBInstanceIdentifier` or `SourceDbiResourceId` property, don't specify this property. The value is inherited from the source DB instance, and if the DB instance is encrypted, the specified `KmsKeyId` property is used.
If you specify the `SourceDBInstanceAutomatedBackupsArn` property, don't specify this property. The value is inherited from the source DB instance automated backup.
If you specify `DBSnapshotIdentifier` property, don't specify this property. The value is inherited from the snapshot.
*Amazon Aurora*
Not applicable. The encryption for DB instances is managed by the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#storage_encrypted RdsDbInstance#storage_encrypted}

---

##### `storageThroughput`<sup>Optional</sup> <a name="storageThroughput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.storageThroughput"></a>

```java
public java.lang.Number getStorageThroughput();
```

- *Type:* java.lang.Number

Specifies the storage throughput value, in mebibyte per second (MiBps), for the DB instance.

This setting applies only to the `gp3` storage type.
This setting doesn't apply to RDS Custom or Amazon Aurora.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#storage_throughput RdsDbInstance#storage_throughput}

---

##### `storageType`<sup>Optional</sup> <a name="storageType" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.storageType"></a>

```java
public java.lang.String getStorageType();
```

- *Type:* java.lang.String

The storage type to associate with the DB instance.

If you specify `io1`, `io2`, or `gp3`, you must also include a value for the `Iops` parameter.
This setting doesn't apply to Amazon Aurora DB instances. Storage is managed by the DB cluster.
Valid Values: `gp2 | gp3 | io1 | io2 | standard`
Default: `io1`, if the `Iops` parameter is specified. Otherwise, `gp3`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#storage_type RdsDbInstance#storage_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.tags"></a>

```java
public IResolvable|java.util.List<RdsDbInstanceTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTags">RdsDbInstanceTags</a>>

Tags to assign to the DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#tags RdsDbInstance#tags}

---

##### `tdeCredentialArn`<sup>Optional</sup> <a name="tdeCredentialArn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.tdeCredentialArn"></a>

```java
public java.lang.String getTdeCredentialArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#tde_credential_arn RdsDbInstance#tde_credential_arn}.

---

##### `tdeCredentialPassword`<sup>Optional</sup> <a name="tdeCredentialPassword" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.tdeCredentialPassword"></a>

```java
public java.lang.String getTdeCredentialPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#tde_credential_password RdsDbInstance#tde_credential_password}.

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

The time zone of the DB instance.

The time zone parameter is currently supported only by [RDS for Db2](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/db2-time-zone) and [RDS for SQL Server](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_SQLServer.html#SQLServer.Concepts.General.TimeZone).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#timezone RdsDbInstance#timezone}

---

##### `useDefaultProcessorFeatures`<sup>Optional</sup> <a name="useDefaultProcessorFeatures" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.useDefaultProcessorFeatures"></a>

```java
public java.lang.Boolean|IResolvable getUseDefaultProcessorFeatures();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether the DB instance class of the DB instance uses its default processor features.

This setting doesn't apply to RDS Custom DB instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#use_default_processor_features RdsDbInstance#use_default_processor_features}

---

##### `useLatestRestorableTime`<sup>Optional</sup> <a name="useLatestRestorableTime" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.useLatestRestorableTime"></a>

```java
public java.lang.Boolean|IResolvable getUseLatestRestorableTime();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether the DB instance is restored from the latest backup time.

By default, the DB instance isn't restored from the latest backup time. This parameter applies to point-in-time recovery. For more information, see [Restoring a DB instance to a specified time](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIT.html) in the in the *Amazon RDS User Guide*.
Constraints:

* Can't be specified if the `RestoreTime` parameter is provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#use_latest_restorable_time RdsDbInstance#use_latest_restorable_time}

---

##### `vpcSecurityGroups`<sup>Optional</sup> <a name="vpcSecurityGroups" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceConfig.property.vpcSecurityGroups"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#vpc_security_groups RdsDbInstance#vpc_security_groups}

---

### RdsDbInstanceEndpoint <a name="RdsDbInstanceEndpoint" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpoint.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_instance.RdsDbInstanceEndpoint;

RdsDbInstanceEndpoint.builder()
    .build();
```


### RdsDbInstanceListenerEndpoint <a name="RdsDbInstanceListenerEndpoint" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpoint.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_instance.RdsDbInstanceListenerEndpoint;

RdsDbInstanceListenerEndpoint.builder()
    .build();
```


### RdsDbInstanceMasterUserSecret <a name="RdsDbInstanceMasterUserSecret" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecret.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_instance.RdsDbInstanceMasterUserSecret;

RdsDbInstanceMasterUserSecret.builder()
//  .kmsKeyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecret.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | The AWS KMS key identifier that is used to encrypt the secret. |

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecret.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

The AWS KMS key identifier that is used to encrypt the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#kms_key_id RdsDbInstance#kms_key_id}

---

### RdsDbInstanceProcessorFeatures <a name="RdsDbInstanceProcessorFeatures" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeatures.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_instance.RdsDbInstanceProcessorFeatures;

RdsDbInstanceProcessorFeatures.builder()
//  .name(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeatures.property.name">name</a></code> | <code>java.lang.String</code> | The name of the processor feature. Valid names are ``coreCount`` and ``threadsPerCore``. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeatures.property.value">value</a></code> | <code>java.lang.String</code> | The value of a processor feature. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeatures.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the processor feature. Valid names are ``coreCount`` and ``threadsPerCore``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#name RdsDbInstance#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeatures.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value of a processor feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#value RdsDbInstance#value}

---

### RdsDbInstanceStatusInfos <a name="RdsDbInstanceStatusInfos" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfos"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfos.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_instance.RdsDbInstanceStatusInfos;

RdsDbInstanceStatusInfos.builder()
    .build();
```


### RdsDbInstanceTags <a name="RdsDbInstanceTags" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_instance.RdsDbInstanceTags;

RdsDbInstanceTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTags.property.key">key</a></code> | <code>java.lang.String</code> | A key is the required name of the tag. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTags.property.value">value</a></code> | <code>java.lang.String</code> | A value is the optional value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

A key is the required name of the tag.

The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with `aws:` or `rds:`. The string can only contain only the set of Unicode letters, digits, white-space, '*', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\p{L}\p{Z}\p{N}*.:/=+\-@]*)$").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#key RdsDbInstance#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

A value is the optional value of the tag.

The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with `aws:` or `rds:`. The string can only contain only the set of Unicode letters, digits, white-space, '*', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\p{L}\p{Z}\p{N}*.:/=+\-@]*)$").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_instance#value RdsDbInstance#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RdsDbInstanceAdditionalStorageVolumesList <a name="RdsDbInstanceAdditionalStorageVolumesList" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_instance.RdsDbInstanceAdditionalStorageVolumesList;

new RdsDbInstanceAdditionalStorageVolumesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.get"></a>

```java
public RdsDbInstanceAdditionalStorageVolumesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes">RdsDbInstanceAdditionalStorageVolumes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<RdsDbInstanceAdditionalStorageVolumes> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes">RdsDbInstanceAdditionalStorageVolumes</a>>

---


### RdsDbInstanceAdditionalStorageVolumesOutputReference <a name="RdsDbInstanceAdditionalStorageVolumesOutputReference" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_instance.RdsDbInstanceAdditionalStorageVolumesOutputReference;

new RdsDbInstanceAdditionalStorageVolumesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resetAllocatedStorage">resetAllocatedStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resetMaxAllocatedStorage">resetMaxAllocatedStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resetStorageOperationPercentProgress">resetStorageOperationPercentProgress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resetStorageOperationStatus">resetStorageOperationStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resetStorageThroughput">resetStorageThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resetStorageType">resetStorageType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resetVolumeName">resetVolumeName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllocatedStorage` <a name="resetAllocatedStorage" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resetAllocatedStorage"></a>

```java
public void resetAllocatedStorage()
```

##### `resetIops` <a name="resetIops" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resetIops"></a>

```java
public void resetIops()
```

##### `resetMaxAllocatedStorage` <a name="resetMaxAllocatedStorage" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resetMaxAllocatedStorage"></a>

```java
public void resetMaxAllocatedStorage()
```

##### `resetStorageOperationPercentProgress` <a name="resetStorageOperationPercentProgress" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resetStorageOperationPercentProgress"></a>

```java
public void resetStorageOperationPercentProgress()
```

##### `resetStorageOperationStatus` <a name="resetStorageOperationStatus" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resetStorageOperationStatus"></a>

```java
public void resetStorageOperationStatus()
```

##### `resetStorageThroughput` <a name="resetStorageThroughput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resetStorageThroughput"></a>

```java
public void resetStorageThroughput()
```

##### `resetStorageType` <a name="resetStorageType" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resetStorageType"></a>

```java
public void resetStorageType()
```

##### `resetVolumeName` <a name="resetVolumeName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.resetVolumeName"></a>

```java
public void resetVolumeName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.allocatedStorageInput">allocatedStorageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.iopsInput">iopsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.maxAllocatedStorageInput">maxAllocatedStorageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.storageOperationPercentProgressInput">storageOperationPercentProgressInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.storageOperationStatusInput">storageOperationStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.storageThroughputInput">storageThroughputInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.storageTypeInput">storageTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.volumeNameInput">volumeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.allocatedStorage">allocatedStorage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.iops">iops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.maxAllocatedStorage">maxAllocatedStorage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.storageOperationPercentProgress">storageOperationPercentProgress</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.storageOperationStatus">storageOperationStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.storageThroughput">storageThroughput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.storageType">storageType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.volumeName">volumeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes">RdsDbInstanceAdditionalStorageVolumes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allocatedStorageInput`<sup>Optional</sup> <a name="allocatedStorageInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.allocatedStorageInput"></a>

```java
public java.lang.String getAllocatedStorageInput();
```

- *Type:* java.lang.String

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.iopsInput"></a>

```java
public java.lang.Number getIopsInput();
```

- *Type:* java.lang.Number

---

##### `maxAllocatedStorageInput`<sup>Optional</sup> <a name="maxAllocatedStorageInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.maxAllocatedStorageInput"></a>

```java
public java.lang.Number getMaxAllocatedStorageInput();
```

- *Type:* java.lang.Number

---

##### `storageOperationPercentProgressInput`<sup>Optional</sup> <a name="storageOperationPercentProgressInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.storageOperationPercentProgressInput"></a>

```java
public java.lang.Number getStorageOperationPercentProgressInput();
```

- *Type:* java.lang.Number

---

##### `storageOperationStatusInput`<sup>Optional</sup> <a name="storageOperationStatusInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.storageOperationStatusInput"></a>

```java
public java.lang.String getStorageOperationStatusInput();
```

- *Type:* java.lang.String

---

##### `storageThroughputInput`<sup>Optional</sup> <a name="storageThroughputInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.storageThroughputInput"></a>

```java
public java.lang.Number getStorageThroughputInput();
```

- *Type:* java.lang.Number

---

##### `storageTypeInput`<sup>Optional</sup> <a name="storageTypeInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.storageTypeInput"></a>

```java
public java.lang.String getStorageTypeInput();
```

- *Type:* java.lang.String

---

##### `volumeNameInput`<sup>Optional</sup> <a name="volumeNameInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.volumeNameInput"></a>

```java
public java.lang.String getVolumeNameInput();
```

- *Type:* java.lang.String

---

##### `allocatedStorage`<sup>Required</sup> <a name="allocatedStorage" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.allocatedStorage"></a>

```java
public java.lang.String getAllocatedStorage();
```

- *Type:* java.lang.String

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

---

##### `maxAllocatedStorage`<sup>Required</sup> <a name="maxAllocatedStorage" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.maxAllocatedStorage"></a>

```java
public java.lang.Number getMaxAllocatedStorage();
```

- *Type:* java.lang.Number

---

##### `storageOperationPercentProgress`<sup>Required</sup> <a name="storageOperationPercentProgress" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.storageOperationPercentProgress"></a>

```java
public java.lang.Number getStorageOperationPercentProgress();
```

- *Type:* java.lang.Number

---

##### `storageOperationStatus`<sup>Required</sup> <a name="storageOperationStatus" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.storageOperationStatus"></a>

```java
public java.lang.String getStorageOperationStatus();
```

- *Type:* java.lang.String

---

##### `storageThroughput`<sup>Required</sup> <a name="storageThroughput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.storageThroughput"></a>

```java
public java.lang.Number getStorageThroughput();
```

- *Type:* java.lang.Number

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.storageType"></a>

```java
public java.lang.String getStorageType();
```

- *Type:* java.lang.String

---

##### `volumeName`<sup>Required</sup> <a name="volumeName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.volumeName"></a>

```java
public java.lang.String getVolumeName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumesOutputReference.property.internalValue"></a>

```java
public IResolvable|RdsDbInstanceAdditionalStorageVolumes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAdditionalStorageVolumes">RdsDbInstanceAdditionalStorageVolumes</a>

---


### RdsDbInstanceAssociatedRolesList <a name="RdsDbInstanceAssociatedRolesList" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_instance.RdsDbInstanceAssociatedRolesList;

new RdsDbInstanceAssociatedRolesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.get"></a>

```java
public RdsDbInstanceAssociatedRolesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRoles">RdsDbInstanceAssociatedRoles</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<RdsDbInstanceAssociatedRoles> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRoles">RdsDbInstanceAssociatedRoles</a>>

---


### RdsDbInstanceAssociatedRolesOutputReference <a name="RdsDbInstanceAssociatedRolesOutputReference" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_instance.RdsDbInstanceAssociatedRolesOutputReference;

new RdsDbInstanceAssociatedRolesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.resetFeatureName">resetFeatureName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFeatureName` <a name="resetFeatureName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.resetFeatureName"></a>

```java
public void resetFeatureName()
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.resetRoleArn"></a>

```java
public void resetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.property.featureNameInput">featureNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.property.featureName">featureName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRoles">RdsDbInstanceAssociatedRoles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `featureNameInput`<sup>Optional</sup> <a name="featureNameInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.property.featureNameInput"></a>

```java
public java.lang.String getFeatureNameInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `featureName`<sup>Required</sup> <a name="featureName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.property.featureName"></a>

```java
public java.lang.String getFeatureName();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRolesOutputReference.property.internalValue"></a>

```java
public IResolvable|RdsDbInstanceAssociatedRoles getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceAssociatedRoles">RdsDbInstanceAssociatedRoles</a>

---


### RdsDbInstanceCertificateDetailsOutputReference <a name="RdsDbInstanceCertificateDetailsOutputReference" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_instance.RdsDbInstanceCertificateDetailsOutputReference;

new RdsDbInstanceCertificateDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.property.caIdentifier">caIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.property.validTill">validTill</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetails">RdsDbInstanceCertificateDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `caIdentifier`<sup>Required</sup> <a name="caIdentifier" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.property.caIdentifier"></a>

```java
public java.lang.String getCaIdentifier();
```

- *Type:* java.lang.String

---

##### `validTill`<sup>Required</sup> <a name="validTill" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.property.validTill"></a>

```java
public java.lang.String getValidTill();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetailsOutputReference.property.internalValue"></a>

```java
public RdsDbInstanceCertificateDetails getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceCertificateDetails">RdsDbInstanceCertificateDetails</a>

---


### RdsDbInstanceEndpointOutputReference <a name="RdsDbInstanceEndpointOutputReference" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_instance.RdsDbInstanceEndpointOutputReference;

new RdsDbInstanceEndpointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.property.hostedZoneId">hostedZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.property.port">port</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpoint">RdsDbInstanceEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.property.hostedZoneId"></a>

```java
public java.lang.String getHostedZoneId();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.property.port"></a>

```java
public java.lang.String getPort();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpointOutputReference.property.internalValue"></a>

```java
public RdsDbInstanceEndpoint getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceEndpoint">RdsDbInstanceEndpoint</a>

---


### RdsDbInstanceListenerEndpointOutputReference <a name="RdsDbInstanceListenerEndpointOutputReference" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_instance.RdsDbInstanceListenerEndpointOutputReference;

new RdsDbInstanceListenerEndpointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.property.hostedZoneId">hostedZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.property.port">port</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpoint">RdsDbInstanceListenerEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.property.hostedZoneId"></a>

```java
public java.lang.String getHostedZoneId();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.property.port"></a>

```java
public java.lang.String getPort();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpointOutputReference.property.internalValue"></a>

```java
public RdsDbInstanceListenerEndpoint getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceListenerEndpoint">RdsDbInstanceListenerEndpoint</a>

---


### RdsDbInstanceMasterUserSecretOutputReference <a name="RdsDbInstanceMasterUserSecretOutputReference" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_instance.RdsDbInstanceMasterUserSecretOutputReference;

new RdsDbInstanceMasterUserSecretOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecret">RdsDbInstanceMasterUserSecret</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecretOutputReference.property.internalValue"></a>

```java
public IResolvable|RdsDbInstanceMasterUserSecret getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceMasterUserSecret">RdsDbInstanceMasterUserSecret</a>

---


### RdsDbInstanceProcessorFeaturesList <a name="RdsDbInstanceProcessorFeaturesList" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_instance.RdsDbInstanceProcessorFeaturesList;

new RdsDbInstanceProcessorFeaturesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.get"></a>

```java
public RdsDbInstanceProcessorFeaturesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeatures">RdsDbInstanceProcessorFeatures</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<RdsDbInstanceProcessorFeatures> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeatures">RdsDbInstanceProcessorFeatures</a>>

---


### RdsDbInstanceProcessorFeaturesOutputReference <a name="RdsDbInstanceProcessorFeaturesOutputReference" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_instance.RdsDbInstanceProcessorFeaturesOutputReference;

new RdsDbInstanceProcessorFeaturesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeatures">RdsDbInstanceProcessorFeatures</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeaturesOutputReference.property.internalValue"></a>

```java
public IResolvable|RdsDbInstanceProcessorFeatures getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceProcessorFeatures">RdsDbInstanceProcessorFeatures</a>

---


### RdsDbInstanceStatusInfosList <a name="RdsDbInstanceStatusInfosList" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_instance.RdsDbInstanceStatusInfosList;

new RdsDbInstanceStatusInfosList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.get"></a>

```java
public RdsDbInstanceStatusInfosOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### RdsDbInstanceStatusInfosOutputReference <a name="RdsDbInstanceStatusInfosOutputReference" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_instance.RdsDbInstanceStatusInfosOutputReference;

new RdsDbInstanceStatusInfosOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.property.normal">normal</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.property.statusType">statusType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfos">RdsDbInstanceStatusInfos</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `normal`<sup>Required</sup> <a name="normal" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.property.normal"></a>

```java
public IResolvable getNormal();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `statusType`<sup>Required</sup> <a name="statusType" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.property.statusType"></a>

```java
public java.lang.String getStatusType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfosOutputReference.property.internalValue"></a>

```java
public RdsDbInstanceStatusInfos getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceStatusInfos">RdsDbInstanceStatusInfos</a>

---


### RdsDbInstanceTagsList <a name="RdsDbInstanceTagsList" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_instance.RdsDbInstanceTagsList;

new RdsDbInstanceTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.get"></a>

```java
public RdsDbInstanceTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTags">RdsDbInstanceTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<RdsDbInstanceTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTags">RdsDbInstanceTags</a>>

---


### RdsDbInstanceTagsOutputReference <a name="RdsDbInstanceTagsOutputReference" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_instance.RdsDbInstanceTagsOutputReference;

new RdsDbInstanceTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTags">RdsDbInstanceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|RdsDbInstanceTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsDbInstance.RdsDbInstanceTags">RdsDbInstanceTags</a>

---



