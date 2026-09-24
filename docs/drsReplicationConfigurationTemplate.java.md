# `drsReplicationConfigurationTemplate` Submodule <a name="`drsReplicationConfigurationTemplate` Submodule" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DrsReplicationConfigurationTemplate <a name="DrsReplicationConfigurationTemplate" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template awscc_drs_replication_configuration_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer"></a>

```java
import io.cdktn.providers.awscc.drs_replication_configuration_template.DrsReplicationConfigurationTemplate;

DrsReplicationConfigurationTemplate.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .bandwidthThrottling(java.lang.Number)
    .ebsEncryption(java.lang.String)
    .pitPolicy(IResolvable|java.util.List<DrsReplicationConfigurationTemplatePitPolicy>)
    .replicationServersSecurityGroupsIDs(java.util.List<java.lang.String>)
    .stagingAreaSubnetId(java.lang.String)
    .stagingAreaTags(java.util.Map<java.lang.String, java.lang.String>)
//  .associateDefaultSecurityGroup(java.lang.Boolean|IResolvable)
//  .autoReplicateNewDisks(java.lang.Boolean|IResolvable)
//  .createPublicIp(java.lang.Boolean|IResolvable)
//  .dataPlaneRouting(java.lang.String)
//  .defaultLargeStagingDiskType(java.lang.String)
//  .ebsEncryptionKeyArn(java.lang.String)
//  .internetProtocol(java.lang.String)
//  .replicationServerInstanceType(java.lang.String)
//  .tags(IResolvable|java.util.List<DrsReplicationConfigurationTemplateTags>)
//  .useDedicatedReplicationServer(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.bandwidthThrottling">bandwidthThrottling</a></code> | <code>java.lang.Number</code> | Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.ebsEncryption">ebsEncryption</a></code> | <code>java.lang.String</code> | The type of EBS encryption to be used during replication. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.pitPolicy">pitPolicy</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy">DrsReplicationConfigurationTemplatePitPolicy</a>></code> | The Point in time (PIT) policy to manage snapshots taken during replication. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.replicationServersSecurityGroupsIDs">replicationServersSecurityGroupsIDs</a></code> | <code>java.util.List<java.lang.String></code> | The security group IDs that will be used by the replication server. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.stagingAreaSubnetId">stagingAreaSubnetId</a></code> | <code>java.lang.String</code> | The subnet to be used by the replication staging area. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.stagingAreaTags">stagingAreaTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.associateDefaultSecurityGroup">associateDefaultSecurityGroup</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration Template. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.autoReplicateNewDisks">autoReplicateNewDisks</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to allow the AWS replication agent to automatically replicate newly added disks. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.createPublicIp">createPublicIp</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to create a Public IP for the Recovery Instance by default. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.dataPlaneRouting">dataPlaneRouting</a></code> | <code>java.lang.String</code> | The data plane routing mechanism that will be used for replication. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.defaultLargeStagingDiskType">defaultLargeStagingDiskType</a></code> | <code>java.lang.String</code> | The Staging Disk EBS volume type to be used during replication. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.ebsEncryptionKeyArn">ebsEncryptionKeyArn</a></code> | <code>java.lang.String</code> | The ARN of the EBS encryption key to be used during replication. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.internetProtocol">internetProtocol</a></code> | <code>java.lang.String</code> | Which version of the Internet Protocol to use for replication of data. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.replicationServerInstanceType">replicationServerInstanceType</a></code> | <code>java.lang.String</code> | The instance type to be used for the replication server. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags">DrsReplicationConfigurationTemplateTags</a>></code> | A set of tags to be associated with the Replication Configuration Template resource. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.useDedicatedReplicationServer">useDedicatedReplicationServer</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to use a dedicated Replication Server in the replication staging area. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `bandwidthThrottling`<sup>Required</sup> <a name="bandwidthThrottling" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.bandwidthThrottling"></a>

- *Type:* java.lang.Number

Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#bandwidth_throttling DrsReplicationConfigurationTemplate#bandwidth_throttling}

---

##### `ebsEncryption`<sup>Required</sup> <a name="ebsEncryption" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.ebsEncryption"></a>

- *Type:* java.lang.String

The type of EBS encryption to be used during replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#ebs_encryption DrsReplicationConfigurationTemplate#ebs_encryption}

---

##### `pitPolicy`<sup>Required</sup> <a name="pitPolicy" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.pitPolicy"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy">DrsReplicationConfigurationTemplatePitPolicy</a>>

The Point in time (PIT) policy to manage snapshots taken during replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#pit_policy DrsReplicationConfigurationTemplate#pit_policy}

---

##### `replicationServersSecurityGroupsIDs`<sup>Required</sup> <a name="replicationServersSecurityGroupsIDs" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.replicationServersSecurityGroupsIDs"></a>

- *Type:* java.util.List<java.lang.String>

The security group IDs that will be used by the replication server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#replication_servers_security_groups_i_ds DrsReplicationConfigurationTemplate#replication_servers_security_groups_i_ds}

---

##### `stagingAreaSubnetId`<sup>Required</sup> <a name="stagingAreaSubnetId" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.stagingAreaSubnetId"></a>

- *Type:* java.lang.String

The subnet to be used by the replication staging area.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#staging_area_subnet_id DrsReplicationConfigurationTemplate#staging_area_subnet_id}

---

##### `stagingAreaTags`<sup>Required</sup> <a name="stagingAreaTags" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.stagingAreaTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#staging_area_tags DrsReplicationConfigurationTemplate#staging_area_tags}

---

##### `associateDefaultSecurityGroup`<sup>Optional</sup> <a name="associateDefaultSecurityGroup" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.associateDefaultSecurityGroup"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#associate_default_security_group DrsReplicationConfigurationTemplate#associate_default_security_group}

---

##### `autoReplicateNewDisks`<sup>Optional</sup> <a name="autoReplicateNewDisks" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.autoReplicateNewDisks"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to allow the AWS replication agent to automatically replicate newly added disks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#auto_replicate_new_disks DrsReplicationConfigurationTemplate#auto_replicate_new_disks}

---

##### `createPublicIp`<sup>Optional</sup> <a name="createPublicIp" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.createPublicIp"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to create a Public IP for the Recovery Instance by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#create_public_ip DrsReplicationConfigurationTemplate#create_public_ip}

---

##### `dataPlaneRouting`<sup>Optional</sup> <a name="dataPlaneRouting" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.dataPlaneRouting"></a>

- *Type:* java.lang.String

The data plane routing mechanism that will be used for replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#data_plane_routing DrsReplicationConfigurationTemplate#data_plane_routing}

---

##### `defaultLargeStagingDiskType`<sup>Optional</sup> <a name="defaultLargeStagingDiskType" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.defaultLargeStagingDiskType"></a>

- *Type:* java.lang.String

The Staging Disk EBS volume type to be used during replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#default_large_staging_disk_type DrsReplicationConfigurationTemplate#default_large_staging_disk_type}

---

##### `ebsEncryptionKeyArn`<sup>Optional</sup> <a name="ebsEncryptionKeyArn" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.ebsEncryptionKeyArn"></a>

- *Type:* java.lang.String

The ARN of the EBS encryption key to be used during replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#ebs_encryption_key_arn DrsReplicationConfigurationTemplate#ebs_encryption_key_arn}

---

##### `internetProtocol`<sup>Optional</sup> <a name="internetProtocol" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.internetProtocol"></a>

- *Type:* java.lang.String

Which version of the Internet Protocol to use for replication of data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#internet_protocol DrsReplicationConfigurationTemplate#internet_protocol}

---

##### `replicationServerInstanceType`<sup>Optional</sup> <a name="replicationServerInstanceType" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.replicationServerInstanceType"></a>

- *Type:* java.lang.String

The instance type to be used for the replication server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#replication_server_instance_type DrsReplicationConfigurationTemplate#replication_server_instance_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags">DrsReplicationConfigurationTemplateTags</a>>

A set of tags to be associated with the Replication Configuration Template resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#tags DrsReplicationConfigurationTemplate#tags}

---

##### `useDedicatedReplicationServer`<sup>Optional</sup> <a name="useDedicatedReplicationServer" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.Initializer.parameter.useDedicatedReplicationServer"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to use a dedicated Replication Server in the replication staging area.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#use_dedicated_replication_server DrsReplicationConfigurationTemplate#use_dedicated_replication_server}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.putPitPolicy">putPitPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetAssociateDefaultSecurityGroup">resetAssociateDefaultSecurityGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetAutoReplicateNewDisks">resetAutoReplicateNewDisks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetCreatePublicIp">resetCreatePublicIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetDataPlaneRouting">resetDataPlaneRouting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetDefaultLargeStagingDiskType">resetDefaultLargeStagingDiskType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetEbsEncryptionKeyArn">resetEbsEncryptionKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetInternetProtocol">resetInternetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetReplicationServerInstanceType">resetReplicationServerInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetUseDedicatedReplicationServer">resetUseDedicatedReplicationServer</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPitPolicy` <a name="putPitPolicy" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.putPitPolicy"></a>

```java
public void putPitPolicy(IResolvable|java.util.List<DrsReplicationConfigurationTemplatePitPolicy> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.putPitPolicy.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy">DrsReplicationConfigurationTemplatePitPolicy</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<DrsReplicationConfigurationTemplateTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags">DrsReplicationConfigurationTemplateTags</a>>

---

##### `resetAssociateDefaultSecurityGroup` <a name="resetAssociateDefaultSecurityGroup" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetAssociateDefaultSecurityGroup"></a>

```java
public void resetAssociateDefaultSecurityGroup()
```

##### `resetAutoReplicateNewDisks` <a name="resetAutoReplicateNewDisks" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetAutoReplicateNewDisks"></a>

```java
public void resetAutoReplicateNewDisks()
```

##### `resetCreatePublicIp` <a name="resetCreatePublicIp" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetCreatePublicIp"></a>

```java
public void resetCreatePublicIp()
```

##### `resetDataPlaneRouting` <a name="resetDataPlaneRouting" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetDataPlaneRouting"></a>

```java
public void resetDataPlaneRouting()
```

##### `resetDefaultLargeStagingDiskType` <a name="resetDefaultLargeStagingDiskType" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetDefaultLargeStagingDiskType"></a>

```java
public void resetDefaultLargeStagingDiskType()
```

##### `resetEbsEncryptionKeyArn` <a name="resetEbsEncryptionKeyArn" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetEbsEncryptionKeyArn"></a>

```java
public void resetEbsEncryptionKeyArn()
```

##### `resetInternetProtocol` <a name="resetInternetProtocol" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetInternetProtocol"></a>

```java
public void resetInternetProtocol()
```

##### `resetReplicationServerInstanceType` <a name="resetReplicationServerInstanceType" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetReplicationServerInstanceType"></a>

```java
public void resetReplicationServerInstanceType()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetTags"></a>

```java
public void resetTags()
```

##### `resetUseDedicatedReplicationServer` <a name="resetUseDedicatedReplicationServer" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.resetUseDedicatedReplicationServer"></a>

```java
public void resetUseDedicatedReplicationServer()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DrsReplicationConfigurationTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.isConstruct"></a>

```java
import io.cdktn.providers.awscc.drs_replication_configuration_template.DrsReplicationConfigurationTemplate;

DrsReplicationConfigurationTemplate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.drs_replication_configuration_template.DrsReplicationConfigurationTemplate;

DrsReplicationConfigurationTemplate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.drs_replication_configuration_template.DrsReplicationConfigurationTemplate;

DrsReplicationConfigurationTemplate.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.drs_replication_configuration_template.DrsReplicationConfigurationTemplate;

DrsReplicationConfigurationTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DrsReplicationConfigurationTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DrsReplicationConfigurationTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DrsReplicationConfigurationTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DrsReplicationConfigurationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DrsReplicationConfigurationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.pitPolicy">pitPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList">DrsReplicationConfigurationTemplatePitPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.replicationConfigurationTemplateId">replicationConfigurationTemplateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList">DrsReplicationConfigurationTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.associateDefaultSecurityGroupInput">associateDefaultSecurityGroupInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.autoReplicateNewDisksInput">autoReplicateNewDisksInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.bandwidthThrottlingInput">bandwidthThrottlingInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.createPublicIpInput">createPublicIpInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.dataPlaneRoutingInput">dataPlaneRoutingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.defaultLargeStagingDiskTypeInput">defaultLargeStagingDiskTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.ebsEncryptionInput">ebsEncryptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.ebsEncryptionKeyArnInput">ebsEncryptionKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.internetProtocolInput">internetProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.pitPolicyInput">pitPolicyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy">DrsReplicationConfigurationTemplatePitPolicy</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.replicationServerInstanceTypeInput">replicationServerInstanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.replicationServersSecurityGroupsIDsInput">replicationServersSecurityGroupsIDsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.stagingAreaSubnetIdInput">stagingAreaSubnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.stagingAreaTagsInput">stagingAreaTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags">DrsReplicationConfigurationTemplateTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.useDedicatedReplicationServerInput">useDedicatedReplicationServerInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.associateDefaultSecurityGroup">associateDefaultSecurityGroup</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.autoReplicateNewDisks">autoReplicateNewDisks</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.bandwidthThrottling">bandwidthThrottling</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.createPublicIp">createPublicIp</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.dataPlaneRouting">dataPlaneRouting</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.defaultLargeStagingDiskType">defaultLargeStagingDiskType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.ebsEncryption">ebsEncryption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.ebsEncryptionKeyArn">ebsEncryptionKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.internetProtocol">internetProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.replicationServerInstanceType">replicationServerInstanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.replicationServersSecurityGroupsIDs">replicationServersSecurityGroupsIDs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.stagingAreaSubnetId">stagingAreaSubnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.stagingAreaTags">stagingAreaTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.useDedicatedReplicationServer">useDedicatedReplicationServer</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `pitPolicy`<sup>Required</sup> <a name="pitPolicy" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.pitPolicy"></a>

```java
public DrsReplicationConfigurationTemplatePitPolicyList getPitPolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList">DrsReplicationConfigurationTemplatePitPolicyList</a>

---

##### `replicationConfigurationTemplateId`<sup>Required</sup> <a name="replicationConfigurationTemplateId" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.replicationConfigurationTemplateId"></a>

```java
public java.lang.String getReplicationConfigurationTemplateId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.tags"></a>

```java
public DrsReplicationConfigurationTemplateTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList">DrsReplicationConfigurationTemplateTagsList</a>

---

##### `associateDefaultSecurityGroupInput`<sup>Optional</sup> <a name="associateDefaultSecurityGroupInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.associateDefaultSecurityGroupInput"></a>

```java
public java.lang.Boolean|IResolvable getAssociateDefaultSecurityGroupInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `autoReplicateNewDisksInput`<sup>Optional</sup> <a name="autoReplicateNewDisksInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.autoReplicateNewDisksInput"></a>

```java
public java.lang.Boolean|IResolvable getAutoReplicateNewDisksInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `bandwidthThrottlingInput`<sup>Optional</sup> <a name="bandwidthThrottlingInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.bandwidthThrottlingInput"></a>

```java
public java.lang.Number getBandwidthThrottlingInput();
```

- *Type:* java.lang.Number

---

##### `createPublicIpInput`<sup>Optional</sup> <a name="createPublicIpInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.createPublicIpInput"></a>

```java
public java.lang.Boolean|IResolvable getCreatePublicIpInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `dataPlaneRoutingInput`<sup>Optional</sup> <a name="dataPlaneRoutingInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.dataPlaneRoutingInput"></a>

```java
public java.lang.String getDataPlaneRoutingInput();
```

- *Type:* java.lang.String

---

##### `defaultLargeStagingDiskTypeInput`<sup>Optional</sup> <a name="defaultLargeStagingDiskTypeInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.defaultLargeStagingDiskTypeInput"></a>

```java
public java.lang.String getDefaultLargeStagingDiskTypeInput();
```

- *Type:* java.lang.String

---

##### `ebsEncryptionInput`<sup>Optional</sup> <a name="ebsEncryptionInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.ebsEncryptionInput"></a>

```java
public java.lang.String getEbsEncryptionInput();
```

- *Type:* java.lang.String

---

##### `ebsEncryptionKeyArnInput`<sup>Optional</sup> <a name="ebsEncryptionKeyArnInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.ebsEncryptionKeyArnInput"></a>

```java
public java.lang.String getEbsEncryptionKeyArnInput();
```

- *Type:* java.lang.String

---

##### `internetProtocolInput`<sup>Optional</sup> <a name="internetProtocolInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.internetProtocolInput"></a>

```java
public java.lang.String getInternetProtocolInput();
```

- *Type:* java.lang.String

---

##### `pitPolicyInput`<sup>Optional</sup> <a name="pitPolicyInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.pitPolicyInput"></a>

```java
public IResolvable|java.util.List<DrsReplicationConfigurationTemplatePitPolicy> getPitPolicyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy">DrsReplicationConfigurationTemplatePitPolicy</a>>

---

##### `replicationServerInstanceTypeInput`<sup>Optional</sup> <a name="replicationServerInstanceTypeInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.replicationServerInstanceTypeInput"></a>

```java
public java.lang.String getReplicationServerInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `replicationServersSecurityGroupsIDsInput`<sup>Optional</sup> <a name="replicationServersSecurityGroupsIDsInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.replicationServersSecurityGroupsIDsInput"></a>

```java
public java.util.List<java.lang.String> getReplicationServersSecurityGroupsIDsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `stagingAreaSubnetIdInput`<sup>Optional</sup> <a name="stagingAreaSubnetIdInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.stagingAreaSubnetIdInput"></a>

```java
public java.lang.String getStagingAreaSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `stagingAreaTagsInput`<sup>Optional</sup> <a name="stagingAreaTagsInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.stagingAreaTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStagingAreaTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.tagsInput"></a>

```java
public IResolvable|java.util.List<DrsReplicationConfigurationTemplateTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags">DrsReplicationConfigurationTemplateTags</a>>

---

##### `useDedicatedReplicationServerInput`<sup>Optional</sup> <a name="useDedicatedReplicationServerInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.useDedicatedReplicationServerInput"></a>

```java
public java.lang.Boolean|IResolvable getUseDedicatedReplicationServerInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `associateDefaultSecurityGroup`<sup>Required</sup> <a name="associateDefaultSecurityGroup" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.associateDefaultSecurityGroup"></a>

```java
public java.lang.Boolean|IResolvable getAssociateDefaultSecurityGroup();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `autoReplicateNewDisks`<sup>Required</sup> <a name="autoReplicateNewDisks" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.autoReplicateNewDisks"></a>

```java
public java.lang.Boolean|IResolvable getAutoReplicateNewDisks();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `bandwidthThrottling`<sup>Required</sup> <a name="bandwidthThrottling" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.bandwidthThrottling"></a>

```java
public java.lang.Number getBandwidthThrottling();
```

- *Type:* java.lang.Number

---

##### `createPublicIp`<sup>Required</sup> <a name="createPublicIp" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.createPublicIp"></a>

```java
public java.lang.Boolean|IResolvable getCreatePublicIp();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `dataPlaneRouting`<sup>Required</sup> <a name="dataPlaneRouting" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.dataPlaneRouting"></a>

```java
public java.lang.String getDataPlaneRouting();
```

- *Type:* java.lang.String

---

##### `defaultLargeStagingDiskType`<sup>Required</sup> <a name="defaultLargeStagingDiskType" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.defaultLargeStagingDiskType"></a>

```java
public java.lang.String getDefaultLargeStagingDiskType();
```

- *Type:* java.lang.String

---

##### `ebsEncryption`<sup>Required</sup> <a name="ebsEncryption" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.ebsEncryption"></a>

```java
public java.lang.String getEbsEncryption();
```

- *Type:* java.lang.String

---

##### `ebsEncryptionKeyArn`<sup>Required</sup> <a name="ebsEncryptionKeyArn" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.ebsEncryptionKeyArn"></a>

```java
public java.lang.String getEbsEncryptionKeyArn();
```

- *Type:* java.lang.String

---

##### `internetProtocol`<sup>Required</sup> <a name="internetProtocol" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.internetProtocol"></a>

```java
public java.lang.String getInternetProtocol();
```

- *Type:* java.lang.String

---

##### `replicationServerInstanceType`<sup>Required</sup> <a name="replicationServerInstanceType" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.replicationServerInstanceType"></a>

```java
public java.lang.String getReplicationServerInstanceType();
```

- *Type:* java.lang.String

---

##### `replicationServersSecurityGroupsIDs`<sup>Required</sup> <a name="replicationServersSecurityGroupsIDs" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.replicationServersSecurityGroupsIDs"></a>

```java
public java.util.List<java.lang.String> getReplicationServersSecurityGroupsIDs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `stagingAreaSubnetId`<sup>Required</sup> <a name="stagingAreaSubnetId" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.stagingAreaSubnetId"></a>

```java
public java.lang.String getStagingAreaSubnetId();
```

- *Type:* java.lang.String

---

##### `stagingAreaTags`<sup>Required</sup> <a name="stagingAreaTags" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.stagingAreaTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStagingAreaTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `useDedicatedReplicationServer`<sup>Required</sup> <a name="useDedicatedReplicationServer" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.useDedicatedReplicationServer"></a>

```java
public java.lang.Boolean|IResolvable getUseDedicatedReplicationServer();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DrsReplicationConfigurationTemplateConfig <a name="DrsReplicationConfigurationTemplateConfig" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.drs_replication_configuration_template.DrsReplicationConfigurationTemplateConfig;

DrsReplicationConfigurationTemplateConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .bandwidthThrottling(java.lang.Number)
    .ebsEncryption(java.lang.String)
    .pitPolicy(IResolvable|java.util.List<DrsReplicationConfigurationTemplatePitPolicy>)
    .replicationServersSecurityGroupsIDs(java.util.List<java.lang.String>)
    .stagingAreaSubnetId(java.lang.String)
    .stagingAreaTags(java.util.Map<java.lang.String, java.lang.String>)
//  .associateDefaultSecurityGroup(java.lang.Boolean|IResolvable)
//  .autoReplicateNewDisks(java.lang.Boolean|IResolvable)
//  .createPublicIp(java.lang.Boolean|IResolvable)
//  .dataPlaneRouting(java.lang.String)
//  .defaultLargeStagingDiskType(java.lang.String)
//  .ebsEncryptionKeyArn(java.lang.String)
//  .internetProtocol(java.lang.String)
//  .replicationServerInstanceType(java.lang.String)
//  .tags(IResolvable|java.util.List<DrsReplicationConfigurationTemplateTags>)
//  .useDedicatedReplicationServer(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.bandwidthThrottling">bandwidthThrottling</a></code> | <code>java.lang.Number</code> | Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.ebsEncryption">ebsEncryption</a></code> | <code>java.lang.String</code> | The type of EBS encryption to be used during replication. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.pitPolicy">pitPolicy</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy">DrsReplicationConfigurationTemplatePitPolicy</a>></code> | The Point in time (PIT) policy to manage snapshots taken during replication. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.replicationServersSecurityGroupsIDs">replicationServersSecurityGroupsIDs</a></code> | <code>java.util.List<java.lang.String></code> | The security group IDs that will be used by the replication server. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.stagingAreaSubnetId">stagingAreaSubnetId</a></code> | <code>java.lang.String</code> | The subnet to be used by the replication staging area. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.stagingAreaTags">stagingAreaTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.associateDefaultSecurityGroup">associateDefaultSecurityGroup</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration Template. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.autoReplicateNewDisks">autoReplicateNewDisks</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to allow the AWS replication agent to automatically replicate newly added disks. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.createPublicIp">createPublicIp</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to create a Public IP for the Recovery Instance by default. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.dataPlaneRouting">dataPlaneRouting</a></code> | <code>java.lang.String</code> | The data plane routing mechanism that will be used for replication. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.defaultLargeStagingDiskType">defaultLargeStagingDiskType</a></code> | <code>java.lang.String</code> | The Staging Disk EBS volume type to be used during replication. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.ebsEncryptionKeyArn">ebsEncryptionKeyArn</a></code> | <code>java.lang.String</code> | The ARN of the EBS encryption key to be used during replication. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.internetProtocol">internetProtocol</a></code> | <code>java.lang.String</code> | Which version of the Internet Protocol to use for replication of data. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.replicationServerInstanceType">replicationServerInstanceType</a></code> | <code>java.lang.String</code> | The instance type to be used for the replication server. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags">DrsReplicationConfigurationTemplateTags</a>></code> | A set of tags to be associated with the Replication Configuration Template resource. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.useDedicatedReplicationServer">useDedicatedReplicationServer</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to use a dedicated Replication Server in the replication staging area. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `bandwidthThrottling`<sup>Required</sup> <a name="bandwidthThrottling" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.bandwidthThrottling"></a>

```java
public java.lang.Number getBandwidthThrottling();
```

- *Type:* java.lang.Number

Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#bandwidth_throttling DrsReplicationConfigurationTemplate#bandwidth_throttling}

---

##### `ebsEncryption`<sup>Required</sup> <a name="ebsEncryption" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.ebsEncryption"></a>

```java
public java.lang.String getEbsEncryption();
```

- *Type:* java.lang.String

The type of EBS encryption to be used during replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#ebs_encryption DrsReplicationConfigurationTemplate#ebs_encryption}

---

##### `pitPolicy`<sup>Required</sup> <a name="pitPolicy" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.pitPolicy"></a>

```java
public IResolvable|java.util.List<DrsReplicationConfigurationTemplatePitPolicy> getPitPolicy();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy">DrsReplicationConfigurationTemplatePitPolicy</a>>

The Point in time (PIT) policy to manage snapshots taken during replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#pit_policy DrsReplicationConfigurationTemplate#pit_policy}

---

##### `replicationServersSecurityGroupsIDs`<sup>Required</sup> <a name="replicationServersSecurityGroupsIDs" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.replicationServersSecurityGroupsIDs"></a>

```java
public java.util.List<java.lang.String> getReplicationServersSecurityGroupsIDs();
```

- *Type:* java.util.List<java.lang.String>

The security group IDs that will be used by the replication server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#replication_servers_security_groups_i_ds DrsReplicationConfigurationTemplate#replication_servers_security_groups_i_ds}

---

##### `stagingAreaSubnetId`<sup>Required</sup> <a name="stagingAreaSubnetId" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.stagingAreaSubnetId"></a>

```java
public java.lang.String getStagingAreaSubnetId();
```

- *Type:* java.lang.String

The subnet to be used by the replication staging area.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#staging_area_subnet_id DrsReplicationConfigurationTemplate#staging_area_subnet_id}

---

##### `stagingAreaTags`<sup>Required</sup> <a name="stagingAreaTags" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.stagingAreaTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStagingAreaTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#staging_area_tags DrsReplicationConfigurationTemplate#staging_area_tags}

---

##### `associateDefaultSecurityGroup`<sup>Optional</sup> <a name="associateDefaultSecurityGroup" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.associateDefaultSecurityGroup"></a>

```java
public java.lang.Boolean|IResolvable getAssociateDefaultSecurityGroup();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#associate_default_security_group DrsReplicationConfigurationTemplate#associate_default_security_group}

---

##### `autoReplicateNewDisks`<sup>Optional</sup> <a name="autoReplicateNewDisks" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.autoReplicateNewDisks"></a>

```java
public java.lang.Boolean|IResolvable getAutoReplicateNewDisks();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to allow the AWS replication agent to automatically replicate newly added disks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#auto_replicate_new_disks DrsReplicationConfigurationTemplate#auto_replicate_new_disks}

---

##### `createPublicIp`<sup>Optional</sup> <a name="createPublicIp" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.createPublicIp"></a>

```java
public java.lang.Boolean|IResolvable getCreatePublicIp();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to create a Public IP for the Recovery Instance by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#create_public_ip DrsReplicationConfigurationTemplate#create_public_ip}

---

##### `dataPlaneRouting`<sup>Optional</sup> <a name="dataPlaneRouting" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.dataPlaneRouting"></a>

```java
public java.lang.String getDataPlaneRouting();
```

- *Type:* java.lang.String

The data plane routing mechanism that will be used for replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#data_plane_routing DrsReplicationConfigurationTemplate#data_plane_routing}

---

##### `defaultLargeStagingDiskType`<sup>Optional</sup> <a name="defaultLargeStagingDiskType" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.defaultLargeStagingDiskType"></a>

```java
public java.lang.String getDefaultLargeStagingDiskType();
```

- *Type:* java.lang.String

The Staging Disk EBS volume type to be used during replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#default_large_staging_disk_type DrsReplicationConfigurationTemplate#default_large_staging_disk_type}

---

##### `ebsEncryptionKeyArn`<sup>Optional</sup> <a name="ebsEncryptionKeyArn" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.ebsEncryptionKeyArn"></a>

```java
public java.lang.String getEbsEncryptionKeyArn();
```

- *Type:* java.lang.String

The ARN of the EBS encryption key to be used during replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#ebs_encryption_key_arn DrsReplicationConfigurationTemplate#ebs_encryption_key_arn}

---

##### `internetProtocol`<sup>Optional</sup> <a name="internetProtocol" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.internetProtocol"></a>

```java
public java.lang.String getInternetProtocol();
```

- *Type:* java.lang.String

Which version of the Internet Protocol to use for replication of data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#internet_protocol DrsReplicationConfigurationTemplate#internet_protocol}

---

##### `replicationServerInstanceType`<sup>Optional</sup> <a name="replicationServerInstanceType" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.replicationServerInstanceType"></a>

```java
public java.lang.String getReplicationServerInstanceType();
```

- *Type:* java.lang.String

The instance type to be used for the replication server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#replication_server_instance_type DrsReplicationConfigurationTemplate#replication_server_instance_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.tags"></a>

```java
public IResolvable|java.util.List<DrsReplicationConfigurationTemplateTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags">DrsReplicationConfigurationTemplateTags</a>>

A set of tags to be associated with the Replication Configuration Template resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#tags DrsReplicationConfigurationTemplate#tags}

---

##### `useDedicatedReplicationServer`<sup>Optional</sup> <a name="useDedicatedReplicationServer" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateConfig.property.useDedicatedReplicationServer"></a>

```java
public java.lang.Boolean|IResolvable getUseDedicatedReplicationServer();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to use a dedicated Replication Server in the replication staging area.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#use_dedicated_replication_server DrsReplicationConfigurationTemplate#use_dedicated_replication_server}

---

### DrsReplicationConfigurationTemplatePitPolicy <a name="DrsReplicationConfigurationTemplatePitPolicy" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy.Initializer"></a>

```java
import io.cdktn.providers.awscc.drs_replication_configuration_template.DrsReplicationConfigurationTemplatePitPolicy;

DrsReplicationConfigurationTemplatePitPolicy.builder()
    .interval(java.lang.Number)
    .retentionDuration(java.lang.Number)
    .units(java.lang.String)
//  .enabled(java.lang.Boolean|IResolvable)
//  .ruleId(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy.property.interval">interval</a></code> | <code>java.lang.Number</code> | How often, in the chosen units, a snapshot should be taken. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy.property.retentionDuration">retentionDuration</a></code> | <code>java.lang.Number</code> | The duration to retain a snapshot for, in the chosen units. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy.property.units">units</a></code> | <code>java.lang.String</code> | The units used to measure the interval and retentionDuration. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether this rule is enabled or not. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy.property.ruleId">ruleId</a></code> | <code>java.lang.Number</code> | The ID of the rule. |

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

How often, in the chosen units, a snapshot should be taken.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#interval DrsReplicationConfigurationTemplate#interval}

---

##### `retentionDuration`<sup>Required</sup> <a name="retentionDuration" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy.property.retentionDuration"></a>

```java
public java.lang.Number getRetentionDuration();
```

- *Type:* java.lang.Number

The duration to retain a snapshot for, in the chosen units.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#retention_duration DrsReplicationConfigurationTemplate#retention_duration}

---

##### `units`<sup>Required</sup> <a name="units" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy.property.units"></a>

```java
public java.lang.String getUnits();
```

- *Type:* java.lang.String

The units used to measure the interval and retentionDuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#units DrsReplicationConfigurationTemplate#units}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether this rule is enabled or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#enabled DrsReplicationConfigurationTemplate#enabled}

---

##### `ruleId`<sup>Optional</sup> <a name="ruleId" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy.property.ruleId"></a>

```java
public java.lang.Number getRuleId();
```

- *Type:* java.lang.Number

The ID of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#rule_id DrsReplicationConfigurationTemplate#rule_id}

---

### DrsReplicationConfigurationTemplateTags <a name="DrsReplicationConfigurationTemplateTags" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.drs_replication_configuration_template.DrsReplicationConfigurationTemplateTags;

DrsReplicationConfigurationTemplateTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags.property.key">key</a></code> | <code>java.lang.String</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags.property.value">value</a></code> | <code>java.lang.String</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#key DrsReplicationConfigurationTemplate#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_replication_configuration_template#value DrsReplicationConfigurationTemplate#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DrsReplicationConfigurationTemplatePitPolicyList <a name="DrsReplicationConfigurationTemplatePitPolicyList" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.Initializer"></a>

```java
import io.cdktn.providers.awscc.drs_replication_configuration_template.DrsReplicationConfigurationTemplatePitPolicyList;

new DrsReplicationConfigurationTemplatePitPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.get"></a>

```java
public DrsReplicationConfigurationTemplatePitPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy">DrsReplicationConfigurationTemplatePitPolicy</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DrsReplicationConfigurationTemplatePitPolicy> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy">DrsReplicationConfigurationTemplatePitPolicy</a>>

---


### DrsReplicationConfigurationTemplatePitPolicyOutputReference <a name="DrsReplicationConfigurationTemplatePitPolicyOutputReference" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.drs_replication_configuration_template.DrsReplicationConfigurationTemplatePitPolicyOutputReference;

new DrsReplicationConfigurationTemplatePitPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.resetRuleId">resetRuleId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetRuleId` <a name="resetRuleId" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.resetRuleId"></a>

```java
public void resetRuleId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.intervalInput">intervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.retentionDurationInput">retentionDurationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.ruleIdInput">ruleIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.unitsInput">unitsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.interval">interval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.retentionDuration">retentionDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.ruleId">ruleId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.units">units</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy">DrsReplicationConfigurationTemplatePitPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.intervalInput"></a>

```java
public java.lang.Number getIntervalInput();
```

- *Type:* java.lang.Number

---

##### `retentionDurationInput`<sup>Optional</sup> <a name="retentionDurationInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.retentionDurationInput"></a>

```java
public java.lang.Number getRetentionDurationInput();
```

- *Type:* java.lang.Number

---

##### `ruleIdInput`<sup>Optional</sup> <a name="ruleIdInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.ruleIdInput"></a>

```java
public java.lang.Number getRuleIdInput();
```

- *Type:* java.lang.Number

---

##### `unitsInput`<sup>Optional</sup> <a name="unitsInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.unitsInput"></a>

```java
public java.lang.String getUnitsInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

---

##### `retentionDuration`<sup>Required</sup> <a name="retentionDuration" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.retentionDuration"></a>

```java
public java.lang.Number getRetentionDuration();
```

- *Type:* java.lang.Number

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.ruleId"></a>

```java
public java.lang.Number getRuleId();
```

- *Type:* java.lang.Number

---

##### `units`<sup>Required</sup> <a name="units" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.units"></a>

```java
public java.lang.String getUnits();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicyOutputReference.property.internalValue"></a>

```java
public IResolvable|DrsReplicationConfigurationTemplatePitPolicy getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplatePitPolicy">DrsReplicationConfigurationTemplatePitPolicy</a>

---


### DrsReplicationConfigurationTemplateTagsList <a name="DrsReplicationConfigurationTemplateTagsList" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.drs_replication_configuration_template.DrsReplicationConfigurationTemplateTagsList;

new DrsReplicationConfigurationTemplateTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.get"></a>

```java
public DrsReplicationConfigurationTemplateTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags">DrsReplicationConfigurationTemplateTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DrsReplicationConfigurationTemplateTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags">DrsReplicationConfigurationTemplateTags</a>>

---


### DrsReplicationConfigurationTemplateTagsOutputReference <a name="DrsReplicationConfigurationTemplateTagsOutputReference" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.drs_replication_configuration_template.DrsReplicationConfigurationTemplateTagsOutputReference;

new DrsReplicationConfigurationTemplateTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags">DrsReplicationConfigurationTemplateTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|DrsReplicationConfigurationTemplateTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.drsReplicationConfigurationTemplate.DrsReplicationConfigurationTemplateTags">DrsReplicationConfigurationTemplateTags</a>

---



