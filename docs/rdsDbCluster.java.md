# `rdsDbCluster` Submodule <a name="`rdsDbCluster` Submodule" id="@cdktn/provider-awscc.rdsDbCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsDbCluster <a name="RdsDbCluster" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster awscc_rds_db_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_cluster.RdsDbCluster;

RdsDbCluster.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .allocatedStorage(java.lang.Number)
//  .associatedRoles(IResolvable|java.util.List<RdsDbClusterAssociatedRoles>)
//  .autoMinorVersionUpgrade(java.lang.Boolean|IResolvable)
//  .availabilityZones(java.util.List<java.lang.String>)
//  .backtrackWindow(java.lang.Number)
//  .backupRetentionPeriod(java.lang.Number)
//  .clusterScalabilityType(java.lang.String)
//  .copyTagsToSnapshot(java.lang.Boolean|IResolvable)
//  .databaseInsightsMode(java.lang.String)
//  .databaseName(java.lang.String)
//  .dbClusterIdentifier(java.lang.String)
//  .dbClusterInstanceClass(java.lang.String)
//  .dbClusterParameterGroupName(java.lang.String)
//  .dbInstanceParameterGroupName(java.lang.String)
//  .dbSubnetGroupName(java.lang.String)
//  .dbSystemId(java.lang.String)
//  .deleteAutomatedBackups(java.lang.Boolean|IResolvable)
//  .deletionProtection(java.lang.Boolean|IResolvable)
//  .domain(java.lang.String)
//  .domainIamRoleName(java.lang.String)
//  .enableCloudwatchLogsExports(java.util.List<java.lang.String>)
//  .enableGlobalWriteForwarding(java.lang.Boolean|IResolvable)
//  .enableHttpEndpoint(java.lang.Boolean|IResolvable)
//  .enableIamDatabaseAuthentication(java.lang.Boolean|IResolvable)
//  .enableLocalWriteForwarding(java.lang.Boolean|IResolvable)
//  .engine(java.lang.String)
//  .engineLifecycleSupport(java.lang.String)
//  .engineMode(java.lang.String)
//  .engineVersion(java.lang.String)
//  .globalClusterIdentifier(java.lang.String)
//  .iops(java.lang.Number)
//  .kmsKeyId(java.lang.String)
//  .manageMasterUserPassword(java.lang.Boolean|IResolvable)
//  .masterUserAuthenticationType(java.lang.String)
//  .masterUsername(java.lang.String)
//  .masterUserPassword(java.lang.String)
//  .masterUserSecret(RdsDbClusterMasterUserSecret)
//  .monitoringInterval(java.lang.Number)
//  .monitoringRoleArn(java.lang.String)
//  .networkType(java.lang.String)
//  .performanceInsightsEnabled(java.lang.Boolean|IResolvable)
//  .performanceInsightsKmsKeyId(java.lang.String)
//  .performanceInsightsRetentionPeriod(java.lang.Number)
//  .port(java.lang.Number)
//  .preferredBackupWindow(java.lang.String)
//  .preferredMaintenanceWindow(java.lang.String)
//  .publiclyAccessible(java.lang.Boolean|IResolvable)
//  .replicationSourceIdentifier(java.lang.String)
//  .restoreToTime(java.lang.String)
//  .restoreType(java.lang.String)
//  .scalingConfiguration(RdsDbClusterScalingConfiguration)
//  .serverlessV2ScalingConfiguration(RdsDbClusterServerlessV2ScalingConfiguration)
//  .snapshotIdentifier(java.lang.String)
//  .sourceDbClusterIdentifier(java.lang.String)
//  .sourceDbClusterResourceId(java.lang.String)
//  .sourceRegion(java.lang.String)
//  .storageEncrypted(java.lang.Boolean|IResolvable)
//  .storageType(java.lang.String)
//  .tags(IResolvable|java.util.List<RdsDbClusterTags>)
//  .useLatestRestorableTime(java.lang.Boolean|IResolvable)
//  .vpcSecurityGroupIds(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.allocatedStorage">allocatedStorage</a></code> | <code>java.lang.Number</code> | The amount of storage in gibibytes (GiB) to allocate to each DB instance in the Multi-AZ DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.associatedRoles">associatedRoles</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRoles">RdsDbClusterAssociatedRoles</a>></code> | Provides a list of the AWS Identity and Access Management (IAM) roles that are associated with the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether minor engine upgrades are applied automatically to the DB cluster during the maintenance window. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | A list of Availability Zones (AZs) where instances in the DB cluster can be created. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.backtrackWindow">backtrackWindow</a></code> | <code>java.lang.Number</code> | The target backtrack window, in seconds. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.backupRetentionPeriod">backupRetentionPeriod</a></code> | <code>java.lang.Number</code> | The number of days for which automated backups are retained. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.clusterScalabilityType">clusterScalabilityType</a></code> | <code>java.lang.String</code> | Specifies the scalability mode of the Aurora DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.copyTagsToSnapshot">copyTagsToSnapshot</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A value that indicates whether to copy all tags from the DB cluster to snapshots of the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.databaseInsightsMode">databaseInsightsMode</a></code> | <code>java.lang.String</code> | The mode of Database Insights to enable for the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.databaseName">databaseName</a></code> | <code>java.lang.String</code> | The name of your database. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.dbClusterIdentifier">dbClusterIdentifier</a></code> | <code>java.lang.String</code> | The DB cluster identifier. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.dbClusterInstanceClass">dbClusterInstanceClass</a></code> | <code>java.lang.String</code> | The compute and memory capacity of each DB instance in the Multi-AZ DB cluster, for example ``db.m6gd.xlarge``. Not all DB instance classes are available in all AWS-Regions, or for all database engines.  For the full list of DB instance classes and availability for your engine, see [DB instance class](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html) in the *Amazon RDS User Guide*.  This setting is required to create a Multi-AZ DB cluster.  Valid for Cluster Type: Multi-AZ DB clusters only. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.dbClusterParameterGroupName">dbClusterParameterGroupName</a></code> | <code>java.lang.String</code> | The name of the DB cluster parameter group to associate with this DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.dbInstanceParameterGroupName">dbInstanceParameterGroupName</a></code> | <code>java.lang.String</code> | The name of the DB parameter group to apply to all instances of the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.dbSubnetGroupName">dbSubnetGroupName</a></code> | <code>java.lang.String</code> | A DB subnet group that you want to associate with this DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.dbSystemId">dbSystemId</a></code> | <code>java.lang.String</code> | Reserved for future use. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.deleteAutomatedBackups">deleteAutomatedBackups</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether to remove automated backups immediately after the DB cluster is deleted. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A value that indicates whether the DB cluster has deletion protection enabled. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.domain">domain</a></code> | <code>java.lang.String</code> | Indicates the directory ID of the Active Directory to create the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.domainIamRoleName">domainIamRoleName</a></code> | <code>java.lang.String</code> | Specifies the name of the IAM role to use when making API calls to the Directory Service. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.enableCloudwatchLogsExports">enableCloudwatchLogsExports</a></code> | <code>java.util.List<java.lang.String></code> | The list of log types that need to be enabled for exporting to CloudWatch Logs. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.enableGlobalWriteForwarding">enableGlobalWriteForwarding</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether to enable this DB cluster to forward write operations to the primary cluster of a global cluster (Aurora global database). |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.enableHttpEndpoint">enableHttpEndpoint</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether to enable the HTTP endpoint for the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.enableIamDatabaseAuthentication">enableIamDatabaseAuthentication</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.enableLocalWriteForwarding">enableLocalWriteForwarding</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether read replicas can forward write operations to the writer DB instance in the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.engine">engine</a></code> | <code>java.lang.String</code> | The name of the database engine to be used for this DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.engineLifecycleSupport">engineLifecycleSupport</a></code> | <code>java.lang.String</code> | The life cycle type for this DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.engineMode">engineMode</a></code> | <code>java.lang.String</code> | The DB engine mode of the DB cluster, either ``provisioned`` or ``serverless``. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | The version number of the database engine to use. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.globalClusterIdentifier">globalClusterIdentifier</a></code> | <code>java.lang.String</code> | If you are configuring an Aurora global database cluster and want your Aurora DB cluster to be a secondary member in the global database cluster, specify the global cluster ID of the global database cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.iops">iops</a></code> | <code>java.lang.Number</code> | The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for each DB instance in the Multi-AZ DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the AWS KMS key that is used to encrypt the database instances in the DB cluster, such as ``arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef``. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.manageMasterUserPassword">manageMasterUserPassword</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether to manage the master user password with AWS Secrets Manager. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.masterUserAuthenticationType">masterUserAuthenticationType</a></code> | <code>java.lang.String</code> | Specifies the authentication type for the master user. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.masterUsername">masterUsername</a></code> | <code>java.lang.String</code> | The name of the master user for the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.masterUserPassword">masterUserPassword</a></code> | <code>java.lang.String</code> | The master password for the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.masterUserSecret">masterUserSecret</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecret">RdsDbClusterMasterUserSecret</a></code> | The secret managed by RDS in AWS Secrets Manager for the master user password. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.monitoringInterval">monitoringInterval</a></code> | <code>java.lang.Number</code> | The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.monitoringRoleArn">monitoringRoleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) for the IAM role that permits RDS to send Enhanced Monitoring metrics to Amazon CloudWatch Logs. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.networkType">networkType</a></code> | <code>java.lang.String</code> | The network type of the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.performanceInsightsEnabled">performanceInsightsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether to turn on Performance Insights for the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.performanceInsightsKmsKeyId">performanceInsightsKmsKeyId</a></code> | <code>java.lang.String</code> | The AWS KMS key identifier for encryption of Performance Insights data. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.performanceInsightsRetentionPeriod">performanceInsightsRetentionPeriod</a></code> | <code>java.lang.Number</code> | The number of days to retain Performance Insights data. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.port">port</a></code> | <code>java.lang.Number</code> | The port number on which the DB instances in the DB cluster accept connections. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.preferredBackupWindow">preferredBackupWindow</a></code> | <code>java.lang.String</code> | The daily time range during which automated backups are created. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>java.lang.String</code> | The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC). |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.publiclyAccessible">publiclyAccessible</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether the DB cluster is publicly accessible. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.replicationSourceIdentifier">replicationSourceIdentifier</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the source DB instance or DB cluster if this DB cluster is created as a read replica. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.restoreToTime">restoreToTime</a></code> | <code>java.lang.String</code> | The date and time to restore the DB cluster to. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.restoreType">restoreType</a></code> | <code>java.lang.String</code> | The type of restore to be performed. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.scalingConfiguration">scalingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration">RdsDbClusterScalingConfiguration</a></code> | The scaling configuration of an Aurora Serverless v1 DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.serverlessV2ScalingConfiguration">serverlessV2ScalingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfiguration">RdsDbClusterServerlessV2ScalingConfiguration</a></code> | The scaling configuration of an Aurora Serverless V2 DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.snapshotIdentifier">snapshotIdentifier</a></code> | <code>java.lang.String</code> | The identifier for the DB snapshot or DB cluster snapshot to restore from. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.sourceDbClusterIdentifier">sourceDbClusterIdentifier</a></code> | <code>java.lang.String</code> | When restoring a DB cluster to a point in time, the identifier of the source DB cluster from which to restore. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.sourceDbClusterResourceId">sourceDbClusterResourceId</a></code> | <code>java.lang.String</code> | The resource ID of the source DB cluster from which to restore. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.sourceRegion">sourceRegion</a></code> | <code>java.lang.String</code> | The AWS Region which contains the source DB cluster when replicating a DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.storageEncrypted">storageEncrypted</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether the DB cluster is encrypted. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.storageType">storageType</a></code> | <code>java.lang.String</code> | The storage type to associate with the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTags">RdsDbClusterTags</a>></code> | Tags to assign to the DB cluster.  Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.useLatestRestorableTime">useLatestRestorableTime</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A value that indicates whether to restore the DB cluster to the latest restorable backup time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | A list of EC2 VPC security groups to associate with this DB cluster. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `allocatedStorage`<sup>Optional</sup> <a name="allocatedStorage" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.allocatedStorage"></a>

- *Type:* java.lang.Number

The amount of storage in gibibytes (GiB) to allocate to each DB instance in the Multi-AZ DB cluster.

Valid for Cluster Type: Multi-AZ DB clusters only
This setting is required to create a Multi-AZ DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#allocated_storage RdsDbCluster#allocated_storage}

---

##### `associatedRoles`<sup>Optional</sup> <a name="associatedRoles" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.associatedRoles"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRoles">RdsDbClusterAssociatedRoles</a>>

Provides a list of the AWS Identity and Access Management (IAM) roles that are associated with the DB cluster.

IAM roles that are associated with a DB cluster grant permission for the DB cluster to access other Amazon Web Services on your behalf.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#associated_roles RdsDbCluster#associated_roles}

---

##### `autoMinorVersionUpgrade`<sup>Optional</sup> <a name="autoMinorVersionUpgrade" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.autoMinorVersionUpgrade"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether minor engine upgrades are applied automatically to the DB cluster during the maintenance window.

By default, minor engine upgrades are applied automatically.
Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB cluster.
For more information about automatic minor version upgrades, see [Automatically upgrading the minor engine version](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Upgrading.html#USER_UpgradeDBInstance.Upgrading.AutoMinorVersionUpgrades).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#auto_minor_version_upgrade RdsDbCluster#auto_minor_version_upgrade}

---

##### `availabilityZones`<sup>Optional</sup> <a name="availabilityZones" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.availabilityZones"></a>

- *Type:* java.util.List<java.lang.String>

A list of Availability Zones (AZs) where instances in the DB cluster can be created.

For information on AWS Regions and Availability Zones, see [Choosing the Regions and Availability Zones](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.RegionsAndAvailabilityZones.html) in the *Amazon Aurora User Guide*.
Valid for: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#availability_zones RdsDbCluster#availability_zones}

---

##### `backtrackWindow`<sup>Optional</sup> <a name="backtrackWindow" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.backtrackWindow"></a>

- *Type:* java.lang.Number

The target backtrack window, in seconds.

To disable backtracking, set this value to `0`.
Valid for Cluster Type: Aurora MySQL DB clusters only
Default: `0`
Constraints:

* If specified, this value must be set to a number from 0 to 259,200 (72 hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#backtrack_window RdsDbCluster#backtrack_window}

---

##### `backupRetentionPeriod`<sup>Optional</sup> <a name="backupRetentionPeriod" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.backupRetentionPeriod"></a>

- *Type:* java.lang.Number

The number of days for which automated backups are retained.

Default: 1
Constraints:

* Must be a value from 1 to 35

Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#backup_retention_period RdsDbCluster#backup_retention_period}

---

##### `clusterScalabilityType`<sup>Optional</sup> <a name="clusterScalabilityType" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.clusterScalabilityType"></a>

- *Type:* java.lang.String

Specifies the scalability mode of the Aurora DB cluster.

When set to `limitless`, the cluster operates as an Aurora Limitless Database, allowing you to create a DB shard group for horizontal scaling (sharding) capabilities. When set to `standard` (the default), the cluster uses normal DB instance creation.
*Important:* Automated backup retention isn't supported with Aurora Limitless Database clusters. If you set this property to `limitless`, you cannot set `DeleteAutomatedBackups` to `false`. To create a backup, use manual snapshots instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#cluster_scalability_type RdsDbCluster#cluster_scalability_type}

---

##### `copyTagsToSnapshot`<sup>Optional</sup> <a name="copyTagsToSnapshot" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.copyTagsToSnapshot"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A value that indicates whether to copy all tags from the DB cluster to snapshots of the DB cluster.

The default is not to copy them.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#copy_tags_to_snapshot RdsDbCluster#copy_tags_to_snapshot}

---

##### `databaseInsightsMode`<sup>Optional</sup> <a name="databaseInsightsMode" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.databaseInsightsMode"></a>

- *Type:* java.lang.String

The mode of Database Insights to enable for the DB cluster.

If you set this value to `advanced`, you must also set the `PerformanceInsightsEnabled` parameter to `true` and the `PerformanceInsightsRetentionPeriod` parameter to 465.
Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#database_insights_mode RdsDbCluster#database_insights_mode}

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.databaseName"></a>

- *Type:* java.lang.String

The name of your database.

If you don't provide a name, then Amazon RDS won't create a database in this DB cluster. For naming constraints, see [Naming Constraints](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_Limits.html#RDS_Limits.Constraints) in the *Amazon Aurora User Guide*.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#database_name RdsDbCluster#database_name}

---

##### `dbClusterIdentifier`<sup>Optional</sup> <a name="dbClusterIdentifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.dbClusterIdentifier"></a>

- *Type:* java.lang.String

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

##### `dbClusterInstanceClass`<sup>Optional</sup> <a name="dbClusterInstanceClass" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.dbClusterInstanceClass"></a>

- *Type:* java.lang.String

The compute and memory capacity of each DB instance in the Multi-AZ DB cluster, for example ``db.m6gd.xlarge``. Not all DB instance classes are available in all AWS-Regions, or for all database engines.  For the full list of DB instance classes and availability for your engine, see [DB instance class](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html) in the *Amazon RDS User Guide*.  This setting is required to create a Multi-AZ DB cluster.  Valid for Cluster Type: Multi-AZ DB clusters only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#db_cluster_instance_class RdsDbCluster#db_cluster_instance_class}

---

##### `dbClusterParameterGroupName`<sup>Optional</sup> <a name="dbClusterParameterGroupName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.dbClusterParameterGroupName"></a>

- *Type:* java.lang.String

The name of the DB cluster parameter group to associate with this DB cluster.

If you apply a parameter group to an existing DB cluster, then its DB instances might need to reboot. This can result in an outage while the DB instances are rebooting.
If you apply a change to parameter group associated with a stopped DB cluster, then the update stack waits until the DB cluster is started.
To list all of the available DB cluster parameter group names, use the following command:
`aws rds describe-db-cluster-parameter-groups --query "DBClusterParameterGroups[].DBClusterParameterGroupName" --output text`
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#db_cluster_parameter_group_name RdsDbCluster#db_cluster_parameter_group_name}

---

##### `dbInstanceParameterGroupName`<sup>Optional</sup> <a name="dbInstanceParameterGroupName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.dbInstanceParameterGroupName"></a>

- *Type:* java.lang.String

The name of the DB parameter group to apply to all instances of the DB cluster.

When you apply a parameter group using the `DBInstanceParameterGroupName` parameter, the DB cluster isn't rebooted automatically. Also, parameter changes are applied immediately rather than during the next maintenance window.
Valid for Cluster Type: Aurora DB clusters only
Default: The existing name setting
Constraints:

* The DB parameter group must be in the same DB parameter group family as this DB cluster.
* The `DBInstanceParameterGroupName` parameter is valid in combination with the `AllowMajorVersionUpgrade` parameter for a major version upgrade only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#db_instance_parameter_group_name RdsDbCluster#db_instance_parameter_group_name}

---

##### `dbSubnetGroupName`<sup>Optional</sup> <a name="dbSubnetGroupName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.dbSubnetGroupName"></a>

- *Type:* java.lang.String

A DB subnet group that you want to associate with this DB cluster.

If you are restoring a DB cluster to a point in time with `RestoreType` set to `copy-on-write`, and don't specify a DB subnet group name, then the DB cluster is restored with a default DB subnet group.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#db_subnet_group_name RdsDbCluster#db_subnet_group_name}

---

##### `dbSystemId`<sup>Optional</sup> <a name="dbSystemId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.dbSystemId"></a>

- *Type:* java.lang.String

Reserved for future use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#db_system_id RdsDbCluster#db_system_id}

---

##### `deleteAutomatedBackups`<sup>Optional</sup> <a name="deleteAutomatedBackups" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.deleteAutomatedBackups"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether to remove automated backups immediately after the DB cluster is deleted.

This parameter isn't case-sensitive. The default is to remove automated backups immediately after the DB cluster is deleted, unless the AWS Backup policy specifies a point-in-time restore rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#delete_automated_backups RdsDbCluster#delete_automated_backups}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.deletionProtection"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A value that indicates whether the DB cluster has deletion protection enabled.

The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#deletion_protection RdsDbCluster#deletion_protection}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.domain"></a>

- *Type:* java.lang.String

Indicates the directory ID of the Active Directory to create the DB cluster.

For Amazon Aurora DB clusters, Amazon RDS can use Kerberos authentication to authenticate users that connect to the DB cluster.
For more information, see [Kerberos authentication](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/kerberos-authentication.html) in the *Amazon Aurora User Guide*.
Valid for: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#domain RdsDbCluster#domain}

---

##### `domainIamRoleName`<sup>Optional</sup> <a name="domainIamRoleName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.domainIamRoleName"></a>

- *Type:* java.lang.String

Specifies the name of the IAM role to use when making API calls to the Directory Service.

Valid for: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#domain_iam_role_name RdsDbCluster#domain_iam_role_name}

---

##### `enableCloudwatchLogsExports`<sup>Optional</sup> <a name="enableCloudwatchLogsExports" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.enableCloudwatchLogsExports"></a>

- *Type:* java.util.List<java.lang.String>

The list of log types that need to be enabled for exporting to CloudWatch Logs.

The values in the list depend on the DB engine being used. For more information, see [Publishing Database Logs to Amazon CloudWatch Logs](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch) in the *Amazon Aurora User Guide*.
*Aurora MySQL*
Valid values: `audit`, `error`, `general`, `slowquery`
*Aurora PostgreSQL*
Valid values: `postgresql`
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#enable_cloudwatch_logs_exports RdsDbCluster#enable_cloudwatch_logs_exports}

---

##### `enableGlobalWriteForwarding`<sup>Optional</sup> <a name="enableGlobalWriteForwarding" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.enableGlobalWriteForwarding"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether to enable this DB cluster to forward write operations to the primary cluster of a global cluster (Aurora global database).

By default, write operations are not allowed on Aurora DB clusters that are secondary clusters in an Aurora global database.
You can set this value only on Aurora DB clusters that are members of an Aurora global database. With this parameter enabled, a secondary cluster can forward writes to the current primary cluster, and the resulting changes are replicated back to this cluster. For the primary DB cluster of an Aurora global database, this value is used immediately if the primary is demoted by a global cluster API operation, but it does nothing until then.
Valid for Cluster Type: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#enable_global_write_forwarding RdsDbCluster#enable_global_write_forwarding}

---

##### `enableHttpEndpoint`<sup>Optional</sup> <a name="enableHttpEndpoint" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.enableHttpEndpoint"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether to enable the HTTP endpoint for the DB cluster.

By default, the HTTP endpoint isn't enabled.
When enabled, the HTTP endpoint provides a connectionless web service API (RDS Data API) for running SQL queries on the DB cluster. You can also query your database from inside the RDS console with the RDS query editor.
For more information, see [Using RDS Data API](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html) in the *Amazon Aurora User Guide*.
Valid for Cluster Type: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#enable_http_endpoint RdsDbCluster#enable_http_endpoint}

---

##### `enableIamDatabaseAuthentication`<sup>Optional</sup> <a name="enableIamDatabaseAuthentication" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.enableIamDatabaseAuthentication"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts.

By default, mapping is disabled.
For more information, see [IAM Database Authentication](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html) in the *Amazon Aurora User Guide.*
Valid for: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#enable_iam_database_authentication RdsDbCluster#enable_iam_database_authentication}

---

##### `enableLocalWriteForwarding`<sup>Optional</sup> <a name="enableLocalWriteForwarding" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.enableLocalWriteForwarding"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether read replicas can forward write operations to the writer DB instance in the DB cluster.

By default, write operations aren't allowed on reader DB instances.
Valid for: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#enable_local_write_forwarding RdsDbCluster#enable_local_write_forwarding}

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.engine"></a>

- *Type:* java.lang.String

The name of the database engine to be used for this DB cluster.

Valid Values:

* `aurora-mysql`
* `aurora-postgresql`
* `mysql`
* `postgres`

Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#engine RdsDbCluster#engine}

---

##### `engineLifecycleSupport`<sup>Optional</sup> <a name="engineLifecycleSupport" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.engineLifecycleSupport"></a>

- *Type:* java.lang.String

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

##### `engineMode`<sup>Optional</sup> <a name="engineMode" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.engineMode"></a>

- *Type:* java.lang.String

The DB engine mode of the DB cluster, either ``provisioned`` or ``serverless``.

The `serverless` engine mode only applies for Aurora Serverless v1 DB clusters. Aurora Serverless v2 DB clusters use the `provisioned` engine mode.
For information about limitations and requirements for Serverless DB clusters, see the following sections in the *Amazon Aurora User Guide*:

* [Limitations of Aurora Serverless v1](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html#aurora-serverless.limitations)
* [Requirements for Aurora Serverless v2](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.requirements.html)

Valid for Cluster Type: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#engine_mode RdsDbCluster#engine_mode}

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.engineVersion"></a>

- *Type:* java.lang.String

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

##### `globalClusterIdentifier`<sup>Optional</sup> <a name="globalClusterIdentifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.globalClusterIdentifier"></a>

- *Type:* java.lang.String

If you are configuring an Aurora global database cluster and want your Aurora DB cluster to be a secondary member in the global database cluster, specify the global cluster ID of the global database cluster.

To define the primary database cluster of the global cluster, use the [AWS::RDS::GlobalCluster](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html) resource.
If you aren't configuring a global database cluster, don't specify this property.
To remove the DB cluster from a global database cluster, specify an empty value for the `GlobalClusterIdentifier` property.
For information about Aurora global databases, see [Working with Amazon Aurora Global Databases](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html) in the *Amazon Aurora User Guide*.
Valid for: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#global_cluster_identifier RdsDbCluster#global_cluster_identifier}

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.iops"></a>

- *Type:* java.lang.Number

The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for each DB instance in the Multi-AZ DB cluster.

For information about valid IOPS values, see [Provisioned IOPS storage](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#USER_PIOPS) in the *Amazon RDS User Guide*.
This setting is required to create a Multi-AZ DB cluster.
Valid for Cluster Type: Multi-AZ DB clusters only
Constraints:

* Must be a multiple between .5 and 50 of the storage amount for the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#iops RdsDbCluster#iops}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.kmsKeyId"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the AWS KMS key that is used to encrypt the database instances in the DB cluster, such as ``arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef``.

If you enable the `StorageEncrypted` property but don't specify this property, the default KMS key is used. If you specify this property, you must set the `StorageEncrypted` property to `true`.
If you specify the `SnapshotIdentifier` property, the `StorageEncrypted` property value is inherited from the snapshot, and if the DB cluster is encrypted, the specified `KmsKeyId` property is used.
If you create a read replica of an encrypted DB cluster in another AWS Region, make sure to set `KmsKeyId` to a KMS key identifier that is valid in the destination AWS Region. This KMS key is used to encrypt the read replica in that AWS Region.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#kms_key_id RdsDbCluster#kms_key_id}

---

##### `manageMasterUserPassword`<sup>Optional</sup> <a name="manageMasterUserPassword" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.manageMasterUserPassword"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether to manage the master user password with AWS Secrets Manager.

For more information, see [Password management with Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the *Amazon RDS User Guide* and [Password management with Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-secrets-manager.html) in the *Amazon Aurora User Guide.*
Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
Constraints:

* Can't manage the master user password with AWS Secrets Manager if `MasterUserPassword` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#manage_master_user_password RdsDbCluster#manage_master_user_password}

---

##### `masterUserAuthenticationType`<sup>Optional</sup> <a name="masterUserAuthenticationType" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.masterUserAuthenticationType"></a>

- *Type:* java.lang.String

Specifies the authentication type for the master user.

With IAM master user authentication, you can configure the master DB user with IAM database authentication when you create a DB cluster.
You can specify one of the following values:

* `password` - Use standard database authentication with a password.
* `iam-db-auth` - Use IAM database authentication for the master user.

Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
This option is only valid for RDS for MySQL, RDS for MariaDB, RDS for PostgreSQL, Aurora MySQL, and Aurora PostgreSQL engines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#master_user_authentication_type RdsDbCluster#master_user_authentication_type}

---

##### `masterUsername`<sup>Optional</sup> <a name="masterUsername" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.masterUsername"></a>

- *Type:* java.lang.String

The name of the master user for the DB cluster.

If you specify the `SourceDBClusterIdentifier`, `SnapshotIdentifier`, or `GlobalClusterIdentifier` property, don't specify this property. The value is inherited from the source DB cluster, the snapshot, or the primary DB cluster for the global database cluster, respectively.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#master_username RdsDbCluster#master_username}

---

##### `masterUserPassword`<sup>Optional</sup> <a name="masterUserPassword" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.masterUserPassword"></a>

- *Type:* java.lang.String

The master password for the DB instance.

If you specify the `SourceDBClusterIdentifier`, `SnapshotIdentifier`, or `GlobalClusterIdentifier` property, don't specify this property. The value is inherited from the source DB cluster, the snapshot, or the primary DB cluster for the global database cluster, respectively.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#master_user_password RdsDbCluster#master_user_password}

---

##### `masterUserSecret`<sup>Optional</sup> <a name="masterUserSecret" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.masterUserSecret"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecret">RdsDbClusterMasterUserSecret</a>

The secret managed by RDS in AWS Secrets Manager for the master user password.

When you restore a DB cluster from a snapshot, Amazon RDS generates a new secret instead of reusing the secret specified in the `SecretArn` property. This ensures that the restored DB cluster is securely managed with a dedicated secret. To maintain consistent integration with your application, you might need to update resource configurations to reference the newly created secret.
For more information, see [Password management with Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the *Amazon RDS User Guide* and [Password management with Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-secrets-manager.html) in the *Amazon Aurora User Guide.*

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#master_user_secret RdsDbCluster#master_user_secret}

---

##### `monitoringInterval`<sup>Optional</sup> <a name="monitoringInterval" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.monitoringInterval"></a>

- *Type:* java.lang.Number

The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB cluster.

To turn off collecting Enhanced Monitoring metrics, specify `0`.
If `MonitoringRoleArn` is specified, also set `MonitoringInterval` to a value other than `0`.
Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
Valid Values: `0 | 1 | 5 | 10 | 15 | 30 | 60`
Default: `0`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#monitoring_interval RdsDbCluster#monitoring_interval}

---

##### `monitoringRoleArn`<sup>Optional</sup> <a name="monitoringRoleArn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.monitoringRoleArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) for the IAM role that permits RDS to send Enhanced Monitoring metrics to Amazon CloudWatch Logs.

An example is `arn:aws:iam:123456789012:role/emaccess`. For information on creating a monitoring role, see [Setting up and enabling Enhanced Monitoring](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.OS.html#USER_Monitoring.OS.Enabling) in the *Amazon RDS User Guide*.
If `MonitoringInterval` is set to a value other than `0`, supply a `MonitoringRoleArn` value.
Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#monitoring_role_arn RdsDbCluster#monitoring_role_arn}

---

##### `networkType`<sup>Optional</sup> <a name="networkType" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.networkType"></a>

- *Type:* java.lang.String

The network type of the DB cluster.

Valid values:

* `IPV4`
* `DUAL`

The network type is determined by the `DBSubnetGroup` specified for the DB cluster. A `DBSubnetGroup` can support only the IPv4 protocol or the IPv4 and IPv6 protocols (`DUAL`).
For more information, see [Working with a DB instance in a VPC](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html) in the *Amazon Aurora User Guide.*
Valid for: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#network_type RdsDbCluster#network_type}

---

##### `performanceInsightsEnabled`<sup>Optional</sup> <a name="performanceInsightsEnabled" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.performanceInsightsEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether to turn on Performance Insights for the DB cluster.

For more information, see [Using Amazon Performance Insights](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html) in the *Amazon RDS User Guide*.
Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#performance_insights_enabled RdsDbCluster#performance_insights_enabled}

---

##### `performanceInsightsKmsKeyId`<sup>Optional</sup> <a name="performanceInsightsKmsKeyId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.performanceInsightsKmsKeyId"></a>

- *Type:* java.lang.String

The AWS KMS key identifier for encryption of Performance Insights data.

The AWS KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
If you don't specify a value for `PerformanceInsightsKMSKeyId`, then Amazon RDS uses your default KMS key. There is a default KMS key for your AWS-account. Your AWS-account has a different default KMS key for each AWS-Region.
Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#performance_insights_kms_key_id RdsDbCluster#performance_insights_kms_key_id}

---

##### `performanceInsightsRetentionPeriod`<sup>Optional</sup> <a name="performanceInsightsRetentionPeriod" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.performanceInsightsRetentionPeriod"></a>

- *Type:* java.lang.Number

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

- *Type:* java.lang.Number

The port number on which the DB instances in the DB cluster accept connections.

Default:

* RDS for MySQL and Aurora MySQL - `3306`
* RDS for PostgreSQL and Aurora PostgreSQL - `5432`

The `No interruption` on update behavior only applies to DB clusters. If you are updating a DB instance, see [Port](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-database-instance.html#cfn-rds-dbinstance-port) for the AWS::RDS::DBInstance resource.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#port RdsDbCluster#port}

---

##### `preferredBackupWindow`<sup>Optional</sup> <a name="preferredBackupWindow" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.preferredBackupWindow"></a>

- *Type:* java.lang.String

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

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.preferredMaintenanceWindow"></a>

- *Type:* java.lang.String

The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).

Format: `ddd:hh24:mi-ddd:hh24:mi`
The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week. To see the time blocks available, see [Maintaining an Amazon Aurora DB cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow.Aurora) in the *Amazon Aurora User Guide.*
Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.
Constraints: Minimum 30-minute window.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#preferred_maintenance_window RdsDbCluster#preferred_maintenance_window}

---

##### `publiclyAccessible`<sup>Optional</sup> <a name="publiclyAccessible" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.publiclyAccessible"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

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

##### `replicationSourceIdentifier`<sup>Optional</sup> <a name="replicationSourceIdentifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.replicationSourceIdentifier"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the source DB instance or DB cluster if this DB cluster is created as a read replica.

Valid for: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#replication_source_identifier RdsDbCluster#replication_source_identifier}

---

##### `restoreToTime`<sup>Optional</sup> <a name="restoreToTime" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.restoreToTime"></a>

- *Type:* java.lang.String

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

##### `restoreType`<sup>Optional</sup> <a name="restoreType" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.restoreType"></a>

- *Type:* java.lang.String

The type of restore to be performed.

You can specify one of the following values:

* `full-copy` - The new DB cluster is restored as a full copy of the source DB cluster.
* `copy-on-write` - The new DB cluster is restored as a clone of the source DB cluster.

If you don't specify a `RestoreType` value, then the new DB cluster is restored as a full copy of the source DB cluster.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#restore_type RdsDbCluster#restore_type}

---

##### `scalingConfiguration`<sup>Optional</sup> <a name="scalingConfiguration" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.scalingConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration">RdsDbClusterScalingConfiguration</a>

The scaling configuration of an Aurora Serverless v1 DB cluster.

This property is only supported for Aurora Serverless v1. For Aurora Serverless v2, Use the `ServerlessV2ScalingConfiguration` property.
Valid for: Aurora Serverless v1 DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#scaling_configuration RdsDbCluster#scaling_configuration}

---

##### `serverlessV2ScalingConfiguration`<sup>Optional</sup> <a name="serverlessV2ScalingConfiguration" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.serverlessV2ScalingConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfiguration">RdsDbClusterServerlessV2ScalingConfiguration</a>

The scaling configuration of an Aurora Serverless V2 DB cluster.

This property is only supported for Aurora Serverless v2. For Aurora Serverless v1, Use the `ScalingConfiguration` property.
Valid for: Aurora Serverless v2 DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#serverless_v2_scaling_configuration RdsDbCluster#serverless_v2_scaling_configuration}

---

##### `snapshotIdentifier`<sup>Optional</sup> <a name="snapshotIdentifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.snapshotIdentifier"></a>

- *Type:* java.lang.String

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

##### `sourceDbClusterIdentifier`<sup>Optional</sup> <a name="sourceDbClusterIdentifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.sourceDbClusterIdentifier"></a>

- *Type:* java.lang.String

When restoring a DB cluster to a point in time, the identifier of the source DB cluster from which to restore.

Constraints:

* Must match the identifier of an existing DBCluster.
* Cannot be specified if `SourceDbClusterResourceId` is specified. You must specify either `SourceDBClusterIdentifier` or `SourceDbClusterResourceId`, but not both.

Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#source_db_cluster_identifier RdsDbCluster#source_db_cluster_identifier}

---

##### `sourceDbClusterResourceId`<sup>Optional</sup> <a name="sourceDbClusterResourceId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.sourceDbClusterResourceId"></a>

- *Type:* java.lang.String

The resource ID of the source DB cluster from which to restore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#source_db_cluster_resource_id RdsDbCluster#source_db_cluster_resource_id}

---

##### `sourceRegion`<sup>Optional</sup> <a name="sourceRegion" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.sourceRegion"></a>

- *Type:* java.lang.String

The AWS Region which contains the source DB cluster when replicating a DB cluster.

For example, `us-east-1`.
Valid for: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#source_region RdsDbCluster#source_region}

---

##### `storageEncrypted`<sup>Optional</sup> <a name="storageEncrypted" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.storageEncrypted"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether the DB cluster is encrypted.

If you specify the `KmsKeyId` property, then you must enable encryption.
If you specify the `SourceDBClusterIdentifier` property, don't specify this property. The value is inherited from the source DB cluster, and if the DB cluster is encrypted, the specified `KmsKeyId` property is used.
If you specify the `SnapshotIdentifier` and the specified snapshot is encrypted, don't specify this property. The value is inherited from the snapshot, and the specified `KmsKeyId` property is used.
If you specify the `SnapshotIdentifier` and the specified snapshot isn't encrypted, you can use this property to specify that the restored DB cluster is encrypted. Specify the `KmsKeyId` property for the KMS key to use for encryption. If you don't want the restored DB cluster to be encrypted, then don't set this property or set it to `false`.
If you specify both the `StorageEncrypted` and `SnapshotIdentifier` properties without specifying the `KmsKeyId` property, then the restored DB cluster inherits the encryption settings from the DB snapshot that provide.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#storage_encrypted RdsDbCluster#storage_encrypted}

---

##### `storageType`<sup>Optional</sup> <a name="storageType" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.storageType"></a>

- *Type:* java.lang.String

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

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTags">RdsDbClusterTags</a>>

Tags to assign to the DB cluster.  Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#tags RdsDbCluster#tags}

---

##### `useLatestRestorableTime`<sup>Optional</sup> <a name="useLatestRestorableTime" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.useLatestRestorableTime"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A value that indicates whether to restore the DB cluster to the latest restorable backup time.

By default, the DB cluster is not restored to the latest restorable backup time.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#use_latest_restorable_time RdsDbCluster#use_latest_restorable_time}

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="vpcSecurityGroupIds" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.Initializer.parameter.vpcSecurityGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

A list of EC2 VPC security groups to associate with this DB cluster.

If you plan to update the resource, don't specify VPC security groups in a shared VPC.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#vpc_security_group_ids RdsDbCluster#vpc_security_group_ids}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putAssociatedRoles">putAssociatedRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putMasterUserSecret">putMasterUserSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putScalingConfiguration">putScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putServerlessV2ScalingConfiguration">putServerlessV2ScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetAllocatedStorage">resetAllocatedStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetAssociatedRoles">resetAssociatedRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetAutoMinorVersionUpgrade">resetAutoMinorVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetAvailabilityZones">resetAvailabilityZones</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetBacktrackWindow">resetBacktrackWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetBackupRetentionPeriod">resetBackupRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetClusterScalabilityType">resetClusterScalabilityType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetCopyTagsToSnapshot">resetCopyTagsToSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDatabaseInsightsMode">resetDatabaseInsightsMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDbClusterIdentifier">resetDbClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDbClusterInstanceClass">resetDbClusterInstanceClass</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDbClusterParameterGroupName">resetDbClusterParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDbInstanceParameterGroupName">resetDbInstanceParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDbSubnetGroupName">resetDbSubnetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDbSystemId">resetDbSystemId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDeleteAutomatedBackups">resetDeleteAutomatedBackups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDomainIamRoleName">resetDomainIamRoleName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEnableCloudwatchLogsExports">resetEnableCloudwatchLogsExports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEnableGlobalWriteForwarding">resetEnableGlobalWriteForwarding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEnableHttpEndpoint">resetEnableHttpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEnableIamDatabaseAuthentication">resetEnableIamDatabaseAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEnableLocalWriteForwarding">resetEnableLocalWriteForwarding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEngine">resetEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEngineLifecycleSupport">resetEngineLifecycleSupport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEngineMode">resetEngineMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEngineVersion">resetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetGlobalClusterIdentifier">resetGlobalClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetManageMasterUserPassword">resetManageMasterUserPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetMasterUserAuthenticationType">resetMasterUserAuthenticationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetMasterUsername">resetMasterUsername</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetMasterUserPassword">resetMasterUserPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetMasterUserSecret">resetMasterUserSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetMonitoringInterval">resetMonitoringInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetMonitoringRoleArn">resetMonitoringRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetNetworkType">resetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetPerformanceInsightsEnabled">resetPerformanceInsightsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetPerformanceInsightsKmsKeyId">resetPerformanceInsightsKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetPerformanceInsightsRetentionPeriod">resetPerformanceInsightsRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetPreferredBackupWindow">resetPreferredBackupWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetPreferredMaintenanceWindow">resetPreferredMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetPubliclyAccessible">resetPubliclyAccessible</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetReplicationSourceIdentifier">resetReplicationSourceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetRestoreToTime">resetRestoreToTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetRestoreType">resetRestoreType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetScalingConfiguration">resetScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetServerlessV2ScalingConfiguration">resetServerlessV2ScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetSnapshotIdentifier">resetSnapshotIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetSourceDbClusterIdentifier">resetSourceDbClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetSourceDbClusterResourceId">resetSourceDbClusterResourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetSourceRegion">resetSourceRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetStorageEncrypted">resetStorageEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetStorageType">resetStorageType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetUseLatestRestorableTime">resetUseLatestRestorableTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetVpcSecurityGroupIds">resetVpcSecurityGroupIds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAssociatedRoles` <a name="putAssociatedRoles" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putAssociatedRoles"></a>

```java
public void putAssociatedRoles(IResolvable|java.util.List<RdsDbClusterAssociatedRoles> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putAssociatedRoles.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRoles">RdsDbClusterAssociatedRoles</a>>

---

##### `putMasterUserSecret` <a name="putMasterUserSecret" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putMasterUserSecret"></a>

```java
public void putMasterUserSecret(RdsDbClusterMasterUserSecret value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putMasterUserSecret.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecret">RdsDbClusterMasterUserSecret</a>

---

##### `putScalingConfiguration` <a name="putScalingConfiguration" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putScalingConfiguration"></a>

```java
public void putScalingConfiguration(RdsDbClusterScalingConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putScalingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration">RdsDbClusterScalingConfiguration</a>

---

##### `putServerlessV2ScalingConfiguration` <a name="putServerlessV2ScalingConfiguration" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putServerlessV2ScalingConfiguration"></a>

```java
public void putServerlessV2ScalingConfiguration(RdsDbClusterServerlessV2ScalingConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putServerlessV2ScalingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfiguration">RdsDbClusterServerlessV2ScalingConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<RdsDbClusterTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTags">RdsDbClusterTags</a>>

---

##### `resetAllocatedStorage` <a name="resetAllocatedStorage" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetAllocatedStorage"></a>

```java
public void resetAllocatedStorage()
```

##### `resetAssociatedRoles` <a name="resetAssociatedRoles" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetAssociatedRoles"></a>

```java
public void resetAssociatedRoles()
```

##### `resetAutoMinorVersionUpgrade` <a name="resetAutoMinorVersionUpgrade" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetAutoMinorVersionUpgrade"></a>

```java
public void resetAutoMinorVersionUpgrade()
```

##### `resetAvailabilityZones` <a name="resetAvailabilityZones" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetAvailabilityZones"></a>

```java
public void resetAvailabilityZones()
```

##### `resetBacktrackWindow` <a name="resetBacktrackWindow" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetBacktrackWindow"></a>

```java
public void resetBacktrackWindow()
```

##### `resetBackupRetentionPeriod` <a name="resetBackupRetentionPeriod" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetBackupRetentionPeriod"></a>

```java
public void resetBackupRetentionPeriod()
```

##### `resetClusterScalabilityType` <a name="resetClusterScalabilityType" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetClusterScalabilityType"></a>

```java
public void resetClusterScalabilityType()
```

##### `resetCopyTagsToSnapshot` <a name="resetCopyTagsToSnapshot" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetCopyTagsToSnapshot"></a>

```java
public void resetCopyTagsToSnapshot()
```

##### `resetDatabaseInsightsMode` <a name="resetDatabaseInsightsMode" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDatabaseInsightsMode"></a>

```java
public void resetDatabaseInsightsMode()
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDatabaseName"></a>

```java
public void resetDatabaseName()
```

##### `resetDbClusterIdentifier` <a name="resetDbClusterIdentifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDbClusterIdentifier"></a>

```java
public void resetDbClusterIdentifier()
```

##### `resetDbClusterInstanceClass` <a name="resetDbClusterInstanceClass" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDbClusterInstanceClass"></a>

```java
public void resetDbClusterInstanceClass()
```

##### `resetDbClusterParameterGroupName` <a name="resetDbClusterParameterGroupName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDbClusterParameterGroupName"></a>

```java
public void resetDbClusterParameterGroupName()
```

##### `resetDbInstanceParameterGroupName` <a name="resetDbInstanceParameterGroupName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDbInstanceParameterGroupName"></a>

```java
public void resetDbInstanceParameterGroupName()
```

##### `resetDbSubnetGroupName` <a name="resetDbSubnetGroupName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDbSubnetGroupName"></a>

```java
public void resetDbSubnetGroupName()
```

##### `resetDbSystemId` <a name="resetDbSystemId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDbSystemId"></a>

```java
public void resetDbSystemId()
```

##### `resetDeleteAutomatedBackups` <a name="resetDeleteAutomatedBackups" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDeleteAutomatedBackups"></a>

```java
public void resetDeleteAutomatedBackups()
```

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDeletionProtection"></a>

```java
public void resetDeletionProtection()
```

##### `resetDomain` <a name="resetDomain" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDomain"></a>

```java
public void resetDomain()
```

##### `resetDomainIamRoleName` <a name="resetDomainIamRoleName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetDomainIamRoleName"></a>

```java
public void resetDomainIamRoleName()
```

##### `resetEnableCloudwatchLogsExports` <a name="resetEnableCloudwatchLogsExports" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEnableCloudwatchLogsExports"></a>

```java
public void resetEnableCloudwatchLogsExports()
```

##### `resetEnableGlobalWriteForwarding` <a name="resetEnableGlobalWriteForwarding" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEnableGlobalWriteForwarding"></a>

```java
public void resetEnableGlobalWriteForwarding()
```

##### `resetEnableHttpEndpoint` <a name="resetEnableHttpEndpoint" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEnableHttpEndpoint"></a>

```java
public void resetEnableHttpEndpoint()
```

##### `resetEnableIamDatabaseAuthentication` <a name="resetEnableIamDatabaseAuthentication" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEnableIamDatabaseAuthentication"></a>

```java
public void resetEnableIamDatabaseAuthentication()
```

##### `resetEnableLocalWriteForwarding` <a name="resetEnableLocalWriteForwarding" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEnableLocalWriteForwarding"></a>

```java
public void resetEnableLocalWriteForwarding()
```

##### `resetEngine` <a name="resetEngine" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEngine"></a>

```java
public void resetEngine()
```

##### `resetEngineLifecycleSupport` <a name="resetEngineLifecycleSupport" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEngineLifecycleSupport"></a>

```java
public void resetEngineLifecycleSupport()
```

##### `resetEngineMode` <a name="resetEngineMode" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEngineMode"></a>

```java
public void resetEngineMode()
```

##### `resetEngineVersion` <a name="resetEngineVersion" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetEngineVersion"></a>

```java
public void resetEngineVersion()
```

##### `resetGlobalClusterIdentifier` <a name="resetGlobalClusterIdentifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetGlobalClusterIdentifier"></a>

```java
public void resetGlobalClusterIdentifier()
```

##### `resetIops` <a name="resetIops" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetIops"></a>

```java
public void resetIops()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetManageMasterUserPassword` <a name="resetManageMasterUserPassword" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetManageMasterUserPassword"></a>

```java
public void resetManageMasterUserPassword()
```

##### `resetMasterUserAuthenticationType` <a name="resetMasterUserAuthenticationType" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetMasterUserAuthenticationType"></a>

```java
public void resetMasterUserAuthenticationType()
```

##### `resetMasterUsername` <a name="resetMasterUsername" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetMasterUsername"></a>

```java
public void resetMasterUsername()
```

##### `resetMasterUserPassword` <a name="resetMasterUserPassword" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetMasterUserPassword"></a>

```java
public void resetMasterUserPassword()
```

##### `resetMasterUserSecret` <a name="resetMasterUserSecret" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetMasterUserSecret"></a>

```java
public void resetMasterUserSecret()
```

##### `resetMonitoringInterval` <a name="resetMonitoringInterval" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetMonitoringInterval"></a>

```java
public void resetMonitoringInterval()
```

##### `resetMonitoringRoleArn` <a name="resetMonitoringRoleArn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetMonitoringRoleArn"></a>

```java
public void resetMonitoringRoleArn()
```

##### `resetNetworkType` <a name="resetNetworkType" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetNetworkType"></a>

```java
public void resetNetworkType()
```

##### `resetPerformanceInsightsEnabled` <a name="resetPerformanceInsightsEnabled" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetPerformanceInsightsEnabled"></a>

```java
public void resetPerformanceInsightsEnabled()
```

##### `resetPerformanceInsightsKmsKeyId` <a name="resetPerformanceInsightsKmsKeyId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetPerformanceInsightsKmsKeyId"></a>

```java
public void resetPerformanceInsightsKmsKeyId()
```

##### `resetPerformanceInsightsRetentionPeriod` <a name="resetPerformanceInsightsRetentionPeriod" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetPerformanceInsightsRetentionPeriod"></a>

```java
public void resetPerformanceInsightsRetentionPeriod()
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetPort"></a>

```java
public void resetPort()
```

##### `resetPreferredBackupWindow` <a name="resetPreferredBackupWindow" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetPreferredBackupWindow"></a>

```java
public void resetPreferredBackupWindow()
```

##### `resetPreferredMaintenanceWindow` <a name="resetPreferredMaintenanceWindow" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetPreferredMaintenanceWindow"></a>

```java
public void resetPreferredMaintenanceWindow()
```

##### `resetPubliclyAccessible` <a name="resetPubliclyAccessible" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetPubliclyAccessible"></a>

```java
public void resetPubliclyAccessible()
```

##### `resetReplicationSourceIdentifier` <a name="resetReplicationSourceIdentifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetReplicationSourceIdentifier"></a>

```java
public void resetReplicationSourceIdentifier()
```

##### `resetRestoreToTime` <a name="resetRestoreToTime" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetRestoreToTime"></a>

```java
public void resetRestoreToTime()
```

##### `resetRestoreType` <a name="resetRestoreType" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetRestoreType"></a>

```java
public void resetRestoreType()
```

##### `resetScalingConfiguration` <a name="resetScalingConfiguration" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetScalingConfiguration"></a>

```java
public void resetScalingConfiguration()
```

##### `resetServerlessV2ScalingConfiguration` <a name="resetServerlessV2ScalingConfiguration" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetServerlessV2ScalingConfiguration"></a>

```java
public void resetServerlessV2ScalingConfiguration()
```

##### `resetSnapshotIdentifier` <a name="resetSnapshotIdentifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetSnapshotIdentifier"></a>

```java
public void resetSnapshotIdentifier()
```

##### `resetSourceDbClusterIdentifier` <a name="resetSourceDbClusterIdentifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetSourceDbClusterIdentifier"></a>

```java
public void resetSourceDbClusterIdentifier()
```

##### `resetSourceDbClusterResourceId` <a name="resetSourceDbClusterResourceId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetSourceDbClusterResourceId"></a>

```java
public void resetSourceDbClusterResourceId()
```

##### `resetSourceRegion` <a name="resetSourceRegion" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetSourceRegion"></a>

```java
public void resetSourceRegion()
```

##### `resetStorageEncrypted` <a name="resetStorageEncrypted" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetStorageEncrypted"></a>

```java
public void resetStorageEncrypted()
```

##### `resetStorageType` <a name="resetStorageType" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetStorageType"></a>

```java
public void resetStorageType()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetTags"></a>

```java
public void resetTags()
```

##### `resetUseLatestRestorableTime` <a name="resetUseLatestRestorableTime" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetUseLatestRestorableTime"></a>

```java
public void resetUseLatestRestorableTime()
```

##### `resetVpcSecurityGroupIds` <a name="resetVpcSecurityGroupIds" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.resetVpcSecurityGroupIds"></a>

```java
public void resetVpcSecurityGroupIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RdsDbCluster resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.isConstruct"></a>

```java
import io.cdktn.providers.awscc.rds_db_cluster.RdsDbCluster;

RdsDbCluster.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.rds_db_cluster.RdsDbCluster;

RdsDbCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.rds_db_cluster.RdsDbCluster;

RdsDbCluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.rds_db_cluster.RdsDbCluster;

RdsDbCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RdsDbCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a RdsDbCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RdsDbCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RdsDbCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the RdsDbCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.associatedRoles">associatedRoles</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList">RdsDbClusterAssociatedRolesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterArn">dbClusterArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterResourceId">dbClusterResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.endpoint">endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference">RdsDbClusterEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUserSecret">masterUserSecret</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference">RdsDbClusterMasterUserSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.readEndpoint">readEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference">RdsDbClusterReadEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.scalingConfiguration">scalingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference">RdsDbClusterScalingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.serverlessV2ScalingConfiguration">serverlessV2ScalingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference">RdsDbClusterServerlessV2ScalingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.storageEncryptionType">storageEncryptionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.storageThroughput">storageThroughput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList">RdsDbClusterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.allocatedStorageInput">allocatedStorageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.associatedRolesInput">associatedRolesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRoles">RdsDbClusterAssociatedRoles</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.autoMinorVersionUpgradeInput">autoMinorVersionUpgradeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.availabilityZonesInput">availabilityZonesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.backtrackWindowInput">backtrackWindowInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.backupRetentionPeriodInput">backupRetentionPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.clusterScalabilityTypeInput">clusterScalabilityTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.copyTagsToSnapshotInput">copyTagsToSnapshotInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.databaseInsightsModeInput">databaseInsightsModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterIdentifierInput">dbClusterIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterInstanceClassInput">dbClusterInstanceClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterParameterGroupNameInput">dbClusterParameterGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbInstanceParameterGroupNameInput">dbInstanceParameterGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbSubnetGroupNameInput">dbSubnetGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbSystemIdInput">dbSystemIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.deleteAutomatedBackupsInput">deleteAutomatedBackupsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.domainIamRoleNameInput">domainIamRoleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.domainInput">domainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableCloudwatchLogsExportsInput">enableCloudwatchLogsExportsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableGlobalWriteForwardingInput">enableGlobalWriteForwardingInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableHttpEndpointInput">enableHttpEndpointInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableIamDatabaseAuthenticationInput">enableIamDatabaseAuthenticationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableLocalWriteForwardingInput">enableLocalWriteForwardingInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engineInput">engineInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engineLifecycleSupportInput">engineLifecycleSupportInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engineModeInput">engineModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engineVersionInput">engineVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.globalClusterIdentifierInput">globalClusterIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.iopsInput">iopsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.manageMasterUserPasswordInput">manageMasterUserPasswordInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUserAuthenticationTypeInput">masterUserAuthenticationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUsernameInput">masterUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUserPasswordInput">masterUserPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUserSecretInput">masterUserSecretInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecret">RdsDbClusterMasterUserSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.monitoringIntervalInput">monitoringIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.monitoringRoleArnInput">monitoringRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.networkTypeInput">networkTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.performanceInsightsEnabledInput">performanceInsightsEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.performanceInsightsKmsKeyIdInput">performanceInsightsKmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.performanceInsightsRetentionPeriodInput">performanceInsightsRetentionPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.preferredBackupWindowInput">preferredBackupWindowInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.preferredMaintenanceWindowInput">preferredMaintenanceWindowInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.publiclyAccessibleInput">publiclyAccessibleInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.replicationSourceIdentifierInput">replicationSourceIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.restoreToTimeInput">restoreToTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.restoreTypeInput">restoreTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.scalingConfigurationInput">scalingConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration">RdsDbClusterScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.serverlessV2ScalingConfigurationInput">serverlessV2ScalingConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfiguration">RdsDbClusterServerlessV2ScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.snapshotIdentifierInput">snapshotIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.sourceDbClusterIdentifierInput">sourceDbClusterIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.sourceDbClusterResourceIdInput">sourceDbClusterResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.sourceRegionInput">sourceRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.storageEncryptedInput">storageEncryptedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.storageTypeInput">storageTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTags">RdsDbClusterTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.useLatestRestorableTimeInput">useLatestRestorableTimeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.vpcSecurityGroupIdsInput">vpcSecurityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.allocatedStorage">allocatedStorage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.backtrackWindow">backtrackWindow</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.backupRetentionPeriod">backupRetentionPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.clusterScalabilityType">clusterScalabilityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.copyTagsToSnapshot">copyTagsToSnapshot</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.databaseInsightsMode">databaseInsightsMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterIdentifier">dbClusterIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterInstanceClass">dbClusterInstanceClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterParameterGroupName">dbClusterParameterGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbInstanceParameterGroupName">dbInstanceParameterGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbSubnetGroupName">dbSubnetGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbSystemId">dbSystemId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.deleteAutomatedBackups">deleteAutomatedBackups</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.domainIamRoleName">domainIamRoleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableCloudwatchLogsExports">enableCloudwatchLogsExports</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableGlobalWriteForwarding">enableGlobalWriteForwarding</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableHttpEndpoint">enableHttpEndpoint</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableIamDatabaseAuthentication">enableIamDatabaseAuthentication</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableLocalWriteForwarding">enableLocalWriteForwarding</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engine">engine</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engineLifecycleSupport">engineLifecycleSupport</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engineMode">engineMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.globalClusterIdentifier">globalClusterIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.iops">iops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.manageMasterUserPassword">manageMasterUserPassword</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUserAuthenticationType">masterUserAuthenticationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUsername">masterUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUserPassword">masterUserPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.monitoringInterval">monitoringInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.monitoringRoleArn">monitoringRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.networkType">networkType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.performanceInsightsEnabled">performanceInsightsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.performanceInsightsKmsKeyId">performanceInsightsKmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.performanceInsightsRetentionPeriod">performanceInsightsRetentionPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.preferredBackupWindow">preferredBackupWindow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.publiclyAccessible">publiclyAccessible</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.replicationSourceIdentifier">replicationSourceIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.restoreToTime">restoreToTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.restoreType">restoreType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.snapshotIdentifier">snapshotIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.sourceDbClusterIdentifier">sourceDbClusterIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.sourceDbClusterResourceId">sourceDbClusterResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.sourceRegion">sourceRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.storageEncrypted">storageEncrypted</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.storageType">storageType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.useLatestRestorableTime">useLatestRestorableTime</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `associatedRoles`<sup>Required</sup> <a name="associatedRoles" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.associatedRoles"></a>

```java
public RdsDbClusterAssociatedRolesList getAssociatedRoles();
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList">RdsDbClusterAssociatedRolesList</a>

---

##### `dbClusterArn`<sup>Required</sup> <a name="dbClusterArn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterArn"></a>

```java
public java.lang.String getDbClusterArn();
```

- *Type:* java.lang.String

---

##### `dbClusterResourceId`<sup>Required</sup> <a name="dbClusterResourceId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterResourceId"></a>

```java
public java.lang.String getDbClusterResourceId();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.endpoint"></a>

```java
public RdsDbClusterEndpointOutputReference getEndpoint();
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference">RdsDbClusterEndpointOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `masterUserSecret`<sup>Required</sup> <a name="masterUserSecret" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUserSecret"></a>

```java
public RdsDbClusterMasterUserSecretOutputReference getMasterUserSecret();
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference">RdsDbClusterMasterUserSecretOutputReference</a>

---

##### `readEndpoint`<sup>Required</sup> <a name="readEndpoint" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.readEndpoint"></a>

```java
public RdsDbClusterReadEndpointOutputReference getReadEndpoint();
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference">RdsDbClusterReadEndpointOutputReference</a>

---

##### `scalingConfiguration`<sup>Required</sup> <a name="scalingConfiguration" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.scalingConfiguration"></a>

```java
public RdsDbClusterScalingConfigurationOutputReference getScalingConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference">RdsDbClusterScalingConfigurationOutputReference</a>

---

##### `serverlessV2ScalingConfiguration`<sup>Required</sup> <a name="serverlessV2ScalingConfiguration" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.serverlessV2ScalingConfiguration"></a>

```java
public RdsDbClusterServerlessV2ScalingConfigurationOutputReference getServerlessV2ScalingConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference">RdsDbClusterServerlessV2ScalingConfigurationOutputReference</a>

---

##### `storageEncryptionType`<sup>Required</sup> <a name="storageEncryptionType" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.storageEncryptionType"></a>

```java
public java.lang.String getStorageEncryptionType();
```

- *Type:* java.lang.String

---

##### `storageThroughput`<sup>Required</sup> <a name="storageThroughput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.storageThroughput"></a>

```java
public java.lang.Number getStorageThroughput();
```

- *Type:* java.lang.Number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.tags"></a>

```java
public RdsDbClusterTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList">RdsDbClusterTagsList</a>

---

##### `allocatedStorageInput`<sup>Optional</sup> <a name="allocatedStorageInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.allocatedStorageInput"></a>

```java
public java.lang.Number getAllocatedStorageInput();
```

- *Type:* java.lang.Number

---

##### `associatedRolesInput`<sup>Optional</sup> <a name="associatedRolesInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.associatedRolesInput"></a>

```java
public IResolvable|java.util.List<RdsDbClusterAssociatedRoles> getAssociatedRolesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRoles">RdsDbClusterAssociatedRoles</a>>

---

##### `autoMinorVersionUpgradeInput`<sup>Optional</sup> <a name="autoMinorVersionUpgradeInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.autoMinorVersionUpgradeInput"></a>

```java
public java.lang.Boolean|IResolvable getAutoMinorVersionUpgradeInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `availabilityZonesInput`<sup>Optional</sup> <a name="availabilityZonesInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.availabilityZonesInput"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZonesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `backtrackWindowInput`<sup>Optional</sup> <a name="backtrackWindowInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.backtrackWindowInput"></a>

```java
public java.lang.Number getBacktrackWindowInput();
```

- *Type:* java.lang.Number

---

##### `backupRetentionPeriodInput`<sup>Optional</sup> <a name="backupRetentionPeriodInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.backupRetentionPeriodInput"></a>

```java
public java.lang.Number getBackupRetentionPeriodInput();
```

- *Type:* java.lang.Number

---

##### `clusterScalabilityTypeInput`<sup>Optional</sup> <a name="clusterScalabilityTypeInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.clusterScalabilityTypeInput"></a>

```java
public java.lang.String getClusterScalabilityTypeInput();
```

- *Type:* java.lang.String

---

##### `copyTagsToSnapshotInput`<sup>Optional</sup> <a name="copyTagsToSnapshotInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.copyTagsToSnapshotInput"></a>

```java
public java.lang.Boolean|IResolvable getCopyTagsToSnapshotInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `databaseInsightsModeInput`<sup>Optional</sup> <a name="databaseInsightsModeInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.databaseInsightsModeInput"></a>

```java
public java.lang.String getDatabaseInsightsModeInput();
```

- *Type:* java.lang.String

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `dbClusterIdentifierInput`<sup>Optional</sup> <a name="dbClusterIdentifierInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterIdentifierInput"></a>

```java
public java.lang.String getDbClusterIdentifierInput();
```

- *Type:* java.lang.String

---

##### `dbClusterInstanceClassInput`<sup>Optional</sup> <a name="dbClusterInstanceClassInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterInstanceClassInput"></a>

```java
public java.lang.String getDbClusterInstanceClassInput();
```

- *Type:* java.lang.String

---

##### `dbClusterParameterGroupNameInput`<sup>Optional</sup> <a name="dbClusterParameterGroupNameInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterParameterGroupNameInput"></a>

```java
public java.lang.String getDbClusterParameterGroupNameInput();
```

- *Type:* java.lang.String

---

##### `dbInstanceParameterGroupNameInput`<sup>Optional</sup> <a name="dbInstanceParameterGroupNameInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbInstanceParameterGroupNameInput"></a>

```java
public java.lang.String getDbInstanceParameterGroupNameInput();
```

- *Type:* java.lang.String

---

##### `dbSubnetGroupNameInput`<sup>Optional</sup> <a name="dbSubnetGroupNameInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbSubnetGroupNameInput"></a>

```java
public java.lang.String getDbSubnetGroupNameInput();
```

- *Type:* java.lang.String

---

##### `dbSystemIdInput`<sup>Optional</sup> <a name="dbSystemIdInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbSystemIdInput"></a>

```java
public java.lang.String getDbSystemIdInput();
```

- *Type:* java.lang.String

---

##### `deleteAutomatedBackupsInput`<sup>Optional</sup> <a name="deleteAutomatedBackupsInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.deleteAutomatedBackupsInput"></a>

```java
public java.lang.Boolean|IResolvable getDeleteAutomatedBackupsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.deletionProtectionInput"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtectionInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `domainIamRoleNameInput`<sup>Optional</sup> <a name="domainIamRoleNameInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.domainIamRoleNameInput"></a>

```java
public java.lang.String getDomainIamRoleNameInput();
```

- *Type:* java.lang.String

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.domainInput"></a>

```java
public java.lang.String getDomainInput();
```

- *Type:* java.lang.String

---

##### `enableCloudwatchLogsExportsInput`<sup>Optional</sup> <a name="enableCloudwatchLogsExportsInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableCloudwatchLogsExportsInput"></a>

```java
public java.util.List<java.lang.String> getEnableCloudwatchLogsExportsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enableGlobalWriteForwardingInput`<sup>Optional</sup> <a name="enableGlobalWriteForwardingInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableGlobalWriteForwardingInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableGlobalWriteForwardingInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableHttpEndpointInput`<sup>Optional</sup> <a name="enableHttpEndpointInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableHttpEndpointInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableHttpEndpointInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableIamDatabaseAuthenticationInput`<sup>Optional</sup> <a name="enableIamDatabaseAuthenticationInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableIamDatabaseAuthenticationInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableIamDatabaseAuthenticationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableLocalWriteForwardingInput`<sup>Optional</sup> <a name="enableLocalWriteForwardingInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableLocalWriteForwardingInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableLocalWriteForwardingInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `engineInput`<sup>Optional</sup> <a name="engineInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engineInput"></a>

```java
public java.lang.String getEngineInput();
```

- *Type:* java.lang.String

---

##### `engineLifecycleSupportInput`<sup>Optional</sup> <a name="engineLifecycleSupportInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engineLifecycleSupportInput"></a>

```java
public java.lang.String getEngineLifecycleSupportInput();
```

- *Type:* java.lang.String

---

##### `engineModeInput`<sup>Optional</sup> <a name="engineModeInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engineModeInput"></a>

```java
public java.lang.String getEngineModeInput();
```

- *Type:* java.lang.String

---

##### `engineVersionInput`<sup>Optional</sup> <a name="engineVersionInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engineVersionInput"></a>

```java
public java.lang.String getEngineVersionInput();
```

- *Type:* java.lang.String

---

##### `globalClusterIdentifierInput`<sup>Optional</sup> <a name="globalClusterIdentifierInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.globalClusterIdentifierInput"></a>

```java
public java.lang.String getGlobalClusterIdentifierInput();
```

- *Type:* java.lang.String

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.iopsInput"></a>

```java
public java.lang.Number getIopsInput();
```

- *Type:* java.lang.Number

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `manageMasterUserPasswordInput`<sup>Optional</sup> <a name="manageMasterUserPasswordInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.manageMasterUserPasswordInput"></a>

```java
public java.lang.Boolean|IResolvable getManageMasterUserPasswordInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `masterUserAuthenticationTypeInput`<sup>Optional</sup> <a name="masterUserAuthenticationTypeInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUserAuthenticationTypeInput"></a>

```java
public java.lang.String getMasterUserAuthenticationTypeInput();
```

- *Type:* java.lang.String

---

##### `masterUsernameInput`<sup>Optional</sup> <a name="masterUsernameInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUsernameInput"></a>

```java
public java.lang.String getMasterUsernameInput();
```

- *Type:* java.lang.String

---

##### `masterUserPasswordInput`<sup>Optional</sup> <a name="masterUserPasswordInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUserPasswordInput"></a>

```java
public java.lang.String getMasterUserPasswordInput();
```

- *Type:* java.lang.String

---

##### `masterUserSecretInput`<sup>Optional</sup> <a name="masterUserSecretInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUserSecretInput"></a>

```java
public IResolvable|RdsDbClusterMasterUserSecret getMasterUserSecretInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecret">RdsDbClusterMasterUserSecret</a>

---

##### `monitoringIntervalInput`<sup>Optional</sup> <a name="monitoringIntervalInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.monitoringIntervalInput"></a>

```java
public java.lang.Number getMonitoringIntervalInput();
```

- *Type:* java.lang.Number

---

##### `monitoringRoleArnInput`<sup>Optional</sup> <a name="monitoringRoleArnInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.monitoringRoleArnInput"></a>

```java
public java.lang.String getMonitoringRoleArnInput();
```

- *Type:* java.lang.String

---

##### `networkTypeInput`<sup>Optional</sup> <a name="networkTypeInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.networkTypeInput"></a>

```java
public java.lang.String getNetworkTypeInput();
```

- *Type:* java.lang.String

---

##### `performanceInsightsEnabledInput`<sup>Optional</sup> <a name="performanceInsightsEnabledInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.performanceInsightsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getPerformanceInsightsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `performanceInsightsKmsKeyIdInput`<sup>Optional</sup> <a name="performanceInsightsKmsKeyIdInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.performanceInsightsKmsKeyIdInput"></a>

```java
public java.lang.String getPerformanceInsightsKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `performanceInsightsRetentionPeriodInput`<sup>Optional</sup> <a name="performanceInsightsRetentionPeriodInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.performanceInsightsRetentionPeriodInput"></a>

```java
public java.lang.Number getPerformanceInsightsRetentionPeriodInput();
```

- *Type:* java.lang.Number

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `preferredBackupWindowInput`<sup>Optional</sup> <a name="preferredBackupWindowInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.preferredBackupWindowInput"></a>

```java
public java.lang.String getPreferredBackupWindowInput();
```

- *Type:* java.lang.String

---

##### `preferredMaintenanceWindowInput`<sup>Optional</sup> <a name="preferredMaintenanceWindowInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.preferredMaintenanceWindowInput"></a>

```java
public java.lang.String getPreferredMaintenanceWindowInput();
```

- *Type:* java.lang.String

---

##### `publiclyAccessibleInput`<sup>Optional</sup> <a name="publiclyAccessibleInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.publiclyAccessibleInput"></a>

```java
public java.lang.Boolean|IResolvable getPubliclyAccessibleInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `replicationSourceIdentifierInput`<sup>Optional</sup> <a name="replicationSourceIdentifierInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.replicationSourceIdentifierInput"></a>

```java
public java.lang.String getReplicationSourceIdentifierInput();
```

- *Type:* java.lang.String

---

##### `restoreToTimeInput`<sup>Optional</sup> <a name="restoreToTimeInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.restoreToTimeInput"></a>

```java
public java.lang.String getRestoreToTimeInput();
```

- *Type:* java.lang.String

---

##### `restoreTypeInput`<sup>Optional</sup> <a name="restoreTypeInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.restoreTypeInput"></a>

```java
public java.lang.String getRestoreTypeInput();
```

- *Type:* java.lang.String

---

##### `scalingConfigurationInput`<sup>Optional</sup> <a name="scalingConfigurationInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.scalingConfigurationInput"></a>

```java
public IResolvable|RdsDbClusterScalingConfiguration getScalingConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration">RdsDbClusterScalingConfiguration</a>

---

##### `serverlessV2ScalingConfigurationInput`<sup>Optional</sup> <a name="serverlessV2ScalingConfigurationInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.serverlessV2ScalingConfigurationInput"></a>

```java
public IResolvable|RdsDbClusterServerlessV2ScalingConfiguration getServerlessV2ScalingConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfiguration">RdsDbClusterServerlessV2ScalingConfiguration</a>

---

##### `snapshotIdentifierInput`<sup>Optional</sup> <a name="snapshotIdentifierInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.snapshotIdentifierInput"></a>

```java
public java.lang.String getSnapshotIdentifierInput();
```

- *Type:* java.lang.String

---

##### `sourceDbClusterIdentifierInput`<sup>Optional</sup> <a name="sourceDbClusterIdentifierInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.sourceDbClusterIdentifierInput"></a>

```java
public java.lang.String getSourceDbClusterIdentifierInput();
```

- *Type:* java.lang.String

---

##### `sourceDbClusterResourceIdInput`<sup>Optional</sup> <a name="sourceDbClusterResourceIdInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.sourceDbClusterResourceIdInput"></a>

```java
public java.lang.String getSourceDbClusterResourceIdInput();
```

- *Type:* java.lang.String

---

##### `sourceRegionInput`<sup>Optional</sup> <a name="sourceRegionInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.sourceRegionInput"></a>

```java
public java.lang.String getSourceRegionInput();
```

- *Type:* java.lang.String

---

##### `storageEncryptedInput`<sup>Optional</sup> <a name="storageEncryptedInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.storageEncryptedInput"></a>

```java
public java.lang.Boolean|IResolvable getStorageEncryptedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `storageTypeInput`<sup>Optional</sup> <a name="storageTypeInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.storageTypeInput"></a>

```java
public java.lang.String getStorageTypeInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.tagsInput"></a>

```java
public IResolvable|java.util.List<RdsDbClusterTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTags">RdsDbClusterTags</a>>

---

##### `useLatestRestorableTimeInput`<sup>Optional</sup> <a name="useLatestRestorableTimeInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.useLatestRestorableTimeInput"></a>

```java
public java.lang.Boolean|IResolvable getUseLatestRestorableTimeInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `vpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="vpcSecurityGroupIdsInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.vpcSecurityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allocatedStorage`<sup>Required</sup> <a name="allocatedStorage" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.allocatedStorage"></a>

```java
public java.lang.Number getAllocatedStorage();
```

- *Type:* java.lang.Number

---

##### `autoMinorVersionUpgrade`<sup>Required</sup> <a name="autoMinorVersionUpgrade" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.autoMinorVersionUpgrade"></a>

```java
public java.lang.Boolean|IResolvable getAutoMinorVersionUpgrade();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.availabilityZones"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZones();
```

- *Type:* java.util.List<java.lang.String>

---

##### `backtrackWindow`<sup>Required</sup> <a name="backtrackWindow" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.backtrackWindow"></a>

```java
public java.lang.Number getBacktrackWindow();
```

- *Type:* java.lang.Number

---

##### `backupRetentionPeriod`<sup>Required</sup> <a name="backupRetentionPeriod" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.backupRetentionPeriod"></a>

```java
public java.lang.Number getBackupRetentionPeriod();
```

- *Type:* java.lang.Number

---

##### `clusterScalabilityType`<sup>Required</sup> <a name="clusterScalabilityType" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.clusterScalabilityType"></a>

```java
public java.lang.String getClusterScalabilityType();
```

- *Type:* java.lang.String

---

##### `copyTagsToSnapshot`<sup>Required</sup> <a name="copyTagsToSnapshot" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.copyTagsToSnapshot"></a>

```java
public java.lang.Boolean|IResolvable getCopyTagsToSnapshot();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `databaseInsightsMode`<sup>Required</sup> <a name="databaseInsightsMode" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.databaseInsightsMode"></a>

```java
public java.lang.String getDatabaseInsightsMode();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="dbClusterIdentifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterIdentifier"></a>

```java
public java.lang.String getDbClusterIdentifier();
```

- *Type:* java.lang.String

---

##### `dbClusterInstanceClass`<sup>Required</sup> <a name="dbClusterInstanceClass" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterInstanceClass"></a>

```java
public java.lang.String getDbClusterInstanceClass();
```

- *Type:* java.lang.String

---

##### `dbClusterParameterGroupName`<sup>Required</sup> <a name="dbClusterParameterGroupName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbClusterParameterGroupName"></a>

```java
public java.lang.String getDbClusterParameterGroupName();
```

- *Type:* java.lang.String

---

##### `dbInstanceParameterGroupName`<sup>Required</sup> <a name="dbInstanceParameterGroupName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbInstanceParameterGroupName"></a>

```java
public java.lang.String getDbInstanceParameterGroupName();
```

- *Type:* java.lang.String

---

##### `dbSubnetGroupName`<sup>Required</sup> <a name="dbSubnetGroupName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbSubnetGroupName"></a>

```java
public java.lang.String getDbSubnetGroupName();
```

- *Type:* java.lang.String

---

##### `dbSystemId`<sup>Required</sup> <a name="dbSystemId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.dbSystemId"></a>

```java
public java.lang.String getDbSystemId();
```

- *Type:* java.lang.String

---

##### `deleteAutomatedBackups`<sup>Required</sup> <a name="deleteAutomatedBackups" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.deleteAutomatedBackups"></a>

```java
public java.lang.Boolean|IResolvable getDeleteAutomatedBackups();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.deletionProtection"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtection();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `domainIamRoleName`<sup>Required</sup> <a name="domainIamRoleName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.domainIamRoleName"></a>

```java
public java.lang.String getDomainIamRoleName();
```

- *Type:* java.lang.String

---

##### `enableCloudwatchLogsExports`<sup>Required</sup> <a name="enableCloudwatchLogsExports" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableCloudwatchLogsExports"></a>

```java
public java.util.List<java.lang.String> getEnableCloudwatchLogsExports();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enableGlobalWriteForwarding`<sup>Required</sup> <a name="enableGlobalWriteForwarding" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableGlobalWriteForwarding"></a>

```java
public java.lang.Boolean|IResolvable getEnableGlobalWriteForwarding();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableHttpEndpoint`<sup>Required</sup> <a name="enableHttpEndpoint" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableHttpEndpoint"></a>

```java
public java.lang.Boolean|IResolvable getEnableHttpEndpoint();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableIamDatabaseAuthentication`<sup>Required</sup> <a name="enableIamDatabaseAuthentication" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableIamDatabaseAuthentication"></a>

```java
public java.lang.Boolean|IResolvable getEnableIamDatabaseAuthentication();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableLocalWriteForwarding`<sup>Required</sup> <a name="enableLocalWriteForwarding" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.enableLocalWriteForwarding"></a>

```java
public java.lang.Boolean|IResolvable getEnableLocalWriteForwarding();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engine"></a>

```java
public java.lang.String getEngine();
```

- *Type:* java.lang.String

---

##### `engineLifecycleSupport`<sup>Required</sup> <a name="engineLifecycleSupport" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engineLifecycleSupport"></a>

```java
public java.lang.String getEngineLifecycleSupport();
```

- *Type:* java.lang.String

---

##### `engineMode`<sup>Required</sup> <a name="engineMode" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engineMode"></a>

```java
public java.lang.String getEngineMode();
```

- *Type:* java.lang.String

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.engineVersion"></a>

```java
public java.lang.String getEngineVersion();
```

- *Type:* java.lang.String

---

##### `globalClusterIdentifier`<sup>Required</sup> <a name="globalClusterIdentifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.globalClusterIdentifier"></a>

```java
public java.lang.String getGlobalClusterIdentifier();
```

- *Type:* java.lang.String

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `manageMasterUserPassword`<sup>Required</sup> <a name="manageMasterUserPassword" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.manageMasterUserPassword"></a>

```java
public java.lang.Boolean|IResolvable getManageMasterUserPassword();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `masterUserAuthenticationType`<sup>Required</sup> <a name="masterUserAuthenticationType" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUserAuthenticationType"></a>

```java
public java.lang.String getMasterUserAuthenticationType();
```

- *Type:* java.lang.String

---

##### `masterUsername`<sup>Required</sup> <a name="masterUsername" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUsername"></a>

```java
public java.lang.String getMasterUsername();
```

- *Type:* java.lang.String

---

##### `masterUserPassword`<sup>Required</sup> <a name="masterUserPassword" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.masterUserPassword"></a>

```java
public java.lang.String getMasterUserPassword();
```

- *Type:* java.lang.String

---

##### `monitoringInterval`<sup>Required</sup> <a name="monitoringInterval" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.monitoringInterval"></a>

```java
public java.lang.Number getMonitoringInterval();
```

- *Type:* java.lang.Number

---

##### `monitoringRoleArn`<sup>Required</sup> <a name="monitoringRoleArn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.monitoringRoleArn"></a>

```java
public java.lang.String getMonitoringRoleArn();
```

- *Type:* java.lang.String

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.networkType"></a>

```java
public java.lang.String getNetworkType();
```

- *Type:* java.lang.String

---

##### `performanceInsightsEnabled`<sup>Required</sup> <a name="performanceInsightsEnabled" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.performanceInsightsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getPerformanceInsightsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `performanceInsightsKmsKeyId`<sup>Required</sup> <a name="performanceInsightsKmsKeyId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.performanceInsightsKmsKeyId"></a>

```java
public java.lang.String getPerformanceInsightsKmsKeyId();
```

- *Type:* java.lang.String

---

##### `performanceInsightsRetentionPeriod`<sup>Required</sup> <a name="performanceInsightsRetentionPeriod" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.performanceInsightsRetentionPeriod"></a>

```java
public java.lang.Number getPerformanceInsightsRetentionPeriod();
```

- *Type:* java.lang.Number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `preferredBackupWindow`<sup>Required</sup> <a name="preferredBackupWindow" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.preferredBackupWindow"></a>

```java
public java.lang.String getPreferredBackupWindow();
```

- *Type:* java.lang.String

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.preferredMaintenanceWindow"></a>

```java
public java.lang.String getPreferredMaintenanceWindow();
```

- *Type:* java.lang.String

---

##### `publiclyAccessible`<sup>Required</sup> <a name="publiclyAccessible" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.publiclyAccessible"></a>

```java
public java.lang.Boolean|IResolvable getPubliclyAccessible();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `replicationSourceIdentifier`<sup>Required</sup> <a name="replicationSourceIdentifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.replicationSourceIdentifier"></a>

```java
public java.lang.String getReplicationSourceIdentifier();
```

- *Type:* java.lang.String

---

##### `restoreToTime`<sup>Required</sup> <a name="restoreToTime" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.restoreToTime"></a>

```java
public java.lang.String getRestoreToTime();
```

- *Type:* java.lang.String

---

##### `restoreType`<sup>Required</sup> <a name="restoreType" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.restoreType"></a>

```java
public java.lang.String getRestoreType();
```

- *Type:* java.lang.String

---

##### `snapshotIdentifier`<sup>Required</sup> <a name="snapshotIdentifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.snapshotIdentifier"></a>

```java
public java.lang.String getSnapshotIdentifier();
```

- *Type:* java.lang.String

---

##### `sourceDbClusterIdentifier`<sup>Required</sup> <a name="sourceDbClusterIdentifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.sourceDbClusterIdentifier"></a>

```java
public java.lang.String getSourceDbClusterIdentifier();
```

- *Type:* java.lang.String

---

##### `sourceDbClusterResourceId`<sup>Required</sup> <a name="sourceDbClusterResourceId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.sourceDbClusterResourceId"></a>

```java
public java.lang.String getSourceDbClusterResourceId();
```

- *Type:* java.lang.String

---

##### `sourceRegion`<sup>Required</sup> <a name="sourceRegion" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.sourceRegion"></a>

```java
public java.lang.String getSourceRegion();
```

- *Type:* java.lang.String

---

##### `storageEncrypted`<sup>Required</sup> <a name="storageEncrypted" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.storageEncrypted"></a>

```java
public java.lang.Boolean|IResolvable getStorageEncrypted();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.storageType"></a>

```java
public java.lang.String getStorageType();
```

- *Type:* java.lang.String

---

##### `useLatestRestorableTime`<sup>Required</sup> <a name="useLatestRestorableTime" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.useLatestRestorableTime"></a>

```java
public java.lang.Boolean|IResolvable getUseLatestRestorableTime();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `vpcSecurityGroupIds`<sup>Required</sup> <a name="vpcSecurityGroupIds" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.vpcSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RdsDbClusterAssociatedRoles <a name="RdsDbClusterAssociatedRoles" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRoles.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_cluster.RdsDbClusterAssociatedRoles;

RdsDbClusterAssociatedRoles.builder()
//  .featureName(java.lang.String)
//  .roleArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRoles.property.featureName">featureName</a></code> | <code>java.lang.String</code> | The name of the feature associated with the AWS Identity and Access Management (IAM) role. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRoles.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the IAM role that is associated with the DB cluster. |

---

##### `featureName`<sup>Optional</sup> <a name="featureName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRoles.property.featureName"></a>

```java
public java.lang.String getFeatureName();
```

- *Type:* java.lang.String

The name of the feature associated with the AWS Identity and Access Management (IAM) role.

IAM roles that are associated with a DB cluster grant permission for the DB cluster to access other AWS services on your behalf. For the list of supported feature names, see the `SupportedFeatureNames` description in [DBEngineVersion](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DBEngineVersion.html) in the *Amazon RDS API Reference*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#feature_name RdsDbCluster#feature_name}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRoles.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the IAM role that is associated with the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#role_arn RdsDbCluster#role_arn}

---

### RdsDbClusterConfig <a name="RdsDbClusterConfig" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_cluster.RdsDbClusterConfig;

RdsDbClusterConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .allocatedStorage(java.lang.Number)
//  .associatedRoles(IResolvable|java.util.List<RdsDbClusterAssociatedRoles>)
//  .autoMinorVersionUpgrade(java.lang.Boolean|IResolvable)
//  .availabilityZones(java.util.List<java.lang.String>)
//  .backtrackWindow(java.lang.Number)
//  .backupRetentionPeriod(java.lang.Number)
//  .clusterScalabilityType(java.lang.String)
//  .copyTagsToSnapshot(java.lang.Boolean|IResolvable)
//  .databaseInsightsMode(java.lang.String)
//  .databaseName(java.lang.String)
//  .dbClusterIdentifier(java.lang.String)
//  .dbClusterInstanceClass(java.lang.String)
//  .dbClusterParameterGroupName(java.lang.String)
//  .dbInstanceParameterGroupName(java.lang.String)
//  .dbSubnetGroupName(java.lang.String)
//  .dbSystemId(java.lang.String)
//  .deleteAutomatedBackups(java.lang.Boolean|IResolvable)
//  .deletionProtection(java.lang.Boolean|IResolvable)
//  .domain(java.lang.String)
//  .domainIamRoleName(java.lang.String)
//  .enableCloudwatchLogsExports(java.util.List<java.lang.String>)
//  .enableGlobalWriteForwarding(java.lang.Boolean|IResolvable)
//  .enableHttpEndpoint(java.lang.Boolean|IResolvable)
//  .enableIamDatabaseAuthentication(java.lang.Boolean|IResolvable)
//  .enableLocalWriteForwarding(java.lang.Boolean|IResolvable)
//  .engine(java.lang.String)
//  .engineLifecycleSupport(java.lang.String)
//  .engineMode(java.lang.String)
//  .engineVersion(java.lang.String)
//  .globalClusterIdentifier(java.lang.String)
//  .iops(java.lang.Number)
//  .kmsKeyId(java.lang.String)
//  .manageMasterUserPassword(java.lang.Boolean|IResolvable)
//  .masterUserAuthenticationType(java.lang.String)
//  .masterUsername(java.lang.String)
//  .masterUserPassword(java.lang.String)
//  .masterUserSecret(RdsDbClusterMasterUserSecret)
//  .monitoringInterval(java.lang.Number)
//  .monitoringRoleArn(java.lang.String)
//  .networkType(java.lang.String)
//  .performanceInsightsEnabled(java.lang.Boolean|IResolvable)
//  .performanceInsightsKmsKeyId(java.lang.String)
//  .performanceInsightsRetentionPeriod(java.lang.Number)
//  .port(java.lang.Number)
//  .preferredBackupWindow(java.lang.String)
//  .preferredMaintenanceWindow(java.lang.String)
//  .publiclyAccessible(java.lang.Boolean|IResolvable)
//  .replicationSourceIdentifier(java.lang.String)
//  .restoreToTime(java.lang.String)
//  .restoreType(java.lang.String)
//  .scalingConfiguration(RdsDbClusterScalingConfiguration)
//  .serverlessV2ScalingConfiguration(RdsDbClusterServerlessV2ScalingConfiguration)
//  .snapshotIdentifier(java.lang.String)
//  .sourceDbClusterIdentifier(java.lang.String)
//  .sourceDbClusterResourceId(java.lang.String)
//  .sourceRegion(java.lang.String)
//  .storageEncrypted(java.lang.Boolean|IResolvable)
//  .storageType(java.lang.String)
//  .tags(IResolvable|java.util.List<RdsDbClusterTags>)
//  .useLatestRestorableTime(java.lang.Boolean|IResolvable)
//  .vpcSecurityGroupIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.allocatedStorage">allocatedStorage</a></code> | <code>java.lang.Number</code> | The amount of storage in gibibytes (GiB) to allocate to each DB instance in the Multi-AZ DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.associatedRoles">associatedRoles</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRoles">RdsDbClusterAssociatedRoles</a>></code> | Provides a list of the AWS Identity and Access Management (IAM) roles that are associated with the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether minor engine upgrades are applied automatically to the DB cluster during the maintenance window. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | A list of Availability Zones (AZs) where instances in the DB cluster can be created. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.backtrackWindow">backtrackWindow</a></code> | <code>java.lang.Number</code> | The target backtrack window, in seconds. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.backupRetentionPeriod">backupRetentionPeriod</a></code> | <code>java.lang.Number</code> | The number of days for which automated backups are retained. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.clusterScalabilityType">clusterScalabilityType</a></code> | <code>java.lang.String</code> | Specifies the scalability mode of the Aurora DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.copyTagsToSnapshot">copyTagsToSnapshot</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A value that indicates whether to copy all tags from the DB cluster to snapshots of the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.databaseInsightsMode">databaseInsightsMode</a></code> | <code>java.lang.String</code> | The mode of Database Insights to enable for the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | The name of your database. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.dbClusterIdentifier">dbClusterIdentifier</a></code> | <code>java.lang.String</code> | The DB cluster identifier. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.dbClusterInstanceClass">dbClusterInstanceClass</a></code> | <code>java.lang.String</code> | The compute and memory capacity of each DB instance in the Multi-AZ DB cluster, for example ``db.m6gd.xlarge``. Not all DB instance classes are available in all AWS-Regions, or for all database engines.  For the full list of DB instance classes and availability for your engine, see [DB instance class](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html) in the *Amazon RDS User Guide*.  This setting is required to create a Multi-AZ DB cluster.  Valid for Cluster Type: Multi-AZ DB clusters only. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.dbClusterParameterGroupName">dbClusterParameterGroupName</a></code> | <code>java.lang.String</code> | The name of the DB cluster parameter group to associate with this DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.dbInstanceParameterGroupName">dbInstanceParameterGroupName</a></code> | <code>java.lang.String</code> | The name of the DB parameter group to apply to all instances of the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.dbSubnetGroupName">dbSubnetGroupName</a></code> | <code>java.lang.String</code> | A DB subnet group that you want to associate with this DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.dbSystemId">dbSystemId</a></code> | <code>java.lang.String</code> | Reserved for future use. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.deleteAutomatedBackups">deleteAutomatedBackups</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether to remove automated backups immediately after the DB cluster is deleted. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A value that indicates whether the DB cluster has deletion protection enabled. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.domain">domain</a></code> | <code>java.lang.String</code> | Indicates the directory ID of the Active Directory to create the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.domainIamRoleName">domainIamRoleName</a></code> | <code>java.lang.String</code> | Specifies the name of the IAM role to use when making API calls to the Directory Service. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.enableCloudwatchLogsExports">enableCloudwatchLogsExports</a></code> | <code>java.util.List<java.lang.String></code> | The list of log types that need to be enabled for exporting to CloudWatch Logs. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.enableGlobalWriteForwarding">enableGlobalWriteForwarding</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether to enable this DB cluster to forward write operations to the primary cluster of a global cluster (Aurora global database). |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.enableHttpEndpoint">enableHttpEndpoint</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether to enable the HTTP endpoint for the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.enableIamDatabaseAuthentication">enableIamDatabaseAuthentication</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.enableLocalWriteForwarding">enableLocalWriteForwarding</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether read replicas can forward write operations to the writer DB instance in the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.engine">engine</a></code> | <code>java.lang.String</code> | The name of the database engine to be used for this DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.engineLifecycleSupport">engineLifecycleSupport</a></code> | <code>java.lang.String</code> | The life cycle type for this DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.engineMode">engineMode</a></code> | <code>java.lang.String</code> | The DB engine mode of the DB cluster, either ``provisioned`` or ``serverless``. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | The version number of the database engine to use. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.globalClusterIdentifier">globalClusterIdentifier</a></code> | <code>java.lang.String</code> | If you are configuring an Aurora global database cluster and want your Aurora DB cluster to be a secondary member in the global database cluster, specify the global cluster ID of the global database cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.iops">iops</a></code> | <code>java.lang.Number</code> | The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for each DB instance in the Multi-AZ DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the AWS KMS key that is used to encrypt the database instances in the DB cluster, such as ``arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef``. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.manageMasterUserPassword">manageMasterUserPassword</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether to manage the master user password with AWS Secrets Manager. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.masterUserAuthenticationType">masterUserAuthenticationType</a></code> | <code>java.lang.String</code> | Specifies the authentication type for the master user. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.masterUsername">masterUsername</a></code> | <code>java.lang.String</code> | The name of the master user for the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.masterUserPassword">masterUserPassword</a></code> | <code>java.lang.String</code> | The master password for the DB instance. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.masterUserSecret">masterUserSecret</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecret">RdsDbClusterMasterUserSecret</a></code> | The secret managed by RDS in AWS Secrets Manager for the master user password. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.monitoringInterval">monitoringInterval</a></code> | <code>java.lang.Number</code> | The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.monitoringRoleArn">monitoringRoleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) for the IAM role that permits RDS to send Enhanced Monitoring metrics to Amazon CloudWatch Logs. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.networkType">networkType</a></code> | <code>java.lang.String</code> | The network type of the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.performanceInsightsEnabled">performanceInsightsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether to turn on Performance Insights for the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.performanceInsightsKmsKeyId">performanceInsightsKmsKeyId</a></code> | <code>java.lang.String</code> | The AWS KMS key identifier for encryption of Performance Insights data. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.performanceInsightsRetentionPeriod">performanceInsightsRetentionPeriod</a></code> | <code>java.lang.Number</code> | The number of days to retain Performance Insights data. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.port">port</a></code> | <code>java.lang.Number</code> | The port number on which the DB instances in the DB cluster accept connections. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.preferredBackupWindow">preferredBackupWindow</a></code> | <code>java.lang.String</code> | The daily time range during which automated backups are created. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>java.lang.String</code> | The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC). |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.publiclyAccessible">publiclyAccessible</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether the DB cluster is publicly accessible. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.replicationSourceIdentifier">replicationSourceIdentifier</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the source DB instance or DB cluster if this DB cluster is created as a read replica. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.restoreToTime">restoreToTime</a></code> | <code>java.lang.String</code> | The date and time to restore the DB cluster to. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.restoreType">restoreType</a></code> | <code>java.lang.String</code> | The type of restore to be performed. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.scalingConfiguration">scalingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration">RdsDbClusterScalingConfiguration</a></code> | The scaling configuration of an Aurora Serverless v1 DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.serverlessV2ScalingConfiguration">serverlessV2ScalingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfiguration">RdsDbClusterServerlessV2ScalingConfiguration</a></code> | The scaling configuration of an Aurora Serverless V2 DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.snapshotIdentifier">snapshotIdentifier</a></code> | <code>java.lang.String</code> | The identifier for the DB snapshot or DB cluster snapshot to restore from. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.sourceDbClusterIdentifier">sourceDbClusterIdentifier</a></code> | <code>java.lang.String</code> | When restoring a DB cluster to a point in time, the identifier of the source DB cluster from which to restore. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.sourceDbClusterResourceId">sourceDbClusterResourceId</a></code> | <code>java.lang.String</code> | The resource ID of the source DB cluster from which to restore. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.sourceRegion">sourceRegion</a></code> | <code>java.lang.String</code> | The AWS Region which contains the source DB cluster when replicating a DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.storageEncrypted">storageEncrypted</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether the DB cluster is encrypted. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.storageType">storageType</a></code> | <code>java.lang.String</code> | The storage type to associate with the DB cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTags">RdsDbClusterTags</a>></code> | Tags to assign to the DB cluster.  Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.useLatestRestorableTime">useLatestRestorableTime</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A value that indicates whether to restore the DB cluster to the latest restorable backup time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | A list of EC2 VPC security groups to associate with this DB cluster. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `allocatedStorage`<sup>Optional</sup> <a name="allocatedStorage" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.allocatedStorage"></a>

```java
public java.lang.Number getAllocatedStorage();
```

- *Type:* java.lang.Number

The amount of storage in gibibytes (GiB) to allocate to each DB instance in the Multi-AZ DB cluster.

Valid for Cluster Type: Multi-AZ DB clusters only
This setting is required to create a Multi-AZ DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#allocated_storage RdsDbCluster#allocated_storage}

---

##### `associatedRoles`<sup>Optional</sup> <a name="associatedRoles" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.associatedRoles"></a>

```java
public IResolvable|java.util.List<RdsDbClusterAssociatedRoles> getAssociatedRoles();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRoles">RdsDbClusterAssociatedRoles</a>>

Provides a list of the AWS Identity and Access Management (IAM) roles that are associated with the DB cluster.

IAM roles that are associated with a DB cluster grant permission for the DB cluster to access other Amazon Web Services on your behalf.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#associated_roles RdsDbCluster#associated_roles}

---

##### `autoMinorVersionUpgrade`<sup>Optional</sup> <a name="autoMinorVersionUpgrade" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.autoMinorVersionUpgrade"></a>

```java
public java.lang.Boolean|IResolvable getAutoMinorVersionUpgrade();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether minor engine upgrades are applied automatically to the DB cluster during the maintenance window.

By default, minor engine upgrades are applied automatically.
Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB cluster.
For more information about automatic minor version upgrades, see [Automatically upgrading the minor engine version](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Upgrading.html#USER_UpgradeDBInstance.Upgrading.AutoMinorVersionUpgrades).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#auto_minor_version_upgrade RdsDbCluster#auto_minor_version_upgrade}

---

##### `availabilityZones`<sup>Optional</sup> <a name="availabilityZones" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.availabilityZones"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZones();
```

- *Type:* java.util.List<java.lang.String>

A list of Availability Zones (AZs) where instances in the DB cluster can be created.

For information on AWS Regions and Availability Zones, see [Choosing the Regions and Availability Zones](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.RegionsAndAvailabilityZones.html) in the *Amazon Aurora User Guide*.
Valid for: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#availability_zones RdsDbCluster#availability_zones}

---

##### `backtrackWindow`<sup>Optional</sup> <a name="backtrackWindow" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.backtrackWindow"></a>

```java
public java.lang.Number getBacktrackWindow();
```

- *Type:* java.lang.Number

The target backtrack window, in seconds.

To disable backtracking, set this value to `0`.
Valid for Cluster Type: Aurora MySQL DB clusters only
Default: `0`
Constraints:

* If specified, this value must be set to a number from 0 to 259,200 (72 hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#backtrack_window RdsDbCluster#backtrack_window}

---

##### `backupRetentionPeriod`<sup>Optional</sup> <a name="backupRetentionPeriod" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.backupRetentionPeriod"></a>

```java
public java.lang.Number getBackupRetentionPeriod();
```

- *Type:* java.lang.Number

The number of days for which automated backups are retained.

Default: 1
Constraints:

* Must be a value from 1 to 35

Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#backup_retention_period RdsDbCluster#backup_retention_period}

---

##### `clusterScalabilityType`<sup>Optional</sup> <a name="clusterScalabilityType" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.clusterScalabilityType"></a>

```java
public java.lang.String getClusterScalabilityType();
```

- *Type:* java.lang.String

Specifies the scalability mode of the Aurora DB cluster.

When set to `limitless`, the cluster operates as an Aurora Limitless Database, allowing you to create a DB shard group for horizontal scaling (sharding) capabilities. When set to `standard` (the default), the cluster uses normal DB instance creation.
*Important:* Automated backup retention isn't supported with Aurora Limitless Database clusters. If you set this property to `limitless`, you cannot set `DeleteAutomatedBackups` to `false`. To create a backup, use manual snapshots instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#cluster_scalability_type RdsDbCluster#cluster_scalability_type}

---

##### `copyTagsToSnapshot`<sup>Optional</sup> <a name="copyTagsToSnapshot" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.copyTagsToSnapshot"></a>

```java
public java.lang.Boolean|IResolvable getCopyTagsToSnapshot();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A value that indicates whether to copy all tags from the DB cluster to snapshots of the DB cluster.

The default is not to copy them.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#copy_tags_to_snapshot RdsDbCluster#copy_tags_to_snapshot}

---

##### `databaseInsightsMode`<sup>Optional</sup> <a name="databaseInsightsMode" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.databaseInsightsMode"></a>

```java
public java.lang.String getDatabaseInsightsMode();
```

- *Type:* java.lang.String

The mode of Database Insights to enable for the DB cluster.

If you set this value to `advanced`, you must also set the `PerformanceInsightsEnabled` parameter to `true` and the `PerformanceInsightsRetentionPeriod` parameter to 465.
Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#database_insights_mode RdsDbCluster#database_insights_mode}

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

The name of your database.

If you don't provide a name, then Amazon RDS won't create a database in this DB cluster. For naming constraints, see [Naming Constraints](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_Limits.html#RDS_Limits.Constraints) in the *Amazon Aurora User Guide*.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#database_name RdsDbCluster#database_name}

---

##### `dbClusterIdentifier`<sup>Optional</sup> <a name="dbClusterIdentifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.dbClusterIdentifier"></a>

```java
public java.lang.String getDbClusterIdentifier();
```

- *Type:* java.lang.String

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

##### `dbClusterInstanceClass`<sup>Optional</sup> <a name="dbClusterInstanceClass" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.dbClusterInstanceClass"></a>

```java
public java.lang.String getDbClusterInstanceClass();
```

- *Type:* java.lang.String

The compute and memory capacity of each DB instance in the Multi-AZ DB cluster, for example ``db.m6gd.xlarge``. Not all DB instance classes are available in all AWS-Regions, or for all database engines.  For the full list of DB instance classes and availability for your engine, see [DB instance class](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html) in the *Amazon RDS User Guide*.  This setting is required to create a Multi-AZ DB cluster.  Valid for Cluster Type: Multi-AZ DB clusters only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#db_cluster_instance_class RdsDbCluster#db_cluster_instance_class}

---

##### `dbClusterParameterGroupName`<sup>Optional</sup> <a name="dbClusterParameterGroupName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.dbClusterParameterGroupName"></a>

```java
public java.lang.String getDbClusterParameterGroupName();
```

- *Type:* java.lang.String

The name of the DB cluster parameter group to associate with this DB cluster.

If you apply a parameter group to an existing DB cluster, then its DB instances might need to reboot. This can result in an outage while the DB instances are rebooting.
If you apply a change to parameter group associated with a stopped DB cluster, then the update stack waits until the DB cluster is started.
To list all of the available DB cluster parameter group names, use the following command:
`aws rds describe-db-cluster-parameter-groups --query "DBClusterParameterGroups[].DBClusterParameterGroupName" --output text`
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#db_cluster_parameter_group_name RdsDbCluster#db_cluster_parameter_group_name}

---

##### `dbInstanceParameterGroupName`<sup>Optional</sup> <a name="dbInstanceParameterGroupName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.dbInstanceParameterGroupName"></a>

```java
public java.lang.String getDbInstanceParameterGroupName();
```

- *Type:* java.lang.String

The name of the DB parameter group to apply to all instances of the DB cluster.

When you apply a parameter group using the `DBInstanceParameterGroupName` parameter, the DB cluster isn't rebooted automatically. Also, parameter changes are applied immediately rather than during the next maintenance window.
Valid for Cluster Type: Aurora DB clusters only
Default: The existing name setting
Constraints:

* The DB parameter group must be in the same DB parameter group family as this DB cluster.
* The `DBInstanceParameterGroupName` parameter is valid in combination with the `AllowMajorVersionUpgrade` parameter for a major version upgrade only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#db_instance_parameter_group_name RdsDbCluster#db_instance_parameter_group_name}

---

##### `dbSubnetGroupName`<sup>Optional</sup> <a name="dbSubnetGroupName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.dbSubnetGroupName"></a>

```java
public java.lang.String getDbSubnetGroupName();
```

- *Type:* java.lang.String

A DB subnet group that you want to associate with this DB cluster.

If you are restoring a DB cluster to a point in time with `RestoreType` set to `copy-on-write`, and don't specify a DB subnet group name, then the DB cluster is restored with a default DB subnet group.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#db_subnet_group_name RdsDbCluster#db_subnet_group_name}

---

##### `dbSystemId`<sup>Optional</sup> <a name="dbSystemId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.dbSystemId"></a>

```java
public java.lang.String getDbSystemId();
```

- *Type:* java.lang.String

Reserved for future use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#db_system_id RdsDbCluster#db_system_id}

---

##### `deleteAutomatedBackups`<sup>Optional</sup> <a name="deleteAutomatedBackups" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.deleteAutomatedBackups"></a>

```java
public java.lang.Boolean|IResolvable getDeleteAutomatedBackups();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether to remove automated backups immediately after the DB cluster is deleted.

This parameter isn't case-sensitive. The default is to remove automated backups immediately after the DB cluster is deleted, unless the AWS Backup policy specifies a point-in-time restore rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#delete_automated_backups RdsDbCluster#delete_automated_backups}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.deletionProtection"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtection();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A value that indicates whether the DB cluster has deletion protection enabled.

The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#deletion_protection RdsDbCluster#deletion_protection}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

Indicates the directory ID of the Active Directory to create the DB cluster.

For Amazon Aurora DB clusters, Amazon RDS can use Kerberos authentication to authenticate users that connect to the DB cluster.
For more information, see [Kerberos authentication](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/kerberos-authentication.html) in the *Amazon Aurora User Guide*.
Valid for: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#domain RdsDbCluster#domain}

---

##### `domainIamRoleName`<sup>Optional</sup> <a name="domainIamRoleName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.domainIamRoleName"></a>

```java
public java.lang.String getDomainIamRoleName();
```

- *Type:* java.lang.String

Specifies the name of the IAM role to use when making API calls to the Directory Service.

Valid for: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#domain_iam_role_name RdsDbCluster#domain_iam_role_name}

---

##### `enableCloudwatchLogsExports`<sup>Optional</sup> <a name="enableCloudwatchLogsExports" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.enableCloudwatchLogsExports"></a>

```java
public java.util.List<java.lang.String> getEnableCloudwatchLogsExports();
```

- *Type:* java.util.List<java.lang.String>

The list of log types that need to be enabled for exporting to CloudWatch Logs.

The values in the list depend on the DB engine being used. For more information, see [Publishing Database Logs to Amazon CloudWatch Logs](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch) in the *Amazon Aurora User Guide*.
*Aurora MySQL*
Valid values: `audit`, `error`, `general`, `slowquery`
*Aurora PostgreSQL*
Valid values: `postgresql`
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#enable_cloudwatch_logs_exports RdsDbCluster#enable_cloudwatch_logs_exports}

---

##### `enableGlobalWriteForwarding`<sup>Optional</sup> <a name="enableGlobalWriteForwarding" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.enableGlobalWriteForwarding"></a>

```java
public java.lang.Boolean|IResolvable getEnableGlobalWriteForwarding();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether to enable this DB cluster to forward write operations to the primary cluster of a global cluster (Aurora global database).

By default, write operations are not allowed on Aurora DB clusters that are secondary clusters in an Aurora global database.
You can set this value only on Aurora DB clusters that are members of an Aurora global database. With this parameter enabled, a secondary cluster can forward writes to the current primary cluster, and the resulting changes are replicated back to this cluster. For the primary DB cluster of an Aurora global database, this value is used immediately if the primary is demoted by a global cluster API operation, but it does nothing until then.
Valid for Cluster Type: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#enable_global_write_forwarding RdsDbCluster#enable_global_write_forwarding}

---

##### `enableHttpEndpoint`<sup>Optional</sup> <a name="enableHttpEndpoint" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.enableHttpEndpoint"></a>

```java
public java.lang.Boolean|IResolvable getEnableHttpEndpoint();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether to enable the HTTP endpoint for the DB cluster.

By default, the HTTP endpoint isn't enabled.
When enabled, the HTTP endpoint provides a connectionless web service API (RDS Data API) for running SQL queries on the DB cluster. You can also query your database from inside the RDS console with the RDS query editor.
For more information, see [Using RDS Data API](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html) in the *Amazon Aurora User Guide*.
Valid for Cluster Type: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#enable_http_endpoint RdsDbCluster#enable_http_endpoint}

---

##### `enableIamDatabaseAuthentication`<sup>Optional</sup> <a name="enableIamDatabaseAuthentication" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.enableIamDatabaseAuthentication"></a>

```java
public java.lang.Boolean|IResolvable getEnableIamDatabaseAuthentication();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts.

By default, mapping is disabled.
For more information, see [IAM Database Authentication](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html) in the *Amazon Aurora User Guide.*
Valid for: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#enable_iam_database_authentication RdsDbCluster#enable_iam_database_authentication}

---

##### `enableLocalWriteForwarding`<sup>Optional</sup> <a name="enableLocalWriteForwarding" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.enableLocalWriteForwarding"></a>

```java
public java.lang.Boolean|IResolvable getEnableLocalWriteForwarding();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether read replicas can forward write operations to the writer DB instance in the DB cluster.

By default, write operations aren't allowed on reader DB instances.
Valid for: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#enable_local_write_forwarding RdsDbCluster#enable_local_write_forwarding}

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.engine"></a>

```java
public java.lang.String getEngine();
```

- *Type:* java.lang.String

The name of the database engine to be used for this DB cluster.

Valid Values:

* `aurora-mysql`
* `aurora-postgresql`
* `mysql`
* `postgres`

Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#engine RdsDbCluster#engine}

---

##### `engineLifecycleSupport`<sup>Optional</sup> <a name="engineLifecycleSupport" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.engineLifecycleSupport"></a>

```java
public java.lang.String getEngineLifecycleSupport();
```

- *Type:* java.lang.String

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

##### `engineMode`<sup>Optional</sup> <a name="engineMode" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.engineMode"></a>

```java
public java.lang.String getEngineMode();
```

- *Type:* java.lang.String

The DB engine mode of the DB cluster, either ``provisioned`` or ``serverless``.

The `serverless` engine mode only applies for Aurora Serverless v1 DB clusters. Aurora Serverless v2 DB clusters use the `provisioned` engine mode.
For information about limitations and requirements for Serverless DB clusters, see the following sections in the *Amazon Aurora User Guide*:

* [Limitations of Aurora Serverless v1](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html#aurora-serverless.limitations)
* [Requirements for Aurora Serverless v2](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.requirements.html)

Valid for Cluster Type: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#engine_mode RdsDbCluster#engine_mode}

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.engineVersion"></a>

```java
public java.lang.String getEngineVersion();
```

- *Type:* java.lang.String

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

##### `globalClusterIdentifier`<sup>Optional</sup> <a name="globalClusterIdentifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.globalClusterIdentifier"></a>

```java
public java.lang.String getGlobalClusterIdentifier();
```

- *Type:* java.lang.String

If you are configuring an Aurora global database cluster and want your Aurora DB cluster to be a secondary member in the global database cluster, specify the global cluster ID of the global database cluster.

To define the primary database cluster of the global cluster, use the [AWS::RDS::GlobalCluster](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html) resource.
If you aren't configuring a global database cluster, don't specify this property.
To remove the DB cluster from a global database cluster, specify an empty value for the `GlobalClusterIdentifier` property.
For information about Aurora global databases, see [Working with Amazon Aurora Global Databases](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html) in the *Amazon Aurora User Guide*.
Valid for: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#global_cluster_identifier RdsDbCluster#global_cluster_identifier}

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for each DB instance in the Multi-AZ DB cluster.

For information about valid IOPS values, see [Provisioned IOPS storage](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#USER_PIOPS) in the *Amazon RDS User Guide*.
This setting is required to create a Multi-AZ DB cluster.
Valid for Cluster Type: Multi-AZ DB clusters only
Constraints:

* Must be a multiple between .5 and 50 of the storage amount for the DB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#iops RdsDbCluster#iops}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the AWS KMS key that is used to encrypt the database instances in the DB cluster, such as ``arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef``.

If you enable the `StorageEncrypted` property but don't specify this property, the default KMS key is used. If you specify this property, you must set the `StorageEncrypted` property to `true`.
If you specify the `SnapshotIdentifier` property, the `StorageEncrypted` property value is inherited from the snapshot, and if the DB cluster is encrypted, the specified `KmsKeyId` property is used.
If you create a read replica of an encrypted DB cluster in another AWS Region, make sure to set `KmsKeyId` to a KMS key identifier that is valid in the destination AWS Region. This KMS key is used to encrypt the read replica in that AWS Region.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#kms_key_id RdsDbCluster#kms_key_id}

---

##### `manageMasterUserPassword`<sup>Optional</sup> <a name="manageMasterUserPassword" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.manageMasterUserPassword"></a>

```java
public java.lang.Boolean|IResolvable getManageMasterUserPassword();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether to manage the master user password with AWS Secrets Manager.

For more information, see [Password management with Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the *Amazon RDS User Guide* and [Password management with Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-secrets-manager.html) in the *Amazon Aurora User Guide.*
Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
Constraints:

* Can't manage the master user password with AWS Secrets Manager if `MasterUserPassword` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#manage_master_user_password RdsDbCluster#manage_master_user_password}

---

##### `masterUserAuthenticationType`<sup>Optional</sup> <a name="masterUserAuthenticationType" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.masterUserAuthenticationType"></a>

```java
public java.lang.String getMasterUserAuthenticationType();
```

- *Type:* java.lang.String

Specifies the authentication type for the master user.

With IAM master user authentication, you can configure the master DB user with IAM database authentication when you create a DB cluster.
You can specify one of the following values:

* `password` - Use standard database authentication with a password.
* `iam-db-auth` - Use IAM database authentication for the master user.

Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
This option is only valid for RDS for MySQL, RDS for MariaDB, RDS for PostgreSQL, Aurora MySQL, and Aurora PostgreSQL engines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#master_user_authentication_type RdsDbCluster#master_user_authentication_type}

---

##### `masterUsername`<sup>Optional</sup> <a name="masterUsername" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.masterUsername"></a>

```java
public java.lang.String getMasterUsername();
```

- *Type:* java.lang.String

The name of the master user for the DB cluster.

If you specify the `SourceDBClusterIdentifier`, `SnapshotIdentifier`, or `GlobalClusterIdentifier` property, don't specify this property. The value is inherited from the source DB cluster, the snapshot, or the primary DB cluster for the global database cluster, respectively.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#master_username RdsDbCluster#master_username}

---

##### `masterUserPassword`<sup>Optional</sup> <a name="masterUserPassword" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.masterUserPassword"></a>

```java
public java.lang.String getMasterUserPassword();
```

- *Type:* java.lang.String

The master password for the DB instance.

If you specify the `SourceDBClusterIdentifier`, `SnapshotIdentifier`, or `GlobalClusterIdentifier` property, don't specify this property. The value is inherited from the source DB cluster, the snapshot, or the primary DB cluster for the global database cluster, respectively.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#master_user_password RdsDbCluster#master_user_password}

---

##### `masterUserSecret`<sup>Optional</sup> <a name="masterUserSecret" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.masterUserSecret"></a>

```java
public RdsDbClusterMasterUserSecret getMasterUserSecret();
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecret">RdsDbClusterMasterUserSecret</a>

The secret managed by RDS in AWS Secrets Manager for the master user password.

When you restore a DB cluster from a snapshot, Amazon RDS generates a new secret instead of reusing the secret specified in the `SecretArn` property. This ensures that the restored DB cluster is securely managed with a dedicated secret. To maintain consistent integration with your application, you might need to update resource configurations to reference the newly created secret.
For more information, see [Password management with Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the *Amazon RDS User Guide* and [Password management with Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-secrets-manager.html) in the *Amazon Aurora User Guide.*

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#master_user_secret RdsDbCluster#master_user_secret}

---

##### `monitoringInterval`<sup>Optional</sup> <a name="monitoringInterval" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.monitoringInterval"></a>

```java
public java.lang.Number getMonitoringInterval();
```

- *Type:* java.lang.Number

The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB cluster.

To turn off collecting Enhanced Monitoring metrics, specify `0`.
If `MonitoringRoleArn` is specified, also set `MonitoringInterval` to a value other than `0`.
Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
Valid Values: `0 | 1 | 5 | 10 | 15 | 30 | 60`
Default: `0`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#monitoring_interval RdsDbCluster#monitoring_interval}

---

##### `monitoringRoleArn`<sup>Optional</sup> <a name="monitoringRoleArn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.monitoringRoleArn"></a>

```java
public java.lang.String getMonitoringRoleArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) for the IAM role that permits RDS to send Enhanced Monitoring metrics to Amazon CloudWatch Logs.

An example is `arn:aws:iam:123456789012:role/emaccess`. For information on creating a monitoring role, see [Setting up and enabling Enhanced Monitoring](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.OS.html#USER_Monitoring.OS.Enabling) in the *Amazon RDS User Guide*.
If `MonitoringInterval` is set to a value other than `0`, supply a `MonitoringRoleArn` value.
Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#monitoring_role_arn RdsDbCluster#monitoring_role_arn}

---

##### `networkType`<sup>Optional</sup> <a name="networkType" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.networkType"></a>

```java
public java.lang.String getNetworkType();
```

- *Type:* java.lang.String

The network type of the DB cluster.

Valid values:

* `IPV4`
* `DUAL`

The network type is determined by the `DBSubnetGroup` specified for the DB cluster. A `DBSubnetGroup` can support only the IPv4 protocol or the IPv4 and IPv6 protocols (`DUAL`).
For more information, see [Working with a DB instance in a VPC](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html) in the *Amazon Aurora User Guide.*
Valid for: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#network_type RdsDbCluster#network_type}

---

##### `performanceInsightsEnabled`<sup>Optional</sup> <a name="performanceInsightsEnabled" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.performanceInsightsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getPerformanceInsightsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether to turn on Performance Insights for the DB cluster.

For more information, see [Using Amazon Performance Insights](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html) in the *Amazon RDS User Guide*.
Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#performance_insights_enabled RdsDbCluster#performance_insights_enabled}

---

##### `performanceInsightsKmsKeyId`<sup>Optional</sup> <a name="performanceInsightsKmsKeyId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.performanceInsightsKmsKeyId"></a>

```java
public java.lang.String getPerformanceInsightsKmsKeyId();
```

- *Type:* java.lang.String

The AWS KMS key identifier for encryption of Performance Insights data.

The AWS KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
If you don't specify a value for `PerformanceInsightsKMSKeyId`, then Amazon RDS uses your default KMS key. There is a default KMS key for your AWS-account. Your AWS-account has a different default KMS key for each AWS-Region.
Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#performance_insights_kms_key_id RdsDbCluster#performance_insights_kms_key_id}

---

##### `performanceInsightsRetentionPeriod`<sup>Optional</sup> <a name="performanceInsightsRetentionPeriod" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.performanceInsightsRetentionPeriod"></a>

```java
public java.lang.Number getPerformanceInsightsRetentionPeriod();
```

- *Type:* java.lang.Number

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

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The port number on which the DB instances in the DB cluster accept connections.

Default:

* RDS for MySQL and Aurora MySQL - `3306`
* RDS for PostgreSQL and Aurora PostgreSQL - `5432`

The `No interruption` on update behavior only applies to DB clusters. If you are updating a DB instance, see [Port](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-database-instance.html#cfn-rds-dbinstance-port) for the AWS::RDS::DBInstance resource.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#port RdsDbCluster#port}

---

##### `preferredBackupWindow`<sup>Optional</sup> <a name="preferredBackupWindow" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.preferredBackupWindow"></a>

```java
public java.lang.String getPreferredBackupWindow();
```

- *Type:* java.lang.String

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

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.preferredMaintenanceWindow"></a>

```java
public java.lang.String getPreferredMaintenanceWindow();
```

- *Type:* java.lang.String

The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).

Format: `ddd:hh24:mi-ddd:hh24:mi`
The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week. To see the time blocks available, see [Maintaining an Amazon Aurora DB cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow.Aurora) in the *Amazon Aurora User Guide.*
Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.
Constraints: Minimum 30-minute window.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#preferred_maintenance_window RdsDbCluster#preferred_maintenance_window}

---

##### `publiclyAccessible`<sup>Optional</sup> <a name="publiclyAccessible" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.publiclyAccessible"></a>

```java
public java.lang.Boolean|IResolvable getPubliclyAccessible();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

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

##### `replicationSourceIdentifier`<sup>Optional</sup> <a name="replicationSourceIdentifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.replicationSourceIdentifier"></a>

```java
public java.lang.String getReplicationSourceIdentifier();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the source DB instance or DB cluster if this DB cluster is created as a read replica.

Valid for: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#replication_source_identifier RdsDbCluster#replication_source_identifier}

---

##### `restoreToTime`<sup>Optional</sup> <a name="restoreToTime" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.restoreToTime"></a>

```java
public java.lang.String getRestoreToTime();
```

- *Type:* java.lang.String

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

##### `restoreType`<sup>Optional</sup> <a name="restoreType" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.restoreType"></a>

```java
public java.lang.String getRestoreType();
```

- *Type:* java.lang.String

The type of restore to be performed.

You can specify one of the following values:

* `full-copy` - The new DB cluster is restored as a full copy of the source DB cluster.
* `copy-on-write` - The new DB cluster is restored as a clone of the source DB cluster.

If you don't specify a `RestoreType` value, then the new DB cluster is restored as a full copy of the source DB cluster.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#restore_type RdsDbCluster#restore_type}

---

##### `scalingConfiguration`<sup>Optional</sup> <a name="scalingConfiguration" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.scalingConfiguration"></a>

```java
public RdsDbClusterScalingConfiguration getScalingConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration">RdsDbClusterScalingConfiguration</a>

The scaling configuration of an Aurora Serverless v1 DB cluster.

This property is only supported for Aurora Serverless v1. For Aurora Serverless v2, Use the `ServerlessV2ScalingConfiguration` property.
Valid for: Aurora Serverless v1 DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#scaling_configuration RdsDbCluster#scaling_configuration}

---

##### `serverlessV2ScalingConfiguration`<sup>Optional</sup> <a name="serverlessV2ScalingConfiguration" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.serverlessV2ScalingConfiguration"></a>

```java
public RdsDbClusterServerlessV2ScalingConfiguration getServerlessV2ScalingConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfiguration">RdsDbClusterServerlessV2ScalingConfiguration</a>

The scaling configuration of an Aurora Serverless V2 DB cluster.

This property is only supported for Aurora Serverless v2. For Aurora Serverless v1, Use the `ScalingConfiguration` property.
Valid for: Aurora Serverless v2 DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#serverless_v2_scaling_configuration RdsDbCluster#serverless_v2_scaling_configuration}

---

##### `snapshotIdentifier`<sup>Optional</sup> <a name="snapshotIdentifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.snapshotIdentifier"></a>

```java
public java.lang.String getSnapshotIdentifier();
```

- *Type:* java.lang.String

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

##### `sourceDbClusterIdentifier`<sup>Optional</sup> <a name="sourceDbClusterIdentifier" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.sourceDbClusterIdentifier"></a>

```java
public java.lang.String getSourceDbClusterIdentifier();
```

- *Type:* java.lang.String

When restoring a DB cluster to a point in time, the identifier of the source DB cluster from which to restore.

Constraints:

* Must match the identifier of an existing DBCluster.
* Cannot be specified if `SourceDbClusterResourceId` is specified. You must specify either `SourceDBClusterIdentifier` or `SourceDbClusterResourceId`, but not both.

Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#source_db_cluster_identifier RdsDbCluster#source_db_cluster_identifier}

---

##### `sourceDbClusterResourceId`<sup>Optional</sup> <a name="sourceDbClusterResourceId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.sourceDbClusterResourceId"></a>

```java
public java.lang.String getSourceDbClusterResourceId();
```

- *Type:* java.lang.String

The resource ID of the source DB cluster from which to restore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#source_db_cluster_resource_id RdsDbCluster#source_db_cluster_resource_id}

---

##### `sourceRegion`<sup>Optional</sup> <a name="sourceRegion" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.sourceRegion"></a>

```java
public java.lang.String getSourceRegion();
```

- *Type:* java.lang.String

The AWS Region which contains the source DB cluster when replicating a DB cluster.

For example, `us-east-1`.
Valid for: Aurora DB clusters only

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#source_region RdsDbCluster#source_region}

---

##### `storageEncrypted`<sup>Optional</sup> <a name="storageEncrypted" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.storageEncrypted"></a>

```java
public java.lang.Boolean|IResolvable getStorageEncrypted();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether the DB cluster is encrypted.

If you specify the `KmsKeyId` property, then you must enable encryption.
If you specify the `SourceDBClusterIdentifier` property, don't specify this property. The value is inherited from the source DB cluster, and if the DB cluster is encrypted, the specified `KmsKeyId` property is used.
If you specify the `SnapshotIdentifier` and the specified snapshot is encrypted, don't specify this property. The value is inherited from the snapshot, and the specified `KmsKeyId` property is used.
If you specify the `SnapshotIdentifier` and the specified snapshot isn't encrypted, you can use this property to specify that the restored DB cluster is encrypted. Specify the `KmsKeyId` property for the KMS key to use for encryption. If you don't want the restored DB cluster to be encrypted, then don't set this property or set it to `false`.
If you specify both the `StorageEncrypted` and `SnapshotIdentifier` properties without specifying the `KmsKeyId` property, then the restored DB cluster inherits the encryption settings from the DB snapshot that provide.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#storage_encrypted RdsDbCluster#storage_encrypted}

---

##### `storageType`<sup>Optional</sup> <a name="storageType" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.storageType"></a>

```java
public java.lang.String getStorageType();
```

- *Type:* java.lang.String

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

```java
public IResolvable|java.util.List<RdsDbClusterTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTags">RdsDbClusterTags</a>>

Tags to assign to the DB cluster.  Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#tags RdsDbCluster#tags}

---

##### `useLatestRestorableTime`<sup>Optional</sup> <a name="useLatestRestorableTime" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.useLatestRestorableTime"></a>

```java
public java.lang.Boolean|IResolvable getUseLatestRestorableTime();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A value that indicates whether to restore the DB cluster to the latest restorable backup time.

By default, the DB cluster is not restored to the latest restorable backup time.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#use_latest_restorable_time RdsDbCluster#use_latest_restorable_time}

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="vpcSecurityGroupIds" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterConfig.property.vpcSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

A list of EC2 VPC security groups to associate with this DB cluster.

If you plan to update the resource, don't specify VPC security groups in a shared VPC.
Valid for: Aurora DB clusters and Multi-AZ DB clusters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#vpc_security_group_ids RdsDbCluster#vpc_security_group_ids}

---

### RdsDbClusterEndpoint <a name="RdsDbClusterEndpoint" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpoint.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_cluster.RdsDbClusterEndpoint;

RdsDbClusterEndpoint.builder()
    .build();
```


### RdsDbClusterMasterUserSecret <a name="RdsDbClusterMasterUserSecret" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecret.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_cluster.RdsDbClusterMasterUserSecret;

RdsDbClusterMasterUserSecret.builder()
//  .kmsKeyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecret.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | The AWS KMS key identifier that is used to encrypt the secret. |

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecret.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

The AWS KMS key identifier that is used to encrypt the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#kms_key_id RdsDbCluster#kms_key_id}

---

### RdsDbClusterReadEndpoint <a name="RdsDbClusterReadEndpoint" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpoint.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_cluster.RdsDbClusterReadEndpoint;

RdsDbClusterReadEndpoint.builder()
    .build();
```


### RdsDbClusterScalingConfiguration <a name="RdsDbClusterScalingConfiguration" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_cluster.RdsDbClusterScalingConfiguration;

RdsDbClusterScalingConfiguration.builder()
//  .autoPause(java.lang.Boolean|IResolvable)
//  .maxCapacity(java.lang.Number)
//  .minCapacity(java.lang.Number)
//  .secondsBeforeTimeout(java.lang.Number)
//  .secondsUntilAutoPause(java.lang.Number)
//  .timeoutAction(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration.property.autoPause">autoPause</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether to allow or disallow automatic pause for an Aurora DB cluster in ``serverless`` DB engine mode. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration.property.maxCapacity">maxCapacity</a></code> | <code>java.lang.Number</code> | The maximum capacity for an Aurora DB cluster in ``serverless`` DB engine mode. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration.property.minCapacity">minCapacity</a></code> | <code>java.lang.Number</code> | The minimum capacity for an Aurora DB cluster in ``serverless`` DB engine mode. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration.property.secondsBeforeTimeout">secondsBeforeTimeout</a></code> | <code>java.lang.Number</code> | The amount of time, in seconds, that Aurora Serverless v1 tries to find a scaling point to perform seamless scaling before enforcing the timeout action. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration.property.secondsUntilAutoPause">secondsUntilAutoPause</a></code> | <code>java.lang.Number</code> | The time, in seconds, before an Aurora DB cluster in ``serverless`` mode is paused. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration.property.timeoutAction">timeoutAction</a></code> | <code>java.lang.String</code> | The action to take when the timeout is reached, either ``ForceApplyCapacityChange`` or ``RollbackCapacityChange``. |

---

##### `autoPause`<sup>Optional</sup> <a name="autoPause" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration.property.autoPause"></a>

```java
public java.lang.Boolean|IResolvable getAutoPause();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether to allow or disallow automatic pause for an Aurora DB cluster in ``serverless`` DB engine mode.

A DB cluster can be paused only when it's idle (it has no connections).
If a DB cluster is paused for more than seven days, the DB cluster might be backed up with a snapshot. In this case, the DB cluster is restored when there is a request to connect to it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#auto_pause RdsDbCluster#auto_pause}

---

##### `maxCapacity`<sup>Optional</sup> <a name="maxCapacity" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration.property.maxCapacity"></a>

```java
public java.lang.Number getMaxCapacity();
```

- *Type:* java.lang.Number

The maximum capacity for an Aurora DB cluster in ``serverless`` DB engine mode.

For Aurora MySQL, valid capacity values are `1`, `2`, `4`, `8`, `16`, `32`, `64`, `128`, and `256`.
For Aurora PostgreSQL, valid capacity values are `2`, `4`, `8`, `16`, `32`, `64`, `192`, and `384`.
The maximum capacity must be greater than or equal to the minimum capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#max_capacity RdsDbCluster#max_capacity}

---

##### `minCapacity`<sup>Optional</sup> <a name="minCapacity" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration.property.minCapacity"></a>

```java
public java.lang.Number getMinCapacity();
```

- *Type:* java.lang.Number

The minimum capacity for an Aurora DB cluster in ``serverless`` DB engine mode.

For Aurora MySQL, valid capacity values are `1`, `2`, `4`, `8`, `16`, `32`, `64`, `128`, and `256`.
For Aurora PostgreSQL, valid capacity values are `2`, `4`, `8`, `16`, `32`, `64`, `192`, and `384`.
The minimum capacity must be less than or equal to the maximum capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#min_capacity RdsDbCluster#min_capacity}

---

##### `secondsBeforeTimeout`<sup>Optional</sup> <a name="secondsBeforeTimeout" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration.property.secondsBeforeTimeout"></a>

```java
public java.lang.Number getSecondsBeforeTimeout();
```

- *Type:* java.lang.Number

The amount of time, in seconds, that Aurora Serverless v1 tries to find a scaling point to perform seamless scaling before enforcing the timeout action.

The default is 300.
Specify a value between 60 and 600 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#seconds_before_timeout RdsDbCluster#seconds_before_timeout}

---

##### `secondsUntilAutoPause`<sup>Optional</sup> <a name="secondsUntilAutoPause" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration.property.secondsUntilAutoPause"></a>

```java
public java.lang.Number getSecondsUntilAutoPause();
```

- *Type:* java.lang.Number

The time, in seconds, before an Aurora DB cluster in ``serverless`` mode is paused.

Specify a value between 300 and 86,400 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#seconds_until_auto_pause RdsDbCluster#seconds_until_auto_pause}

---

##### `timeoutAction`<sup>Optional</sup> <a name="timeoutAction" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration.property.timeoutAction"></a>

```java
public java.lang.String getTimeoutAction();
```

- *Type:* java.lang.String

The action to take when the timeout is reached, either ``ForceApplyCapacityChange`` or ``RollbackCapacityChange``.

`ForceApplyCapacityChange` sets the capacity to the specified value as soon as possible.
`RollbackCapacityChange`, the default, ignores the capacity change if a scaling point isn't found in the timeout period.
If you specify `ForceApplyCapacityChange`, connections that prevent Aurora Serverless v1 from finding a scaling point might be dropped.
For more information, see [Autoscaling for Aurora Serverless v1](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.how-it-works.html#aurora-serverless.how-it-works.auto-scaling) in the *Amazon Aurora User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#timeout_action RdsDbCluster#timeout_action}

---

### RdsDbClusterServerlessV2ScalingConfiguration <a name="RdsDbClusterServerlessV2ScalingConfiguration" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_cluster.RdsDbClusterServerlessV2ScalingConfiguration;

RdsDbClusterServerlessV2ScalingConfiguration.builder()
//  .maxCapacity(java.lang.Number)
//  .minCapacity(java.lang.Number)
//  .secondsUntilAutoPause(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfiguration.property.maxCapacity">maxCapacity</a></code> | <code>java.lang.Number</code> | The maximum number of Aurora capacity units (ACUs) for a DB instance in an Aurora Serverless v2 cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfiguration.property.minCapacity">minCapacity</a></code> | <code>java.lang.Number</code> | The minimum number of Aurora capacity units (ACUs) for a DB instance in an Aurora Serverless v2 cluster. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfiguration.property.secondsUntilAutoPause">secondsUntilAutoPause</a></code> | <code>java.lang.Number</code> | Specifies the number of seconds an Aurora Serverless v2 DB instance must be idle before Aurora attempts to automatically pause it. |

---

##### `maxCapacity`<sup>Optional</sup> <a name="maxCapacity" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfiguration.property.maxCapacity"></a>

```java
public java.lang.Number getMaxCapacity();
```

- *Type:* java.lang.Number

The maximum number of Aurora capacity units (ACUs) for a DB instance in an Aurora Serverless v2 cluster.

You can specify ACU values in half-step increments, such as 40, 40.5, 41, and so on. The largest value that you can use is 128.
The maximum capacity must be higher than 0.5 ACUs. For more information, see [Choosing the maximum Aurora Serverless v2 capacity setting for a cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.setting-capacity.html#aurora-serverless-v2.max_capacity_considerations) in the *Amazon Aurora User Guide*.
Aurora automatically sets certain parameters for Aurora Serverless V2 DB instances to values that depend on the maximum ACU value in the capacity range. When you update the maximum capacity value, the `ParameterApplyStatus` value for the DB instance changes to `pending-reboot`. You can update the parameter values by rebooting the DB instance after changing the capacity range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#max_capacity RdsDbCluster#max_capacity}

---

##### `minCapacity`<sup>Optional</sup> <a name="minCapacity" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfiguration.property.minCapacity"></a>

```java
public java.lang.Number getMinCapacity();
```

- *Type:* java.lang.Number

The minimum number of Aurora capacity units (ACUs) for a DB instance in an Aurora Serverless v2 cluster.

You can specify ACU values in half-step increments, such as 8, 8.5, 9, and so on. For Aurora versions that support the Aurora Serverless v2 auto-pause feature, the smallest value that you can use is 0. For versions that don't support Aurora Serverless v2 auto-pause, the smallest value that you can use is 0.5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#min_capacity RdsDbCluster#min_capacity}

---

##### `secondsUntilAutoPause`<sup>Optional</sup> <a name="secondsUntilAutoPause" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfiguration.property.secondsUntilAutoPause"></a>

```java
public java.lang.Number getSecondsUntilAutoPause();
```

- *Type:* java.lang.Number

Specifies the number of seconds an Aurora Serverless v2 DB instance must be idle before Aurora attempts to automatically pause it.

Specify a value between 300 seconds (five minutes) and 86,400 seconds (one day). The default is 300 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#seconds_until_auto_pause RdsDbCluster#seconds_until_auto_pause}

---

### RdsDbClusterTags <a name="RdsDbClusterTags" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_cluster.RdsDbClusterTags;

RdsDbClusterTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTags.property.key">key</a></code> | <code>java.lang.String</code> | A key is the required name of the tag. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTags.property.value">value</a></code> | <code>java.lang.String</code> | A value is the optional value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

A key is the required name of the tag.

The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with `aws:` or `rds:`. The string can only contain only the set of Unicode letters, digits, white-space, '*', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\p{L}\p{Z}\p{N}*.:/=+\-@]*)$").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#key RdsDbCluster#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

A value is the optional value of the tag.

The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with `aws:` or `rds:`. The string can only contain only the set of Unicode letters, digits, white-space, '*', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\p{L}\p{Z}\p{N}*.:/=+\-@]*)$").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_cluster#value RdsDbCluster#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RdsDbClusterAssociatedRolesList <a name="RdsDbClusterAssociatedRolesList" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_cluster.RdsDbClusterAssociatedRolesList;

new RdsDbClusterAssociatedRolesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.get"></a>

```java
public RdsDbClusterAssociatedRolesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRoles">RdsDbClusterAssociatedRoles</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<RdsDbClusterAssociatedRoles> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRoles">RdsDbClusterAssociatedRoles</a>>

---


### RdsDbClusterAssociatedRolesOutputReference <a name="RdsDbClusterAssociatedRolesOutputReference" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_cluster.RdsDbClusterAssociatedRolesOutputReference;

new RdsDbClusterAssociatedRolesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.resetFeatureName">resetFeatureName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFeatureName` <a name="resetFeatureName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.resetFeatureName"></a>

```java
public void resetFeatureName()
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.resetRoleArn"></a>

```java
public void resetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.property.featureNameInput">featureNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.property.featureName">featureName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRoles">RdsDbClusterAssociatedRoles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `featureNameInput`<sup>Optional</sup> <a name="featureNameInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.property.featureNameInput"></a>

```java
public java.lang.String getFeatureNameInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `featureName`<sup>Required</sup> <a name="featureName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.property.featureName"></a>

```java
public java.lang.String getFeatureName();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRolesOutputReference.property.internalValue"></a>

```java
public IResolvable|RdsDbClusterAssociatedRoles getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterAssociatedRoles">RdsDbClusterAssociatedRoles</a>

---


### RdsDbClusterEndpointOutputReference <a name="RdsDbClusterEndpointOutputReference" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_cluster.RdsDbClusterEndpointOutputReference;

new RdsDbClusterEndpointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.property.port">port</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpoint">RdsDbClusterEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.property.port"></a>

```java
public java.lang.String getPort();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpointOutputReference.property.internalValue"></a>

```java
public RdsDbClusterEndpoint getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterEndpoint">RdsDbClusterEndpoint</a>

---


### RdsDbClusterMasterUserSecretOutputReference <a name="RdsDbClusterMasterUserSecretOutputReference" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_cluster.RdsDbClusterMasterUserSecretOutputReference;

new RdsDbClusterMasterUserSecretOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecret">RdsDbClusterMasterUserSecret</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecretOutputReference.property.internalValue"></a>

```java
public IResolvable|RdsDbClusterMasterUserSecret getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterMasterUserSecret">RdsDbClusterMasterUserSecret</a>

---


### RdsDbClusterReadEndpointOutputReference <a name="RdsDbClusterReadEndpointOutputReference" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_cluster.RdsDbClusterReadEndpointOutputReference;

new RdsDbClusterReadEndpointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpoint">RdsDbClusterReadEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpointOutputReference.property.internalValue"></a>

```java
public RdsDbClusterReadEndpoint getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterReadEndpoint">RdsDbClusterReadEndpoint</a>

---


### RdsDbClusterScalingConfigurationOutputReference <a name="RdsDbClusterScalingConfigurationOutputReference" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_cluster.RdsDbClusterScalingConfigurationOutputReference;

new RdsDbClusterScalingConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.resetAutoPause">resetAutoPause</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.resetMaxCapacity">resetMaxCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.resetMinCapacity">resetMinCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.resetSecondsBeforeTimeout">resetSecondsBeforeTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.resetSecondsUntilAutoPause">resetSecondsUntilAutoPause</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.resetTimeoutAction">resetTimeoutAction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutoPause` <a name="resetAutoPause" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.resetAutoPause"></a>

```java
public void resetAutoPause()
```

##### `resetMaxCapacity` <a name="resetMaxCapacity" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.resetMaxCapacity"></a>

```java
public void resetMaxCapacity()
```

##### `resetMinCapacity` <a name="resetMinCapacity" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.resetMinCapacity"></a>

```java
public void resetMinCapacity()
```

##### `resetSecondsBeforeTimeout` <a name="resetSecondsBeforeTimeout" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.resetSecondsBeforeTimeout"></a>

```java
public void resetSecondsBeforeTimeout()
```

##### `resetSecondsUntilAutoPause` <a name="resetSecondsUntilAutoPause" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.resetSecondsUntilAutoPause"></a>

```java
public void resetSecondsUntilAutoPause()
```

##### `resetTimeoutAction` <a name="resetTimeoutAction" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.resetTimeoutAction"></a>

```java
public void resetTimeoutAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.autoPauseInput">autoPauseInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.maxCapacityInput">maxCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.minCapacityInput">minCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.secondsBeforeTimeoutInput">secondsBeforeTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.secondsUntilAutoPauseInput">secondsUntilAutoPauseInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.timeoutActionInput">timeoutActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.autoPause">autoPause</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.maxCapacity">maxCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.minCapacity">minCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.secondsBeforeTimeout">secondsBeforeTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.secondsUntilAutoPause">secondsUntilAutoPause</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.timeoutAction">timeoutAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration">RdsDbClusterScalingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoPauseInput`<sup>Optional</sup> <a name="autoPauseInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.autoPauseInput"></a>

```java
public java.lang.Boolean|IResolvable getAutoPauseInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxCapacityInput`<sup>Optional</sup> <a name="maxCapacityInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.maxCapacityInput"></a>

```java
public java.lang.Number getMaxCapacityInput();
```

- *Type:* java.lang.Number

---

##### `minCapacityInput`<sup>Optional</sup> <a name="minCapacityInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.minCapacityInput"></a>

```java
public java.lang.Number getMinCapacityInput();
```

- *Type:* java.lang.Number

---

##### `secondsBeforeTimeoutInput`<sup>Optional</sup> <a name="secondsBeforeTimeoutInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.secondsBeforeTimeoutInput"></a>

```java
public java.lang.Number getSecondsBeforeTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `secondsUntilAutoPauseInput`<sup>Optional</sup> <a name="secondsUntilAutoPauseInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.secondsUntilAutoPauseInput"></a>

```java
public java.lang.Number getSecondsUntilAutoPauseInput();
```

- *Type:* java.lang.Number

---

##### `timeoutActionInput`<sup>Optional</sup> <a name="timeoutActionInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.timeoutActionInput"></a>

```java
public java.lang.String getTimeoutActionInput();
```

- *Type:* java.lang.String

---

##### `autoPause`<sup>Required</sup> <a name="autoPause" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.autoPause"></a>

```java
public java.lang.Boolean|IResolvable getAutoPause();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.maxCapacity"></a>

```java
public java.lang.Number getMaxCapacity();
```

- *Type:* java.lang.Number

---

##### `minCapacity`<sup>Required</sup> <a name="minCapacity" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.minCapacity"></a>

```java
public java.lang.Number getMinCapacity();
```

- *Type:* java.lang.Number

---

##### `secondsBeforeTimeout`<sup>Required</sup> <a name="secondsBeforeTimeout" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.secondsBeforeTimeout"></a>

```java
public java.lang.Number getSecondsBeforeTimeout();
```

- *Type:* java.lang.Number

---

##### `secondsUntilAutoPause`<sup>Required</sup> <a name="secondsUntilAutoPause" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.secondsUntilAutoPause"></a>

```java
public java.lang.Number getSecondsUntilAutoPause();
```

- *Type:* java.lang.Number

---

##### `timeoutAction`<sup>Required</sup> <a name="timeoutAction" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.timeoutAction"></a>

```java
public java.lang.String getTimeoutAction();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|RdsDbClusterScalingConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterScalingConfiguration">RdsDbClusterScalingConfiguration</a>

---


### RdsDbClusterServerlessV2ScalingConfigurationOutputReference <a name="RdsDbClusterServerlessV2ScalingConfigurationOutputReference" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_cluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference;

new RdsDbClusterServerlessV2ScalingConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.resetMaxCapacity">resetMaxCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.resetMinCapacity">resetMinCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.resetSecondsUntilAutoPause">resetSecondsUntilAutoPause</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxCapacity` <a name="resetMaxCapacity" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.resetMaxCapacity"></a>

```java
public void resetMaxCapacity()
```

##### `resetMinCapacity` <a name="resetMinCapacity" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.resetMinCapacity"></a>

```java
public void resetMinCapacity()
```

##### `resetSecondsUntilAutoPause` <a name="resetSecondsUntilAutoPause" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.resetSecondsUntilAutoPause"></a>

```java
public void resetSecondsUntilAutoPause()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.maxCapacityInput">maxCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.minCapacityInput">minCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.secondsUntilAutoPauseInput">secondsUntilAutoPauseInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.maxCapacity">maxCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.minCapacity">minCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.secondsUntilAutoPause">secondsUntilAutoPause</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfiguration">RdsDbClusterServerlessV2ScalingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxCapacityInput`<sup>Optional</sup> <a name="maxCapacityInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.maxCapacityInput"></a>

```java
public java.lang.Number getMaxCapacityInput();
```

- *Type:* java.lang.Number

---

##### `minCapacityInput`<sup>Optional</sup> <a name="minCapacityInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.minCapacityInput"></a>

```java
public java.lang.Number getMinCapacityInput();
```

- *Type:* java.lang.Number

---

##### `secondsUntilAutoPauseInput`<sup>Optional</sup> <a name="secondsUntilAutoPauseInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.secondsUntilAutoPauseInput"></a>

```java
public java.lang.Number getSecondsUntilAutoPauseInput();
```

- *Type:* java.lang.Number

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.maxCapacity"></a>

```java
public java.lang.Number getMaxCapacity();
```

- *Type:* java.lang.Number

---

##### `minCapacity`<sup>Required</sup> <a name="minCapacity" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.minCapacity"></a>

```java
public java.lang.Number getMinCapacity();
```

- *Type:* java.lang.Number

---

##### `secondsUntilAutoPause`<sup>Required</sup> <a name="secondsUntilAutoPause" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.secondsUntilAutoPause"></a>

```java
public java.lang.Number getSecondsUntilAutoPause();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|RdsDbClusterServerlessV2ScalingConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterServerlessV2ScalingConfiguration">RdsDbClusterServerlessV2ScalingConfiguration</a>

---


### RdsDbClusterTagsList <a name="RdsDbClusterTagsList" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_cluster.RdsDbClusterTagsList;

new RdsDbClusterTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.get"></a>

```java
public RdsDbClusterTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTags">RdsDbClusterTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<RdsDbClusterTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTags">RdsDbClusterTags</a>>

---


### RdsDbClusterTagsOutputReference <a name="RdsDbClusterTagsOutputReference" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_db_cluster.RdsDbClusterTagsOutputReference;

new RdsDbClusterTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTags">RdsDbClusterTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|RdsDbClusterTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsDbCluster.RdsDbClusterTags">RdsDbClusterTags</a>

---



