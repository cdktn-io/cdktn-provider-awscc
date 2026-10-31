# `iotOtaUpdate` Submodule <a name="`iotOtaUpdate` Submodule" id="@cdktn/provider-awscc.iotOtaUpdate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotOtaUpdate <a name="IotOtaUpdate" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update awscc_iot_ota_update}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_ota_update.IotOtaUpdate;

IotOtaUpdate.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .files(IResolvable|java.util.List<IotOtaUpdateFiles>)
    .otaUpdateId(java.lang.String)
    .targets(java.util.List<java.lang.String>)
//  .additionalParameters(java.util.Map<java.lang.String, java.lang.String>)
//  .awsJobAbortConfig(IotOtaUpdateAwsJobAbortConfig)
//  .awsJobExecutionsRolloutConfig(IotOtaUpdateAwsJobExecutionsRolloutConfig)
//  .awsJobPresignedUrlConfig(IotOtaUpdateAwsJobPresignedUrlConfig)
//  .awsJobTimeoutConfig(IotOtaUpdateAwsJobTimeoutConfig)
//  .description(java.lang.String)
//  .protocols(java.util.List<java.lang.String>)
//  .roleArn(java.lang.String)
//  .tags(IResolvable|java.util.List<IotOtaUpdateTags>)
//  .targetSelection(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.files">files</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles">IotOtaUpdateFiles</a>></code> | The files to be streamed by the OTA update. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.otaUpdateId">otaUpdateId</a></code> | <code>java.lang.String</code> | The ID of the OTA update to be created. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.targets">targets</a></code> | <code>java.util.List<java.lang.String></code> | The devices targeted to receive OTA updates. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.additionalParameters">additionalParameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A list of additional OTA update parameters, which are name-value pairs. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.awsJobAbortConfig">awsJobAbortConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfig">IotOtaUpdateAwsJobAbortConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#aws_job_abort_config IotOtaUpdate#aws_job_abort_config}. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.awsJobExecutionsRolloutConfig">awsJobExecutionsRolloutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfig">IotOtaUpdateAwsJobExecutionsRolloutConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#aws_job_executions_rollout_config IotOtaUpdate#aws_job_executions_rollout_config}. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.awsJobPresignedUrlConfig">awsJobPresignedUrlConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfig">IotOtaUpdateAwsJobPresignedUrlConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#aws_job_presigned_url_config IotOtaUpdate#aws_job_presigned_url_config}. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.awsJobTimeoutConfig">awsJobTimeoutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfig">IotOtaUpdateAwsJobTimeoutConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#aws_job_timeout_config IotOtaUpdate#aws_job_timeout_config}. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the OTA update. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.protocols">protocols</a></code> | <code>java.util.List<java.lang.String></code> | The protocol used to transfer the OTA update image. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The IAM role that grants AWS IoT Core access to the Amazon S3, IoT jobs and AWS Code Signing resources to create an OTA update job. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTags">IotOtaUpdateTags</a>></code> | Metadata which can be used to manage updates. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.targetSelection">targetSelection</a></code> | <code>java.lang.String</code> | Specifies whether the update will continue to run (CONTINUOUS), or will be complete after all things specified as targets have completed the update (SNAPSHOT). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `files`<sup>Required</sup> <a name="files" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.files"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles">IotOtaUpdateFiles</a>>

The files to be streamed by the OTA update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#files IotOtaUpdate#files}

---

##### `otaUpdateId`<sup>Required</sup> <a name="otaUpdateId" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.otaUpdateId"></a>

- *Type:* java.lang.String

The ID of the OTA update to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#ota_update_id IotOtaUpdate#ota_update_id}

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.targets"></a>

- *Type:* java.util.List<java.lang.String>

The devices targeted to receive OTA updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#targets IotOtaUpdate#targets}

---

##### `additionalParameters`<sup>Optional</sup> <a name="additionalParameters" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.additionalParameters"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A list of additional OTA update parameters, which are name-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#additional_parameters IotOtaUpdate#additional_parameters}

---

##### `awsJobAbortConfig`<sup>Optional</sup> <a name="awsJobAbortConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.awsJobAbortConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfig">IotOtaUpdateAwsJobAbortConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#aws_job_abort_config IotOtaUpdate#aws_job_abort_config}.

---

##### `awsJobExecutionsRolloutConfig`<sup>Optional</sup> <a name="awsJobExecutionsRolloutConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.awsJobExecutionsRolloutConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfig">IotOtaUpdateAwsJobExecutionsRolloutConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#aws_job_executions_rollout_config IotOtaUpdate#aws_job_executions_rollout_config}.

---

##### `awsJobPresignedUrlConfig`<sup>Optional</sup> <a name="awsJobPresignedUrlConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.awsJobPresignedUrlConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfig">IotOtaUpdateAwsJobPresignedUrlConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#aws_job_presigned_url_config IotOtaUpdate#aws_job_presigned_url_config}.

---

##### `awsJobTimeoutConfig`<sup>Optional</sup> <a name="awsJobTimeoutConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.awsJobTimeoutConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfig">IotOtaUpdateAwsJobTimeoutConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#aws_job_timeout_config IotOtaUpdate#aws_job_timeout_config}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the OTA update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#description IotOtaUpdate#description}

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.protocols"></a>

- *Type:* java.util.List<java.lang.String>

The protocol used to transfer the OTA update image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#protocols IotOtaUpdate#protocols}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

The IAM role that grants AWS IoT Core access to the Amazon S3, IoT jobs and AWS Code Signing resources to create an OTA update job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#role_arn IotOtaUpdate#role_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTags">IotOtaUpdateTags</a>>

Metadata which can be used to manage updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#tags IotOtaUpdate#tags}

---

##### `targetSelection`<sup>Optional</sup> <a name="targetSelection" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.targetSelection"></a>

- *Type:* java.lang.String

Specifies whether the update will continue to run (CONTINUOUS), or will be complete after all things specified as targets have completed the update (SNAPSHOT).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#target_selection IotOtaUpdate#target_selection}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putAwsJobAbortConfig">putAwsJobAbortConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putAwsJobExecutionsRolloutConfig">putAwsJobExecutionsRolloutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putAwsJobPresignedUrlConfig">putAwsJobPresignedUrlConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putAwsJobTimeoutConfig">putAwsJobTimeoutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putFiles">putFiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetAdditionalParameters">resetAdditionalParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetAwsJobAbortConfig">resetAwsJobAbortConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetAwsJobExecutionsRolloutConfig">resetAwsJobExecutionsRolloutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetAwsJobPresignedUrlConfig">resetAwsJobPresignedUrlConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetAwsJobTimeoutConfig">resetAwsJobTimeoutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetProtocols">resetProtocols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetTargetSelection">resetTargetSelection</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAwsJobAbortConfig` <a name="putAwsJobAbortConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putAwsJobAbortConfig"></a>

```java
public void putAwsJobAbortConfig(IotOtaUpdateAwsJobAbortConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putAwsJobAbortConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfig">IotOtaUpdateAwsJobAbortConfig</a>

---

##### `putAwsJobExecutionsRolloutConfig` <a name="putAwsJobExecutionsRolloutConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putAwsJobExecutionsRolloutConfig"></a>

```java
public void putAwsJobExecutionsRolloutConfig(IotOtaUpdateAwsJobExecutionsRolloutConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putAwsJobExecutionsRolloutConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfig">IotOtaUpdateAwsJobExecutionsRolloutConfig</a>

---

##### `putAwsJobPresignedUrlConfig` <a name="putAwsJobPresignedUrlConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putAwsJobPresignedUrlConfig"></a>

```java
public void putAwsJobPresignedUrlConfig(IotOtaUpdateAwsJobPresignedUrlConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putAwsJobPresignedUrlConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfig">IotOtaUpdateAwsJobPresignedUrlConfig</a>

---

##### `putAwsJobTimeoutConfig` <a name="putAwsJobTimeoutConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putAwsJobTimeoutConfig"></a>

```java
public void putAwsJobTimeoutConfig(IotOtaUpdateAwsJobTimeoutConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putAwsJobTimeoutConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfig">IotOtaUpdateAwsJobTimeoutConfig</a>

---

##### `putFiles` <a name="putFiles" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putFiles"></a>

```java
public void putFiles(IResolvable|java.util.List<IotOtaUpdateFiles> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putFiles.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles">IotOtaUpdateFiles</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<IotOtaUpdateTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTags">IotOtaUpdateTags</a>>

---

##### `resetAdditionalParameters` <a name="resetAdditionalParameters" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetAdditionalParameters"></a>

```java
public void resetAdditionalParameters()
```

##### `resetAwsJobAbortConfig` <a name="resetAwsJobAbortConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetAwsJobAbortConfig"></a>

```java
public void resetAwsJobAbortConfig()
```

##### `resetAwsJobExecutionsRolloutConfig` <a name="resetAwsJobExecutionsRolloutConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetAwsJobExecutionsRolloutConfig"></a>

```java
public void resetAwsJobExecutionsRolloutConfig()
```

##### `resetAwsJobPresignedUrlConfig` <a name="resetAwsJobPresignedUrlConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetAwsJobPresignedUrlConfig"></a>

```java
public void resetAwsJobPresignedUrlConfig()
```

##### `resetAwsJobTimeoutConfig` <a name="resetAwsJobTimeoutConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetAwsJobTimeoutConfig"></a>

```java
public void resetAwsJobTimeoutConfig()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetProtocols` <a name="resetProtocols" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetProtocols"></a>

```java
public void resetProtocols()
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetRoleArn"></a>

```java
public void resetRoleArn()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetTags"></a>

```java
public void resetTags()
```

##### `resetTargetSelection` <a name="resetTargetSelection" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetTargetSelection"></a>

```java
public void resetTargetSelection()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotOtaUpdate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.isConstruct"></a>

```java
import io.cdktn.providers.awscc.iot_ota_update.IotOtaUpdate;

IotOtaUpdate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.iot_ota_update.IotOtaUpdate;

IotOtaUpdate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.iot_ota_update.IotOtaUpdate;

IotOtaUpdate.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.iot_ota_update.IotOtaUpdate;

IotOtaUpdate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IotOtaUpdate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a IotOtaUpdate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IotOtaUpdate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IotOtaUpdate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the IotOtaUpdate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobAbortConfig">awsJobAbortConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference">IotOtaUpdateAwsJobAbortConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobExecutionsRolloutConfig">awsJobExecutionsRolloutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference">IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobPresignedUrlConfig">awsJobPresignedUrlConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference">IotOtaUpdateAwsJobPresignedUrlConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobTimeoutConfig">awsJobTimeoutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference">IotOtaUpdateAwsJobTimeoutConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.creationDate">creationDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.files">files</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList">IotOtaUpdateFilesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.lastModifiedDate">lastModifiedDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.otaUpdateArn">otaUpdateArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.otaUpdateStatus">otaUpdateStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList">IotOtaUpdateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.additionalParametersInput">additionalParametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobAbortConfigInput">awsJobAbortConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfig">IotOtaUpdateAwsJobAbortConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobExecutionsRolloutConfigInput">awsJobExecutionsRolloutConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfig">IotOtaUpdateAwsJobExecutionsRolloutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobPresignedUrlConfigInput">awsJobPresignedUrlConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfig">IotOtaUpdateAwsJobPresignedUrlConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobTimeoutConfigInput">awsJobTimeoutConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfig">IotOtaUpdateAwsJobTimeoutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.filesInput">filesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles">IotOtaUpdateFiles</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.otaUpdateIdInput">otaUpdateIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.protocolsInput">protocolsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTags">IotOtaUpdateTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.targetSelectionInput">targetSelectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.targetsInput">targetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.additionalParameters">additionalParameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.otaUpdateId">otaUpdateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.protocols">protocols</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.targets">targets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.targetSelection">targetSelection</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `awsJobAbortConfig`<sup>Required</sup> <a name="awsJobAbortConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobAbortConfig"></a>

```java
public IotOtaUpdateAwsJobAbortConfigOutputReference getAwsJobAbortConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference">IotOtaUpdateAwsJobAbortConfigOutputReference</a>

---

##### `awsJobExecutionsRolloutConfig`<sup>Required</sup> <a name="awsJobExecutionsRolloutConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobExecutionsRolloutConfig"></a>

```java
public IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference getAwsJobExecutionsRolloutConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference">IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference</a>

---

##### `awsJobPresignedUrlConfig`<sup>Required</sup> <a name="awsJobPresignedUrlConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobPresignedUrlConfig"></a>

```java
public IotOtaUpdateAwsJobPresignedUrlConfigOutputReference getAwsJobPresignedUrlConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference">IotOtaUpdateAwsJobPresignedUrlConfigOutputReference</a>

---

##### `awsJobTimeoutConfig`<sup>Required</sup> <a name="awsJobTimeoutConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobTimeoutConfig"></a>

```java
public IotOtaUpdateAwsJobTimeoutConfigOutputReference getAwsJobTimeoutConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference">IotOtaUpdateAwsJobTimeoutConfigOutputReference</a>

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.creationDate"></a>

```java
public java.lang.String getCreationDate();
```

- *Type:* java.lang.String

---

##### `files`<sup>Required</sup> <a name="files" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.files"></a>

```java
public IotOtaUpdateFilesList getFiles();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList">IotOtaUpdateFilesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastModifiedDate`<sup>Required</sup> <a name="lastModifiedDate" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.lastModifiedDate"></a>

```java
public java.lang.String getLastModifiedDate();
```

- *Type:* java.lang.String

---

##### `otaUpdateArn`<sup>Required</sup> <a name="otaUpdateArn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.otaUpdateArn"></a>

```java
public java.lang.String getOtaUpdateArn();
```

- *Type:* java.lang.String

---

##### `otaUpdateStatus`<sup>Required</sup> <a name="otaUpdateStatus" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.otaUpdateStatus"></a>

```java
public java.lang.String getOtaUpdateStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.tags"></a>

```java
public IotOtaUpdateTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList">IotOtaUpdateTagsList</a>

---

##### `additionalParametersInput`<sup>Optional</sup> <a name="additionalParametersInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.additionalParametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `awsJobAbortConfigInput`<sup>Optional</sup> <a name="awsJobAbortConfigInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobAbortConfigInput"></a>

```java
public IResolvable|IotOtaUpdateAwsJobAbortConfig getAwsJobAbortConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfig">IotOtaUpdateAwsJobAbortConfig</a>

---

##### `awsJobExecutionsRolloutConfigInput`<sup>Optional</sup> <a name="awsJobExecutionsRolloutConfigInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobExecutionsRolloutConfigInput"></a>

```java
public IResolvable|IotOtaUpdateAwsJobExecutionsRolloutConfig getAwsJobExecutionsRolloutConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfig">IotOtaUpdateAwsJobExecutionsRolloutConfig</a>

---

##### `awsJobPresignedUrlConfigInput`<sup>Optional</sup> <a name="awsJobPresignedUrlConfigInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobPresignedUrlConfigInput"></a>

```java
public IResolvable|IotOtaUpdateAwsJobPresignedUrlConfig getAwsJobPresignedUrlConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfig">IotOtaUpdateAwsJobPresignedUrlConfig</a>

---

##### `awsJobTimeoutConfigInput`<sup>Optional</sup> <a name="awsJobTimeoutConfigInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobTimeoutConfigInput"></a>

```java
public IResolvable|IotOtaUpdateAwsJobTimeoutConfig getAwsJobTimeoutConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfig">IotOtaUpdateAwsJobTimeoutConfig</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `filesInput`<sup>Optional</sup> <a name="filesInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.filesInput"></a>

```java
public IResolvable|java.util.List<IotOtaUpdateFiles> getFilesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles">IotOtaUpdateFiles</a>>

---

##### `otaUpdateIdInput`<sup>Optional</sup> <a name="otaUpdateIdInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.otaUpdateIdInput"></a>

```java
public java.lang.String getOtaUpdateIdInput();
```

- *Type:* java.lang.String

---

##### `protocolsInput`<sup>Optional</sup> <a name="protocolsInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.protocolsInput"></a>

```java
public java.util.List<java.lang.String> getProtocolsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.tagsInput"></a>

```java
public IResolvable|java.util.List<IotOtaUpdateTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTags">IotOtaUpdateTags</a>>

---

##### `targetSelectionInput`<sup>Optional</sup> <a name="targetSelectionInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.targetSelectionInput"></a>

```java
public java.lang.String getTargetSelectionInput();
```

- *Type:* java.lang.String

---

##### `targetsInput`<sup>Optional</sup> <a name="targetsInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.targetsInput"></a>

```java
public java.util.List<java.lang.String> getTargetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `additionalParameters`<sup>Required</sup> <a name="additionalParameters" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.additionalParameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `otaUpdateId`<sup>Required</sup> <a name="otaUpdateId" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.otaUpdateId"></a>

```java
public java.lang.String getOtaUpdateId();
```

- *Type:* java.lang.String

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.protocols"></a>

```java
public java.util.List<java.lang.String> getProtocols();
```

- *Type:* java.util.List<java.lang.String>

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.targets"></a>

```java
public java.util.List<java.lang.String> getTargets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetSelection`<sup>Required</sup> <a name="targetSelection" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.targetSelection"></a>

```java
public java.lang.String getTargetSelection();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IotOtaUpdateAwsJobAbortConfig <a name="IotOtaUpdateAwsJobAbortConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_ota_update.IotOtaUpdateAwsJobAbortConfig;

IotOtaUpdateAwsJobAbortConfig.builder()
//  .abortCriteriaList(IResolvable|java.util.List<IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfig.property.abortCriteriaList">abortCriteriaList</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct">IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct</a>></code> | The list of criteria that determine when and how to abort the job. |

---

##### `abortCriteriaList`<sup>Optional</sup> <a name="abortCriteriaList" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfig.property.abortCriteriaList"></a>

```java
public IResolvable|java.util.List<IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct> getAbortCriteriaList();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct">IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct</a>>

The list of criteria that determine when and how to abort the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#abort_criteria_list IotOtaUpdate#abort_criteria_list}

---

### IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct <a name="IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_ota_update.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct;

IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct.builder()
//  .action(java.lang.String)
//  .failureType(java.lang.String)
//  .minNumberOfExecutedThings(java.lang.Number)
//  .thresholdPercentage(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct.property.action">action</a></code> | <code>java.lang.String</code> | The type of job action to take to initiate the job abort. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct.property.failureType">failureType</a></code> | <code>java.lang.String</code> | The type of job execution failures that can initiate a job abort. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct.property.minNumberOfExecutedThings">minNumberOfExecutedThings</a></code> | <code>java.lang.Number</code> | The minimum number of things which must receive job execution notifications before the job can be aborted. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct.property.thresholdPercentage">thresholdPercentage</a></code> | <code>java.lang.Number</code> | The minimum percentage of job execution failures that must occur to initiate the job abort. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

The type of job action to take to initiate the job abort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#action IotOtaUpdate#action}

---

##### `failureType`<sup>Optional</sup> <a name="failureType" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct.property.failureType"></a>

```java
public java.lang.String getFailureType();
```

- *Type:* java.lang.String

The type of job execution failures that can initiate a job abort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#failure_type IotOtaUpdate#failure_type}

---

##### `minNumberOfExecutedThings`<sup>Optional</sup> <a name="minNumberOfExecutedThings" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct.property.minNumberOfExecutedThings"></a>

```java
public java.lang.Number getMinNumberOfExecutedThings();
```

- *Type:* java.lang.Number

The minimum number of things which must receive job execution notifications before the job can be aborted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#min_number_of_executed_things IotOtaUpdate#min_number_of_executed_things}

---

##### `thresholdPercentage`<sup>Optional</sup> <a name="thresholdPercentage" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct.property.thresholdPercentage"></a>

```java
public java.lang.Number getThresholdPercentage();
```

- *Type:* java.lang.Number

The minimum percentage of job execution failures that must occur to initiate the job abort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#threshold_percentage IotOtaUpdate#threshold_percentage}

---

### IotOtaUpdateAwsJobExecutionsRolloutConfig <a name="IotOtaUpdateAwsJobExecutionsRolloutConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_ota_update.IotOtaUpdateAwsJobExecutionsRolloutConfig;

IotOtaUpdateAwsJobExecutionsRolloutConfig.builder()
//  .exponentialRate(IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate)
//  .maximumPerMinute(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfig.property.exponentialRate">exponentialRate</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#exponential_rate IotOtaUpdate#exponential_rate}. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfig.property.maximumPerMinute">maximumPerMinute</a></code> | <code>java.lang.Number</code> | The maximum number of OTA update job executions started per minute. |

---

##### `exponentialRate`<sup>Optional</sup> <a name="exponentialRate" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfig.property.exponentialRate"></a>

```java
public IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate getExponentialRate();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#exponential_rate IotOtaUpdate#exponential_rate}.

---

##### `maximumPerMinute`<sup>Optional</sup> <a name="maximumPerMinute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfig.property.maximumPerMinute"></a>

```java
public java.lang.Number getMaximumPerMinute();
```

- *Type:* java.lang.Number

The maximum number of OTA update job executions started per minute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#maximum_per_minute IotOtaUpdate#maximum_per_minute}

---

### IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate <a name="IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_ota_update.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate;

IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate.builder()
//  .baseRatePerMinute(java.lang.Number)
//  .incrementFactor(java.lang.Number)
//  .rateIncreaseCriteria(IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate.property.baseRatePerMinute">baseRatePerMinute</a></code> | <code>java.lang.Number</code> | The minimum number of things that will be notified of a pending job, per minute, at the start of the job rollout. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate.property.incrementFactor">incrementFactor</a></code> | <code>java.lang.Number</code> | The rate of increase for a job rollout. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate.property.rateIncreaseCriteria">rateIncreaseCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#rate_increase_criteria IotOtaUpdate#rate_increase_criteria}. |

---

##### `baseRatePerMinute`<sup>Optional</sup> <a name="baseRatePerMinute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate.property.baseRatePerMinute"></a>

```java
public java.lang.Number getBaseRatePerMinute();
```

- *Type:* java.lang.Number

The minimum number of things that will be notified of a pending job, per minute, at the start of the job rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#base_rate_per_minute IotOtaUpdate#base_rate_per_minute}

---

##### `incrementFactor`<sup>Optional</sup> <a name="incrementFactor" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate.property.incrementFactor"></a>

```java
public java.lang.Number getIncrementFactor();
```

- *Type:* java.lang.Number

The rate of increase for a job rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#increment_factor IotOtaUpdate#increment_factor}

---

##### `rateIncreaseCriteria`<sup>Optional</sup> <a name="rateIncreaseCriteria" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate.property.rateIncreaseCriteria"></a>

```java
public IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria getRateIncreaseCriteria();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#rate_increase_criteria IotOtaUpdate#rate_increase_criteria}.

---

### IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria <a name="IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_ota_update.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria;

IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.builder()
//  .numberOfNotifiedThings(java.lang.Number)
//  .numberOfSucceededThings(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.property.numberOfNotifiedThings">numberOfNotifiedThings</a></code> | <code>java.lang.Number</code> | When this number of things have been notified, it will initiate an increase in the rollout rate. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.property.numberOfSucceededThings">numberOfSucceededThings</a></code> | <code>java.lang.Number</code> | When this number of things have succeeded in their job execution, it will initiate an increase in the rollout rate. |

---

##### `numberOfNotifiedThings`<sup>Optional</sup> <a name="numberOfNotifiedThings" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.property.numberOfNotifiedThings"></a>

```java
public java.lang.Number getNumberOfNotifiedThings();
```

- *Type:* java.lang.Number

When this number of things have been notified, it will initiate an increase in the rollout rate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#number_of_notified_things IotOtaUpdate#number_of_notified_things}

---

##### `numberOfSucceededThings`<sup>Optional</sup> <a name="numberOfSucceededThings" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.property.numberOfSucceededThings"></a>

```java
public java.lang.Number getNumberOfSucceededThings();
```

- *Type:* java.lang.Number

When this number of things have succeeded in their job execution, it will initiate an increase in the rollout rate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#number_of_succeeded_things IotOtaUpdate#number_of_succeeded_things}

---

### IotOtaUpdateAwsJobPresignedUrlConfig <a name="IotOtaUpdateAwsJobPresignedUrlConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_ota_update.IotOtaUpdateAwsJobPresignedUrlConfig;

IotOtaUpdateAwsJobPresignedUrlConfig.builder()
//  .expiresInSec(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfig.property.expiresInSec">expiresInSec</a></code> | <code>java.lang.Number</code> | How long (in seconds) pre-signed URLs are valid. |

---

##### `expiresInSec`<sup>Optional</sup> <a name="expiresInSec" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfig.property.expiresInSec"></a>

```java
public java.lang.Number getExpiresInSec();
```

- *Type:* java.lang.Number

How long (in seconds) pre-signed URLs are valid.

Valid values are 60 - 3600, the default value is 1800 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#expires_in_sec IotOtaUpdate#expires_in_sec}

---

### IotOtaUpdateAwsJobTimeoutConfig <a name="IotOtaUpdateAwsJobTimeoutConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_ota_update.IotOtaUpdateAwsJobTimeoutConfig;

IotOtaUpdateAwsJobTimeoutConfig.builder()
//  .inProgressTimeoutInMinutes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfig.property.inProgressTimeoutInMinutes">inProgressTimeoutInMinutes</a></code> | <code>java.lang.Number</code> | Specifies the amount of time, in minutes, this device has to finish execution of this job. |

---

##### `inProgressTimeoutInMinutes`<sup>Optional</sup> <a name="inProgressTimeoutInMinutes" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfig.property.inProgressTimeoutInMinutes"></a>

```java
public java.lang.Number getInProgressTimeoutInMinutes();
```

- *Type:* java.lang.Number

Specifies the amount of time, in minutes, this device has to finish execution of this job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#in_progress_timeout_in_minutes IotOtaUpdate#in_progress_timeout_in_minutes}

---

### IotOtaUpdateConfig <a name="IotOtaUpdateConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_ota_update.IotOtaUpdateConfig;

IotOtaUpdateConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .files(IResolvable|java.util.List<IotOtaUpdateFiles>)
    .otaUpdateId(java.lang.String)
    .targets(java.util.List<java.lang.String>)
//  .additionalParameters(java.util.Map<java.lang.String, java.lang.String>)
//  .awsJobAbortConfig(IotOtaUpdateAwsJobAbortConfig)
//  .awsJobExecutionsRolloutConfig(IotOtaUpdateAwsJobExecutionsRolloutConfig)
//  .awsJobPresignedUrlConfig(IotOtaUpdateAwsJobPresignedUrlConfig)
//  .awsJobTimeoutConfig(IotOtaUpdateAwsJobTimeoutConfig)
//  .description(java.lang.String)
//  .protocols(java.util.List<java.lang.String>)
//  .roleArn(java.lang.String)
//  .tags(IResolvable|java.util.List<IotOtaUpdateTags>)
//  .targetSelection(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.files">files</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles">IotOtaUpdateFiles</a>></code> | The files to be streamed by the OTA update. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.otaUpdateId">otaUpdateId</a></code> | <code>java.lang.String</code> | The ID of the OTA update to be created. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.targets">targets</a></code> | <code>java.util.List<java.lang.String></code> | The devices targeted to receive OTA updates. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.additionalParameters">additionalParameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A list of additional OTA update parameters, which are name-value pairs. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.awsJobAbortConfig">awsJobAbortConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfig">IotOtaUpdateAwsJobAbortConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#aws_job_abort_config IotOtaUpdate#aws_job_abort_config}. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.awsJobExecutionsRolloutConfig">awsJobExecutionsRolloutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfig">IotOtaUpdateAwsJobExecutionsRolloutConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#aws_job_executions_rollout_config IotOtaUpdate#aws_job_executions_rollout_config}. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.awsJobPresignedUrlConfig">awsJobPresignedUrlConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfig">IotOtaUpdateAwsJobPresignedUrlConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#aws_job_presigned_url_config IotOtaUpdate#aws_job_presigned_url_config}. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.awsJobTimeoutConfig">awsJobTimeoutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfig">IotOtaUpdateAwsJobTimeoutConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#aws_job_timeout_config IotOtaUpdate#aws_job_timeout_config}. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the OTA update. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.protocols">protocols</a></code> | <code>java.util.List<java.lang.String></code> | The protocol used to transfer the OTA update image. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The IAM role that grants AWS IoT Core access to the Amazon S3, IoT jobs and AWS Code Signing resources to create an OTA update job. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTags">IotOtaUpdateTags</a>></code> | Metadata which can be used to manage updates. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.targetSelection">targetSelection</a></code> | <code>java.lang.String</code> | Specifies whether the update will continue to run (CONTINUOUS), or will be complete after all things specified as targets have completed the update (SNAPSHOT). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `files`<sup>Required</sup> <a name="files" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.files"></a>

```java
public IResolvable|java.util.List<IotOtaUpdateFiles> getFiles();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles">IotOtaUpdateFiles</a>>

The files to be streamed by the OTA update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#files IotOtaUpdate#files}

---

##### `otaUpdateId`<sup>Required</sup> <a name="otaUpdateId" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.otaUpdateId"></a>

```java
public java.lang.String getOtaUpdateId();
```

- *Type:* java.lang.String

The ID of the OTA update to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#ota_update_id IotOtaUpdate#ota_update_id}

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.targets"></a>

```java
public java.util.List<java.lang.String> getTargets();
```

- *Type:* java.util.List<java.lang.String>

The devices targeted to receive OTA updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#targets IotOtaUpdate#targets}

---

##### `additionalParameters`<sup>Optional</sup> <a name="additionalParameters" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.additionalParameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdditionalParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A list of additional OTA update parameters, which are name-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#additional_parameters IotOtaUpdate#additional_parameters}

---

##### `awsJobAbortConfig`<sup>Optional</sup> <a name="awsJobAbortConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.awsJobAbortConfig"></a>

```java
public IotOtaUpdateAwsJobAbortConfig getAwsJobAbortConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfig">IotOtaUpdateAwsJobAbortConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#aws_job_abort_config IotOtaUpdate#aws_job_abort_config}.

---

##### `awsJobExecutionsRolloutConfig`<sup>Optional</sup> <a name="awsJobExecutionsRolloutConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.awsJobExecutionsRolloutConfig"></a>

```java
public IotOtaUpdateAwsJobExecutionsRolloutConfig getAwsJobExecutionsRolloutConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfig">IotOtaUpdateAwsJobExecutionsRolloutConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#aws_job_executions_rollout_config IotOtaUpdate#aws_job_executions_rollout_config}.

---

##### `awsJobPresignedUrlConfig`<sup>Optional</sup> <a name="awsJobPresignedUrlConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.awsJobPresignedUrlConfig"></a>

```java
public IotOtaUpdateAwsJobPresignedUrlConfig getAwsJobPresignedUrlConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfig">IotOtaUpdateAwsJobPresignedUrlConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#aws_job_presigned_url_config IotOtaUpdate#aws_job_presigned_url_config}.

---

##### `awsJobTimeoutConfig`<sup>Optional</sup> <a name="awsJobTimeoutConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.awsJobTimeoutConfig"></a>

```java
public IotOtaUpdateAwsJobTimeoutConfig getAwsJobTimeoutConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfig">IotOtaUpdateAwsJobTimeoutConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#aws_job_timeout_config IotOtaUpdate#aws_job_timeout_config}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the OTA update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#description IotOtaUpdate#description}

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.protocols"></a>

```java
public java.util.List<java.lang.String> getProtocols();
```

- *Type:* java.util.List<java.lang.String>

The protocol used to transfer the OTA update image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#protocols IotOtaUpdate#protocols}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

The IAM role that grants AWS IoT Core access to the Amazon S3, IoT jobs and AWS Code Signing resources to create an OTA update job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#role_arn IotOtaUpdate#role_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.tags"></a>

```java
public IResolvable|java.util.List<IotOtaUpdateTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTags">IotOtaUpdateTags</a>>

Metadata which can be used to manage updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#tags IotOtaUpdate#tags}

---

##### `targetSelection`<sup>Optional</sup> <a name="targetSelection" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.targetSelection"></a>

```java
public java.lang.String getTargetSelection();
```

- *Type:* java.lang.String

Specifies whether the update will continue to run (CONTINUOUS), or will be complete after all things specified as targets have completed the update (SNAPSHOT).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#target_selection IotOtaUpdate#target_selection}

---

### IotOtaUpdateFiles <a name="IotOtaUpdateFiles" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_ota_update.IotOtaUpdateFiles;

IotOtaUpdateFiles.builder()
//  .attributes(java.util.Map<java.lang.String, java.lang.String>)
//  .codeSigning(IotOtaUpdateFilesCodeSigning)
//  .fileLocation(IotOtaUpdateFilesFileLocation)
//  .fileName(java.lang.String)
//  .fileType(java.lang.Number)
//  .fileVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles.property.attributes">attributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A list of name-attribute pairs. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles.property.codeSigning">codeSigning</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigning">IotOtaUpdateFilesCodeSigning</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#code_signing IotOtaUpdate#code_signing}. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles.property.fileLocation">fileLocation</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocation">IotOtaUpdateFilesFileLocation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#file_location IotOtaUpdate#file_location}. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles.property.fileName">fileName</a></code> | <code>java.lang.String</code> | The name of the file. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles.property.fileType">fileType</a></code> | <code>java.lang.Number</code> | An integer value you can include in the job document to allow your devices to identify the type of file received from the cloud. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles.property.fileVersion">fileVersion</a></code> | <code>java.lang.String</code> | The file version. |

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles.property.attributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A list of name-attribute pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#attributes IotOtaUpdate#attributes}

---

##### `codeSigning`<sup>Optional</sup> <a name="codeSigning" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles.property.codeSigning"></a>

```java
public IotOtaUpdateFilesCodeSigning getCodeSigning();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigning">IotOtaUpdateFilesCodeSigning</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#code_signing IotOtaUpdate#code_signing}.

---

##### `fileLocation`<sup>Optional</sup> <a name="fileLocation" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles.property.fileLocation"></a>

```java
public IotOtaUpdateFilesFileLocation getFileLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocation">IotOtaUpdateFilesFileLocation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#file_location IotOtaUpdate#file_location}.

---

##### `fileName`<sup>Optional</sup> <a name="fileName" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles.property.fileName"></a>

```java
public java.lang.String getFileName();
```

- *Type:* java.lang.String

The name of the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#file_name IotOtaUpdate#file_name}

---

##### `fileType`<sup>Optional</sup> <a name="fileType" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles.property.fileType"></a>

```java
public java.lang.Number getFileType();
```

- *Type:* java.lang.Number

An integer value you can include in the job document to allow your devices to identify the type of file received from the cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#file_type IotOtaUpdate#file_type}

---

##### `fileVersion`<sup>Optional</sup> <a name="fileVersion" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles.property.fileVersion"></a>

```java
public java.lang.String getFileVersion();
```

- *Type:* java.lang.String

The file version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#file_version IotOtaUpdate#file_version}

---

### IotOtaUpdateFilesCodeSigning <a name="IotOtaUpdateFilesCodeSigning" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigning"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigning.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_ota_update.IotOtaUpdateFilesCodeSigning;

IotOtaUpdateFilesCodeSigning.builder()
//  .awsSignerJobId(java.lang.String)
//  .customCodeSigning(IotOtaUpdateFilesCodeSigningCustomCodeSigning)
//  .startSigningJobParameter(IotOtaUpdateFilesCodeSigningStartSigningJobParameter)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigning.property.awsSignerJobId">awsSignerJobId</a></code> | <code>java.lang.String</code> | The ID of the AWSSignerJob which was created to sign the file. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigning.property.customCodeSigning">customCodeSigning</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning">IotOtaUpdateFilesCodeSigningCustomCodeSigning</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#custom_code_signing IotOtaUpdate#custom_code_signing}. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigning.property.startSigningJobParameter">startSigningJobParameter</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameter">IotOtaUpdateFilesCodeSigningStartSigningJobParameter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#start_signing_job_parameter IotOtaUpdate#start_signing_job_parameter}. |

---

##### `awsSignerJobId`<sup>Optional</sup> <a name="awsSignerJobId" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigning.property.awsSignerJobId"></a>

```java
public java.lang.String getAwsSignerJobId();
```

- *Type:* java.lang.String

The ID of the AWSSignerJob which was created to sign the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#aws_signer_job_id IotOtaUpdate#aws_signer_job_id}

---

##### `customCodeSigning`<sup>Optional</sup> <a name="customCodeSigning" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigning.property.customCodeSigning"></a>

```java
public IotOtaUpdateFilesCodeSigningCustomCodeSigning getCustomCodeSigning();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning">IotOtaUpdateFilesCodeSigningCustomCodeSigning</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#custom_code_signing IotOtaUpdate#custom_code_signing}.

---

##### `startSigningJobParameter`<sup>Optional</sup> <a name="startSigningJobParameter" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigning.property.startSigningJobParameter"></a>

```java
public IotOtaUpdateFilesCodeSigningStartSigningJobParameter getStartSigningJobParameter();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameter">IotOtaUpdateFilesCodeSigningStartSigningJobParameter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#start_signing_job_parameter IotOtaUpdate#start_signing_job_parameter}.

---

### IotOtaUpdateFilesCodeSigningCustomCodeSigning <a name="IotOtaUpdateFilesCodeSigningCustomCodeSigning" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_ota_update.IotOtaUpdateFilesCodeSigningCustomCodeSigning;

IotOtaUpdateFilesCodeSigningCustomCodeSigning.builder()
//  .certificateChain(IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain)
//  .hashAlgorithm(java.lang.String)
//  .signature(IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature)
//  .signatureAlgorithm(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning.property.certificateChain">certificateChain</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain">IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#certificate_chain IotOtaUpdate#certificate_chain}. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning.property.hashAlgorithm">hashAlgorithm</a></code> | <code>java.lang.String</code> | The hash algorithm used to code sign the file. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning.property.signature">signature</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature">IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#signature IotOtaUpdate#signature}. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning.property.signatureAlgorithm">signatureAlgorithm</a></code> | <code>java.lang.String</code> | The signature algorithm used to code sign the file. |

---

##### `certificateChain`<sup>Optional</sup> <a name="certificateChain" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning.property.certificateChain"></a>

```java
public IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain getCertificateChain();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain">IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#certificate_chain IotOtaUpdate#certificate_chain}.

---

##### `hashAlgorithm`<sup>Optional</sup> <a name="hashAlgorithm" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning.property.hashAlgorithm"></a>

```java
public java.lang.String getHashAlgorithm();
```

- *Type:* java.lang.String

The hash algorithm used to code sign the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#hash_algorithm IotOtaUpdate#hash_algorithm}

---

##### `signature`<sup>Optional</sup> <a name="signature" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning.property.signature"></a>

```java
public IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature getSignature();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature">IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#signature IotOtaUpdate#signature}.

---

##### `signatureAlgorithm`<sup>Optional</sup> <a name="signatureAlgorithm" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning.property.signatureAlgorithm"></a>

```java
public java.lang.String getSignatureAlgorithm();
```

- *Type:* java.lang.String

The signature algorithm used to code sign the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#signature_algorithm IotOtaUpdate#signature_algorithm}

---

### IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain <a name="IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_ota_update.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain;

IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain.builder()
//  .certificateName(java.lang.String)
//  .inlineDocument(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain.property.certificateName">certificateName</a></code> | <code>java.lang.String</code> | The name of the certificate. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain.property.inlineDocument">inlineDocument</a></code> | <code>java.lang.String</code> | A base64 encoded binary representation of the code signing certificate chain. |

---

##### `certificateName`<sup>Optional</sup> <a name="certificateName" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain.property.certificateName"></a>

```java
public java.lang.String getCertificateName();
```

- *Type:* java.lang.String

The name of the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#certificate_name IotOtaUpdate#certificate_name}

---

##### `inlineDocument`<sup>Optional</sup> <a name="inlineDocument" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain.property.inlineDocument"></a>

```java
public java.lang.String getInlineDocument();
```

- *Type:* java.lang.String

A base64 encoded binary representation of the code signing certificate chain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#inline_document IotOtaUpdate#inline_document}

---

### IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature <a name="IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_ota_update.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature;

IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature.builder()
//  .inlineDocument(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature.property.inlineDocument">inlineDocument</a></code> | <code>java.lang.String</code> | A base64 encoded binary representation of the code signing signature. |

---

##### `inlineDocument`<sup>Optional</sup> <a name="inlineDocument" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature.property.inlineDocument"></a>

```java
public java.lang.String getInlineDocument();
```

- *Type:* java.lang.String

A base64 encoded binary representation of the code signing signature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#inline_document IotOtaUpdate#inline_document}

---

### IotOtaUpdateFilesCodeSigningStartSigningJobParameter <a name="IotOtaUpdateFilesCodeSigningStartSigningJobParameter" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameter.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_ota_update.IotOtaUpdateFilesCodeSigningStartSigningJobParameter;

IotOtaUpdateFilesCodeSigningStartSigningJobParameter.builder()
//  .destination(IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination)
//  .signingProfileName(java.lang.String)
//  .signingProfileParameter(IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameter.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#destination IotOtaUpdate#destination}. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameter.property.signingProfileName">signingProfileName</a></code> | <code>java.lang.String</code> | The code-signing profile name. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameter.property.signingProfileParameter">signingProfileParameter</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter">IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#signing_profile_parameter IotOtaUpdate#signing_profile_parameter}. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameter.property.destination"></a>

```java
public IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination getDestination();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#destination IotOtaUpdate#destination}.

---

##### `signingProfileName`<sup>Optional</sup> <a name="signingProfileName" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameter.property.signingProfileName"></a>

```java
public java.lang.String getSigningProfileName();
```

- *Type:* java.lang.String

The code-signing profile name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#signing_profile_name IotOtaUpdate#signing_profile_name}

---

##### `signingProfileParameter`<sup>Optional</sup> <a name="signingProfileParameter" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameter.property.signingProfileParameter"></a>

```java
public IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter getSigningProfileParameter();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter">IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#signing_profile_parameter IotOtaUpdate#signing_profile_parameter}.

---

### IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination <a name="IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_ota_update.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination;

IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination.builder()
//  .s3Destination(IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination.property.s3Destination">s3Destination</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#s3_destination IotOtaUpdate#s3_destination}. |

---

##### `s3Destination`<sup>Optional</sup> <a name="s3Destination" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination.property.s3Destination"></a>

```java
public IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination getS3Destination();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#s3_destination IotOtaUpdate#s3_destination}.

---

### IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination <a name="IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_ota_update.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination;

IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination.builder()
//  .bucket(java.lang.String)
//  .prefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination.property.bucket">bucket</a></code> | <code>java.lang.String</code> | The S3 bucket that contains the updated firmware. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination.property.prefix">prefix</a></code> | <code>java.lang.String</code> | The S3 prefix. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

The S3 bucket that contains the updated firmware.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#bucket IotOtaUpdate#bucket}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

The S3 prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#prefix IotOtaUpdate#prefix}

---

### IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter <a name="IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_ota_update.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter;

IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter.builder()
//  .certificateArn(java.lang.String)
//  .certificatePathOnDevice(java.lang.String)
//  .platform(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter.property.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | Certificate ARN. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter.property.certificatePathOnDevice">certificatePathOnDevice</a></code> | <code>java.lang.String</code> | The location of the code-signing certificate on your device. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter.property.platform">platform</a></code> | <code>java.lang.String</code> | The hardware platform of your device. |

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter.property.certificateArn"></a>

```java
public java.lang.String getCertificateArn();
```

- *Type:* java.lang.String

Certificate ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#certificate_arn IotOtaUpdate#certificate_arn}

---

##### `certificatePathOnDevice`<sup>Optional</sup> <a name="certificatePathOnDevice" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter.property.certificatePathOnDevice"></a>

```java
public java.lang.String getCertificatePathOnDevice();
```

- *Type:* java.lang.String

The location of the code-signing certificate on your device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#certificate_path_on_device IotOtaUpdate#certificate_path_on_device}

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter.property.platform"></a>

```java
public java.lang.String getPlatform();
```

- *Type:* java.lang.String

The hardware platform of your device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#platform IotOtaUpdate#platform}

---

### IotOtaUpdateFilesFileLocation <a name="IotOtaUpdateFilesFileLocation" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocation.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_ota_update.IotOtaUpdateFilesFileLocation;

IotOtaUpdateFilesFileLocation.builder()
//  .s3Location(IotOtaUpdateFilesFileLocationS3Location)
//  .stream(IotOtaUpdateFilesFileLocationStream)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocation.property.s3Location">s3Location</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3Location">IotOtaUpdateFilesFileLocationS3Location</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#s3_location IotOtaUpdate#s3_location}. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocation.property.stream">stream</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStream">IotOtaUpdateFilesFileLocationStream</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#stream IotOtaUpdate#stream}. |

---

##### `s3Location`<sup>Optional</sup> <a name="s3Location" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocation.property.s3Location"></a>

```java
public IotOtaUpdateFilesFileLocationS3Location getS3Location();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3Location">IotOtaUpdateFilesFileLocationS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#s3_location IotOtaUpdate#s3_location}.

---

##### `stream`<sup>Optional</sup> <a name="stream" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocation.property.stream"></a>

```java
public IotOtaUpdateFilesFileLocationStream getStream();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStream">IotOtaUpdateFilesFileLocationStream</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#stream IotOtaUpdate#stream}.

---

### IotOtaUpdateFilesFileLocationS3Location <a name="IotOtaUpdateFilesFileLocationS3Location" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3Location.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_ota_update.IotOtaUpdateFilesFileLocationS3Location;

IotOtaUpdateFilesFileLocationS3Location.builder()
//  .bucket(java.lang.String)
//  .key(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3Location.property.bucket">bucket</a></code> | <code>java.lang.String</code> | The S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3Location.property.key">key</a></code> | <code>java.lang.String</code> | The S3 key. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3Location.property.version">version</a></code> | <code>java.lang.String</code> | The S3 bucket version. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3Location.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

The S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#bucket IotOtaUpdate#bucket}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3Location.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The S3 key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#key IotOtaUpdate#key}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3Location.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

The S3 bucket version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#version IotOtaUpdate#version}

---

### IotOtaUpdateFilesFileLocationStream <a name="IotOtaUpdateFilesFileLocationStream" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStream"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStream.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_ota_update.IotOtaUpdateFilesFileLocationStream;

IotOtaUpdateFilesFileLocationStream.builder()
//  .fileId(java.lang.Number)
//  .streamId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStream.property.fileId">fileId</a></code> | <code>java.lang.Number</code> | The ID of a file associated with a stream. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStream.property.streamId">streamId</a></code> | <code>java.lang.String</code> | The stream ID. |

---

##### `fileId`<sup>Optional</sup> <a name="fileId" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStream.property.fileId"></a>

```java
public java.lang.Number getFileId();
```

- *Type:* java.lang.Number

The ID of a file associated with a stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#file_id IotOtaUpdate#file_id}

---

##### `streamId`<sup>Optional</sup> <a name="streamId" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStream.property.streamId"></a>

```java
public java.lang.String getStreamId();
```

- *Type:* java.lang.String

The stream ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#stream_id IotOtaUpdate#stream_id}

---

### IotOtaUpdateTags <a name="IotOtaUpdateTags" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_ota_update.IotOtaUpdateTags;

IotOtaUpdateTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#key IotOtaUpdate#key}. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#value IotOtaUpdate#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#key IotOtaUpdate#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#value IotOtaUpdate#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList <a name="IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_ota_update.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList;

new IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.get"></a>

```java
public IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct">IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct">IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct</a>>

---


### IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference <a name="IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_ota_update.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference;

new IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.resetFailureType">resetFailureType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.resetMinNumberOfExecutedThings">resetMinNumberOfExecutedThings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.resetThresholdPercentage">resetThresholdPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAction` <a name="resetAction" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.resetAction"></a>

```java
public void resetAction()
```

##### `resetFailureType` <a name="resetFailureType" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.resetFailureType"></a>

```java
public void resetFailureType()
```

##### `resetMinNumberOfExecutedThings` <a name="resetMinNumberOfExecutedThings" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.resetMinNumberOfExecutedThings"></a>

```java
public void resetMinNumberOfExecutedThings()
```

##### `resetThresholdPercentage` <a name="resetThresholdPercentage" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.resetThresholdPercentage"></a>

```java
public void resetThresholdPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.failureTypeInput">failureTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.minNumberOfExecutedThingsInput">minNumberOfExecutedThingsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.thresholdPercentageInput">thresholdPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.failureType">failureType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.minNumberOfExecutedThings">minNumberOfExecutedThings</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.thresholdPercentage">thresholdPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct">IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `failureTypeInput`<sup>Optional</sup> <a name="failureTypeInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.failureTypeInput"></a>

```java
public java.lang.String getFailureTypeInput();
```

- *Type:* java.lang.String

---

##### `minNumberOfExecutedThingsInput`<sup>Optional</sup> <a name="minNumberOfExecutedThingsInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.minNumberOfExecutedThingsInput"></a>

```java
public java.lang.Number getMinNumberOfExecutedThingsInput();
```

- *Type:* java.lang.Number

---

##### `thresholdPercentageInput`<sup>Optional</sup> <a name="thresholdPercentageInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.thresholdPercentageInput"></a>

```java
public java.lang.Number getThresholdPercentageInput();
```

- *Type:* java.lang.Number

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `failureType`<sup>Required</sup> <a name="failureType" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.failureType"></a>

```java
public java.lang.String getFailureType();
```

- *Type:* java.lang.String

---

##### `minNumberOfExecutedThings`<sup>Required</sup> <a name="minNumberOfExecutedThings" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.minNumberOfExecutedThings"></a>

```java
public java.lang.Number getMinNumberOfExecutedThings();
```

- *Type:* java.lang.Number

---

##### `thresholdPercentage`<sup>Required</sup> <a name="thresholdPercentage" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.thresholdPercentage"></a>

```java
public java.lang.Number getThresholdPercentage();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.internalValue"></a>

```java
public IResolvable|IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct">IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct</a>

---


### IotOtaUpdateAwsJobAbortConfigOutputReference <a name="IotOtaUpdateAwsJobAbortConfigOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_ota_update.IotOtaUpdateAwsJobAbortConfigOutputReference;

new IotOtaUpdateAwsJobAbortConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.putAbortCriteriaList">putAbortCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.resetAbortCriteriaList">resetAbortCriteriaList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAbortCriteriaList` <a name="putAbortCriteriaList" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.putAbortCriteriaList"></a>

```java
public void putAbortCriteriaList(IResolvable|java.util.List<IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.putAbortCriteriaList.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct">IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct</a>>

---

##### `resetAbortCriteriaList` <a name="resetAbortCriteriaList" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.resetAbortCriteriaList"></a>

```java
public void resetAbortCriteriaList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.property.abortCriteriaList">abortCriteriaList</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList">IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.property.abortCriteriaListInput">abortCriteriaListInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct">IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfig">IotOtaUpdateAwsJobAbortConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `abortCriteriaList`<sup>Required</sup> <a name="abortCriteriaList" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.property.abortCriteriaList"></a>

```java
public IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList getAbortCriteriaList();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList">IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList</a>

---

##### `abortCriteriaListInput`<sup>Optional</sup> <a name="abortCriteriaListInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.property.abortCriteriaListInput"></a>

```java
public IResolvable|java.util.List<IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct> getAbortCriteriaListInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct">IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|IotOtaUpdateAwsJobAbortConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfig">IotOtaUpdateAwsJobAbortConfig</a>

---


### IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference <a name="IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_ota_update.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference;

new IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.putRateIncreaseCriteria">putRateIncreaseCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.resetBaseRatePerMinute">resetBaseRatePerMinute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.resetIncrementFactor">resetIncrementFactor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.resetRateIncreaseCriteria">resetRateIncreaseCriteria</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRateIncreaseCriteria` <a name="putRateIncreaseCriteria" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.putRateIncreaseCriteria"></a>

```java
public void putRateIncreaseCriteria(IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.putRateIncreaseCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a>

---

##### `resetBaseRatePerMinute` <a name="resetBaseRatePerMinute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.resetBaseRatePerMinute"></a>

```java
public void resetBaseRatePerMinute()
```

##### `resetIncrementFactor` <a name="resetIncrementFactor" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.resetIncrementFactor"></a>

```java
public void resetIncrementFactor()
```

##### `resetRateIncreaseCriteria` <a name="resetRateIncreaseCriteria" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.resetRateIncreaseCriteria"></a>

```java
public void resetRateIncreaseCriteria()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.rateIncreaseCriteria">rateIncreaseCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.baseRatePerMinuteInput">baseRatePerMinuteInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.incrementFactorInput">incrementFactorInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.rateIncreaseCriteriaInput">rateIncreaseCriteriaInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.baseRatePerMinute">baseRatePerMinute</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.incrementFactor">incrementFactor</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rateIncreaseCriteria`<sup>Required</sup> <a name="rateIncreaseCriteria" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.rateIncreaseCriteria"></a>

```java
public IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference getRateIncreaseCriteria();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference</a>

---

##### `baseRatePerMinuteInput`<sup>Optional</sup> <a name="baseRatePerMinuteInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.baseRatePerMinuteInput"></a>

```java
public java.lang.Number getBaseRatePerMinuteInput();
```

- *Type:* java.lang.Number

---

##### `incrementFactorInput`<sup>Optional</sup> <a name="incrementFactorInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.incrementFactorInput"></a>

```java
public java.lang.Number getIncrementFactorInput();
```

- *Type:* java.lang.Number

---

##### `rateIncreaseCriteriaInput`<sup>Optional</sup> <a name="rateIncreaseCriteriaInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.rateIncreaseCriteriaInput"></a>

```java
public IResolvable|IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria getRateIncreaseCriteriaInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a>

---

##### `baseRatePerMinute`<sup>Required</sup> <a name="baseRatePerMinute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.baseRatePerMinute"></a>

```java
public java.lang.Number getBaseRatePerMinute();
```

- *Type:* java.lang.Number

---

##### `incrementFactor`<sup>Required</sup> <a name="incrementFactor" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.incrementFactor"></a>

```java
public java.lang.Number getIncrementFactor();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.internalValue"></a>

```java
public IResolvable|IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate</a>

---


### IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference <a name="IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_ota_update.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference;

new IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resetNumberOfNotifiedThings">resetNumberOfNotifiedThings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resetNumberOfSucceededThings">resetNumberOfSucceededThings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNumberOfNotifiedThings` <a name="resetNumberOfNotifiedThings" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resetNumberOfNotifiedThings"></a>

```java
public void resetNumberOfNotifiedThings()
```

##### `resetNumberOfSucceededThings` <a name="resetNumberOfSucceededThings" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resetNumberOfSucceededThings"></a>

```java
public void resetNumberOfSucceededThings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThingsInput">numberOfNotifiedThingsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThingsInput">numberOfSucceededThingsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThings">numberOfNotifiedThings</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThings">numberOfSucceededThings</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `numberOfNotifiedThingsInput`<sup>Optional</sup> <a name="numberOfNotifiedThingsInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThingsInput"></a>

```java
public java.lang.Number getNumberOfNotifiedThingsInput();
```

- *Type:* java.lang.Number

---

##### `numberOfSucceededThingsInput`<sup>Optional</sup> <a name="numberOfSucceededThingsInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThingsInput"></a>

```java
public java.lang.Number getNumberOfSucceededThingsInput();
```

- *Type:* java.lang.Number

---

##### `numberOfNotifiedThings`<sup>Required</sup> <a name="numberOfNotifiedThings" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThings"></a>

```java
public java.lang.Number getNumberOfNotifiedThings();
```

- *Type:* java.lang.Number

---

##### `numberOfSucceededThings`<sup>Required</sup> <a name="numberOfSucceededThings" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThings"></a>

```java
public java.lang.Number getNumberOfSucceededThings();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.internalValue"></a>

```java
public IResolvable|IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a>

---


### IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference <a name="IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_ota_update.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference;

new IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.putExponentialRate">putExponentialRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.resetExponentialRate">resetExponentialRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.resetMaximumPerMinute">resetMaximumPerMinute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExponentialRate` <a name="putExponentialRate" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.putExponentialRate"></a>

```java
public void putExponentialRate(IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.putExponentialRate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate</a>

---

##### `resetExponentialRate` <a name="resetExponentialRate" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.resetExponentialRate"></a>

```java
public void resetExponentialRate()
```

##### `resetMaximumPerMinute` <a name="resetMaximumPerMinute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.resetMaximumPerMinute"></a>

```java
public void resetMaximumPerMinute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.exponentialRate">exponentialRate</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.exponentialRateInput">exponentialRateInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.maximumPerMinuteInput">maximumPerMinuteInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.maximumPerMinute">maximumPerMinute</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfig">IotOtaUpdateAwsJobExecutionsRolloutConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `exponentialRate`<sup>Required</sup> <a name="exponentialRate" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.exponentialRate"></a>

```java
public IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference getExponentialRate();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference</a>

---

##### `exponentialRateInput`<sup>Optional</sup> <a name="exponentialRateInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.exponentialRateInput"></a>

```java
public IResolvable|IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate getExponentialRateInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate</a>

---

##### `maximumPerMinuteInput`<sup>Optional</sup> <a name="maximumPerMinuteInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.maximumPerMinuteInput"></a>

```java
public java.lang.Number getMaximumPerMinuteInput();
```

- *Type:* java.lang.Number

---

##### `maximumPerMinute`<sup>Required</sup> <a name="maximumPerMinute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.maximumPerMinute"></a>

```java
public java.lang.Number getMaximumPerMinute();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|IotOtaUpdateAwsJobExecutionsRolloutConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfig">IotOtaUpdateAwsJobExecutionsRolloutConfig</a>

---


### IotOtaUpdateAwsJobPresignedUrlConfigOutputReference <a name="IotOtaUpdateAwsJobPresignedUrlConfigOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_ota_update.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference;

new IotOtaUpdateAwsJobPresignedUrlConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.resetExpiresInSec">resetExpiresInSec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpiresInSec` <a name="resetExpiresInSec" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.resetExpiresInSec"></a>

```java
public void resetExpiresInSec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.property.expiresInSecInput">expiresInSecInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.property.expiresInSec">expiresInSec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfig">IotOtaUpdateAwsJobPresignedUrlConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expiresInSecInput`<sup>Optional</sup> <a name="expiresInSecInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.property.expiresInSecInput"></a>

```java
public java.lang.Number getExpiresInSecInput();
```

- *Type:* java.lang.Number

---

##### `expiresInSec`<sup>Required</sup> <a name="expiresInSec" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.property.expiresInSec"></a>

```java
public java.lang.Number getExpiresInSec();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|IotOtaUpdateAwsJobPresignedUrlConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfig">IotOtaUpdateAwsJobPresignedUrlConfig</a>

---


### IotOtaUpdateAwsJobTimeoutConfigOutputReference <a name="IotOtaUpdateAwsJobTimeoutConfigOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_ota_update.IotOtaUpdateAwsJobTimeoutConfigOutputReference;

new IotOtaUpdateAwsJobTimeoutConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.resetInProgressTimeoutInMinutes">resetInProgressTimeoutInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInProgressTimeoutInMinutes` <a name="resetInProgressTimeoutInMinutes" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.resetInProgressTimeoutInMinutes"></a>

```java
public void resetInProgressTimeoutInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.property.inProgressTimeoutInMinutesInput">inProgressTimeoutInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.property.inProgressTimeoutInMinutes">inProgressTimeoutInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfig">IotOtaUpdateAwsJobTimeoutConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inProgressTimeoutInMinutesInput`<sup>Optional</sup> <a name="inProgressTimeoutInMinutesInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.property.inProgressTimeoutInMinutesInput"></a>

```java
public java.lang.Number getInProgressTimeoutInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `inProgressTimeoutInMinutes`<sup>Required</sup> <a name="inProgressTimeoutInMinutes" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.property.inProgressTimeoutInMinutes"></a>

```java
public java.lang.Number getInProgressTimeoutInMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|IotOtaUpdateAwsJobTimeoutConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfig">IotOtaUpdateAwsJobTimeoutConfig</a>

---


### IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference <a name="IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_ota_update.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference;

new IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.resetCertificateName">resetCertificateName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.resetInlineDocument">resetInlineDocument</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateName` <a name="resetCertificateName" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.resetCertificateName"></a>

```java
public void resetCertificateName()
```

##### `resetInlineDocument` <a name="resetInlineDocument" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.resetInlineDocument"></a>

```java
public void resetInlineDocument()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.certificateNameInput">certificateNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.inlineDocumentInput">inlineDocumentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.certificateName">certificateName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.inlineDocument">inlineDocument</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain">IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateNameInput`<sup>Optional</sup> <a name="certificateNameInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.certificateNameInput"></a>

```java
public java.lang.String getCertificateNameInput();
```

- *Type:* java.lang.String

---

##### `inlineDocumentInput`<sup>Optional</sup> <a name="inlineDocumentInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.inlineDocumentInput"></a>

```java
public java.lang.String getInlineDocumentInput();
```

- *Type:* java.lang.String

---

##### `certificateName`<sup>Required</sup> <a name="certificateName" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.certificateName"></a>

```java
public java.lang.String getCertificateName();
```

- *Type:* java.lang.String

---

##### `inlineDocument`<sup>Required</sup> <a name="inlineDocument" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.inlineDocument"></a>

```java
public java.lang.String getInlineDocument();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.internalValue"></a>

```java
public IResolvable|IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain">IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain</a>

---


### IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference <a name="IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_ota_update.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference;

new IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.putCertificateChain">putCertificateChain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.putSignature">putSignature</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.resetCertificateChain">resetCertificateChain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.resetHashAlgorithm">resetHashAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.resetSignature">resetSignature</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.resetSignatureAlgorithm">resetSignatureAlgorithm</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCertificateChain` <a name="putCertificateChain" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.putCertificateChain"></a>

```java
public void putCertificateChain(IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.putCertificateChain.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain">IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain</a>

---

##### `putSignature` <a name="putSignature" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.putSignature"></a>

```java
public void putSignature(IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.putSignature.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature">IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature</a>

---

##### `resetCertificateChain` <a name="resetCertificateChain" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.resetCertificateChain"></a>

```java
public void resetCertificateChain()
```

##### `resetHashAlgorithm` <a name="resetHashAlgorithm" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.resetHashAlgorithm"></a>

```java
public void resetHashAlgorithm()
```

##### `resetSignature` <a name="resetSignature" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.resetSignature"></a>

```java
public void resetSignature()
```

##### `resetSignatureAlgorithm` <a name="resetSignatureAlgorithm" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.resetSignatureAlgorithm"></a>

```java
public void resetSignatureAlgorithm()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.certificateChain">certificateChain</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference">IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.signature">signature</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference">IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.certificateChainInput">certificateChainInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain">IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.hashAlgorithmInput">hashAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.signatureAlgorithmInput">signatureAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.signatureInput">signatureInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature">IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.hashAlgorithm">hashAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.signatureAlgorithm">signatureAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning">IotOtaUpdateFilesCodeSigningCustomCodeSigning</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateChain`<sup>Required</sup> <a name="certificateChain" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.certificateChain"></a>

```java
public IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference getCertificateChain();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference">IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference</a>

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.signature"></a>

```java
public IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference getSignature();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference">IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference</a>

---

##### `certificateChainInput`<sup>Optional</sup> <a name="certificateChainInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.certificateChainInput"></a>

```java
public IResolvable|IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain getCertificateChainInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain">IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain</a>

---

##### `hashAlgorithmInput`<sup>Optional</sup> <a name="hashAlgorithmInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.hashAlgorithmInput"></a>

```java
public java.lang.String getHashAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `signatureAlgorithmInput`<sup>Optional</sup> <a name="signatureAlgorithmInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.signatureAlgorithmInput"></a>

```java
public java.lang.String getSignatureAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `signatureInput`<sup>Optional</sup> <a name="signatureInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.signatureInput"></a>

```java
public IResolvable|IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature getSignatureInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature">IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature</a>

---

##### `hashAlgorithm`<sup>Required</sup> <a name="hashAlgorithm" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.hashAlgorithm"></a>

```java
public java.lang.String getHashAlgorithm();
```

- *Type:* java.lang.String

---

##### `signatureAlgorithm`<sup>Required</sup> <a name="signatureAlgorithm" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.signatureAlgorithm"></a>

```java
public java.lang.String getSignatureAlgorithm();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.internalValue"></a>

```java
public IResolvable|IotOtaUpdateFilesCodeSigningCustomCodeSigning getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning">IotOtaUpdateFilesCodeSigningCustomCodeSigning</a>

---


### IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference <a name="IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_ota_update.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference;

new IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.resetInlineDocument">resetInlineDocument</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInlineDocument` <a name="resetInlineDocument" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.resetInlineDocument"></a>

```java
public void resetInlineDocument()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.property.inlineDocumentInput">inlineDocumentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.property.inlineDocument">inlineDocument</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature">IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inlineDocumentInput`<sup>Optional</sup> <a name="inlineDocumentInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.property.inlineDocumentInput"></a>

```java
public java.lang.String getInlineDocumentInput();
```

- *Type:* java.lang.String

---

##### `inlineDocument`<sup>Required</sup> <a name="inlineDocument" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.property.inlineDocument"></a>

```java
public java.lang.String getInlineDocument();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.property.internalValue"></a>

```java
public IResolvable|IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature">IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature</a>

---


### IotOtaUpdateFilesCodeSigningOutputReference <a name="IotOtaUpdateFilesCodeSigningOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_ota_update.IotOtaUpdateFilesCodeSigningOutputReference;

new IotOtaUpdateFilesCodeSigningOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.putCustomCodeSigning">putCustomCodeSigning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.putStartSigningJobParameter">putStartSigningJobParameter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.resetAwsSignerJobId">resetAwsSignerJobId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.resetCustomCodeSigning">resetCustomCodeSigning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.resetStartSigningJobParameter">resetStartSigningJobParameter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomCodeSigning` <a name="putCustomCodeSigning" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.putCustomCodeSigning"></a>

```java
public void putCustomCodeSigning(IotOtaUpdateFilesCodeSigningCustomCodeSigning value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.putCustomCodeSigning.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning">IotOtaUpdateFilesCodeSigningCustomCodeSigning</a>

---

##### `putStartSigningJobParameter` <a name="putStartSigningJobParameter" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.putStartSigningJobParameter"></a>

```java
public void putStartSigningJobParameter(IotOtaUpdateFilesCodeSigningStartSigningJobParameter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.putStartSigningJobParameter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameter">IotOtaUpdateFilesCodeSigningStartSigningJobParameter</a>

---

##### `resetAwsSignerJobId` <a name="resetAwsSignerJobId" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.resetAwsSignerJobId"></a>

```java
public void resetAwsSignerJobId()
```

##### `resetCustomCodeSigning` <a name="resetCustomCodeSigning" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.resetCustomCodeSigning"></a>

```java
public void resetCustomCodeSigning()
```

##### `resetStartSigningJobParameter` <a name="resetStartSigningJobParameter" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.resetStartSigningJobParameter"></a>

```java
public void resetStartSigningJobParameter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.customCodeSigning">customCodeSigning</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference">IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.startSigningJobParameter">startSigningJobParameter</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference">IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.awsSignerJobIdInput">awsSignerJobIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.customCodeSigningInput">customCodeSigningInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning">IotOtaUpdateFilesCodeSigningCustomCodeSigning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.startSigningJobParameterInput">startSigningJobParameterInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameter">IotOtaUpdateFilesCodeSigningStartSigningJobParameter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.awsSignerJobId">awsSignerJobId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigning">IotOtaUpdateFilesCodeSigning</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customCodeSigning`<sup>Required</sup> <a name="customCodeSigning" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.customCodeSigning"></a>

```java
public IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference getCustomCodeSigning();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference">IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference</a>

---

##### `startSigningJobParameter`<sup>Required</sup> <a name="startSigningJobParameter" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.startSigningJobParameter"></a>

```java
public IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference getStartSigningJobParameter();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference">IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference</a>

---

##### `awsSignerJobIdInput`<sup>Optional</sup> <a name="awsSignerJobIdInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.awsSignerJobIdInput"></a>

```java
public java.lang.String getAwsSignerJobIdInput();
```

- *Type:* java.lang.String

---

##### `customCodeSigningInput`<sup>Optional</sup> <a name="customCodeSigningInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.customCodeSigningInput"></a>

```java
public IResolvable|IotOtaUpdateFilesCodeSigningCustomCodeSigning getCustomCodeSigningInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning">IotOtaUpdateFilesCodeSigningCustomCodeSigning</a>

---

##### `startSigningJobParameterInput`<sup>Optional</sup> <a name="startSigningJobParameterInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.startSigningJobParameterInput"></a>

```java
public IResolvable|IotOtaUpdateFilesCodeSigningStartSigningJobParameter getStartSigningJobParameterInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameter">IotOtaUpdateFilesCodeSigningStartSigningJobParameter</a>

---

##### `awsSignerJobId`<sup>Required</sup> <a name="awsSignerJobId" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.awsSignerJobId"></a>

```java
public java.lang.String getAwsSignerJobId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.internalValue"></a>

```java
public IResolvable|IotOtaUpdateFilesCodeSigning getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigning">IotOtaUpdateFilesCodeSigning</a>

---


### IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference <a name="IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_ota_update.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference;

new IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.putS3Destination">putS3Destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.resetS3Destination">resetS3Destination</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3Destination` <a name="putS3Destination" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.putS3Destination"></a>

```java
public void putS3Destination(IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.putS3Destination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination</a>

---

##### `resetS3Destination` <a name="resetS3Destination" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.resetS3Destination"></a>

```java
public void resetS3Destination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.property.s3Destination">s3Destination</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.property.s3DestinationInput">s3DestinationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3Destination`<sup>Required</sup> <a name="s3Destination" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.property.s3Destination"></a>

```java
public IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference getS3Destination();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference</a>

---

##### `s3DestinationInput`<sup>Optional</sup> <a name="s3DestinationInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.property.s3DestinationInput"></a>

```java
public IResolvable|IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination getS3DestinationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.property.internalValue"></a>

```java
public IResolvable|IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination</a>

---


### IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference <a name="IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_ota_update.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference;

new IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.resetBucket"></a>

```java
public void resetBucket()
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.internalValue"></a>

```java
public IResolvable|IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination</a>

---


### IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference <a name="IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_ota_update.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference;

new IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.putDestination">putDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.putSigningProfileParameter">putSigningProfileParameter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.resetDestination">resetDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.resetSigningProfileName">resetSigningProfileName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.resetSigningProfileParameter">resetSigningProfileParameter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestination` <a name="putDestination" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.putDestination"></a>

```java
public void putDestination(IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.putDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination</a>

---

##### `putSigningProfileParameter` <a name="putSigningProfileParameter" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.putSigningProfileParameter"></a>

```java
public void putSigningProfileParameter(IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.putSigningProfileParameter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter">IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter</a>

---

##### `resetDestination` <a name="resetDestination" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.resetDestination"></a>

```java
public void resetDestination()
```

##### `resetSigningProfileName` <a name="resetSigningProfileName" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.resetSigningProfileName"></a>

```java
public void resetSigningProfileName()
```

##### `resetSigningProfileParameter` <a name="resetSigningProfileParameter" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.resetSigningProfileParameter"></a>

```java
public void resetSigningProfileParameter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.signingProfileParameter">signingProfileParameter</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference">IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.destinationInput">destinationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.signingProfileNameInput">signingProfileNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.signingProfileParameterInput">signingProfileParameterInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter">IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.signingProfileName">signingProfileName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameter">IotOtaUpdateFilesCodeSigningStartSigningJobParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.destination"></a>

```java
public IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference getDestination();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference</a>

---

##### `signingProfileParameter`<sup>Required</sup> <a name="signingProfileParameter" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.signingProfileParameter"></a>

```java
public IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference getSigningProfileParameter();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference">IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference</a>

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.destinationInput"></a>

```java
public IResolvable|IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination getDestinationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination</a>

---

##### `signingProfileNameInput`<sup>Optional</sup> <a name="signingProfileNameInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.signingProfileNameInput"></a>

```java
public java.lang.String getSigningProfileNameInput();
```

- *Type:* java.lang.String

---

##### `signingProfileParameterInput`<sup>Optional</sup> <a name="signingProfileParameterInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.signingProfileParameterInput"></a>

```java
public IResolvable|IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter getSigningProfileParameterInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter">IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter</a>

---

##### `signingProfileName`<sup>Required</sup> <a name="signingProfileName" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.signingProfileName"></a>

```java
public java.lang.String getSigningProfileName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.internalValue"></a>

```java
public IResolvable|IotOtaUpdateFilesCodeSigningStartSigningJobParameter getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameter">IotOtaUpdateFilesCodeSigningStartSigningJobParameter</a>

---


### IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference <a name="IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_ota_update.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference;

new IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.resetCertificateArn">resetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.resetCertificatePathOnDevice">resetCertificatePathOnDevice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.resetPlatform">resetPlatform</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateArn` <a name="resetCertificateArn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.resetCertificateArn"></a>

```java
public void resetCertificateArn()
```

##### `resetCertificatePathOnDevice` <a name="resetCertificatePathOnDevice" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.resetCertificatePathOnDevice"></a>

```java
public void resetCertificatePathOnDevice()
```

##### `resetPlatform` <a name="resetPlatform" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.resetPlatform"></a>

```java
public void resetPlatform()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.certificateArnInput">certificateArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.certificatePathOnDeviceInput">certificatePathOnDeviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.platformInput">platformInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.certificatePathOnDevice">certificatePathOnDevice</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.platform">platform</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter">IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateArnInput`<sup>Optional</sup> <a name="certificateArnInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.certificateArnInput"></a>

```java
public java.lang.String getCertificateArnInput();
```

- *Type:* java.lang.String

---

##### `certificatePathOnDeviceInput`<sup>Optional</sup> <a name="certificatePathOnDeviceInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.certificatePathOnDeviceInput"></a>

```java
public java.lang.String getCertificatePathOnDeviceInput();
```

- *Type:* java.lang.String

---

##### `platformInput`<sup>Optional</sup> <a name="platformInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.platformInput"></a>

```java
public java.lang.String getPlatformInput();
```

- *Type:* java.lang.String

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.certificateArn"></a>

```java
public java.lang.String getCertificateArn();
```

- *Type:* java.lang.String

---

##### `certificatePathOnDevice`<sup>Required</sup> <a name="certificatePathOnDevice" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.certificatePathOnDevice"></a>

```java
public java.lang.String getCertificatePathOnDevice();
```

- *Type:* java.lang.String

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.platform"></a>

```java
public java.lang.String getPlatform();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.internalValue"></a>

```java
public IResolvable|IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter">IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter</a>

---


### IotOtaUpdateFilesFileLocationOutputReference <a name="IotOtaUpdateFilesFileLocationOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_ota_update.IotOtaUpdateFilesFileLocationOutputReference;

new IotOtaUpdateFilesFileLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.putS3Location">putS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.putStream">putStream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.resetS3Location">resetS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.resetStream">resetStream</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3Location` <a name="putS3Location" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.putS3Location"></a>

```java
public void putS3Location(IotOtaUpdateFilesFileLocationS3Location value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.putS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3Location">IotOtaUpdateFilesFileLocationS3Location</a>

---

##### `putStream` <a name="putStream" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.putStream"></a>

```java
public void putStream(IotOtaUpdateFilesFileLocationStream value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.putStream.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStream">IotOtaUpdateFilesFileLocationStream</a>

---

##### `resetS3Location` <a name="resetS3Location" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.resetS3Location"></a>

```java
public void resetS3Location()
```

##### `resetStream` <a name="resetStream" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.resetStream"></a>

```java
public void resetStream()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.property.s3Location">s3Location</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference">IotOtaUpdateFilesFileLocationS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.property.stream">stream</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference">IotOtaUpdateFilesFileLocationStreamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.property.s3LocationInput">s3LocationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3Location">IotOtaUpdateFilesFileLocationS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.property.streamInput">streamInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStream">IotOtaUpdateFilesFileLocationStream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocation">IotOtaUpdateFilesFileLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3Location`<sup>Required</sup> <a name="s3Location" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.property.s3Location"></a>

```java
public IotOtaUpdateFilesFileLocationS3LocationOutputReference getS3Location();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference">IotOtaUpdateFilesFileLocationS3LocationOutputReference</a>

---

##### `stream`<sup>Required</sup> <a name="stream" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.property.stream"></a>

```java
public IotOtaUpdateFilesFileLocationStreamOutputReference getStream();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference">IotOtaUpdateFilesFileLocationStreamOutputReference</a>

---

##### `s3LocationInput`<sup>Optional</sup> <a name="s3LocationInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.property.s3LocationInput"></a>

```java
public IResolvable|IotOtaUpdateFilesFileLocationS3Location getS3LocationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3Location">IotOtaUpdateFilesFileLocationS3Location</a>

---

##### `streamInput`<sup>Optional</sup> <a name="streamInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.property.streamInput"></a>

```java
public IResolvable|IotOtaUpdateFilesFileLocationStream getStreamInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStream">IotOtaUpdateFilesFileLocationStream</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.property.internalValue"></a>

```java
public IResolvable|IotOtaUpdateFilesFileLocation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocation">IotOtaUpdateFilesFileLocation</a>

---


### IotOtaUpdateFilesFileLocationS3LocationOutputReference <a name="IotOtaUpdateFilesFileLocationS3LocationOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_ota_update.IotOtaUpdateFilesFileLocationS3LocationOutputReference;

new IotOtaUpdateFilesFileLocationS3LocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.resetBucket"></a>

```java
public void resetBucket()
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3Location">IotOtaUpdateFilesFileLocationS3Location</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.internalValue"></a>

```java
public IResolvable|IotOtaUpdateFilesFileLocationS3Location getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3Location">IotOtaUpdateFilesFileLocationS3Location</a>

---


### IotOtaUpdateFilesFileLocationStreamOutputReference <a name="IotOtaUpdateFilesFileLocationStreamOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_ota_update.IotOtaUpdateFilesFileLocationStreamOutputReference;

new IotOtaUpdateFilesFileLocationStreamOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.resetFileId">resetFileId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.resetStreamId">resetStreamId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFileId` <a name="resetFileId" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.resetFileId"></a>

```java
public void resetFileId()
```

##### `resetStreamId` <a name="resetStreamId" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.resetStreamId"></a>

```java
public void resetStreamId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.property.fileIdInput">fileIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.property.streamIdInput">streamIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.property.fileId">fileId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.property.streamId">streamId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStream">IotOtaUpdateFilesFileLocationStream</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fileIdInput`<sup>Optional</sup> <a name="fileIdInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.property.fileIdInput"></a>

```java
public java.lang.Number getFileIdInput();
```

- *Type:* java.lang.Number

---

##### `streamIdInput`<sup>Optional</sup> <a name="streamIdInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.property.streamIdInput"></a>

```java
public java.lang.String getStreamIdInput();
```

- *Type:* java.lang.String

---

##### `fileId`<sup>Required</sup> <a name="fileId" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.property.fileId"></a>

```java
public java.lang.Number getFileId();
```

- *Type:* java.lang.Number

---

##### `streamId`<sup>Required</sup> <a name="streamId" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.property.streamId"></a>

```java
public java.lang.String getStreamId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.property.internalValue"></a>

```java
public IResolvable|IotOtaUpdateFilesFileLocationStream getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStream">IotOtaUpdateFilesFileLocationStream</a>

---


### IotOtaUpdateFilesList <a name="IotOtaUpdateFilesList" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_ota_update.IotOtaUpdateFilesList;

new IotOtaUpdateFilesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.get"></a>

```java
public IotOtaUpdateFilesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles">IotOtaUpdateFiles</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IotOtaUpdateFiles> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles">IotOtaUpdateFiles</a>>

---


### IotOtaUpdateFilesOutputReference <a name="IotOtaUpdateFilesOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_ota_update.IotOtaUpdateFilesOutputReference;

new IotOtaUpdateFilesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.putCodeSigning">putCodeSigning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.putFileLocation">putFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.resetCodeSigning">resetCodeSigning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.resetFileLocation">resetFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.resetFileName">resetFileName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.resetFileType">resetFileType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.resetFileVersion">resetFileVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCodeSigning` <a name="putCodeSigning" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.putCodeSigning"></a>

```java
public void putCodeSigning(IotOtaUpdateFilesCodeSigning value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.putCodeSigning.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigning">IotOtaUpdateFilesCodeSigning</a>

---

##### `putFileLocation` <a name="putFileLocation" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.putFileLocation"></a>

```java
public void putFileLocation(IotOtaUpdateFilesFileLocation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.putFileLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocation">IotOtaUpdateFilesFileLocation</a>

---

##### `resetAttributes` <a name="resetAttributes" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.resetAttributes"></a>

```java
public void resetAttributes()
```

##### `resetCodeSigning` <a name="resetCodeSigning" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.resetCodeSigning"></a>

```java
public void resetCodeSigning()
```

##### `resetFileLocation` <a name="resetFileLocation" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.resetFileLocation"></a>

```java
public void resetFileLocation()
```

##### `resetFileName` <a name="resetFileName" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.resetFileName"></a>

```java
public void resetFileName()
```

##### `resetFileType` <a name="resetFileType" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.resetFileType"></a>

```java
public void resetFileType()
```

##### `resetFileVersion` <a name="resetFileVersion" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.resetFileVersion"></a>

```java
public void resetFileVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.codeSigning">codeSigning</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference">IotOtaUpdateFilesCodeSigningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileLocation">fileLocation</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference">IotOtaUpdateFilesFileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.attributesInput">attributesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.codeSigningInput">codeSigningInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigning">IotOtaUpdateFilesCodeSigning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileLocationInput">fileLocationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocation">IotOtaUpdateFilesFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileNameInput">fileNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileTypeInput">fileTypeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileVersionInput">fileVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.attributes">attributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileName">fileName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileType">fileType</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileVersion">fileVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles">IotOtaUpdateFiles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `codeSigning`<sup>Required</sup> <a name="codeSigning" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.codeSigning"></a>

```java
public IotOtaUpdateFilesCodeSigningOutputReference getCodeSigning();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference">IotOtaUpdateFilesCodeSigningOutputReference</a>

---

##### `fileLocation`<sup>Required</sup> <a name="fileLocation" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileLocation"></a>

```java
public IotOtaUpdateFilesFileLocationOutputReference getFileLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference">IotOtaUpdateFilesFileLocationOutputReference</a>

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.attributesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAttributesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `codeSigningInput`<sup>Optional</sup> <a name="codeSigningInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.codeSigningInput"></a>

```java
public IResolvable|IotOtaUpdateFilesCodeSigning getCodeSigningInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigning">IotOtaUpdateFilesCodeSigning</a>

---

##### `fileLocationInput`<sup>Optional</sup> <a name="fileLocationInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileLocationInput"></a>

```java
public IResolvable|IotOtaUpdateFilesFileLocation getFileLocationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocation">IotOtaUpdateFilesFileLocation</a>

---

##### `fileNameInput`<sup>Optional</sup> <a name="fileNameInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileNameInput"></a>

```java
public java.lang.String getFileNameInput();
```

- *Type:* java.lang.String

---

##### `fileTypeInput`<sup>Optional</sup> <a name="fileTypeInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileTypeInput"></a>

```java
public java.lang.Number getFileTypeInput();
```

- *Type:* java.lang.Number

---

##### `fileVersionInput`<sup>Optional</sup> <a name="fileVersionInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileVersionInput"></a>

```java
public java.lang.String getFileVersionInput();
```

- *Type:* java.lang.String

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.attributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileName"></a>

```java
public java.lang.String getFileName();
```

- *Type:* java.lang.String

---

##### `fileType`<sup>Required</sup> <a name="fileType" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileType"></a>

```java
public java.lang.Number getFileType();
```

- *Type:* java.lang.Number

---

##### `fileVersion`<sup>Required</sup> <a name="fileVersion" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileVersion"></a>

```java
public java.lang.String getFileVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.internalValue"></a>

```java
public IResolvable|IotOtaUpdateFiles getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles">IotOtaUpdateFiles</a>

---


### IotOtaUpdateTagsList <a name="IotOtaUpdateTagsList" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_ota_update.IotOtaUpdateTagsList;

new IotOtaUpdateTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.get"></a>

```java
public IotOtaUpdateTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTags">IotOtaUpdateTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IotOtaUpdateTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTags">IotOtaUpdateTags</a>>

---


### IotOtaUpdateTagsOutputReference <a name="IotOtaUpdateTagsOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_ota_update.IotOtaUpdateTagsOutputReference;

new IotOtaUpdateTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTags">IotOtaUpdateTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|IotOtaUpdateTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTags">IotOtaUpdateTags</a>

---



