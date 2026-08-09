# `rdsCustomDbEngineVersion` Submodule <a name="`rdsCustomDbEngineVersion` Submodule" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsCustomDbEngineVersion <a name="RdsCustomDbEngineVersion" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_custom_db_engine_version awscc_rds_custom_db_engine_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_custom_db_engine_version.RdsCustomDbEngineVersion;

RdsCustomDbEngineVersion.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .engine(java.lang.String)
    .engineVersion(java.lang.String)
//  .databaseInstallationFiles(java.util.List<java.lang.String>)
//  .databaseInstallationFilesS3BucketName(java.lang.String)
//  .databaseInstallationFilesS3Prefix(java.lang.String)
//  .description(java.lang.String)
//  .imageId(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .manifest(java.lang.String)
//  .sourceCustomDbEngineVersionIdentifier(java.lang.String)
//  .status(java.lang.String)
//  .tags(IResolvable|java.util.List<RdsCustomDbEngineVersionTags>)
//  .useAwsProvidedLatestImage(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.engine">engine</a></code> | <code>java.lang.String</code> | The database engine to use for your custom engine version (CEV). |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | The name of your CEV. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.databaseInstallationFiles">databaseInstallationFiles</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_custom_db_engine_version#database_installation_files RdsCustomDbEngineVersion#database_installation_files}. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.databaseInstallationFilesS3BucketName">databaseInstallationFilesS3BucketName</a></code> | <code>java.lang.String</code> | The name of an Amazon S3 bucket that contains database installation files for your CEV. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.databaseInstallationFilesS3Prefix">databaseInstallationFilesS3Prefix</a></code> | <code>java.lang.String</code> | The Amazon S3 directory that contains the database installation files for your CEV. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of your CEV. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.imageId">imageId</a></code> | <code>java.lang.String</code> | A value that indicates the ID of the AMI. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | The AWS KMS key identifier for an encrypted CEV. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.manifest">manifest</a></code> | <code>java.lang.String</code> | The CEV manifest, which is a JSON document that describes the installation .zip files stored in Amazon S3. Specify the name/value pairs in a file or a quoted string. RDS Custom applies the patches in the order in which they are listed.  The following JSON fields are valid:   + MediaImportTemplateVersion Version of the CEV manifest. The date is in the format YYYY-MM-DD. + databaseInstallationFileNames Ordered list of installation files for the CEV. + opatchFileNames Ordered list of OPatch installers used for the Oracle DB engine. + psuRuPatchFileNames The PSU and RU patches for this CEV. + OtherPatchFileNames The patches that are not in the list of PSU and RU patches. Amazon RDS applies these patches after applying the PSU and RU patches.   For more information, see [Creating the CEV manifest](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-cev.html#custom-cev.preparing.manifest) in the *Amazon RDS User Guide*. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.sourceCustomDbEngineVersionIdentifier">sourceCustomDbEngineVersionIdentifier</a></code> | <code>java.lang.String</code> | The ARN of a CEV to use as a source for creating a new CEV. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | A value that indicates the status of a custom engine version (CEV). |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTags">RdsCustomDbEngineVersionTags</a>></code> | A list of tags. For more information, see [Tagging Amazon RDS Resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the *Amazon RDS User Guide.*. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.useAwsProvidedLatestImage">useAwsProvidedLatestImage</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether to use the latest service-provided Amazon Machine Image (AMI) for the CEV. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.engine"></a>

- *Type:* java.lang.String

The database engine to use for your custom engine version (CEV).

Valid values:

* `custom-oracle-ee`
* `custom-oracle-ee-cdb`
* `sqlserver-dev-ee`
* `sqlserver-ee`
* `sqlserver-se`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_custom_db_engine_version#engine RdsCustomDbEngineVersion#engine}

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.engineVersion"></a>

- *Type:* java.lang.String

The name of your CEV.

The name format is `major version.customized_string`. For example, a valid CEV name is `19.my_cev1`. This setting is required for RDS Custom for Oracle, but optional for Amazon RDS. The combination of `Engine` and `EngineVersion` is unique per customer per Region.
*Constraints:* Minimum length is 1. Maximum length is 60.
*Pattern:*`^[a-z0-9_.-]{1,60$`}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_custom_db_engine_version#engine_version RdsCustomDbEngineVersion#engine_version}

---

##### `databaseInstallationFiles`<sup>Optional</sup> <a name="databaseInstallationFiles" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.databaseInstallationFiles"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_custom_db_engine_version#database_installation_files RdsCustomDbEngineVersion#database_installation_files}.

---

##### `databaseInstallationFilesS3BucketName`<sup>Optional</sup> <a name="databaseInstallationFilesS3BucketName" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.databaseInstallationFilesS3BucketName"></a>

- *Type:* java.lang.String

The name of an Amazon S3 bucket that contains database installation files for your CEV.

For example, a valid bucket name is `my-custom-installation-files`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_custom_db_engine_version#database_installation_files_s3_bucket_name RdsCustomDbEngineVersion#database_installation_files_s3_bucket_name}

---

##### `databaseInstallationFilesS3Prefix`<sup>Optional</sup> <a name="databaseInstallationFilesS3Prefix" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.databaseInstallationFilesS3Prefix"></a>

- *Type:* java.lang.String

The Amazon S3 directory that contains the database installation files for your CEV.

For example, a valid bucket name is `123456789012/cev1`. If this setting isn't specified, no prefix is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_custom_db_engine_version#database_installation_files_s3_prefix RdsCustomDbEngineVersion#database_installation_files_s3_prefix}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of your CEV.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_custom_db_engine_version#description RdsCustomDbEngineVersion#description}

---

##### `imageId`<sup>Optional</sup> <a name="imageId" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.imageId"></a>

- *Type:* java.lang.String

A value that indicates the ID of the AMI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_custom_db_engine_version#image_id RdsCustomDbEngineVersion#image_id}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.kmsKeyId"></a>

- *Type:* java.lang.String

The AWS KMS key identifier for an encrypted CEV.

A symmetric encryption KMS key is required for RDS Custom, but optional for Amazon RDS.
If you have an existing symmetric encryption KMS key in your account, you can use it with RDS Custom. No further action is necessary. If you don't already have a symmetric encryption KMS key in your account, follow the instructions in [Creating a symmetric encryption KMS key](https://docs.aws.amazon.com/kms/latest/developerguide/create-keys.html#create-symmetric-cmk) in the *Key Management Service Developer Guide*.
You can choose the same symmetric encryption key when you create a CEV and a DB instance, or choose different keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_custom_db_engine_version#kms_key_id RdsCustomDbEngineVersion#kms_key_id}

---

##### `manifest`<sup>Optional</sup> <a name="manifest" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.manifest"></a>

- *Type:* java.lang.String

The CEV manifest, which is a JSON document that describes the installation .zip files stored in Amazon S3. Specify the name/value pairs in a file or a quoted string. RDS Custom applies the patches in the order in which they are listed.  The following JSON fields are valid:   + MediaImportTemplateVersion Version of the CEV manifest. The date is in the format YYYY-MM-DD. + databaseInstallationFileNames Ordered list of installation files for the CEV. + opatchFileNames Ordered list of OPatch installers used for the Oracle DB engine. + psuRuPatchFileNames The PSU and RU patches for this CEV. + OtherPatchFileNames The patches that are not in the list of PSU and RU patches. Amazon RDS applies these patches after applying the PSU and RU patches.   For more information, see [Creating the CEV manifest](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-cev.html#custom-cev.preparing.manifest) in the *Amazon RDS User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_custom_db_engine_version#manifest RdsCustomDbEngineVersion#manifest}

---

##### `sourceCustomDbEngineVersionIdentifier`<sup>Optional</sup> <a name="sourceCustomDbEngineVersionIdentifier" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.sourceCustomDbEngineVersionIdentifier"></a>

- *Type:* java.lang.String

The ARN of a CEV to use as a source for creating a new CEV.

You can specify a different Amazon Machine Imagine (AMI) by using either `Source` or `UseAwsProvidedLatestImage`. You can't specify a different JSON manifest when you specify `SourceCustomDbEngineVersionIdentifier`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_custom_db_engine_version#source_custom_db_engine_version_identifier RdsCustomDbEngineVersion#source_custom_db_engine_version_identifier}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.status"></a>

- *Type:* java.lang.String

A value that indicates the status of a custom engine version (CEV).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_custom_db_engine_version#status RdsCustomDbEngineVersion#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTags">RdsCustomDbEngineVersionTags</a>>

A list of tags. For more information, see [Tagging Amazon RDS Resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the *Amazon RDS User Guide.*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_custom_db_engine_version#tags RdsCustomDbEngineVersion#tags}

---

##### `useAwsProvidedLatestImage`<sup>Optional</sup> <a name="useAwsProvidedLatestImage" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.useAwsProvidedLatestImage"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether to use the latest service-provided Amazon Machine Image (AMI) for the CEV.

If you specify `UseAwsProvidedLatestImage`, you can't also specify `ImageId`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_custom_db_engine_version#use_aws_provided_latest_image RdsCustomDbEngineVersion#use_aws_provided_latest_image}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetDatabaseInstallationFiles">resetDatabaseInstallationFiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetDatabaseInstallationFilesS3BucketName">resetDatabaseInstallationFilesS3BucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetDatabaseInstallationFilesS3Prefix">resetDatabaseInstallationFilesS3Prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetImageId">resetImageId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetManifest">resetManifest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetSourceCustomDbEngineVersionIdentifier">resetSourceCustomDbEngineVersionIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetUseAwsProvidedLatestImage">resetUseAwsProvidedLatestImage</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<RdsCustomDbEngineVersionTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTags">RdsCustomDbEngineVersionTags</a>>

---

##### `resetDatabaseInstallationFiles` <a name="resetDatabaseInstallationFiles" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetDatabaseInstallationFiles"></a>

```java
public void resetDatabaseInstallationFiles()
```

##### `resetDatabaseInstallationFilesS3BucketName` <a name="resetDatabaseInstallationFilesS3BucketName" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetDatabaseInstallationFilesS3BucketName"></a>

```java
public void resetDatabaseInstallationFilesS3BucketName()
```

##### `resetDatabaseInstallationFilesS3Prefix` <a name="resetDatabaseInstallationFilesS3Prefix" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetDatabaseInstallationFilesS3Prefix"></a>

```java
public void resetDatabaseInstallationFilesS3Prefix()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetImageId` <a name="resetImageId" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetImageId"></a>

```java
public void resetImageId()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetManifest` <a name="resetManifest" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetManifest"></a>

```java
public void resetManifest()
```

##### `resetSourceCustomDbEngineVersionIdentifier` <a name="resetSourceCustomDbEngineVersionIdentifier" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetSourceCustomDbEngineVersionIdentifier"></a>

```java
public void resetSourceCustomDbEngineVersionIdentifier()
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetTags"></a>

```java
public void resetTags()
```

##### `resetUseAwsProvidedLatestImage` <a name="resetUseAwsProvidedLatestImage" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetUseAwsProvidedLatestImage"></a>

```java
public void resetUseAwsProvidedLatestImage()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RdsCustomDbEngineVersion resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.isConstruct"></a>

```java
import io.cdktn.providers.awscc.rds_custom_db_engine_version.RdsCustomDbEngineVersion;

RdsCustomDbEngineVersion.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.rds_custom_db_engine_version.RdsCustomDbEngineVersion;

RdsCustomDbEngineVersion.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.rds_custom_db_engine_version.RdsCustomDbEngineVersion;

RdsCustomDbEngineVersion.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.rds_custom_db_engine_version.RdsCustomDbEngineVersion;

RdsCustomDbEngineVersion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RdsCustomDbEngineVersion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a RdsCustomDbEngineVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RdsCustomDbEngineVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RdsCustomDbEngineVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_custom_db_engine_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the RdsCustomDbEngineVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.dbEngineVersionArn">dbEngineVersionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList">RdsCustomDbEngineVersionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.databaseInstallationFilesInput">databaseInstallationFilesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.databaseInstallationFilesS3BucketNameInput">databaseInstallationFilesS3BucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.databaseInstallationFilesS3PrefixInput">databaseInstallationFilesS3PrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.engineInput">engineInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.engineVersionInput">engineVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.imageIdInput">imageIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.manifestInput">manifestInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.sourceCustomDbEngineVersionIdentifierInput">sourceCustomDbEngineVersionIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTags">RdsCustomDbEngineVersionTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.useAwsProvidedLatestImageInput">useAwsProvidedLatestImageInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.databaseInstallationFiles">databaseInstallationFiles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.databaseInstallationFilesS3BucketName">databaseInstallationFilesS3BucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.databaseInstallationFilesS3Prefix">databaseInstallationFilesS3Prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.engine">engine</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.imageId">imageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.manifest">manifest</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.sourceCustomDbEngineVersionIdentifier">sourceCustomDbEngineVersionIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.useAwsProvidedLatestImage">useAwsProvidedLatestImage</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dbEngineVersionArn`<sup>Required</sup> <a name="dbEngineVersionArn" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.dbEngineVersionArn"></a>

```java
public java.lang.String getDbEngineVersionArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.tags"></a>

```java
public RdsCustomDbEngineVersionTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList">RdsCustomDbEngineVersionTagsList</a>

---

##### `databaseInstallationFilesInput`<sup>Optional</sup> <a name="databaseInstallationFilesInput" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.databaseInstallationFilesInput"></a>

```java
public java.util.List<java.lang.String> getDatabaseInstallationFilesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `databaseInstallationFilesS3BucketNameInput`<sup>Optional</sup> <a name="databaseInstallationFilesS3BucketNameInput" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.databaseInstallationFilesS3BucketNameInput"></a>

```java
public java.lang.String getDatabaseInstallationFilesS3BucketNameInput();
```

- *Type:* java.lang.String

---

##### `databaseInstallationFilesS3PrefixInput`<sup>Optional</sup> <a name="databaseInstallationFilesS3PrefixInput" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.databaseInstallationFilesS3PrefixInput"></a>

```java
public java.lang.String getDatabaseInstallationFilesS3PrefixInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `engineInput`<sup>Optional</sup> <a name="engineInput" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.engineInput"></a>

```java
public java.lang.String getEngineInput();
```

- *Type:* java.lang.String

---

##### `engineVersionInput`<sup>Optional</sup> <a name="engineVersionInput" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.engineVersionInput"></a>

```java
public java.lang.String getEngineVersionInput();
```

- *Type:* java.lang.String

---

##### `imageIdInput`<sup>Optional</sup> <a name="imageIdInput" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.imageIdInput"></a>

```java
public java.lang.String getImageIdInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `manifestInput`<sup>Optional</sup> <a name="manifestInput" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.manifestInput"></a>

```java
public java.lang.String getManifestInput();
```

- *Type:* java.lang.String

---

##### `sourceCustomDbEngineVersionIdentifierInput`<sup>Optional</sup> <a name="sourceCustomDbEngineVersionIdentifierInput" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.sourceCustomDbEngineVersionIdentifierInput"></a>

```java
public java.lang.String getSourceCustomDbEngineVersionIdentifierInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.tagsInput"></a>

```java
public IResolvable|java.util.List<RdsCustomDbEngineVersionTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTags">RdsCustomDbEngineVersionTags</a>>

---

##### `useAwsProvidedLatestImageInput`<sup>Optional</sup> <a name="useAwsProvidedLatestImageInput" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.useAwsProvidedLatestImageInput"></a>

```java
public java.lang.Boolean|IResolvable getUseAwsProvidedLatestImageInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `databaseInstallationFiles`<sup>Required</sup> <a name="databaseInstallationFiles" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.databaseInstallationFiles"></a>

```java
public java.util.List<java.lang.String> getDatabaseInstallationFiles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `databaseInstallationFilesS3BucketName`<sup>Required</sup> <a name="databaseInstallationFilesS3BucketName" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.databaseInstallationFilesS3BucketName"></a>

```java
public java.lang.String getDatabaseInstallationFilesS3BucketName();
```

- *Type:* java.lang.String

---

##### `databaseInstallationFilesS3Prefix`<sup>Required</sup> <a name="databaseInstallationFilesS3Prefix" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.databaseInstallationFilesS3Prefix"></a>

```java
public java.lang.String getDatabaseInstallationFilesS3Prefix();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.engine"></a>

```java
public java.lang.String getEngine();
```

- *Type:* java.lang.String

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.engineVersion"></a>

```java
public java.lang.String getEngineVersion();
```

- *Type:* java.lang.String

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.imageId"></a>

```java
public java.lang.String getImageId();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `manifest`<sup>Required</sup> <a name="manifest" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.manifest"></a>

```java
public java.lang.String getManifest();
```

- *Type:* java.lang.String

---

##### `sourceCustomDbEngineVersionIdentifier`<sup>Required</sup> <a name="sourceCustomDbEngineVersionIdentifier" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.sourceCustomDbEngineVersionIdentifier"></a>

```java
public java.lang.String getSourceCustomDbEngineVersionIdentifier();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `useAwsProvidedLatestImage`<sup>Required</sup> <a name="useAwsProvidedLatestImage" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.useAwsProvidedLatestImage"></a>

```java
public java.lang.Boolean|IResolvable getUseAwsProvidedLatestImage();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RdsCustomDbEngineVersionConfig <a name="RdsCustomDbEngineVersionConfig" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_custom_db_engine_version.RdsCustomDbEngineVersionConfig;

RdsCustomDbEngineVersionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .engine(java.lang.String)
    .engineVersion(java.lang.String)
//  .databaseInstallationFiles(java.util.List<java.lang.String>)
//  .databaseInstallationFilesS3BucketName(java.lang.String)
//  .databaseInstallationFilesS3Prefix(java.lang.String)
//  .description(java.lang.String)
//  .imageId(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .manifest(java.lang.String)
//  .sourceCustomDbEngineVersionIdentifier(java.lang.String)
//  .status(java.lang.String)
//  .tags(IResolvable|java.util.List<RdsCustomDbEngineVersionTags>)
//  .useAwsProvidedLatestImage(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.engine">engine</a></code> | <code>java.lang.String</code> | The database engine to use for your custom engine version (CEV). |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | The name of your CEV. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.databaseInstallationFiles">databaseInstallationFiles</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_custom_db_engine_version#database_installation_files RdsCustomDbEngineVersion#database_installation_files}. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.databaseInstallationFilesS3BucketName">databaseInstallationFilesS3BucketName</a></code> | <code>java.lang.String</code> | The name of an Amazon S3 bucket that contains database installation files for your CEV. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.databaseInstallationFilesS3Prefix">databaseInstallationFilesS3Prefix</a></code> | <code>java.lang.String</code> | The Amazon S3 directory that contains the database installation files for your CEV. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of your CEV. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.imageId">imageId</a></code> | <code>java.lang.String</code> | A value that indicates the ID of the AMI. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | The AWS KMS key identifier for an encrypted CEV. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.manifest">manifest</a></code> | <code>java.lang.String</code> | The CEV manifest, which is a JSON document that describes the installation .zip files stored in Amazon S3. Specify the name/value pairs in a file or a quoted string. RDS Custom applies the patches in the order in which they are listed.  The following JSON fields are valid:   + MediaImportTemplateVersion Version of the CEV manifest. The date is in the format YYYY-MM-DD. + databaseInstallationFileNames Ordered list of installation files for the CEV. + opatchFileNames Ordered list of OPatch installers used for the Oracle DB engine. + psuRuPatchFileNames The PSU and RU patches for this CEV. + OtherPatchFileNames The patches that are not in the list of PSU and RU patches. Amazon RDS applies these patches after applying the PSU and RU patches.   For more information, see [Creating the CEV manifest](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-cev.html#custom-cev.preparing.manifest) in the *Amazon RDS User Guide*. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.sourceCustomDbEngineVersionIdentifier">sourceCustomDbEngineVersionIdentifier</a></code> | <code>java.lang.String</code> | The ARN of a CEV to use as a source for creating a new CEV. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.status">status</a></code> | <code>java.lang.String</code> | A value that indicates the status of a custom engine version (CEV). |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTags">RdsCustomDbEngineVersionTags</a>></code> | A list of tags. For more information, see [Tagging Amazon RDS Resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the *Amazon RDS User Guide.*. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.useAwsProvidedLatestImage">useAwsProvidedLatestImage</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether to use the latest service-provided Amazon Machine Image (AMI) for the CEV. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.engine"></a>

```java
public java.lang.String getEngine();
```

- *Type:* java.lang.String

The database engine to use for your custom engine version (CEV).

Valid values:

* `custom-oracle-ee`
* `custom-oracle-ee-cdb`
* `sqlserver-dev-ee`
* `sqlserver-ee`
* `sqlserver-se`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_custom_db_engine_version#engine RdsCustomDbEngineVersion#engine}

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.engineVersion"></a>

```java
public java.lang.String getEngineVersion();
```

- *Type:* java.lang.String

The name of your CEV.

The name format is `major version.customized_string`. For example, a valid CEV name is `19.my_cev1`. This setting is required for RDS Custom for Oracle, but optional for Amazon RDS. The combination of `Engine` and `EngineVersion` is unique per customer per Region.
*Constraints:* Minimum length is 1. Maximum length is 60.
*Pattern:*`^[a-z0-9_.-]{1,60$`}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_custom_db_engine_version#engine_version RdsCustomDbEngineVersion#engine_version}

---

##### `databaseInstallationFiles`<sup>Optional</sup> <a name="databaseInstallationFiles" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.databaseInstallationFiles"></a>

```java
public java.util.List<java.lang.String> getDatabaseInstallationFiles();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_custom_db_engine_version#database_installation_files RdsCustomDbEngineVersion#database_installation_files}.

---

##### `databaseInstallationFilesS3BucketName`<sup>Optional</sup> <a name="databaseInstallationFilesS3BucketName" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.databaseInstallationFilesS3BucketName"></a>

```java
public java.lang.String getDatabaseInstallationFilesS3BucketName();
```

- *Type:* java.lang.String

The name of an Amazon S3 bucket that contains database installation files for your CEV.

For example, a valid bucket name is `my-custom-installation-files`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_custom_db_engine_version#database_installation_files_s3_bucket_name RdsCustomDbEngineVersion#database_installation_files_s3_bucket_name}

---

##### `databaseInstallationFilesS3Prefix`<sup>Optional</sup> <a name="databaseInstallationFilesS3Prefix" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.databaseInstallationFilesS3Prefix"></a>

```java
public java.lang.String getDatabaseInstallationFilesS3Prefix();
```

- *Type:* java.lang.String

The Amazon S3 directory that contains the database installation files for your CEV.

For example, a valid bucket name is `123456789012/cev1`. If this setting isn't specified, no prefix is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_custom_db_engine_version#database_installation_files_s3_prefix RdsCustomDbEngineVersion#database_installation_files_s3_prefix}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of your CEV.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_custom_db_engine_version#description RdsCustomDbEngineVersion#description}

---

##### `imageId`<sup>Optional</sup> <a name="imageId" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.imageId"></a>

```java
public java.lang.String getImageId();
```

- *Type:* java.lang.String

A value that indicates the ID of the AMI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_custom_db_engine_version#image_id RdsCustomDbEngineVersion#image_id}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

The AWS KMS key identifier for an encrypted CEV.

A symmetric encryption KMS key is required for RDS Custom, but optional for Amazon RDS.
If you have an existing symmetric encryption KMS key in your account, you can use it with RDS Custom. No further action is necessary. If you don't already have a symmetric encryption KMS key in your account, follow the instructions in [Creating a symmetric encryption KMS key](https://docs.aws.amazon.com/kms/latest/developerguide/create-keys.html#create-symmetric-cmk) in the *Key Management Service Developer Guide*.
You can choose the same symmetric encryption key when you create a CEV and a DB instance, or choose different keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_custom_db_engine_version#kms_key_id RdsCustomDbEngineVersion#kms_key_id}

---

##### `manifest`<sup>Optional</sup> <a name="manifest" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.manifest"></a>

```java
public java.lang.String getManifest();
```

- *Type:* java.lang.String

The CEV manifest, which is a JSON document that describes the installation .zip files stored in Amazon S3. Specify the name/value pairs in a file or a quoted string. RDS Custom applies the patches in the order in which they are listed.  The following JSON fields are valid:   + MediaImportTemplateVersion Version of the CEV manifest. The date is in the format YYYY-MM-DD. + databaseInstallationFileNames Ordered list of installation files for the CEV. + opatchFileNames Ordered list of OPatch installers used for the Oracle DB engine. + psuRuPatchFileNames The PSU and RU patches for this CEV. + OtherPatchFileNames The patches that are not in the list of PSU and RU patches. Amazon RDS applies these patches after applying the PSU and RU patches.   For more information, see [Creating the CEV manifest](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-cev.html#custom-cev.preparing.manifest) in the *Amazon RDS User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_custom_db_engine_version#manifest RdsCustomDbEngineVersion#manifest}

---

##### `sourceCustomDbEngineVersionIdentifier`<sup>Optional</sup> <a name="sourceCustomDbEngineVersionIdentifier" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.sourceCustomDbEngineVersionIdentifier"></a>

```java
public java.lang.String getSourceCustomDbEngineVersionIdentifier();
```

- *Type:* java.lang.String

The ARN of a CEV to use as a source for creating a new CEV.

You can specify a different Amazon Machine Imagine (AMI) by using either `Source` or `UseAwsProvidedLatestImage`. You can't specify a different JSON manifest when you specify `SourceCustomDbEngineVersionIdentifier`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_custom_db_engine_version#source_custom_db_engine_version_identifier RdsCustomDbEngineVersion#source_custom_db_engine_version_identifier}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

A value that indicates the status of a custom engine version (CEV).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_custom_db_engine_version#status RdsCustomDbEngineVersion#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.tags"></a>

```java
public IResolvable|java.util.List<RdsCustomDbEngineVersionTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTags">RdsCustomDbEngineVersionTags</a>>

A list of tags. For more information, see [Tagging Amazon RDS Resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the *Amazon RDS User Guide.*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_custom_db_engine_version#tags RdsCustomDbEngineVersion#tags}

---

##### `useAwsProvidedLatestImage`<sup>Optional</sup> <a name="useAwsProvidedLatestImage" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.useAwsProvidedLatestImage"></a>

```java
public java.lang.Boolean|IResolvable getUseAwsProvidedLatestImage();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether to use the latest service-provided Amazon Machine Image (AMI) for the CEV.

If you specify `UseAwsProvidedLatestImage`, you can't also specify `ImageId`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_custom_db_engine_version#use_aws_provided_latest_image RdsCustomDbEngineVersion#use_aws_provided_latest_image}

---

### RdsCustomDbEngineVersionTags <a name="RdsCustomDbEngineVersionTags" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_custom_db_engine_version.RdsCustomDbEngineVersionTags;

RdsCustomDbEngineVersionTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTags.property.key">key</a></code> | <code>java.lang.String</code> | A key is the required name of the tag. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTags.property.value">value</a></code> | <code>java.lang.String</code> | A value is the optional value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

A key is the required name of the tag.

The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with `aws:` or `rds:`. The string can only contain only the set of Unicode letters, digits, white-space, '*', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\p{L}\p{Z}\p{N}*.:/=+\-@]*)$").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_custom_db_engine_version#key RdsCustomDbEngineVersion#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

A value is the optional value of the tag.

The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with `aws:` or `rds:`. The string can only contain only the set of Unicode letters, digits, white-space, '*', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\p{L}\p{Z}\p{N}*.:/=+\-@]*)$").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_custom_db_engine_version#value RdsCustomDbEngineVersion#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RdsCustomDbEngineVersionTagsList <a name="RdsCustomDbEngineVersionTagsList" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_custom_db_engine_version.RdsCustomDbEngineVersionTagsList;

new RdsCustomDbEngineVersionTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.get"></a>

```java
public RdsCustomDbEngineVersionTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTags">RdsCustomDbEngineVersionTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<RdsCustomDbEngineVersionTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTags">RdsCustomDbEngineVersionTags</a>>

---


### RdsCustomDbEngineVersionTagsOutputReference <a name="RdsCustomDbEngineVersionTagsOutputReference" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.rds_custom_db_engine_version.RdsCustomDbEngineVersionTagsOutputReference;

new RdsCustomDbEngineVersionTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTags">RdsCustomDbEngineVersionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|RdsCustomDbEngineVersionTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTags">RdsCustomDbEngineVersionTags</a>

---



