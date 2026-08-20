# `odbOdbNetwork` Submodule <a name="`odbOdbNetwork` Submodule" id="@cdktn/provider-awscc.odbOdbNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OdbOdbNetwork <a name="OdbOdbNetwork" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_odb_network awscc_odb_odb_network}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer"></a>

```python
from cdktn_provider_awscc import odb_odb_network

odbOdbNetwork.OdbOdbNetwork(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  availability_zone: str = None,
  availability_zone_id: str = None,
  backup_subnet_cidr: str = None,
  client_subnet_cidr: str = None,
  cross_region_s3_restore_sources: typing.List[str] = None,
  custom_domain_name: str = None,
  default_dns_prefix: str = None,
  delete_associated_resources: bool | IResolvable = None,
  display_name: str = None,
  kms_access: str = None,
  kms_policy_document: str = None,
  s3_access: str = None,
  s3_policy_document: str = None,
  sts_access: str = None,
  sts_policy_document: str = None,
  tags: IResolvable | typing.List[OdbOdbNetworkTags] = None,
  zero_etl_access: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.availabilityZone">availability_zone</a></code> | <code>str</code> | The AWS Availability Zone (AZ) where the ODB network is located. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.availabilityZoneId">availability_zone_id</a></code> | <code>str</code> | The AZ ID of the AZ where the ODB network is located. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.backupSubnetCidr">backup_subnet_cidr</a></code> | <code>str</code> | The CIDR range of the backup subnet in the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.clientSubnetCidr">client_subnet_cidr</a></code> | <code>str</code> | The CIDR range of the client subnet in the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.crossRegionS3RestoreSources">cross_region_s3_restore_sources</a></code> | <code>typing.List[str]</code> | The cross-Region Amazon S3 restore sources for the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.customDomainName">custom_domain_name</a></code> | <code>str</code> | The domain name to use for the resources in the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.defaultDnsPrefix">default_dns_prefix</a></code> | <code>str</code> | The DNS prefix to the default DNS domain name. The default DNS domain name is oraclevcn.com. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.deleteAssociatedResources">delete_associated_resources</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether to delete associated OCI networking resources along with the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The user-friendly name of the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.kmsAccess">kms_access</a></code> | <code>str</code> | The AWS Key Management Service (KMS) access configuration for the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.kmsPolicyDocument">kms_policy_document</a></code> | <code>str</code> | The AWS Key Management Service (KMS) policy document that defines permissions for key usage within the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.s3Access">s3_access</a></code> | <code>str</code> | Specifies the configuration for Amazon S3 access from the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.s3PolicyDocument">s3_policy_document</a></code> | <code>str</code> | Specifies the endpoint policy for Amazon S3 access from the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.stsAccess">sts_access</a></code> | <code>str</code> | The AWS Security Token Service (STS) access configuration for the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.stsPolicyDocument">sts_policy_document</a></code> | <code>str</code> | The AWS Security Token Service (STS) policy document that defines permissions for token service usage within the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTags">OdbOdbNetworkTags</a>]</code> | Tags to assign to the Odb Network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.zeroEtlAccess">zero_etl_access</a></code> | <code>str</code> | Specifies the configuration for Zero-ETL access from the ODB network. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.availabilityZone"></a>

- *Type:* str

The AWS Availability Zone (AZ) where the ODB network is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_odb_network#availability_zone OdbOdbNetwork#availability_zone}

---

##### `availability_zone_id`<sup>Optional</sup> <a name="availability_zone_id" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.availabilityZoneId"></a>

- *Type:* str

The AZ ID of the AZ where the ODB network is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_odb_network#availability_zone_id OdbOdbNetwork#availability_zone_id}

---

##### `backup_subnet_cidr`<sup>Optional</sup> <a name="backup_subnet_cidr" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.backupSubnetCidr"></a>

- *Type:* str

The CIDR range of the backup subnet in the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_odb_network#backup_subnet_cidr OdbOdbNetwork#backup_subnet_cidr}

---

##### `client_subnet_cidr`<sup>Optional</sup> <a name="client_subnet_cidr" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.clientSubnetCidr"></a>

- *Type:* str

The CIDR range of the client subnet in the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_odb_network#client_subnet_cidr OdbOdbNetwork#client_subnet_cidr}

---

##### `cross_region_s3_restore_sources`<sup>Optional</sup> <a name="cross_region_s3_restore_sources" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.crossRegionS3RestoreSources"></a>

- *Type:* typing.List[str]

The cross-Region Amazon S3 restore sources for the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_odb_network#cross_region_s3_restore_sources OdbOdbNetwork#cross_region_s3_restore_sources}

---

##### `custom_domain_name`<sup>Optional</sup> <a name="custom_domain_name" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.customDomainName"></a>

- *Type:* str

The domain name to use for the resources in the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_odb_network#custom_domain_name OdbOdbNetwork#custom_domain_name}

---

##### `default_dns_prefix`<sup>Optional</sup> <a name="default_dns_prefix" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.defaultDnsPrefix"></a>

- *Type:* str

The DNS prefix to the default DNS domain name. The default DNS domain name is oraclevcn.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_odb_network#default_dns_prefix OdbOdbNetwork#default_dns_prefix}

---

##### `delete_associated_resources`<sup>Optional</sup> <a name="delete_associated_resources" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.deleteAssociatedResources"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether to delete associated OCI networking resources along with the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_odb_network#delete_associated_resources OdbOdbNetwork#delete_associated_resources}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.displayName"></a>

- *Type:* str

The user-friendly name of the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_odb_network#display_name OdbOdbNetwork#display_name}

---

##### `kms_access`<sup>Optional</sup> <a name="kms_access" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.kmsAccess"></a>

- *Type:* str

The AWS Key Management Service (KMS) access configuration for the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_odb_network#kms_access OdbOdbNetwork#kms_access}

---

##### `kms_policy_document`<sup>Optional</sup> <a name="kms_policy_document" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.kmsPolicyDocument"></a>

- *Type:* str

The AWS Key Management Service (KMS) policy document that defines permissions for key usage within the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_odb_network#kms_policy_document OdbOdbNetwork#kms_policy_document}

---

##### `s3_access`<sup>Optional</sup> <a name="s3_access" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.s3Access"></a>

- *Type:* str

Specifies the configuration for Amazon S3 access from the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_odb_network#s3_access OdbOdbNetwork#s3_access}

---

##### `s3_policy_document`<sup>Optional</sup> <a name="s3_policy_document" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.s3PolicyDocument"></a>

- *Type:* str

Specifies the endpoint policy for Amazon S3 access from the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_odb_network#s3_policy_document OdbOdbNetwork#s3_policy_document}

---

##### `sts_access`<sup>Optional</sup> <a name="sts_access" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.stsAccess"></a>

- *Type:* str

The AWS Security Token Service (STS) access configuration for the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_odb_network#sts_access OdbOdbNetwork#sts_access}

---

##### `sts_policy_document`<sup>Optional</sup> <a name="sts_policy_document" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.stsPolicyDocument"></a>

- *Type:* str

The AWS Security Token Service (STS) policy document that defines permissions for token service usage within the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_odb_network#sts_policy_document OdbOdbNetwork#sts_policy_document}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTags">OdbOdbNetworkTags</a>]

Tags to assign to the Odb Network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_odb_network#tags OdbOdbNetwork#tags}

---

##### `zero_etl_access`<sup>Optional</sup> <a name="zero_etl_access" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.Initializer.parameter.zeroEtlAccess"></a>

- *Type:* str

Specifies the configuration for Zero-ETL access from the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_odb_network#zero_etl_access OdbOdbNetwork#zero_etl_access}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetAvailabilityZoneId">reset_availability_zone_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetBackupSubnetCidr">reset_backup_subnet_cidr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetClientSubnetCidr">reset_client_subnet_cidr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetCrossRegionS3RestoreSources">reset_cross_region_s3_restore_sources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetCustomDomainName">reset_custom_domain_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetDefaultDnsPrefix">reset_default_dns_prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetDeleteAssociatedResources">reset_delete_associated_resources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetKmsAccess">reset_kms_access</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetKmsPolicyDocument">reset_kms_policy_document</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetS3Access">reset_s3_access</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetS3PolicyDocument">reset_s3_policy_document</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetStsAccess">reset_sts_access</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetStsPolicyDocument">reset_sts_policy_document</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetZeroEtlAccess">reset_zero_etl_access</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[OdbOdbNetworkTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTags">OdbOdbNetworkTags</a>]

---

##### `reset_availability_zone` <a name="reset_availability_zone" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetAvailabilityZone"></a>

```python
def reset_availability_zone() -> None
```

##### `reset_availability_zone_id` <a name="reset_availability_zone_id" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetAvailabilityZoneId"></a>

```python
def reset_availability_zone_id() -> None
```

##### `reset_backup_subnet_cidr` <a name="reset_backup_subnet_cidr" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetBackupSubnetCidr"></a>

```python
def reset_backup_subnet_cidr() -> None
```

##### `reset_client_subnet_cidr` <a name="reset_client_subnet_cidr" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetClientSubnetCidr"></a>

```python
def reset_client_subnet_cidr() -> None
```

##### `reset_cross_region_s3_restore_sources` <a name="reset_cross_region_s3_restore_sources" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetCrossRegionS3RestoreSources"></a>

```python
def reset_cross_region_s3_restore_sources() -> None
```

##### `reset_custom_domain_name` <a name="reset_custom_domain_name" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetCustomDomainName"></a>

```python
def reset_custom_domain_name() -> None
```

##### `reset_default_dns_prefix` <a name="reset_default_dns_prefix" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetDefaultDnsPrefix"></a>

```python
def reset_default_dns_prefix() -> None
```

##### `reset_delete_associated_resources` <a name="reset_delete_associated_resources" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetDeleteAssociatedResources"></a>

```python
def reset_delete_associated_resources() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_kms_access` <a name="reset_kms_access" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetKmsAccess"></a>

```python
def reset_kms_access() -> None
```

##### `reset_kms_policy_document` <a name="reset_kms_policy_document" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetKmsPolicyDocument"></a>

```python
def reset_kms_policy_document() -> None
```

##### `reset_s3_access` <a name="reset_s3_access" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetS3Access"></a>

```python
def reset_s3_access() -> None
```

##### `reset_s3_policy_document` <a name="reset_s3_policy_document" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetS3PolicyDocument"></a>

```python
def reset_s3_policy_document() -> None
```

##### `reset_sts_access` <a name="reset_sts_access" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetStsAccess"></a>

```python
def reset_sts_access() -> None
```

##### `reset_sts_policy_document` <a name="reset_sts_policy_document" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetStsPolicyDocument"></a>

```python
def reset_sts_policy_document() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_zero_etl_access` <a name="reset_zero_etl_access" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.resetZeroEtlAccess"></a>

```python
def reset_zero_etl_access() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a OdbOdbNetwork resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.isConstruct"></a>

```python
from cdktn_provider_awscc import odb_odb_network

odbOdbNetwork.OdbOdbNetwork.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.isTerraformElement"></a>

```python
from cdktn_provider_awscc import odb_odb_network

odbOdbNetwork.OdbOdbNetwork.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.isTerraformResource"></a>

```python
from cdktn_provider_awscc import odb_odb_network

odbOdbNetwork.OdbOdbNetwork.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import odb_odb_network

odbOdbNetwork.OdbOdbNetwork.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a OdbOdbNetwork resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OdbOdbNetwork to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OdbOdbNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_odb_network#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OdbOdbNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.ec2PlacementGroupIds">ec2_placement_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.managedServices">managed_services</a></code> | <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference">OdbOdbNetworkManagedServicesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.ociNetworkAnchorId">oci_network_anchor_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.ociResourceAnchorName">oci_resource_anchor_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.ociVcnUrl">oci_vcn_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.odbNetworkArn">odb_network_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.odbNetworkId">odb_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList">OdbOdbNetworkTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.availabilityZoneIdInput">availability_zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.backupSubnetCidrInput">backup_subnet_cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.clientSubnetCidrInput">client_subnet_cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.crossRegionS3RestoreSourcesInput">cross_region_s3_restore_sources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.customDomainNameInput">custom_domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.defaultDnsPrefixInput">default_dns_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.deleteAssociatedResourcesInput">delete_associated_resources_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.kmsAccessInput">kms_access_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.kmsPolicyDocumentInput">kms_policy_document_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.s3AccessInput">s3_access_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.s3PolicyDocumentInput">s3_policy_document_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.stsAccessInput">sts_access_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.stsPolicyDocumentInput">sts_policy_document_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTags">OdbOdbNetworkTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.zeroEtlAccessInput">zero_etl_access_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.availabilityZoneId">availability_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.backupSubnetCidr">backup_subnet_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.clientSubnetCidr">client_subnet_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.crossRegionS3RestoreSources">cross_region_s3_restore_sources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.customDomainName">custom_domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.defaultDnsPrefix">default_dns_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.deleteAssociatedResources">delete_associated_resources</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.kmsAccess">kms_access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.kmsPolicyDocument">kms_policy_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.s3Access">s3_access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.s3PolicyDocument">s3_policy_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.stsAccess">sts_access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.stsPolicyDocument">sts_policy_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.zeroEtlAccess">zero_etl_access</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `ec2_placement_group_ids`<sup>Required</sup> <a name="ec2_placement_group_ids" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.ec2PlacementGroupIds"></a>

```python
ec2_placement_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_services`<sup>Required</sup> <a name="managed_services" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.managedServices"></a>

```python
managed_services: OdbOdbNetworkManagedServicesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference">OdbOdbNetworkManagedServicesOutputReference</a>

---

##### `oci_network_anchor_id`<sup>Required</sup> <a name="oci_network_anchor_id" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.ociNetworkAnchorId"></a>

```python
oci_network_anchor_id: str
```

- *Type:* str

---

##### `oci_resource_anchor_name`<sup>Required</sup> <a name="oci_resource_anchor_name" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.ociResourceAnchorName"></a>

```python
oci_resource_anchor_name: str
```

- *Type:* str

---

##### `oci_vcn_url`<sup>Required</sup> <a name="oci_vcn_url" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.ociVcnUrl"></a>

```python
oci_vcn_url: str
```

- *Type:* str

---

##### `odb_network_arn`<sup>Required</sup> <a name="odb_network_arn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.odbNetworkArn"></a>

```python
odb_network_arn: str
```

- *Type:* str

---

##### `odb_network_id`<sup>Required</sup> <a name="odb_network_id" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.odbNetworkId"></a>

```python
odb_network_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.tags"></a>

```python
tags: OdbOdbNetworkTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList">OdbOdbNetworkTagsList</a>

---

##### `availability_zone_id_input`<sup>Optional</sup> <a name="availability_zone_id_input" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.availabilityZoneIdInput"></a>

```python
availability_zone_id_input: str
```

- *Type:* str

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `backup_subnet_cidr_input`<sup>Optional</sup> <a name="backup_subnet_cidr_input" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.backupSubnetCidrInput"></a>

```python
backup_subnet_cidr_input: str
```

- *Type:* str

---

##### `client_subnet_cidr_input`<sup>Optional</sup> <a name="client_subnet_cidr_input" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.clientSubnetCidrInput"></a>

```python
client_subnet_cidr_input: str
```

- *Type:* str

---

##### `cross_region_s3_restore_sources_input`<sup>Optional</sup> <a name="cross_region_s3_restore_sources_input" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.crossRegionS3RestoreSourcesInput"></a>

```python
cross_region_s3_restore_sources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_domain_name_input`<sup>Optional</sup> <a name="custom_domain_name_input" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.customDomainNameInput"></a>

```python
custom_domain_name_input: str
```

- *Type:* str

---

##### `default_dns_prefix_input`<sup>Optional</sup> <a name="default_dns_prefix_input" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.defaultDnsPrefixInput"></a>

```python
default_dns_prefix_input: str
```

- *Type:* str

---

##### `delete_associated_resources_input`<sup>Optional</sup> <a name="delete_associated_resources_input" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.deleteAssociatedResourcesInput"></a>

```python
delete_associated_resources_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `kms_access_input`<sup>Optional</sup> <a name="kms_access_input" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.kmsAccessInput"></a>

```python
kms_access_input: str
```

- *Type:* str

---

##### `kms_policy_document_input`<sup>Optional</sup> <a name="kms_policy_document_input" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.kmsPolicyDocumentInput"></a>

```python
kms_policy_document_input: str
```

- *Type:* str

---

##### `s3_access_input`<sup>Optional</sup> <a name="s3_access_input" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.s3AccessInput"></a>

```python
s3_access_input: str
```

- *Type:* str

---

##### `s3_policy_document_input`<sup>Optional</sup> <a name="s3_policy_document_input" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.s3PolicyDocumentInput"></a>

```python
s3_policy_document_input: str
```

- *Type:* str

---

##### `sts_access_input`<sup>Optional</sup> <a name="sts_access_input" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.stsAccessInput"></a>

```python
sts_access_input: str
```

- *Type:* str

---

##### `sts_policy_document_input`<sup>Optional</sup> <a name="sts_policy_document_input" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.stsPolicyDocumentInput"></a>

```python
sts_policy_document_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[OdbOdbNetworkTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTags">OdbOdbNetworkTags</a>]

---

##### `zero_etl_access_input`<sup>Optional</sup> <a name="zero_etl_access_input" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.zeroEtlAccessInput"></a>

```python
zero_etl_access_input: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `availability_zone_id`<sup>Required</sup> <a name="availability_zone_id" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.availabilityZoneId"></a>

```python
availability_zone_id: str
```

- *Type:* str

---

##### `backup_subnet_cidr`<sup>Required</sup> <a name="backup_subnet_cidr" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.backupSubnetCidr"></a>

```python
backup_subnet_cidr: str
```

- *Type:* str

---

##### `client_subnet_cidr`<sup>Required</sup> <a name="client_subnet_cidr" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.clientSubnetCidr"></a>

```python
client_subnet_cidr: str
```

- *Type:* str

---

##### `cross_region_s3_restore_sources`<sup>Required</sup> <a name="cross_region_s3_restore_sources" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.crossRegionS3RestoreSources"></a>

```python
cross_region_s3_restore_sources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_domain_name`<sup>Required</sup> <a name="custom_domain_name" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.customDomainName"></a>

```python
custom_domain_name: str
```

- *Type:* str

---

##### `default_dns_prefix`<sup>Required</sup> <a name="default_dns_prefix" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.defaultDnsPrefix"></a>

```python
default_dns_prefix: str
```

- *Type:* str

---

##### `delete_associated_resources`<sup>Required</sup> <a name="delete_associated_resources" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.deleteAssociatedResources"></a>

```python
delete_associated_resources: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `kms_access`<sup>Required</sup> <a name="kms_access" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.kmsAccess"></a>

```python
kms_access: str
```

- *Type:* str

---

##### `kms_policy_document`<sup>Required</sup> <a name="kms_policy_document" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.kmsPolicyDocument"></a>

```python
kms_policy_document: str
```

- *Type:* str

---

##### `s3_access`<sup>Required</sup> <a name="s3_access" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.s3Access"></a>

```python
s3_access: str
```

- *Type:* str

---

##### `s3_policy_document`<sup>Required</sup> <a name="s3_policy_document" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.s3PolicyDocument"></a>

```python
s3_policy_document: str
```

- *Type:* str

---

##### `sts_access`<sup>Required</sup> <a name="sts_access" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.stsAccess"></a>

```python
sts_access: str
```

- *Type:* str

---

##### `sts_policy_document`<sup>Required</sup> <a name="sts_policy_document" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.stsPolicyDocument"></a>

```python
sts_policy_document: str
```

- *Type:* str

---

##### `zero_etl_access`<sup>Required</sup> <a name="zero_etl_access" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.zeroEtlAccess"></a>

```python
zero_etl_access: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetwork.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OdbOdbNetworkConfig <a name="OdbOdbNetworkConfig" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.Initializer"></a>

```python
from cdktn_provider_awscc import odb_odb_network

odbOdbNetwork.OdbOdbNetworkConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  availability_zone: str = None,
  availability_zone_id: str = None,
  backup_subnet_cidr: str = None,
  client_subnet_cidr: str = None,
  cross_region_s3_restore_sources: typing.List[str] = None,
  custom_domain_name: str = None,
  default_dns_prefix: str = None,
  delete_associated_resources: bool | IResolvable = None,
  display_name: str = None,
  kms_access: str = None,
  kms_policy_document: str = None,
  s3_access: str = None,
  s3_policy_document: str = None,
  sts_access: str = None,
  sts_policy_document: str = None,
  tags: IResolvable | typing.List[OdbOdbNetworkTags] = None,
  zero_etl_access: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.availabilityZone">availability_zone</a></code> | <code>str</code> | The AWS Availability Zone (AZ) where the ODB network is located. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.availabilityZoneId">availability_zone_id</a></code> | <code>str</code> | The AZ ID of the AZ where the ODB network is located. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.backupSubnetCidr">backup_subnet_cidr</a></code> | <code>str</code> | The CIDR range of the backup subnet in the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.clientSubnetCidr">client_subnet_cidr</a></code> | <code>str</code> | The CIDR range of the client subnet in the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.crossRegionS3RestoreSources">cross_region_s3_restore_sources</a></code> | <code>typing.List[str]</code> | The cross-Region Amazon S3 restore sources for the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.customDomainName">custom_domain_name</a></code> | <code>str</code> | The domain name to use for the resources in the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.defaultDnsPrefix">default_dns_prefix</a></code> | <code>str</code> | The DNS prefix to the default DNS domain name. The default DNS domain name is oraclevcn.com. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.deleteAssociatedResources">delete_associated_resources</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether to delete associated OCI networking resources along with the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.displayName">display_name</a></code> | <code>str</code> | The user-friendly name of the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.kmsAccess">kms_access</a></code> | <code>str</code> | The AWS Key Management Service (KMS) access configuration for the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.kmsPolicyDocument">kms_policy_document</a></code> | <code>str</code> | The AWS Key Management Service (KMS) policy document that defines permissions for key usage within the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.s3Access">s3_access</a></code> | <code>str</code> | Specifies the configuration for Amazon S3 access from the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.s3PolicyDocument">s3_policy_document</a></code> | <code>str</code> | Specifies the endpoint policy for Amazon S3 access from the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.stsAccess">sts_access</a></code> | <code>str</code> | The AWS Security Token Service (STS) access configuration for the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.stsPolicyDocument">sts_policy_document</a></code> | <code>str</code> | The AWS Security Token Service (STS) policy document that defines permissions for token service usage within the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTags">OdbOdbNetworkTags</a>]</code> | Tags to assign to the Odb Network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.zeroEtlAccess">zero_etl_access</a></code> | <code>str</code> | Specifies the configuration for Zero-ETL access from the ODB network. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

The AWS Availability Zone (AZ) where the ODB network is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_odb_network#availability_zone OdbOdbNetwork#availability_zone}

---

##### `availability_zone_id`<sup>Optional</sup> <a name="availability_zone_id" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.availabilityZoneId"></a>

```python
availability_zone_id: str
```

- *Type:* str

The AZ ID of the AZ where the ODB network is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_odb_network#availability_zone_id OdbOdbNetwork#availability_zone_id}

---

##### `backup_subnet_cidr`<sup>Optional</sup> <a name="backup_subnet_cidr" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.backupSubnetCidr"></a>

```python
backup_subnet_cidr: str
```

- *Type:* str

The CIDR range of the backup subnet in the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_odb_network#backup_subnet_cidr OdbOdbNetwork#backup_subnet_cidr}

---

##### `client_subnet_cidr`<sup>Optional</sup> <a name="client_subnet_cidr" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.clientSubnetCidr"></a>

```python
client_subnet_cidr: str
```

- *Type:* str

The CIDR range of the client subnet in the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_odb_network#client_subnet_cidr OdbOdbNetwork#client_subnet_cidr}

---

##### `cross_region_s3_restore_sources`<sup>Optional</sup> <a name="cross_region_s3_restore_sources" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.crossRegionS3RestoreSources"></a>

```python
cross_region_s3_restore_sources: typing.List[str]
```

- *Type:* typing.List[str]

The cross-Region Amazon S3 restore sources for the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_odb_network#cross_region_s3_restore_sources OdbOdbNetwork#cross_region_s3_restore_sources}

---

##### `custom_domain_name`<sup>Optional</sup> <a name="custom_domain_name" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.customDomainName"></a>

```python
custom_domain_name: str
```

- *Type:* str

The domain name to use for the resources in the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_odb_network#custom_domain_name OdbOdbNetwork#custom_domain_name}

---

##### `default_dns_prefix`<sup>Optional</sup> <a name="default_dns_prefix" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.defaultDnsPrefix"></a>

```python
default_dns_prefix: str
```

- *Type:* str

The DNS prefix to the default DNS domain name. The default DNS domain name is oraclevcn.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_odb_network#default_dns_prefix OdbOdbNetwork#default_dns_prefix}

---

##### `delete_associated_resources`<sup>Optional</sup> <a name="delete_associated_resources" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.deleteAssociatedResources"></a>

```python
delete_associated_resources: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether to delete associated OCI networking resources along with the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_odb_network#delete_associated_resources OdbOdbNetwork#delete_associated_resources}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The user-friendly name of the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_odb_network#display_name OdbOdbNetwork#display_name}

---

##### `kms_access`<sup>Optional</sup> <a name="kms_access" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.kmsAccess"></a>

```python
kms_access: str
```

- *Type:* str

The AWS Key Management Service (KMS) access configuration for the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_odb_network#kms_access OdbOdbNetwork#kms_access}

---

##### `kms_policy_document`<sup>Optional</sup> <a name="kms_policy_document" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.kmsPolicyDocument"></a>

```python
kms_policy_document: str
```

- *Type:* str

The AWS Key Management Service (KMS) policy document that defines permissions for key usage within the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_odb_network#kms_policy_document OdbOdbNetwork#kms_policy_document}

---

##### `s3_access`<sup>Optional</sup> <a name="s3_access" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.s3Access"></a>

```python
s3_access: str
```

- *Type:* str

Specifies the configuration for Amazon S3 access from the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_odb_network#s3_access OdbOdbNetwork#s3_access}

---

##### `s3_policy_document`<sup>Optional</sup> <a name="s3_policy_document" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.s3PolicyDocument"></a>

```python
s3_policy_document: str
```

- *Type:* str

Specifies the endpoint policy for Amazon S3 access from the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_odb_network#s3_policy_document OdbOdbNetwork#s3_policy_document}

---

##### `sts_access`<sup>Optional</sup> <a name="sts_access" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.stsAccess"></a>

```python
sts_access: str
```

- *Type:* str

The AWS Security Token Service (STS) access configuration for the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_odb_network#sts_access OdbOdbNetwork#sts_access}

---

##### `sts_policy_document`<sup>Optional</sup> <a name="sts_policy_document" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.stsPolicyDocument"></a>

```python
sts_policy_document: str
```

- *Type:* str

The AWS Security Token Service (STS) policy document that defines permissions for token service usage within the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_odb_network#sts_policy_document OdbOdbNetwork#sts_policy_document}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[OdbOdbNetworkTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTags">OdbOdbNetworkTags</a>]

Tags to assign to the Odb Network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_odb_network#tags OdbOdbNetwork#tags}

---

##### `zero_etl_access`<sup>Optional</sup> <a name="zero_etl_access" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkConfig.property.zeroEtlAccess"></a>

```python
zero_etl_access: str
```

- *Type:* str

Specifies the configuration for Zero-ETL access from the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_odb_network#zero_etl_access OdbOdbNetwork#zero_etl_access}

---

### OdbOdbNetworkManagedServices <a name="OdbOdbNetworkManagedServices" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServices.Initializer"></a>

```python
from cdktn_provider_awscc import odb_odb_network

odbOdbNetwork.OdbOdbNetworkManagedServices()
```


### OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess <a name="OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess.Initializer"></a>

```python
from cdktn_provider_awscc import odb_odb_network

odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess()
```


### OdbOdbNetworkManagedServicesKmsAccess <a name="OdbOdbNetworkManagedServicesKmsAccess" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccess.Initializer"></a>

```python
from cdktn_provider_awscc import odb_odb_network

odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccess()
```


### OdbOdbNetworkManagedServicesManagedS3BackupAccess <a name="OdbOdbNetworkManagedServicesManagedS3BackupAccess" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccess.Initializer"></a>

```python
from cdktn_provider_awscc import odb_odb_network

odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccess()
```


### OdbOdbNetworkManagedServicesS3Access <a name="OdbOdbNetworkManagedServicesS3Access" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3Access"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3Access.Initializer"></a>

```python
from cdktn_provider_awscc import odb_odb_network

odbOdbNetwork.OdbOdbNetworkManagedServicesS3Access()
```


### OdbOdbNetworkManagedServicesServiceNetworkEndpoint <a name="OdbOdbNetworkManagedServicesServiceNetworkEndpoint" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpoint.Initializer"></a>

```python
from cdktn_provider_awscc import odb_odb_network

odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpoint()
```


### OdbOdbNetworkManagedServicesStsAccess <a name="OdbOdbNetworkManagedServicesStsAccess" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccess.Initializer"></a>

```python
from cdktn_provider_awscc import odb_odb_network

odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccess()
```


### OdbOdbNetworkManagedServicesZeroEtlAccess <a name="OdbOdbNetworkManagedServicesZeroEtlAccess" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccess.Initializer"></a>

```python
from cdktn_provider_awscc import odb_odb_network

odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccess()
```


### OdbOdbNetworkTags <a name="OdbOdbNetworkTags" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTags.Initializer"></a>

```python
from cdktn_provider_awscc import odb_odb_network

odbOdbNetwork.OdbOdbNetworkTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., :, /, =, +,

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that's 1 to 256 characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_odb_network#value OdbOdbNetwork#value}

---

## Classes <a name="Classes" id="Classes"></a>

### OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList <a name="OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.Initializer"></a>

```python
from cdktn_provider_awscc import odb_odb_network

odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference <a name="OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import odb_odb_network

odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.ipv4Addresses">ipv4_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess">OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ipv4_addresses`<sup>Required</sup> <a name="ipv4_addresses" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.ipv4Addresses"></a>

```python
ipv4_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.internalValue"></a>

```python
internal_value: OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess
```

- *Type:* <a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess">OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess</a>

---


### OdbOdbNetworkManagedServicesKmsAccessOutputReference <a name="OdbOdbNetworkManagedServicesKmsAccessOutputReference" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import odb_odb_network

odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.property.ipv4Addresses">ipv4_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.property.kmsPolicyDocument">kms_policy_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccess">OdbOdbNetworkManagedServicesKmsAccess</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `ipv4_addresses`<sup>Required</sup> <a name="ipv4_addresses" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.property.ipv4Addresses"></a>

```python
ipv4_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `kms_policy_document`<sup>Required</sup> <a name="kms_policy_document" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.property.kmsPolicyDocument"></a>

```python
kms_policy_document: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference.property.internalValue"></a>

```python
internal_value: OdbOdbNetworkManagedServicesKmsAccess
```

- *Type:* <a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccess">OdbOdbNetworkManagedServicesKmsAccess</a>

---


### OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference <a name="OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import odb_odb_network

odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.ipv4Addresses">ipv4_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccess">OdbOdbNetworkManagedServicesManagedS3BackupAccess</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ipv4_addresses`<sup>Required</sup> <a name="ipv4_addresses" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.ipv4Addresses"></a>

```python
ipv4_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.internalValue"></a>

```python
internal_value: OdbOdbNetworkManagedServicesManagedS3BackupAccess
```

- *Type:* <a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccess">OdbOdbNetworkManagedServicesManagedS3BackupAccess</a>

---


### OdbOdbNetworkManagedServicesOutputReference <a name="OdbOdbNetworkManagedServicesOutputReference" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import odb_odb_network

odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.crossRegionS3RestoreSourcesAccess">cross_region_s3_restore_sources_access</a></code> | <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList">OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.kmsAccess">kms_access</a></code> | <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference">OdbOdbNetworkManagedServicesKmsAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.managedS3BackupAccess">managed_s3_backup_access</a></code> | <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference">OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.managedServicesIpv4Cidrs">managed_services_ipv4_cidrs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.resourceGatewayArn">resource_gateway_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.s3Access">s3_access</a></code> | <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference">OdbOdbNetworkManagedServicesS3AccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.serviceNetworkArn">service_network_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.serviceNetworkEndpoint">service_network_endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference">OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.stsAccess">sts_access</a></code> | <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference">OdbOdbNetworkManagedServicesStsAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.zeroEtlAccess">zero_etl_access</a></code> | <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference">OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServices">OdbOdbNetworkManagedServices</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cross_region_s3_restore_sources_access`<sup>Required</sup> <a name="cross_region_s3_restore_sources_access" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.crossRegionS3RestoreSourcesAccess"></a>

```python
cross_region_s3_restore_sources_access: OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList
```

- *Type:* <a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList">OdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList</a>

---

##### `kms_access`<sup>Required</sup> <a name="kms_access" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.kmsAccess"></a>

```python
kms_access: OdbOdbNetworkManagedServicesKmsAccessOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesKmsAccessOutputReference">OdbOdbNetworkManagedServicesKmsAccessOutputReference</a>

---

##### `managed_s3_backup_access`<sup>Required</sup> <a name="managed_s3_backup_access" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.managedS3BackupAccess"></a>

```python
managed_s3_backup_access: OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference">OdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference</a>

---

##### `managed_services_ipv4_cidrs`<sup>Required</sup> <a name="managed_services_ipv4_cidrs" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.managedServicesIpv4Cidrs"></a>

```python
managed_services_ipv4_cidrs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_gateway_arn`<sup>Required</sup> <a name="resource_gateway_arn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.resourceGatewayArn"></a>

```python
resource_gateway_arn: str
```

- *Type:* str

---

##### `s3_access`<sup>Required</sup> <a name="s3_access" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.s3Access"></a>

```python
s3_access: OdbOdbNetworkManagedServicesS3AccessOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference">OdbOdbNetworkManagedServicesS3AccessOutputReference</a>

---

##### `service_network_arn`<sup>Required</sup> <a name="service_network_arn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.serviceNetworkArn"></a>

```python
service_network_arn: str
```

- *Type:* str

---

##### `service_network_endpoint`<sup>Required</sup> <a name="service_network_endpoint" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.serviceNetworkEndpoint"></a>

```python
service_network_endpoint: OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference">OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference</a>

---

##### `sts_access`<sup>Required</sup> <a name="sts_access" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.stsAccess"></a>

```python
sts_access: OdbOdbNetworkManagedServicesStsAccessOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference">OdbOdbNetworkManagedServicesStsAccessOutputReference</a>

---

##### `zero_etl_access`<sup>Required</sup> <a name="zero_etl_access" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.zeroEtlAccess"></a>

```python
zero_etl_access: OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference">OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesOutputReference.property.internalValue"></a>

```python
internal_value: OdbOdbNetworkManagedServices
```

- *Type:* <a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServices">OdbOdbNetworkManagedServices</a>

---


### OdbOdbNetworkManagedServicesS3AccessOutputReference <a name="OdbOdbNetworkManagedServicesS3AccessOutputReference" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import odb_odb_network

odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.property.ipv4Addresses">ipv4_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.property.s3PolicyDocument">s3_policy_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3Access">OdbOdbNetworkManagedServicesS3Access</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `ipv4_addresses`<sup>Required</sup> <a name="ipv4_addresses" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.property.ipv4Addresses"></a>

```python
ipv4_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `s3_policy_document`<sup>Required</sup> <a name="s3_policy_document" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.property.s3PolicyDocument"></a>

```python
s3_policy_document: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3AccessOutputReference.property.internalValue"></a>

```python
internal_value: OdbOdbNetworkManagedServicesS3Access
```

- *Type:* <a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesS3Access">OdbOdbNetworkManagedServicesS3Access</a>

---


### OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference <a name="OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import odb_odb_network

odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.vpcEndpointId">vpc_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.vpcEndpointType">vpc_endpoint_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpoint">OdbOdbNetworkManagedServicesServiceNetworkEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vpc_endpoint_id`<sup>Required</sup> <a name="vpc_endpoint_id" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.vpcEndpointId"></a>

```python
vpc_endpoint_id: str
```

- *Type:* str

---

##### `vpc_endpoint_type`<sup>Required</sup> <a name="vpc_endpoint_type" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.vpcEndpointType"></a>

```python
vpc_endpoint_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.internalValue"></a>

```python
internal_value: OdbOdbNetworkManagedServicesServiceNetworkEndpoint
```

- *Type:* <a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesServiceNetworkEndpoint">OdbOdbNetworkManagedServicesServiceNetworkEndpoint</a>

---


### OdbOdbNetworkManagedServicesStsAccessOutputReference <a name="OdbOdbNetworkManagedServicesStsAccessOutputReference" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import odb_odb_network

odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.property.ipv4Addresses">ipv4_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.property.stsPolicyDocument">sts_policy_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccess">OdbOdbNetworkManagedServicesStsAccess</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `ipv4_addresses`<sup>Required</sup> <a name="ipv4_addresses" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.property.ipv4Addresses"></a>

```python
ipv4_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `sts_policy_document`<sup>Required</sup> <a name="sts_policy_document" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.property.stsPolicyDocument"></a>

```python
sts_policy_document: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccessOutputReference.property.internalValue"></a>

```python
internal_value: OdbOdbNetworkManagedServicesStsAccess
```

- *Type:* <a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesStsAccess">OdbOdbNetworkManagedServicesStsAccess</a>

---


### OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference <a name="OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import odb_odb_network

odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.property.cidr">cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccess">OdbOdbNetworkManagedServicesZeroEtlAccess</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.property.internalValue"></a>

```python
internal_value: OdbOdbNetworkManagedServicesZeroEtlAccess
```

- *Type:* <a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkManagedServicesZeroEtlAccess">OdbOdbNetworkManagedServicesZeroEtlAccess</a>

---


### OdbOdbNetworkTagsList <a name="OdbOdbNetworkTagsList" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import odb_odb_network

odbOdbNetwork.OdbOdbNetworkTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OdbOdbNetworkTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTags">OdbOdbNetworkTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[OdbOdbNetworkTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTags">OdbOdbNetworkTags</a>]

---


### OdbOdbNetworkTagsOutputReference <a name="OdbOdbNetworkTagsOutputReference" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import odb_odb_network

odbOdbNetwork.OdbOdbNetworkTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTags">OdbOdbNetworkTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OdbOdbNetworkTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.odbOdbNetwork.OdbOdbNetworkTags">OdbOdbNetworkTags</a>

---



