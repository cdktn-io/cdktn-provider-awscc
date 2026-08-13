# `rdsCustomDbEngineVersion` Submodule <a name="`rdsCustomDbEngineVersion` Submodule" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsCustomDbEngineVersion <a name="RdsCustomDbEngineVersion" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_custom_db_engine_version awscc_rds_custom_db_engine_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer"></a>

```python
from cdktn_provider_awscc import rds_custom_db_engine_version

rdsCustomDbEngineVersion.RdsCustomDbEngineVersion(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  engine: str,
  engine_version: str,
  database_installation_files: typing.List[str] = None,
  database_installation_files_s3_bucket_name: str = None,
  database_installation_files_s3_prefix: str = None,
  description: str = None,
  image_id: str = None,
  kms_key_id: str = None,
  manifest: str = None,
  source_custom_db_engine_version_identifier: str = None,
  status: str = None,
  tags: IResolvable | typing.List[RdsCustomDbEngineVersionTags] = None,
  use_aws_provided_latest_image: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.engine">engine</a></code> | <code>str</code> | The database engine to use for your custom engine version (CEV). |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.engineVersion">engine_version</a></code> | <code>str</code> | The name of your CEV. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.databaseInstallationFiles">database_installation_files</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_custom_db_engine_version#database_installation_files RdsCustomDbEngineVersion#database_installation_files}. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.databaseInstallationFilesS3BucketName">database_installation_files_s3_bucket_name</a></code> | <code>str</code> | The name of an Amazon S3 bucket that contains database installation files for your CEV. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.databaseInstallationFilesS3Prefix">database_installation_files_s3_prefix</a></code> | <code>str</code> | The Amazon S3 directory that contains the database installation files for your CEV. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of your CEV. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.imageId">image_id</a></code> | <code>str</code> | A value that indicates the ID of the AMI. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The AWS KMS key identifier for an encrypted CEV. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.manifest">manifest</a></code> | <code>str</code> | The CEV manifest, which is a JSON document that describes the installation .zip files stored in Amazon S3. Specify the name/value pairs in a file or a quoted string. RDS Custom applies the patches in the order in which they are listed.  The following JSON fields are valid:   + MediaImportTemplateVersion Version of the CEV manifest. The date is in the format YYYY-MM-DD. + databaseInstallationFileNames Ordered list of installation files for the CEV. + opatchFileNames Ordered list of OPatch installers used for the Oracle DB engine. + psuRuPatchFileNames The PSU and RU patches for this CEV. + OtherPatchFileNames The patches that are not in the list of PSU and RU patches. Amazon RDS applies these patches after applying the PSU and RU patches.   For more information, see [Creating the CEV manifest](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-cev.html#custom-cev.preparing.manifest) in the *Amazon RDS User Guide*. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.sourceCustomDbEngineVersionIdentifier">source_custom_db_engine_version_identifier</a></code> | <code>str</code> | The ARN of a CEV to use as a source for creating a new CEV. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.status">status</a></code> | <code>str</code> | A value that indicates the status of a custom engine version (CEV). |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTags">RdsCustomDbEngineVersionTags</a>]</code> | A list of tags. For more information, see [Tagging Amazon RDS Resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the *Amazon RDS User Guide.*. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.useAwsProvidedLatestImage">use_aws_provided_latest_image</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether to use the latest service-provided Amazon Machine Image (AMI) for the CEV. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.engine"></a>

- *Type:* str

The database engine to use for your custom engine version (CEV).

Valid values:

* `custom-oracle-ee`
* `custom-oracle-ee-cdb`
* `sqlserver-dev-ee`
* `sqlserver-ee`
* `sqlserver-se`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_custom_db_engine_version#engine RdsCustomDbEngineVersion#engine}

---

##### `engine_version`<sup>Required</sup> <a name="engine_version" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.engineVersion"></a>

- *Type:* str

The name of your CEV.

The name format is `major version.customized_string`. For example, a valid CEV name is `19.my_cev1`. This setting is required for RDS Custom for Oracle, but optional for Amazon RDS. The combination of `Engine` and `EngineVersion` is unique per customer per Region.
*Constraints:* Minimum length is 1. Maximum length is 60.
*Pattern:*`^[a-z0-9_.-]{1,60$`}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_custom_db_engine_version#engine_version RdsCustomDbEngineVersion#engine_version}

---

##### `database_installation_files`<sup>Optional</sup> <a name="database_installation_files" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.databaseInstallationFiles"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_custom_db_engine_version#database_installation_files RdsCustomDbEngineVersion#database_installation_files}.

---

##### `database_installation_files_s3_bucket_name`<sup>Optional</sup> <a name="database_installation_files_s3_bucket_name" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.databaseInstallationFilesS3BucketName"></a>

- *Type:* str

The name of an Amazon S3 bucket that contains database installation files for your CEV.

For example, a valid bucket name is `my-custom-installation-files`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_custom_db_engine_version#database_installation_files_s3_bucket_name RdsCustomDbEngineVersion#database_installation_files_s3_bucket_name}

---

##### `database_installation_files_s3_prefix`<sup>Optional</sup> <a name="database_installation_files_s3_prefix" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.databaseInstallationFilesS3Prefix"></a>

- *Type:* str

The Amazon S3 directory that contains the database installation files for your CEV.

For example, a valid bucket name is `123456789012/cev1`. If this setting isn't specified, no prefix is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_custom_db_engine_version#database_installation_files_s3_prefix RdsCustomDbEngineVersion#database_installation_files_s3_prefix}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.description"></a>

- *Type:* str

An optional description of your CEV.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_custom_db_engine_version#description RdsCustomDbEngineVersion#description}

---

##### `image_id`<sup>Optional</sup> <a name="image_id" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.imageId"></a>

- *Type:* str

A value that indicates the ID of the AMI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_custom_db_engine_version#image_id RdsCustomDbEngineVersion#image_id}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

The AWS KMS key identifier for an encrypted CEV.

A symmetric encryption KMS key is required for RDS Custom, but optional for Amazon RDS.
If you have an existing symmetric encryption KMS key in your account, you can use it with RDS Custom. No further action is necessary. If you don't already have a symmetric encryption KMS key in your account, follow the instructions in [Creating a symmetric encryption KMS key](https://docs.aws.amazon.com/kms/latest/developerguide/create-keys.html#create-symmetric-cmk) in the *Key Management Service Developer Guide*.
You can choose the same symmetric encryption key when you create a CEV and a DB instance, or choose different keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_custom_db_engine_version#kms_key_id RdsCustomDbEngineVersion#kms_key_id}

---

##### `manifest`<sup>Optional</sup> <a name="manifest" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.manifest"></a>

- *Type:* str

The CEV manifest, which is a JSON document that describes the installation .zip files stored in Amazon S3. Specify the name/value pairs in a file or a quoted string. RDS Custom applies the patches in the order in which they are listed.  The following JSON fields are valid:   + MediaImportTemplateVersion Version of the CEV manifest. The date is in the format YYYY-MM-DD. + databaseInstallationFileNames Ordered list of installation files for the CEV. + opatchFileNames Ordered list of OPatch installers used for the Oracle DB engine. + psuRuPatchFileNames The PSU and RU patches for this CEV. + OtherPatchFileNames The patches that are not in the list of PSU and RU patches. Amazon RDS applies these patches after applying the PSU and RU patches.   For more information, see [Creating the CEV manifest](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-cev.html#custom-cev.preparing.manifest) in the *Amazon RDS User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_custom_db_engine_version#manifest RdsCustomDbEngineVersion#manifest}

---

##### `source_custom_db_engine_version_identifier`<sup>Optional</sup> <a name="source_custom_db_engine_version_identifier" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.sourceCustomDbEngineVersionIdentifier"></a>

- *Type:* str

The ARN of a CEV to use as a source for creating a new CEV.

You can specify a different Amazon Machine Imagine (AMI) by using either `Source` or `UseAwsProvidedLatestImage`. You can't specify a different JSON manifest when you specify `SourceCustomDbEngineVersionIdentifier`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_custom_db_engine_version#source_custom_db_engine_version_identifier RdsCustomDbEngineVersion#source_custom_db_engine_version_identifier}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.status"></a>

- *Type:* str

A value that indicates the status of a custom engine version (CEV).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_custom_db_engine_version#status RdsCustomDbEngineVersion#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTags">RdsCustomDbEngineVersionTags</a>]

A list of tags. For more information, see [Tagging Amazon RDS Resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the *Amazon RDS User Guide.*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_custom_db_engine_version#tags RdsCustomDbEngineVersion#tags}

---

##### `use_aws_provided_latest_image`<sup>Optional</sup> <a name="use_aws_provided_latest_image" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.useAwsProvidedLatestImage"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether to use the latest service-provided Amazon Machine Image (AMI) for the CEV.

If you specify `UseAwsProvidedLatestImage`, you can't also specify `ImageId`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_custom_db_engine_version#use_aws_provided_latest_image RdsCustomDbEngineVersion#use_aws_provided_latest_image}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetDatabaseInstallationFiles">reset_database_installation_files</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetDatabaseInstallationFilesS3BucketName">reset_database_installation_files_s3_bucket_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetDatabaseInstallationFilesS3Prefix">reset_database_installation_files_s3_prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetImageId">reset_image_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetManifest">reset_manifest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetSourceCustomDbEngineVersionIdentifier">reset_source_custom_db_engine_version_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetUseAwsProvidedLatestImage">reset_use_aws_provided_latest_image</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[RdsCustomDbEngineVersionTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTags">RdsCustomDbEngineVersionTags</a>]

---

##### `reset_database_installation_files` <a name="reset_database_installation_files" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetDatabaseInstallationFiles"></a>

```python
def reset_database_installation_files() -> None
```

##### `reset_database_installation_files_s3_bucket_name` <a name="reset_database_installation_files_s3_bucket_name" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetDatabaseInstallationFilesS3BucketName"></a>

```python
def reset_database_installation_files_s3_bucket_name() -> None
```

##### `reset_database_installation_files_s3_prefix` <a name="reset_database_installation_files_s3_prefix" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetDatabaseInstallationFilesS3Prefix"></a>

```python
def reset_database_installation_files_s3_prefix() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_image_id` <a name="reset_image_id" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetImageId"></a>

```python
def reset_image_id() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_manifest` <a name="reset_manifest" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetManifest"></a>

```python
def reset_manifest() -> None
```

##### `reset_source_custom_db_engine_version_identifier` <a name="reset_source_custom_db_engine_version_identifier" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetSourceCustomDbEngineVersionIdentifier"></a>

```python
def reset_source_custom_db_engine_version_identifier() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_use_aws_provided_latest_image` <a name="reset_use_aws_provided_latest_image" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetUseAwsProvidedLatestImage"></a>

```python
def reset_use_aws_provided_latest_image() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a RdsCustomDbEngineVersion resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.isConstruct"></a>

```python
from cdktn_provider_awscc import rds_custom_db_engine_version

rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.isTerraformElement"></a>

```python
from cdktn_provider_awscc import rds_custom_db_engine_version

rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.isTerraformResource"></a>

```python
from cdktn_provider_awscc import rds_custom_db_engine_version

rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import rds_custom_db_engine_version

rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a RdsCustomDbEngineVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RdsCustomDbEngineVersion to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RdsCustomDbEngineVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_custom_db_engine_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RdsCustomDbEngineVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.dbEngineVersionArn">db_engine_version_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList">RdsCustomDbEngineVersionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.databaseInstallationFilesInput">database_installation_files_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.databaseInstallationFilesS3BucketNameInput">database_installation_files_s3_bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.databaseInstallationFilesS3PrefixInput">database_installation_files_s3_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.engineInput">engine_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.engineVersionInput">engine_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.imageIdInput">image_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.manifestInput">manifest_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.sourceCustomDbEngineVersionIdentifierInput">source_custom_db_engine_version_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTags">RdsCustomDbEngineVersionTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.useAwsProvidedLatestImageInput">use_aws_provided_latest_image_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.databaseInstallationFiles">database_installation_files</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.databaseInstallationFilesS3BucketName">database_installation_files_s3_bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.databaseInstallationFilesS3Prefix">database_installation_files_s3_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.engine">engine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.engineVersion">engine_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.imageId">image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.manifest">manifest</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.sourceCustomDbEngineVersionIdentifier">source_custom_db_engine_version_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.useAwsProvidedLatestImage">use_aws_provided_latest_image</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `db_engine_version_arn`<sup>Required</sup> <a name="db_engine_version_arn" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.dbEngineVersionArn"></a>

```python
db_engine_version_arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.tags"></a>

```python
tags: RdsCustomDbEngineVersionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList">RdsCustomDbEngineVersionTagsList</a>

---

##### `database_installation_files_input`<sup>Optional</sup> <a name="database_installation_files_input" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.databaseInstallationFilesInput"></a>

```python
database_installation_files_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `database_installation_files_s3_bucket_name_input`<sup>Optional</sup> <a name="database_installation_files_s3_bucket_name_input" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.databaseInstallationFilesS3BucketNameInput"></a>

```python
database_installation_files_s3_bucket_name_input: str
```

- *Type:* str

---

##### `database_installation_files_s3_prefix_input`<sup>Optional</sup> <a name="database_installation_files_s3_prefix_input" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.databaseInstallationFilesS3PrefixInput"></a>

```python
database_installation_files_s3_prefix_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `engine_input`<sup>Optional</sup> <a name="engine_input" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.engineInput"></a>

```python
engine_input: str
```

- *Type:* str

---

##### `engine_version_input`<sup>Optional</sup> <a name="engine_version_input" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.engineVersionInput"></a>

```python
engine_version_input: str
```

- *Type:* str

---

##### `image_id_input`<sup>Optional</sup> <a name="image_id_input" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.imageIdInput"></a>

```python
image_id_input: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `manifest_input`<sup>Optional</sup> <a name="manifest_input" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.manifestInput"></a>

```python
manifest_input: str
```

- *Type:* str

---

##### `source_custom_db_engine_version_identifier_input`<sup>Optional</sup> <a name="source_custom_db_engine_version_identifier_input" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.sourceCustomDbEngineVersionIdentifierInput"></a>

```python
source_custom_db_engine_version_identifier_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[RdsCustomDbEngineVersionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTags">RdsCustomDbEngineVersionTags</a>]

---

##### `use_aws_provided_latest_image_input`<sup>Optional</sup> <a name="use_aws_provided_latest_image_input" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.useAwsProvidedLatestImageInput"></a>

```python
use_aws_provided_latest_image_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `database_installation_files`<sup>Required</sup> <a name="database_installation_files" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.databaseInstallationFiles"></a>

```python
database_installation_files: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `database_installation_files_s3_bucket_name`<sup>Required</sup> <a name="database_installation_files_s3_bucket_name" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.databaseInstallationFilesS3BucketName"></a>

```python
database_installation_files_s3_bucket_name: str
```

- *Type:* str

---

##### `database_installation_files_s3_prefix`<sup>Required</sup> <a name="database_installation_files_s3_prefix" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.databaseInstallationFilesS3Prefix"></a>

```python
database_installation_files_s3_prefix: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.engine"></a>

```python
engine: str
```

- *Type:* str

---

##### `engine_version`<sup>Required</sup> <a name="engine_version" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

---

##### `image_id`<sup>Required</sup> <a name="image_id" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `manifest`<sup>Required</sup> <a name="manifest" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.manifest"></a>

```python
manifest: str
```

- *Type:* str

---

##### `source_custom_db_engine_version_identifier`<sup>Required</sup> <a name="source_custom_db_engine_version_identifier" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.sourceCustomDbEngineVersionIdentifier"></a>

```python
source_custom_db_engine_version_identifier: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `use_aws_provided_latest_image`<sup>Required</sup> <a name="use_aws_provided_latest_image" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.useAwsProvidedLatestImage"></a>

```python
use_aws_provided_latest_image: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RdsCustomDbEngineVersionConfig <a name="RdsCustomDbEngineVersionConfig" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import rds_custom_db_engine_version

rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  engine: str,
  engine_version: str,
  database_installation_files: typing.List[str] = None,
  database_installation_files_s3_bucket_name: str = None,
  database_installation_files_s3_prefix: str = None,
  description: str = None,
  image_id: str = None,
  kms_key_id: str = None,
  manifest: str = None,
  source_custom_db_engine_version_identifier: str = None,
  status: str = None,
  tags: IResolvable | typing.List[RdsCustomDbEngineVersionTags] = None,
  use_aws_provided_latest_image: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.engine">engine</a></code> | <code>str</code> | The database engine to use for your custom engine version (CEV). |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.engineVersion">engine_version</a></code> | <code>str</code> | The name of your CEV. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.databaseInstallationFiles">database_installation_files</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_custom_db_engine_version#database_installation_files RdsCustomDbEngineVersion#database_installation_files}. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.databaseInstallationFilesS3BucketName">database_installation_files_s3_bucket_name</a></code> | <code>str</code> | The name of an Amazon S3 bucket that contains database installation files for your CEV. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.databaseInstallationFilesS3Prefix">database_installation_files_s3_prefix</a></code> | <code>str</code> | The Amazon S3 directory that contains the database installation files for your CEV. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.description">description</a></code> | <code>str</code> | An optional description of your CEV. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.imageId">image_id</a></code> | <code>str</code> | A value that indicates the ID of the AMI. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The AWS KMS key identifier for an encrypted CEV. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.manifest">manifest</a></code> | <code>str</code> | The CEV manifest, which is a JSON document that describes the installation .zip files stored in Amazon S3. Specify the name/value pairs in a file or a quoted string. RDS Custom applies the patches in the order in which they are listed.  The following JSON fields are valid:   + MediaImportTemplateVersion Version of the CEV manifest. The date is in the format YYYY-MM-DD. + databaseInstallationFileNames Ordered list of installation files for the CEV. + opatchFileNames Ordered list of OPatch installers used for the Oracle DB engine. + psuRuPatchFileNames The PSU and RU patches for this CEV. + OtherPatchFileNames The patches that are not in the list of PSU and RU patches. Amazon RDS applies these patches after applying the PSU and RU patches.   For more information, see [Creating the CEV manifest](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-cev.html#custom-cev.preparing.manifest) in the *Amazon RDS User Guide*. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.sourceCustomDbEngineVersionIdentifier">source_custom_db_engine_version_identifier</a></code> | <code>str</code> | The ARN of a CEV to use as a source for creating a new CEV. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.status">status</a></code> | <code>str</code> | A value that indicates the status of a custom engine version (CEV). |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTags">RdsCustomDbEngineVersionTags</a>]</code> | A list of tags. For more information, see [Tagging Amazon RDS Resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the *Amazon RDS User Guide.*. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.useAwsProvidedLatestImage">use_aws_provided_latest_image</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether to use the latest service-provided Amazon Machine Image (AMI) for the CEV. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.engine"></a>

```python
engine: str
```

- *Type:* str

The database engine to use for your custom engine version (CEV).

Valid values:

* `custom-oracle-ee`
* `custom-oracle-ee-cdb`
* `sqlserver-dev-ee`
* `sqlserver-ee`
* `sqlserver-se`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_custom_db_engine_version#engine RdsCustomDbEngineVersion#engine}

---

##### `engine_version`<sup>Required</sup> <a name="engine_version" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

The name of your CEV.

The name format is `major version.customized_string`. For example, a valid CEV name is `19.my_cev1`. This setting is required for RDS Custom for Oracle, but optional for Amazon RDS. The combination of `Engine` and `EngineVersion` is unique per customer per Region.
*Constraints:* Minimum length is 1. Maximum length is 60.
*Pattern:*`^[a-z0-9_.-]{1,60$`}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_custom_db_engine_version#engine_version RdsCustomDbEngineVersion#engine_version}

---

##### `database_installation_files`<sup>Optional</sup> <a name="database_installation_files" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.databaseInstallationFiles"></a>

```python
database_installation_files: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_custom_db_engine_version#database_installation_files RdsCustomDbEngineVersion#database_installation_files}.

---

##### `database_installation_files_s3_bucket_name`<sup>Optional</sup> <a name="database_installation_files_s3_bucket_name" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.databaseInstallationFilesS3BucketName"></a>

```python
database_installation_files_s3_bucket_name: str
```

- *Type:* str

The name of an Amazon S3 bucket that contains database installation files for your CEV.

For example, a valid bucket name is `my-custom-installation-files`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_custom_db_engine_version#database_installation_files_s3_bucket_name RdsCustomDbEngineVersion#database_installation_files_s3_bucket_name}

---

##### `database_installation_files_s3_prefix`<sup>Optional</sup> <a name="database_installation_files_s3_prefix" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.databaseInstallationFilesS3Prefix"></a>

```python
database_installation_files_s3_prefix: str
```

- *Type:* str

The Amazon S3 directory that contains the database installation files for your CEV.

For example, a valid bucket name is `123456789012/cev1`. If this setting isn't specified, no prefix is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_custom_db_engine_version#database_installation_files_s3_prefix RdsCustomDbEngineVersion#database_installation_files_s3_prefix}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of your CEV.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_custom_db_engine_version#description RdsCustomDbEngineVersion#description}

---

##### `image_id`<sup>Optional</sup> <a name="image_id" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

A value that indicates the ID of the AMI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_custom_db_engine_version#image_id RdsCustomDbEngineVersion#image_id}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

The AWS KMS key identifier for an encrypted CEV.

A symmetric encryption KMS key is required for RDS Custom, but optional for Amazon RDS.
If you have an existing symmetric encryption KMS key in your account, you can use it with RDS Custom. No further action is necessary. If you don't already have a symmetric encryption KMS key in your account, follow the instructions in [Creating a symmetric encryption KMS key](https://docs.aws.amazon.com/kms/latest/developerguide/create-keys.html#create-symmetric-cmk) in the *Key Management Service Developer Guide*.
You can choose the same symmetric encryption key when you create a CEV and a DB instance, or choose different keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_custom_db_engine_version#kms_key_id RdsCustomDbEngineVersion#kms_key_id}

---

##### `manifest`<sup>Optional</sup> <a name="manifest" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.manifest"></a>

```python
manifest: str
```

- *Type:* str

The CEV manifest, which is a JSON document that describes the installation .zip files stored in Amazon S3. Specify the name/value pairs in a file or a quoted string. RDS Custom applies the patches in the order in which they are listed.  The following JSON fields are valid:   + MediaImportTemplateVersion Version of the CEV manifest. The date is in the format YYYY-MM-DD. + databaseInstallationFileNames Ordered list of installation files for the CEV. + opatchFileNames Ordered list of OPatch installers used for the Oracle DB engine. + psuRuPatchFileNames The PSU and RU patches for this CEV. + OtherPatchFileNames The patches that are not in the list of PSU and RU patches. Amazon RDS applies these patches after applying the PSU and RU patches.   For more information, see [Creating the CEV manifest](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-cev.html#custom-cev.preparing.manifest) in the *Amazon RDS User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_custom_db_engine_version#manifest RdsCustomDbEngineVersion#manifest}

---

##### `source_custom_db_engine_version_identifier`<sup>Optional</sup> <a name="source_custom_db_engine_version_identifier" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.sourceCustomDbEngineVersionIdentifier"></a>

```python
source_custom_db_engine_version_identifier: str
```

- *Type:* str

The ARN of a CEV to use as a source for creating a new CEV.

You can specify a different Amazon Machine Imagine (AMI) by using either `Source` or `UseAwsProvidedLatestImage`. You can't specify a different JSON manifest when you specify `SourceCustomDbEngineVersionIdentifier`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_custom_db_engine_version#source_custom_db_engine_version_identifier RdsCustomDbEngineVersion#source_custom_db_engine_version_identifier}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.status"></a>

```python
status: str
```

- *Type:* str

A value that indicates the status of a custom engine version (CEV).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_custom_db_engine_version#status RdsCustomDbEngineVersion#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[RdsCustomDbEngineVersionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTags">RdsCustomDbEngineVersionTags</a>]

A list of tags. For more information, see [Tagging Amazon RDS Resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the *Amazon RDS User Guide.*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_custom_db_engine_version#tags RdsCustomDbEngineVersion#tags}

---

##### `use_aws_provided_latest_image`<sup>Optional</sup> <a name="use_aws_provided_latest_image" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.useAwsProvidedLatestImage"></a>

```python
use_aws_provided_latest_image: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether to use the latest service-provided Amazon Machine Image (AMI) for the CEV.

If you specify `UseAwsProvidedLatestImage`, you can't also specify `ImageId`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_custom_db_engine_version#use_aws_provided_latest_image RdsCustomDbEngineVersion#use_aws_provided_latest_image}

---

### RdsCustomDbEngineVersionTags <a name="RdsCustomDbEngineVersionTags" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTags.Initializer"></a>

```python
from cdktn_provider_awscc import rds_custom_db_engine_version

rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTags.property.key">key</a></code> | <code>str</code> | A key is the required name of the tag. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTags.property.value">value</a></code> | <code>str</code> | A value is the optional value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTags.property.key"></a>

```python
key: str
```

- *Type:* str

A key is the required name of the tag.

The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with `aws:` or `rds:`. The string can only contain only the set of Unicode letters, digits, white-space, '*', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\p{L}\p{Z}\p{N}*.:/=+\-@]*)$").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_custom_db_engine_version#key RdsCustomDbEngineVersion#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTags.property.value"></a>

```python
value: str
```

- *Type:* str

A value is the optional value of the tag.

The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with `aws:` or `rds:`. The string can only contain only the set of Unicode letters, digits, white-space, '*', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\p{L}\p{Z}\p{N}*.:/=+\-@]*)$").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_custom_db_engine_version#value RdsCustomDbEngineVersion#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RdsCustomDbEngineVersionTagsList <a name="RdsCustomDbEngineVersionTagsList" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import rds_custom_db_engine_version

rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RdsCustomDbEngineVersionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTags">RdsCustomDbEngineVersionTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RdsCustomDbEngineVersionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTags">RdsCustomDbEngineVersionTags</a>]

---


### RdsCustomDbEngineVersionTagsOutputReference <a name="RdsCustomDbEngineVersionTagsOutputReference" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rds_custom_db_engine_version

rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTags">RdsCustomDbEngineVersionTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RdsCustomDbEngineVersionTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTags">RdsCustomDbEngineVersionTags</a>

---



