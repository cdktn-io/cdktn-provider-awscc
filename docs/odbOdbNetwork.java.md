# `odbOdbNetwork` Submodule <a name="`odbOdbNetwork` Submodule" id="@cdktn/provider-awscc.odbOdbNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OdbOdbNetwork <a name="OdbOdbNetwork" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_odb_network awscc_odb_odb_network}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer"></a>

```java
import io.cdktn.providers.awscc.odb_odb_network.OdbOdbNetwork;

OdbOdbNetwork.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .availabilityZone(java.lang.String)
//  .availabilityZoneId(java.lang.String)
//  .backupSubnetCidr(java.lang.String)
//  .clientSubnetCidr(java.lang.String)
//  .crossRegionS3RestoreSources(java.util.List<java.lang.String>)
//  .customDomainName(java.lang.String)
//  .defaultDnsPrefix(java.lang.String)
//  .deleteAssociatedResources(java.lang.Boolean|IResolvable)
//  .displayName(java.lang.String)
//  .kmsAccess(java.lang.String)
//  .kmsPolicyDocument(java.lang.String)
//  .s3Access(java.lang.String)
//  .s3PolicyDocument(java.lang.String)
//  .stsAccess(java.lang.String)
//  .stsPolicyDocument(java.lang.String)
//  .tags(IResolvable|java.util.List<OdbOdbNetworkTags>)
//  .zeroEtlAccess(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | The AWS Availability Zone (AZ) where the ODB network is located. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.availabilityZoneId">availabilityZoneId</a></code> | <code>java.lang.String</code> | The AZ ID of the AZ where the ODB network is located. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.backupSubnetCidr">backupSubnetCidr</a></code> | <code>java.lang.String</code> | The CIDR range of the backup subnet in the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.clientSubnetCidr">clientSubnetCidr</a></code> | <code>java.lang.String</code> | The CIDR range of the client subnet in the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.crossRegionS3RestoreSources">crossRegionS3RestoreSources</a></code> | <code>java.util.List<java.lang.String></code> | The cross-Region Amazon S3 restore sources for the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.customDomainName">customDomainName</a></code> | <code>java.lang.String</code> | The domain name to use for the resources in the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.defaultDnsPrefix">defaultDnsPrefix</a></code> | <code>java.lang.String</code> | The DNS prefix to the default DNS domain name. The default DNS domain name is oraclevcn.com. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.deleteAssociatedResources">deleteAssociatedResources</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether to delete associated OCI networking resources along with the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The user-friendly name of the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.kmsAccess">kmsAccess</a></code> | <code>java.lang.String</code> | The AWS Key Management Service (KMS) access configuration for the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.kmsPolicyDocument">kmsPolicyDocument</a></code> | <code>java.lang.String</code> | The AWS Key Management Service (KMS) policy document that defines permissions for key usage within the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.s3Access">s3Access</a></code> | <code>java.lang.String</code> | Specifies the configuration for Amazon S3 access from the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.s3PolicyDocument">s3PolicyDocument</a></code> | <code>java.lang.String</code> | Specifies the endpoint policy for Amazon S3 access from the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.stsAccess">stsAccess</a></code> | <code>java.lang.String</code> | The AWS Security Token Service (STS) access configuration for the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.stsPolicyDocument">stsPolicyDocument</a></code> | <code>java.lang.String</code> | The AWS Security Token Service (STS) policy document that defines permissions for token service usage within the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTags">OdbOdbNetworkTags</a>></code> | Tags to assign to the Odb Network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.zeroEtlAccess">zeroEtlAccess</a></code> | <code>java.lang.String</code> | Specifies the configuration for Zero-ETL access from the ODB network. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.availabilityZone"></a>

- *Type:* java.lang.String

The AWS Availability Zone (AZ) where the ODB network is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_odb_network#availability_zone OdbOdbNetwork#availability_zone}

---

##### `availabilityZoneId`<sup>Optional</sup> <a name="availabilityZoneId" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.availabilityZoneId"></a>

- *Type:* java.lang.String

The AZ ID of the AZ where the ODB network is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_odb_network#availability_zone_id OdbOdbNetwork#availability_zone_id}

---

##### `backupSubnetCidr`<sup>Optional</sup> <a name="backupSubnetCidr" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.backupSubnetCidr"></a>

- *Type:* java.lang.String

The CIDR range of the backup subnet in the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_odb_network#backup_subnet_cidr OdbOdbNetwork#backup_subnet_cidr}

---

##### `clientSubnetCidr`<sup>Optional</sup> <a name="clientSubnetCidr" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.clientSubnetCidr"></a>

- *Type:* java.lang.String

The CIDR range of the client subnet in the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_odb_network#client_subnet_cidr OdbOdbNetwork#client_subnet_cidr}

---

##### `crossRegionS3RestoreSources`<sup>Optional</sup> <a name="crossRegionS3RestoreSources" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.crossRegionS3RestoreSources"></a>

- *Type:* java.util.List<java.lang.String>

The cross-Region Amazon S3 restore sources for the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_odb_network#cross_region_s3_restore_sources OdbOdbNetwork#cross_region_s3_restore_sources}

---

##### `customDomainName`<sup>Optional</sup> <a name="customDomainName" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.customDomainName"></a>

- *Type:* java.lang.String

The domain name to use for the resources in the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_odb_network#custom_domain_name OdbOdbNetwork#custom_domain_name}

---

##### `defaultDnsPrefix`<sup>Optional</sup> <a name="defaultDnsPrefix" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.defaultDnsPrefix"></a>

- *Type:* java.lang.String

The DNS prefix to the default DNS domain name. The default DNS domain name is oraclevcn.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_odb_network#default_dns_prefix OdbOdbNetwork#default_dns_prefix}

---

##### `deleteAssociatedResources`<sup>Optional</sup> <a name="deleteAssociatedResources" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.deleteAssociatedResources"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether to delete associated OCI networking resources along with the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_odb_network#delete_associated_resources OdbOdbNetwork#delete_associated_resources}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The user-friendly name of the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_odb_network#display_name OdbOdbNetwork#display_name}

---

##### `kmsAccess`<sup>Optional</sup> <a name="kmsAccess" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.kmsAccess"></a>

- *Type:* java.lang.String

The AWS Key Management Service (KMS) access configuration for the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_odb_network#kms_access OdbOdbNetwork#kms_access}

---

##### `kmsPolicyDocument`<sup>Optional</sup> <a name="kmsPolicyDocument" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.kmsPolicyDocument"></a>

- *Type:* java.lang.String

The AWS Key Management Service (KMS) policy document that defines permissions for key usage within the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_odb_network#kms_policy_document OdbOdbNetwork#kms_policy_document}

---

##### `s3Access`<sup>Optional</sup> <a name="s3Access" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.s3Access"></a>

- *Type:* java.lang.String

Specifies the configuration for Amazon S3 access from the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_odb_network#s3_access OdbOdbNetwork#s3_access}

---

##### `s3PolicyDocument`<sup>Optional</sup> <a name="s3PolicyDocument" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.s3PolicyDocument"></a>

- *Type:* java.lang.String

Specifies the endpoint policy for Amazon S3 access from the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_odb_network#s3_policy_document OdbOdbNetwork#s3_policy_document}

---

##### `stsAccess`<sup>Optional</sup> <a name="stsAccess" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.stsAccess"></a>

- *Type:* java.lang.String

The AWS Security Token Service (STS) access configuration for the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_odb_network#sts_access OdbOdbNetwork#sts_access}

---

##### `stsPolicyDocument`<sup>Optional</sup> <a name="stsPolicyDocument" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.stsPolicyDocument"></a>

- *Type:* java.lang.String

The AWS Security Token Service (STS) policy document that defines permissions for token service usage within the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_odb_network#sts_policy_document OdbOdbNetwork#sts_policy_document}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTags">OdbOdbNetworkTags</a>>

Tags to assign to the Odb Network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_odb_network#tags OdbOdbNetwork#tags}

---

##### `zeroEtlAccess`<sup>Optional</sup> <a name="zeroEtlAccess" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.zeroEtlAccess"></a>

- *Type:* java.lang.String

Specifies the configuration for Zero-ETL access from the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_odb_network#zero_etl_access OdbOdbNetwork#zero_etl_access}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetAvailabilityZoneId">resetAvailabilityZoneId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetBackupSubnetCidr">resetBackupSubnetCidr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetClientSubnetCidr">resetClientSubnetCidr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetCrossRegionS3RestoreSources">resetCrossRegionS3RestoreSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetCustomDomainName">resetCustomDomainName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetDefaultDnsPrefix">resetDefaultDnsPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetDeleteAssociatedResources">resetDeleteAssociatedResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetKmsAccess">resetKmsAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetKmsPolicyDocument">resetKmsPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetS3Access">resetS3Access</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetS3PolicyDocument">resetS3PolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetStsAccess">resetStsAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetStsPolicyDocument">resetStsPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetZeroEtlAccess">resetZeroEtlAccess</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<OdbOdbNetworkTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTags">OdbOdbNetworkTags</a>>

---

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetAvailabilityZone"></a>

```java
public void resetAvailabilityZone()
```

##### `resetAvailabilityZoneId` <a name="resetAvailabilityZoneId" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetAvailabilityZoneId"></a>

```java
public void resetAvailabilityZoneId()
```

##### `resetBackupSubnetCidr` <a name="resetBackupSubnetCidr" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetBackupSubnetCidr"></a>

```java
public void resetBackupSubnetCidr()
```

##### `resetClientSubnetCidr` <a name="resetClientSubnetCidr" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetClientSubnetCidr"></a>

```java
public void resetClientSubnetCidr()
```

##### `resetCrossRegionS3RestoreSources` <a name="resetCrossRegionS3RestoreSources" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetCrossRegionS3RestoreSources"></a>

```java
public void resetCrossRegionS3RestoreSources()
```

##### `resetCustomDomainName` <a name="resetCustomDomainName" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetCustomDomainName"></a>

```java
public void resetCustomDomainName()
```

##### `resetDefaultDnsPrefix` <a name="resetDefaultDnsPrefix" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetDefaultDnsPrefix"></a>

```java
public void resetDefaultDnsPrefix()
```

##### `resetDeleteAssociatedResources` <a name="resetDeleteAssociatedResources" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetDeleteAssociatedResources"></a>

```java
public void resetDeleteAssociatedResources()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetKmsAccess` <a name="resetKmsAccess" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetKmsAccess"></a>

```java
public void resetKmsAccess()
```

##### `resetKmsPolicyDocument` <a name="resetKmsPolicyDocument" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetKmsPolicyDocument"></a>

```java
public void resetKmsPolicyDocument()
```

##### `resetS3Access` <a name="resetS3Access" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetS3Access"></a>

```java
public void resetS3Access()
```

##### `resetS3PolicyDocument` <a name="resetS3PolicyDocument" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetS3PolicyDocument"></a>

```java
public void resetS3PolicyDocument()
```

##### `resetStsAccess` <a name="resetStsAccess" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetStsAccess"></a>

```java
public void resetStsAccess()
```

##### `resetStsPolicyDocument` <a name="resetStsPolicyDocument" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetStsPolicyDocument"></a>

```java
public void resetStsPolicyDocument()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetTags"></a>

```java
public void resetTags()
```

##### `resetZeroEtlAccess` <a name="resetZeroEtlAccess" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetZeroEtlAccess"></a>

```java
public void resetZeroEtlAccess()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OdbOdbNetwork resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.isConstruct"></a>

```java
import io.cdktn.providers.awscc.odb_odb_network.OdbOdbNetwork;

OdbOdbNetwork.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.odb_odb_network.OdbOdbNetwork;

OdbOdbNetwork.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.odb_odb_network.OdbOdbNetwork;

OdbOdbNetwork.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.odb_odb_network.OdbOdbNetwork;

OdbOdbNetwork.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OdbOdbNetwork.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a OdbOdbNetwork resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OdbOdbNetwork to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OdbOdbNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_odb_network#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the OdbOdbNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.ec2PlacementGroupIds">ec2PlacementGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.managedServices">managedServices</a></code> | <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference">OdbOdbNetworkManagedServicesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.ociNetworkAnchorId">ociNetworkAnchorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.ociResourceAnchorName">ociResourceAnchorName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.ociVcnUrl">ociVcnUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.odbNetworkArn">odbNetworkArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.odbNetworkId">odbNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList">OdbOdbNetworkTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.availabilityZoneIdInput">availabilityZoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.backupSubnetCidrInput">backupSubnetCidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.clientSubnetCidrInput">clientSubnetCidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.crossRegionS3RestoreSourcesInput">crossRegionS3RestoreSourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.customDomainNameInput">customDomainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.defaultDnsPrefixInput">defaultDnsPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.deleteAssociatedResourcesInput">deleteAssociatedResourcesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.kmsAccessInput">kmsAccessInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.kmsPolicyDocumentInput">kmsPolicyDocumentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.s3AccessInput">s3AccessInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.s3PolicyDocumentInput">s3PolicyDocumentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.stsAccessInput">stsAccessInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.stsPolicyDocumentInput">stsPolicyDocumentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTags">OdbOdbNetworkTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.zeroEtlAccessInput">zeroEtlAccessInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.availabilityZoneId">availabilityZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.backupSubnetCidr">backupSubnetCidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.clientSubnetCidr">clientSubnetCidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.crossRegionS3RestoreSources">crossRegionS3RestoreSources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.customDomainName">customDomainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.defaultDnsPrefix">defaultDnsPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.deleteAssociatedResources">deleteAssociatedResources</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.kmsAccess">kmsAccess</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.kmsPolicyDocument">kmsPolicyDocument</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.s3Access">s3Access</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.s3PolicyDocument">s3PolicyDocument</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.stsAccess">stsAccess</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.stsPolicyDocument">stsPolicyDocument</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.zeroEtlAccess">zeroEtlAccess</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `ec2PlacementGroupIds`<sup>Required</sup> <a name="ec2PlacementGroupIds" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.ec2PlacementGroupIds"></a>

```java
public java.util.List<java.lang.String> getEc2PlacementGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `managedServices`<sup>Required</sup> <a name="managedServices" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.managedServices"></a>

```java
public OdbOdbNetworkManagedServicesOutputReference getManagedServices();
```

- *Type:* <a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference">OdbOdbNetworkManagedServicesOutputReference</a>

---

##### `ociNetworkAnchorId`<sup>Required</sup> <a name="ociNetworkAnchorId" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.ociNetworkAnchorId"></a>

```java
public java.lang.String getOciNetworkAnchorId();
```

- *Type:* java.lang.String

---

##### `ociResourceAnchorName`<sup>Required</sup> <a name="ociResourceAnchorName" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.ociResourceAnchorName"></a>

```java
public java.lang.String getOciResourceAnchorName();
```

- *Type:* java.lang.String

---

##### `ociVcnUrl`<sup>Required</sup> <a name="ociVcnUrl" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.ociVcnUrl"></a>

```java
public java.lang.String getOciVcnUrl();
```

- *Type:* java.lang.String

---

##### `odbNetworkArn`<sup>Required</sup> <a name="odbNetworkArn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.odbNetworkArn"></a>

```java
public java.lang.String getOdbNetworkArn();
```

- *Type:* java.lang.String

---

##### `odbNetworkId`<sup>Required</sup> <a name="odbNetworkId" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.odbNetworkId"></a>

```java
public java.lang.String getOdbNetworkId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.tags"></a>

```java
public OdbOdbNetworkTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList">OdbOdbNetworkTagsList</a>

---

##### `availabilityZoneIdInput`<sup>Optional</sup> <a name="availabilityZoneIdInput" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.availabilityZoneIdInput"></a>

```java
public java.lang.String getAvailabilityZoneIdInput();
```

- *Type:* java.lang.String

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.availabilityZoneInput"></a>

```java
public java.lang.String getAvailabilityZoneInput();
```

- *Type:* java.lang.String

---

##### `backupSubnetCidrInput`<sup>Optional</sup> <a name="backupSubnetCidrInput" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.backupSubnetCidrInput"></a>

```java
public java.lang.String getBackupSubnetCidrInput();
```

- *Type:* java.lang.String

---

##### `clientSubnetCidrInput`<sup>Optional</sup> <a name="clientSubnetCidrInput" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.clientSubnetCidrInput"></a>

```java
public java.lang.String getClientSubnetCidrInput();
```

- *Type:* java.lang.String

---

##### `crossRegionS3RestoreSourcesInput`<sup>Optional</sup> <a name="crossRegionS3RestoreSourcesInput" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.crossRegionS3RestoreSourcesInput"></a>

```java
public java.util.List<java.lang.String> getCrossRegionS3RestoreSourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customDomainNameInput`<sup>Optional</sup> <a name="customDomainNameInput" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.customDomainNameInput"></a>

```java
public java.lang.String getCustomDomainNameInput();
```

- *Type:* java.lang.String

---

##### `defaultDnsPrefixInput`<sup>Optional</sup> <a name="defaultDnsPrefixInput" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.defaultDnsPrefixInput"></a>

```java
public java.lang.String getDefaultDnsPrefixInput();
```

- *Type:* java.lang.String

---

##### `deleteAssociatedResourcesInput`<sup>Optional</sup> <a name="deleteAssociatedResourcesInput" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.deleteAssociatedResourcesInput"></a>

```java
public java.lang.Boolean|IResolvable getDeleteAssociatedResourcesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `kmsAccessInput`<sup>Optional</sup> <a name="kmsAccessInput" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.kmsAccessInput"></a>

```java
public java.lang.String getKmsAccessInput();
```

- *Type:* java.lang.String

---

##### `kmsPolicyDocumentInput`<sup>Optional</sup> <a name="kmsPolicyDocumentInput" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.kmsPolicyDocumentInput"></a>

```java
public java.lang.String getKmsPolicyDocumentInput();
```

- *Type:* java.lang.String

---

##### `s3AccessInput`<sup>Optional</sup> <a name="s3AccessInput" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.s3AccessInput"></a>

```java
public java.lang.String getS3AccessInput();
```

- *Type:* java.lang.String

---

##### `s3PolicyDocumentInput`<sup>Optional</sup> <a name="s3PolicyDocumentInput" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.s3PolicyDocumentInput"></a>

```java
public java.lang.String getS3PolicyDocumentInput();
```

- *Type:* java.lang.String

---

##### `stsAccessInput`<sup>Optional</sup> <a name="stsAccessInput" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.stsAccessInput"></a>

```java
public java.lang.String getStsAccessInput();
```

- *Type:* java.lang.String

---

##### `stsPolicyDocumentInput`<sup>Optional</sup> <a name="stsPolicyDocumentInput" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.stsPolicyDocumentInput"></a>

```java
public java.lang.String getStsPolicyDocumentInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.tagsInput"></a>

```java
public IResolvable|java.util.List<OdbOdbNetworkTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTags">OdbOdbNetworkTags</a>>

---

##### `zeroEtlAccessInput`<sup>Optional</sup> <a name="zeroEtlAccessInput" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.zeroEtlAccessInput"></a>

```java
public java.lang.String getZeroEtlAccessInput();
```

- *Type:* java.lang.String

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `availabilityZoneId`<sup>Required</sup> <a name="availabilityZoneId" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.availabilityZoneId"></a>

```java
public java.lang.String getAvailabilityZoneId();
```

- *Type:* java.lang.String

---

##### `backupSubnetCidr`<sup>Required</sup> <a name="backupSubnetCidr" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.backupSubnetCidr"></a>

```java
public java.lang.String getBackupSubnetCidr();
```

- *Type:* java.lang.String

---

##### `clientSubnetCidr`<sup>Required</sup> <a name="clientSubnetCidr" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.clientSubnetCidr"></a>

```java
public java.lang.String getClientSubnetCidr();
```

- *Type:* java.lang.String

---

##### `crossRegionS3RestoreSources`<sup>Required</sup> <a name="crossRegionS3RestoreSources" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.crossRegionS3RestoreSources"></a>

```java
public java.util.List<java.lang.String> getCrossRegionS3RestoreSources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customDomainName`<sup>Required</sup> <a name="customDomainName" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.customDomainName"></a>

```java
public java.lang.String getCustomDomainName();
```

- *Type:* java.lang.String

---

##### `defaultDnsPrefix`<sup>Required</sup> <a name="defaultDnsPrefix" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.defaultDnsPrefix"></a>

```java
public java.lang.String getDefaultDnsPrefix();
```

- *Type:* java.lang.String

---

##### `deleteAssociatedResources`<sup>Required</sup> <a name="deleteAssociatedResources" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.deleteAssociatedResources"></a>

```java
public java.lang.Boolean|IResolvable getDeleteAssociatedResources();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `kmsAccess`<sup>Required</sup> <a name="kmsAccess" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.kmsAccess"></a>

```java
public java.lang.String getKmsAccess();
```

- *Type:* java.lang.String

---

##### `kmsPolicyDocument`<sup>Required</sup> <a name="kmsPolicyDocument" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.kmsPolicyDocument"></a>

```java
public java.lang.String getKmsPolicyDocument();
```

- *Type:* java.lang.String

---

##### `s3Access`<sup>Required</sup> <a name="s3Access" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.s3Access"></a>

```java
public java.lang.String getS3Access();
```

- *Type:* java.lang.String

---

##### `s3PolicyDocument`<sup>Required</sup> <a name="s3PolicyDocument" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.s3PolicyDocument"></a>

```java
public java.lang.String getS3PolicyDocument();
```

- *Type:* java.lang.String

---

##### `stsAccess`<sup>Required</sup> <a name="stsAccess" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.stsAccess"></a>

```java
public java.lang.String getStsAccess();
```

- *Type:* java.lang.String

---

##### `stsPolicyDocument`<sup>Required</sup> <a name="stsPolicyDocument" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.stsPolicyDocument"></a>

```java
public java.lang.String getStsPolicyDocument();
```

- *Type:* java.lang.String

---

##### `zeroEtlAccess`<sup>Required</sup> <a name="zeroEtlAccess" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.zeroEtlAccess"></a>

```java
public java.lang.String getZeroEtlAccess();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OdbOdbNetworkConfig <a name="OdbOdbNetworkConfig" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.odb_odb_network.OdbOdbNetworkConfig;

OdbOdbNetworkConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .availabilityZone(java.lang.String)
//  .availabilityZoneId(java.lang.String)
//  .backupSubnetCidr(java.lang.String)
//  .clientSubnetCidr(java.lang.String)
//  .crossRegionS3RestoreSources(java.util.List<java.lang.String>)
//  .customDomainName(java.lang.String)
//  .defaultDnsPrefix(java.lang.String)
//  .deleteAssociatedResources(java.lang.Boolean|IResolvable)
//  .displayName(java.lang.String)
//  .kmsAccess(java.lang.String)
//  .kmsPolicyDocument(java.lang.String)
//  .s3Access(java.lang.String)
//  .s3PolicyDocument(java.lang.String)
//  .stsAccess(java.lang.String)
//  .stsPolicyDocument(java.lang.String)
//  .tags(IResolvable|java.util.List<OdbOdbNetworkTags>)
//  .zeroEtlAccess(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | The AWS Availability Zone (AZ) where the ODB network is located. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.availabilityZoneId">availabilityZoneId</a></code> | <code>java.lang.String</code> | The AZ ID of the AZ where the ODB network is located. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.backupSubnetCidr">backupSubnetCidr</a></code> | <code>java.lang.String</code> | The CIDR range of the backup subnet in the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.clientSubnetCidr">clientSubnetCidr</a></code> | <code>java.lang.String</code> | The CIDR range of the client subnet in the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.crossRegionS3RestoreSources">crossRegionS3RestoreSources</a></code> | <code>java.util.List<java.lang.String></code> | The cross-Region Amazon S3 restore sources for the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.customDomainName">customDomainName</a></code> | <code>java.lang.String</code> | The domain name to use for the resources in the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.defaultDnsPrefix">defaultDnsPrefix</a></code> | <code>java.lang.String</code> | The DNS prefix to the default DNS domain name. The default DNS domain name is oraclevcn.com. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.deleteAssociatedResources">deleteAssociatedResources</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether to delete associated OCI networking resources along with the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The user-friendly name of the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.kmsAccess">kmsAccess</a></code> | <code>java.lang.String</code> | The AWS Key Management Service (KMS) access configuration for the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.kmsPolicyDocument">kmsPolicyDocument</a></code> | <code>java.lang.String</code> | The AWS Key Management Service (KMS) policy document that defines permissions for key usage within the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.s3Access">s3Access</a></code> | <code>java.lang.String</code> | Specifies the configuration for Amazon S3 access from the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.s3PolicyDocument">s3PolicyDocument</a></code> | <code>java.lang.String</code> | Specifies the endpoint policy for Amazon S3 access from the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.stsAccess">stsAccess</a></code> | <code>java.lang.String</code> | The AWS Security Token Service (STS) access configuration for the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.stsPolicyDocument">stsPolicyDocument</a></code> | <code>java.lang.String</code> | The AWS Security Token Service (STS) policy document that defines permissions for token service usage within the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTags">OdbOdbNetworkTags</a>></code> | Tags to assign to the Odb Network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.zeroEtlAccess">zeroEtlAccess</a></code> | <code>java.lang.String</code> | Specifies the configuration for Zero-ETL access from the ODB network. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

The AWS Availability Zone (AZ) where the ODB network is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_odb_network#availability_zone OdbOdbNetwork#availability_zone}

---

##### `availabilityZoneId`<sup>Optional</sup> <a name="availabilityZoneId" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.availabilityZoneId"></a>

```java
public java.lang.String getAvailabilityZoneId();
```

- *Type:* java.lang.String

The AZ ID of the AZ where the ODB network is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_odb_network#availability_zone_id OdbOdbNetwork#availability_zone_id}

---

##### `backupSubnetCidr`<sup>Optional</sup> <a name="backupSubnetCidr" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.backupSubnetCidr"></a>

```java
public java.lang.String getBackupSubnetCidr();
```

- *Type:* java.lang.String

The CIDR range of the backup subnet in the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_odb_network#backup_subnet_cidr OdbOdbNetwork#backup_subnet_cidr}

---

##### `clientSubnetCidr`<sup>Optional</sup> <a name="clientSubnetCidr" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.clientSubnetCidr"></a>

```java
public java.lang.String getClientSubnetCidr();
```

- *Type:* java.lang.String

The CIDR range of the client subnet in the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_odb_network#client_subnet_cidr OdbOdbNetwork#client_subnet_cidr}

---

##### `crossRegionS3RestoreSources`<sup>Optional</sup> <a name="crossRegionS3RestoreSources" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.crossRegionS3RestoreSources"></a>

```java
public java.util.List<java.lang.String> getCrossRegionS3RestoreSources();
```

- *Type:* java.util.List<java.lang.String>

The cross-Region Amazon S3 restore sources for the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_odb_network#cross_region_s3_restore_sources OdbOdbNetwork#cross_region_s3_restore_sources}

---

##### `customDomainName`<sup>Optional</sup> <a name="customDomainName" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.customDomainName"></a>

```java
public java.lang.String getCustomDomainName();
```

- *Type:* java.lang.String

The domain name to use for the resources in the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_odb_network#custom_domain_name OdbOdbNetwork#custom_domain_name}

---

##### `defaultDnsPrefix`<sup>Optional</sup> <a name="defaultDnsPrefix" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.defaultDnsPrefix"></a>

```java
public java.lang.String getDefaultDnsPrefix();
```

- *Type:* java.lang.String

The DNS prefix to the default DNS domain name. The default DNS domain name is oraclevcn.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_odb_network#default_dns_prefix OdbOdbNetwork#default_dns_prefix}

---

##### `deleteAssociatedResources`<sup>Optional</sup> <a name="deleteAssociatedResources" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.deleteAssociatedResources"></a>

```java
public java.lang.Boolean|IResolvable getDeleteAssociatedResources();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether to delete associated OCI networking resources along with the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_odb_network#delete_associated_resources OdbOdbNetwork#delete_associated_resources}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The user-friendly name of the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_odb_network#display_name OdbOdbNetwork#display_name}

---

##### `kmsAccess`<sup>Optional</sup> <a name="kmsAccess" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.kmsAccess"></a>

```java
public java.lang.String getKmsAccess();
```

- *Type:* java.lang.String

The AWS Key Management Service (KMS) access configuration for the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_odb_network#kms_access OdbOdbNetwork#kms_access}

---

##### `kmsPolicyDocument`<sup>Optional</sup> <a name="kmsPolicyDocument" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.kmsPolicyDocument"></a>

```java
public java.lang.String getKmsPolicyDocument();
```

- *Type:* java.lang.String

The AWS Key Management Service (KMS) policy document that defines permissions for key usage within the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_odb_network#kms_policy_document OdbOdbNetwork#kms_policy_document}

---

##### `s3Access`<sup>Optional</sup> <a name="s3Access" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.s3Access"></a>

```java
public java.lang.String getS3Access();
```

- *Type:* java.lang.String

Specifies the configuration for Amazon S3 access from the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_odb_network#s3_access OdbOdbNetwork#s3_access}

---

##### `s3PolicyDocument`<sup>Optional</sup> <a name="s3PolicyDocument" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.s3PolicyDocument"></a>

```java
public java.lang.String getS3PolicyDocument();
```

- *Type:* java.lang.String

Specifies the endpoint policy for Amazon S3 access from the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_odb_network#s3_policy_document OdbOdbNetwork#s3_policy_document}

---

##### `stsAccess`<sup>Optional</sup> <a name="stsAccess" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.stsAccess"></a>

```java
public java.lang.String getStsAccess();
```

- *Type:* java.lang.String

The AWS Security Token Service (STS) access configuration for the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_odb_network#sts_access OdbOdbNetwork#sts_access}

---

##### `stsPolicyDocument`<sup>Optional</sup> <a name="stsPolicyDocument" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.stsPolicyDocument"></a>

```java
public java.lang.String getStsPolicyDocument();
```

- *Type:* java.lang.String

The AWS Security Token Service (STS) policy document that defines permissions for token service usage within the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_odb_network#sts_policy_document OdbOdbNetwork#sts_policy_document}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.tags"></a>

```java
public IResolvable|java.util.List<OdbOdbNetworkTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTags">OdbOdbNetworkTags</a>>

Tags to assign to the Odb Network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_odb_network#tags OdbOdbNetwork#tags}

---

##### `zeroEtlAccess`<sup>Optional</sup> <a name="zeroEtlAccess" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.zeroEtlAccess"></a>

```java
public java.lang.String getZeroEtlAccess();
```

- *Type:* java.lang.String

Specifies the configuration for Zero-ETL access from the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_odb_network#zero_etl_access OdbOdbNetwork#zero_etl_access}

---

### OdbOdbNetworkManagedServices <a name="OdbOdbNetworkManagedServices" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServices.Initializer"></a>

```java
import io.cdktn.providers.awscc.odb_odb_network.OdbOdbNetworkManagedServices;

OdbOdbNetworkManagedServices.builder()
    .build();
```


### OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess <a name="OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess.Initializer"></a>

```java
import io.cdktn.providers.awscc.odb_odb_network.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess;

OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess.builder()
    .build();
```


### OdbOdbNetworkManagedServicesKmsAccess <a name="OdbOdbNetworkManagedServicesKmsAccess" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccess.Initializer"></a>

```java
import io.cdktn.providers.awscc.odb_odb_network.OdbOdbNetworkManagedServicesKmsAccess;

OdbOdbNetworkManagedServicesKmsAccess.builder()
    .build();
```


### OdbOdbNetworkManagedServicesManagedS3BackupAccess <a name="OdbOdbNetworkManagedServicesManagedS3BackupAccess" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccess.Initializer"></a>

```java
import io.cdktn.providers.awscc.odb_odb_network.OdbOdbNetworkManagedServicesManagedS3BackupAccess;

OdbOdbNetworkManagedServicesManagedS3BackupAccess.builder()
    .build();
```


### OdbOdbNetworkManagedServicesS3Access <a name="OdbOdbNetworkManagedServicesS3Access" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3Access"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3Access.Initializer"></a>

```java
import io.cdktn.providers.awscc.odb_odb_network.OdbOdbNetworkManagedServicesS3Access;

OdbOdbNetworkManagedServicesS3Access.builder()
    .build();
```


### OdbOdbNetworkManagedServicesServiceNetworkEndpoint <a name="OdbOdbNetworkManagedServicesServiceNetworkEndpoint" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpoint.Initializer"></a>

```java
import io.cdktn.providers.awscc.odb_odb_network.OdbOdbNetworkManagedServicesServiceNetworkEndpoint;

OdbOdbNetworkManagedServicesServiceNetworkEndpoint.builder()
    .build();
```


### OdbOdbNetworkManagedServicesStsAccess <a name="OdbOdbNetworkManagedServicesStsAccess" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccess.Initializer"></a>

```java
import io.cdktn.providers.awscc.odb_odb_network.OdbOdbNetworkManagedServicesStsAccess;

OdbOdbNetworkManagedServicesStsAccess.builder()
    .build();
```


### OdbOdbNetworkManagedServicesZeroEtlAccess <a name="OdbOdbNetworkManagedServicesZeroEtlAccess" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccess.Initializer"></a>

```java
import io.cdktn.providers.awscc.odb_odb_network.OdbOdbNetworkManagedServicesZeroEtlAccess;

OdbOdbNetworkManagedServicesZeroEtlAccess.builder()
    .build();
```


### OdbOdbNetworkTags <a name="OdbOdbNetworkTags" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.odb_odb_network.OdbOdbNetworkTags;

OdbOdbNetworkTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., :, /, =, +,

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that's 1 to 256 characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/odb_odb_network#value OdbOdbNetwork#value}

---

## Classes <a name="Classes" id="Classes"></a>

### OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList <a name="OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.Initializer"></a>

```java
import io.cdktn.providers.awscc.odb_odb_network.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList;

new OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.get"></a>

```java
public OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference <a name="OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.odb_odb_network.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference;

new OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.ipv4Addresses">ipv4Addresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess">OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipv4Addresses`<sup>Required</sup> <a name="ipv4Addresses" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.ipv4Addresses"></a>

```java
public java.util.List<java.lang.String> getIpv4Addresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.internalValue"></a>

```java
public OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess">OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess</a>

---


### OdbOdbNetworkManagedServicesKmsAccessOutputReference <a name="OdbOdbNetworkManagedServicesKmsAccessOutputReference" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.odb_odb_network.OdbOdbNetworkManagedServicesKmsAccessOutputReference;

new OdbOdbNetworkManagedServicesKmsAccessOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.property.ipv4Addresses">ipv4Addresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.property.kmsPolicyDocument">kmsPolicyDocument</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccess">OdbOdbNetworkManagedServicesKmsAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `ipv4Addresses`<sup>Required</sup> <a name="ipv4Addresses" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.property.ipv4Addresses"></a>

```java
public java.util.List<java.lang.String> getIpv4Addresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `kmsPolicyDocument`<sup>Required</sup> <a name="kmsPolicyDocument" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.property.kmsPolicyDocument"></a>

```java
public java.lang.String getKmsPolicyDocument();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.property.internalValue"></a>

```java
public OdbOdbNetworkManagedServicesKmsAccess getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccess">OdbOdbNetworkManagedServicesKmsAccess</a>

---


### OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference <a name="OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.odb_odb_network.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference;

new OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.ipv4Addresses">ipv4Addresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccess">OdbOdbNetworkManagedServicesManagedS3BackupAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipv4Addresses`<sup>Required</sup> <a name="ipv4Addresses" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.ipv4Addresses"></a>

```java
public java.util.List<java.lang.String> getIpv4Addresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.internalValue"></a>

```java
public OdbOdbNetworkManagedServicesManagedS3BackupAccess getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccess">OdbOdbNetworkManagedServicesManagedS3BackupAccess</a>

---


### OdbOdbNetworkManagedServicesOutputReference <a name="OdbOdbNetworkManagedServicesOutputReference" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.odb_odb_network.OdbOdbNetworkManagedServicesOutputReference;

new OdbOdbNetworkManagedServicesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.crossRegionS3RestoreSourcesAccess">crossRegionS3RestoreSourcesAccess</a></code> | <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList">OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.kmsAccess">kmsAccess</a></code> | <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference">OdbOdbNetworkManagedServicesKmsAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.managedS3BackupAccess">managedS3BackupAccess</a></code> | <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference">OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.managedServicesIpv4Cidrs">managedServicesIpv4Cidrs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.resourceGatewayArn">resourceGatewayArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.s3Access">s3Access</a></code> | <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference">OdbOdbNetworkManagedServicesS3AccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.serviceNetworkArn">serviceNetworkArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.serviceNetworkEndpoint">serviceNetworkEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference">OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.stsAccess">stsAccess</a></code> | <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference">OdbOdbNetworkManagedServicesStsAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.zeroEtlAccess">zeroEtlAccess</a></code> | <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference">OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServices">OdbOdbNetworkManagedServices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `crossRegionS3RestoreSourcesAccess`<sup>Required</sup> <a name="crossRegionS3RestoreSourcesAccess" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.crossRegionS3RestoreSourcesAccess"></a>

```java
public OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList getCrossRegionS3RestoreSourcesAccess();
```

- *Type:* <a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList">OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList</a>

---

##### `kmsAccess`<sup>Required</sup> <a name="kmsAccess" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.kmsAccess"></a>

```java
public OdbOdbNetworkManagedServicesKmsAccessOutputReference getKmsAccess();
```

- *Type:* <a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference">OdbOdbNetworkManagedServicesKmsAccessOutputReference</a>

---

##### `managedS3BackupAccess`<sup>Required</sup> <a name="managedS3BackupAccess" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.managedS3BackupAccess"></a>

```java
public OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference getManagedS3BackupAccess();
```

- *Type:* <a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference">OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference</a>

---

##### `managedServicesIpv4Cidrs`<sup>Required</sup> <a name="managedServicesIpv4Cidrs" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.managedServicesIpv4Cidrs"></a>

```java
public java.util.List<java.lang.String> getManagedServicesIpv4Cidrs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceGatewayArn`<sup>Required</sup> <a name="resourceGatewayArn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.resourceGatewayArn"></a>

```java
public java.lang.String getResourceGatewayArn();
```

- *Type:* java.lang.String

---

##### `s3Access`<sup>Required</sup> <a name="s3Access" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.s3Access"></a>

```java
public OdbOdbNetworkManagedServicesS3AccessOutputReference getS3Access();
```

- *Type:* <a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference">OdbOdbNetworkManagedServicesS3AccessOutputReference</a>

---

##### `serviceNetworkArn`<sup>Required</sup> <a name="serviceNetworkArn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.serviceNetworkArn"></a>

```java
public java.lang.String getServiceNetworkArn();
```

- *Type:* java.lang.String

---

##### `serviceNetworkEndpoint`<sup>Required</sup> <a name="serviceNetworkEndpoint" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.serviceNetworkEndpoint"></a>

```java
public OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference getServiceNetworkEndpoint();
```

- *Type:* <a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference">OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference</a>

---

##### `stsAccess`<sup>Required</sup> <a name="stsAccess" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.stsAccess"></a>

```java
public OdbOdbNetworkManagedServicesStsAccessOutputReference getStsAccess();
```

- *Type:* <a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference">OdbOdbNetworkManagedServicesStsAccessOutputReference</a>

---

##### `zeroEtlAccess`<sup>Required</sup> <a name="zeroEtlAccess" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.zeroEtlAccess"></a>

```java
public OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference getZeroEtlAccess();
```

- *Type:* <a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference">OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.internalValue"></a>

```java
public OdbOdbNetworkManagedServices getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServices">OdbOdbNetworkManagedServices</a>

---


### OdbOdbNetworkManagedServicesS3AccessOutputReference <a name="OdbOdbNetworkManagedServicesS3AccessOutputReference" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.odb_odb_network.OdbOdbNetworkManagedServicesS3AccessOutputReference;

new OdbOdbNetworkManagedServicesS3AccessOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.property.ipv4Addresses">ipv4Addresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.property.s3PolicyDocument">s3PolicyDocument</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3Access">OdbOdbNetworkManagedServicesS3Access</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `ipv4Addresses`<sup>Required</sup> <a name="ipv4Addresses" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.property.ipv4Addresses"></a>

```java
public java.util.List<java.lang.String> getIpv4Addresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `s3PolicyDocument`<sup>Required</sup> <a name="s3PolicyDocument" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.property.s3PolicyDocument"></a>

```java
public java.lang.String getS3PolicyDocument();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.property.internalValue"></a>

```java
public OdbOdbNetworkManagedServicesS3Access getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3Access">OdbOdbNetworkManagedServicesS3Access</a>

---


### OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference <a name="OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.odb_odb_network.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference;

new OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.vpcEndpointId">vpcEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.vpcEndpointType">vpcEndpointType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpoint">OdbOdbNetworkManagedServicesServiceNetworkEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `vpcEndpointId`<sup>Required</sup> <a name="vpcEndpointId" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.vpcEndpointId"></a>

```java
public java.lang.String getVpcEndpointId();
```

- *Type:* java.lang.String

---

##### `vpcEndpointType`<sup>Required</sup> <a name="vpcEndpointType" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.vpcEndpointType"></a>

```java
public java.lang.String getVpcEndpointType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.internalValue"></a>

```java
public OdbOdbNetworkManagedServicesServiceNetworkEndpoint getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpoint">OdbOdbNetworkManagedServicesServiceNetworkEndpoint</a>

---


### OdbOdbNetworkManagedServicesStsAccessOutputReference <a name="OdbOdbNetworkManagedServicesStsAccessOutputReference" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.odb_odb_network.OdbOdbNetworkManagedServicesStsAccessOutputReference;

new OdbOdbNetworkManagedServicesStsAccessOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.property.ipv4Addresses">ipv4Addresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.property.stsPolicyDocument">stsPolicyDocument</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccess">OdbOdbNetworkManagedServicesStsAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `ipv4Addresses`<sup>Required</sup> <a name="ipv4Addresses" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.property.ipv4Addresses"></a>

```java
public java.util.List<java.lang.String> getIpv4Addresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `stsPolicyDocument`<sup>Required</sup> <a name="stsPolicyDocument" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.property.stsPolicyDocument"></a>

```java
public java.lang.String getStsPolicyDocument();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.property.internalValue"></a>

```java
public OdbOdbNetworkManagedServicesStsAccess getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccess">OdbOdbNetworkManagedServicesStsAccess</a>

---


### OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference <a name="OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.odb_odb_network.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference;

new OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.property.cidr">cidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccess">OdbOdbNetworkManagedServicesZeroEtlAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.property.cidr"></a>

```java
public java.lang.String getCidr();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.property.internalValue"></a>

```java
public OdbOdbNetworkManagedServicesZeroEtlAccess getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccess">OdbOdbNetworkManagedServicesZeroEtlAccess</a>

---


### OdbOdbNetworkTagsList <a name="OdbOdbNetworkTagsList" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.odb_odb_network.OdbOdbNetworkTagsList;

new OdbOdbNetworkTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.get"></a>

```java
public OdbOdbNetworkTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTags">OdbOdbNetworkTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<OdbOdbNetworkTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTags">OdbOdbNetworkTags</a>>

---


### OdbOdbNetworkTagsOutputReference <a name="OdbOdbNetworkTagsOutputReference" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.odb_odb_network.OdbOdbNetworkTagsOutputReference;

new OdbOdbNetworkTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTags">OdbOdbNetworkTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|OdbOdbNetworkTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTags">OdbOdbNetworkTags</a>

---



