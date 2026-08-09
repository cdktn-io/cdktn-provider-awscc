# `redshiftCluster` Submodule <a name="`redshiftCluster` Submodule" id="@cdktn/provider-awscc.redshiftCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftCluster <a name="RedshiftCluster" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster awscc_redshift_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer"></a>

```python
from cdktn_provider_awscc import redshift_cluster

redshiftCluster.RedshiftCluster(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cluster_type: str,
  db_name: str,
  master_username: str,
  node_type: str,
  allow_version_upgrade: bool | IResolvable = None,
  aqua_configuration_status: str = None,
  automated_snapshot_retention_period: typing.Union[int, float] = None,
  availability_zone: str = None,
  availability_zone_relocation: bool | IResolvable = None,
  availability_zone_relocation_status: str = None,
  classic: bool | IResolvable = None,
  cluster_identifier: str = None,
  cluster_parameter_group_name: str = None,
  cluster_security_groups: typing.List[str] = None,
  cluster_subnet_group_name: str = None,
  cluster_version: str = None,
  defer_maintenance: bool | IResolvable = None,
  defer_maintenance_duration: typing.Union[int, float] = None,
  defer_maintenance_end_time: str = None,
  defer_maintenance_start_time: str = None,
  destination_region: str = None,
  elastic_ip: str = None,
  encrypted: bool | IResolvable = None,
  endpoint: RedshiftClusterEndpoint = None,
  enhanced_vpc_routing: bool | IResolvable = None,
  hsm_client_certificate_identifier: str = None,
  hsm_configuration_identifier: str = None,
  iam_roles: typing.List[str] = None,
  kms_key_id: str = None,
  logging_properties: RedshiftClusterLoggingProperties = None,
  maintenance_track_name: str = None,
  manage_master_password: bool | IResolvable = None,
  manual_snapshot_retention_period: typing.Union[int, float] = None,
  master_password_secret_kms_key_id: str = None,
  master_user_password: str = None,
  multi_az: bool | IResolvable = None,
  namespace_resource_policy: str = None,
  number_of_nodes: typing.Union[int, float] = None,
  owner_account: str = None,
  port: typing.Union[int, float] = None,
  preferred_maintenance_window: str = None,
  publicly_accessible: bool | IResolvable = None,
  resource_action: str = None,
  revision_target: str = None,
  rotate_encryption_key: bool | IResolvable = None,
  snapshot_cluster_identifier: str = None,
  snapshot_copy_grant_name: str = None,
  snapshot_copy_manual: bool | IResolvable = None,
  snapshot_copy_retention_period: typing.Union[int, float] = None,
  snapshot_identifier: str = None,
  tags: IResolvable | typing.List[RedshiftClusterTags] = None,
  vpc_security_group_ids: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterType">cluster_type</a></code> | <code>str</code> | The type of the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.dbName">db_name</a></code> | <code>str</code> | The name of the first database to be created when the cluster is created. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.masterUsername">master_username</a></code> | <code>str</code> | The user name associated with the master user account for the cluster that is being created. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.nodeType">node_type</a></code> | <code>str</code> | The node type to be provisioned for the cluster.Valid Values: ds2.xlarge \| ds2.8xlarge \| dc1.large \| dc1.8xlarge \| dc2.large \| dc2.8xlarge \| ra3.large \| ra3.4xlarge \| ra3.16xlarge \| rg.large \| rg.xlarge \| rg.4xlarge \| rg.12xlarge. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.allowVersionUpgrade">allow_version_upgrade</a></code> | <code>bool \| cdktn.IResolvable</code> | Major version upgrades can be applied during the maintenance window to the Amazon Redshift engine that is running on the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.aquaConfigurationStatus">aqua_configuration_status</a></code> | <code>str</code> | The value represents how the cluster is configured to use AQUA (Advanced Query Accelerator) after the cluster is restored. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.automatedSnapshotRetentionPeriod">automated_snapshot_retention_period</a></code> | <code>typing.Union[int, float]</code> | The number of days that automated snapshots are retained. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.availabilityZone">availability_zone</a></code> | <code>str</code> | The EC2 Availability Zone (AZ) in which you want Amazon Redshift to provision the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.availabilityZoneRelocation">availability_zone_relocation</a></code> | <code>bool \| cdktn.IResolvable</code> | The option to enable relocation for an Amazon Redshift cluster between Availability Zones after the cluster modification is complete. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.availabilityZoneRelocationStatus">availability_zone_relocation_status</a></code> | <code>str</code> | The availability zone relocation status of the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.classic">classic</a></code> | <code>bool \| cdktn.IResolvable</code> | A boolean value indicating whether the resize operation is using the classic resize process. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterIdentifier">cluster_identifier</a></code> | <code>str</code> | A unique identifier for the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterParameterGroupName">cluster_parameter_group_name</a></code> | <code>str</code> | The name of the parameter group to be associated with this cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterSecurityGroups">cluster_security_groups</a></code> | <code>typing.List[str]</code> | A list of security groups to be associated with this cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterSubnetGroupName">cluster_subnet_group_name</a></code> | <code>str</code> | The name of a cluster subnet group to be associated with this cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterVersion">cluster_version</a></code> | <code>str</code> | The version of the Amazon Redshift engine software that you want to deploy on the cluster.The version selected runs on all the nodes in the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.deferMaintenance">defer_maintenance</a></code> | <code>bool \| cdktn.IResolvable</code> | A boolean indicating whether to enable the deferred maintenance window. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.deferMaintenanceDuration">defer_maintenance_duration</a></code> | <code>typing.Union[int, float]</code> | An integer indicating the duration of the maintenance window in days. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.deferMaintenanceEndTime">defer_maintenance_end_time</a></code> | <code>str</code> | A timestamp indicating end time for the deferred maintenance window. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.deferMaintenanceStartTime">defer_maintenance_start_time</a></code> | <code>str</code> | A timestamp indicating the start time for the deferred maintenance window. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.destinationRegion">destination_region</a></code> | <code>str</code> | The destination AWS Region that you want to copy snapshots to. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.elasticIp">elastic_ip</a></code> | <code>str</code> | The Elastic IP (EIP) address for the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.encrypted">encrypted</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, the data in the cluster is encrypted at rest. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.endpoint">endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpoint">RedshiftClusterEndpoint</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#endpoint RedshiftCluster#endpoint}. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.enhancedVpcRouting">enhanced_vpc_routing</a></code> | <code>bool \| cdktn.IResolvable</code> | An option that specifies whether to create the cluster with enhanced VPC routing enabled. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.hsmClientCertificateIdentifier">hsm_client_certificate_identifier</a></code> | <code>str</code> | Specifies the name of the HSM client certificate the Amazon Redshift cluster uses to retrieve the data encryption keys stored in an HSM. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.hsmConfigurationIdentifier">hsm_configuration_identifier</a></code> | <code>str</code> | Specifies the name of the HSM configuration that contains the information the Amazon Redshift cluster can use to retrieve and store keys in an HSM. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.iamRoles">iam_roles</a></code> | <code>typing.List[str]</code> | A list of AWS Identity and Access Management (IAM) roles that can be used by the cluster to access other AWS services. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The AWS Key Management Service (KMS) key ID of the encryption key that you want to use to encrypt data in the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.loggingProperties">logging_properties</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties">RedshiftClusterLoggingProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#logging_properties RedshiftCluster#logging_properties}. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.maintenanceTrackName">maintenance_track_name</a></code> | <code>str</code> | The name for the maintenance track that you want to assign for the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.manageMasterPassword">manage_master_password</a></code> | <code>bool \| cdktn.IResolvable</code> | A boolean indicating if the redshift cluster's admin user credentials is managed by Redshift or not. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.manualSnapshotRetentionPeriod">manual_snapshot_retention_period</a></code> | <code>typing.Union[int, float]</code> | The number of days to retain newly copied snapshots in the destination AWS Region after they are copied from the source AWS Region. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.masterPasswordSecretKmsKeyId">master_password_secret_kms_key_id</a></code> | <code>str</code> | The ID of the Key Management Service (KMS) key used to encrypt and store the cluster's admin user credentials secret. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.masterUserPassword">master_user_password</a></code> | <code>str</code> | The password associated with the master user account for the cluster that is being created. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.multiAz">multi_az</a></code> | <code>bool \| cdktn.IResolvable</code> | A boolean indicating if the redshift cluster is multi-az or not. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.namespaceResourcePolicy">namespace_resource_policy</a></code> | <code>str</code> | The namespace resource policy document that will be attached to a Redshift cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.numberOfNodes">number_of_nodes</a></code> | <code>typing.Union[int, float]</code> | The number of compute nodes in the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.ownerAccount">owner_account</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#owner_account RedshiftCluster#owner_account}. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | The port number on which the cluster accepts incoming connections. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.preferredMaintenanceWindow">preferred_maintenance_window</a></code> | <code>str</code> | The weekly time range (in UTC) during which automated cluster maintenance can occur. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.publiclyAccessible">publicly_accessible</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, the cluster can be accessed from a public network. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.resourceAction">resource_action</a></code> | <code>str</code> | The Redshift operation to be performed. Resource Action supports pause-cluster, resume-cluster, failover-primary-compute APIs. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.revisionTarget">revision_target</a></code> | <code>str</code> | The identifier of the database revision. You can retrieve this value from the response to the DescribeClusterDbRevisions request. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.rotateEncryptionKey">rotate_encryption_key</a></code> | <code>bool \| cdktn.IResolvable</code> | A boolean indicating if we want to rotate Encryption Keys. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.snapshotClusterIdentifier">snapshot_cluster_identifier</a></code> | <code>str</code> | The name of the cluster the source snapshot was created from. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.snapshotCopyGrantName">snapshot_copy_grant_name</a></code> | <code>str</code> | The name of the snapshot copy grant to use when snapshots of an AWS KMS-encrypted cluster are copied to the destination region. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.snapshotCopyManual">snapshot_copy_manual</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether to apply the snapshot retention period to newly copied manual snapshots instead of automated snapshots. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.snapshotCopyRetentionPeriod">snapshot_copy_retention_period</a></code> | <code>typing.Union[int, float]</code> | The number of days to retain automated snapshots in the destination region after they are copied from the source region. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.snapshotIdentifier">snapshot_identifier</a></code> | <code>str</code> | The name of the snapshot from which to create the new cluster. This parameter isn't case sensitive. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags">RedshiftClusterTags</a>]</code> | The list of tags for the cluster parameter group. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | A list of Virtual Private Cloud (VPC) security groups to be associated with the cluster. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cluster_type`<sup>Required</sup> <a name="cluster_type" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterType"></a>

- *Type:* str

The type of the cluster.

When cluster type is specified as single-node, the NumberOfNodes parameter is not required and if multi-node, the NumberOfNodes parameter is required

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#cluster_type RedshiftCluster#cluster_type}

---

##### `db_name`<sup>Required</sup> <a name="db_name" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.dbName"></a>

- *Type:* str

The name of the first database to be created when the cluster is created.

To create additional databases after the cluster is created, connect to the cluster with a SQL client and use SQL commands to create a database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#db_name RedshiftCluster#db_name}

---

##### `master_username`<sup>Required</sup> <a name="master_username" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.masterUsername"></a>

- *Type:* str

The user name associated with the master user account for the cluster that is being created.

The user name can't be PUBLIC and first character must be a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#master_username RedshiftCluster#master_username}

---

##### `node_type`<sup>Required</sup> <a name="node_type" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.nodeType"></a>

- *Type:* str

The node type to be provisioned for the cluster.Valid Values: ds2.xlarge | ds2.8xlarge | dc1.large | dc1.8xlarge | dc2.large | dc2.8xlarge | ra3.large | ra3.4xlarge | ra3.16xlarge | rg.large | rg.xlarge | rg.4xlarge | rg.12xlarge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#node_type RedshiftCluster#node_type}

---

##### `allow_version_upgrade`<sup>Optional</sup> <a name="allow_version_upgrade" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.allowVersionUpgrade"></a>

- *Type:* bool | cdktn.IResolvable

Major version upgrades can be applied during the maintenance window to the Amazon Redshift engine that is running on the cluster.

Default value is True

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#allow_version_upgrade RedshiftCluster#allow_version_upgrade}

---

##### `aqua_configuration_status`<sup>Optional</sup> <a name="aqua_configuration_status" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.aquaConfigurationStatus"></a>

- *Type:* str

The value represents how the cluster is configured to use AQUA (Advanced Query Accelerator) after the cluster is restored.

Possible values include the following.

enabled - Use AQUA if it is available for the current Region and Amazon Redshift node type.
disabled - Don't use AQUA.
auto - Amazon Redshift determines whether to use AQUA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#aqua_configuration_status RedshiftCluster#aqua_configuration_status}

---

##### `automated_snapshot_retention_period`<sup>Optional</sup> <a name="automated_snapshot_retention_period" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.automatedSnapshotRetentionPeriod"></a>

- *Type:* typing.Union[int, float]

The number of days that automated snapshots are retained.

If the value is 0, automated snapshots are disabled. Default value is 1

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#automated_snapshot_retention_period RedshiftCluster#automated_snapshot_retention_period}

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.availabilityZone"></a>

- *Type:* str

The EC2 Availability Zone (AZ) in which you want Amazon Redshift to provision the cluster.

Default: A random, system-chosen Availability Zone in the region that is specified by the endpoint

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#availability_zone RedshiftCluster#availability_zone}

---

##### `availability_zone_relocation`<sup>Optional</sup> <a name="availability_zone_relocation" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.availabilityZoneRelocation"></a>

- *Type:* bool | cdktn.IResolvable

The option to enable relocation for an Amazon Redshift cluster between Availability Zones after the cluster modification is complete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#availability_zone_relocation RedshiftCluster#availability_zone_relocation}

---

##### `availability_zone_relocation_status`<sup>Optional</sup> <a name="availability_zone_relocation_status" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.availabilityZoneRelocationStatus"></a>

- *Type:* str

The availability zone relocation status of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#availability_zone_relocation_status RedshiftCluster#availability_zone_relocation_status}

---

##### `classic`<sup>Optional</sup> <a name="classic" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.classic"></a>

- *Type:* bool | cdktn.IResolvable

A boolean value indicating whether the resize operation is using the classic resize process.

If you don't provide this parameter or set the value to false , the resize type is elastic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#classic RedshiftCluster#classic}

---

##### `cluster_identifier`<sup>Optional</sup> <a name="cluster_identifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterIdentifier"></a>

- *Type:* str

A unique identifier for the cluster.

You use this identifier to refer to the cluster for any subsequent cluster operations such as deleting or modifying. All alphabetical characters must be lower case, no hypens at the end, no two consecutive hyphens. Cluster name should be unique for all clusters within an AWS account

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#cluster_identifier RedshiftCluster#cluster_identifier}

---

##### `cluster_parameter_group_name`<sup>Optional</sup> <a name="cluster_parameter_group_name" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterParameterGroupName"></a>

- *Type:* str

The name of the parameter group to be associated with this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#cluster_parameter_group_name RedshiftCluster#cluster_parameter_group_name}

---

##### `cluster_security_groups`<sup>Optional</sup> <a name="cluster_security_groups" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterSecurityGroups"></a>

- *Type:* typing.List[str]

A list of security groups to be associated with this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#cluster_security_groups RedshiftCluster#cluster_security_groups}

---

##### `cluster_subnet_group_name`<sup>Optional</sup> <a name="cluster_subnet_group_name" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterSubnetGroupName"></a>

- *Type:* str

The name of a cluster subnet group to be associated with this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#cluster_subnet_group_name RedshiftCluster#cluster_subnet_group_name}

---

##### `cluster_version`<sup>Optional</sup> <a name="cluster_version" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.clusterVersion"></a>

- *Type:* str

The version of the Amazon Redshift engine software that you want to deploy on the cluster.The version selected runs on all the nodes in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#cluster_version RedshiftCluster#cluster_version}

---

##### `defer_maintenance`<sup>Optional</sup> <a name="defer_maintenance" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.deferMaintenance"></a>

- *Type:* bool | cdktn.IResolvable

A boolean indicating whether to enable the deferred maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#defer_maintenance RedshiftCluster#defer_maintenance}

---

##### `defer_maintenance_duration`<sup>Optional</sup> <a name="defer_maintenance_duration" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.deferMaintenanceDuration"></a>

- *Type:* typing.Union[int, float]

An integer indicating the duration of the maintenance window in days.

If you specify a duration, you can't specify an end time. The duration must be 60 days or less.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#defer_maintenance_duration RedshiftCluster#defer_maintenance_duration}

---

##### `defer_maintenance_end_time`<sup>Optional</sup> <a name="defer_maintenance_end_time" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.deferMaintenanceEndTime"></a>

- *Type:* str

A timestamp indicating end time for the deferred maintenance window.

If you specify an end time, you can't specify a duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#defer_maintenance_end_time RedshiftCluster#defer_maintenance_end_time}

---

##### `defer_maintenance_start_time`<sup>Optional</sup> <a name="defer_maintenance_start_time" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.deferMaintenanceStartTime"></a>

- *Type:* str

A timestamp indicating the start time for the deferred maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#defer_maintenance_start_time RedshiftCluster#defer_maintenance_start_time}

---

##### `destination_region`<sup>Optional</sup> <a name="destination_region" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.destinationRegion"></a>

- *Type:* str

The destination AWS Region that you want to copy snapshots to.

Constraints: Must be the name of a valid AWS Region. For more information, see Regions and Endpoints in the Amazon Web Services [https://docs.aws.amazon.com/general/latest/gr/rande.html#redshift_region] General Reference

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#destination_region RedshiftCluster#destination_region}

---

##### `elastic_ip`<sup>Optional</sup> <a name="elastic_ip" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.elasticIp"></a>

- *Type:* str

The Elastic IP (EIP) address for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#elastic_ip RedshiftCluster#elastic_ip}

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.encrypted"></a>

- *Type:* bool | cdktn.IResolvable

If true, the data in the cluster is encrypted at rest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#encrypted RedshiftCluster#encrypted}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.endpoint"></a>

- *Type:* <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpoint">RedshiftClusterEndpoint</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#endpoint RedshiftCluster#endpoint}.

---

##### `enhanced_vpc_routing`<sup>Optional</sup> <a name="enhanced_vpc_routing" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.enhancedVpcRouting"></a>

- *Type:* bool | cdktn.IResolvable

An option that specifies whether to create the cluster with enhanced VPC routing enabled.

To create a cluster that uses enhanced VPC routing, the cluster must be in a VPC. For more information, see Enhanced VPC Routing in the Amazon Redshift Cluster Management Guide.

If this option is true , enhanced VPC routing is enabled.

Default: false

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#enhanced_vpc_routing RedshiftCluster#enhanced_vpc_routing}

---

##### `hsm_client_certificate_identifier`<sup>Optional</sup> <a name="hsm_client_certificate_identifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.hsmClientCertificateIdentifier"></a>

- *Type:* str

Specifies the name of the HSM client certificate the Amazon Redshift cluster uses to retrieve the data encryption keys stored in an HSM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#hsm_client_certificate_identifier RedshiftCluster#hsm_client_certificate_identifier}

---

##### `hsm_configuration_identifier`<sup>Optional</sup> <a name="hsm_configuration_identifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.hsmConfigurationIdentifier"></a>

- *Type:* str

Specifies the name of the HSM configuration that contains the information the Amazon Redshift cluster can use to retrieve and store keys in an HSM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#hsm_configuration_identifier RedshiftCluster#hsm_configuration_identifier}

---

##### `iam_roles`<sup>Optional</sup> <a name="iam_roles" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.iamRoles"></a>

- *Type:* typing.List[str]

A list of AWS Identity and Access Management (IAM) roles that can be used by the cluster to access other AWS services.

You must supply the IAM roles in their Amazon Resource Name (ARN) format. You can supply up to 50 IAM roles in a single request

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#iam_roles RedshiftCluster#iam_roles}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

The AWS Key Management Service (KMS) key ID of the encryption key that you want to use to encrypt data in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#kms_key_id RedshiftCluster#kms_key_id}

---

##### `logging_properties`<sup>Optional</sup> <a name="logging_properties" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.loggingProperties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties">RedshiftClusterLoggingProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#logging_properties RedshiftCluster#logging_properties}.

---

##### `maintenance_track_name`<sup>Optional</sup> <a name="maintenance_track_name" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.maintenanceTrackName"></a>

- *Type:* str

The name for the maintenance track that you want to assign for the cluster.

This name change is asynchronous. The new track name stays in the PendingModifiedValues for the cluster until the next maintenance window. When the maintenance track changes, the cluster is switched to the latest cluster release available for the maintenance track. At this point, the maintenance track name is applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#maintenance_track_name RedshiftCluster#maintenance_track_name}

---

##### `manage_master_password`<sup>Optional</sup> <a name="manage_master_password" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.manageMasterPassword"></a>

- *Type:* bool | cdktn.IResolvable

A boolean indicating if the redshift cluster's admin user credentials is managed by Redshift or not.

You can't use MasterUserPassword if ManageMasterPassword is true. If ManageMasterPassword is false or not set, Amazon Redshift uses MasterUserPassword for the admin user account's password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#manage_master_password RedshiftCluster#manage_master_password}

---

##### `manual_snapshot_retention_period`<sup>Optional</sup> <a name="manual_snapshot_retention_period" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.manualSnapshotRetentionPeriod"></a>

- *Type:* typing.Union[int, float]

The number of days to retain newly copied snapshots in the destination AWS Region after they are copied from the source AWS Region.

If the value is -1, the manual snapshot is retained indefinitely.

The value must be either -1 or an integer between 1 and 3,653.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#manual_snapshot_retention_period RedshiftCluster#manual_snapshot_retention_period}

---

##### `master_password_secret_kms_key_id`<sup>Optional</sup> <a name="master_password_secret_kms_key_id" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.masterPasswordSecretKmsKeyId"></a>

- *Type:* str

The ID of the Key Management Service (KMS) key used to encrypt and store the cluster's admin user credentials secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#master_password_secret_kms_key_id RedshiftCluster#master_password_secret_kms_key_id}

---

##### `master_user_password`<sup>Optional</sup> <a name="master_user_password" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.masterUserPassword"></a>

- *Type:* str

The password associated with the master user account for the cluster that is being created.

You can't use MasterUserPassword if ManageMasterPassword is true. Password must be between 8 and 64 characters in length, should have at least one uppercase letter.Must contain at least one lowercase letter.Must contain one number.Can be any printable ASCII character.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#master_user_password RedshiftCluster#master_user_password}

---

##### `multi_az`<sup>Optional</sup> <a name="multi_az" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.multiAz"></a>

- *Type:* bool | cdktn.IResolvable

A boolean indicating if the redshift cluster is multi-az or not.

If you don't provide this parameter or set the value to false, the redshift cluster will be single-az.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#multi_az RedshiftCluster#multi_az}

---

##### `namespace_resource_policy`<sup>Optional</sup> <a name="namespace_resource_policy" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.namespaceResourcePolicy"></a>

- *Type:* str

The namespace resource policy document that will be attached to a Redshift cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#namespace_resource_policy RedshiftCluster#namespace_resource_policy}

---

##### `number_of_nodes`<sup>Optional</sup> <a name="number_of_nodes" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.numberOfNodes"></a>

- *Type:* typing.Union[int, float]

The number of compute nodes in the cluster.

This parameter is required when the ClusterType parameter is specified as multi-node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#number_of_nodes RedshiftCluster#number_of_nodes}

---

##### `owner_account`<sup>Optional</sup> <a name="owner_account" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.ownerAccount"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#owner_account RedshiftCluster#owner_account}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

The port number on which the cluster accepts incoming connections.

The cluster is accessible only via the JDBC and ODBC connection strings

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#port RedshiftCluster#port}

---

##### `preferred_maintenance_window`<sup>Optional</sup> <a name="preferred_maintenance_window" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.preferredMaintenanceWindow"></a>

- *Type:* str

The weekly time range (in UTC) during which automated cluster maintenance can occur.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#preferred_maintenance_window RedshiftCluster#preferred_maintenance_window}

---

##### `publicly_accessible`<sup>Optional</sup> <a name="publicly_accessible" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.publiclyAccessible"></a>

- *Type:* bool | cdktn.IResolvable

If true, the cluster can be accessed from a public network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#publicly_accessible RedshiftCluster#publicly_accessible}

---

##### `resource_action`<sup>Optional</sup> <a name="resource_action" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.resourceAction"></a>

- *Type:* str

The Redshift operation to be performed. Resource Action supports pause-cluster, resume-cluster, failover-primary-compute APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#resource_action RedshiftCluster#resource_action}

---

##### `revision_target`<sup>Optional</sup> <a name="revision_target" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.revisionTarget"></a>

- *Type:* str

The identifier of the database revision. You can retrieve this value from the response to the DescribeClusterDbRevisions request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#revision_target RedshiftCluster#revision_target}

---

##### `rotate_encryption_key`<sup>Optional</sup> <a name="rotate_encryption_key" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.rotateEncryptionKey"></a>

- *Type:* bool | cdktn.IResolvable

A boolean indicating if we want to rotate Encryption Keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#rotate_encryption_key RedshiftCluster#rotate_encryption_key}

---

##### `snapshot_cluster_identifier`<sup>Optional</sup> <a name="snapshot_cluster_identifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.snapshotClusterIdentifier"></a>

- *Type:* str

The name of the cluster the source snapshot was created from.

This parameter is required if your IAM user has a policy containing a snapshot resource element that specifies anything other than * for the cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#snapshot_cluster_identifier RedshiftCluster#snapshot_cluster_identifier}

---

##### `snapshot_copy_grant_name`<sup>Optional</sup> <a name="snapshot_copy_grant_name" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.snapshotCopyGrantName"></a>

- *Type:* str

The name of the snapshot copy grant to use when snapshots of an AWS KMS-encrypted cluster are copied to the destination region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#snapshot_copy_grant_name RedshiftCluster#snapshot_copy_grant_name}

---

##### `snapshot_copy_manual`<sup>Optional</sup> <a name="snapshot_copy_manual" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.snapshotCopyManual"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether to apply the snapshot retention period to newly copied manual snapshots instead of automated snapshots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#snapshot_copy_manual RedshiftCluster#snapshot_copy_manual}

---

##### `snapshot_copy_retention_period`<sup>Optional</sup> <a name="snapshot_copy_retention_period" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.snapshotCopyRetentionPeriod"></a>

- *Type:* typing.Union[int, float]

The number of days to retain automated snapshots in the destination region after they are copied from the source region.

Default is 7.

Constraints: Must be at least 1 and no more than 35.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#snapshot_copy_retention_period RedshiftCluster#snapshot_copy_retention_period}

---

##### `snapshot_identifier`<sup>Optional</sup> <a name="snapshot_identifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.snapshotIdentifier"></a>

- *Type:* str

The name of the snapshot from which to create the new cluster. This parameter isn't case sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#snapshot_identifier RedshiftCluster#snapshot_identifier}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags">RedshiftClusterTags</a>]

The list of tags for the cluster parameter group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#tags RedshiftCluster#tags}

---

##### `vpc_security_group_ids`<sup>Optional</sup> <a name="vpc_security_group_ids" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.Initializer.parameter.vpcSecurityGroupIds"></a>

- *Type:* typing.List[str]

A list of Virtual Private Cloud (VPC) security groups to be associated with the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#vpc_security_group_ids RedshiftCluster#vpc_security_group_ids}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.putEndpoint">put_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.putLoggingProperties">put_logging_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetAllowVersionUpgrade">reset_allow_version_upgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetAquaConfigurationStatus">reset_aqua_configuration_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetAutomatedSnapshotRetentionPeriod">reset_automated_snapshot_retention_period</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetAvailabilityZoneRelocation">reset_availability_zone_relocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetAvailabilityZoneRelocationStatus">reset_availability_zone_relocation_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetClassic">reset_classic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetClusterIdentifier">reset_cluster_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetClusterParameterGroupName">reset_cluster_parameter_group_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetClusterSecurityGroups">reset_cluster_security_groups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetClusterSubnetGroupName">reset_cluster_subnet_group_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetClusterVersion">reset_cluster_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetDeferMaintenance">reset_defer_maintenance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetDeferMaintenanceDuration">reset_defer_maintenance_duration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetDeferMaintenanceEndTime">reset_defer_maintenance_end_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetDeferMaintenanceStartTime">reset_defer_maintenance_start_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetDestinationRegion">reset_destination_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetElasticIp">reset_elastic_ip</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetEncrypted">reset_encrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetEndpoint">reset_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetEnhancedVpcRouting">reset_enhanced_vpc_routing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetHsmClientCertificateIdentifier">reset_hsm_client_certificate_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetHsmConfigurationIdentifier">reset_hsm_configuration_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetIamRoles">reset_iam_roles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetLoggingProperties">reset_logging_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetMaintenanceTrackName">reset_maintenance_track_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetManageMasterPassword">reset_manage_master_password</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetManualSnapshotRetentionPeriod">reset_manual_snapshot_retention_period</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetMasterPasswordSecretKmsKeyId">reset_master_password_secret_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetMasterUserPassword">reset_master_user_password</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetMultiAz">reset_multi_az</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetNamespaceResourcePolicy">reset_namespace_resource_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetNumberOfNodes">reset_number_of_nodes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetOwnerAccount">reset_owner_account</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetPreferredMaintenanceWindow">reset_preferred_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetPubliclyAccessible">reset_publicly_accessible</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetResourceAction">reset_resource_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetRevisionTarget">reset_revision_target</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetRotateEncryptionKey">reset_rotate_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetSnapshotClusterIdentifier">reset_snapshot_cluster_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetSnapshotCopyGrantName">reset_snapshot_copy_grant_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetSnapshotCopyManual">reset_snapshot_copy_manual</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetSnapshotCopyRetentionPeriod">reset_snapshot_copy_retention_period</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetSnapshotIdentifier">reset_snapshot_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetVpcSecurityGroupIds">reset_vpc_security_group_ids</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_endpoint` <a name="put_endpoint" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.putEndpoint"></a>

```python
def put_endpoint() -> None
```

##### `put_logging_properties` <a name="put_logging_properties" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.putLoggingProperties"></a>

```python
def put_logging_properties(
  bucket_name: str = None,
  log_destination_type: str = None,
  log_exports: typing.List[str] = None,
  s3_key_prefix: str = None
) -> None
```

###### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.putLoggingProperties.parameter.bucketName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#bucket_name RedshiftCluster#bucket_name}.

---

###### `log_destination_type`<sup>Optional</sup> <a name="log_destination_type" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.putLoggingProperties.parameter.logDestinationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#log_destination_type RedshiftCluster#log_destination_type}.

---

###### `log_exports`<sup>Optional</sup> <a name="log_exports" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.putLoggingProperties.parameter.logExports"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#log_exports RedshiftCluster#log_exports}.

---

###### `s3_key_prefix`<sup>Optional</sup> <a name="s3_key_prefix" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.putLoggingProperties.parameter.s3KeyPrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#s3_key_prefix RedshiftCluster#s3_key_prefix}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[RedshiftClusterTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags">RedshiftClusterTags</a>]

---

##### `reset_allow_version_upgrade` <a name="reset_allow_version_upgrade" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetAllowVersionUpgrade"></a>

```python
def reset_allow_version_upgrade() -> None
```

##### `reset_aqua_configuration_status` <a name="reset_aqua_configuration_status" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetAquaConfigurationStatus"></a>

```python
def reset_aqua_configuration_status() -> None
```

##### `reset_automated_snapshot_retention_period` <a name="reset_automated_snapshot_retention_period" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetAutomatedSnapshotRetentionPeriod"></a>

```python
def reset_automated_snapshot_retention_period() -> None
```

##### `reset_availability_zone` <a name="reset_availability_zone" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetAvailabilityZone"></a>

```python
def reset_availability_zone() -> None
```

##### `reset_availability_zone_relocation` <a name="reset_availability_zone_relocation" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetAvailabilityZoneRelocation"></a>

```python
def reset_availability_zone_relocation() -> None
```

##### `reset_availability_zone_relocation_status` <a name="reset_availability_zone_relocation_status" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetAvailabilityZoneRelocationStatus"></a>

```python
def reset_availability_zone_relocation_status() -> None
```

##### `reset_classic` <a name="reset_classic" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetClassic"></a>

```python
def reset_classic() -> None
```

##### `reset_cluster_identifier` <a name="reset_cluster_identifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetClusterIdentifier"></a>

```python
def reset_cluster_identifier() -> None
```

##### `reset_cluster_parameter_group_name` <a name="reset_cluster_parameter_group_name" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetClusterParameterGroupName"></a>

```python
def reset_cluster_parameter_group_name() -> None
```

##### `reset_cluster_security_groups` <a name="reset_cluster_security_groups" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetClusterSecurityGroups"></a>

```python
def reset_cluster_security_groups() -> None
```

##### `reset_cluster_subnet_group_name` <a name="reset_cluster_subnet_group_name" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetClusterSubnetGroupName"></a>

```python
def reset_cluster_subnet_group_name() -> None
```

##### `reset_cluster_version` <a name="reset_cluster_version" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetClusterVersion"></a>

```python
def reset_cluster_version() -> None
```

##### `reset_defer_maintenance` <a name="reset_defer_maintenance" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetDeferMaintenance"></a>

```python
def reset_defer_maintenance() -> None
```

##### `reset_defer_maintenance_duration` <a name="reset_defer_maintenance_duration" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetDeferMaintenanceDuration"></a>

```python
def reset_defer_maintenance_duration() -> None
```

##### `reset_defer_maintenance_end_time` <a name="reset_defer_maintenance_end_time" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetDeferMaintenanceEndTime"></a>

```python
def reset_defer_maintenance_end_time() -> None
```

##### `reset_defer_maintenance_start_time` <a name="reset_defer_maintenance_start_time" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetDeferMaintenanceStartTime"></a>

```python
def reset_defer_maintenance_start_time() -> None
```

##### `reset_destination_region` <a name="reset_destination_region" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetDestinationRegion"></a>

```python
def reset_destination_region() -> None
```

##### `reset_elastic_ip` <a name="reset_elastic_ip" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetElasticIp"></a>

```python
def reset_elastic_ip() -> None
```

##### `reset_encrypted` <a name="reset_encrypted" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetEncrypted"></a>

```python
def reset_encrypted() -> None
```

##### `reset_endpoint` <a name="reset_endpoint" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetEndpoint"></a>

```python
def reset_endpoint() -> None
```

##### `reset_enhanced_vpc_routing` <a name="reset_enhanced_vpc_routing" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetEnhancedVpcRouting"></a>

```python
def reset_enhanced_vpc_routing() -> None
```

##### `reset_hsm_client_certificate_identifier` <a name="reset_hsm_client_certificate_identifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetHsmClientCertificateIdentifier"></a>

```python
def reset_hsm_client_certificate_identifier() -> None
```

##### `reset_hsm_configuration_identifier` <a name="reset_hsm_configuration_identifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetHsmConfigurationIdentifier"></a>

```python
def reset_hsm_configuration_identifier() -> None
```

##### `reset_iam_roles` <a name="reset_iam_roles" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetIamRoles"></a>

```python
def reset_iam_roles() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_logging_properties` <a name="reset_logging_properties" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetLoggingProperties"></a>

```python
def reset_logging_properties() -> None
```

##### `reset_maintenance_track_name` <a name="reset_maintenance_track_name" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetMaintenanceTrackName"></a>

```python
def reset_maintenance_track_name() -> None
```

##### `reset_manage_master_password` <a name="reset_manage_master_password" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetManageMasterPassword"></a>

```python
def reset_manage_master_password() -> None
```

##### `reset_manual_snapshot_retention_period` <a name="reset_manual_snapshot_retention_period" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetManualSnapshotRetentionPeriod"></a>

```python
def reset_manual_snapshot_retention_period() -> None
```

##### `reset_master_password_secret_kms_key_id` <a name="reset_master_password_secret_kms_key_id" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetMasterPasswordSecretKmsKeyId"></a>

```python
def reset_master_password_secret_kms_key_id() -> None
```

##### `reset_master_user_password` <a name="reset_master_user_password" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetMasterUserPassword"></a>

```python
def reset_master_user_password() -> None
```

##### `reset_multi_az` <a name="reset_multi_az" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetMultiAz"></a>

```python
def reset_multi_az() -> None
```

##### `reset_namespace_resource_policy` <a name="reset_namespace_resource_policy" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetNamespaceResourcePolicy"></a>

```python
def reset_namespace_resource_policy() -> None
```

##### `reset_number_of_nodes` <a name="reset_number_of_nodes" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetNumberOfNodes"></a>

```python
def reset_number_of_nodes() -> None
```

##### `reset_owner_account` <a name="reset_owner_account" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetOwnerAccount"></a>

```python
def reset_owner_account() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_preferred_maintenance_window` <a name="reset_preferred_maintenance_window" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetPreferredMaintenanceWindow"></a>

```python
def reset_preferred_maintenance_window() -> None
```

##### `reset_publicly_accessible` <a name="reset_publicly_accessible" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetPubliclyAccessible"></a>

```python
def reset_publicly_accessible() -> None
```

##### `reset_resource_action` <a name="reset_resource_action" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetResourceAction"></a>

```python
def reset_resource_action() -> None
```

##### `reset_revision_target` <a name="reset_revision_target" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetRevisionTarget"></a>

```python
def reset_revision_target() -> None
```

##### `reset_rotate_encryption_key` <a name="reset_rotate_encryption_key" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetRotateEncryptionKey"></a>

```python
def reset_rotate_encryption_key() -> None
```

##### `reset_snapshot_cluster_identifier` <a name="reset_snapshot_cluster_identifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetSnapshotClusterIdentifier"></a>

```python
def reset_snapshot_cluster_identifier() -> None
```

##### `reset_snapshot_copy_grant_name` <a name="reset_snapshot_copy_grant_name" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetSnapshotCopyGrantName"></a>

```python
def reset_snapshot_copy_grant_name() -> None
```

##### `reset_snapshot_copy_manual` <a name="reset_snapshot_copy_manual" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetSnapshotCopyManual"></a>

```python
def reset_snapshot_copy_manual() -> None
```

##### `reset_snapshot_copy_retention_period` <a name="reset_snapshot_copy_retention_period" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetSnapshotCopyRetentionPeriod"></a>

```python
def reset_snapshot_copy_retention_period() -> None
```

##### `reset_snapshot_identifier` <a name="reset_snapshot_identifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetSnapshotIdentifier"></a>

```python
def reset_snapshot_identifier() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_vpc_security_group_ids` <a name="reset_vpc_security_group_ids" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.resetVpcSecurityGroupIds"></a>

```python
def reset_vpc_security_group_ids() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a RedshiftCluster resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.isConstruct"></a>

```python
from cdktn_provider_awscc import redshift_cluster

redshiftCluster.RedshiftCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.isTerraformElement"></a>

```python
from cdktn_provider_awscc import redshift_cluster

redshiftCluster.RedshiftCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.isTerraformResource"></a>

```python
from cdktn_provider_awscc import redshift_cluster

redshiftCluster.RedshiftCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import redshift_cluster

redshiftCluster.RedshiftCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a RedshiftCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RedshiftCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RedshiftCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RedshiftCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterNamespaceArn">cluster_namespace_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceIdentifier">defer_maintenance_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.endpoint">endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference">RedshiftClusterEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.loggingProperties">logging_properties</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference">RedshiftClusterLoggingPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterPasswordSecretArn">master_password_secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList">RedshiftClusterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.allowVersionUpgradeInput">allow_version_upgrade_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.aquaConfigurationStatusInput">aqua_configuration_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.automatedSnapshotRetentionPeriodInput">automated_snapshot_retention_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.availabilityZoneRelocationInput">availability_zone_relocation_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.availabilityZoneRelocationStatusInput">availability_zone_relocation_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.classicInput">classic_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterIdentifierInput">cluster_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterParameterGroupNameInput">cluster_parameter_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterSecurityGroupsInput">cluster_security_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterSubnetGroupNameInput">cluster_subnet_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterTypeInput">cluster_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterVersionInput">cluster_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.dbNameInput">db_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceDurationInput">defer_maintenance_duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceEndTimeInput">defer_maintenance_end_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceInput">defer_maintenance_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceStartTimeInput">defer_maintenance_start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.destinationRegionInput">destination_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.elasticIpInput">elastic_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.encryptedInput">encrypted_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.endpointInput">endpoint_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpoint">RedshiftClusterEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.enhancedVpcRoutingInput">enhanced_vpc_routing_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.hsmClientCertificateIdentifierInput">hsm_client_certificate_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.hsmConfigurationIdentifierInput">hsm_configuration_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.iamRolesInput">iam_roles_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.loggingPropertiesInput">logging_properties_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties">RedshiftClusterLoggingProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.maintenanceTrackNameInput">maintenance_track_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.manageMasterPasswordInput">manage_master_password_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.manualSnapshotRetentionPeriodInput">manual_snapshot_retention_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterPasswordSecretKmsKeyIdInput">master_password_secret_kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterUsernameInput">master_username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterUserPasswordInput">master_user_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.multiAzInput">multi_az_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.namespaceResourcePolicyInput">namespace_resource_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.nodeTypeInput">node_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.numberOfNodesInput">number_of_nodes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.ownerAccountInput">owner_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.preferredMaintenanceWindowInput">preferred_maintenance_window_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.publiclyAccessibleInput">publicly_accessible_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.resourceActionInput">resource_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.revisionTargetInput">revision_target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.rotateEncryptionKeyInput">rotate_encryption_key_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotClusterIdentifierInput">snapshot_cluster_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotCopyGrantNameInput">snapshot_copy_grant_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotCopyManualInput">snapshot_copy_manual_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotCopyRetentionPeriodInput">snapshot_copy_retention_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotIdentifierInput">snapshot_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags">RedshiftClusterTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.vpcSecurityGroupIdsInput">vpc_security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.allowVersionUpgrade">allow_version_upgrade</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.aquaConfigurationStatus">aqua_configuration_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.automatedSnapshotRetentionPeriod">automated_snapshot_retention_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.availabilityZoneRelocation">availability_zone_relocation</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.availabilityZoneRelocationStatus">availability_zone_relocation_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.classic">classic</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterIdentifier">cluster_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterParameterGroupName">cluster_parameter_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterSecurityGroups">cluster_security_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterSubnetGroupName">cluster_subnet_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterType">cluster_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterVersion">cluster_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.dbName">db_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenance">defer_maintenance</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceDuration">defer_maintenance_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceEndTime">defer_maintenance_end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceStartTime">defer_maintenance_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.destinationRegion">destination_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.elasticIp">elastic_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.encrypted">encrypted</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.enhancedVpcRouting">enhanced_vpc_routing</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.hsmClientCertificateIdentifier">hsm_client_certificate_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.hsmConfigurationIdentifier">hsm_configuration_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.iamRoles">iam_roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.maintenanceTrackName">maintenance_track_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.manageMasterPassword">manage_master_password</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.manualSnapshotRetentionPeriod">manual_snapshot_retention_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterPasswordSecretKmsKeyId">master_password_secret_kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterUsername">master_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterUserPassword">master_user_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.multiAz">multi_az</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.namespaceResourcePolicy">namespace_resource_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.nodeType">node_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.numberOfNodes">number_of_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.ownerAccount">owner_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.preferredMaintenanceWindow">preferred_maintenance_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.publiclyAccessible">publicly_accessible</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.resourceAction">resource_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.revisionTarget">revision_target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.rotateEncryptionKey">rotate_encryption_key</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotClusterIdentifier">snapshot_cluster_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotCopyGrantName">snapshot_copy_grant_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotCopyManual">snapshot_copy_manual</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotCopyRetentionPeriod">snapshot_copy_retention_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotIdentifier">snapshot_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cluster_namespace_arn`<sup>Required</sup> <a name="cluster_namespace_arn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterNamespaceArn"></a>

```python
cluster_namespace_arn: str
```

- *Type:* str

---

##### `defer_maintenance_identifier`<sup>Required</sup> <a name="defer_maintenance_identifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceIdentifier"></a>

```python
defer_maintenance_identifier: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.endpoint"></a>

```python
endpoint: RedshiftClusterEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference">RedshiftClusterEndpointOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `logging_properties`<sup>Required</sup> <a name="logging_properties" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.loggingProperties"></a>

```python
logging_properties: RedshiftClusterLoggingPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference">RedshiftClusterLoggingPropertiesOutputReference</a>

---

##### `master_password_secret_arn`<sup>Required</sup> <a name="master_password_secret_arn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterPasswordSecretArn"></a>

```python
master_password_secret_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.tags"></a>

```python
tags: RedshiftClusterTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList">RedshiftClusterTagsList</a>

---

##### `allow_version_upgrade_input`<sup>Optional</sup> <a name="allow_version_upgrade_input" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.allowVersionUpgradeInput"></a>

```python
allow_version_upgrade_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `aqua_configuration_status_input`<sup>Optional</sup> <a name="aqua_configuration_status_input" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.aquaConfigurationStatusInput"></a>

```python
aqua_configuration_status_input: str
```

- *Type:* str

---

##### `automated_snapshot_retention_period_input`<sup>Optional</sup> <a name="automated_snapshot_retention_period_input" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.automatedSnapshotRetentionPeriodInput"></a>

```python
automated_snapshot_retention_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `availability_zone_relocation_input`<sup>Optional</sup> <a name="availability_zone_relocation_input" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.availabilityZoneRelocationInput"></a>

```python
availability_zone_relocation_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `availability_zone_relocation_status_input`<sup>Optional</sup> <a name="availability_zone_relocation_status_input" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.availabilityZoneRelocationStatusInput"></a>

```python
availability_zone_relocation_status_input: str
```

- *Type:* str

---

##### `classic_input`<sup>Optional</sup> <a name="classic_input" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.classicInput"></a>

```python
classic_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `cluster_identifier_input`<sup>Optional</sup> <a name="cluster_identifier_input" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterIdentifierInput"></a>

```python
cluster_identifier_input: str
```

- *Type:* str

---

##### `cluster_parameter_group_name_input`<sup>Optional</sup> <a name="cluster_parameter_group_name_input" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterParameterGroupNameInput"></a>

```python
cluster_parameter_group_name_input: str
```

- *Type:* str

---

##### `cluster_security_groups_input`<sup>Optional</sup> <a name="cluster_security_groups_input" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterSecurityGroupsInput"></a>

```python
cluster_security_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cluster_subnet_group_name_input`<sup>Optional</sup> <a name="cluster_subnet_group_name_input" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterSubnetGroupNameInput"></a>

```python
cluster_subnet_group_name_input: str
```

- *Type:* str

---

##### `cluster_type_input`<sup>Optional</sup> <a name="cluster_type_input" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterTypeInput"></a>

```python
cluster_type_input: str
```

- *Type:* str

---

##### `cluster_version_input`<sup>Optional</sup> <a name="cluster_version_input" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterVersionInput"></a>

```python
cluster_version_input: str
```

- *Type:* str

---

##### `db_name_input`<sup>Optional</sup> <a name="db_name_input" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.dbNameInput"></a>

```python
db_name_input: str
```

- *Type:* str

---

##### `defer_maintenance_duration_input`<sup>Optional</sup> <a name="defer_maintenance_duration_input" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceDurationInput"></a>

```python
defer_maintenance_duration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `defer_maintenance_end_time_input`<sup>Optional</sup> <a name="defer_maintenance_end_time_input" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceEndTimeInput"></a>

```python
defer_maintenance_end_time_input: str
```

- *Type:* str

---

##### `defer_maintenance_input`<sup>Optional</sup> <a name="defer_maintenance_input" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceInput"></a>

```python
defer_maintenance_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `defer_maintenance_start_time_input`<sup>Optional</sup> <a name="defer_maintenance_start_time_input" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceStartTimeInput"></a>

```python
defer_maintenance_start_time_input: str
```

- *Type:* str

---

##### `destination_region_input`<sup>Optional</sup> <a name="destination_region_input" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.destinationRegionInput"></a>

```python
destination_region_input: str
```

- *Type:* str

---

##### `elastic_ip_input`<sup>Optional</sup> <a name="elastic_ip_input" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.elasticIpInput"></a>

```python
elastic_ip_input: str
```

- *Type:* str

---

##### `encrypted_input`<sup>Optional</sup> <a name="encrypted_input" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.encryptedInput"></a>

```python
encrypted_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `endpoint_input`<sup>Optional</sup> <a name="endpoint_input" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.endpointInput"></a>

```python
endpoint_input: IResolvable | RedshiftClusterEndpoint
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpoint">RedshiftClusterEndpoint</a>

---

##### `enhanced_vpc_routing_input`<sup>Optional</sup> <a name="enhanced_vpc_routing_input" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.enhancedVpcRoutingInput"></a>

```python
enhanced_vpc_routing_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `hsm_client_certificate_identifier_input`<sup>Optional</sup> <a name="hsm_client_certificate_identifier_input" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.hsmClientCertificateIdentifierInput"></a>

```python
hsm_client_certificate_identifier_input: str
```

- *Type:* str

---

##### `hsm_configuration_identifier_input`<sup>Optional</sup> <a name="hsm_configuration_identifier_input" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.hsmConfigurationIdentifierInput"></a>

```python
hsm_configuration_identifier_input: str
```

- *Type:* str

---

##### `iam_roles_input`<sup>Optional</sup> <a name="iam_roles_input" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.iamRolesInput"></a>

```python
iam_roles_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `logging_properties_input`<sup>Optional</sup> <a name="logging_properties_input" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.loggingPropertiesInput"></a>

```python
logging_properties_input: IResolvable | RedshiftClusterLoggingProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties">RedshiftClusterLoggingProperties</a>

---

##### `maintenance_track_name_input`<sup>Optional</sup> <a name="maintenance_track_name_input" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.maintenanceTrackNameInput"></a>

```python
maintenance_track_name_input: str
```

- *Type:* str

---

##### `manage_master_password_input`<sup>Optional</sup> <a name="manage_master_password_input" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.manageMasterPasswordInput"></a>

```python
manage_master_password_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `manual_snapshot_retention_period_input`<sup>Optional</sup> <a name="manual_snapshot_retention_period_input" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.manualSnapshotRetentionPeriodInput"></a>

```python
manual_snapshot_retention_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `master_password_secret_kms_key_id_input`<sup>Optional</sup> <a name="master_password_secret_kms_key_id_input" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterPasswordSecretKmsKeyIdInput"></a>

```python
master_password_secret_kms_key_id_input: str
```

- *Type:* str

---

##### `master_username_input`<sup>Optional</sup> <a name="master_username_input" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterUsernameInput"></a>

```python
master_username_input: str
```

- *Type:* str

---

##### `master_user_password_input`<sup>Optional</sup> <a name="master_user_password_input" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterUserPasswordInput"></a>

```python
master_user_password_input: str
```

- *Type:* str

---

##### `multi_az_input`<sup>Optional</sup> <a name="multi_az_input" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.multiAzInput"></a>

```python
multi_az_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `namespace_resource_policy_input`<sup>Optional</sup> <a name="namespace_resource_policy_input" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.namespaceResourcePolicyInput"></a>

```python
namespace_resource_policy_input: str
```

- *Type:* str

---

##### `node_type_input`<sup>Optional</sup> <a name="node_type_input" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.nodeTypeInput"></a>

```python
node_type_input: str
```

- *Type:* str

---

##### `number_of_nodes_input`<sup>Optional</sup> <a name="number_of_nodes_input" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.numberOfNodesInput"></a>

```python
number_of_nodes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `owner_account_input`<sup>Optional</sup> <a name="owner_account_input" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.ownerAccountInput"></a>

```python
owner_account_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `preferred_maintenance_window_input`<sup>Optional</sup> <a name="preferred_maintenance_window_input" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.preferredMaintenanceWindowInput"></a>

```python
preferred_maintenance_window_input: str
```

- *Type:* str

---

##### `publicly_accessible_input`<sup>Optional</sup> <a name="publicly_accessible_input" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.publiclyAccessibleInput"></a>

```python
publicly_accessible_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `resource_action_input`<sup>Optional</sup> <a name="resource_action_input" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.resourceActionInput"></a>

```python
resource_action_input: str
```

- *Type:* str

---

##### `revision_target_input`<sup>Optional</sup> <a name="revision_target_input" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.revisionTargetInput"></a>

```python
revision_target_input: str
```

- *Type:* str

---

##### `rotate_encryption_key_input`<sup>Optional</sup> <a name="rotate_encryption_key_input" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.rotateEncryptionKeyInput"></a>

```python
rotate_encryption_key_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `snapshot_cluster_identifier_input`<sup>Optional</sup> <a name="snapshot_cluster_identifier_input" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotClusterIdentifierInput"></a>

```python
snapshot_cluster_identifier_input: str
```

- *Type:* str

---

##### `snapshot_copy_grant_name_input`<sup>Optional</sup> <a name="snapshot_copy_grant_name_input" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotCopyGrantNameInput"></a>

```python
snapshot_copy_grant_name_input: str
```

- *Type:* str

---

##### `snapshot_copy_manual_input`<sup>Optional</sup> <a name="snapshot_copy_manual_input" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotCopyManualInput"></a>

```python
snapshot_copy_manual_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `snapshot_copy_retention_period_input`<sup>Optional</sup> <a name="snapshot_copy_retention_period_input" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotCopyRetentionPeriodInput"></a>

```python
snapshot_copy_retention_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshot_identifier_input`<sup>Optional</sup> <a name="snapshot_identifier_input" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotIdentifierInput"></a>

```python
snapshot_identifier_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[RedshiftClusterTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags">RedshiftClusterTags</a>]

---

##### `vpc_security_group_ids_input`<sup>Optional</sup> <a name="vpc_security_group_ids_input" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.vpcSecurityGroupIdsInput"></a>

```python
vpc_security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_version_upgrade`<sup>Required</sup> <a name="allow_version_upgrade" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.allowVersionUpgrade"></a>

```python
allow_version_upgrade: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `aqua_configuration_status`<sup>Required</sup> <a name="aqua_configuration_status" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.aquaConfigurationStatus"></a>

```python
aqua_configuration_status: str
```

- *Type:* str

---

##### `automated_snapshot_retention_period`<sup>Required</sup> <a name="automated_snapshot_retention_period" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.automatedSnapshotRetentionPeriod"></a>

```python
automated_snapshot_retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `availability_zone_relocation`<sup>Required</sup> <a name="availability_zone_relocation" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.availabilityZoneRelocation"></a>

```python
availability_zone_relocation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `availability_zone_relocation_status`<sup>Required</sup> <a name="availability_zone_relocation_status" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.availabilityZoneRelocationStatus"></a>

```python
availability_zone_relocation_status: str
```

- *Type:* str

---

##### `classic`<sup>Required</sup> <a name="classic" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.classic"></a>

```python
classic: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `cluster_identifier`<sup>Required</sup> <a name="cluster_identifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterIdentifier"></a>

```python
cluster_identifier: str
```

- *Type:* str

---

##### `cluster_parameter_group_name`<sup>Required</sup> <a name="cluster_parameter_group_name" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterParameterGroupName"></a>

```python
cluster_parameter_group_name: str
```

- *Type:* str

---

##### `cluster_security_groups`<sup>Required</sup> <a name="cluster_security_groups" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterSecurityGroups"></a>

```python
cluster_security_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cluster_subnet_group_name`<sup>Required</sup> <a name="cluster_subnet_group_name" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterSubnetGroupName"></a>

```python
cluster_subnet_group_name: str
```

- *Type:* str

---

##### `cluster_type`<sup>Required</sup> <a name="cluster_type" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterType"></a>

```python
cluster_type: str
```

- *Type:* str

---

##### `cluster_version`<sup>Required</sup> <a name="cluster_version" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.clusterVersion"></a>

```python
cluster_version: str
```

- *Type:* str

---

##### `db_name`<sup>Required</sup> <a name="db_name" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.dbName"></a>

```python
db_name: str
```

- *Type:* str

---

##### `defer_maintenance`<sup>Required</sup> <a name="defer_maintenance" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenance"></a>

```python
defer_maintenance: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `defer_maintenance_duration`<sup>Required</sup> <a name="defer_maintenance_duration" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceDuration"></a>

```python
defer_maintenance_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `defer_maintenance_end_time`<sup>Required</sup> <a name="defer_maintenance_end_time" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceEndTime"></a>

```python
defer_maintenance_end_time: str
```

- *Type:* str

---

##### `defer_maintenance_start_time`<sup>Required</sup> <a name="defer_maintenance_start_time" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.deferMaintenanceStartTime"></a>

```python
defer_maintenance_start_time: str
```

- *Type:* str

---

##### `destination_region`<sup>Required</sup> <a name="destination_region" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.destinationRegion"></a>

```python
destination_region: str
```

- *Type:* str

---

##### `elastic_ip`<sup>Required</sup> <a name="elastic_ip" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.elasticIp"></a>

```python
elastic_ip: str
```

- *Type:* str

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.encrypted"></a>

```python
encrypted: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enhanced_vpc_routing`<sup>Required</sup> <a name="enhanced_vpc_routing" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.enhancedVpcRouting"></a>

```python
enhanced_vpc_routing: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `hsm_client_certificate_identifier`<sup>Required</sup> <a name="hsm_client_certificate_identifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.hsmClientCertificateIdentifier"></a>

```python
hsm_client_certificate_identifier: str
```

- *Type:* str

---

##### `hsm_configuration_identifier`<sup>Required</sup> <a name="hsm_configuration_identifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.hsmConfigurationIdentifier"></a>

```python
hsm_configuration_identifier: str
```

- *Type:* str

---

##### `iam_roles`<sup>Required</sup> <a name="iam_roles" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.iamRoles"></a>

```python
iam_roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `maintenance_track_name`<sup>Required</sup> <a name="maintenance_track_name" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.maintenanceTrackName"></a>

```python
maintenance_track_name: str
```

- *Type:* str

---

##### `manage_master_password`<sup>Required</sup> <a name="manage_master_password" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.manageMasterPassword"></a>

```python
manage_master_password: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `manual_snapshot_retention_period`<sup>Required</sup> <a name="manual_snapshot_retention_period" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.manualSnapshotRetentionPeriod"></a>

```python
manual_snapshot_retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `master_password_secret_kms_key_id`<sup>Required</sup> <a name="master_password_secret_kms_key_id" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterPasswordSecretKmsKeyId"></a>

```python
master_password_secret_kms_key_id: str
```

- *Type:* str

---

##### `master_username`<sup>Required</sup> <a name="master_username" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterUsername"></a>

```python
master_username: str
```

- *Type:* str

---

##### `master_user_password`<sup>Required</sup> <a name="master_user_password" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.masterUserPassword"></a>

```python
master_user_password: str
```

- *Type:* str

---

##### `multi_az`<sup>Required</sup> <a name="multi_az" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.multiAz"></a>

```python
multi_az: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `namespace_resource_policy`<sup>Required</sup> <a name="namespace_resource_policy" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.namespaceResourcePolicy"></a>

```python
namespace_resource_policy: str
```

- *Type:* str

---

##### `node_type`<sup>Required</sup> <a name="node_type" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.nodeType"></a>

```python
node_type: str
```

- *Type:* str

---

##### `number_of_nodes`<sup>Required</sup> <a name="number_of_nodes" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.numberOfNodes"></a>

```python
number_of_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `owner_account`<sup>Required</sup> <a name="owner_account" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.ownerAccount"></a>

```python
owner_account: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `preferred_maintenance_window`<sup>Required</sup> <a name="preferred_maintenance_window" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.preferredMaintenanceWindow"></a>

```python
preferred_maintenance_window: str
```

- *Type:* str

---

##### `publicly_accessible`<sup>Required</sup> <a name="publicly_accessible" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.publiclyAccessible"></a>

```python
publicly_accessible: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `resource_action`<sup>Required</sup> <a name="resource_action" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.resourceAction"></a>

```python
resource_action: str
```

- *Type:* str

---

##### `revision_target`<sup>Required</sup> <a name="revision_target" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.revisionTarget"></a>

```python
revision_target: str
```

- *Type:* str

---

##### `rotate_encryption_key`<sup>Required</sup> <a name="rotate_encryption_key" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.rotateEncryptionKey"></a>

```python
rotate_encryption_key: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `snapshot_cluster_identifier`<sup>Required</sup> <a name="snapshot_cluster_identifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotClusterIdentifier"></a>

```python
snapshot_cluster_identifier: str
```

- *Type:* str

---

##### `snapshot_copy_grant_name`<sup>Required</sup> <a name="snapshot_copy_grant_name" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotCopyGrantName"></a>

```python
snapshot_copy_grant_name: str
```

- *Type:* str

---

##### `snapshot_copy_manual`<sup>Required</sup> <a name="snapshot_copy_manual" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotCopyManual"></a>

```python
snapshot_copy_manual: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `snapshot_copy_retention_period`<sup>Required</sup> <a name="snapshot_copy_retention_period" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotCopyRetentionPeriod"></a>

```python
snapshot_copy_retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshot_identifier`<sup>Required</sup> <a name="snapshot_identifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.snapshotIdentifier"></a>

```python
snapshot_identifier: str
```

- *Type:* str

---

##### `vpc_security_group_ids`<sup>Required</sup> <a name="vpc_security_group_ids" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.vpcSecurityGroupIds"></a>

```python
vpc_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.redshiftCluster.RedshiftCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftClusterConfig <a name="RedshiftClusterConfig" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.Initializer"></a>

```python
from cdktn_provider_awscc import redshift_cluster

redshiftCluster.RedshiftClusterConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cluster_type: str,
  db_name: str,
  master_username: str,
  node_type: str,
  allow_version_upgrade: bool | IResolvable = None,
  aqua_configuration_status: str = None,
  automated_snapshot_retention_period: typing.Union[int, float] = None,
  availability_zone: str = None,
  availability_zone_relocation: bool | IResolvable = None,
  availability_zone_relocation_status: str = None,
  classic: bool | IResolvable = None,
  cluster_identifier: str = None,
  cluster_parameter_group_name: str = None,
  cluster_security_groups: typing.List[str] = None,
  cluster_subnet_group_name: str = None,
  cluster_version: str = None,
  defer_maintenance: bool | IResolvable = None,
  defer_maintenance_duration: typing.Union[int, float] = None,
  defer_maintenance_end_time: str = None,
  defer_maintenance_start_time: str = None,
  destination_region: str = None,
  elastic_ip: str = None,
  encrypted: bool | IResolvable = None,
  endpoint: RedshiftClusterEndpoint = None,
  enhanced_vpc_routing: bool | IResolvable = None,
  hsm_client_certificate_identifier: str = None,
  hsm_configuration_identifier: str = None,
  iam_roles: typing.List[str] = None,
  kms_key_id: str = None,
  logging_properties: RedshiftClusterLoggingProperties = None,
  maintenance_track_name: str = None,
  manage_master_password: bool | IResolvable = None,
  manual_snapshot_retention_period: typing.Union[int, float] = None,
  master_password_secret_kms_key_id: str = None,
  master_user_password: str = None,
  multi_az: bool | IResolvable = None,
  namespace_resource_policy: str = None,
  number_of_nodes: typing.Union[int, float] = None,
  owner_account: str = None,
  port: typing.Union[int, float] = None,
  preferred_maintenance_window: str = None,
  publicly_accessible: bool | IResolvable = None,
  resource_action: str = None,
  revision_target: str = None,
  rotate_encryption_key: bool | IResolvable = None,
  snapshot_cluster_identifier: str = None,
  snapshot_copy_grant_name: str = None,
  snapshot_copy_manual: bool | IResolvable = None,
  snapshot_copy_retention_period: typing.Union[int, float] = None,
  snapshot_identifier: str = None,
  tags: IResolvable | typing.List[RedshiftClusterTags] = None,
  vpc_security_group_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.clusterType">cluster_type</a></code> | <code>str</code> | The type of the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.dbName">db_name</a></code> | <code>str</code> | The name of the first database to be created when the cluster is created. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.masterUsername">master_username</a></code> | <code>str</code> | The user name associated with the master user account for the cluster that is being created. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.nodeType">node_type</a></code> | <code>str</code> | The node type to be provisioned for the cluster.Valid Values: ds2.xlarge \| ds2.8xlarge \| dc1.large \| dc1.8xlarge \| dc2.large \| dc2.8xlarge \| ra3.large \| ra3.4xlarge \| ra3.16xlarge \| rg.large \| rg.xlarge \| rg.4xlarge \| rg.12xlarge. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.allowVersionUpgrade">allow_version_upgrade</a></code> | <code>bool \| cdktn.IResolvable</code> | Major version upgrades can be applied during the maintenance window to the Amazon Redshift engine that is running on the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.aquaConfigurationStatus">aqua_configuration_status</a></code> | <code>str</code> | The value represents how the cluster is configured to use AQUA (Advanced Query Accelerator) after the cluster is restored. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.automatedSnapshotRetentionPeriod">automated_snapshot_retention_period</a></code> | <code>typing.Union[int, float]</code> | The number of days that automated snapshots are retained. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.availabilityZone">availability_zone</a></code> | <code>str</code> | The EC2 Availability Zone (AZ) in which you want Amazon Redshift to provision the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.availabilityZoneRelocation">availability_zone_relocation</a></code> | <code>bool \| cdktn.IResolvable</code> | The option to enable relocation for an Amazon Redshift cluster between Availability Zones after the cluster modification is complete. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.availabilityZoneRelocationStatus">availability_zone_relocation_status</a></code> | <code>str</code> | The availability zone relocation status of the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.classic">classic</a></code> | <code>bool \| cdktn.IResolvable</code> | A boolean value indicating whether the resize operation is using the classic resize process. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.clusterIdentifier">cluster_identifier</a></code> | <code>str</code> | A unique identifier for the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.clusterParameterGroupName">cluster_parameter_group_name</a></code> | <code>str</code> | The name of the parameter group to be associated with this cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.clusterSecurityGroups">cluster_security_groups</a></code> | <code>typing.List[str]</code> | A list of security groups to be associated with this cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.clusterSubnetGroupName">cluster_subnet_group_name</a></code> | <code>str</code> | The name of a cluster subnet group to be associated with this cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.clusterVersion">cluster_version</a></code> | <code>str</code> | The version of the Amazon Redshift engine software that you want to deploy on the cluster.The version selected runs on all the nodes in the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.deferMaintenance">defer_maintenance</a></code> | <code>bool \| cdktn.IResolvable</code> | A boolean indicating whether to enable the deferred maintenance window. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.deferMaintenanceDuration">defer_maintenance_duration</a></code> | <code>typing.Union[int, float]</code> | An integer indicating the duration of the maintenance window in days. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.deferMaintenanceEndTime">defer_maintenance_end_time</a></code> | <code>str</code> | A timestamp indicating end time for the deferred maintenance window. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.deferMaintenanceStartTime">defer_maintenance_start_time</a></code> | <code>str</code> | A timestamp indicating the start time for the deferred maintenance window. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.destinationRegion">destination_region</a></code> | <code>str</code> | The destination AWS Region that you want to copy snapshots to. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.elasticIp">elastic_ip</a></code> | <code>str</code> | The Elastic IP (EIP) address for the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.encrypted">encrypted</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, the data in the cluster is encrypted at rest. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.endpoint">endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpoint">RedshiftClusterEndpoint</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#endpoint RedshiftCluster#endpoint}. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.enhancedVpcRouting">enhanced_vpc_routing</a></code> | <code>bool \| cdktn.IResolvable</code> | An option that specifies whether to create the cluster with enhanced VPC routing enabled. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.hsmClientCertificateIdentifier">hsm_client_certificate_identifier</a></code> | <code>str</code> | Specifies the name of the HSM client certificate the Amazon Redshift cluster uses to retrieve the data encryption keys stored in an HSM. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.hsmConfigurationIdentifier">hsm_configuration_identifier</a></code> | <code>str</code> | Specifies the name of the HSM configuration that contains the information the Amazon Redshift cluster can use to retrieve and store keys in an HSM. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.iamRoles">iam_roles</a></code> | <code>typing.List[str]</code> | A list of AWS Identity and Access Management (IAM) roles that can be used by the cluster to access other AWS services. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The AWS Key Management Service (KMS) key ID of the encryption key that you want to use to encrypt data in the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.loggingProperties">logging_properties</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties">RedshiftClusterLoggingProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#logging_properties RedshiftCluster#logging_properties}. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.maintenanceTrackName">maintenance_track_name</a></code> | <code>str</code> | The name for the maintenance track that you want to assign for the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.manageMasterPassword">manage_master_password</a></code> | <code>bool \| cdktn.IResolvable</code> | A boolean indicating if the redshift cluster's admin user credentials is managed by Redshift or not. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.manualSnapshotRetentionPeriod">manual_snapshot_retention_period</a></code> | <code>typing.Union[int, float]</code> | The number of days to retain newly copied snapshots in the destination AWS Region after they are copied from the source AWS Region. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.masterPasswordSecretKmsKeyId">master_password_secret_kms_key_id</a></code> | <code>str</code> | The ID of the Key Management Service (KMS) key used to encrypt and store the cluster's admin user credentials secret. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.masterUserPassword">master_user_password</a></code> | <code>str</code> | The password associated with the master user account for the cluster that is being created. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.multiAz">multi_az</a></code> | <code>bool \| cdktn.IResolvable</code> | A boolean indicating if the redshift cluster is multi-az or not. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.namespaceResourcePolicy">namespace_resource_policy</a></code> | <code>str</code> | The namespace resource policy document that will be attached to a Redshift cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.numberOfNodes">number_of_nodes</a></code> | <code>typing.Union[int, float]</code> | The number of compute nodes in the cluster. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.ownerAccount">owner_account</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#owner_account RedshiftCluster#owner_account}. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The port number on which the cluster accepts incoming connections. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.preferredMaintenanceWindow">preferred_maintenance_window</a></code> | <code>str</code> | The weekly time range (in UTC) during which automated cluster maintenance can occur. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.publiclyAccessible">publicly_accessible</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, the cluster can be accessed from a public network. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.resourceAction">resource_action</a></code> | <code>str</code> | The Redshift operation to be performed. Resource Action supports pause-cluster, resume-cluster, failover-primary-compute APIs. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.revisionTarget">revision_target</a></code> | <code>str</code> | The identifier of the database revision. You can retrieve this value from the response to the DescribeClusterDbRevisions request. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.rotateEncryptionKey">rotate_encryption_key</a></code> | <code>bool \| cdktn.IResolvable</code> | A boolean indicating if we want to rotate Encryption Keys. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.snapshotClusterIdentifier">snapshot_cluster_identifier</a></code> | <code>str</code> | The name of the cluster the source snapshot was created from. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.snapshotCopyGrantName">snapshot_copy_grant_name</a></code> | <code>str</code> | The name of the snapshot copy grant to use when snapshots of an AWS KMS-encrypted cluster are copied to the destination region. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.snapshotCopyManual">snapshot_copy_manual</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether to apply the snapshot retention period to newly copied manual snapshots instead of automated snapshots. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.snapshotCopyRetentionPeriod">snapshot_copy_retention_period</a></code> | <code>typing.Union[int, float]</code> | The number of days to retain automated snapshots in the destination region after they are copied from the source region. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.snapshotIdentifier">snapshot_identifier</a></code> | <code>str</code> | The name of the snapshot from which to create the new cluster. This parameter isn't case sensitive. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags">RedshiftClusterTags</a>]</code> | The list of tags for the cluster parameter group. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | A list of Virtual Private Cloud (VPC) security groups to be associated with the cluster. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cluster_type`<sup>Required</sup> <a name="cluster_type" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.clusterType"></a>

```python
cluster_type: str
```

- *Type:* str

The type of the cluster.

When cluster type is specified as single-node, the NumberOfNodes parameter is not required and if multi-node, the NumberOfNodes parameter is required

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#cluster_type RedshiftCluster#cluster_type}

---

##### `db_name`<sup>Required</sup> <a name="db_name" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.dbName"></a>

```python
db_name: str
```

- *Type:* str

The name of the first database to be created when the cluster is created.

To create additional databases after the cluster is created, connect to the cluster with a SQL client and use SQL commands to create a database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#db_name RedshiftCluster#db_name}

---

##### `master_username`<sup>Required</sup> <a name="master_username" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.masterUsername"></a>

```python
master_username: str
```

- *Type:* str

The user name associated with the master user account for the cluster that is being created.

The user name can't be PUBLIC and first character must be a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#master_username RedshiftCluster#master_username}

---

##### `node_type`<sup>Required</sup> <a name="node_type" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.nodeType"></a>

```python
node_type: str
```

- *Type:* str

The node type to be provisioned for the cluster.Valid Values: ds2.xlarge | ds2.8xlarge | dc1.large | dc1.8xlarge | dc2.large | dc2.8xlarge | ra3.large | ra3.4xlarge | ra3.16xlarge | rg.large | rg.xlarge | rg.4xlarge | rg.12xlarge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#node_type RedshiftCluster#node_type}

---

##### `allow_version_upgrade`<sup>Optional</sup> <a name="allow_version_upgrade" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.allowVersionUpgrade"></a>

```python
allow_version_upgrade: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Major version upgrades can be applied during the maintenance window to the Amazon Redshift engine that is running on the cluster.

Default value is True

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#allow_version_upgrade RedshiftCluster#allow_version_upgrade}

---

##### `aqua_configuration_status`<sup>Optional</sup> <a name="aqua_configuration_status" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.aquaConfigurationStatus"></a>

```python
aqua_configuration_status: str
```

- *Type:* str

The value represents how the cluster is configured to use AQUA (Advanced Query Accelerator) after the cluster is restored.

Possible values include the following.

enabled - Use AQUA if it is available for the current Region and Amazon Redshift node type.
disabled - Don't use AQUA.
auto - Amazon Redshift determines whether to use AQUA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#aqua_configuration_status RedshiftCluster#aqua_configuration_status}

---

##### `automated_snapshot_retention_period`<sup>Optional</sup> <a name="automated_snapshot_retention_period" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.automatedSnapshotRetentionPeriod"></a>

```python
automated_snapshot_retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of days that automated snapshots are retained.

If the value is 0, automated snapshots are disabled. Default value is 1

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#automated_snapshot_retention_period RedshiftCluster#automated_snapshot_retention_period}

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

The EC2 Availability Zone (AZ) in which you want Amazon Redshift to provision the cluster.

Default: A random, system-chosen Availability Zone in the region that is specified by the endpoint

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#availability_zone RedshiftCluster#availability_zone}

---

##### `availability_zone_relocation`<sup>Optional</sup> <a name="availability_zone_relocation" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.availabilityZoneRelocation"></a>

```python
availability_zone_relocation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

The option to enable relocation for an Amazon Redshift cluster between Availability Zones after the cluster modification is complete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#availability_zone_relocation RedshiftCluster#availability_zone_relocation}

---

##### `availability_zone_relocation_status`<sup>Optional</sup> <a name="availability_zone_relocation_status" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.availabilityZoneRelocationStatus"></a>

```python
availability_zone_relocation_status: str
```

- *Type:* str

The availability zone relocation status of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#availability_zone_relocation_status RedshiftCluster#availability_zone_relocation_status}

---

##### `classic`<sup>Optional</sup> <a name="classic" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.classic"></a>

```python
classic: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A boolean value indicating whether the resize operation is using the classic resize process.

If you don't provide this parameter or set the value to false , the resize type is elastic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#classic RedshiftCluster#classic}

---

##### `cluster_identifier`<sup>Optional</sup> <a name="cluster_identifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.clusterIdentifier"></a>

```python
cluster_identifier: str
```

- *Type:* str

A unique identifier for the cluster.

You use this identifier to refer to the cluster for any subsequent cluster operations such as deleting or modifying. All alphabetical characters must be lower case, no hypens at the end, no two consecutive hyphens. Cluster name should be unique for all clusters within an AWS account

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#cluster_identifier RedshiftCluster#cluster_identifier}

---

##### `cluster_parameter_group_name`<sup>Optional</sup> <a name="cluster_parameter_group_name" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.clusterParameterGroupName"></a>

```python
cluster_parameter_group_name: str
```

- *Type:* str

The name of the parameter group to be associated with this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#cluster_parameter_group_name RedshiftCluster#cluster_parameter_group_name}

---

##### `cluster_security_groups`<sup>Optional</sup> <a name="cluster_security_groups" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.clusterSecurityGroups"></a>

```python
cluster_security_groups: typing.List[str]
```

- *Type:* typing.List[str]

A list of security groups to be associated with this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#cluster_security_groups RedshiftCluster#cluster_security_groups}

---

##### `cluster_subnet_group_name`<sup>Optional</sup> <a name="cluster_subnet_group_name" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.clusterSubnetGroupName"></a>

```python
cluster_subnet_group_name: str
```

- *Type:* str

The name of a cluster subnet group to be associated with this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#cluster_subnet_group_name RedshiftCluster#cluster_subnet_group_name}

---

##### `cluster_version`<sup>Optional</sup> <a name="cluster_version" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.clusterVersion"></a>

```python
cluster_version: str
```

- *Type:* str

The version of the Amazon Redshift engine software that you want to deploy on the cluster.The version selected runs on all the nodes in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#cluster_version RedshiftCluster#cluster_version}

---

##### `defer_maintenance`<sup>Optional</sup> <a name="defer_maintenance" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.deferMaintenance"></a>

```python
defer_maintenance: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A boolean indicating whether to enable the deferred maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#defer_maintenance RedshiftCluster#defer_maintenance}

---

##### `defer_maintenance_duration`<sup>Optional</sup> <a name="defer_maintenance_duration" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.deferMaintenanceDuration"></a>

```python
defer_maintenance_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

An integer indicating the duration of the maintenance window in days.

If you specify a duration, you can't specify an end time. The duration must be 60 days or less.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#defer_maintenance_duration RedshiftCluster#defer_maintenance_duration}

---

##### `defer_maintenance_end_time`<sup>Optional</sup> <a name="defer_maintenance_end_time" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.deferMaintenanceEndTime"></a>

```python
defer_maintenance_end_time: str
```

- *Type:* str

A timestamp indicating end time for the deferred maintenance window.

If you specify an end time, you can't specify a duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#defer_maintenance_end_time RedshiftCluster#defer_maintenance_end_time}

---

##### `defer_maintenance_start_time`<sup>Optional</sup> <a name="defer_maintenance_start_time" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.deferMaintenanceStartTime"></a>

```python
defer_maintenance_start_time: str
```

- *Type:* str

A timestamp indicating the start time for the deferred maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#defer_maintenance_start_time RedshiftCluster#defer_maintenance_start_time}

---

##### `destination_region`<sup>Optional</sup> <a name="destination_region" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.destinationRegion"></a>

```python
destination_region: str
```

- *Type:* str

The destination AWS Region that you want to copy snapshots to.

Constraints: Must be the name of a valid AWS Region. For more information, see Regions and Endpoints in the Amazon Web Services [https://docs.aws.amazon.com/general/latest/gr/rande.html#redshift_region] General Reference

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#destination_region RedshiftCluster#destination_region}

---

##### `elastic_ip`<sup>Optional</sup> <a name="elastic_ip" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.elasticIp"></a>

```python
elastic_ip: str
```

- *Type:* str

The Elastic IP (EIP) address for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#elastic_ip RedshiftCluster#elastic_ip}

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.encrypted"></a>

```python
encrypted: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, the data in the cluster is encrypted at rest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#encrypted RedshiftCluster#encrypted}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.endpoint"></a>

```python
endpoint: RedshiftClusterEndpoint
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpoint">RedshiftClusterEndpoint</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#endpoint RedshiftCluster#endpoint}.

---

##### `enhanced_vpc_routing`<sup>Optional</sup> <a name="enhanced_vpc_routing" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.enhancedVpcRouting"></a>

```python
enhanced_vpc_routing: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

An option that specifies whether to create the cluster with enhanced VPC routing enabled.

To create a cluster that uses enhanced VPC routing, the cluster must be in a VPC. For more information, see Enhanced VPC Routing in the Amazon Redshift Cluster Management Guide.

If this option is true , enhanced VPC routing is enabled.

Default: false

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#enhanced_vpc_routing RedshiftCluster#enhanced_vpc_routing}

---

##### `hsm_client_certificate_identifier`<sup>Optional</sup> <a name="hsm_client_certificate_identifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.hsmClientCertificateIdentifier"></a>

```python
hsm_client_certificate_identifier: str
```

- *Type:* str

Specifies the name of the HSM client certificate the Amazon Redshift cluster uses to retrieve the data encryption keys stored in an HSM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#hsm_client_certificate_identifier RedshiftCluster#hsm_client_certificate_identifier}

---

##### `hsm_configuration_identifier`<sup>Optional</sup> <a name="hsm_configuration_identifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.hsmConfigurationIdentifier"></a>

```python
hsm_configuration_identifier: str
```

- *Type:* str

Specifies the name of the HSM configuration that contains the information the Amazon Redshift cluster can use to retrieve and store keys in an HSM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#hsm_configuration_identifier RedshiftCluster#hsm_configuration_identifier}

---

##### `iam_roles`<sup>Optional</sup> <a name="iam_roles" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.iamRoles"></a>

```python
iam_roles: typing.List[str]
```

- *Type:* typing.List[str]

A list of AWS Identity and Access Management (IAM) roles that can be used by the cluster to access other AWS services.

You must supply the IAM roles in their Amazon Resource Name (ARN) format. You can supply up to 50 IAM roles in a single request

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#iam_roles RedshiftCluster#iam_roles}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

The AWS Key Management Service (KMS) key ID of the encryption key that you want to use to encrypt data in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#kms_key_id RedshiftCluster#kms_key_id}

---

##### `logging_properties`<sup>Optional</sup> <a name="logging_properties" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.loggingProperties"></a>

```python
logging_properties: RedshiftClusterLoggingProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties">RedshiftClusterLoggingProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#logging_properties RedshiftCluster#logging_properties}.

---

##### `maintenance_track_name`<sup>Optional</sup> <a name="maintenance_track_name" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.maintenanceTrackName"></a>

```python
maintenance_track_name: str
```

- *Type:* str

The name for the maintenance track that you want to assign for the cluster.

This name change is asynchronous. The new track name stays in the PendingModifiedValues for the cluster until the next maintenance window. When the maintenance track changes, the cluster is switched to the latest cluster release available for the maintenance track. At this point, the maintenance track name is applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#maintenance_track_name RedshiftCluster#maintenance_track_name}

---

##### `manage_master_password`<sup>Optional</sup> <a name="manage_master_password" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.manageMasterPassword"></a>

```python
manage_master_password: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A boolean indicating if the redshift cluster's admin user credentials is managed by Redshift or not.

You can't use MasterUserPassword if ManageMasterPassword is true. If ManageMasterPassword is false or not set, Amazon Redshift uses MasterUserPassword for the admin user account's password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#manage_master_password RedshiftCluster#manage_master_password}

---

##### `manual_snapshot_retention_period`<sup>Optional</sup> <a name="manual_snapshot_retention_period" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.manualSnapshotRetentionPeriod"></a>

```python
manual_snapshot_retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of days to retain newly copied snapshots in the destination AWS Region after they are copied from the source AWS Region.

If the value is -1, the manual snapshot is retained indefinitely.

The value must be either -1 or an integer between 1 and 3,653.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#manual_snapshot_retention_period RedshiftCluster#manual_snapshot_retention_period}

---

##### `master_password_secret_kms_key_id`<sup>Optional</sup> <a name="master_password_secret_kms_key_id" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.masterPasswordSecretKmsKeyId"></a>

```python
master_password_secret_kms_key_id: str
```

- *Type:* str

The ID of the Key Management Service (KMS) key used to encrypt and store the cluster's admin user credentials secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#master_password_secret_kms_key_id RedshiftCluster#master_password_secret_kms_key_id}

---

##### `master_user_password`<sup>Optional</sup> <a name="master_user_password" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.masterUserPassword"></a>

```python
master_user_password: str
```

- *Type:* str

The password associated with the master user account for the cluster that is being created.

You can't use MasterUserPassword if ManageMasterPassword is true. Password must be between 8 and 64 characters in length, should have at least one uppercase letter.Must contain at least one lowercase letter.Must contain one number.Can be any printable ASCII character.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#master_user_password RedshiftCluster#master_user_password}

---

##### `multi_az`<sup>Optional</sup> <a name="multi_az" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.multiAz"></a>

```python
multi_az: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A boolean indicating if the redshift cluster is multi-az or not.

If you don't provide this parameter or set the value to false, the redshift cluster will be single-az.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#multi_az RedshiftCluster#multi_az}

---

##### `namespace_resource_policy`<sup>Optional</sup> <a name="namespace_resource_policy" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.namespaceResourcePolicy"></a>

```python
namespace_resource_policy: str
```

- *Type:* str

The namespace resource policy document that will be attached to a Redshift cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#namespace_resource_policy RedshiftCluster#namespace_resource_policy}

---

##### `number_of_nodes`<sup>Optional</sup> <a name="number_of_nodes" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.numberOfNodes"></a>

```python
number_of_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of compute nodes in the cluster.

This parameter is required when the ClusterType parameter is specified as multi-node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#number_of_nodes RedshiftCluster#number_of_nodes}

---

##### `owner_account`<sup>Optional</sup> <a name="owner_account" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.ownerAccount"></a>

```python
owner_account: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#owner_account RedshiftCluster#owner_account}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The port number on which the cluster accepts incoming connections.

The cluster is accessible only via the JDBC and ODBC connection strings

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#port RedshiftCluster#port}

---

##### `preferred_maintenance_window`<sup>Optional</sup> <a name="preferred_maintenance_window" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.preferredMaintenanceWindow"></a>

```python
preferred_maintenance_window: str
```

- *Type:* str

The weekly time range (in UTC) during which automated cluster maintenance can occur.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#preferred_maintenance_window RedshiftCluster#preferred_maintenance_window}

---

##### `publicly_accessible`<sup>Optional</sup> <a name="publicly_accessible" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.publiclyAccessible"></a>

```python
publicly_accessible: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, the cluster can be accessed from a public network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#publicly_accessible RedshiftCluster#publicly_accessible}

---

##### `resource_action`<sup>Optional</sup> <a name="resource_action" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.resourceAction"></a>

```python
resource_action: str
```

- *Type:* str

The Redshift operation to be performed. Resource Action supports pause-cluster, resume-cluster, failover-primary-compute APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#resource_action RedshiftCluster#resource_action}

---

##### `revision_target`<sup>Optional</sup> <a name="revision_target" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.revisionTarget"></a>

```python
revision_target: str
```

- *Type:* str

The identifier of the database revision. You can retrieve this value from the response to the DescribeClusterDbRevisions request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#revision_target RedshiftCluster#revision_target}

---

##### `rotate_encryption_key`<sup>Optional</sup> <a name="rotate_encryption_key" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.rotateEncryptionKey"></a>

```python
rotate_encryption_key: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A boolean indicating if we want to rotate Encryption Keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#rotate_encryption_key RedshiftCluster#rotate_encryption_key}

---

##### `snapshot_cluster_identifier`<sup>Optional</sup> <a name="snapshot_cluster_identifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.snapshotClusterIdentifier"></a>

```python
snapshot_cluster_identifier: str
```

- *Type:* str

The name of the cluster the source snapshot was created from.

This parameter is required if your IAM user has a policy containing a snapshot resource element that specifies anything other than * for the cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#snapshot_cluster_identifier RedshiftCluster#snapshot_cluster_identifier}

---

##### `snapshot_copy_grant_name`<sup>Optional</sup> <a name="snapshot_copy_grant_name" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.snapshotCopyGrantName"></a>

```python
snapshot_copy_grant_name: str
```

- *Type:* str

The name of the snapshot copy grant to use when snapshots of an AWS KMS-encrypted cluster are copied to the destination region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#snapshot_copy_grant_name RedshiftCluster#snapshot_copy_grant_name}

---

##### `snapshot_copy_manual`<sup>Optional</sup> <a name="snapshot_copy_manual" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.snapshotCopyManual"></a>

```python
snapshot_copy_manual: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether to apply the snapshot retention period to newly copied manual snapshots instead of automated snapshots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#snapshot_copy_manual RedshiftCluster#snapshot_copy_manual}

---

##### `snapshot_copy_retention_period`<sup>Optional</sup> <a name="snapshot_copy_retention_period" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.snapshotCopyRetentionPeriod"></a>

```python
snapshot_copy_retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of days to retain automated snapshots in the destination region after they are copied from the source region.

Default is 7.

Constraints: Must be at least 1 and no more than 35.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#snapshot_copy_retention_period RedshiftCluster#snapshot_copy_retention_period}

---

##### `snapshot_identifier`<sup>Optional</sup> <a name="snapshot_identifier" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.snapshotIdentifier"></a>

```python
snapshot_identifier: str
```

- *Type:* str

The name of the snapshot from which to create the new cluster. This parameter isn't case sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#snapshot_identifier RedshiftCluster#snapshot_identifier}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[RedshiftClusterTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags">RedshiftClusterTags</a>]

The list of tags for the cluster parameter group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#tags RedshiftCluster#tags}

---

##### `vpc_security_group_ids`<sup>Optional</sup> <a name="vpc_security_group_ids" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterConfig.property.vpcSecurityGroupIds"></a>

```python
vpc_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

A list of Virtual Private Cloud (VPC) security groups to be associated with the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#vpc_security_group_ids RedshiftCluster#vpc_security_group_ids}

---

### RedshiftClusterEndpoint <a name="RedshiftClusterEndpoint" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpoint.Initializer"></a>

```python
from cdktn_provider_awscc import redshift_cluster

redshiftCluster.RedshiftClusterEndpoint()
```


### RedshiftClusterLoggingProperties <a name="RedshiftClusterLoggingProperties" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties.Initializer"></a>

```python
from cdktn_provider_awscc import redshift_cluster

redshiftCluster.RedshiftClusterLoggingProperties(
  bucket_name: str = None,
  log_destination_type: str = None,
  log_exports: typing.List[str] = None,
  s3_key_prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties.property.bucketName">bucket_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#bucket_name RedshiftCluster#bucket_name}. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties.property.logDestinationType">log_destination_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#log_destination_type RedshiftCluster#log_destination_type}. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties.property.logExports">log_exports</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#log_exports RedshiftCluster#log_exports}. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties.property.s3KeyPrefix">s3_key_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#s3_key_prefix RedshiftCluster#s3_key_prefix}. |

---

##### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#bucket_name RedshiftCluster#bucket_name}.

---

##### `log_destination_type`<sup>Optional</sup> <a name="log_destination_type" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties.property.logDestinationType"></a>

```python
log_destination_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#log_destination_type RedshiftCluster#log_destination_type}.

---

##### `log_exports`<sup>Optional</sup> <a name="log_exports" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties.property.logExports"></a>

```python
log_exports: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#log_exports RedshiftCluster#log_exports}.

---

##### `s3_key_prefix`<sup>Optional</sup> <a name="s3_key_prefix" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties.property.s3KeyPrefix"></a>

```python
s3_key_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#s3_key_prefix RedshiftCluster#s3_key_prefix}.

---

### RedshiftClusterTags <a name="RedshiftClusterTags" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags.Initializer"></a>

```python
from cdktn_provider_awscc import redshift_cluster

redshiftCluster.RedshiftClusterTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#key RedshiftCluster#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/redshift_cluster#value RedshiftCluster#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RedshiftClusterEndpointOutputReference <a name="RedshiftClusterEndpointOutputReference" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import redshift_cluster

redshiftCluster.RedshiftClusterEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.property.port">port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpoint">RedshiftClusterEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.property.port"></a>

```python
port: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpointOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RedshiftClusterEndpoint
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterEndpoint">RedshiftClusterEndpoint</a>

---


### RedshiftClusterLoggingPropertiesOutputReference <a name="RedshiftClusterLoggingPropertiesOutputReference" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import redshift_cluster

redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.resetBucketName">reset_bucket_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.resetLogDestinationType">reset_log_destination_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.resetLogExports">reset_log_exports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.resetS3KeyPrefix">reset_s3_key_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket_name` <a name="reset_bucket_name" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.resetBucketName"></a>

```python
def reset_bucket_name() -> None
```

##### `reset_log_destination_type` <a name="reset_log_destination_type" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.resetLogDestinationType"></a>

```python
def reset_log_destination_type() -> None
```

##### `reset_log_exports` <a name="reset_log_exports" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.resetLogExports"></a>

```python
def reset_log_exports() -> None
```

##### `reset_s3_key_prefix` <a name="reset_s3_key_prefix" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.resetS3KeyPrefix"></a>

```python
def reset_s3_key_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.logDestinationTypeInput">log_destination_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.logExportsInput">log_exports_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.s3KeyPrefixInput">s3_key_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.logDestinationType">log_destination_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.logExports">log_exports</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.s3KeyPrefix">s3_key_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties">RedshiftClusterLoggingProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `log_destination_type_input`<sup>Optional</sup> <a name="log_destination_type_input" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.logDestinationTypeInput"></a>

```python
log_destination_type_input: str
```

- *Type:* str

---

##### `log_exports_input`<sup>Optional</sup> <a name="log_exports_input" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.logExportsInput"></a>

```python
log_exports_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `s3_key_prefix_input`<sup>Optional</sup> <a name="s3_key_prefix_input" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.s3KeyPrefixInput"></a>

```python
s3_key_prefix_input: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `log_destination_type`<sup>Required</sup> <a name="log_destination_type" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.logDestinationType"></a>

```python
log_destination_type: str
```

- *Type:* str

---

##### `log_exports`<sup>Required</sup> <a name="log_exports" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.logExports"></a>

```python
log_exports: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `s3_key_prefix`<sup>Required</sup> <a name="s3_key_prefix" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.s3KeyPrefix"></a>

```python
s3_key_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RedshiftClusterLoggingProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterLoggingProperties">RedshiftClusterLoggingProperties</a>

---


### RedshiftClusterTagsList <a name="RedshiftClusterTagsList" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import redshift_cluster

redshiftCluster.RedshiftClusterTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RedshiftClusterTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags">RedshiftClusterTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RedshiftClusterTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags">RedshiftClusterTags</a>]

---


### RedshiftClusterTagsOutputReference <a name="RedshiftClusterTagsOutputReference" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import redshift_cluster

redshiftCluster.RedshiftClusterTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags">RedshiftClusterTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RedshiftClusterTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftCluster.RedshiftClusterTags">RedshiftClusterTags</a>

---



