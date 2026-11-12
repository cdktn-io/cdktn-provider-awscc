# `mgnReplicationConfigurationTemplate` Submodule <a name="`mgnReplicationConfigurationTemplate` Submodule" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MgnReplicationConfigurationTemplate <a name="MgnReplicationConfigurationTemplate" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template awscc_mgn_replication_configuration_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer"></a>

```java
import io.cdktn.providers.awscc.mgn_replication_configuration_template.MgnReplicationConfigurationTemplate;

MgnReplicationConfigurationTemplate.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .associateDefaultSecurityGroup(java.lang.Boolean|IResolvable)
    .bandwidthThrottling(java.lang.Number)
    .createPublicIp(java.lang.Boolean|IResolvable)
    .dataPlaneRouting(java.lang.String)
    .defaultLargeStagingDiskType(java.lang.String)
    .ebsEncryption(java.lang.String)
    .replicationServerInstanceType(java.lang.String)
    .replicationServersSecurityGroupsIDs(java.util.List<java.lang.String>)
    .stagingAreaSubnetId(java.lang.String)
    .stagingAreaTags(java.util.Map<java.lang.String, java.lang.String>)
    .useDedicatedReplicationServer(java.lang.Boolean|IResolvable)
//  .ebsEncryptionKeyArn(java.lang.String)
//  .internetProtocol(java.lang.String)
//  .storeSnapshotOnLocalZone(java.lang.Boolean|IResolvable)
//  .tags(IResolvable|java.util.List<MgnReplicationConfigurationTemplateTags>)
//  .useFipsEndpoint(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.associateDefaultSecurityGroup">associateDefaultSecurityGroup</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to associate the default Application Migration Service Security Group with the Replication Configuration Template. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.bandwidthThrottling">bandwidthThrottling</a></code> | <code>java.lang.Number</code> | Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.createPublicIp">createPublicIp</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to create a Public IP for the Recovery Instance by default. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.dataPlaneRouting">dataPlaneRouting</a></code> | <code>java.lang.String</code> | The data plane routing mechanism that will be used for replication. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.defaultLargeStagingDiskType">defaultLargeStagingDiskType</a></code> | <code>java.lang.String</code> | The Staging Disk EBS volume type to be used during replication. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.ebsEncryption">ebsEncryption</a></code> | <code>java.lang.String</code> | The type of EBS encryption to be used during replication. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.replicationServerInstanceType">replicationServerInstanceType</a></code> | <code>java.lang.String</code> | The instance type to be used for the replication server. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.replicationServersSecurityGroupsIDs">replicationServersSecurityGroupsIDs</a></code> | <code>java.util.List<java.lang.String></code> | The security group IDs that will be used by the replication server. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.stagingAreaSubnetId">stagingAreaSubnetId</a></code> | <code>java.lang.String</code> | The subnet to be used by the replication staging area. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.stagingAreaTags">stagingAreaTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.useDedicatedReplicationServer">useDedicatedReplicationServer</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to use a dedicated Replication Server in the replication staging area. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.ebsEncryptionKeyArn">ebsEncryptionKeyArn</a></code> | <code>java.lang.String</code> | The ARN of the EBS encryption key to be used during replication. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.internetProtocol">internetProtocol</a></code> | <code>java.lang.String</code> | Which internet protocol to use for replication of data. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.storeSnapshotOnLocalZone">storeSnapshotOnLocalZone</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to store the Snapshot in the Local Zone of the replication staging area subnet. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTags">MgnReplicationConfigurationTemplateTags</a>></code> | A set of tags to be associated with the Replication Configuration Template resource. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.useFipsEndpoint">useFipsEndpoint</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to use a FIPS endpoint when initiating the agent connection to the Application Migration Service service. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `associateDefaultSecurityGroup`<sup>Required</sup> <a name="associateDefaultSecurityGroup" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.associateDefaultSecurityGroup"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to associate the default Application Migration Service Security Group with the Replication Configuration Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#associate_default_security_group MgnReplicationConfigurationTemplate#associate_default_security_group}

---

##### `bandwidthThrottling`<sup>Required</sup> <a name="bandwidthThrottling" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.bandwidthThrottling"></a>

- *Type:* java.lang.Number

Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#bandwidth_throttling MgnReplicationConfigurationTemplate#bandwidth_throttling}

---

##### `createPublicIp`<sup>Required</sup> <a name="createPublicIp" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.createPublicIp"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to create a Public IP for the Recovery Instance by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#create_public_ip MgnReplicationConfigurationTemplate#create_public_ip}

---

##### `dataPlaneRouting`<sup>Required</sup> <a name="dataPlaneRouting" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.dataPlaneRouting"></a>

- *Type:* java.lang.String

The data plane routing mechanism that will be used for replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#data_plane_routing MgnReplicationConfigurationTemplate#data_plane_routing}

---

##### `defaultLargeStagingDiskType`<sup>Required</sup> <a name="defaultLargeStagingDiskType" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.defaultLargeStagingDiskType"></a>

- *Type:* java.lang.String

The Staging Disk EBS volume type to be used during replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#default_large_staging_disk_type MgnReplicationConfigurationTemplate#default_large_staging_disk_type}

---

##### `ebsEncryption`<sup>Required</sup> <a name="ebsEncryption" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.ebsEncryption"></a>

- *Type:* java.lang.String

The type of EBS encryption to be used during replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#ebs_encryption MgnReplicationConfigurationTemplate#ebs_encryption}

---

##### `replicationServerInstanceType`<sup>Required</sup> <a name="replicationServerInstanceType" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.replicationServerInstanceType"></a>

- *Type:* java.lang.String

The instance type to be used for the replication server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#replication_server_instance_type MgnReplicationConfigurationTemplate#replication_server_instance_type}

---

##### `replicationServersSecurityGroupsIDs`<sup>Required</sup> <a name="replicationServersSecurityGroupsIDs" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.replicationServersSecurityGroupsIDs"></a>

- *Type:* java.util.List<java.lang.String>

The security group IDs that will be used by the replication server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#replication_servers_security_groups_i_ds MgnReplicationConfigurationTemplate#replication_servers_security_groups_i_ds}

---

##### `stagingAreaSubnetId`<sup>Required</sup> <a name="stagingAreaSubnetId" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.stagingAreaSubnetId"></a>

- *Type:* java.lang.String

The subnet to be used by the replication staging area.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#staging_area_subnet_id MgnReplicationConfigurationTemplate#staging_area_subnet_id}

---

##### `stagingAreaTags`<sup>Required</sup> <a name="stagingAreaTags" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.stagingAreaTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#staging_area_tags MgnReplicationConfigurationTemplate#staging_area_tags}

---

##### `useDedicatedReplicationServer`<sup>Required</sup> <a name="useDedicatedReplicationServer" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.useDedicatedReplicationServer"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to use a dedicated Replication Server in the replication staging area.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#use_dedicated_replication_server MgnReplicationConfigurationTemplate#use_dedicated_replication_server}

---

##### `ebsEncryptionKeyArn`<sup>Optional</sup> <a name="ebsEncryptionKeyArn" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.ebsEncryptionKeyArn"></a>

- *Type:* java.lang.String

The ARN of the EBS encryption key to be used during replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#ebs_encryption_key_arn MgnReplicationConfigurationTemplate#ebs_encryption_key_arn}

---

##### `internetProtocol`<sup>Optional</sup> <a name="internetProtocol" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.internetProtocol"></a>

- *Type:* java.lang.String

Which internet protocol to use for replication of data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#internet_protocol MgnReplicationConfigurationTemplate#internet_protocol}

---

##### `storeSnapshotOnLocalZone`<sup>Optional</sup> <a name="storeSnapshotOnLocalZone" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.storeSnapshotOnLocalZone"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to store the Snapshot in the Local Zone of the replication staging area subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#store_snapshot_on_local_zone MgnReplicationConfigurationTemplate#store_snapshot_on_local_zone}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTags">MgnReplicationConfigurationTemplateTags</a>>

A set of tags to be associated with the Replication Configuration Template resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#tags MgnReplicationConfigurationTemplate#tags}

---

##### `useFipsEndpoint`<sup>Optional</sup> <a name="useFipsEndpoint" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.useFipsEndpoint"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to use a FIPS endpoint when initiating the agent connection to the Application Migration Service service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#use_fips_endpoint MgnReplicationConfigurationTemplate#use_fips_endpoint}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.resetEbsEncryptionKeyArn">resetEbsEncryptionKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.resetInternetProtocol">resetInternetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.resetStoreSnapshotOnLocalZone">resetStoreSnapshotOnLocalZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.resetUseFipsEndpoint">resetUseFipsEndpoint</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<MgnReplicationConfigurationTemplateTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTags">MgnReplicationConfigurationTemplateTags</a>>

---

##### `resetEbsEncryptionKeyArn` <a name="resetEbsEncryptionKeyArn" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.resetEbsEncryptionKeyArn"></a>

```java
public void resetEbsEncryptionKeyArn()
```

##### `resetInternetProtocol` <a name="resetInternetProtocol" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.resetInternetProtocol"></a>

```java
public void resetInternetProtocol()
```

##### `resetStoreSnapshotOnLocalZone` <a name="resetStoreSnapshotOnLocalZone" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.resetStoreSnapshotOnLocalZone"></a>

```java
public void resetStoreSnapshotOnLocalZone()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.resetTags"></a>

```java
public void resetTags()
```

##### `resetUseFipsEndpoint` <a name="resetUseFipsEndpoint" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.resetUseFipsEndpoint"></a>

```java
public void resetUseFipsEndpoint()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MgnReplicationConfigurationTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.isConstruct"></a>

```java
import io.cdktn.providers.awscc.mgn_replication_configuration_template.MgnReplicationConfigurationTemplate;

MgnReplicationConfigurationTemplate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.mgn_replication_configuration_template.MgnReplicationConfigurationTemplate;

MgnReplicationConfigurationTemplate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.mgn_replication_configuration_template.MgnReplicationConfigurationTemplate;

MgnReplicationConfigurationTemplate.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.mgn_replication_configuration_template.MgnReplicationConfigurationTemplate;

MgnReplicationConfigurationTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MgnReplicationConfigurationTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a MgnReplicationConfigurationTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MgnReplicationConfigurationTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MgnReplicationConfigurationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the MgnReplicationConfigurationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.replicationConfigurationTemplateId">replicationConfigurationTemplateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList">MgnReplicationConfigurationTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.associateDefaultSecurityGroupInput">associateDefaultSecurityGroupInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.bandwidthThrottlingInput">bandwidthThrottlingInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.createPublicIpInput">createPublicIpInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.dataPlaneRoutingInput">dataPlaneRoutingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.defaultLargeStagingDiskTypeInput">defaultLargeStagingDiskTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.ebsEncryptionInput">ebsEncryptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.ebsEncryptionKeyArnInput">ebsEncryptionKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.internetProtocolInput">internetProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.replicationServerInstanceTypeInput">replicationServerInstanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.replicationServersSecurityGroupsIDsInput">replicationServersSecurityGroupsIDsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.stagingAreaSubnetIdInput">stagingAreaSubnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.stagingAreaTagsInput">stagingAreaTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.storeSnapshotOnLocalZoneInput">storeSnapshotOnLocalZoneInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTags">MgnReplicationConfigurationTemplateTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.useDedicatedReplicationServerInput">useDedicatedReplicationServerInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.useFipsEndpointInput">useFipsEndpointInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.associateDefaultSecurityGroup">associateDefaultSecurityGroup</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.bandwidthThrottling">bandwidthThrottling</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.createPublicIp">createPublicIp</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.dataPlaneRouting">dataPlaneRouting</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.defaultLargeStagingDiskType">defaultLargeStagingDiskType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.ebsEncryption">ebsEncryption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.ebsEncryptionKeyArn">ebsEncryptionKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.internetProtocol">internetProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.replicationServerInstanceType">replicationServerInstanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.replicationServersSecurityGroupsIDs">replicationServersSecurityGroupsIDs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.stagingAreaSubnetId">stagingAreaSubnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.stagingAreaTags">stagingAreaTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.storeSnapshotOnLocalZone">storeSnapshotOnLocalZone</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.useDedicatedReplicationServer">useDedicatedReplicationServer</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.useFipsEndpoint">useFipsEndpoint</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `replicationConfigurationTemplateId`<sup>Required</sup> <a name="replicationConfigurationTemplateId" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.replicationConfigurationTemplateId"></a>

```java
public java.lang.String getReplicationConfigurationTemplateId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.tags"></a>

```java
public MgnReplicationConfigurationTemplateTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList">MgnReplicationConfigurationTemplateTagsList</a>

---

##### `associateDefaultSecurityGroupInput`<sup>Optional</sup> <a name="associateDefaultSecurityGroupInput" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.associateDefaultSecurityGroupInput"></a>

```java
public java.lang.Boolean|IResolvable getAssociateDefaultSecurityGroupInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `bandwidthThrottlingInput`<sup>Optional</sup> <a name="bandwidthThrottlingInput" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.bandwidthThrottlingInput"></a>

```java
public java.lang.Number getBandwidthThrottlingInput();
```

- *Type:* java.lang.Number

---

##### `createPublicIpInput`<sup>Optional</sup> <a name="createPublicIpInput" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.createPublicIpInput"></a>

```java
public java.lang.Boolean|IResolvable getCreatePublicIpInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `dataPlaneRoutingInput`<sup>Optional</sup> <a name="dataPlaneRoutingInput" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.dataPlaneRoutingInput"></a>

```java
public java.lang.String getDataPlaneRoutingInput();
```

- *Type:* java.lang.String

---

##### `defaultLargeStagingDiskTypeInput`<sup>Optional</sup> <a name="defaultLargeStagingDiskTypeInput" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.defaultLargeStagingDiskTypeInput"></a>

```java
public java.lang.String getDefaultLargeStagingDiskTypeInput();
```

- *Type:* java.lang.String

---

##### `ebsEncryptionInput`<sup>Optional</sup> <a name="ebsEncryptionInput" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.ebsEncryptionInput"></a>

```java
public java.lang.String getEbsEncryptionInput();
```

- *Type:* java.lang.String

---

##### `ebsEncryptionKeyArnInput`<sup>Optional</sup> <a name="ebsEncryptionKeyArnInput" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.ebsEncryptionKeyArnInput"></a>

```java
public java.lang.String getEbsEncryptionKeyArnInput();
```

- *Type:* java.lang.String

---

##### `internetProtocolInput`<sup>Optional</sup> <a name="internetProtocolInput" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.internetProtocolInput"></a>

```java
public java.lang.String getInternetProtocolInput();
```

- *Type:* java.lang.String

---

##### `replicationServerInstanceTypeInput`<sup>Optional</sup> <a name="replicationServerInstanceTypeInput" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.replicationServerInstanceTypeInput"></a>

```java
public java.lang.String getReplicationServerInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `replicationServersSecurityGroupsIDsInput`<sup>Optional</sup> <a name="replicationServersSecurityGroupsIDsInput" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.replicationServersSecurityGroupsIDsInput"></a>

```java
public java.util.List<java.lang.String> getReplicationServersSecurityGroupsIDsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `stagingAreaSubnetIdInput`<sup>Optional</sup> <a name="stagingAreaSubnetIdInput" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.stagingAreaSubnetIdInput"></a>

```java
public java.lang.String getStagingAreaSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `stagingAreaTagsInput`<sup>Optional</sup> <a name="stagingAreaTagsInput" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.stagingAreaTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStagingAreaTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `storeSnapshotOnLocalZoneInput`<sup>Optional</sup> <a name="storeSnapshotOnLocalZoneInput" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.storeSnapshotOnLocalZoneInput"></a>

```java
public java.lang.Boolean|IResolvable getStoreSnapshotOnLocalZoneInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.tagsInput"></a>

```java
public IResolvable|java.util.List<MgnReplicationConfigurationTemplateTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTags">MgnReplicationConfigurationTemplateTags</a>>

---

##### `useDedicatedReplicationServerInput`<sup>Optional</sup> <a name="useDedicatedReplicationServerInput" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.useDedicatedReplicationServerInput"></a>

```java
public java.lang.Boolean|IResolvable getUseDedicatedReplicationServerInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `useFipsEndpointInput`<sup>Optional</sup> <a name="useFipsEndpointInput" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.useFipsEndpointInput"></a>

```java
public java.lang.Boolean|IResolvable getUseFipsEndpointInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `associateDefaultSecurityGroup`<sup>Required</sup> <a name="associateDefaultSecurityGroup" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.associateDefaultSecurityGroup"></a>

```java
public java.lang.Boolean|IResolvable getAssociateDefaultSecurityGroup();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `bandwidthThrottling`<sup>Required</sup> <a name="bandwidthThrottling" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.bandwidthThrottling"></a>

```java
public java.lang.Number getBandwidthThrottling();
```

- *Type:* java.lang.Number

---

##### `createPublicIp`<sup>Required</sup> <a name="createPublicIp" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.createPublicIp"></a>

```java
public java.lang.Boolean|IResolvable getCreatePublicIp();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `dataPlaneRouting`<sup>Required</sup> <a name="dataPlaneRouting" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.dataPlaneRouting"></a>

```java
public java.lang.String getDataPlaneRouting();
```

- *Type:* java.lang.String

---

##### `defaultLargeStagingDiskType`<sup>Required</sup> <a name="defaultLargeStagingDiskType" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.defaultLargeStagingDiskType"></a>

```java
public java.lang.String getDefaultLargeStagingDiskType();
```

- *Type:* java.lang.String

---

##### `ebsEncryption`<sup>Required</sup> <a name="ebsEncryption" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.ebsEncryption"></a>

```java
public java.lang.String getEbsEncryption();
```

- *Type:* java.lang.String

---

##### `ebsEncryptionKeyArn`<sup>Required</sup> <a name="ebsEncryptionKeyArn" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.ebsEncryptionKeyArn"></a>

```java
public java.lang.String getEbsEncryptionKeyArn();
```

- *Type:* java.lang.String

---

##### `internetProtocol`<sup>Required</sup> <a name="internetProtocol" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.internetProtocol"></a>

```java
public java.lang.String getInternetProtocol();
```

- *Type:* java.lang.String

---

##### `replicationServerInstanceType`<sup>Required</sup> <a name="replicationServerInstanceType" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.replicationServerInstanceType"></a>

```java
public java.lang.String getReplicationServerInstanceType();
```

- *Type:* java.lang.String

---

##### `replicationServersSecurityGroupsIDs`<sup>Required</sup> <a name="replicationServersSecurityGroupsIDs" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.replicationServersSecurityGroupsIDs"></a>

```java
public java.util.List<java.lang.String> getReplicationServersSecurityGroupsIDs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `stagingAreaSubnetId`<sup>Required</sup> <a name="stagingAreaSubnetId" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.stagingAreaSubnetId"></a>

```java
public java.lang.String getStagingAreaSubnetId();
```

- *Type:* java.lang.String

---

##### `stagingAreaTags`<sup>Required</sup> <a name="stagingAreaTags" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.stagingAreaTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStagingAreaTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `storeSnapshotOnLocalZone`<sup>Required</sup> <a name="storeSnapshotOnLocalZone" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.storeSnapshotOnLocalZone"></a>

```java
public java.lang.Boolean|IResolvable getStoreSnapshotOnLocalZone();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `useDedicatedReplicationServer`<sup>Required</sup> <a name="useDedicatedReplicationServer" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.useDedicatedReplicationServer"></a>

```java
public java.lang.Boolean|IResolvable getUseDedicatedReplicationServer();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `useFipsEndpoint`<sup>Required</sup> <a name="useFipsEndpoint" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.useFipsEndpoint"></a>

```java
public java.lang.Boolean|IResolvable getUseFipsEndpoint();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MgnReplicationConfigurationTemplateConfig <a name="MgnReplicationConfigurationTemplateConfig" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.mgn_replication_configuration_template.MgnReplicationConfigurationTemplateConfig;

MgnReplicationConfigurationTemplateConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .associateDefaultSecurityGroup(java.lang.Boolean|IResolvable)
    .bandwidthThrottling(java.lang.Number)
    .createPublicIp(java.lang.Boolean|IResolvable)
    .dataPlaneRouting(java.lang.String)
    .defaultLargeStagingDiskType(java.lang.String)
    .ebsEncryption(java.lang.String)
    .replicationServerInstanceType(java.lang.String)
    .replicationServersSecurityGroupsIDs(java.util.List<java.lang.String>)
    .stagingAreaSubnetId(java.lang.String)
    .stagingAreaTags(java.util.Map<java.lang.String, java.lang.String>)
    .useDedicatedReplicationServer(java.lang.Boolean|IResolvable)
//  .ebsEncryptionKeyArn(java.lang.String)
//  .internetProtocol(java.lang.String)
//  .storeSnapshotOnLocalZone(java.lang.Boolean|IResolvable)
//  .tags(IResolvable|java.util.List<MgnReplicationConfigurationTemplateTags>)
//  .useFipsEndpoint(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.associateDefaultSecurityGroup">associateDefaultSecurityGroup</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to associate the default Application Migration Service Security Group with the Replication Configuration Template. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.bandwidthThrottling">bandwidthThrottling</a></code> | <code>java.lang.Number</code> | Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.createPublicIp">createPublicIp</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to create a Public IP for the Recovery Instance by default. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.dataPlaneRouting">dataPlaneRouting</a></code> | <code>java.lang.String</code> | The data plane routing mechanism that will be used for replication. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.defaultLargeStagingDiskType">defaultLargeStagingDiskType</a></code> | <code>java.lang.String</code> | The Staging Disk EBS volume type to be used during replication. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.ebsEncryption">ebsEncryption</a></code> | <code>java.lang.String</code> | The type of EBS encryption to be used during replication. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.replicationServerInstanceType">replicationServerInstanceType</a></code> | <code>java.lang.String</code> | The instance type to be used for the replication server. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.replicationServersSecurityGroupsIDs">replicationServersSecurityGroupsIDs</a></code> | <code>java.util.List<java.lang.String></code> | The security group IDs that will be used by the replication server. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.stagingAreaSubnetId">stagingAreaSubnetId</a></code> | <code>java.lang.String</code> | The subnet to be used by the replication staging area. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.stagingAreaTags">stagingAreaTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.useDedicatedReplicationServer">useDedicatedReplicationServer</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to use a dedicated Replication Server in the replication staging area. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.ebsEncryptionKeyArn">ebsEncryptionKeyArn</a></code> | <code>java.lang.String</code> | The ARN of the EBS encryption key to be used during replication. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.internetProtocol">internetProtocol</a></code> | <code>java.lang.String</code> | Which internet protocol to use for replication of data. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.storeSnapshotOnLocalZone">storeSnapshotOnLocalZone</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to store the Snapshot in the Local Zone of the replication staging area subnet. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTags">MgnReplicationConfigurationTemplateTags</a>></code> | A set of tags to be associated with the Replication Configuration Template resource. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.useFipsEndpoint">useFipsEndpoint</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to use a FIPS endpoint when initiating the agent connection to the Application Migration Service service. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `associateDefaultSecurityGroup`<sup>Required</sup> <a name="associateDefaultSecurityGroup" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.associateDefaultSecurityGroup"></a>

```java
public java.lang.Boolean|IResolvable getAssociateDefaultSecurityGroup();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to associate the default Application Migration Service Security Group with the Replication Configuration Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#associate_default_security_group MgnReplicationConfigurationTemplate#associate_default_security_group}

---

##### `bandwidthThrottling`<sup>Required</sup> <a name="bandwidthThrottling" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.bandwidthThrottling"></a>

```java
public java.lang.Number getBandwidthThrottling();
```

- *Type:* java.lang.Number

Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#bandwidth_throttling MgnReplicationConfigurationTemplate#bandwidth_throttling}

---

##### `createPublicIp`<sup>Required</sup> <a name="createPublicIp" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.createPublicIp"></a>

```java
public java.lang.Boolean|IResolvable getCreatePublicIp();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to create a Public IP for the Recovery Instance by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#create_public_ip MgnReplicationConfigurationTemplate#create_public_ip}

---

##### `dataPlaneRouting`<sup>Required</sup> <a name="dataPlaneRouting" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.dataPlaneRouting"></a>

```java
public java.lang.String getDataPlaneRouting();
```

- *Type:* java.lang.String

The data plane routing mechanism that will be used for replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#data_plane_routing MgnReplicationConfigurationTemplate#data_plane_routing}

---

##### `defaultLargeStagingDiskType`<sup>Required</sup> <a name="defaultLargeStagingDiskType" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.defaultLargeStagingDiskType"></a>

```java
public java.lang.String getDefaultLargeStagingDiskType();
```

- *Type:* java.lang.String

The Staging Disk EBS volume type to be used during replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#default_large_staging_disk_type MgnReplicationConfigurationTemplate#default_large_staging_disk_type}

---

##### `ebsEncryption`<sup>Required</sup> <a name="ebsEncryption" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.ebsEncryption"></a>

```java
public java.lang.String getEbsEncryption();
```

- *Type:* java.lang.String

The type of EBS encryption to be used during replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#ebs_encryption MgnReplicationConfigurationTemplate#ebs_encryption}

---

##### `replicationServerInstanceType`<sup>Required</sup> <a name="replicationServerInstanceType" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.replicationServerInstanceType"></a>

```java
public java.lang.String getReplicationServerInstanceType();
```

- *Type:* java.lang.String

The instance type to be used for the replication server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#replication_server_instance_type MgnReplicationConfigurationTemplate#replication_server_instance_type}

---

##### `replicationServersSecurityGroupsIDs`<sup>Required</sup> <a name="replicationServersSecurityGroupsIDs" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.replicationServersSecurityGroupsIDs"></a>

```java
public java.util.List<java.lang.String> getReplicationServersSecurityGroupsIDs();
```

- *Type:* java.util.List<java.lang.String>

The security group IDs that will be used by the replication server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#replication_servers_security_groups_i_ds MgnReplicationConfigurationTemplate#replication_servers_security_groups_i_ds}

---

##### `stagingAreaSubnetId`<sup>Required</sup> <a name="stagingAreaSubnetId" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.stagingAreaSubnetId"></a>

```java
public java.lang.String getStagingAreaSubnetId();
```

- *Type:* java.lang.String

The subnet to be used by the replication staging area.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#staging_area_subnet_id MgnReplicationConfigurationTemplate#staging_area_subnet_id}

---

##### `stagingAreaTags`<sup>Required</sup> <a name="stagingAreaTags" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.stagingAreaTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStagingAreaTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#staging_area_tags MgnReplicationConfigurationTemplate#staging_area_tags}

---

##### `useDedicatedReplicationServer`<sup>Required</sup> <a name="useDedicatedReplicationServer" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.useDedicatedReplicationServer"></a>

```java
public java.lang.Boolean|IResolvable getUseDedicatedReplicationServer();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to use a dedicated Replication Server in the replication staging area.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#use_dedicated_replication_server MgnReplicationConfigurationTemplate#use_dedicated_replication_server}

---

##### `ebsEncryptionKeyArn`<sup>Optional</sup> <a name="ebsEncryptionKeyArn" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.ebsEncryptionKeyArn"></a>

```java
public java.lang.String getEbsEncryptionKeyArn();
```

- *Type:* java.lang.String

The ARN of the EBS encryption key to be used during replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#ebs_encryption_key_arn MgnReplicationConfigurationTemplate#ebs_encryption_key_arn}

---

##### `internetProtocol`<sup>Optional</sup> <a name="internetProtocol" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.internetProtocol"></a>

```java
public java.lang.String getInternetProtocol();
```

- *Type:* java.lang.String

Which internet protocol to use for replication of data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#internet_protocol MgnReplicationConfigurationTemplate#internet_protocol}

---

##### `storeSnapshotOnLocalZone`<sup>Optional</sup> <a name="storeSnapshotOnLocalZone" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.storeSnapshotOnLocalZone"></a>

```java
public java.lang.Boolean|IResolvable getStoreSnapshotOnLocalZone();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to store the Snapshot in the Local Zone of the replication staging area subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#store_snapshot_on_local_zone MgnReplicationConfigurationTemplate#store_snapshot_on_local_zone}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.tags"></a>

```java
public IResolvable|java.util.List<MgnReplicationConfigurationTemplateTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTags">MgnReplicationConfigurationTemplateTags</a>>

A set of tags to be associated with the Replication Configuration Template resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#tags MgnReplicationConfigurationTemplate#tags}

---

##### `useFipsEndpoint`<sup>Optional</sup> <a name="useFipsEndpoint" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.useFipsEndpoint"></a>

```java
public java.lang.Boolean|IResolvable getUseFipsEndpoint();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to use a FIPS endpoint when initiating the agent connection to the Application Migration Service service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#use_fips_endpoint MgnReplicationConfigurationTemplate#use_fips_endpoint}

---

### MgnReplicationConfigurationTemplateTags <a name="MgnReplicationConfigurationTemplateTags" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.mgn_replication_configuration_template.MgnReplicationConfigurationTemplateTags;

MgnReplicationConfigurationTemplateTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#key MgnReplicationConfigurationTemplate#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#value MgnReplicationConfigurationTemplate#value}

---

## Classes <a name="Classes" id="Classes"></a>

### MgnReplicationConfigurationTemplateTagsList <a name="MgnReplicationConfigurationTemplateTagsList" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.mgn_replication_configuration_template.MgnReplicationConfigurationTemplateTagsList;

new MgnReplicationConfigurationTemplateTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.get"></a>

```java
public MgnReplicationConfigurationTemplateTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTags">MgnReplicationConfigurationTemplateTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MgnReplicationConfigurationTemplateTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTags">MgnReplicationConfigurationTemplateTags</a>>

---


### MgnReplicationConfigurationTemplateTagsOutputReference <a name="MgnReplicationConfigurationTemplateTagsOutputReference" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mgn_replication_configuration_template.MgnReplicationConfigurationTemplateTagsOutputReference;

new MgnReplicationConfigurationTemplateTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTags">MgnReplicationConfigurationTemplateTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|MgnReplicationConfigurationTemplateTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTags">MgnReplicationConfigurationTemplateTags</a>

---



