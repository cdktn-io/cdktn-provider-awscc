# `redshiftCluster` Submodule <a name="`redshiftCluster` Submodule" id="@cdktn/provider-awscc.redshiftCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftCluster <a name="RedshiftCluster" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster awscc_redshift_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_cluster.RedshiftCluster;

RedshiftCluster.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .clusterType(java.lang.String)
    .dbName(java.lang.String)
    .masterUsername(java.lang.String)
    .nodeType(java.lang.String)
//  .allowVersionUpgrade(java.lang.Boolean|IResolvable)
//  .aquaConfigurationStatus(java.lang.String)
//  .automatedSnapshotRetentionPeriod(java.lang.Number)
//  .availabilityZone(java.lang.String)
//  .availabilityZoneRelocation(java.lang.Boolean|IResolvable)
//  .availabilityZoneRelocationStatus(java.lang.String)
//  .classic(java.lang.Boolean|IResolvable)
//  .clusterIdentifier(java.lang.String)
//  .clusterParameterGroupName(java.lang.String)
//  .clusterSecurityGroups(java.util.List<java.lang.String>)
//  .clusterSubnetGroupName(java.lang.String)
//  .clusterVersion(java.lang.String)
//  .deferMaintenance(java.lang.Boolean|IResolvable)
//  .deferMaintenanceDuration(java.lang.Number)
//  .deferMaintenanceEndTime(java.lang.String)
//  .deferMaintenanceStartTime(java.lang.String)
//  .destinationRegion(java.lang.String)
//  .elasticIp(java.lang.String)
//  .encrypted(java.lang.Boolean|IResolvable)
//  .endpoint(RedshiftClusterEndpoint)
//  .enhancedVpcRouting(java.lang.Boolean|IResolvable)
//  .hsmClientCertificateIdentifier(java.lang.String)
//  .hsmConfigurationIdentifier(java.lang.String)
//  .iamRoles(java.util.List<java.lang.String>)
//  .kmsKeyId(java.lang.String)
//  .loggingProperties(RedshiftClusterLoggingProperties)
//  .maintenanceTrackName(java.lang.String)
//  .manageMasterPassword(java.lang.Boolean|IResolvable)
//  .manualSnapshotRetentionPeriod(java.lang.Number)
//  .masterPasswordSecretKmsKeyId(java.lang.String)
//  .masterUserPassword(java.lang.String)
//  .multiAz(java.lang.Boolean|IResolvable)
//  .namespaceResourcePolicy(java.lang.String)
//  .numberOfNodes(java.lang.Number)
//  .ownerAccount(java.lang.String)
//  .port(java.lang.Number)
//  .preferredMaintenanceWindow(java.lang.String)
//  .publiclyAccessible(java.lang.Boolean|IResolvable)
//  .resourceAction(java.lang.String)
//  .revisionTarget(java.lang.String)
//  .rotateEncryptionKey(java.lang.Boolean|IResolvable)
//  .snapshotClusterIdentifier(java.lang.String)
//  .snapshotCopyGrantName(java.lang.String)
//  .snapshotCopyManual(java.lang.Boolean|IResolvable)
//  .snapshotCopyRetentionPeriod(java.lang.Number)
//  .snapshotIdentifier(java.lang.String)
//  .tags(IResolvable|java.util.List<RedshiftClusterTags>)
//  .vpcSecurityGroupIds(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterType">clusterType</a></code> | <code>java.lang.String</code> | The type of the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.dbName">dbName</a></code> | <code>java.lang.String</code> | The name of the first database to be created when the cluster is created. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.masterUsername">masterUsername</a></code> | <code>java.lang.String</code> | The user name associated with the master user account for the cluster that is being created. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.nodeType">nodeType</a></code> | <code>java.lang.String</code> | The node type to be provisioned for the cluster.Valid Values: ds2.xlarge \| ds2.8xlarge \| dc1.large \| dc1.8xlarge \| dc2.large \| dc2.8xlarge \| ra3.large \| ra3.4xlarge \| ra3.16xlarge \| rg.large \| rg.xlarge \| rg.4xlarge \| rg.12xlarge. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.allowVersionUpgrade">allowVersionUpgrade</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Major version upgrades can be applied during the maintenance window to the Amazon Redshift engine that is running on the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.aquaConfigurationStatus">aquaConfigurationStatus</a></code> | <code>java.lang.String</code> | The value represents how the cluster is configured to use AQUA (Advanced Query Accelerator) after the cluster is restored. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.automatedSnapshotRetentionPeriod">automatedSnapshotRetentionPeriod</a></code> | <code>java.lang.Number</code> | The number of days that automated snapshots are retained. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | The EC2 Availability Zone (AZ) in which you want Amazon Redshift to provision the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.availabilityZoneRelocation">availabilityZoneRelocation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | The option to enable relocation for an Amazon Redshift cluster between Availability Zones after the cluster modification is complete. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.availabilityZoneRelocationStatus">availabilityZoneRelocationStatus</a></code> | <code>java.lang.String</code> | The availability zone relocation status of the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.classic">classic</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A boolean value indicating whether the resize operation is using the classic resize process. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterIdentifier">clusterIdentifier</a></code> | <code>java.lang.String</code> | A unique identifier for the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterParameterGroupName">clusterParameterGroupName</a></code> | <code>java.lang.String</code> | The name of the parameter group to be associated with this cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterSecurityGroups">clusterSecurityGroups</a></code> | <code>java.util.List<java.lang.String></code> | A list of security groups to be associated with this cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterSubnetGroupName">clusterSubnetGroupName</a></code> | <code>java.lang.String</code> | The name of a cluster subnet group to be associated with this cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterVersion">clusterVersion</a></code> | <code>java.lang.String</code> | The version of the Amazon Redshift engine software that you want to deploy on the cluster.The version selected runs on all the nodes in the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.deferMaintenance">deferMaintenance</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A boolean indicating whether to enable the deferred maintenance window. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.deferMaintenanceDuration">deferMaintenanceDuration</a></code> | <code>java.lang.Number</code> | An integer indicating the duration of the maintenance window in days. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.deferMaintenanceEndTime">deferMaintenanceEndTime</a></code> | <code>java.lang.String</code> | A timestamp indicating end time for the deferred maintenance window. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.deferMaintenanceStartTime">deferMaintenanceStartTime</a></code> | <code>java.lang.String</code> | A timestamp indicating the start time for the deferred maintenance window. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.destinationRegion">destinationRegion</a></code> | <code>java.lang.String</code> | The destination AWS Region that you want to copy snapshots to. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.elasticIp">elasticIp</a></code> | <code>java.lang.String</code> | The Elastic IP (EIP) address for the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.encrypted">encrypted</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, the data in the cluster is encrypted at rest. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.endpoint">endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpoint">RedshiftClusterEndpoint</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#endpoint RedshiftCluster#endpoint}. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.enhancedVpcRouting">enhancedVpcRouting</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | An option that specifies whether to create the cluster with enhanced VPC routing enabled. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.hsmClientCertificateIdentifier">hsmClientCertificateIdentifier</a></code> | <code>java.lang.String</code> | Specifies the name of the HSM client certificate the Amazon Redshift cluster uses to retrieve the data encryption keys stored in an HSM. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.hsmConfigurationIdentifier">hsmConfigurationIdentifier</a></code> | <code>java.lang.String</code> | Specifies the name of the HSM configuration that contains the information the Amazon Redshift cluster can use to retrieve and store keys in an HSM. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.iamRoles">iamRoles</a></code> | <code>java.util.List<java.lang.String></code> | A list of AWS Identity and Access Management (IAM) roles that can be used by the cluster to access other AWS services. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | The AWS Key Management Service (KMS) key ID of the encryption key that you want to use to encrypt data in the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.loggingProperties">loggingProperties</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties">RedshiftClusterLoggingProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#logging_properties RedshiftCluster#logging_properties}. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.maintenanceTrackName">maintenanceTrackName</a></code> | <code>java.lang.String</code> | The name for the maintenance track that you want to assign for the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.manageMasterPassword">manageMasterPassword</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A boolean indicating if the redshift cluster's admin user credentials is managed by Redshift or not. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.manualSnapshotRetentionPeriod">manualSnapshotRetentionPeriod</a></code> | <code>java.lang.Number</code> | The number of days to retain newly copied snapshots in the destination AWS Region after they are copied from the source AWS Region. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.masterPasswordSecretKmsKeyId">masterPasswordSecretKmsKeyId</a></code> | <code>java.lang.String</code> | The ID of the Key Management Service (KMS) key used to encrypt and store the cluster's admin user credentials secret. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.masterUserPassword">masterUserPassword</a></code> | <code>java.lang.String</code> | The password associated with the master user account for the cluster that is being created. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.multiAz">multiAz</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A boolean indicating if the redshift cluster is multi-az or not. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.namespaceResourcePolicy">namespaceResourcePolicy</a></code> | <code>java.lang.String</code> | The namespace resource policy document that will be attached to a Redshift cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.numberOfNodes">numberOfNodes</a></code> | <code>java.lang.Number</code> | The number of compute nodes in the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.ownerAccount">ownerAccount</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#owner_account RedshiftCluster#owner_account}. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.port">port</a></code> | <code>java.lang.Number</code> | The port number on which the cluster accepts incoming connections. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>java.lang.String</code> | The weekly time range (in UTC) during which automated cluster maintenance can occur. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.publiclyAccessible">publiclyAccessible</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, the cluster can be accessed from a public network. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.resourceAction">resourceAction</a></code> | <code>java.lang.String</code> | The Redshift operation to be performed. Resource Action supports pause-cluster, resume-cluster, failover-primary-compute APIs. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.revisionTarget">revisionTarget</a></code> | <code>java.lang.String</code> | The identifier of the database revision. You can retrieve this value from the response to the DescribeClusterDbRevisions request. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.rotateEncryptionKey">rotateEncryptionKey</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A boolean indicating if we want to rotate Encryption Keys. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.snapshotClusterIdentifier">snapshotClusterIdentifier</a></code> | <code>java.lang.String</code> | The name of the cluster the source snapshot was created from. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.snapshotCopyGrantName">snapshotCopyGrantName</a></code> | <code>java.lang.String</code> | The name of the snapshot copy grant to use when snapshots of an AWS KMS-encrypted cluster are copied to the destination region. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.snapshotCopyManual">snapshotCopyManual</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether to apply the snapshot retention period to newly copied manual snapshots instead of automated snapshots. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.snapshotCopyRetentionPeriod">snapshotCopyRetentionPeriod</a></code> | <code>java.lang.Number</code> | The number of days to retain automated snapshots in the destination region after they are copied from the source region. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.snapshotIdentifier">snapshotIdentifier</a></code> | <code>java.lang.String</code> | The name of the snapshot from which to create the new cluster. This parameter isn't case sensitive. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags">RedshiftClusterTags</a>></code> | The list of tags for the cluster parameter group. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | A list of Virtual Private Cloud (VPC) security groups to be associated with the cluster. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `clusterType`<sup>Required</sup> <a name="clusterType" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterType"></a>

- *Type:* java.lang.String

The type of the cluster.

When cluster type is specified as single-node, the NumberOfNodes parameter is not required and if multi-node, the NumberOfNodes parameter is required

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#cluster_type RedshiftCluster#cluster_type}

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.dbName"></a>

- *Type:* java.lang.String

The name of the first database to be created when the cluster is created.

To create additional databases after the cluster is created, connect to the cluster with a SQL client and use SQL commands to create a database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#db_name RedshiftCluster#db_name}

---

##### `masterUsername`<sup>Required</sup> <a name="masterUsername" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.masterUsername"></a>

- *Type:* java.lang.String

The user name associated with the master user account for the cluster that is being created.

The user name can't be PUBLIC and first character must be a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#master_username RedshiftCluster#master_username}

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.nodeType"></a>

- *Type:* java.lang.String

The node type to be provisioned for the cluster.Valid Values: ds2.xlarge | ds2.8xlarge | dc1.large | dc1.8xlarge | dc2.large | dc2.8xlarge | ra3.large | ra3.4xlarge | ra3.16xlarge | rg.large | rg.xlarge | rg.4xlarge | rg.12xlarge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#node_type RedshiftCluster#node_type}

---

##### `allowVersionUpgrade`<sup>Optional</sup> <a name="allowVersionUpgrade" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.allowVersionUpgrade"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Major version upgrades can be applied during the maintenance window to the Amazon Redshift engine that is running on the cluster.

Default value is True

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#allow_version_upgrade RedshiftCluster#allow_version_upgrade}

---

##### `aquaConfigurationStatus`<sup>Optional</sup> <a name="aquaConfigurationStatus" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.aquaConfigurationStatus"></a>

- *Type:* java.lang.String

The value represents how the cluster is configured to use AQUA (Advanced Query Accelerator) after the cluster is restored.

Possible values include the following.

enabled - Use AQUA if it is available for the current Region and Amazon Redshift node type.
disabled - Don't use AQUA.
auto - Amazon Redshift determines whether to use AQUA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#aqua_configuration_status RedshiftCluster#aqua_configuration_status}

---

##### `automatedSnapshotRetentionPeriod`<sup>Optional</sup> <a name="automatedSnapshotRetentionPeriod" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.automatedSnapshotRetentionPeriod"></a>

- *Type:* java.lang.Number

The number of days that automated snapshots are retained.

If the value is 0, automated snapshots are disabled. Default value is 1

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#automated_snapshot_retention_period RedshiftCluster#automated_snapshot_retention_period}

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.availabilityZone"></a>

- *Type:* java.lang.String

The EC2 Availability Zone (AZ) in which you want Amazon Redshift to provision the cluster.

Default: A random, system-chosen Availability Zone in the region that is specified by the endpoint

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#availability_zone RedshiftCluster#availability_zone}

---

##### `availabilityZoneRelocation`<sup>Optional</sup> <a name="availabilityZoneRelocation" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.availabilityZoneRelocation"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

The option to enable relocation for an Amazon Redshift cluster between Availability Zones after the cluster modification is complete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#availability_zone_relocation RedshiftCluster#availability_zone_relocation}

---

##### `availabilityZoneRelocationStatus`<sup>Optional</sup> <a name="availabilityZoneRelocationStatus" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.availabilityZoneRelocationStatus"></a>

- *Type:* java.lang.String

The availability zone relocation status of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#availability_zone_relocation_status RedshiftCluster#availability_zone_relocation_status}

---

##### `classic`<sup>Optional</sup> <a name="classic" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.classic"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A boolean value indicating whether the resize operation is using the classic resize process.

If you don't provide this parameter or set the value to false , the resize type is elastic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#classic RedshiftCluster#classic}

---

##### `clusterIdentifier`<sup>Optional</sup> <a name="clusterIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterIdentifier"></a>

- *Type:* java.lang.String

A unique identifier for the cluster.

You use this identifier to refer to the cluster for any subsequent cluster operations such as deleting or modifying. All alphabetical characters must be lower case, no hypens at the end, no two consecutive hyphens. Cluster name should be unique for all clusters within an AWS account

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#cluster_identifier RedshiftCluster#cluster_identifier}

---

##### `clusterParameterGroupName`<sup>Optional</sup> <a name="clusterParameterGroupName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterParameterGroupName"></a>

- *Type:* java.lang.String

The name of the parameter group to be associated with this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#cluster_parameter_group_name RedshiftCluster#cluster_parameter_group_name}

---

##### `clusterSecurityGroups`<sup>Optional</sup> <a name="clusterSecurityGroups" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterSecurityGroups"></a>

- *Type:* java.util.List<java.lang.String>

A list of security groups to be associated with this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#cluster_security_groups RedshiftCluster#cluster_security_groups}

---

##### `clusterSubnetGroupName`<sup>Optional</sup> <a name="clusterSubnetGroupName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterSubnetGroupName"></a>

- *Type:* java.lang.String

The name of a cluster subnet group to be associated with this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#cluster_subnet_group_name RedshiftCluster#cluster_subnet_group_name}

---

##### `clusterVersion`<sup>Optional</sup> <a name="clusterVersion" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterVersion"></a>

- *Type:* java.lang.String

The version of the Amazon Redshift engine software that you want to deploy on the cluster.The version selected runs on all the nodes in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#cluster_version RedshiftCluster#cluster_version}

---

##### `deferMaintenance`<sup>Optional</sup> <a name="deferMaintenance" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.deferMaintenance"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A boolean indicating whether to enable the deferred maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#defer_maintenance RedshiftCluster#defer_maintenance}

---

##### `deferMaintenanceDuration`<sup>Optional</sup> <a name="deferMaintenanceDuration" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.deferMaintenanceDuration"></a>

- *Type:* java.lang.Number

An integer indicating the duration of the maintenance window in days.

If you specify a duration, you can't specify an end time. The duration must be 60 days or less.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#defer_maintenance_duration RedshiftCluster#defer_maintenance_duration}

---

##### `deferMaintenanceEndTime`<sup>Optional</sup> <a name="deferMaintenanceEndTime" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.deferMaintenanceEndTime"></a>

- *Type:* java.lang.String

A timestamp indicating end time for the deferred maintenance window.

If you specify an end time, you can't specify a duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#defer_maintenance_end_time RedshiftCluster#defer_maintenance_end_time}

---

##### `deferMaintenanceStartTime`<sup>Optional</sup> <a name="deferMaintenanceStartTime" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.deferMaintenanceStartTime"></a>

- *Type:* java.lang.String

A timestamp indicating the start time for the deferred maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#defer_maintenance_start_time RedshiftCluster#defer_maintenance_start_time}

---

##### `destinationRegion`<sup>Optional</sup> <a name="destinationRegion" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.destinationRegion"></a>

- *Type:* java.lang.String

The destination AWS Region that you want to copy snapshots to.

Constraints: Must be the name of a valid AWS Region. For more information, see Regions and Endpoints in the Amazon Web Services [https://docs.aws.amazon.com/general/latest/gr/rande.html#redshift_region] General Reference

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#destination_region RedshiftCluster#destination_region}

---

##### `elasticIp`<sup>Optional</sup> <a name="elasticIp" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.elasticIp"></a>

- *Type:* java.lang.String

The Elastic IP (EIP) address for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#elastic_ip RedshiftCluster#elastic_ip}

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.encrypted"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, the data in the cluster is encrypted at rest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#encrypted RedshiftCluster#encrypted}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.endpoint"></a>

- *Type:* <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpoint">RedshiftClusterEndpoint</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#endpoint RedshiftCluster#endpoint}.

---

##### `enhancedVpcRouting`<sup>Optional</sup> <a name="enhancedVpcRouting" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.enhancedVpcRouting"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

An option that specifies whether to create the cluster with enhanced VPC routing enabled.

To create a cluster that uses enhanced VPC routing, the cluster must be in a VPC. For more information, see Enhanced VPC Routing in the Amazon Redshift Cluster Management Guide.

If this option is true , enhanced VPC routing is enabled.

Default: false

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#enhanced_vpc_routing RedshiftCluster#enhanced_vpc_routing}

---

##### `hsmClientCertificateIdentifier`<sup>Optional</sup> <a name="hsmClientCertificateIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.hsmClientCertificateIdentifier"></a>

- *Type:* java.lang.String

Specifies the name of the HSM client certificate the Amazon Redshift cluster uses to retrieve the data encryption keys stored in an HSM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#hsm_client_certificate_identifier RedshiftCluster#hsm_client_certificate_identifier}

---

##### `hsmConfigurationIdentifier`<sup>Optional</sup> <a name="hsmConfigurationIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.hsmConfigurationIdentifier"></a>

- *Type:* java.lang.String

Specifies the name of the HSM configuration that contains the information the Amazon Redshift cluster can use to retrieve and store keys in an HSM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#hsm_configuration_identifier RedshiftCluster#hsm_configuration_identifier}

---

##### `iamRoles`<sup>Optional</sup> <a name="iamRoles" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.iamRoles"></a>

- *Type:* java.util.List<java.lang.String>

A list of AWS Identity and Access Management (IAM) roles that can be used by the cluster to access other AWS services.

You must supply the IAM roles in their Amazon Resource Name (ARN) format. You can supply up to 50 IAM roles in a single request

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#iam_roles RedshiftCluster#iam_roles}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.kmsKeyId"></a>

- *Type:* java.lang.String

The AWS Key Management Service (KMS) key ID of the encryption key that you want to use to encrypt data in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#kms_key_id RedshiftCluster#kms_key_id}

---

##### `loggingProperties`<sup>Optional</sup> <a name="loggingProperties" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.loggingProperties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties">RedshiftClusterLoggingProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#logging_properties RedshiftCluster#logging_properties}.

---

##### `maintenanceTrackName`<sup>Optional</sup> <a name="maintenanceTrackName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.maintenanceTrackName"></a>

- *Type:* java.lang.String

The name for the maintenance track that you want to assign for the cluster.

This name change is asynchronous. The new track name stays in the PendingModifiedValues for the cluster until the next maintenance window. When the maintenance track changes, the cluster is switched to the latest cluster release available for the maintenance track. At this point, the maintenance track name is applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#maintenance_track_name RedshiftCluster#maintenance_track_name}

---

##### `manageMasterPassword`<sup>Optional</sup> <a name="manageMasterPassword" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.manageMasterPassword"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A boolean indicating if the redshift cluster's admin user credentials is managed by Redshift or not.

You can't use MasterUserPassword if ManageMasterPassword is true. If ManageMasterPassword is false or not set, Amazon Redshift uses MasterUserPassword for the admin user account's password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#manage_master_password RedshiftCluster#manage_master_password}

---

##### `manualSnapshotRetentionPeriod`<sup>Optional</sup> <a name="manualSnapshotRetentionPeriod" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.manualSnapshotRetentionPeriod"></a>

- *Type:* java.lang.Number

The number of days to retain newly copied snapshots in the destination AWS Region after they are copied from the source AWS Region.

If the value is -1, the manual snapshot is retained indefinitely.

The value must be either -1 or an integer between 1 and 3,653.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#manual_snapshot_retention_period RedshiftCluster#manual_snapshot_retention_period}

---

##### `masterPasswordSecretKmsKeyId`<sup>Optional</sup> <a name="masterPasswordSecretKmsKeyId" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.masterPasswordSecretKmsKeyId"></a>

- *Type:* java.lang.String

The ID of the Key Management Service (KMS) key used to encrypt and store the cluster's admin user credentials secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#master_password_secret_kms_key_id RedshiftCluster#master_password_secret_kms_key_id}

---

##### `masterUserPassword`<sup>Optional</sup> <a name="masterUserPassword" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.masterUserPassword"></a>

- *Type:* java.lang.String

The password associated with the master user account for the cluster that is being created.

You can't use MasterUserPassword if ManageMasterPassword is true. Password must be between 8 and 64 characters in length, should have at least one uppercase letter.Must contain at least one lowercase letter.Must contain one number.Can be any printable ASCII character.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#master_user_password RedshiftCluster#master_user_password}

---

##### `multiAz`<sup>Optional</sup> <a name="multiAz" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.multiAz"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A boolean indicating if the redshift cluster is multi-az or not.

If you don't provide this parameter or set the value to false, the redshift cluster will be single-az.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#multi_az RedshiftCluster#multi_az}

---

##### `namespaceResourcePolicy`<sup>Optional</sup> <a name="namespaceResourcePolicy" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.namespaceResourcePolicy"></a>

- *Type:* java.lang.String

The namespace resource policy document that will be attached to a Redshift cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#namespace_resource_policy RedshiftCluster#namespace_resource_policy}

---

##### `numberOfNodes`<sup>Optional</sup> <a name="numberOfNodes" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.numberOfNodes"></a>

- *Type:* java.lang.Number

The number of compute nodes in the cluster.

This parameter is required when the ClusterType parameter is specified as multi-node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#number_of_nodes RedshiftCluster#number_of_nodes}

---

##### `ownerAccount`<sup>Optional</sup> <a name="ownerAccount" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.ownerAccount"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#owner_account RedshiftCluster#owner_account}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.port"></a>

- *Type:* java.lang.Number

The port number on which the cluster accepts incoming connections.

The cluster is accessible only via the JDBC and ODBC connection strings

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#port RedshiftCluster#port}

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.preferredMaintenanceWindow"></a>

- *Type:* java.lang.String

The weekly time range (in UTC) during which automated cluster maintenance can occur.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#preferred_maintenance_window RedshiftCluster#preferred_maintenance_window}

---

##### `publiclyAccessible`<sup>Optional</sup> <a name="publiclyAccessible" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.publiclyAccessible"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, the cluster can be accessed from a public network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#publicly_accessible RedshiftCluster#publicly_accessible}

---

##### `resourceAction`<sup>Optional</sup> <a name="resourceAction" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.resourceAction"></a>

- *Type:* java.lang.String

The Redshift operation to be performed. Resource Action supports pause-cluster, resume-cluster, failover-primary-compute APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#resource_action RedshiftCluster#resource_action}

---

##### `revisionTarget`<sup>Optional</sup> <a name="revisionTarget" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.revisionTarget"></a>

- *Type:* java.lang.String

The identifier of the database revision. You can retrieve this value from the response to the DescribeClusterDbRevisions request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#revision_target RedshiftCluster#revision_target}

---

##### `rotateEncryptionKey`<sup>Optional</sup> <a name="rotateEncryptionKey" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.rotateEncryptionKey"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A boolean indicating if we want to rotate Encryption Keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#rotate_encryption_key RedshiftCluster#rotate_encryption_key}

---

##### `snapshotClusterIdentifier`<sup>Optional</sup> <a name="snapshotClusterIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.snapshotClusterIdentifier"></a>

- *Type:* java.lang.String

The name of the cluster the source snapshot was created from.

This parameter is required if your IAM user has a policy containing a snapshot resource element that specifies anything other than * for the cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#snapshot_cluster_identifier RedshiftCluster#snapshot_cluster_identifier}

---

##### `snapshotCopyGrantName`<sup>Optional</sup> <a name="snapshotCopyGrantName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.snapshotCopyGrantName"></a>

- *Type:* java.lang.String

The name of the snapshot copy grant to use when snapshots of an AWS KMS-encrypted cluster are copied to the destination region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#snapshot_copy_grant_name RedshiftCluster#snapshot_copy_grant_name}

---

##### `snapshotCopyManual`<sup>Optional</sup> <a name="snapshotCopyManual" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.snapshotCopyManual"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether to apply the snapshot retention period to newly copied manual snapshots instead of automated snapshots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#snapshot_copy_manual RedshiftCluster#snapshot_copy_manual}

---

##### `snapshotCopyRetentionPeriod`<sup>Optional</sup> <a name="snapshotCopyRetentionPeriod" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.snapshotCopyRetentionPeriod"></a>

- *Type:* java.lang.Number

The number of days to retain automated snapshots in the destination region after they are copied from the source region.

Default is 7.

Constraints: Must be at least 1 and no more than 35.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#snapshot_copy_retention_period RedshiftCluster#snapshot_copy_retention_period}

---

##### `snapshotIdentifier`<sup>Optional</sup> <a name="snapshotIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.snapshotIdentifier"></a>

- *Type:* java.lang.String

The name of the snapshot from which to create the new cluster. This parameter isn't case sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#snapshot_identifier RedshiftCluster#snapshot_identifier}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags">RedshiftClusterTags</a>>

The list of tags for the cluster parameter group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#tags RedshiftCluster#tags}

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="vpcSecurityGroupIds" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.vpcSecurityGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

A list of Virtual Private Cloud (VPC) security groups to be associated with the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#vpc_security_group_ids RedshiftCluster#vpc_security_group_ids}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.putEndpoint">putEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.putLoggingProperties">putLoggingProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetAllowVersionUpgrade">resetAllowVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetAquaConfigurationStatus">resetAquaConfigurationStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetAutomatedSnapshotRetentionPeriod">resetAutomatedSnapshotRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetAvailabilityZoneRelocation">resetAvailabilityZoneRelocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetAvailabilityZoneRelocationStatus">resetAvailabilityZoneRelocationStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetClassic">resetClassic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetClusterIdentifier">resetClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetClusterParameterGroupName">resetClusterParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetClusterSecurityGroups">resetClusterSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetClusterSubnetGroupName">resetClusterSubnetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetClusterVersion">resetClusterVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetDeferMaintenance">resetDeferMaintenance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetDeferMaintenanceDuration">resetDeferMaintenanceDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetDeferMaintenanceEndTime">resetDeferMaintenanceEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetDeferMaintenanceStartTime">resetDeferMaintenanceStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetDestinationRegion">resetDestinationRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetElasticIp">resetElasticIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetEncrypted">resetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetEndpoint">resetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetEnhancedVpcRouting">resetEnhancedVpcRouting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetHsmClientCertificateIdentifier">resetHsmClientCertificateIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetHsmConfigurationIdentifier">resetHsmConfigurationIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetIamRoles">resetIamRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetLoggingProperties">resetLoggingProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetMaintenanceTrackName">resetMaintenanceTrackName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetManageMasterPassword">resetManageMasterPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetManualSnapshotRetentionPeriod">resetManualSnapshotRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetMasterPasswordSecretKmsKeyId">resetMasterPasswordSecretKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetMasterUserPassword">resetMasterUserPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetMultiAz">resetMultiAz</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetNamespaceResourcePolicy">resetNamespaceResourcePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetNumberOfNodes">resetNumberOfNodes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetOwnerAccount">resetOwnerAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetPreferredMaintenanceWindow">resetPreferredMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetPubliclyAccessible">resetPubliclyAccessible</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetResourceAction">resetResourceAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetRevisionTarget">resetRevisionTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetRotateEncryptionKey">resetRotateEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetSnapshotClusterIdentifier">resetSnapshotClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetSnapshotCopyGrantName">resetSnapshotCopyGrantName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetSnapshotCopyManual">resetSnapshotCopyManual</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetSnapshotCopyRetentionPeriod">resetSnapshotCopyRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetSnapshotIdentifier">resetSnapshotIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetVpcSecurityGroupIds">resetVpcSecurityGroupIds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEndpoint` <a name="putEndpoint" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.putEndpoint"></a>

```java
public void putEndpoint(RedshiftClusterEndpoint value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.putEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpoint">RedshiftClusterEndpoint</a>

---

##### `putLoggingProperties` <a name="putLoggingProperties" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.putLoggingProperties"></a>

```java
public void putLoggingProperties(RedshiftClusterLoggingProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.putLoggingProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties">RedshiftClusterLoggingProperties</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<RedshiftClusterTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags">RedshiftClusterTags</a>>

---

##### `resetAllowVersionUpgrade` <a name="resetAllowVersionUpgrade" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetAllowVersionUpgrade"></a>

```java
public void resetAllowVersionUpgrade()
```

##### `resetAquaConfigurationStatus` <a name="resetAquaConfigurationStatus" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetAquaConfigurationStatus"></a>

```java
public void resetAquaConfigurationStatus()
```

##### `resetAutomatedSnapshotRetentionPeriod` <a name="resetAutomatedSnapshotRetentionPeriod" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetAutomatedSnapshotRetentionPeriod"></a>

```java
public void resetAutomatedSnapshotRetentionPeriod()
```

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetAvailabilityZone"></a>

```java
public void resetAvailabilityZone()
```

##### `resetAvailabilityZoneRelocation` <a name="resetAvailabilityZoneRelocation" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetAvailabilityZoneRelocation"></a>

```java
public void resetAvailabilityZoneRelocation()
```

##### `resetAvailabilityZoneRelocationStatus` <a name="resetAvailabilityZoneRelocationStatus" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetAvailabilityZoneRelocationStatus"></a>

```java
public void resetAvailabilityZoneRelocationStatus()
```

##### `resetClassic` <a name="resetClassic" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetClassic"></a>

```java
public void resetClassic()
```

##### `resetClusterIdentifier` <a name="resetClusterIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetClusterIdentifier"></a>

```java
public void resetClusterIdentifier()
```

##### `resetClusterParameterGroupName` <a name="resetClusterParameterGroupName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetClusterParameterGroupName"></a>

```java
public void resetClusterParameterGroupName()
```

##### `resetClusterSecurityGroups` <a name="resetClusterSecurityGroups" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetClusterSecurityGroups"></a>

```java
public void resetClusterSecurityGroups()
```

##### `resetClusterSubnetGroupName` <a name="resetClusterSubnetGroupName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetClusterSubnetGroupName"></a>

```java
public void resetClusterSubnetGroupName()
```

##### `resetClusterVersion` <a name="resetClusterVersion" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetClusterVersion"></a>

```java
public void resetClusterVersion()
```

##### `resetDeferMaintenance` <a name="resetDeferMaintenance" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetDeferMaintenance"></a>

```java
public void resetDeferMaintenance()
```

##### `resetDeferMaintenanceDuration` <a name="resetDeferMaintenanceDuration" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetDeferMaintenanceDuration"></a>

```java
public void resetDeferMaintenanceDuration()
```

##### `resetDeferMaintenanceEndTime` <a name="resetDeferMaintenanceEndTime" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetDeferMaintenanceEndTime"></a>

```java
public void resetDeferMaintenanceEndTime()
```

##### `resetDeferMaintenanceStartTime` <a name="resetDeferMaintenanceStartTime" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetDeferMaintenanceStartTime"></a>

```java
public void resetDeferMaintenanceStartTime()
```

##### `resetDestinationRegion` <a name="resetDestinationRegion" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetDestinationRegion"></a>

```java
public void resetDestinationRegion()
```

##### `resetElasticIp` <a name="resetElasticIp" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetElasticIp"></a>

```java
public void resetElasticIp()
```

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetEncrypted"></a>

```java
public void resetEncrypted()
```

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetEndpoint"></a>

```java
public void resetEndpoint()
```

##### `resetEnhancedVpcRouting` <a name="resetEnhancedVpcRouting" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetEnhancedVpcRouting"></a>

```java
public void resetEnhancedVpcRouting()
```

##### `resetHsmClientCertificateIdentifier` <a name="resetHsmClientCertificateIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetHsmClientCertificateIdentifier"></a>

```java
public void resetHsmClientCertificateIdentifier()
```

##### `resetHsmConfigurationIdentifier` <a name="resetHsmConfigurationIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetHsmConfigurationIdentifier"></a>

```java
public void resetHsmConfigurationIdentifier()
```

##### `resetIamRoles` <a name="resetIamRoles" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetIamRoles"></a>

```java
public void resetIamRoles()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetLoggingProperties` <a name="resetLoggingProperties" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetLoggingProperties"></a>

```java
public void resetLoggingProperties()
```

##### `resetMaintenanceTrackName` <a name="resetMaintenanceTrackName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetMaintenanceTrackName"></a>

```java
public void resetMaintenanceTrackName()
```

##### `resetManageMasterPassword` <a name="resetManageMasterPassword" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetManageMasterPassword"></a>

```java
public void resetManageMasterPassword()
```

##### `resetManualSnapshotRetentionPeriod` <a name="resetManualSnapshotRetentionPeriod" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetManualSnapshotRetentionPeriod"></a>

```java
public void resetManualSnapshotRetentionPeriod()
```

##### `resetMasterPasswordSecretKmsKeyId` <a name="resetMasterPasswordSecretKmsKeyId" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetMasterPasswordSecretKmsKeyId"></a>

```java
public void resetMasterPasswordSecretKmsKeyId()
```

##### `resetMasterUserPassword` <a name="resetMasterUserPassword" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetMasterUserPassword"></a>

```java
public void resetMasterUserPassword()
```

##### `resetMultiAz` <a name="resetMultiAz" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetMultiAz"></a>

```java
public void resetMultiAz()
```

##### `resetNamespaceResourcePolicy` <a name="resetNamespaceResourcePolicy" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetNamespaceResourcePolicy"></a>

```java
public void resetNamespaceResourcePolicy()
```

##### `resetNumberOfNodes` <a name="resetNumberOfNodes" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetNumberOfNodes"></a>

```java
public void resetNumberOfNodes()
```

##### `resetOwnerAccount` <a name="resetOwnerAccount" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetOwnerAccount"></a>

```java
public void resetOwnerAccount()
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetPort"></a>

```java
public void resetPort()
```

##### `resetPreferredMaintenanceWindow` <a name="resetPreferredMaintenanceWindow" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetPreferredMaintenanceWindow"></a>

```java
public void resetPreferredMaintenanceWindow()
```

##### `resetPubliclyAccessible` <a name="resetPubliclyAccessible" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetPubliclyAccessible"></a>

```java
public void resetPubliclyAccessible()
```

##### `resetResourceAction` <a name="resetResourceAction" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetResourceAction"></a>

```java
public void resetResourceAction()
```

##### `resetRevisionTarget` <a name="resetRevisionTarget" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetRevisionTarget"></a>

```java
public void resetRevisionTarget()
```

##### `resetRotateEncryptionKey` <a name="resetRotateEncryptionKey" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetRotateEncryptionKey"></a>

```java
public void resetRotateEncryptionKey()
```

##### `resetSnapshotClusterIdentifier` <a name="resetSnapshotClusterIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetSnapshotClusterIdentifier"></a>

```java
public void resetSnapshotClusterIdentifier()
```

##### `resetSnapshotCopyGrantName` <a name="resetSnapshotCopyGrantName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetSnapshotCopyGrantName"></a>

```java
public void resetSnapshotCopyGrantName()
```

##### `resetSnapshotCopyManual` <a name="resetSnapshotCopyManual" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetSnapshotCopyManual"></a>

```java
public void resetSnapshotCopyManual()
```

##### `resetSnapshotCopyRetentionPeriod` <a name="resetSnapshotCopyRetentionPeriod" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetSnapshotCopyRetentionPeriod"></a>

```java
public void resetSnapshotCopyRetentionPeriod()
```

##### `resetSnapshotIdentifier` <a name="resetSnapshotIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetSnapshotIdentifier"></a>

```java
public void resetSnapshotIdentifier()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetTags"></a>

```java
public void resetTags()
```

##### `resetVpcSecurityGroupIds` <a name="resetVpcSecurityGroupIds" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetVpcSecurityGroupIds"></a>

```java
public void resetVpcSecurityGroupIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RedshiftCluster resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.isConstruct"></a>

```java
import io.cdktn.providers.awscc.redshift_cluster.RedshiftCluster;

RedshiftCluster.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.redshift_cluster.RedshiftCluster;

RedshiftCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.redshift_cluster.RedshiftCluster;

RedshiftCluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.redshift_cluster.RedshiftCluster;

RedshiftCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RedshiftCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a RedshiftCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RedshiftCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RedshiftCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the RedshiftCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterNamespaceArn">clusterNamespaceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceIdentifier">deferMaintenanceIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.endpoint">endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference">RedshiftClusterEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.loggingProperties">loggingProperties</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference">RedshiftClusterLoggingPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterPasswordSecretArn">masterPasswordSecretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList">RedshiftClusterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.allowVersionUpgradeInput">allowVersionUpgradeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.aquaConfigurationStatusInput">aquaConfigurationStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.automatedSnapshotRetentionPeriodInput">automatedSnapshotRetentionPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.availabilityZoneRelocationInput">availabilityZoneRelocationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.availabilityZoneRelocationStatusInput">availabilityZoneRelocationStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.classicInput">classicInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterIdentifierInput">clusterIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterParameterGroupNameInput">clusterParameterGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterSecurityGroupsInput">clusterSecurityGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterSubnetGroupNameInput">clusterSubnetGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterTypeInput">clusterTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterVersionInput">clusterVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.dbNameInput">dbNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceDurationInput">deferMaintenanceDurationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceEndTimeInput">deferMaintenanceEndTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceInput">deferMaintenanceInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceStartTimeInput">deferMaintenanceStartTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.destinationRegionInput">destinationRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.elasticIpInput">elasticIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.encryptedInput">encryptedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.endpointInput">endpointInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpoint">RedshiftClusterEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.enhancedVpcRoutingInput">enhancedVpcRoutingInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.hsmClientCertificateIdentifierInput">hsmClientCertificateIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.hsmConfigurationIdentifierInput">hsmConfigurationIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.iamRolesInput">iamRolesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.loggingPropertiesInput">loggingPropertiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties">RedshiftClusterLoggingProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.maintenanceTrackNameInput">maintenanceTrackNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.manageMasterPasswordInput">manageMasterPasswordInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.manualSnapshotRetentionPeriodInput">manualSnapshotRetentionPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterPasswordSecretKmsKeyIdInput">masterPasswordSecretKmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterUsernameInput">masterUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterUserPasswordInput">masterUserPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.multiAzInput">multiAzInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.namespaceResourcePolicyInput">namespaceResourcePolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.nodeTypeInput">nodeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.numberOfNodesInput">numberOfNodesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.ownerAccountInput">ownerAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.preferredMaintenanceWindowInput">preferredMaintenanceWindowInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.publiclyAccessibleInput">publiclyAccessibleInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.resourceActionInput">resourceActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.revisionTargetInput">revisionTargetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.rotateEncryptionKeyInput">rotateEncryptionKeyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotClusterIdentifierInput">snapshotClusterIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotCopyGrantNameInput">snapshotCopyGrantNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotCopyManualInput">snapshotCopyManualInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotCopyRetentionPeriodInput">snapshotCopyRetentionPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotIdentifierInput">snapshotIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags">RedshiftClusterTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.vpcSecurityGroupIdsInput">vpcSecurityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.allowVersionUpgrade">allowVersionUpgrade</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.aquaConfigurationStatus">aquaConfigurationStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.automatedSnapshotRetentionPeriod">automatedSnapshotRetentionPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.availabilityZoneRelocation">availabilityZoneRelocation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.availabilityZoneRelocationStatus">availabilityZoneRelocationStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.classic">classic</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterIdentifier">clusterIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterParameterGroupName">clusterParameterGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterSecurityGroups">clusterSecurityGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterSubnetGroupName">clusterSubnetGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterType">clusterType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterVersion">clusterVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.dbName">dbName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenance">deferMaintenance</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceDuration">deferMaintenanceDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceEndTime">deferMaintenanceEndTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceStartTime">deferMaintenanceStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.destinationRegion">destinationRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.elasticIp">elasticIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.encrypted">encrypted</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.enhancedVpcRouting">enhancedVpcRouting</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.hsmClientCertificateIdentifier">hsmClientCertificateIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.hsmConfigurationIdentifier">hsmConfigurationIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.iamRoles">iamRoles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.maintenanceTrackName">maintenanceTrackName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.manageMasterPassword">manageMasterPassword</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.manualSnapshotRetentionPeriod">manualSnapshotRetentionPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterPasswordSecretKmsKeyId">masterPasswordSecretKmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterUsername">masterUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterUserPassword">masterUserPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.multiAz">multiAz</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.namespaceResourcePolicy">namespaceResourcePolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.nodeType">nodeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.numberOfNodes">numberOfNodes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.ownerAccount">ownerAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.publiclyAccessible">publiclyAccessible</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.resourceAction">resourceAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.revisionTarget">revisionTarget</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.rotateEncryptionKey">rotateEncryptionKey</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotClusterIdentifier">snapshotClusterIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotCopyGrantName">snapshotCopyGrantName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotCopyManual">snapshotCopyManual</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotCopyRetentionPeriod">snapshotCopyRetentionPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotIdentifier">snapshotIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `clusterNamespaceArn`<sup>Required</sup> <a name="clusterNamespaceArn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterNamespaceArn"></a>

```java
public java.lang.String getClusterNamespaceArn();
```

- *Type:* java.lang.String

---

##### `deferMaintenanceIdentifier`<sup>Required</sup> <a name="deferMaintenanceIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceIdentifier"></a>

```java
public java.lang.String getDeferMaintenanceIdentifier();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.endpoint"></a>

```java
public RedshiftClusterEndpointOutputReference getEndpoint();
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference">RedshiftClusterEndpointOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `loggingProperties`<sup>Required</sup> <a name="loggingProperties" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.loggingProperties"></a>

```java
public RedshiftClusterLoggingPropertiesOutputReference getLoggingProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference">RedshiftClusterLoggingPropertiesOutputReference</a>

---

##### `masterPasswordSecretArn`<sup>Required</sup> <a name="masterPasswordSecretArn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterPasswordSecretArn"></a>

```java
public java.lang.String getMasterPasswordSecretArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.tags"></a>

```java
public RedshiftClusterTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList">RedshiftClusterTagsList</a>

---

##### `allowVersionUpgradeInput`<sup>Optional</sup> <a name="allowVersionUpgradeInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.allowVersionUpgradeInput"></a>

```java
public java.lang.Boolean|IResolvable getAllowVersionUpgradeInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `aquaConfigurationStatusInput`<sup>Optional</sup> <a name="aquaConfigurationStatusInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.aquaConfigurationStatusInput"></a>

```java
public java.lang.String getAquaConfigurationStatusInput();
```

- *Type:* java.lang.String

---

##### `automatedSnapshotRetentionPeriodInput`<sup>Optional</sup> <a name="automatedSnapshotRetentionPeriodInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.automatedSnapshotRetentionPeriodInput"></a>

```java
public java.lang.Number getAutomatedSnapshotRetentionPeriodInput();
```

- *Type:* java.lang.Number

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.availabilityZoneInput"></a>

```java
public java.lang.String getAvailabilityZoneInput();
```

- *Type:* java.lang.String

---

##### `availabilityZoneRelocationInput`<sup>Optional</sup> <a name="availabilityZoneRelocationInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.availabilityZoneRelocationInput"></a>

```java
public java.lang.Boolean|IResolvable getAvailabilityZoneRelocationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `availabilityZoneRelocationStatusInput`<sup>Optional</sup> <a name="availabilityZoneRelocationStatusInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.availabilityZoneRelocationStatusInput"></a>

```java
public java.lang.String getAvailabilityZoneRelocationStatusInput();
```

- *Type:* java.lang.String

---

##### `classicInput`<sup>Optional</sup> <a name="classicInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.classicInput"></a>

```java
public java.lang.Boolean|IResolvable getClassicInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `clusterIdentifierInput`<sup>Optional</sup> <a name="clusterIdentifierInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterIdentifierInput"></a>

```java
public java.lang.String getClusterIdentifierInput();
```

- *Type:* java.lang.String

---

##### `clusterParameterGroupNameInput`<sup>Optional</sup> <a name="clusterParameterGroupNameInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterParameterGroupNameInput"></a>

```java
public java.lang.String getClusterParameterGroupNameInput();
```

- *Type:* java.lang.String

---

##### `clusterSecurityGroupsInput`<sup>Optional</sup> <a name="clusterSecurityGroupsInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterSecurityGroupsInput"></a>

```java
public java.util.List<java.lang.String> getClusterSecurityGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clusterSubnetGroupNameInput`<sup>Optional</sup> <a name="clusterSubnetGroupNameInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterSubnetGroupNameInput"></a>

```java
public java.lang.String getClusterSubnetGroupNameInput();
```

- *Type:* java.lang.String

---

##### `clusterTypeInput`<sup>Optional</sup> <a name="clusterTypeInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterTypeInput"></a>

```java
public java.lang.String getClusterTypeInput();
```

- *Type:* java.lang.String

---

##### `clusterVersionInput`<sup>Optional</sup> <a name="clusterVersionInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterVersionInput"></a>

```java
public java.lang.String getClusterVersionInput();
```

- *Type:* java.lang.String

---

##### `dbNameInput`<sup>Optional</sup> <a name="dbNameInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.dbNameInput"></a>

```java
public java.lang.String getDbNameInput();
```

- *Type:* java.lang.String

---

##### `deferMaintenanceDurationInput`<sup>Optional</sup> <a name="deferMaintenanceDurationInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceDurationInput"></a>

```java
public java.lang.Number getDeferMaintenanceDurationInput();
```

- *Type:* java.lang.Number

---

##### `deferMaintenanceEndTimeInput`<sup>Optional</sup> <a name="deferMaintenanceEndTimeInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceEndTimeInput"></a>

```java
public java.lang.String getDeferMaintenanceEndTimeInput();
```

- *Type:* java.lang.String

---

##### `deferMaintenanceInput`<sup>Optional</sup> <a name="deferMaintenanceInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceInput"></a>

```java
public java.lang.Boolean|IResolvable getDeferMaintenanceInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `deferMaintenanceStartTimeInput`<sup>Optional</sup> <a name="deferMaintenanceStartTimeInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceStartTimeInput"></a>

```java
public java.lang.String getDeferMaintenanceStartTimeInput();
```

- *Type:* java.lang.String

---

##### `destinationRegionInput`<sup>Optional</sup> <a name="destinationRegionInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.destinationRegionInput"></a>

```java
public java.lang.String getDestinationRegionInput();
```

- *Type:* java.lang.String

---

##### `elasticIpInput`<sup>Optional</sup> <a name="elasticIpInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.elasticIpInput"></a>

```java
public java.lang.String getElasticIpInput();
```

- *Type:* java.lang.String

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.encryptedInput"></a>

```java
public java.lang.Boolean|IResolvable getEncryptedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.endpointInput"></a>

```java
public IResolvable|RedshiftClusterEndpoint getEndpointInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpoint">RedshiftClusterEndpoint</a>

---

##### `enhancedVpcRoutingInput`<sup>Optional</sup> <a name="enhancedVpcRoutingInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.enhancedVpcRoutingInput"></a>

```java
public java.lang.Boolean|IResolvable getEnhancedVpcRoutingInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `hsmClientCertificateIdentifierInput`<sup>Optional</sup> <a name="hsmClientCertificateIdentifierInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.hsmClientCertificateIdentifierInput"></a>

```java
public java.lang.String getHsmClientCertificateIdentifierInput();
```

- *Type:* java.lang.String

---

##### `hsmConfigurationIdentifierInput`<sup>Optional</sup> <a name="hsmConfigurationIdentifierInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.hsmConfigurationIdentifierInput"></a>

```java
public java.lang.String getHsmConfigurationIdentifierInput();
```

- *Type:* java.lang.String

---

##### `iamRolesInput`<sup>Optional</sup> <a name="iamRolesInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.iamRolesInput"></a>

```java
public java.util.List<java.lang.String> getIamRolesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `loggingPropertiesInput`<sup>Optional</sup> <a name="loggingPropertiesInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.loggingPropertiesInput"></a>

```java
public IResolvable|RedshiftClusterLoggingProperties getLoggingPropertiesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties">RedshiftClusterLoggingProperties</a>

---

##### `maintenanceTrackNameInput`<sup>Optional</sup> <a name="maintenanceTrackNameInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.maintenanceTrackNameInput"></a>

```java
public java.lang.String getMaintenanceTrackNameInput();
```

- *Type:* java.lang.String

---

##### `manageMasterPasswordInput`<sup>Optional</sup> <a name="manageMasterPasswordInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.manageMasterPasswordInput"></a>

```java
public java.lang.Boolean|IResolvable getManageMasterPasswordInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `manualSnapshotRetentionPeriodInput`<sup>Optional</sup> <a name="manualSnapshotRetentionPeriodInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.manualSnapshotRetentionPeriodInput"></a>

```java
public java.lang.Number getManualSnapshotRetentionPeriodInput();
```

- *Type:* java.lang.Number

---

##### `masterPasswordSecretKmsKeyIdInput`<sup>Optional</sup> <a name="masterPasswordSecretKmsKeyIdInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterPasswordSecretKmsKeyIdInput"></a>

```java
public java.lang.String getMasterPasswordSecretKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `masterUsernameInput`<sup>Optional</sup> <a name="masterUsernameInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterUsernameInput"></a>

```java
public java.lang.String getMasterUsernameInput();
```

- *Type:* java.lang.String

---

##### `masterUserPasswordInput`<sup>Optional</sup> <a name="masterUserPasswordInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterUserPasswordInput"></a>

```java
public java.lang.String getMasterUserPasswordInput();
```

- *Type:* java.lang.String

---

##### `multiAzInput`<sup>Optional</sup> <a name="multiAzInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.multiAzInput"></a>

```java
public java.lang.Boolean|IResolvable getMultiAzInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `namespaceResourcePolicyInput`<sup>Optional</sup> <a name="namespaceResourcePolicyInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.namespaceResourcePolicyInput"></a>

```java
public java.lang.String getNamespaceResourcePolicyInput();
```

- *Type:* java.lang.String

---

##### `nodeTypeInput`<sup>Optional</sup> <a name="nodeTypeInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.nodeTypeInput"></a>

```java
public java.lang.String getNodeTypeInput();
```

- *Type:* java.lang.String

---

##### `numberOfNodesInput`<sup>Optional</sup> <a name="numberOfNodesInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.numberOfNodesInput"></a>

```java
public java.lang.Number getNumberOfNodesInput();
```

- *Type:* java.lang.Number

---

##### `ownerAccountInput`<sup>Optional</sup> <a name="ownerAccountInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.ownerAccountInput"></a>

```java
public java.lang.String getOwnerAccountInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `preferredMaintenanceWindowInput`<sup>Optional</sup> <a name="preferredMaintenanceWindowInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.preferredMaintenanceWindowInput"></a>

```java
public java.lang.String getPreferredMaintenanceWindowInput();
```

- *Type:* java.lang.String

---

##### `publiclyAccessibleInput`<sup>Optional</sup> <a name="publiclyAccessibleInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.publiclyAccessibleInput"></a>

```java
public java.lang.Boolean|IResolvable getPubliclyAccessibleInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `resourceActionInput`<sup>Optional</sup> <a name="resourceActionInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.resourceActionInput"></a>

```java
public java.lang.String getResourceActionInput();
```

- *Type:* java.lang.String

---

##### `revisionTargetInput`<sup>Optional</sup> <a name="revisionTargetInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.revisionTargetInput"></a>

```java
public java.lang.String getRevisionTargetInput();
```

- *Type:* java.lang.String

---

##### `rotateEncryptionKeyInput`<sup>Optional</sup> <a name="rotateEncryptionKeyInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.rotateEncryptionKeyInput"></a>

```java
public java.lang.Boolean|IResolvable getRotateEncryptionKeyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `snapshotClusterIdentifierInput`<sup>Optional</sup> <a name="snapshotClusterIdentifierInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotClusterIdentifierInput"></a>

```java
public java.lang.String getSnapshotClusterIdentifierInput();
```

- *Type:* java.lang.String

---

##### `snapshotCopyGrantNameInput`<sup>Optional</sup> <a name="snapshotCopyGrantNameInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotCopyGrantNameInput"></a>

```java
public java.lang.String getSnapshotCopyGrantNameInput();
```

- *Type:* java.lang.String

---

##### `snapshotCopyManualInput`<sup>Optional</sup> <a name="snapshotCopyManualInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotCopyManualInput"></a>

```java
public java.lang.Boolean|IResolvable getSnapshotCopyManualInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `snapshotCopyRetentionPeriodInput`<sup>Optional</sup> <a name="snapshotCopyRetentionPeriodInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotCopyRetentionPeriodInput"></a>

```java
public java.lang.Number getSnapshotCopyRetentionPeriodInput();
```

- *Type:* java.lang.Number

---

##### `snapshotIdentifierInput`<sup>Optional</sup> <a name="snapshotIdentifierInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotIdentifierInput"></a>

```java
public java.lang.String getSnapshotIdentifierInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.tagsInput"></a>

```java
public IResolvable|java.util.List<RedshiftClusterTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags">RedshiftClusterTags</a>>

---

##### `vpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="vpcSecurityGroupIdsInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.vpcSecurityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowVersionUpgrade`<sup>Required</sup> <a name="allowVersionUpgrade" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.allowVersionUpgrade"></a>

```java
public java.lang.Boolean|IResolvable getAllowVersionUpgrade();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `aquaConfigurationStatus`<sup>Required</sup> <a name="aquaConfigurationStatus" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.aquaConfigurationStatus"></a>

```java
public java.lang.String getAquaConfigurationStatus();
```

- *Type:* java.lang.String

---

##### `automatedSnapshotRetentionPeriod`<sup>Required</sup> <a name="automatedSnapshotRetentionPeriod" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.automatedSnapshotRetentionPeriod"></a>

```java
public java.lang.Number getAutomatedSnapshotRetentionPeriod();
```

- *Type:* java.lang.Number

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `availabilityZoneRelocation`<sup>Required</sup> <a name="availabilityZoneRelocation" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.availabilityZoneRelocation"></a>

```java
public java.lang.Boolean|IResolvable getAvailabilityZoneRelocation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `availabilityZoneRelocationStatus`<sup>Required</sup> <a name="availabilityZoneRelocationStatus" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.availabilityZoneRelocationStatus"></a>

```java
public java.lang.String getAvailabilityZoneRelocationStatus();
```

- *Type:* java.lang.String

---

##### `classic`<sup>Required</sup> <a name="classic" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.classic"></a>

```java
public java.lang.Boolean|IResolvable getClassic();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterIdentifier"></a>

```java
public java.lang.String getClusterIdentifier();
```

- *Type:* java.lang.String

---

##### `clusterParameterGroupName`<sup>Required</sup> <a name="clusterParameterGroupName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterParameterGroupName"></a>

```java
public java.lang.String getClusterParameterGroupName();
```

- *Type:* java.lang.String

---

##### `clusterSecurityGroups`<sup>Required</sup> <a name="clusterSecurityGroups" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterSecurityGroups"></a>

```java
public java.util.List<java.lang.String> getClusterSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clusterSubnetGroupName`<sup>Required</sup> <a name="clusterSubnetGroupName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterSubnetGroupName"></a>

```java
public java.lang.String getClusterSubnetGroupName();
```

- *Type:* java.lang.String

---

##### `clusterType`<sup>Required</sup> <a name="clusterType" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterType"></a>

```java
public java.lang.String getClusterType();
```

- *Type:* java.lang.String

---

##### `clusterVersion`<sup>Required</sup> <a name="clusterVersion" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterVersion"></a>

```java
public java.lang.String getClusterVersion();
```

- *Type:* java.lang.String

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.dbName"></a>

```java
public java.lang.String getDbName();
```

- *Type:* java.lang.String

---

##### `deferMaintenance`<sup>Required</sup> <a name="deferMaintenance" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenance"></a>

```java
public java.lang.Boolean|IResolvable getDeferMaintenance();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `deferMaintenanceDuration`<sup>Required</sup> <a name="deferMaintenanceDuration" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceDuration"></a>

```java
public java.lang.Number getDeferMaintenanceDuration();
```

- *Type:* java.lang.Number

---

##### `deferMaintenanceEndTime`<sup>Required</sup> <a name="deferMaintenanceEndTime" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceEndTime"></a>

```java
public java.lang.String getDeferMaintenanceEndTime();
```

- *Type:* java.lang.String

---

##### `deferMaintenanceStartTime`<sup>Required</sup> <a name="deferMaintenanceStartTime" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceStartTime"></a>

```java
public java.lang.String getDeferMaintenanceStartTime();
```

- *Type:* java.lang.String

---

##### `destinationRegion`<sup>Required</sup> <a name="destinationRegion" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.destinationRegion"></a>

```java
public java.lang.String getDestinationRegion();
```

- *Type:* java.lang.String

---

##### `elasticIp`<sup>Required</sup> <a name="elasticIp" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.elasticIp"></a>

```java
public java.lang.String getElasticIp();
```

- *Type:* java.lang.String

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.encrypted"></a>

```java
public java.lang.Boolean|IResolvable getEncrypted();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enhancedVpcRouting`<sup>Required</sup> <a name="enhancedVpcRouting" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.enhancedVpcRouting"></a>

```java
public java.lang.Boolean|IResolvable getEnhancedVpcRouting();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `hsmClientCertificateIdentifier`<sup>Required</sup> <a name="hsmClientCertificateIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.hsmClientCertificateIdentifier"></a>

```java
public java.lang.String getHsmClientCertificateIdentifier();
```

- *Type:* java.lang.String

---

##### `hsmConfigurationIdentifier`<sup>Required</sup> <a name="hsmConfigurationIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.hsmConfigurationIdentifier"></a>

```java
public java.lang.String getHsmConfigurationIdentifier();
```

- *Type:* java.lang.String

---

##### `iamRoles`<sup>Required</sup> <a name="iamRoles" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.iamRoles"></a>

```java
public java.util.List<java.lang.String> getIamRoles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `maintenanceTrackName`<sup>Required</sup> <a name="maintenanceTrackName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.maintenanceTrackName"></a>

```java
public java.lang.String getMaintenanceTrackName();
```

- *Type:* java.lang.String

---

##### `manageMasterPassword`<sup>Required</sup> <a name="manageMasterPassword" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.manageMasterPassword"></a>

```java
public java.lang.Boolean|IResolvable getManageMasterPassword();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `manualSnapshotRetentionPeriod`<sup>Required</sup> <a name="manualSnapshotRetentionPeriod" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.manualSnapshotRetentionPeriod"></a>

```java
public java.lang.Number getManualSnapshotRetentionPeriod();
```

- *Type:* java.lang.Number

---

##### `masterPasswordSecretKmsKeyId`<sup>Required</sup> <a name="masterPasswordSecretKmsKeyId" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterPasswordSecretKmsKeyId"></a>

```java
public java.lang.String getMasterPasswordSecretKmsKeyId();
```

- *Type:* java.lang.String

---

##### `masterUsername`<sup>Required</sup> <a name="masterUsername" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterUsername"></a>

```java
public java.lang.String getMasterUsername();
```

- *Type:* java.lang.String

---

##### `masterUserPassword`<sup>Required</sup> <a name="masterUserPassword" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterUserPassword"></a>

```java
public java.lang.String getMasterUserPassword();
```

- *Type:* java.lang.String

---

##### `multiAz`<sup>Required</sup> <a name="multiAz" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.multiAz"></a>

```java
public java.lang.Boolean|IResolvable getMultiAz();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `namespaceResourcePolicy`<sup>Required</sup> <a name="namespaceResourcePolicy" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.namespaceResourcePolicy"></a>

```java
public java.lang.String getNamespaceResourcePolicy();
```

- *Type:* java.lang.String

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.nodeType"></a>

```java
public java.lang.String getNodeType();
```

- *Type:* java.lang.String

---

##### `numberOfNodes`<sup>Required</sup> <a name="numberOfNodes" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.numberOfNodes"></a>

```java
public java.lang.Number getNumberOfNodes();
```

- *Type:* java.lang.Number

---

##### `ownerAccount`<sup>Required</sup> <a name="ownerAccount" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.ownerAccount"></a>

```java
public java.lang.String getOwnerAccount();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.preferredMaintenanceWindow"></a>

```java
public java.lang.String getPreferredMaintenanceWindow();
```

- *Type:* java.lang.String

---

##### `publiclyAccessible`<sup>Required</sup> <a name="publiclyAccessible" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.publiclyAccessible"></a>

```java
public java.lang.Boolean|IResolvable getPubliclyAccessible();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `resourceAction`<sup>Required</sup> <a name="resourceAction" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.resourceAction"></a>

```java
public java.lang.String getResourceAction();
```

- *Type:* java.lang.String

---

##### `revisionTarget`<sup>Required</sup> <a name="revisionTarget" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.revisionTarget"></a>

```java
public java.lang.String getRevisionTarget();
```

- *Type:* java.lang.String

---

##### `rotateEncryptionKey`<sup>Required</sup> <a name="rotateEncryptionKey" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.rotateEncryptionKey"></a>

```java
public java.lang.Boolean|IResolvable getRotateEncryptionKey();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `snapshotClusterIdentifier`<sup>Required</sup> <a name="snapshotClusterIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotClusterIdentifier"></a>

```java
public java.lang.String getSnapshotClusterIdentifier();
```

- *Type:* java.lang.String

---

##### `snapshotCopyGrantName`<sup>Required</sup> <a name="snapshotCopyGrantName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotCopyGrantName"></a>

```java
public java.lang.String getSnapshotCopyGrantName();
```

- *Type:* java.lang.String

---

##### `snapshotCopyManual`<sup>Required</sup> <a name="snapshotCopyManual" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotCopyManual"></a>

```java
public java.lang.Boolean|IResolvable getSnapshotCopyManual();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `snapshotCopyRetentionPeriod`<sup>Required</sup> <a name="snapshotCopyRetentionPeriod" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotCopyRetentionPeriod"></a>

```java
public java.lang.Number getSnapshotCopyRetentionPeriod();
```

- *Type:* java.lang.Number

---

##### `snapshotIdentifier`<sup>Required</sup> <a name="snapshotIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotIdentifier"></a>

```java
public java.lang.String getSnapshotIdentifier();
```

- *Type:* java.lang.String

---

##### `vpcSecurityGroupIds`<sup>Required</sup> <a name="vpcSecurityGroupIds" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.vpcSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftClusterConfig <a name="RedshiftClusterConfig" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_cluster.RedshiftClusterConfig;

RedshiftClusterConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .clusterType(java.lang.String)
    .dbName(java.lang.String)
    .masterUsername(java.lang.String)
    .nodeType(java.lang.String)
//  .allowVersionUpgrade(java.lang.Boolean|IResolvable)
//  .aquaConfigurationStatus(java.lang.String)
//  .automatedSnapshotRetentionPeriod(java.lang.Number)
//  .availabilityZone(java.lang.String)
//  .availabilityZoneRelocation(java.lang.Boolean|IResolvable)
//  .availabilityZoneRelocationStatus(java.lang.String)
//  .classic(java.lang.Boolean|IResolvable)
//  .clusterIdentifier(java.lang.String)
//  .clusterParameterGroupName(java.lang.String)
//  .clusterSecurityGroups(java.util.List<java.lang.String>)
//  .clusterSubnetGroupName(java.lang.String)
//  .clusterVersion(java.lang.String)
//  .deferMaintenance(java.lang.Boolean|IResolvable)
//  .deferMaintenanceDuration(java.lang.Number)
//  .deferMaintenanceEndTime(java.lang.String)
//  .deferMaintenanceStartTime(java.lang.String)
//  .destinationRegion(java.lang.String)
//  .elasticIp(java.lang.String)
//  .encrypted(java.lang.Boolean|IResolvable)
//  .endpoint(RedshiftClusterEndpoint)
//  .enhancedVpcRouting(java.lang.Boolean|IResolvable)
//  .hsmClientCertificateIdentifier(java.lang.String)
//  .hsmConfigurationIdentifier(java.lang.String)
//  .iamRoles(java.util.List<java.lang.String>)
//  .kmsKeyId(java.lang.String)
//  .loggingProperties(RedshiftClusterLoggingProperties)
//  .maintenanceTrackName(java.lang.String)
//  .manageMasterPassword(java.lang.Boolean|IResolvable)
//  .manualSnapshotRetentionPeriod(java.lang.Number)
//  .masterPasswordSecretKmsKeyId(java.lang.String)
//  .masterUserPassword(java.lang.String)
//  .multiAz(java.lang.Boolean|IResolvable)
//  .namespaceResourcePolicy(java.lang.String)
//  .numberOfNodes(java.lang.Number)
//  .ownerAccount(java.lang.String)
//  .port(java.lang.Number)
//  .preferredMaintenanceWindow(java.lang.String)
//  .publiclyAccessible(java.lang.Boolean|IResolvable)
//  .resourceAction(java.lang.String)
//  .revisionTarget(java.lang.String)
//  .rotateEncryptionKey(java.lang.Boolean|IResolvable)
//  .snapshotClusterIdentifier(java.lang.String)
//  .snapshotCopyGrantName(java.lang.String)
//  .snapshotCopyManual(java.lang.Boolean|IResolvable)
//  .snapshotCopyRetentionPeriod(java.lang.Number)
//  .snapshotIdentifier(java.lang.String)
//  .tags(IResolvable|java.util.List<RedshiftClusterTags>)
//  .vpcSecurityGroupIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.clusterType">clusterType</a></code> | <code>java.lang.String</code> | The type of the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.dbName">dbName</a></code> | <code>java.lang.String</code> | The name of the first database to be created when the cluster is created. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.masterUsername">masterUsername</a></code> | <code>java.lang.String</code> | The user name associated with the master user account for the cluster that is being created. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.nodeType">nodeType</a></code> | <code>java.lang.String</code> | The node type to be provisioned for the cluster.Valid Values: ds2.xlarge \| ds2.8xlarge \| dc1.large \| dc1.8xlarge \| dc2.large \| dc2.8xlarge \| ra3.large \| ra3.4xlarge \| ra3.16xlarge \| rg.large \| rg.xlarge \| rg.4xlarge \| rg.12xlarge. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.allowVersionUpgrade">allowVersionUpgrade</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Major version upgrades can be applied during the maintenance window to the Amazon Redshift engine that is running on the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.aquaConfigurationStatus">aquaConfigurationStatus</a></code> | <code>java.lang.String</code> | The value represents how the cluster is configured to use AQUA (Advanced Query Accelerator) after the cluster is restored. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.automatedSnapshotRetentionPeriod">automatedSnapshotRetentionPeriod</a></code> | <code>java.lang.Number</code> | The number of days that automated snapshots are retained. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | The EC2 Availability Zone (AZ) in which you want Amazon Redshift to provision the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.availabilityZoneRelocation">availabilityZoneRelocation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | The option to enable relocation for an Amazon Redshift cluster between Availability Zones after the cluster modification is complete. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.availabilityZoneRelocationStatus">availabilityZoneRelocationStatus</a></code> | <code>java.lang.String</code> | The availability zone relocation status of the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.classic">classic</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A boolean value indicating whether the resize operation is using the classic resize process. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.clusterIdentifier">clusterIdentifier</a></code> | <code>java.lang.String</code> | A unique identifier for the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.clusterParameterGroupName">clusterParameterGroupName</a></code> | <code>java.lang.String</code> | The name of the parameter group to be associated with this cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.clusterSecurityGroups">clusterSecurityGroups</a></code> | <code>java.util.List<java.lang.String></code> | A list of security groups to be associated with this cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.clusterSubnetGroupName">clusterSubnetGroupName</a></code> | <code>java.lang.String</code> | The name of a cluster subnet group to be associated with this cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.clusterVersion">clusterVersion</a></code> | <code>java.lang.String</code> | The version of the Amazon Redshift engine software that you want to deploy on the cluster.The version selected runs on all the nodes in the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.deferMaintenance">deferMaintenance</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A boolean indicating whether to enable the deferred maintenance window. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.deferMaintenanceDuration">deferMaintenanceDuration</a></code> | <code>java.lang.Number</code> | An integer indicating the duration of the maintenance window in days. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.deferMaintenanceEndTime">deferMaintenanceEndTime</a></code> | <code>java.lang.String</code> | A timestamp indicating end time for the deferred maintenance window. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.deferMaintenanceStartTime">deferMaintenanceStartTime</a></code> | <code>java.lang.String</code> | A timestamp indicating the start time for the deferred maintenance window. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.destinationRegion">destinationRegion</a></code> | <code>java.lang.String</code> | The destination AWS Region that you want to copy snapshots to. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.elasticIp">elasticIp</a></code> | <code>java.lang.String</code> | The Elastic IP (EIP) address for the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.encrypted">encrypted</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, the data in the cluster is encrypted at rest. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.endpoint">endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpoint">RedshiftClusterEndpoint</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#endpoint RedshiftCluster#endpoint}. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.enhancedVpcRouting">enhancedVpcRouting</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | An option that specifies whether to create the cluster with enhanced VPC routing enabled. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.hsmClientCertificateIdentifier">hsmClientCertificateIdentifier</a></code> | <code>java.lang.String</code> | Specifies the name of the HSM client certificate the Amazon Redshift cluster uses to retrieve the data encryption keys stored in an HSM. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.hsmConfigurationIdentifier">hsmConfigurationIdentifier</a></code> | <code>java.lang.String</code> | Specifies the name of the HSM configuration that contains the information the Amazon Redshift cluster can use to retrieve and store keys in an HSM. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.iamRoles">iamRoles</a></code> | <code>java.util.List<java.lang.String></code> | A list of AWS Identity and Access Management (IAM) roles that can be used by the cluster to access other AWS services. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | The AWS Key Management Service (KMS) key ID of the encryption key that you want to use to encrypt data in the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.loggingProperties">loggingProperties</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties">RedshiftClusterLoggingProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#logging_properties RedshiftCluster#logging_properties}. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.maintenanceTrackName">maintenanceTrackName</a></code> | <code>java.lang.String</code> | The name for the maintenance track that you want to assign for the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.manageMasterPassword">manageMasterPassword</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A boolean indicating if the redshift cluster's admin user credentials is managed by Redshift or not. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.manualSnapshotRetentionPeriod">manualSnapshotRetentionPeriod</a></code> | <code>java.lang.Number</code> | The number of days to retain newly copied snapshots in the destination AWS Region after they are copied from the source AWS Region. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.masterPasswordSecretKmsKeyId">masterPasswordSecretKmsKeyId</a></code> | <code>java.lang.String</code> | The ID of the Key Management Service (KMS) key used to encrypt and store the cluster's admin user credentials secret. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.masterUserPassword">masterUserPassword</a></code> | <code>java.lang.String</code> | The password associated with the master user account for the cluster that is being created. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.multiAz">multiAz</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A boolean indicating if the redshift cluster is multi-az or not. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.namespaceResourcePolicy">namespaceResourcePolicy</a></code> | <code>java.lang.String</code> | The namespace resource policy document that will be attached to a Redshift cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.numberOfNodes">numberOfNodes</a></code> | <code>java.lang.Number</code> | The number of compute nodes in the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.ownerAccount">ownerAccount</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#owner_account RedshiftCluster#owner_account}. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.port">port</a></code> | <code>java.lang.Number</code> | The port number on which the cluster accepts incoming connections. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>java.lang.String</code> | The weekly time range (in UTC) during which automated cluster maintenance can occur. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.publiclyAccessible">publiclyAccessible</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, the cluster can be accessed from a public network. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.resourceAction">resourceAction</a></code> | <code>java.lang.String</code> | The Redshift operation to be performed. Resource Action supports pause-cluster, resume-cluster, failover-primary-compute APIs. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.revisionTarget">revisionTarget</a></code> | <code>java.lang.String</code> | The identifier of the database revision. You can retrieve this value from the response to the DescribeClusterDbRevisions request. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.rotateEncryptionKey">rotateEncryptionKey</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A boolean indicating if we want to rotate Encryption Keys. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.snapshotClusterIdentifier">snapshotClusterIdentifier</a></code> | <code>java.lang.String</code> | The name of the cluster the source snapshot was created from. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.snapshotCopyGrantName">snapshotCopyGrantName</a></code> | <code>java.lang.String</code> | The name of the snapshot copy grant to use when snapshots of an AWS KMS-encrypted cluster are copied to the destination region. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.snapshotCopyManual">snapshotCopyManual</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether to apply the snapshot retention period to newly copied manual snapshots instead of automated snapshots. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.snapshotCopyRetentionPeriod">snapshotCopyRetentionPeriod</a></code> | <code>java.lang.Number</code> | The number of days to retain automated snapshots in the destination region after they are copied from the source region. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.snapshotIdentifier">snapshotIdentifier</a></code> | <code>java.lang.String</code> | The name of the snapshot from which to create the new cluster. This parameter isn't case sensitive. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags">RedshiftClusterTags</a>></code> | The list of tags for the cluster parameter group. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | A list of Virtual Private Cloud (VPC) security groups to be associated with the cluster. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `clusterType`<sup>Required</sup> <a name="clusterType" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.clusterType"></a>

```java
public java.lang.String getClusterType();
```

- *Type:* java.lang.String

The type of the cluster.

When cluster type is specified as single-node, the NumberOfNodes parameter is not required and if multi-node, the NumberOfNodes parameter is required

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#cluster_type RedshiftCluster#cluster_type}

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.dbName"></a>

```java
public java.lang.String getDbName();
```

- *Type:* java.lang.String

The name of the first database to be created when the cluster is created.

To create additional databases after the cluster is created, connect to the cluster with a SQL client and use SQL commands to create a database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#db_name RedshiftCluster#db_name}

---

##### `masterUsername`<sup>Required</sup> <a name="masterUsername" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.masterUsername"></a>

```java
public java.lang.String getMasterUsername();
```

- *Type:* java.lang.String

The user name associated with the master user account for the cluster that is being created.

The user name can't be PUBLIC and first character must be a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#master_username RedshiftCluster#master_username}

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.nodeType"></a>

```java
public java.lang.String getNodeType();
```

- *Type:* java.lang.String

The node type to be provisioned for the cluster.Valid Values: ds2.xlarge | ds2.8xlarge | dc1.large | dc1.8xlarge | dc2.large | dc2.8xlarge | ra3.large | ra3.4xlarge | ra3.16xlarge | rg.large | rg.xlarge | rg.4xlarge | rg.12xlarge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#node_type RedshiftCluster#node_type}

---

##### `allowVersionUpgrade`<sup>Optional</sup> <a name="allowVersionUpgrade" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.allowVersionUpgrade"></a>

```java
public java.lang.Boolean|IResolvable getAllowVersionUpgrade();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Major version upgrades can be applied during the maintenance window to the Amazon Redshift engine that is running on the cluster.

Default value is True

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#allow_version_upgrade RedshiftCluster#allow_version_upgrade}

---

##### `aquaConfigurationStatus`<sup>Optional</sup> <a name="aquaConfigurationStatus" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.aquaConfigurationStatus"></a>

```java
public java.lang.String getAquaConfigurationStatus();
```

- *Type:* java.lang.String

The value represents how the cluster is configured to use AQUA (Advanced Query Accelerator) after the cluster is restored.

Possible values include the following.

enabled - Use AQUA if it is available for the current Region and Amazon Redshift node type.
disabled - Don't use AQUA.
auto - Amazon Redshift determines whether to use AQUA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#aqua_configuration_status RedshiftCluster#aqua_configuration_status}

---

##### `automatedSnapshotRetentionPeriod`<sup>Optional</sup> <a name="automatedSnapshotRetentionPeriod" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.automatedSnapshotRetentionPeriod"></a>

```java
public java.lang.Number getAutomatedSnapshotRetentionPeriod();
```

- *Type:* java.lang.Number

The number of days that automated snapshots are retained.

If the value is 0, automated snapshots are disabled. Default value is 1

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#automated_snapshot_retention_period RedshiftCluster#automated_snapshot_retention_period}

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

The EC2 Availability Zone (AZ) in which you want Amazon Redshift to provision the cluster.

Default: A random, system-chosen Availability Zone in the region that is specified by the endpoint

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#availability_zone RedshiftCluster#availability_zone}

---

##### `availabilityZoneRelocation`<sup>Optional</sup> <a name="availabilityZoneRelocation" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.availabilityZoneRelocation"></a>

```java
public java.lang.Boolean|IResolvable getAvailabilityZoneRelocation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

The option to enable relocation for an Amazon Redshift cluster between Availability Zones after the cluster modification is complete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#availability_zone_relocation RedshiftCluster#availability_zone_relocation}

---

##### `availabilityZoneRelocationStatus`<sup>Optional</sup> <a name="availabilityZoneRelocationStatus" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.availabilityZoneRelocationStatus"></a>

```java
public java.lang.String getAvailabilityZoneRelocationStatus();
```

- *Type:* java.lang.String

The availability zone relocation status of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#availability_zone_relocation_status RedshiftCluster#availability_zone_relocation_status}

---

##### `classic`<sup>Optional</sup> <a name="classic" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.classic"></a>

```java
public java.lang.Boolean|IResolvable getClassic();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A boolean value indicating whether the resize operation is using the classic resize process.

If you don't provide this parameter or set the value to false , the resize type is elastic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#classic RedshiftCluster#classic}

---

##### `clusterIdentifier`<sup>Optional</sup> <a name="clusterIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.clusterIdentifier"></a>

```java
public java.lang.String getClusterIdentifier();
```

- *Type:* java.lang.String

A unique identifier for the cluster.

You use this identifier to refer to the cluster for any subsequent cluster operations such as deleting or modifying. All alphabetical characters must be lower case, no hypens at the end, no two consecutive hyphens. Cluster name should be unique for all clusters within an AWS account

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#cluster_identifier RedshiftCluster#cluster_identifier}

---

##### `clusterParameterGroupName`<sup>Optional</sup> <a name="clusterParameterGroupName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.clusterParameterGroupName"></a>

```java
public java.lang.String getClusterParameterGroupName();
```

- *Type:* java.lang.String

The name of the parameter group to be associated with this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#cluster_parameter_group_name RedshiftCluster#cluster_parameter_group_name}

---

##### `clusterSecurityGroups`<sup>Optional</sup> <a name="clusterSecurityGroups" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.clusterSecurityGroups"></a>

```java
public java.util.List<java.lang.String> getClusterSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

A list of security groups to be associated with this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#cluster_security_groups RedshiftCluster#cluster_security_groups}

---

##### `clusterSubnetGroupName`<sup>Optional</sup> <a name="clusterSubnetGroupName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.clusterSubnetGroupName"></a>

```java
public java.lang.String getClusterSubnetGroupName();
```

- *Type:* java.lang.String

The name of a cluster subnet group to be associated with this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#cluster_subnet_group_name RedshiftCluster#cluster_subnet_group_name}

---

##### `clusterVersion`<sup>Optional</sup> <a name="clusterVersion" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.clusterVersion"></a>

```java
public java.lang.String getClusterVersion();
```

- *Type:* java.lang.String

The version of the Amazon Redshift engine software that you want to deploy on the cluster.The version selected runs on all the nodes in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#cluster_version RedshiftCluster#cluster_version}

---

##### `deferMaintenance`<sup>Optional</sup> <a name="deferMaintenance" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.deferMaintenance"></a>

```java
public java.lang.Boolean|IResolvable getDeferMaintenance();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A boolean indicating whether to enable the deferred maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#defer_maintenance RedshiftCluster#defer_maintenance}

---

##### `deferMaintenanceDuration`<sup>Optional</sup> <a name="deferMaintenanceDuration" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.deferMaintenanceDuration"></a>

```java
public java.lang.Number getDeferMaintenanceDuration();
```

- *Type:* java.lang.Number

An integer indicating the duration of the maintenance window in days.

If you specify a duration, you can't specify an end time. The duration must be 60 days or less.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#defer_maintenance_duration RedshiftCluster#defer_maintenance_duration}

---

##### `deferMaintenanceEndTime`<sup>Optional</sup> <a name="deferMaintenanceEndTime" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.deferMaintenanceEndTime"></a>

```java
public java.lang.String getDeferMaintenanceEndTime();
```

- *Type:* java.lang.String

A timestamp indicating end time for the deferred maintenance window.

If you specify an end time, you can't specify a duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#defer_maintenance_end_time RedshiftCluster#defer_maintenance_end_time}

---

##### `deferMaintenanceStartTime`<sup>Optional</sup> <a name="deferMaintenanceStartTime" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.deferMaintenanceStartTime"></a>

```java
public java.lang.String getDeferMaintenanceStartTime();
```

- *Type:* java.lang.String

A timestamp indicating the start time for the deferred maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#defer_maintenance_start_time RedshiftCluster#defer_maintenance_start_time}

---

##### `destinationRegion`<sup>Optional</sup> <a name="destinationRegion" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.destinationRegion"></a>

```java
public java.lang.String getDestinationRegion();
```

- *Type:* java.lang.String

The destination AWS Region that you want to copy snapshots to.

Constraints: Must be the name of a valid AWS Region. For more information, see Regions and Endpoints in the Amazon Web Services [https://docs.aws.amazon.com/general/latest/gr/rande.html#redshift_region] General Reference

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#destination_region RedshiftCluster#destination_region}

---

##### `elasticIp`<sup>Optional</sup> <a name="elasticIp" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.elasticIp"></a>

```java
public java.lang.String getElasticIp();
```

- *Type:* java.lang.String

The Elastic IP (EIP) address for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#elastic_ip RedshiftCluster#elastic_ip}

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.encrypted"></a>

```java
public java.lang.Boolean|IResolvable getEncrypted();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, the data in the cluster is encrypted at rest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#encrypted RedshiftCluster#encrypted}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.endpoint"></a>

```java
public RedshiftClusterEndpoint getEndpoint();
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpoint">RedshiftClusterEndpoint</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#endpoint RedshiftCluster#endpoint}.

---

##### `enhancedVpcRouting`<sup>Optional</sup> <a name="enhancedVpcRouting" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.enhancedVpcRouting"></a>

```java
public java.lang.Boolean|IResolvable getEnhancedVpcRouting();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

An option that specifies whether to create the cluster with enhanced VPC routing enabled.

To create a cluster that uses enhanced VPC routing, the cluster must be in a VPC. For more information, see Enhanced VPC Routing in the Amazon Redshift Cluster Management Guide.

If this option is true , enhanced VPC routing is enabled.

Default: false

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#enhanced_vpc_routing RedshiftCluster#enhanced_vpc_routing}

---

##### `hsmClientCertificateIdentifier`<sup>Optional</sup> <a name="hsmClientCertificateIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.hsmClientCertificateIdentifier"></a>

```java
public java.lang.String getHsmClientCertificateIdentifier();
```

- *Type:* java.lang.String

Specifies the name of the HSM client certificate the Amazon Redshift cluster uses to retrieve the data encryption keys stored in an HSM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#hsm_client_certificate_identifier RedshiftCluster#hsm_client_certificate_identifier}

---

##### `hsmConfigurationIdentifier`<sup>Optional</sup> <a name="hsmConfigurationIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.hsmConfigurationIdentifier"></a>

```java
public java.lang.String getHsmConfigurationIdentifier();
```

- *Type:* java.lang.String

Specifies the name of the HSM configuration that contains the information the Amazon Redshift cluster can use to retrieve and store keys in an HSM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#hsm_configuration_identifier RedshiftCluster#hsm_configuration_identifier}

---

##### `iamRoles`<sup>Optional</sup> <a name="iamRoles" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.iamRoles"></a>

```java
public java.util.List<java.lang.String> getIamRoles();
```

- *Type:* java.util.List<java.lang.String>

A list of AWS Identity and Access Management (IAM) roles that can be used by the cluster to access other AWS services.

You must supply the IAM roles in their Amazon Resource Name (ARN) format. You can supply up to 50 IAM roles in a single request

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#iam_roles RedshiftCluster#iam_roles}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

The AWS Key Management Service (KMS) key ID of the encryption key that you want to use to encrypt data in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#kms_key_id RedshiftCluster#kms_key_id}

---

##### `loggingProperties`<sup>Optional</sup> <a name="loggingProperties" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.loggingProperties"></a>

```java
public RedshiftClusterLoggingProperties getLoggingProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties">RedshiftClusterLoggingProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#logging_properties RedshiftCluster#logging_properties}.

---

##### `maintenanceTrackName`<sup>Optional</sup> <a name="maintenanceTrackName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.maintenanceTrackName"></a>

```java
public java.lang.String getMaintenanceTrackName();
```

- *Type:* java.lang.String

The name for the maintenance track that you want to assign for the cluster.

This name change is asynchronous. The new track name stays in the PendingModifiedValues for the cluster until the next maintenance window. When the maintenance track changes, the cluster is switched to the latest cluster release available for the maintenance track. At this point, the maintenance track name is applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#maintenance_track_name RedshiftCluster#maintenance_track_name}

---

##### `manageMasterPassword`<sup>Optional</sup> <a name="manageMasterPassword" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.manageMasterPassword"></a>

```java
public java.lang.Boolean|IResolvable getManageMasterPassword();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A boolean indicating if the redshift cluster's admin user credentials is managed by Redshift or not.

You can't use MasterUserPassword if ManageMasterPassword is true. If ManageMasterPassword is false or not set, Amazon Redshift uses MasterUserPassword for the admin user account's password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#manage_master_password RedshiftCluster#manage_master_password}

---

##### `manualSnapshotRetentionPeriod`<sup>Optional</sup> <a name="manualSnapshotRetentionPeriod" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.manualSnapshotRetentionPeriod"></a>

```java
public java.lang.Number getManualSnapshotRetentionPeriod();
```

- *Type:* java.lang.Number

The number of days to retain newly copied snapshots in the destination AWS Region after they are copied from the source AWS Region.

If the value is -1, the manual snapshot is retained indefinitely.

The value must be either -1 or an integer between 1 and 3,653.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#manual_snapshot_retention_period RedshiftCluster#manual_snapshot_retention_period}

---

##### `masterPasswordSecretKmsKeyId`<sup>Optional</sup> <a name="masterPasswordSecretKmsKeyId" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.masterPasswordSecretKmsKeyId"></a>

```java
public java.lang.String getMasterPasswordSecretKmsKeyId();
```

- *Type:* java.lang.String

The ID of the Key Management Service (KMS) key used to encrypt and store the cluster's admin user credentials secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#master_password_secret_kms_key_id RedshiftCluster#master_password_secret_kms_key_id}

---

##### `masterUserPassword`<sup>Optional</sup> <a name="masterUserPassword" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.masterUserPassword"></a>

```java
public java.lang.String getMasterUserPassword();
```

- *Type:* java.lang.String

The password associated with the master user account for the cluster that is being created.

You can't use MasterUserPassword if ManageMasterPassword is true. Password must be between 8 and 64 characters in length, should have at least one uppercase letter.Must contain at least one lowercase letter.Must contain one number.Can be any printable ASCII character.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#master_user_password RedshiftCluster#master_user_password}

---

##### `multiAz`<sup>Optional</sup> <a name="multiAz" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.multiAz"></a>

```java
public java.lang.Boolean|IResolvable getMultiAz();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A boolean indicating if the redshift cluster is multi-az or not.

If you don't provide this parameter or set the value to false, the redshift cluster will be single-az.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#multi_az RedshiftCluster#multi_az}

---

##### `namespaceResourcePolicy`<sup>Optional</sup> <a name="namespaceResourcePolicy" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.namespaceResourcePolicy"></a>

```java
public java.lang.String getNamespaceResourcePolicy();
```

- *Type:* java.lang.String

The namespace resource policy document that will be attached to a Redshift cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#namespace_resource_policy RedshiftCluster#namespace_resource_policy}

---

##### `numberOfNodes`<sup>Optional</sup> <a name="numberOfNodes" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.numberOfNodes"></a>

```java
public java.lang.Number getNumberOfNodes();
```

- *Type:* java.lang.Number

The number of compute nodes in the cluster.

This parameter is required when the ClusterType parameter is specified as multi-node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#number_of_nodes RedshiftCluster#number_of_nodes}

---

##### `ownerAccount`<sup>Optional</sup> <a name="ownerAccount" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.ownerAccount"></a>

```java
public java.lang.String getOwnerAccount();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#owner_account RedshiftCluster#owner_account}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The port number on which the cluster accepts incoming connections.

The cluster is accessible only via the JDBC and ODBC connection strings

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#port RedshiftCluster#port}

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.preferredMaintenanceWindow"></a>

```java
public java.lang.String getPreferredMaintenanceWindow();
```

- *Type:* java.lang.String

The weekly time range (in UTC) during which automated cluster maintenance can occur.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#preferred_maintenance_window RedshiftCluster#preferred_maintenance_window}

---

##### `publiclyAccessible`<sup>Optional</sup> <a name="publiclyAccessible" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.publiclyAccessible"></a>

```java
public java.lang.Boolean|IResolvable getPubliclyAccessible();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, the cluster can be accessed from a public network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#publicly_accessible RedshiftCluster#publicly_accessible}

---

##### `resourceAction`<sup>Optional</sup> <a name="resourceAction" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.resourceAction"></a>

```java
public java.lang.String getResourceAction();
```

- *Type:* java.lang.String

The Redshift operation to be performed. Resource Action supports pause-cluster, resume-cluster, failover-primary-compute APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#resource_action RedshiftCluster#resource_action}

---

##### `revisionTarget`<sup>Optional</sup> <a name="revisionTarget" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.revisionTarget"></a>

```java
public java.lang.String getRevisionTarget();
```

- *Type:* java.lang.String

The identifier of the database revision. You can retrieve this value from the response to the DescribeClusterDbRevisions request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#revision_target RedshiftCluster#revision_target}

---

##### `rotateEncryptionKey`<sup>Optional</sup> <a name="rotateEncryptionKey" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.rotateEncryptionKey"></a>

```java
public java.lang.Boolean|IResolvable getRotateEncryptionKey();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A boolean indicating if we want to rotate Encryption Keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#rotate_encryption_key RedshiftCluster#rotate_encryption_key}

---

##### `snapshotClusterIdentifier`<sup>Optional</sup> <a name="snapshotClusterIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.snapshotClusterIdentifier"></a>

```java
public java.lang.String getSnapshotClusterIdentifier();
```

- *Type:* java.lang.String

The name of the cluster the source snapshot was created from.

This parameter is required if your IAM user has a policy containing a snapshot resource element that specifies anything other than * for the cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#snapshot_cluster_identifier RedshiftCluster#snapshot_cluster_identifier}

---

##### `snapshotCopyGrantName`<sup>Optional</sup> <a name="snapshotCopyGrantName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.snapshotCopyGrantName"></a>

```java
public java.lang.String getSnapshotCopyGrantName();
```

- *Type:* java.lang.String

The name of the snapshot copy grant to use when snapshots of an AWS KMS-encrypted cluster are copied to the destination region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#snapshot_copy_grant_name RedshiftCluster#snapshot_copy_grant_name}

---

##### `snapshotCopyManual`<sup>Optional</sup> <a name="snapshotCopyManual" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.snapshotCopyManual"></a>

```java
public java.lang.Boolean|IResolvable getSnapshotCopyManual();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether to apply the snapshot retention period to newly copied manual snapshots instead of automated snapshots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#snapshot_copy_manual RedshiftCluster#snapshot_copy_manual}

---

##### `snapshotCopyRetentionPeriod`<sup>Optional</sup> <a name="snapshotCopyRetentionPeriod" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.snapshotCopyRetentionPeriod"></a>

```java
public java.lang.Number getSnapshotCopyRetentionPeriod();
```

- *Type:* java.lang.Number

The number of days to retain automated snapshots in the destination region after they are copied from the source region.

Default is 7.

Constraints: Must be at least 1 and no more than 35.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#snapshot_copy_retention_period RedshiftCluster#snapshot_copy_retention_period}

---

##### `snapshotIdentifier`<sup>Optional</sup> <a name="snapshotIdentifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.snapshotIdentifier"></a>

```java
public java.lang.String getSnapshotIdentifier();
```

- *Type:* java.lang.String

The name of the snapshot from which to create the new cluster. This parameter isn't case sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#snapshot_identifier RedshiftCluster#snapshot_identifier}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.tags"></a>

```java
public IResolvable|java.util.List<RedshiftClusterTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags">RedshiftClusterTags</a>>

The list of tags for the cluster parameter group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#tags RedshiftCluster#tags}

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="vpcSecurityGroupIds" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.vpcSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

A list of Virtual Private Cloud (VPC) security groups to be associated with the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#vpc_security_group_ids RedshiftCluster#vpc_security_group_ids}

---

### RedshiftClusterEndpoint <a name="RedshiftClusterEndpoint" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpoint.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_cluster.RedshiftClusterEndpoint;

RedshiftClusterEndpoint.builder()
    .build();
```


### RedshiftClusterLoggingProperties <a name="RedshiftClusterLoggingProperties" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_cluster.RedshiftClusterLoggingProperties;

RedshiftClusterLoggingProperties.builder()
//  .bucketName(java.lang.String)
//  .logDestinationType(java.lang.String)
//  .logExports(java.util.List<java.lang.String>)
//  .s3KeyPrefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#bucket_name RedshiftCluster#bucket_name}. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties.property.logDestinationType">logDestinationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#log_destination_type RedshiftCluster#log_destination_type}. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties.property.logExports">logExports</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#log_exports RedshiftCluster#log_exports}. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties.property.s3KeyPrefix">s3KeyPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#s3_key_prefix RedshiftCluster#s3_key_prefix}. |

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#bucket_name RedshiftCluster#bucket_name}.

---

##### `logDestinationType`<sup>Optional</sup> <a name="logDestinationType" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties.property.logDestinationType"></a>

```java
public java.lang.String getLogDestinationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#log_destination_type RedshiftCluster#log_destination_type}.

---

##### `logExports`<sup>Optional</sup> <a name="logExports" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties.property.logExports"></a>

```java
public java.util.List<java.lang.String> getLogExports();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#log_exports RedshiftCluster#log_exports}.

---

##### `s3KeyPrefix`<sup>Optional</sup> <a name="s3KeyPrefix" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties.property.s3KeyPrefix"></a>

```java
public java.lang.String getS3KeyPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#s3_key_prefix RedshiftCluster#s3_key_prefix}.

---

### RedshiftClusterTags <a name="RedshiftClusterTags" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_cluster.RedshiftClusterTags;

RedshiftClusterTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#key RedshiftCluster#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_cluster#value RedshiftCluster#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RedshiftClusterEndpointOutputReference <a name="RedshiftClusterEndpointOutputReference" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_cluster.RedshiftClusterEndpointOutputReference;

new RedshiftClusterEndpointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.property.port">port</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpoint">RedshiftClusterEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.property.port"></a>

```java
public java.lang.String getPort();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.property.internalValue"></a>

```java
public IResolvable|RedshiftClusterEndpoint getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpoint">RedshiftClusterEndpoint</a>

---


### RedshiftClusterLoggingPropertiesOutputReference <a name="RedshiftClusterLoggingPropertiesOutputReference" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_cluster.RedshiftClusterLoggingPropertiesOutputReference;

new RedshiftClusterLoggingPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.resetLogDestinationType">resetLogDestinationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.resetLogExports">resetLogExports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.resetS3KeyPrefix">resetS3KeyPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketName` <a name="resetBucketName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.resetBucketName"></a>

```java
public void resetBucketName()
```

##### `resetLogDestinationType` <a name="resetLogDestinationType" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.resetLogDestinationType"></a>

```java
public void resetLogDestinationType()
```

##### `resetLogExports` <a name="resetLogExports" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.resetLogExports"></a>

```java
public void resetLogExports()
```

##### `resetS3KeyPrefix` <a name="resetS3KeyPrefix" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.resetS3KeyPrefix"></a>

```java
public void resetS3KeyPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.logDestinationTypeInput">logDestinationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.logExportsInput">logExportsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.s3KeyPrefixInput">s3KeyPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.logDestinationType">logDestinationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.logExports">logExports</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.s3KeyPrefix">s3KeyPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties">RedshiftClusterLoggingProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.bucketNameInput"></a>

```java
public java.lang.String getBucketNameInput();
```

- *Type:* java.lang.String

---

##### `logDestinationTypeInput`<sup>Optional</sup> <a name="logDestinationTypeInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.logDestinationTypeInput"></a>

```java
public java.lang.String getLogDestinationTypeInput();
```

- *Type:* java.lang.String

---

##### `logExportsInput`<sup>Optional</sup> <a name="logExportsInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.logExportsInput"></a>

```java
public java.util.List<java.lang.String> getLogExportsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `s3KeyPrefixInput`<sup>Optional</sup> <a name="s3KeyPrefixInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.s3KeyPrefixInput"></a>

```java
public java.lang.String getS3KeyPrefixInput();
```

- *Type:* java.lang.String

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `logDestinationType`<sup>Required</sup> <a name="logDestinationType" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.logDestinationType"></a>

```java
public java.lang.String getLogDestinationType();
```

- *Type:* java.lang.String

---

##### `logExports`<sup>Required</sup> <a name="logExports" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.logExports"></a>

```java
public java.util.List<java.lang.String> getLogExports();
```

- *Type:* java.util.List<java.lang.String>

---

##### `s3KeyPrefix`<sup>Required</sup> <a name="s3KeyPrefix" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.s3KeyPrefix"></a>

```java
public java.lang.String getS3KeyPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.internalValue"></a>

```java
public IResolvable|RedshiftClusterLoggingProperties getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties">RedshiftClusterLoggingProperties</a>

---


### RedshiftClusterTagsList <a name="RedshiftClusterTagsList" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_cluster.RedshiftClusterTagsList;

new RedshiftClusterTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.get"></a>

```java
public RedshiftClusterTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags">RedshiftClusterTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<RedshiftClusterTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags">RedshiftClusterTags</a>>

---


### RedshiftClusterTagsOutputReference <a name="RedshiftClusterTagsOutputReference" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.redshift_cluster.RedshiftClusterTagsOutputReference;

new RedshiftClusterTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags">RedshiftClusterTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|RedshiftClusterTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags">RedshiftClusterTags</a>

---



